class Node{
    constructor(value){
        this.value = value
        this.next = null
        // this.prev = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            // this.head.prev = node
            this.head = node
        }
        this.size++
    }
    print(){
        let curr = this.head
        let listvalues = ''
        while(curr){
            listvalues += ` ${curr.value} `
            curr = curr.next
        }
        console.log(listvalues)
    }
    isPalindrome(){
        let l = this.print()
        let r = l.split('').reverse().join('')
        return l==r
    }
    isPal(){
        let l = this.head
        let r = this.tail
        while(l!=r){
            if(l.value != r.value){
                return false
            }
            l=l.next
            r=r.prev
        }
        return true
    }
   
    remove(index){
        if(index==0){
            this.head=this.head.next
        }else{
            let prev = this.head
            for(let i=1;i<index;i++){
                prev = prev.next
            }
            prev.next=prev.next.next
        }
    }
    deleteDuplicate(){
        let curr =this.head
        while(curr.next){
            if(curr.value==curr.next.value){
                curr.next = curr.next.next
            }else{
                curr = curr.next
            }
        }
    }

}
const list = new LinkedList()

list.append(1)
list.append(2)
list.append(2)
list.append(3)
list.append(4)
// let val =list.print()
// console.log(val)
// let rev =val.split('').reverse().join('')
// console.log(rev)
// console.log(val == rev);

// console.log(list.isPal());
list.print()
list.deleteDuplicate()
list.print()