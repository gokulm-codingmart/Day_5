const readline = require('readline-sync')

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class ClinkedList{
    constructor(head){
        this.head=null
    }

add(data){
    let node = new Node(data)
    let temp;

    if(this.head==null){
        this.head = node
        node.next = this.head
    }
    else{
        temp = this.head
        while(temp.next!=this.head){
            temp = temp.next
        }
            temp.next = node
            node.next = this.head;
    }
    
}

display(){
    let temp = this.head

    while(temp.next!=this.head){
        console.log(temp.data)
        temp = temp.next
    }
    console.log(temp.data)
}
}

let cll = new ClinkedList()
let x;
do{
    x = readline.question("Enter the number");
    if(x>=0){
        cll.add(x)
    }
}while(x>0)
cll.display()