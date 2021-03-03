import http from 'k6/http';
import { check } from 'k6';

//************************
//GET ALL THE ACTION MODE*
//************************

var endpoint = '/action/v1/action/mode';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    getActionMode(baseurl);
    //getActionModeName(baseurl);
    getActionMode_diffMethod(baseurl)
}

export function getActionMode(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionMode,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionMode: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function getActionMode_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.put(url);
    console.log(res.status + res.body);
    console.log(`,${url},` +' getActionMode_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionMode_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function getActionModeName(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    var modeName = res.json().payload[0].name;
    // console.log(modeName)
    return modeName;
}