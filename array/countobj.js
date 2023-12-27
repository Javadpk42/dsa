var arr = [1, 2, 3, 4, 2, 3, 1, 3, 4, 5];
let obj={}
for(let i=0;i<arr.length;i++){
    if(!obj[arr[i]]){
        obj[arr[i]]=1
    }else{
        obj[arr[i]] +=1
    }
}
console.log(obj)