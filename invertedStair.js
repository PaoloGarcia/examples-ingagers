function invertedStair(n) {
    for (let i = 0; i < n; i++) {
        console.log(("*".repeat(n - i)).padStart(n, " "));
    }
}

console.log(invertedStair(10));
