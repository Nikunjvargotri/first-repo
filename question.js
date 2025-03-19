
//1.

// Time Complexity Analysis of Nested Loops
// int 
c = 0;
for(let  i = 0; i < n; i++) {
    for(let j = i+1; j < m; j++) {
        c++;
    }
}

//--> Object(n*m)----time complexity


//2.

//Nested Loop Analysis
 c = 0;
for( let i = 0; i < n; i++) {
    for(let j = i+1; j < m; j++) {
        c++;
    }
}
Task:
//Analyze the time complexity and explain if it differs from Problem 1.

//Provide a detailed breakdown of how many iterations each loop executes.



//---->  O(n*m) ------time complexity
 




//3.

let n=16
let k=2

for (let i=0; i<=n; i*=2){
    c++
}

//----->  O(logn) --- time complexity




//4.

for(let i = 0; i < n; i++) {
    for(let  j = 0; j < m; j++) {
        cout << "okay";
    }
}

//----> O(n*m)  ---- time complexity