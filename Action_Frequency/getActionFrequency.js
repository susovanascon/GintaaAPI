import http from 'k6/http';
import { check } from 'k6';

//*****************************
//GET ALL THE ACTION FREQUENCY*
//*****************************

var endpoint = '/action/v1/action/frequency';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    // getGroupedAction(baseurl);
    // getActionID(baseurl);
    getActionFrequency(baseurl);
}

export function getActionFrequency(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionFrequency,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionFrequency: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function getActionFrequency_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.put(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionFrequency_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionFrequency_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function getActionFrequencyName(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    var frequencyValue = res.json().payload[0].frequencyValue;

    return frequencyValue
}