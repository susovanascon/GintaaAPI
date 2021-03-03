import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//*************************/
//GET ALL OFFERS OF A USER*
//************************ */
const prop = JSON.parse(open('../config/config.json'));
export default function userAllOffer()
{
    UserAllOffers(tokenID);
}
var endpoint = '/offers/v1/offers';

export function UserAllOffers(tokenID)
{
    let requestHeaders = {'X-Authorization-Firebase': tokenID};
    let url = prop.gintaa_baseurl.concat(endpoint);

    let res = http.get(url , { headers: requestHeaders });
    // console.log(res.status + " " + res.body)
    console.log(`,${url},` +'UserAllOffers,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['UserAllOffers: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function UserAllOffers_invalidAuth(tokenID)
{
    let requestHeaders = {'X-Authorization-Firebase': tokenID + "a"};
    let url = prop.gintaa_baseurl.concat(endpoint)
    let res = http.get(url , { headers: requestHeaders });
    console.log(`,${url},` +'UserAllOffers_invalidAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['UserAllOffers_invalidAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function UserAllOffers_noAuth(tokenID)
{
    let requestHeaders = {};
    let url = prop.gintaa_baseurl.concat(endpoint)
    let res = http.get(url , { headers: requestHeaders });
    console.log(`,${url},` +'UserAllOffers_noAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['UserAllOffers_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function UserAllOffers_diffMethod(tokenID)
{
    let requestHeaders = {'X-Authorization-Firebase': tokenID};
    let url = prop.gintaa_baseurl.concat(endpoint)
    let res = http.put(url , null,{ headers: requestHeaders });
    console.log(`,${url},` +'UserAllOffers_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['UserAllOffers_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}