import http from 'k6/http';
import { check } from 'k6';
import { moneyWithItemDealID } from "./initiateDeal.js";
import { tokenGenerate } from '../generateToken.js';

//**********************
//ADD DEAL TO FAVOURITE*
//**********************

var endpoint = '/deals/v1/deals/favourites/add';

var body = {
                "dealRefNo": "string"
            }
export default function ()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  addDealToFavourite(baseurl,tokenID);
}
export function addDealToFavourite(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    body.dealRefNo = moneyWithItemDealID(baseurl,tokenID);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log('addDealToFavourite : ' + res.body);
    console.log(`,${url},` +'addDealToFavourite,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addDealToFavourite: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function addDealToFavourite_isRefMan(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    delete body.dealRefNo;
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'addDealToFavourite_isRefMan,' + '400,' + res.status);
    check(res, {
        ['addDealToFavourite_isRefMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function addDealToFavourite_refBlank(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    body.dealRefNo = "";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
        
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'addDealToFavourite_refBlank,' + '400,' + res.status);
    check(res, {
        ['addDealToFavourite_refBlank: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function addDealToFavourite_refInvalid(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    body.dealRefNo = "000000";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
       
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'addDealToFavourite_refInvalid,' + '400,' + res.status);
    check(res, {
        ['addDealToFavourite_refInvalid: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function addDealToFavourite_invalidAuth(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    body.dealRefNo = "NEED TO WRITE"
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
        'Content-Type': 'application/json'
    };
           
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'addDealToFavourite_invalidAuth,' + '403,' + res.status);
    check(res, {
        ['addDealToFavourite_invalidAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function addDealToFavourite_noAuth(baseurl)
{
    var url=baseurl.concat(endpoint);
    body.dealRefNo = "NEED TO WRITE";
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
               
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'addDealToFavourite_noAuth,' + '403,' + res.status);
    check(res, {
        ['addDealToFavourite_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function addDealToFavourite_diffMethod(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    body.dealRefNo = "NEED TO WRITE";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
                  
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'addDealToFavourite_diffMethod,' + '405,' + res.status);
    check(res, {
        ['addDealToFavourite_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}