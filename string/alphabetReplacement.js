function replaceNth(str,n){
    let s = []
    for(let i=0;i<str.length;i++){
        s[i] = str[(i+n) % str.length]
    }
    return s.join('')
}

let res = replaceNth("javad",3)
console.log(res);