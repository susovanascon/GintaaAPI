import http from 'k6/http';
import { check } from 'k6';
import { getActionGroupName } from "./getAllActionGroup.js";
//******************************
//GET A PARTICULAR ACTION GROUP*
//******************************

var endpoint = '/action/v1/action/group/';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    getParticularActionGroup(baseurl);
}

export function getParticularActionGroup(baseurl)
{
    var actionGroupName = getActionGroupName(baseurl);
    var url = baseurl.concat(endpoint + actionGroupName);
    var res = http.get(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getParticularActionGroup,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getParticularActionGroup: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function getParticularActionGroup_diffMethod(baseurl)
{
    var actionGroupName = getActionGroupName(baseurl);
    var url = baseurl.concat(endpoint + actionGroupName);
    var res = http.put(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getParticularActionGroup_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getParticularActionGroup_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function getParticularActionGroup_invGrpName(baseurl)
{
    var actionGroupName = 'abc';
    var url = baseurl.concat(endpoint + actionGroupName);
    var res = http.get(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getParticularActionGroup_invGrpName,' + '404,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getParticularActionGroup_invGrpName: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404
        });
}