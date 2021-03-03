import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';
//=======================================
//use this api to get new offers statictics
//=========================================
var endpoint = '/offers/v1/offers/stats';

export function offer_stats(baseurl,tokenID)
{
    
    let headers = {'X-Authorization-Firebase': tokenID};
    var url=baseurl.concat(endpoint);
    let res = http.get(url, { headers: headers });
    
    console.log(`,${url},` +'offer_stats,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['offer_stats: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function offer_stats_invalidAuth(baseurl,tokenID)
{
    
    let headers = {'X-Authorization-Firebase': tokenID} + "a";
    var url=baseurl.concat(endpoint);
    let res = http.get(url, { headers: headers });
    
    console.log(`,${url},` +'offer_stats,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['offer_stats: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function offer_stats_noAuth(baseurl,tokenID)
{
    
    let headers = {};
    var url=baseurl.concat(endpoint);
    let res = http.get(url, { headers: headers });
    
    console.log(`,${url},` +'offer_stats,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['offer_stats: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function offer_stats_diffMethod(baseurl,tokenID)
{
    
    let headers = {'X-Authorization-Firebase': tokenID};
    var url=baseurl.concat(endpoint);
    let res = http.put(url, { headers: headers });
    
    console.log(`,${url},` +'offer_stats,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['offer_stats: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}