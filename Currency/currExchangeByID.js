import http from 'k6/http';
import { check } from 'k6';
import { getCurrDet } from "./getCurrency.js";

var endpoint = '/currency/v1/currency/exchange/';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    getCurrExchangeByID(baseurl)
}
export function getCurrExchangeByID(baseurl)
{
    var curID = getCurrDet(baseurl);
    var url = baseurl.concat(endpoint + curID[0]);
    let res = http.get(url);
    // console.log("getCurrExchangeByID" +" " + res.body)
    console.log(`,${url},` +'getCurrExchangeByID,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['getCurrExchangeByID: Status is ' + `${res.status}`]: res.status === 200
      });
}
export function getCurrExchangeByID_CIDMan()
{
    var url = baseurl.concat(endpoint);
    let res = http.get(url);
}
export function getCurrExchangeByID_invCID()
{
    var curID = '000000';
    var url = baseurl.concat(endpoint + curID);
    let res = http.get(url);
}
export function getCurrExchangeByID_diffMethod()
{
    var curID = getCurrDet(baseurl);
    var url = baseurl.concat(endpoint + curID);
    let res = http.put(url);
}