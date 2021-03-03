import http from 'k6/http';
import { check } from 'k6';
import { getActionFrequencyName } from "./getActionFrequency.js";

//************************************
//GET THE PARTICULAR ACTION FREQUENCY*
//************************************

var endpoint = '/action/v1/action/frequency/';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    // getGroupedAction(baseurl);
    // getActionID(baseurl);
    getActionFrequencybyName(baseurl);
}

export function getActionFrequencybyName(baseurl)
{
    var frequencyName = getActionFrequencyName(baseurl);
    var url = baseurl.concat(endpoint + frequencyName);
    // console.log(url)
    var res = http.get(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionFrequencybyName,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionFrequencybyName: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function getActionFrequencybyName_diffMethod(baseurl)
{
    var frequencyName = getActionFrequencyName(baseurl);
    var url = baseurl.concat(endpoint + frequencyName);
    // console.log(url)
    var res = http.put(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionFrequencybyName_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionFrequencybyName_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function getActionFrequencybyName_invName(baseurl)
{
    var frequencyName = 'XYZ';
    var url = baseurl.concat(endpoint + frequencyName);
    // console.log(url)
    var res = http.get(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionFrequencybyName_invName,' + '404,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionFrequencybyName_invName: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404
        });
}
