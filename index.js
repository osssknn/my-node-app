const http = require('http'); 
const number = 15;
function arctan(x, terms) {
    let sum = 0; 
    let sign = 1;
    let power =  x;
    for (let i = 0; i < terms; i++) {
        sum += sign * power / (2 * i + 1);
        sign *= -1;
        power *= x * x;
    }
    return sum;
}
function PIII(decimals) {
    const terms = 20;
    const pi = 16 * arctan(1/5, terms) - 4 * arctan(1/239, terms);
    return pi.toFixed(decimals);
}
 const piValue = PIII(number);
const server = http.createServer((req, res) => { 
res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); 
res.end('<h1>Осокин Никита</h1><p>478</p><p>Ответ: ${piValue}</p>'); 
});
const PORT = 3000; 
server.listen(PORT, () => { 
console.log(`Сервер запущен на http://localhost:${PORT}`); 
});