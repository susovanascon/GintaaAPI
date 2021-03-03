import http from 'k6/http';
import { check } from 'k6';
import { getCurrDet } from "./getCurrency.js";

var endpoint = '/currency/v1/currency/';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    updateBase(baseurl);
}
export function updateBase(baseurl)
{
    var curID = getCurrDet(baseurl);
    var url = baseurl.concat(endpoint + curID[0]);
    let res = http.put(url);
    console.log("updateBase" + " " +  res.body)
    console.log(`,${url},` +'updateBase,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['updateBase: Status is ' + `${res.status}`]: res.status === 200
      });
}
export function updateBase_invCurr(baseurl)
{
    var curID = '0000000';
    var url = baseurl.concat(endpoint + curID);
    let res = http.put(url); 
}
export function updateBase_diffMethod(baseurl)
{
    var curID = getCurrDet(baseurl);
    var url = baseurl.concat(endpoint + curID);
    let res = http.post(url); 
}
