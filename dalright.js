let n = 0;

document.getElementById("decrease").onclick = function () {
    n--;
    document.getElementById("counter").textContent = n;
}
document.getElementById("increase").onclick = function () {
    n++;
    document.getElementById("counter").textContent = n;
}
document.getElementById("reset").onclick = function () {
    n = 0
    document.getElementById("counter").textContent = `0`;
}