const readline = require('readline-sync')

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class doublell{
    constructor(head){
        this.head = null;
    }

add(head){
    let node  = new Node(head)
    let temp; 
    if(this.head==null){
        this.head = node;
    }
    else{
        temp = this.head;
        while(temp.right!=null){
            temp = temp.right;
        }
        temp.right = node;                     
        node.left = temp.right
        node.right = null;
    }
   //console.log(node.data);
}

display(){
    let temp = this.head;
    while(temp.right!=null){
        console.log(temp.data);
        temp = temp.right
    }
    console.log(temp.data); //to print last element 
}
}

let node1 = new doublell() //creating object(node) instance
let x;
do{  //execute once
    x = readline.question("Enter the number")
    if(x>=0){
        node1.add(x)
    }
}while(x>0)  //negative checking 

node1.display()