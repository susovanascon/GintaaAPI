import http from 'k6/http';
import { check } from 'k6';
import { getFavDealID } from "./getAllDeals.js";
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';

//******************************************
//ACCEPT A DEAL AGAINST A DEAL REFERENCE NO*
//******************************************

var endpoint = '/deals/v1/deals/accept';

var body = {
    'dealRefNo' : ''
};


export default function ()
{
  var tokenID = tokenGenerate() ;
  var otherTokenID = tokenGenerate_2();
  var baseurl = 'https://alpha.api.gintaa.com';
  acceptDeal(baseurl,tokenID,otherTokenID);
}


export function acceptDeal(baseurl,tokenID,otherTokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': otherTokenID,
                            'Content-Type': 'application/json'
                        };
    body.dealRefNo = getFavDealID(baseurl,tokenID);
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('acceptDeal : '  + JSON.stringify(body) + " " + res.body);
    console.log(`,${url},` +'acceptDeal,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['acceptDeal: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    }); 
}
export function acceptDeal_isRefMan(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID,
                            'Content-Type': 'application/json'
                        };
    delete body.dealRefNo;
    
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'acceptDeal_isRefMan,' + '400,' + res.status);
    check(res, {
        ['acceptDeal_isRefMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    }); 
}
export function acceptDeal_refBlank(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID,
                            'Content-Type': 'application/json'
                        };
    body.dealRefNo = "";
    
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'acceptDeal_refBlank,' + '400,' + res.status);
    check(res, {
        ['acceptDeal_refBlank: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function acceptDeal_invRef(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID,
                            'Content-Type': 'application/json'
                        };
    body.dealRefNo = "000000";
    
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'acceptDeal_invRef,' + '400,' + res.status);
    check(res, {
        ['acceptDeal_invRef: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function acceptDeal_noAuth(baseurl)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'Content-Type': 'application/json'
                        };
    body.dealRefNo = "NEED TO WRITE";
    
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'acceptDeal_noAuth,' + '403,' + res.status);
    check(res, {
        ['acceptDeal_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function acceptDeal_invAuth(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID + "a",
                            'Content-Type': 'application/json'
                        };
    body.dealRefNo = "NEED TO WRITE";
    
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'acceptDeal_invAuth,' + '403,' + res.status);
    check(res, {
        ['acceptDeal_invAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function acceptDeal_diffMethod(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID,
                            'Content-Type': 'application/json'
                        };
    body.dealRefNo = "NEED TO WRITE";
    
    var res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'acceptDeal_diffMethod,' + '405,' + res.status);
    check(res, {
        ['acceptDeal_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}