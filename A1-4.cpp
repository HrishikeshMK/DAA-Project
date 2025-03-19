#include <bits/stdc++.h>
using namespace std;
using namespace chrono;

// Structs
struct Graph{
    vector<vector<int>> adjList;
    vector<bool> vertexExists; // vertexExists[i] = true if vertex i exists
    int maxVertex = 0; // highest vertex id in graph
};

// Global Variables
Graph G;
vector<int> clique;
unordered_map<int, int> clique_dist;
int maxCliqueSize = 0;
// Function Definitions
// Function to find the vertex in the subgraph that maximises adjacency with the candidate set
int maximize(const unordered_set<int>& subg, const unordered_set<int>& cand){
    int maxc = -1, u = -1;
    for(int vertex : subg){
        int currc = 0;
        const auto& bigGamma = G.adjList[vertex]; // No need to copy, just use pointer hence saves a lot of time        
        // if cand set is very large, set intersection is done using approx linear search on integers from bigGamma
        // if cand set is small, set intersection is done using binary search on sorted bigGamma
        if(cand.size() > bigGamma.size()*log2(cand.size())){
            for(int i : bigGamma){
                if(cand.find(i) != cand.end()){
                    currc++;
                }
            }
        }else{
            for(int i : cand){
                if(binary_search(bigGamma.begin(), bigGamma.end(), i))
                    currc++;
            }
        }
        if(currc > maxc){
            maxc = currc;
            u = vertex;
        }
    }
    return u;
}

/* // Function to get adjacent vertices (neighbors) of a vertex
// Returns by value but avoids recreating the set each time
inline unordered_set<int> getNeighbors(int vertex){
    if(vertex == -1) return {};
    return {G.adjList[vertex].begin(), G.adjList[vertex].end()};
} */

// Helper function
void expand(const unordered_set<int>& subg, unordered_set<int> cand, int& count, vector<vector<int>>& allCliques, int& currCliqueSize){
    // Iterative version which counts the number of cliques
    // 2
    /* stack<tuple<unordered_set<int>, unordered_set<int>>> st;
    st.push({subg, cand});
    while(!st.empty()){
        auto [subg, cand] = st.top();
        st.pop();
        if(subg.empty()){
            count++;
            // cout<<"clique.\n"; // 3
            // allCliques.push_back({clique.begin(), clique.end()});
            if(count % 1000 == 0){
                cout << "\rCliques found: " << count << flush;
            }
            continue;
        } 
        int u = maximize(subg, cand); // 4
        
        unordered_set<int> ext_u = cand;
        const auto& gamma_u = G.adjList[u];
        for(int neighbor : gamma_u){
            ext_u.erase(neighbor);
        }

        // 5
        for(auto i = ext_u.begin(); i != ext_u.end();){ 
            int q = *i; // 6
            // cout<<q<<", "; // 7
            i = ext_u.erase(i); // 11
            
            const auto& bigGamma_q = G.adjList[q];
            unordered_set<int> subg_q, cand_q; 
            // Reserve capacity to avoid rehashing
            subg_q.reserve(min(subg.size(), bigGamma_q.size()));
            cand_q.reserve(min(cand.size(), bigGamma_q.size()));
            for(int v : bigGamma_q){
                if(subg.find(v) != subg.end()) subg_q.insert(v); // 8
                if(cand.find(v) != cand.end()) cand_q.insert(v); // 9
            } 
            st.push({subg_q, cand_q});
            cand.erase(q); // 11
        }
    } */

    // Recursive version which can store and print cliques

    if(subg.empty()){
        count++;
        maxCliqueSize = max(maxCliqueSize, currCliqueSize);
        if(clique_dist.find(currCliqueSize) == clique_dist.end())
            clique_dist[currCliqueSize] = 1;
        else 
            clique_dist[currCliqueSize]++;
        // cout<<"clique.\n"; // 3
        // allCliques.push_back({clique.begin(), clique.end()});
        if(count % 1000 == 0){
            cout << "\rCliques found: " << count << flush;
        }
        return;
    } 
    int u = maximize(subg, cand); // 4
    
    unordered_set<int> ext_u = cand;
    const auto& gamma_u = G.adjList[u];
    for(int neighbor : gamma_u){
        ext_u.erase(neighbor);
    }

    // 5
    for(auto i = ext_u.begin(); i != ext_u.end();){ 
        int q = *i; // 6
        // cout<<q<<", "; // 7
        // clique.push_back(q); // 7
        currCliqueSize++;
        i = ext_u.erase(i); // 11
        
        const auto& bigGamma_q = G.adjList[q];
        unordered_set<int> subg_q, cand_q; 
        subg_q.reserve(min(subg.size(), bigGamma_q.size()));
        cand_q.reserve(min(cand.size(), bigGamma_q.size()));
        for(int v : bigGamma_q){
            if(subg.find(v) != subg.end()) subg_q.insert(v); // 8
            if(cand.find(v) != cand.end()) cand_q.insert(v); // 9
        } 
        expand(subg_q, cand_q, count, allCliques, currCliqueSize); // 10
        cand.erase(q); // 11
        // cout<<"back, "; // 12
        currCliqueSize--;
        // clique.pop_back(); // 13
    }
}

// Main function to find all maximal cliques
void cliques(){
    int count = 0;
    vector<vector<int>> allCliques; // To store all cliques
    
    unordered_set<int> vertices;
    for(int i = 0; i <= G.maxVertex; i++){
        if(G.vertexExists[i]) vertices.insert(i);
    }
    for(auto& i : G.adjList)
        sort(i.begin(), i.end());
    
    cout << "Finding maximal cliques...\n";
    
    auto start = high_resolution_clock::now(); // Start timer
    int currCliqueSize = 0;
    expand(vertices, vertices, count, allCliques, currCliqueSize); // 1
    auto stop = high_resolution_clock::now(); // Stop timer
    
    
    cout << "\nTotal # of maximal cliques found: " << count << endl;
    cout << "Maximum clique size: " << maxCliqueSize << endl;
    
    auto duration = duration_cast<milliseconds>(stop - start);
    cout << "Time taken: " << duration.count() / 1000.0 << " seconds.\n";
}

int main() {
    // Open File containing Graph
    string filename;
    cout<< "Enter file name: ";
    cin>> filename;
    filename.append(".txt"); 
    ifstream ifs(filename);
    if(!ifs){
        cerr << "Error: Unable to open file!" << endl;
        return 1;
    }

    string line;
    bool startReading = false;
    int maxVertex = 0;
    
    // First pass to find the maximum node ID
    while(getline(ifs, line)){
        if(line.find("# Nodes: ") != string::npos){
            istringstream iss(line);
            string a, b;
            int nodes;
            if(iss >> a >> b >> nodes)
                maxVertex = nodes;
        }else if(startReading || line == "# FromNodeId\tToNodeId"){
            startReading = true; 
            if(line == "# FromNodeId\tToNodeId") continue;
            
            istringstream iss(line);
            int u, v;
            if(iss >> u >> v)
                maxVertex = max(maxVertex, max(u, v));
        }
    }
    
    // Reset file pointer to beginning and resize graph
    ifs.clear();
    ifs.seekg(0, ios::beg);
    
    G.adjList.resize(maxVertex + 1);
    G.vertexExists.resize(maxVertex + 1, false);
    G.maxVertex = maxVertex;
    
    // Build Graph
    startReading = false;
    while(getline(ifs, line)){
        if(!startReading && line == "# FromNodeId\tToNodeId"){
            startReading = true;
            cout << "Reading edges..." << endl;
            continue;
        }
        if(startReading){
            istringstream iss(line);
            int u, v;
            if(iss >> u >> v){
                G.vertexExists[u] = true;
                G.vertexExists[v] = true;
                G.adjList[u].push_back(v);
                G.adjList[v].push_back(u);
            }
        }
    }
    
    ifs.close();
    cout << "Graph loaded successfully with " << maxVertex << " nodes." << endl;
    
    // Remove duplicate edges
    for (auto& i : G.adjList) {
        sort(i.begin(), i.end());
        i.erase(unique(i.begin(), i.end()), i.end());
    }
    
    cliques();

    cout << "Clique size distribution:\n";
    for(auto i: clique_dist){
        cout << "Clique size: " << i.first << " Count: " << i.second << endl;
    }
    return 0;
}