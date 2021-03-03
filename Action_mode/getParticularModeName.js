import http from 'k6/http';
import { check } from 'k6';
import { getActionModeName } from "./getActionMode.js";

//************************
//GET ALL THE ACTION MODE*
//************************

var endpoint = '/action/v1/action/mode/';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    getParticularActionMode(baseurl);
}

export function getParticularActionMode(baseurl)
{
    var modeName = getActionModeName(baseurl)
    var url = baseurl.concat(endpoint + modeName);
    var res = http.get(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getParticularActionMode,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getParticularActionMode: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function getParticularActionMode_diffMethod(baseurl)
{
    var modeName = getActionModeName(baseurl)
    var url = baseurl.concat(endpoint + modeName);
    var res = http.put(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getParticularActionMode_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getParticularActionMode_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function getParticularActionMode_invMode(baseurl)
{
    var modeName = getActionModeName(baseurl)
    var url = baseurl.concat(endpoint + modeName);
    var res = http.get(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getParticularActionMode_invMode,' + '404,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getParticularActionMode_invMode: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404
        });
}