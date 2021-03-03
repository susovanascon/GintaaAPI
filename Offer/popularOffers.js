import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

var endpoint = '/offers/v1/offers/popularOffer';

export default function()
{
  var baseurl = 'https://alpha.api.gintaa.com';
  var tokenID = tokenGenerate() ;
  popularOffer(baseurl,tokenID);
//   getOfferbyInvalidID(baseurl);
//getOfferbySEOID_diffMethod(baseurl);
}

export function popularOffer(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    let requestHeaders = {'X-Authorization-Firebase': tokenID};
    
    let res = http.get(url,{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);// hide
    console.log(`,${url},` +'popularOffer,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['popularOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}