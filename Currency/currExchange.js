import http from 'k6/http';
import { check } from 'k6';
import { getCurrDet } from "./getCurrency.js";

var endpoint = '/currency/v1/currency/exchange/conversion';

export function currExchangeSourceToTarget()
{
    var url = baseurl.concat(endpoint + '?exchangedValue=&sourceCurrencyName=&targetCurrencyName=');
    let res = http.get(url);
}
export function currExchangeSourceToTarget_noExchangeValue()
{
    var url = baseurl.concat(endpoint + '?sourceCurrencyName=&targetCurrencyName=');
    let res = http.get(url);
}
export function currExchangeSourceToTarget_noSource()
{
    var url = baseurl.concat(endpoint + '?exchangedValue=&targetCurrencyName=');
    let res = http.get(url);
}
export function currExchangeSourceToTarget_noTarget()
{
    var url = baseurl.concat(endpoint + '?exchangedValue=&sourceCurrencyName=');
    let res = http.get(url);
}
export function currExchangeSourceToTarget_diffMethod()
{
    var url = baseurl.concat(endpoint + '?exchangedValue=&sourceCurrencyName=&targetCurrencyName=');
    let res = http.put(url);
}