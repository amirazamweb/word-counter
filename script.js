
let word = document.getElementById("word");
let char = document.getElementById("char");
let textarea = document.getElementById("textarea");

textarea.addEventListener('input', function () {
    let m = this.value;
    let n = m.length;
    char.innerHTML = n;
    let p = m.split(" ");
    let r = p.length;
    word.innerHTML = r;
})