#include <iostream>
#include <bits/stdc++.h>
#include <fstream>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <chrono>
#include <memory>
#include <queue>

using namespace std;
using namespace chrono;

class MaxCliqueFinder {
    vector<vector<int>> adj;
    vector<int> deg_order;
    vector<vector<int>> cliques;
    int node_count = 0;
    
public:
    MaxCliqueFinder(const string& file) {
        loadGraph(file);
        compOrder();
    }

    void loadGraph(const string& file) {
        unordered_map<string, int> node_map;
        vector<pair<int, int>> edges;
        ifstream fs(file);
        string from, to;

        // Read edges and create integer mappings
        while (fs >> from >> to) {
            if (!node_map.count(from)) node_map[from] = node_count++;
            if (!node_map.count(to)) node_map[to] = node_count++;
            int u = node_map[from];
            int v = node_map[to];
            edges.emplace_back(u, v);
            edges.emplace_back(v, u); // Convert to undirected graph
        }

        // Build adjacency list
        adj.resize(node_count);
        for (const auto& edge : edges) {
            int u = edge.first;
            int v = edge.second;
            adj[u].push_back(v);
            adj[v].push_back(u); // Ensure undirected graph
        }

        // Sort and remove duplicates
        for (auto& neighbors : adj) {
            sort(neighbors.begin(), neighbors.end());
            auto last = unique(neighbors.begin(), neighbors.end());
            neighbors.erase(last, neighbors.end());
        }
    }

    void compOrder() {
        int n = node_count;
        vector<int> degree(n);
        vector<vector<int>> degree_buckets(n);
        vector<bool> removed(n, false);
        vector<int> position(n); // Track position of each node in its bucket

        // Initialize degrees and buckets
        for (int i = 0; i < n; ++i) {
            degree[i] = adj[i].size();
            position[i] = degree_buckets[degree[i]].size();
            degree_buckets[degree[i]].push_back(i);
        }

        deg_order.reserve(n);
        int current_degree = 0;

        for (int i = 0; i < n; ++i) {
            // Find the first non-empty bucket
            while (current_degree < n && degree_buckets[current_degree].empty()) {
                current_degree++;
            }
            
            if (current_degree >= n) break; // Safety check
            
            int v = degree_buckets[current_degree].back();
            degree_buckets[current_degree].pop_back();
            
            if (removed[v]) continue;
            
            deg_order.push_back(v);
            removed[v] = true;
            
            // Update neighbors' degrees
            for (int u : adj[v]) {
                if (!removed[u]) {
                    // Remove u from its current degree bucket and add to degree-1 bucket
                    if (degree[u] > current_degree) {
                        int old_deg = degree[u];
                        int old_pos = position[u];
                        
                        // Only process if the node is still in its expected position
                        if (old_pos < degree_buckets[old_deg].size() && 
                            degree_buckets[old_deg][old_pos] == u) {
                            
                            // Swap with the last element and pop
                            if (old_pos != degree_buckets[old_deg].size() - 1) {
                                int last_node = degree_buckets[old_deg].back();
                                degree_buckets[old_deg][old_pos] = last_node;
                                position[last_node] = old_pos;
                            }
                            degree_buckets[old_deg].pop_back();
                            
                            // Add to new bucket
                            degree[u]--;
                            position[u] = degree_buckets[degree[u]].size();
                            degree_buckets[degree[u]].push_back(u);
                        }
                    }
                }
            }
            current_degree = max(current_degree - 1, 0);
        }
        
        reverse(deg_order.begin(), deg_order.end());
    }

    void bronkerboschPivot(vector<int>& R, vector<int> P, vector<int> X) {
        if (P.empty() && X.empty()) {
            cliques.push_back(R);
            return;
        }

        // Select pivot from P ∪ X to maximize coverage
        int max_connections = -1;
        int pivot = -1;
        
        // Choose pivot with most connections to P
        for (int candidate : P) {
            int connections = 0;
            for (int v : P) {
                if (binary_search(adj[candidate].begin(), adj[candidate].end(), v)) {
                    connections++;
                }
            }
            if (connections > max_connections) {
                max_connections = connections;
                pivot = candidate;
            }
        }
        
        for (int candidate : X) {
            int connections = 0;
            for (int v : P) {
                if (binary_search(adj[candidate].begin(), adj[candidate].end(), v)) {
                    connections++;
                }
            }
            if (connections > max_connections) {
                max_connections = connections;
                pivot = candidate;
            }
        }
        
        // Find vertices in P that are not neighbors of pivot
        vector<int> non_neighbors;
        for (int v : P) {
            if (pivot == -1 || !binary_search(adj[pivot].begin(), adj[pivot].end(), v)) {
                non_neighbors.push_back(v);
            }
        }

        for (int v : non_neighbors) {
            vector<int> newR = R;
            newR.push_back(v);
            
            // Calculate intersections
            vector<int> newP, newX;
            for (int u : P) {
                if (binary_search(adj[v].begin(), adj[v].end(), u)) {
                    newP.push_back(u);
                }
            }
            
            for (int u : X) {
                if (binary_search(adj[v].begin(), adj[v].end(), u)) {
                    newX.push_back(u);
                }
            }
            
            bronkerboschPivot(newR, newP, newX);
            
            // Move v from P to X
            P.erase(remove(P.begin(), P.end(), v), P.end());
            X.push_back(v);
        }
    }

    void findCliques() {
        vector<bool> processed(node_count, false);
        
        for (int v : deg_order) {
            vector<int> later_nbrs, earlier_nbrs;
            
            for (int u : adj[v]) {
                if (!processed[u]) later_nbrs.push_back(u);
                else earlier_nbrs.push_back(u);
            }
            
            vector<int> R = {v};
            bronkerboschPivot(R, later_nbrs, earlier_nbrs);
            processed[v] = true;
        }
    }

    void runAnalysis() {
        auto start = high_resolution_clock::now();
        findCliques();
        auto end = high_resolution_clock::now();
        
        auto duration = duration_cast<milliseconds>(end - start);
        cout << "Dataset Analysis:\n";
        cout << "Nodes: " << node_count << "\n";
        cout << "Edges: " << accumulate(adj.begin(), adj.end(), 0, 
            [](int sum, const vector<int>& v) { return sum + v.size(); }) / 2 << "\n";
        cout << "Maximal Cliques Found: " << cliques.size() << "\n";
        cout << "Execution Time: " << duration.count() << " ms\n";
        
        // Output clique sizes to a file for histogram creation
        ofstream fs("clique_sizes.txt");
        vector<int> clique_sizes;
        for (const auto& clique : cliques) {
            clique_sizes.push_back(clique.size());
            fs << clique.size() << "\n";
        }
        fs.close();
        
        // Print clique size distribution
        cout << "Clique Size Distribution:\n";
        map<int, int> size_distribution;
        for (int size : clique_sizes) {
            size_distribution[size]++;
        }
        for (const auto& pair : size_distribution) {
            cout << "Size " << pair.first << ": " << pair.second << " cliques\n";
        }
    }
};

int main(int argc, char* argv[]) {
    // Run analysis on wiki-Vote dataset
    // First, you need to download and extract Wiki-Vote.txt.gz
    // Then, run the program with the extracted file
    MaxCliqueFinder finder(argv[1]);
    finder.runAnalysis();
    
    return 0;
}
