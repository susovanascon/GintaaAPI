import http from 'k6/http';
import { check } from 'k6';
import { getUserOfferID } from "./allOffers.js";
//===================================================
//use this api to get all published offers by seo id
//==================================================
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/offers/v1/offers/seo/';

export default function()
{
  getOfferbySEOID();
//   getOfferbyInvalidID();
//getOfferbySEOID_diffMethod();
}

export function getOfferbySEOID()
{
    var offerSEOID = getUserOfferID();
    var url = prop.gintaa_baseurl.concat(endpoint + offerSEOID[1]);
    let res = http.get(url);
    
    console.log(`,${url},` +'getOfferbySEOID,' + '200,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['getOfferbySEOID: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getOfferbySEOID_diffMethod()
{
    var offerSEOID = getUserOfferID();
    var url = prop.gintaa_baseurl.concat(endpoint + offerSEOID[1]);
    let res = http.put(url);
    
    console.log(`,${url},` +'getOfferbySEOID_diffMethod,' + '405,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['getOfferbySEOID_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}
export function getOfferbyInvalidSEOID()
{
    var offerSEOID = "11111";
    var url = prop.gintaa_baseurl.concat(endpoint + offerSEOID);
    let res = http.get(url);
    
    console.log(`,${url},` +'getOfferbyInvalidSEOID,' + '404,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['getOfferbyInvalidSEOID: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}