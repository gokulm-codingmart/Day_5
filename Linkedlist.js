const readline = require('readline-sync')
// creation of node part

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//linked list

class linkedList{
    constructor(){
        this.head = null;
    }

// Adding element to the end

add(head){
    let node = new Node(head); //creating instance of node box.

    let temp; //for storing head part if not null

    if(this.head==null){
        this.head = node;
    }
    else{
        temp = this.head;
        //Iterating to the end to add .
        while(temp.next){ 
            temp = temp.next;
        }
        temp.next = node 
    }
}
print(){
    let temp  = this.head;
    while(temp.next!=null){
        console.log(temp.data)
        temp = temp.next
    }
   console.log(temp.data)
}
}

let ll = new linkedList(); // Instance of new object
let l2 = new linkedList();

// ll.add(4)
// //let ll = new linkedList()
// ll.add(2)
// let x; //input
// do{
//    x = readline.question("Enter the input")
//    if(x>=0){
//     ll.add(x)
//    }
// }while(x>0)
// ll.print()
console.log("First list")
ll.add(2) //2 3 4
ll.add(3)
ll.add(2)
ll.print()
console.log("Second list")
l2.add(3)
l2.add(2)
l2.add(3)
l2.print()

