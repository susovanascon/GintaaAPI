import http from 'k6/http';
import { check } from 'k6';

var endpoint = '/currency/v1/currency/exchange';

export default function ()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    activeCurrency(baseurl);
    currencyPagination(baseurl);
    getCurrDet(baseurl);
}

export function getCurrExchange(baseurl)
{
    var url = baseurl.concat(endpoint);
    let res = http.get(url);
    // console.log("getCurrExchange" +" " + res.body)
    console.log(`,${url},` +'getCurrExchange,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['getCurrExchange: Status is ' + `${res.status}`]: res.status === 200
      });
    
}
export function getCurrExchange_Paginated(baseurl)
{
    var url = baseurl.concat(endpoint);
    let res = http.get(url + "?page=1&size=3");
    var curSize = res.json().payload.length;
    check(res, {
          'currencyPagination: Status code MUST be 200': res.status === 200,
          'currencyPagination: Size must be same as asked': curSize === 5
    
        });
}
export function getCurrExchange_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    let res = http.put(url + "?page=1&size=3");
    var curSize = res.json().payload.length;
    check(res, {
          'currencyPagination: Status code MUST be 200': res.status === 200,
          'currencyPagination: Size must be same as asked': curSize === 5
    
        });
}
