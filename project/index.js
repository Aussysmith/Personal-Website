// Personal website visit counter
let count = localStorage.getItem("count");

function Counter() {
    const isIndexPage = window.location.pathname.endsWith("index.html");
    if(!isIndexPage) return;

    count++;
    localStorage.setItem("count", count);
    
    const countElement = document.getElementById("count");
    countElement.innerHTML = `You have visited my website ${count} times.`;
}

window.onload = function() {
    Counter();
}
