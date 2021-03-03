import http from 'k6/http';
import { check } from 'k6';
import { getUserOfferID } from "./allOffers.js";
import { tokenGenerate } from '../generateToken.js';

var endpoint = '/offers​/v1​/published​/offers​/hide​/';
export default function()
{
    var tokenID = tokenGenerate();
    var baseurl = 'https://alpha.api.gintaa.com';
    hideOffer(baseurl,tokenID);
}
export function hideOffer(baseurl,tokenID)
{
    var offerID = getUserOfferID(baseurl);
    console.log(offerID[0]);
    var url = baseurl.concat(endpoint + offerID[0]);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
    var res = http.post(url,null,{ headers: requestHeaders });
    console.log(res.status + " " + res.body)
    console.log(`,${url},` +'hideOffer,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['hideOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}