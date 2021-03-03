import http from 'k6/http';
import { check } from 'k6';
import { getUserOfferID } from "./allOffers.js";
import { tokenGenerate } from '../generateToken.js';

var endpoint = '/offers/v1/offers/lastviewedOffer';
export default function()
{
    var tokenID = tokenGenerate();
    var baseurl = 'https://alpha.api.gintaa.com';
    latViewedOffer(baseurl,tokenID);
}
export function latViewedOffer(baseurl,tokenID)
{
    var url = baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
    var res = http.get(url,{ headers: requestHeaders });
    // console.log(res.status + " " + res.body)
    console.log(`,${url},` +'latViewedOffer,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['latViewedOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}