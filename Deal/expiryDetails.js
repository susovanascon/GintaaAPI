import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//******************************************
//GetDealStatusExpiryDetailsForInitiateDeal*
//******************************************

var endpoint = '/deals/v1/deals/expiry';
export default function ()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  dealExpiryDetails(baseurl,tokenID);
}

export function dealExpiryDetails(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };

    var res = http.get(url,{ headers: requestHeaders });
    // console.log('dealExpiryDetails : ' + res.body);
    console.log(`,${url},` +'dealExpiryDetails,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['dealExpiryDetails: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function dealExpiryDetails_invalidAuth(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a"
    };
    
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'dealExpiryDetails_invalidAuth,' + '403,' + res.status);
    check(res, {
        ['dealExpiryDetails_invalidAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function dealExpiryDetails_noAuth(baseurl)
{
    var url=baseurl.concat(endpoint);
       
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'dealExpiryDetails_noAuth,' + '403,' + res.status);
    check(res, {
        ['dealExpiryDetails_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function dealExpiryDetails_diffMethod(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };

    var res = http.put(url,null,{ headers: requestHeaders });
    console.log(`,${url},` +'dealExpiryDetails_diffMethod,' + '405,' + res.status);
    check(res, {
        ['dealExpiryDetails_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}