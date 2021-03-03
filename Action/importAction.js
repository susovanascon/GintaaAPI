import http from 'k6/http';
import { check } from 'k6';

var endpoint = '/action/v1/action/upload/csv';

const validFile = open ('./action.xlsx','b');
const invalidFile = open('./1-min.pdf','b')

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    importActionMode(baseurl)
}

export function importAction(baseurl)
{
    var url=baseurl.concat(endpoint);
    var data = {
        file: http.file(validFile,'action.xlsx','multipart/form-data')
    };
    var res = http.post(url,data,null);
    console.log(res.body + " " + res.status)
    console.log(`,${url},` +'importAction,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['importAction: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function importAction_invFile(baseurl)
{
    var url=baseurl.concat(endpoint);
    var data = {
        file: http.file(invalidFile,'1-min.pdf','multipart/form-data')
    };
    var res = http.post(url,data,null);
    console.log(res.body + " " + res.status)
    console.log(`,${url},` +'importAction_invFile,' + '415,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['importAction_invFile: EXPECTED: 415,     ACTUAL: ' + `${res.status}`] : res.status === 415,
    });
}