import {timeParse} from "d3-time-format";
//https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo

// newsapi.org

function sortByDateAscending(a, b) {
    return a.date - b.date;
}

export async function getStockData(stock_id, timeframe) {
    try {
        const res = await fetch("/stocks/" + stock_id + "?interval=" + timeframe);
        const block = await res.json();
        let retobj = [];
        Object.keys(block["Time Series (" + timeframe + ")"]).forEach(function (key) {
            let obj = block["Time Series (" + timeframe + ")"][key];
            retobj.push({
                date: timeParse("%Y-%m-%d %H:%M:%S")(key),
                open: +obj["1. open"],
                high: +obj["2. high"],
                low: +obj["3. low"],
                close: +obj["4. close"],
                volume: +obj["5. volume"],
            });
        });
        return retobj.sort(sortByDateAscending)
    } catch (e) {
        console.log(e);
    }
}


export async function getStockFundamentals(stock) {
    try {
        const res = await fetch("https://api.iextrading.com/1.0/stock/" + stock + "/stats");
        return await res.json();
    }
    catch (e) {
        console.log(e)
    }
}

export async function getCompanyInfo(stock) {
    try {
        const res = await fetch("https://api.iextrading.com/1.0/stock/" + stock + "/company");
        return await res.json();
    }
    catch (e) {
        console.log(e)
    }
}

export async function getMarketNews(stock) {
    try {
        const res = await fetch("https://api.iextrading.com/1.0/stock/" + stock + "/news");
        return await res.json();
    }
    catch (e) {
        console.log(e)
    }
}

export async function getAccountInfo() {
    try {
        const res = await fetch("/account/info/api");
        return await res.json();
    }
    catch (e) {
        return e;
    }
}

export async function getSidebarItem() {
    try {
        const res = await fetch('/account/portfolio/api');
        return await res.json();
    }
    catch (e) {
        console.log(e);
        return e;
    }
}

export async function getQuoteData(stock) {
    try {
        const res = await fetch('/market/api/get_quote?name=' + stock);
        return await res.json();
    }
    catch (e) {
        console.log(e);
    }
}

export async function searchStock(query) {
    try {
        const res = await fetch('/search?q=' + query);
        return await res.json();
    }
    catch (e) {
        console.log(e)
    }
}