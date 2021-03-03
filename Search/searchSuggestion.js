import http from 'k6/http';
import { check } from 'k6';

const endpoint = '/search/v1/search/suggestion';
const prop = JSON.parse(open('../config/config.json'));

export default function searchByText()
{
    suggestionSearch();
}

export function suggestionSearch()
{
    var url = prop.gintaa_baseurl.concat(endpoint + '?text=camera');
    let res = http.get(url);
    
    console.log(`,${url},` +' suggestionSearch,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['suggestionSearch: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function suggestionSearch_paramMan()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let res = http.get(url);
    // console.log(res.body);
    console.log(`,${url},` +' suggestionSearch,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['suggestionSearch: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function suggestionSearch_diffMethod()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let res = http.put(url);
    // console.log(res.body);
    console.log(`,${url},` +' suggestionSearch_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['suggestionSearch_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function suggestionSearch_invText()
{
    var url = prop.gintaa_baseurl.concat(endpoint + '?text=0000');
    let res = http.get(url);
    // console.log(res.body);
    console.log(`,${url},` +' suggestionSearch_invText,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['suggestionSearch_invText: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}