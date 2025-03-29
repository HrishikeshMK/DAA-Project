# DAA Assignment - 1
# Maximal Clique Enumeration
### Visit Project page for results - https://hrishikeshmk.github.io/DAA-Project/
## 1. Introduction
#### A clique in graph theory, is a set of vertices in a graph G(V, E) such that each vertex is adjacent to every other vertex in the set, or a fully connected subgraph.
#### Maximal Cliques are cliques having a set of vertices such that they are not a subset of any other cliques. i.e. for a maximal clique M, there is no fully connected subgraph of G that has M as a subgraph.  
### Applications
* **Social Network Analysis**: Cliques can model groups of people who all know each other, providing insights into social structures. 
* **Bioinformatics**: Finding cliques can help identify closely interacting clusters of proteins or infer evolutionary trees. 
* **Computer Science**: Algorithms for finding cliques are used in tasks like automatic test pattern generation and bounding the size of test sets. 
* **Mathematics**: Cliques have been used in problems like Keller's conjecture on face-to-face tiling of hypercubes. 
## 2. How to 
#### 1. Tomita's Algorithm
* Compile the file using ```g++ tomita.cpp -o tomita```
* Run the out file using ```./tomita``` (in linux) or ```tomita.exe``` (in windows)
* Enter filenames of graph (.txt files)
#### 2. ELS Algorithm
#### 3. Chiba's Algorithm
## 3. Algorithms
### Following are the algorithms implemented by us in C++ and the papers of the authors
#### 1. Tomita's Algorithm - https://snap.stanford.edu/class/cs224w-readings/tomita06cliques.pdf
#### 2. ELS Algorithm - https://arxiv.org/pdf/1006.5440
#### 3. Chiba's Algorithm - https://www.cs.cornell.edu/courses/cs6241/2019sp/readings/Chiba-1985-arboricity.pdf
## 4. Datasets
### Download the graph datasets from the links below
#### 1. Wiki-Votes - https://snap.stanford.edu/data/wiki-Vote.html
#### 2. Email-Enron - https://snap.stanford.edu/data/email-Enron.html
#### 3. as-Skitter - https://snap.stanford.edu/data/as-Skitter.html
## 5. Members
#### 1. Ashish C - Implemented Chiba's Algorithm
#### 2. Harinandan Arun - Implemented Chiba's Algorithm
#### 3. Hrishikesh MK - Implemented Tomita's Algorithm and contributed to project page
#### 4. Satya K - Implemented ELS Algorithm
#### 5. Yuvraj Chauhan - Contributed to project page
