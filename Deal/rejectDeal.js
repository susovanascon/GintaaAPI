import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//*************
//RejectDeals *
//*************
var endpoint = '/deals/v1/deals/reject/';

export default function ()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  rejectDeal(baseurl,tokenID);
}

export function rejectDeal(baseurl,tokenID)
{
    var dealRefID = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefID + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
    
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'rejectDeal,' + '200,' + res.status);
    check(res, {
        ['rejectDeal: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function rejectDeal_IsRefman(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
       
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'rejectDeal_IsRefman,' + '404,' + res.status);
    check(res, {
        ['rejectDeal_IsRefman: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function rejectDeal_blankRef(baseurl,tokenID)
{
    var dealRefNumber = "";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
          
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'rejectDeal_blankRef,' + '404,' + res.status);
    check(res, {
        ['rejectDeal_blankRef: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function rejectDeal_invRef(baseurl,tokenID)
{
    var dealRefNumber = "000000";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
          
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'rejectDeal_invRef,' + '404,' + res.status);
    check(res, {
        ['rejectDeal_invRef: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function rejectDeal_isCommentMan(baseurl,tokenID)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber );
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
          
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'rejectDeal_isCommentMan,' + '404,' + res.status);
    check(res, {
        ['rejectDeal_isCommentMan: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function rejectDeal_blnkComment(baseurl,tokenID)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
              
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'rejectDeal_blnkComment,' + '404,' + res.status);
    check(res, {
        ['rejectDeal_blnkComment: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function rejectDeal_invAuth(baseurl,tokenID)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID + "a"
                        };
             
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'rejectDeal_invAuth,' + '403,' + res.status);
    check(res, {
        ['rejectDeal_invAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function rejectDeal_noAuth(baseurl)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
                 
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'rejectDeal_noAuth,' + '403,' + res.status);
    check(res, {
        ['rejectDeal_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function rejectDeal_diffMethod(baseurl,tokenID)
{
    var dealRefNumber = "NEED TO WRITE";
    var url=baseurl.concat(endpoint + dealRefNumber + '?comments=abc');
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID
                        };
                 
    var res = http.put(url,{ headers: requestHeaders });
    console.log(`,${url},` +'rejectDeal_diffMethod,' + '405,' + res.status);
    check(res, {
        ['rejectDeal_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}