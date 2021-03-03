import http from 'k6/http';
import { check } from 'k6';

var endpoint = '/categories/v1/verticals';

var requestHeaders = {
    'Content-Type': 'application/json'
  };

var body = {
        "description": "string",
        "label": "string",
        "name": "string",
        "status": "string"
      }
export default function verticalCreate()
{
var baseurl = 'https://alpha.api.gintaa.com';
insertVertical(baseurl);
}

export function insertVertical(baseurl)
{
    var url = baseurl.concat(endpoint);
    //*********** Change the name and label of the vertical everytime before hitting */
    body.description = "This is dummy vertical created only only for testing purpose";
    body.label = "Furniture and Decor";
    body.name = "Furniture and Decor";
    body.status = "active";
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +'insertVertical,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        'insertVertical : Status code MUST be 200': res.status === 200
        });
}
export function insertVertical_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    //*********** Change the name and label of the vertical everytime before hitting */
    body.description = "This is dummy vertical created only only for testing purpose";
    body.label = "Test Vertical";
    body.name = "Test Vertical";
    body.status = "unpublished";
    var res = http.put(url, JSON.stringify(body), { headers: requestHeaders });
    check(res, {
        'insertVertical : Status code MUST be 200': res.status === 200
        });
}
export function insertVertical_diffHeader(baseurl)
{
    var url = baseurl.concat(endpoint);
    //*********** Change the name and label of the vertical everytime before hitting */
    body.description = "This is dummy vertical created only only for testing purpose";
    body.label = "Test Vertical";
    body.name = "Test Vertical";
    body.status = "unpublished";
    var requestHeaders = {
      'Content-Type': 'multipart/form-data'
    };
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    check(res, {
        'insertVertical : Status code MUST be 200': res.status === 200
        });
}
export function insertVertical_noDes(baseurl)
{
    var url = baseurl.concat(endpoint);
    //*********** Change the name and label of the vertical everytime before hitting */
    delete body.description;
    body.label = "Test Vertical";
    body.name = "Test Vertical";
    body.status = "unpublished";
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    check(res, {
        'insertVertical : Status code MUST be 200': res.status === 200
        });
}
export function insertVertical_nolabel(baseurl)
{
    var url = baseurl.concat(endpoint);
    //*********** Change the name and label of the vertical everytime before hitting */
    body.description = "This is dummy vertical created only only for testing purpose";
    delete body.label;
    body.name = "Test Vertical";
    body.status = "unpublished";
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    check(res, {
        'insertVertical : Status code MUST be 200': res.status === 200
        });
}
export function insertVertical_noName(baseurl)
{
    var url = baseurl.concat(endpoint);
    //*********** Change the name and label of the vertical everytime before hitting */
    body.description = "This is dummy vertical created only only for testing purpose";
    body.label = "Test Vertical";
    delete body.name;
    body.status = "unpublished";
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    check(res, {
        'insertVertical : Status code MUST be 200': res.status === 200
        });
}
export function insertVertical_noStatus(baseurl)
{
    var url = baseurl.concat(endpoint);
    //*********** Change the name and label of the vertical everytime before hitting */
    body.description = "This is dummy vertical created only only for testing purpose";
    body.label = "Test Vertical";
    body.name = "Test Vertical";
    delete body.status;
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    check(res, {
        'insertVertical : Status code MUST be 200': res.status === 200
        });
}