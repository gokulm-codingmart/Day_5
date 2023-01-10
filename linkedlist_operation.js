const readline = require('readline-sync')
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedl{
    constructor(head){
        this.head = null
        this.size = 0
    }

add(x){
    let node = new Node(x)
    let temp;
    if(this.head==null){
        this.head = node;
        this.size++;
    }
    else{
    temp = this.head
    while(temp.next!=null){
        temp = temp.next;
    }
    temp.next = node;
    this.size++
    }
  //  console.log(node.data);
    //console.log(this.size);
}


//Inserting at a given position using size and two variables -> prev and current 

insertAt(val, data){
    if(val<=0 || val>this.size){
        // let node  = new Node(data)
        console.log("invalid")
    }
    else if(val==this.size){
        this.add(data)
    }
    else{
    let node = new Node(data);
    let count = 0;
    let current = this.head;
    let prev ;
    while(count<val){
        prev = current;
        count++;
        current = current.next;
    }
    node.next = current;
    prev.next = node;
    this.size++;
    }
}

//For displaying the values in each node
print(){
    let temp  = this.head;
    while(temp.next!=null){
        console.log(temp.data)
        temp = temp.next
    }
   console.log(temp.data)  // to print the last element of the list 
   console.log(`the size is ${this.size}`)
}
}

let ll = new linkedl()
ll.add(5)
ll.add(6)
ll.add(7)
// ll.insertAt(1,4) //static input
//dynamcially getting the input for insering at a position
ind = readline.question("Enter the index at where to be inserted")
val = readline.question("Enter the value to be inserted")
ll.insertAt(ind,val)
ll.print()


// do{
//     x = readline.question("Enter the value if its negative input will be terminated")
//     if(x>=0);
//     {
//         ll.add(x)
//     }
// }while(x>0)
// ll.print()
