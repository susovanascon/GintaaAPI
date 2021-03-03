import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';
//=================================================
//use this api to get status of the offer of a user
//=================================================
var endpoint = '/offers/v1/offers';

export default function ()
{
  var baseurl = 'https://alpha.api.gintaa.com';
  var tokenID = tokenGenerate() ;
  offerStatus_activeOffer(baseurl,tokenID);
}
export function offerStatus_rejectedOffer(baseurl,tokenID)
{
    let requestHeaders = {'X-Authorization-Firebase': tokenID};
    var url=baseurl.concat(endpoint);
    let res = http.get(url + "?state=rejected", { headers: requestHeaders });
    console.log(`,${url},` +'offerStatus_rejectedOffer,' + '200,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['offerStatus_rejectedOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function offerStatus_activeOffer(baseurl,tokenID)
{
    let requestHeaders = {'X-Authorization-Firebase': tokenID};
    var url=baseurl.concat(endpoint);
    let res = http.get(url + "?state=active", { headers: requestHeaders });
    // console.log(res.status + " " + res.body)
    console.log(`,${url},` +'offerStatus_activeOffer,' + '200,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['offerStatus_activeOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function offerStatus_UnderReviewOffer(baseurl,tokenID)
{
    let requestHeaders = {'X-Authorization-Firebase': tokenID};
    var url=baseurl.concat(endpoint);
    let res = http.get(url + "?state=under_review", { headers: requestHeaders });
    console.log(`,${url},` +'offerStatus_UnderReviewOffer,' + '200,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['offerStatus_UnderReviewOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function offerStatus_InvalidAuth(baseurl,tokenID)
{
    let requestHeaders = {'X-Authorization-Firebase': tokenID + "a"};
    var url=baseurl.concat(endpoint);
    let res = http.get(url, { headers: requestHeaders });
    console.log(`,${url},` +'offerStatus_InvalidAuth,' + '403,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['offerStatus_InvalidAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function offerStatus_NoAuth(baseurl)
{
    var url=baseurl.concat(endpoint);
    let res = http.get(url);
    console.log(`,${url},` +'offerStatus_NoAuth,' + '403,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['offerStatus_NoAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function offerStatus_diffMethod(baseurl,tokenID)
{
    let requestHeaders = {'X-Authorization-Firebase': tokenID};
    var url=baseurl.concat(endpoint);
    let res = http.put(url, { headers: requestHeaders });
    console.log(`,${url},` +'offerStatus_diffMethod,' + '405,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['offerStatus_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}

