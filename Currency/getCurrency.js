import http from 'k6/http';
import { check } from 'k6';
//****************** */
//GET ALL ACTIVE CURRENCY
//****************** */
var endpoint = '/currency/v1/currency';

export default function ()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    //activeCurrency(baseurl);
    //currencyPagination(baseurl);
    getCurrDet(baseurl);
}

export function activeCurrency(baseurl)
{
    var url = baseurl.concat(endpoint);
    let res = http.get(url);
    // console.log("activeCurrency" + " " + res.body)
    console.log(`,${url},` +'activeCurrency,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['activeCurrency: Status is ' + `${res.status}`]: res.status === 200
      });
    
}
export function currencyPagination(baseurl)
{
    var url = baseurl.concat(endpoint);
    let res = http.get(url + "?page=1&size=5");
    var curSize = res.json().payload.length;
    check(res, {
          'currencyPagination: Status code MUST be 200': res.status === 200,
          'currencyPagination: Size must be same as asked': curSize === 5
    
        });
}
export function getCurrency_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    let res = http.put(url);
    check(res, {
          'getCurrency_diffMethod: Status code MUST be 200': res.status === 200
          });
    
}
export function getCurrDet(baseurl)
{
    var url = baseurl.concat(endpoint);
    let res = http.get(url);
    
    if(res.status === 200)
    {
      for (let i = 0; i < res.json().payload.length; i++)
      {
        if (res.json().payload[i].currencyLabel == "Pound")
        {
          var curID = res.json().payload[i].currencyId;
          var curName = res.json().payload[i].currencyLabel;
          var curStatus = res.json().payload[i].active
          var curDet = new Array(curID,curName,curStatus);
          break;
        }
      }  
    }
    return curDet;
}
