import http from 'k6/http';
import { check } from 'k6';
import { getCatURL } from "../Category/getCategory.js";

const endpoint = '/search/v1/search/url';
const prop = JSON.parse(open('../config/config.json'));

export default function catSearch()
{
    catURLSearch();
}
export function catURLSearch()
{
    var catURL = getCatURL(prop.gintaa_baseurl);
    var url = prop.gintaa_baseurl.concat(endpoint + catURL);

    let res = http.get(url);

    console.log(`,${url},` +' catURLSearch,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['catURLSearch: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}