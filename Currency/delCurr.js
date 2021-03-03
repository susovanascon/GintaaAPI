import http from 'k6/http';
import { check } from 'k6';
import { getCurrDet } from "./getCurrency.js";
//****************** */
//DELETE A CURRENCY BY IT'S ID
//****************** */
var endpoint = '/currency/v1/currency/';

// export default function ()
// {
//     var baseurl = 'https://alpha.api.gintaa.com';
//     deleteCurrency(baseurl);
//     delCurInv(baseurl);
// }

export function deleteCurrency(baseurl)
{
  var curID = getCurrDet(baseurl);
  var url = baseurl.concat(endpoint + curID[0]);
  let res = http.del(url);
  // console.log("deleteCurrency" + " " + res.body)
  console.log(`,${url},` +'deleteCurrency,' + '200,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['deleteCurrency: Status is ' + `${res.status}`]: res.status === 200
    });
}
export function deleteCurrency_invID(baseurl)
{
  var curID = '000000';
  var url = baseurl.concat(endpoint + curID);
  let res = http.del(url);
  
  check(res, {
          'deleteCurrency_invID: Status code MUST be 404': res.status === 404
            });
}