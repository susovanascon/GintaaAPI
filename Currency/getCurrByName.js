import http from 'k6/http';
import { check } from 'k6';
import { getCurrDet } from "./getCurrency.js";

var endpoint = '/currency/v1/currency/';

export default function ()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    getCurByName(baseurl);   
}
export function getCurByName(baseurl)
{
    var curID = getCurrDet(baseurl);
    var url = baseurl.concat(endpoint + curID[1]);
    let res = http.get(url);
    // console.log("getCurByName" +" " + res.body)
    console.log(`,${url},` +'getCurByName,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['getCurByName: Status is ' + `${res.status}`]: res.status === 200
      });
}
export function getCurByName_nameMan(baseurl)
{
    var curID = getCurrDet(baseurl);
    var url = baseurl.concat(endpoint);
    let res = http.get(url);
}
export function getCurByName_invName(baseurl)
{
    var curID = getCurrDet(baseurl);
    var url = baseurl.concat(endpoint + '?currencyName=0000');
    let res = http.get(url);
}
export function getCurByName_diffMethod(baseurl)
{
    var curID = getCurrDet(baseurl);
    var url = baseurl.concat(endpoint + '?currencyName='+curID[1]);
    let res = http.put(url);
}