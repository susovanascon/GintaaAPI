import http from 'k6/http';
import { check } from 'k6';
import { getUserOfferID } from "./allOffers.js";
//=====================================================
//use this api to get all published offers by offer id
//=====================================================
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/offers/v1/offers/oid/';
export default function()
{
  getOfferbyID();
//   getOfferbyInvalidID();
//   getOfferbyID_diffMethod()
}

export function getOfferbyID()
{
    var offerID = getUserOfferID();
    var url = prop.gintaa_baseurl.concat(endpoint + offerID[0]);
    let res = http.get(url);
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'getOfferbyID,' + '200,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['getOfferbyID: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getOfferbyID_diffMethod()
{
    var offerID = getUserOfferID();
    var url = prop.gintaa_baseurl.concat(endpoint + offerID[0]);
    let res = http.put(url);
    
    console.log(`,${url},` +'getOfferbyID_diffMethod,' + '405,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['getOfferbyID_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}
export function getOfferbyInvalidID()
{
    var offerID = "11111";
    var url = prop.gintaa_baseurl.concat(endpoint + offerID);
    let res = http.get(url);
    console.log(`,${url},` +'getOfferbyInvalidID,' + '404,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['getOfferbyInvalidID: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}