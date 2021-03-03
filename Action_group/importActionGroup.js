import http from 'k6/http';
import { check } from 'k6';
//************************************
//IMPORT ACTION GROUPS FROM EXCEL FILE*
//************************************

var endpoint = '/action/v1/action/group/import/csv';

const validFile = open ('./Action_Group_Create.xlsx','b');
const invalidFile = open('./AC_Repair.jpg','b')

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    importActionGroup(baseurl)
}

export function importActionGroup(baseurl)
{
    var url=baseurl.concat(endpoint);
    var data = {
        file: http.file(validFile,'Action_Group_Create.xlsx','multipart/form-data')
    };
    var res = http.post(url,data,null);
    // console.log(res.body + " " + res.status)
    console.log(`,${url},` +'importActionGroup,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['importActionGroup: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function importActionGroup_invFile(baseurl)
{
    var url=baseurl.concat(endpoint);
    var data = {
        file: http.file(invalidFile,'AC_Repair.jpg','multipart/form-data')
    };
    var res = http.post(url,data,null);
    // console.log(res.body + " " + res.status)
    console.log(`,${url},` +'importActionGroup_invFile,' + '415,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['importActionGroup_invFile: EXPECTED: 415,     ACTUAL: ' + `${res.status}`] : res.status === 415,
    });
}