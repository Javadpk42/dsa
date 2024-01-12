class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let curr = this.head
            let lis = ''
            while(curr){
                lis +=`${curr.value} `
                curr = curr.next
            }
            console.log(lis)
        }
    }
}

const list = new LinkedList()
list.append(1)
list.append(1)
list.append(1)
list.print()
const list2 = new LinkedList()
list2.append(2)
list2.append(2)
list2.append(2)
list2.print()

let curr = list.head
while(curr.next){
    curr = curr.next
}
curr.next = list2.head

list.print()