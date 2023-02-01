function calcPct(x, y) {
    return (y / x) * 100
}

let x = 40
let y = 20
let pct = calcPct(x,y)
console.log(`${pct}% de ${x} é ${y}`)