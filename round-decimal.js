// Default Javascript function toFixed behaviour
Number((1.005).toFixed(2)) //outputs 1 instead of 1.01
Number((1.555).toFixed(2)) //outputs 1.55 instead of 1.56

const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);

round(1.005, 2) //1.01
round(1.555, 2) //1.56