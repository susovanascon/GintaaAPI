import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//***************************************
//GetDealStatusExpiryDetailsByStatusCode*
//***************************************

var endpoint = '/deals/v1/deals/expiry/';

export default function ()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  dealExpiryByStatus(baseurl,tokenID);
}
export function dealExpiryByStatus(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + "INITIATED");
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };
    var res = http.get(url,null,{ headers: requestHeaders });
    // console.log('dealExpiryByStatus : ' + res.body);
    console.log(`,${url},` +'dealExpiryByStatus,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['dealExpiryByStatus: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}