import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//************
//GetAllDeals*
//************

var endpoint = '/deals/v1/deals/favourites';

export default function ()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  getAllDeals(baseurl,tokenID);
}

export function getAllDeals(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };

    var res = http.get(url,{ headers: requestHeaders });
    // console.log('getAllDeals : ' + res.body);
    console.log(`,${url},` +'getAllDeals,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getAllDeals: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getAllDeals_paginated(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?page=1&size=2');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };
    var res = http.get(url,{ headers: requestHeaders });
    console.log(res.status + res.body);

    //NEED TO CHECK THE SIZE//
       
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getAllDeals_paginated,' + '200,' + res.status);
    check(res, {
        ['getAllDeals_paginated: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getAllDeals_noAuth(baseurl)
{
    var url=baseurl.concat(endpoint);
           
    var res = http.get(url);
    console.log(`,${url},` +'getAllDeals_noAuth,' + '403,' + res.status);
    check(res, {
        ['getAllDeals_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function getAllDeals_invAuth(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a"
    };
    
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getAllDeals_invAuth,' + '403,' + res.status);
    check(res, {
        ['getAllDeals_invAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function getAllDeals_diffMethod(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };

    var res = http.put(url,null,{ headers: requestHeaders });
    console.log(`,${url},` +'getAllDeals_diffMethod,' + '405,' + res.status);
    check(res, {
        ['getAllDeals_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}
export function getFavDealID(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };

    var res = http.get(url,{ headers: requestHeaders });
    var favDealID = res.json().payload[0].dealRefId;
    // console.log(favDealID);
    return favDealID;
}