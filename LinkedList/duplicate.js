class Node{
    constructor(value){
      this.value = value
      this.next = null
    }
  }
  class LinkedList{
    constructor(){
      this.head = null
      this.size = 0
      this.tail = null
    }
    isEmpty(){
      return this.size===0
    }
    getSize(){
      return this.size
    }
    convertArray(arr){
      // if(this.isEmpty()){
        const node = new Node(arr[0])
        this.head = node
        this.tail = node
        this.size++
      // }else{
        for(let i=1;i<arr.length;i++){
          const node = new Node(arr[i])
          this.tail.next = node
          this.tail = node
          this.size++ 
        }
      // }
    }
    removeDuplicate(){
      let curr= this.head
      while(curr.next){
        if(curr.value === curr.next.value){
          curr.next = curr.next.next
        }else{
          curr = curr.next
        }
      }
    }
    print(){
      if(this.isEmpty()){
        console.log('list is empty');
      }else{
        let curr = this.head
        let listvalues = ''
        while(curr){
          listvalues += `${curr.value} `
          curr = curr.next
        }
        console.log(listvalues)
      }
    }
  }
  
  const list = new LinkedList()
  list.print()
  list.convertArray([1,2,2,3,4])
  list.print()
  list.removeDuplicate()
  list.print()