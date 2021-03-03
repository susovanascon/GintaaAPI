import http from 'k6/http';
import { check } from 'k6';
import { getUserOfferID } from "./allOffers.js";
//=====================================
//use this api to get sibling new offers
//======================================

var endpoint = '/offers/v1/offers/';
export default function ()
{
  var baseurl = 'https://alpha.api.gintaa.com';
//   siblingOffer_diffMethod(baseurl);
  siblingOffer(baseurl);
}

export function siblingOffer(baseurl)
{
    var offerID = getUserOfferID(baseurl);
    let url = baseurl.concat(endpoint + offerID[0] + "/siblings")
    let res = http.get(url);
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'siblingOffer,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['siblingOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function siblingOffer_diffMethod(baseurl)
{
    var offerID = getUserOfferID(baseurl);
    let url = baseurl.concat(endpoint + offerID[0] + "/siblings")
    let res = http.put(url);
    console.log(`,${url},` +'siblingOffer_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['siblingOffer_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}
export function siblingOffer_invalid(baseurl)
{
    var offerID = "11111";
    let url = baseurl.concat(endpoint + offerID + "/siblings")
    let res = http.get(url);
    console.log(`,${url},` +'siblingOffer_invalid,' + '404,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['siblingOffer_invalid: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}