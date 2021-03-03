import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';
import { getOfferID } from "../Offer/allOffers.js";

var endpoint = '/chats/v1/chat/';

export default function()
{
    var tokenID = tokenGenerate();
    var otherTokenID = tokenGenerate_2();
    var baseurl = 'https://alpha.api.gintaa.com';
    getRoom(baseurl,otherTokenID);
    getRoomID(baseurl,otherTokenID)
    // getRoom_invOffer(baseurl,tokenID);
    // getRoom_diffMethod(baseurl,tokenID);
}

export function getRoom(baseurl,otherTokenID)
{
    var offerID = getOfferID(baseurl);
    var url = baseurl.concat(endpoint + offerID);
    var requestHeaders = {
        'X-Authorization-Firebase': otherTokenID
      };
      
    var res = http.get(url,{ headers: requestHeaders });
    // console.log("Response Body:-"+res.body); //hide
    console.log(`,${url},` +'getRoom,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['getRoom: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getRoom_invOffer(baseurl,tokenID)
{
    var offerID = '000000';
    var url = baseurl.concat(endpoint + offerID);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
      console.log(url);
    var res = http.get(url,{ headers: requestHeaders });
}
export function getRoom_diffMethod(baseurl,tokenID)
{
    var offerID = getOfferID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
      console.log(url);
    var res = http.put(url,{ headers: requestHeaders });
}
export function getRoomID(baseurl,otherTokenID)
{
    var offerID = getOfferID(baseurl);
    var url = baseurl.concat(endpoint + offerID);
    var requestHeaders = {
        'X-Authorization-Firebase': otherTokenID
      };
    var res = http.get(url,{ headers: requestHeaders });
    console.log("Response:-"+res.body) // hide
    var roomID = res.json().payload[0].roomId;

    return roomID;
}