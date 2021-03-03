import http from 'k6/http';
import { check } from 'k6';

//*************************
//GET ALL THE ACTION GROUP*
//*************************

var endpoint = '/action/v1/action/group';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    getActionGroup(baseurl);
    getActionModeName(baseurl)
}

export function getActionGroup(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionGroup,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionGroup: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function getActionGroup_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.put(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getActionGroup_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getActionGroup_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function getActionGroupName(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    var actionGroupName = res.json().payload[0].actionGroupName;
    // console.log(actionGroupName);
    return actionGroupName;
}