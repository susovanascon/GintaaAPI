import http from 'k6/http';
import { check } from 'k6';
import { getFavDealID } from "./getAllDeals.js";
import { tokenGenerate } from '../generateToken.js';

//*******************************
//REGENERATES OTP FOR CLOSE DEAL*
//*******************************

var endpoint = '/deals/v1/deals/close/regenerate-otp';

var body = {
    'dealRefNo' : ''
};


export default function ()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  regenerateDealOTP(baseurl,tokenID);
}


export function regenerateDealOTP(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID,
                            'Content-Type': 'application/json'
                        };
    body.dealRefNo = getFavDealID(baseurl,tokenID);

    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log("regenerateOTP:" + res.status + " " + res.body)
    console.log(`,${url},` +'regenDealOTP,' + '200,' + res.status);
    check(res, {
        ['regenDealOTP: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function regenDealOTP_isRefMan(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID,
                            'Content-Type': 'application/json'
                        };
    delete body.dealRefNo;
    
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'regenDealOTP_isRefMan,' + '400,' + res.status);
    check(res, {
        ['regenDealOTP_isRefMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function regenDealOTP_refBlank(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID,
                            'Content-Type': 'application/json'
                        };
    body.dealRefNo = "";
        
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'regenDealOTP_refBlank,' + '400,' + res.status);
    check(res, {
        ['regenDealOTP_refBlank: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function regenDealOTP_invRef(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID,
                            'Content-Type': 'application/json'
                        };
    body.dealRefNo = "000000";
          
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'regenDealOTP_invRef,' + '400,' + res.status);
    check(res, {
        ['regenDealOTP_invRef: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function regenDealOTP_noAuth(baseurl)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'Content-Type': 'application/json'
                        };
    body.dealRefNo = "NEED TO WRITE";
         
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'regenDealOTP_noAuth,' + '403,' + res.status);
    check(res, {
        ['regenDealOTP_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
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
           
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
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
           
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'acceptDeal_diffMethod,' + '405,' + res.status);
    check(res, {
        ['acceptDeal_diffMethod: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}