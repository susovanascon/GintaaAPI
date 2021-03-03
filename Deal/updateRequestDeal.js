import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//*******************
//UpdateRequestDeal *
//*******************
var endpoint = '/deals/v1/deals/update-req/';

export default function ()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  updateRequestDeal(baseurl,tokenID);
  updateRequestDeal_IsRefman(baseurl,tokenID);
  updateRequestDeal_blankRef(baseurl,tokenID);
  updateRequestDeal_invRef(baseurl,tokenID);
  updateRequestDeal_isCommentMan(baseurl,tokenID);
  updateRequestDeal_blnkComment(baseurl,tokenID);
  updateRequestDeal_invAuth(baseurl,tokenID);
  updateRequestDeal_noAuth(baseurl,tokenID);
  updateRequestDeal_diffMethod(baseurl,tokenID);
}

export function updateRequestDeal(baseurl,tokenID)
{
    var dealRefID = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefID + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
    
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'updateRequestDeal,' + '200,' + res.status);
    check(res, {
        ['updateRequestDeal: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function updateRequestDeal_IsRefman(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
    
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'updateRequestDeal_IsRefman,' + '404,' + res.status);
    check(res, {
        ['updateRequestDeal_IsRefman: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function updateRequestDeal_blankRef(baseurl,tokenID)
{
    var dealRefNumber = "";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
    
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'updateRequestDeal_blankRef,' + '404,' + res.status);
    check(res, {
        ['updateRequestDeal_blankRef: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function updateRequestDeal_invRef(baseurl,tokenID)
{
    var dealRefNumber = "000000";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
       
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'updateRequestDeal_invRef,' + '404,' + res.status);
    check(res, {
        ['updateRequestDeal_invRef: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function updateRequestDeal_isCommentMan(baseurl,tokenID)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber );
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
       
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'updateRequestDeal_isCommentMan,' + '404,' + res.status);
    check(res, {
        ['updateRequestDeal_isCommentMan: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function updateRequestDeal_blnkComment(baseurl,tokenID)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
       
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'updateRequestDeal_blnkComment,' + '404,' + res.status);
    check(res, {
        ['updateRequestDeal_blnkComment: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function updateRequestDeal_invAuth(baseurl,tokenID)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID + "a"
                        };
       
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'updateRequestDeal_invAuth,' + '403,' + res.status);
    check(res, {
        ['updateRequestDeal_invAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function updateRequestDeal_noAuth(baseurl)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
           
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'updateRequestDeal_noAuth,' + '403,' + res.status);
    check(res, {
        ['updateRequestDeal_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function updateRequestDeal_diffMethod(baseurl,tokenID)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
               
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'updateRequestDeal_diffMethod,' + '405,' + res.status);
    check(res, {
        ['updateRequestDeal_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}