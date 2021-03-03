import http from 'k6/http';
import { check } from 'k6';
import { getActionGroupName } from "./getAllActionGroup.js";
//***********************
//DELETE AN ACTION GROUP*
//***********************

var endpoint = '/action/v1/action/group/';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    deleteActionGroup(baseurl);
}

export function deleteActionGroup(baseurl)
{
    var actionGroupName = getActionGroupName(baseurl);
    var url = baseurl.concat(endpoint + actionGroupName);
    var res = http.del(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' deleteActionGroup,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['deleteActionGroup: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function deleteActionGroup_diffMethod(baseurl)
{
    var actionGroupName = getActionGroupName(baseurl);
    var url = baseurl.concat(endpoint + actionGroupName);
    var res = http.put(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' deleteActionGroup_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['deleteActionGroup_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function deleteActionGroup_invGrpName(baseurl)
{
    var actionGroupName = 'abc';
    var url = baseurl.concat(endpoint + actionGroupName);
    var res = http.del(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' deleteActionGroup_invGrpName,' + '404,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['deleteActionGroup_invGrpName: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404
        });
}