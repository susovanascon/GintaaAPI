import http from 'k6/http';
import { check } from 'k6';
import { getFavDealID } from "./getAllDeals.js";
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';

//***************
//CANCEL A DEAL *
//***************
var endpoint = '/deals/v1/deals/cancel/';

export default function ()
{
  var tokenID = tokenGenerate() ;
  var otherTokenID = tokenGenerate_2();
  var baseurl = 'https://alpha.api.gintaa.com';
  cancelDeal(baseurl,tokenID);
}

export function cancelDeal(baseurl,tokenID)
{
    var dealRefNumber = getFavDealID(baseurl,tokenID);
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
    
    var res = http.put(url,null,{ headers: requestHeaders });
    // console.log('cancelDeal : ' + res.body + " " + dealRefNumber);
    check(res, {
        ['cancelDeal: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
    console.log(`,${url},` +'cancelDeal,' + '200,' + res.status);
}
export function cancelDeal_IsRefman(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
    
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'cancelDeal_IsRefman,' + '404,' + res.status);
    check(res, {
        ['cancelDeal_IsRefman: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function cancelDeal_blankRef(baseurl,tokenID)
{
    var dealRefNumber = "";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
    
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'cancelDeal_blankRef,' + '400,' + res.status);
    check(res, {
        ['cancelDeal_blankRef: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function cancelDeal_invRef(baseurl,tokenID)
{
    var dealRefNumber = "000000";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
    
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'cancelDeal_invRef,' + '404,' + res.status);
    check(res, {
        ['cancelDeal_invRef: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function cancelDeal_isCommentMan(baseurl,tokenID)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber );
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
    
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'cancelDeal_isCommentMan,' + '404,' + res.status);
    check(res, {
        ['cancelDeal_isCommentMan: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function cancelDeal_blnkComment(baseurl,tokenID)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
    
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'cancelDeal_blnkComment,' + '400,' + res.status);
    check(res, {
        ['cancelDeal_blnkComment: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function cancelDeal_invAuth(baseurl,tokenID)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID + "a"
                        };
    
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'cancelDeal_invAuth,' + '403,' + res.status);
    check(res, {
        ['cancelDeal_invAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function cancelDeal_noAuth(baseurl)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    
    var res = http.put(url);
    console.log(`,${url},` +'cancelDeal_noAuth,' + '403,' + res.status);
    check(res, {
        ['cancelDeal_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function cancelDeal_diffMethod(baseurl,tokenID)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
    
    var res = http.post(url,null,{ headers: requestHeaders });
    console.log(`,${url},` +'cancelDeal_diffMethod,' + '405,' + res.status);
    check(res, {
        ['cancelDeal_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}