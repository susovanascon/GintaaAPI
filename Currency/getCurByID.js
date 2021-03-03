import http from 'k6/http';
import { check } from 'k6';
import { getCurrDet } from "./getCurrency.js";
//****************** */
//GET CURRENCY BY ID
//****************** */
var endpoint = '/currency/v1/currency/';

export default function ()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    activeCurbyID(baseurl);
    actCurbyID_invCurID(baseurl);
    activecurbyID_diffMethod(baseurl)
}

export function activeCurbyID(baseurl)
{
  var curID = getCurrDet(baseurl);
  var url = baseurl.concat(endpoint + curID[0]);
  let res = http.get(url);
  // console.log("activeCurbyID" + " " +  res.body)
  console.log(`,${url},` +'activeCurbyID,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['activeCurbyID: Status is ' + `${res.status}`]: res.status === 200
      });
}
export function actCurbyID_invCurID(baseurl)
{
    var curID = "000000";
    var url = baseurl.concat(endpoint + curID);
    let res = http.get(url);
    check(res, {
           'actCurbyID_invCurID: Status code MUST be 404': res.status === 404
        });
}
export function activeCurbyID_currencyIDMan(baseurl)
{
  var url = baseurl.concat(endpoint);
  let res = http.get(url);
  check(res, {
      'activeCurbyID_currencyIDMan: Status code MUST be 404': res.status === 404
      }); 
}
export function activecurbyID_inactiveCurr(baseurl)
{
  var curID = getCurrDet(baseurl);
  if (curID[2] == "true") {
      var deleteURL = 'https://alpha.api.gintaa.com/currency/v1/currency/' + curID[0];
      let res = http.del(deleteURL);
  }
  var url = baseurl.concat(endpoint + curID[0]);
  let res = http.get(url);
  check(res, {
      'activecurbyID_inactiveCurr: Status code MUST be 405': res.status === 405
      }); 
}
export function activecurbyID_diffMethod(baseurl)
{
  var curID = getCurrDet(baseurl);
  var url = baseurl.concat(endpoint + curID[0]);
  let res = http.put(url);
  check(res, {
      'activecurbyID_diffMethod: Status code MUST be 405': res.status === 405
      }); 
}