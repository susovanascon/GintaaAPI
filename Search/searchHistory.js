import http from 'k6/http';
import { check } from 'k6';

const prop = JSON.parse(open('../config/config.json'));

const endpoint = '/search/v1/search-history';
//Sending particular device ID so that search history will be fetched according to that device only
var requestHeaders = {
    'Cookie': '_deviceId=gintaa30'
  };
export default function historySearch()
{
    //searchProduct();
    searchProduct_diffMehod()
}
export function searchHis()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let res = http.get(url,{ headers : requestHeaders});
    
    console.log(`,${url},` +' searchHis,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['searchHis: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function searchHis_diffMehod()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let res = http.put(url,{ headers : requestHeaders});
    // console.log(res.body);
    console.log(`,${url},` +' searchHis_diffMehod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['searchHis_diffMehod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
