import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';

var endpoint = '/chats/v1/chat/recent';

export default function ()
{
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
        //******WRITE ALL THE METHODS TO CALL*******
    getRecentOfferCom(baseurl,tokenID)
    // uploadMultiDoc_roomMan(baseurl,tokenID);
    // uploadMultiDoc_fileMan(baseurl,tokenID);
    // uploadMultiDoc_invFile(baseurl,tokenID);
    // uploadMultiDoc_diffMethod(baseurl,tokenID);
}
export function getRecentOfferCom(baseurl,tokenID)
{
    var url = baseurl.concat(endpoint);
    var requestHeaders = {'X-Authorization-Firebase': tokenID};
    var res = http.get(url, { headers: requestHeaders });
    check(res, {
        ['getRecentOfferCom: EXPECTED: 200,         ACTUAL: ' + `${res.status}`]: res.status === 200,
      });
    // console.log(res.status + " " + res.body)
    console.log(`,${url},` +'getRecentOfferCom,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['getRecentOfferCom: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getRecentOfferCom_paginated()
{
    var url = baseurl.concat(endpoint + '?page=1&size=4');
    var requestHeaders = {'X-Authorization-Firebase': tokenID};
    var res = http.get(url, { headers: requestHeaders });
    check(res, {
        ['getRecentOfferCom: EXPECTED: 200,         ACTUAL: ' + `${res.status}`]: res.status === 200,
      });
}
export function getRecentOfferCom_diffMethod()
{
    var url = baseurl.concat(endpoint + '?page=1&size=4');
    var requestHeaders = {'X-Authorization-Firebase': tokenID};
    var res = http.put(url, { headers: requestHeaders });
    check(res, {
        ['getRecentOfferCom_diffMethod: EXPECTED: 405,         ACTUAL: ' + `${res.status}`]: res.status === 405,
      });
}