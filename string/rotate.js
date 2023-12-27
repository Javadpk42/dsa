var rotateString = function (s, goal) {

    let res = s.concat(s)
    if (res.includes(goal)) {
        if (res.length / 2 != goal.length) {
            return false
        }
        return true
    }
    return false

};
let s = "abcde"
let goal = "cdeab"

let res = rotateString(s,goal)
console.log(res);