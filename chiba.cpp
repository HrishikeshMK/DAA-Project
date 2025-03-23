#include <iostream>
#include <vector>
#include <algorithm>
#include <set>
#include <fstream>

using namespace std;

class Graph {
private:
    int n;
    vector<vector<int>> adj;

public:
    Graph(int nodes) {
        n = nodes;
        adj.resize(n + 1);
    }

    void addEdge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    vector<vector<int>>& getAdjList() {
        return adj;
    }

    int getVertexCount() {
        return n;
    }

    set<int> getNeighbors(int v) {
        return set<int>(adj[v].begin(), adj[v].end());
    }
};

// Function to input file path
void inputFilePath(string& path) {
    cout << "Enter file path: ";
    cin >> path;
}

class CliqueAlgorithm {
private:
    Graph& graph;
    vector<int> sortedVertices;
    vector<set<int>> cliques;

    void sortVerticesByDegree() {
        int n = graph.getVertexCount();
        vector<pair<int, int>> vertices;
        
        for (int i = 1; i <= n; i++) {
            vertices.push_back({i, graph.getAdjList()[i].size()});
        }
        
        sort(vertices.begin(), vertices.end(), 
             [](const pair<int, int>& a, const pair<int, int>& b) {
                 return a.second < b.second;
             });

        sortedVertices.clear();
        for (auto& p : vertices) {
            sortedVertices.push_back(p.first);
        }
    }

    void UPDATE(int i, set<int> C) {
        if (i > graph.getVertexCount()) {
            cliques.push_back(C);
            return;
        }

        set<int> neighbors = graph.getNeighbors(i);
        set<int> diff;

        // STEP 1: If C - N(i) != phi, then UPDATE(i+1,C)
        for (int v : C) {
            if (neighbors.find(v) == neighbors.end()) {
                diff.insert(v);
            }
        }

        if (!diff.empty()) {
            UPDATE(i + 1, C);
        }

        // Prepare for tests: computing T[y]
        vector<int> T(graph.getVertexCount() + 1, 0);
        vector<int> S(graph.getVertexCount() + 1, 0);

        // Compute T[y] for all y ∈ V - C - {i}
        for (int y = 1; y <= graph.getVertexCount(); y++) {
            if (C.find(y) == C.end() && y != i) {
                T[y] = count_if(C.begin(), C.end(), [&](int v) {
                    return graph.getNeighbors(y).count(v) && graph.getNeighbors(i).count(v);
                });
            }
        }

        // STEP 2: For each vertex x ∈ C ∩ N(i)
        for (int x : C) {
            if (graph.getNeighbors(i).count(x)) {  
                for (int y : graph.getNeighbors(x)) {
                    if (C.find(y) == C.end() && y != i) {  
                        T[y] += 1;
                    }
                }
            }
        }

        // Compute S[y] for all y ∈ V - C
        for (int y = 1; y <= graph.getVertexCount(); y++) {
            if (C.find(y) == C.end()) {
                S[y] = count_if(graph.getNeighbors(y).begin(), graph.getNeighbors(y).end(), [&](int v) {
                    return C.count(v) && !graph.getNeighbors(i).count(v);
                });
            }
        }

        // STEP 3: Update S[y] for all y ∈ N(x) - C, where x ∈ C - N(i)
        for (int x : C) {
            if (!graph.getNeighbors(i).count(x)) {  
                for (int y : graph.getNeighbors(x)) {
                    if (C.find(y) == C.end()) {  
                        S[y] += 1;
                    }
                }
            }
        }

        // Set flag
        bool FLAG = true;

        // STEP 4: Maximality Test: Check if there exists y ∈ N(i) - C such that y < i and T[y] = |C ∩ N(i)|
        for (int y : graph.getNeighbors(i)) {  
            if (C.find(y) == C.end() && y < i) {  
                int C_intersection_Ni = count_if(C.begin(), C.end(), [&](int v) {
                    return graph.getNeighbors(i).count(v);  
                });

                if (T[y] == C_intersection_Ni) {  
                    FLAG = false;  
                    break;
                }
            }
        }        

        // STEP 5: Sort vertices in C - N(i) in ascending order j1 < j2 < ... < jp
        vector<int> C_minus_Ni;
        for (int v : C) {
            if (!graph.getNeighbors(i).count(v)) { 
                C_minus_Ni.push_back(v);
            }
        }
        sort(C_minus_Ni.begin(), C_minus_Ni.end());
        int p = C_minus_Ni.size(); 

        // STEP 6: Iterate over k = 1 to p
        for (int k = 1; k <= p; k++) {
            int jk = C_minus_Ni[k - 1]; 

            for (int y : graph.getNeighbors(jk)) {
                if (C.find(y) == C.end() && y < i && T[y] == (int)count_if(C.begin(), C.end(), [&](int v) {
                    return graph.getNeighbors(i).count(v);
                })) {
                    if (y >= jk) {
                        S[y] = S[y] - 1; 
                    } else {
                        if (k == 1 || C_minus_Ni[k - 2] < jk) {  
                            S[y] = S[y];  
                        }
                        if (S[y] + k - 1 == p && y >= (k > 1 ? C_minus_Ni[k - 2] : 0)) {
                            FLAG = false;  
                            return;
                        }
                    }
                }
            }
        }

        // STEP 10:
        if (FLAG) {
            set<int> SAVE;
            for (int x : C) {
                if (graph.getNeighbors(i).count(x) == 0) {
                    SAVE.insert(x);
                }
            }
            set<int> intersect;
            for (int x : C) {
                if (graph.getNeighbors(i).count(x)) {
                    intersect.insert(x);
                }
            }
            C.clear();
            C.insert(intersect.begin(), intersect.end());
            C.insert(i);

            UPDATE(i + 1, C);

            C.erase(i);
            C.insert(SAVE.begin(), SAVE.end());
        }
    }

public:
    CliqueAlgorithm(Graph& g) : graph(g) {
        sortVerticesByDegree();
    }

    void findCliques() {
        set<int> C = {sortedVertices[0]};
        UPDATE(2, C);
    }

    void printCliques() {
        cout << "Maximal Cliques:\n";
        for (const auto& clique : cliques) {
            cout << "{ ";
            for (int v : clique) {
                cout << v << " ";
            }
            cout << "}\n";
        }
    }
};

int main() {
    string path;
    inputFilePath(path);

    ifstream file(path);
    if (!file) {
        cerr << "Error opening file: " << path << endl;
        return 1;
    }

    int n, u, v;
    file >> n;
    Graph g(n);

    while (file >> u >> v) {
        g.addEdge(u, v);
    }
    file.close();

    CliqueAlgorithm algorithm(g);
    algorithm.findCliques();
    algorithm.printCliques();

    return 0;
}
