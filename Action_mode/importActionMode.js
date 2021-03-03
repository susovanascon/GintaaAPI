import http from 'k6/http';
import { check } from 'k6';
//************************************
//IMPORT ACTION MODES FROM EXCEL FILE*
//************************************

var endpoint = '/action/v1/action/mode/import/csv';

const validFile = open ('./Action_Mode_Create.xlsx','b');
const invalidFile = open('./AC_Repair.jpg','b')

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    importActionMode(baseurl)
}

export function importActionMode(baseurl)
{
    var url=baseurl.concat(endpoint);
    var data = {
        file: http.file(validFile,'Action_Mode_Create.xlsx','multipart/form-data')
    };
    var res = http.post(url,data,null);
    console.log(res.body + " " + res.status)
    console.log(`,${url},` +'importActionMode,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['importActionMode: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function importActionMode_invFile(baseurl)
{
    var url=baseurl.concat(endpoint);
    var data = {
        file: http.file(invalidFile,'AC_Repair.jpg','multipart/form-data')
    };
    var res = http.post(url,data,null);
    console.log(res.body + " " + res.status)
    console.log(`,${url},` +'importActionMode_invFile,' + '415,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['importActionMode_invFile: EXPECTED: 415,     ACTUAL: ' + `${res.status}`] : res.status === 415,
    });
}