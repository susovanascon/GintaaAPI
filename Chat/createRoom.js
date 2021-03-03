import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';
import { getOfferID } from "../Offer/allOffers.js";

const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/chats/v1/chat/';
export default function()
{
    var tokenID = tokenGenerate();
    var baseurl = 'https://alpha.api.gintaa.com';
    createRoom(tokenID);
    // getRoom_invOffer(tokenID);
    // getRoom_diffMethod(tokenID);
}

export function createRoom(tokenID)
{
    var offerID = getOfferID(tokenID);
    var url = prop.gintaa_baseurl.concat(endpoint + offerID);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
    
    var res = http.post(url,null,{ headers: requestHeaders });
    // console.log(res.body) // hide
    console.log(`,${url},` +'createRoom,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createRoom: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createRoom_offerMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
      console.log(url);
    var res = http.post(url,{ headers: requestHeaders });
}
export function createRoom_invOffer(tokenID)
{
    var offerID = '000000';
    var url = prop.gintaa_baseurl.concat(endpoint + offerID);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
      console.log(url);
    var res = http.post(url,{ headers: requestHeaders });
}
export function createRoom_diffMethod(tokenID)
{
    var offerID = getOfferID(tokenID);
    var url = prop.gintaa_baseurl.concat(endpoint + offerID);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
      console.log(url);
    var res = http.put(url,{ headers: requestHeaders });
}