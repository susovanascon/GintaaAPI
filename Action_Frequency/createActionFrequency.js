import http from 'k6/http';
import { check } from 'k6';

//*****************************
//GET ALL THE ACTION FREQUENCY*
//*****************************

var endpoint = '/action/v1/action/frequency';

var body = {
    "frequencyValue": "string"
  }
export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    // getGroupedAction(baseurl);
    // getActionID(baseurl);
    createActionFrequency(baseurl);
}

export function createActionFrequency(baseurl)
{
    var url = baseurl.concat(endpoint);
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    body.frequencyValue = "YEARLY";

    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createActionFrequency,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createActionFrequency: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function createActionFrequency_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    body.frequencyValue = "YEARLY";

    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createActionFrequency_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createActionFrequency_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function createActionFrequency_valueMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    delete body.frequencyValue;

    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +'createActionFrequency_valueMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createActionFrequency_valueMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createActionFrequency_valueBlank(baseurl)
{
    var url = baseurl.concat(endpoint);
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    body.frequencyValue = "";

    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createActionFrequency_valueBlank,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createActionFrequency_valueBlank: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createActionFrequency_valueSym(baseurl)
{
    var url = baseurl.concat(endpoint);
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    body.frequencyValue = "@$%@$";

    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createActionFrequency_valueSym,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createActionFrequency_valueSym: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createActionFrequency_diffHeader(baseurl)
{
    var url = baseurl.concat(endpoint);
    var requestHeaders = {
        'Content-Type': 'Multipart/form-data'
    };
    body.frequencyValue = "YEARLY";

    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createActionFrequency_diffHeader,' + '412,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createActionFrequency_diffHeader: EXPECTED: 412,      ACTUAL: ' + `${res.status}`]: res.status === 412
        });
}