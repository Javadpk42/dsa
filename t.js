// let arr =[1,2,3,2,1,4]
// let obj = {}
// for(let i=0;i<arr.length;i++){
//     if(!obj[arr[i]]){
//         obj[arr[i]]=1
//     }else{
//         obj[arr[i]]+=1
//     }
// }
// console.log(obj)

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
        return this.size===0
    }
    prepend(value){
        const node=new Node(value)
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
            console.log('list is empty');
        }else{
            let curr = this.head
            let listvalues=''
            while(curr){
                listvalues+=`${curr.value} `
                curr = curr.next
            }
            console.log(listvalues)
        }
    }
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next =prev
            prev = curr
            curr = next
        }
        this.head=prev
    }
    duplicate(){
        
        let curr=this.head
        while(curr.next){
            if(curr.value==curr.next.value){
                curr.next=curr.next.next
            }else{
                curr=curr.next
            }
        }
    }
    insert(value,index){
        if(index>this.size || index<0){
            return
        }
        
        if(index==0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=1;i<index;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++

        }
    }
}

const list=new LinkedList
list.prepend(1)
list.prepend(2)
list.prepend(2)

list.prepend(3)
list.insert(5,0)
list.print()

// list.duplicate()
list.print()
// list.reverse()

