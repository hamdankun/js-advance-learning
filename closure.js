function parent() {
    var a = 1;
    return function child() {
        var b = 2;
        return function subChild() {
            var c = 3;
            return `${a}${b}${c}`;
        }
    }
}

console.log(parent()()());