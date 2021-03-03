import http from 'k6/http';
import { check } from 'k6';

const endpoint = '/search/v1/search/suggestion/category';
const prop = JSON.parse(open('../config/config.json'));

export default function searchByText()
{
    searchText();
}

export function searchString()
{
    var url = prop.gintaa_baseurl.concat(endpoint + '?searchString=camera');
    let res = http.get(url);
    
    console.log(`,${url},` +' searchString,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['searchString: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function searchString_paramMan()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let res = http.get(url);
    console.log(res.body) 
}
export function searchString_diffMethod()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let res = http.put(url);
    // console.log(res.body);
    console.log(`,${url},` +' searchString_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['searchString_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function searchString_invText()
{
    var url = prop.gintaa_baseurl.concat(endpoint + '?searchString=00000');
    let res = http.get(url);
    // console.log(res.body) 
    console.log(`,${url},` +' searchString_invText,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['searchString_invText: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}