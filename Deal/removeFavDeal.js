import http from 'k6/http';
import { check } from 'k6';
import { getFavDealID } from "./getAllDeals.js";
import { tokenGenerate } from '../generateToken.js';

//***************************
//REMOVE DEAL FROM FAVOURITE*
//***************************

var endpoint = '/deals/v1/deals/favourites/remove';

var body = {
                "dealRefNo": "string"
            }
export default function ()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  removeDealFromFavourite(baseurl,tokenID);
}
export function removeDealFromFavourite(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    body.dealRefNo = getFavDealID(baseurl,tokenID)
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
                      
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log('removeDealFromFavourite : ' + res.body)
    console.log(`,${url},` +'removeDealFromFavourite,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['removeDealFromFavourite: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function removeDealFromFavourite_isRefMan(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    delete body.dealRefNo;
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
                          
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'removeDealFromFavourite_isRefMan,' + '400,' + res.status);
    check(res, {
        ['removeDealFromFavourite_isRefMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function removeDealFromFavourite_refBlank(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    body.dealRefNo = "";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
                              
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'removeDealFromFavourite_refBlank,' + '400,' + res.status);
    check(res, {
        ['removeDealFromFavourite_refBlank: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function removeDealFromFavourite_refInvalid(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    body.dealRefNo = "000000";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
                                  
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'removeDealFromFavourite_refInvalid,' + '400,' + res.status);
    check(res, {
        ['removeDealFromFavourite_refInvalid: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function removeDealFromFavourite_invalidAuth(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    body.dealRefNo = "NEED TO WRITE"
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
        'Content-Type': 'application/json'
    };
                                      
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'removeDealFromFavourite_invalidAuth,' + '403,' + res.status);
    check(res, {
        ['removeDealFromFavourite_invalidAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function removeDealFromFavourite_noAuth(baseurl)
{
    var url=baseurl.concat(endpoint);
    body.dealRefNo = "NEED TO WRITE";
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
                                          
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'removeDealFromFavourite_noAuth,' + '403,' + res.status);
    check(res, {
        ['removeDealFromFavourite_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function removeDealFromFavourite_diffMethod(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    body.dealRefNo = "NEED TO WRITE";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
                                             
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'removeDealFromFavourite_diffMethod,' + '405,' + res.status);
    check(res, {
        ['removeDealFromFavourite_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}