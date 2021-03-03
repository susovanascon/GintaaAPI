import http from 'k6/http';
import { check } from 'k6';
import { getCurrDet } from "./getCurrency.js";

var endpoint = '/currency/v1/currency/exchange';

var body = {
    "currencyId": "string",
    "exchangeRate": 0
}
var requestHeaders = {
    'Content-Type': 'application/json'
  };
export default function ()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    createCurrExchange(baseurl);
    createCurrExchange_IDMan(baseurl);
    createCurrExchange_invID(baseurl);
    createCurrExchange_exchangeMan(baseurl);
    createCurrExchange_diffMethod(baseurl);
}
export function createCurrExchange(baseurl)
{
    var url = baseurl.concat(endpoint);
    var curID = getCurrDet(baseurl);
    body.currencyId = curID[0];
    body.exchangeRate = 65;
    
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders});
    // console.log("createCurrExchange" +" " + res.body)
    console.log(`,${url},` +'createCurrExchange,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['createCurrExchange: Status is ' + `${res.status}`]: res.status === 200
      }); 
}
export function createCurrExchange_IDMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    delete body.currencyId;
    body.exchangeRate = 65;
    //var res = http.post(url, JSON.stringify(body), { headers: requestHeaders});
    console.log(JSON.stringify(body));
}
export function createCurrExchange_invID(baseurl)
{
    var url = baseurl.concat(endpoint);
    var curID = '000000';
    body.currencyId = curID;
    body.exchangeRate = 65;
    //var res = http.post(url, JSON.stringify(body), { headers: requestHeaders});
    console.log(JSON.stringify(body)); 
}
export function createCurrExchange_exchangeMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    var curID = getCurrDet(baseurl);
    body.currencyId = curID[0];
    delete body.exchangeRate;
    //var res = http.post(url, JSON.stringify(body), { headers: requestHeaders});
    console.log(JSON.stringify(body));
}
export function createCurrExchange_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    var curID = getCurrDet(baseurl);
    body.currencyId = curID[0];
    body.exchangeRate = 65;
    console.log(JSON.stringify(body));
    //var res = http.put(url, JSON.stringify(body), { headers: requestHeaders});  
}