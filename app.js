let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let stockPriceElement = document.getElementById('stock-price-eth');
let lastPrice = null;

ws.onmessage = (event) =>{
    let stockObject =  JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElement.innerText = price;

    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';

    lastPrice = price;


}

// let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
// let stockPriceElement = document.getElementById('stock-price-bit');
// let lastPrice = null;


// ws.onmessage = (event) =>{
//     let stockObject =  JSON.parse(event.data);
//     let price = parseFloat(stockObject.p).toFixed(2);
//     stockPriceElement.innerText = price;

//     stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';

//     lastPrice = price;


// }


// const ws = new WebSocket('');

// ws.on('message', (data: string) => {
//     if (data) {
//         const trade = JSON.parse(data); // parsing single-trade record
//         console.log(trade);
//     }
// });