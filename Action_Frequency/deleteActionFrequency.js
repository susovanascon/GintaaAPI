import http from 'k6/http';
import { check } from 'k6';
import { getActionFrequencyName } from "./getActionFrequency.js";

//***************************
//DELETE AN ACTION FREQUENCY*
//***************************

var endpoint = '/action/v1/action/frequency/';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    // getGroupedAction(baseurl);
    // getActionID(baseurl);
    deleteActionFrequency(baseurl);
}

export function deleteActionFrequency(baseurl)
{
    var frequencyName = getActionFrequencyName(baseurl);
    var url = baseurl.concat(endpoint + frequencyName);
    // console.log(url)
    var res = http.del(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' deleteActionFrequency,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['deleteActionFrequency: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function deleteActionFrequency_diffMethod(baseurl)
{
    var frequencyName = getActionFrequencyName(baseurl);
    var url = baseurl.concat(endpoint + frequencyName);
    // console.log(url)
    var res = http.put(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' deleteActionFrequency_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['deleteActionFrequency_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function deleteActionFrequency_invName(baseurl)
{
    var frequencyName = 'abc';
    var url = baseurl.concat(endpoint + frequencyName);
    // console.log(url)
    var res = http.del(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' deleteActionFrequency_invName,' + '404,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['deleteActionFrequency_invName: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404
        });
}
