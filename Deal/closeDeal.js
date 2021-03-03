import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';
//*************
//CLOSE A DEAL*
//*************
var endpoint = '/deals/v1/deals/close';

var body = {
    "dealRefNo": "string",
    "otp": "string"
};

export function closeDeal(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.dealRefNo = "NEED TO WRITE";
    body.otp = "HOW TO GET";

    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'closeDeal,' + '200,' + res.status);
    check(res, {
        ['closeDeal: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function closeDeal_isRefMan(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    delete body.dealRefNo;
    body.otp = "HOW TO GET";

    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'closeDeal_isRefMan,' + '400,' + res.status);
    check(res, {
        ['closeDeal_isRefMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function closeDeal_blnkRef(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.dealRefNo = "";
    body.otp = "HOW TO GET";

    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'closeDeal_blnkRef,' + '400,' + res.status);
    check(res, {
        ['closeDeal_blnkRef: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function closeDeal_invalidRef(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.dealRefNo = "000000";
    body.otp = "HOW TO GET";
    
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'closeDeal_invalidRef,' + '400,' + res.status);
    check(res, {
        ['closeDeal_invalidRef: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function closeDeal_otpMan(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.dealRefNo = "NEED TO WRITE";
    delete body.otp;
    
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'closeDeal_otpMan,' + '400,' + res.status);
    check(res, {
        ['closeDeal_otpMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function closeDeal_blnkOtp(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.dealRefNo = "NEED TO WRITE";
    body.otp = "";
        
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'closeDeal_blnkOtp,' + '400,' + res.status);
    check(res, {
        ['closeDeal_blnkOtp: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function closeDeal_invOtp(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.dealRefNo = "NEED TO WRITE";
    body.otp = "909090";
            
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'closeDeal_invOtp,' + '400,' + res.status);
    check(res, {
        ['closeDeal_invOtp: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function closeDeal_alphaOTP(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.dealRefNo = "NEED TO WRITE";
    body.otp = "abcdef";
                
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'closeDeal_alphaOTP,' + '400,' + res.status);
    check(res, {
        ['closeDeal_alphaOTP: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function closeDeal_symOTP(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.dealRefNo = "NEED TO WRITE";
    body.otp = "!@#$%^&";
                    
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'closeDeal_symOTP,' + '400,' + res.status);
    check(res, {
        ['closeDeal_symOTP: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function closeDeal_invAuth(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
        'Content-Type': 'application/json'
    };
    body.dealRefNo = "NEED TO WRITE";
    body.otp = "HOW TO GET";
                        
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'closeDeal_invAuth,' + '403,' + res.status);
    check(res, {
        ['closeDeal_invAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function closeDeal_noAuth(baseurl)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    body.dealRefNo = "NEED TO WRITE";
    body.otp = "HOW TO GET";
                            
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'closeDeal_noAuth,' + '403,' + res.status);
    check(res, {
        ['closeDeal_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function closeDeal_diffMethod(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.dealRefNo = "NEED TO WRITE";
    body.otp = "HOW TO GET";
                            
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'closeDeal_diffMethod,' + '405,' + res.status);
    check(res, {
        ['closeDeal_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}