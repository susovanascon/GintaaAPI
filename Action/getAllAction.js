import http from 'k6/http';
import { check } from 'k6';

//************************************
//GET ACTIONS GROUPED BY ACTION GROUP*
//************************************

var endpoint = '/action/v1/action';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    // getGroupedAction(baseurl);
    // getActionID(baseurl);
    getActionGroupName(baseurl);
}

export function getGroupedAction(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getGroupedAction,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getGroupedAction: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function getGroupedAction_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.put(url);
    // console.log(res.status + res.body);
    console.log(`,${url},` +' getGroupedAction_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getGroupedAction_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function getActionID(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    // console.log(res.status + res.body);
    var actionID = res.json().payload[0].actionsResponse[0].actionId;

    return actionID;
}
export function getActionGroupName(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    // console.log(res.status + res.body);
    var actionGroup = res.json().payload[0].actionsResponse[0].actionGroup;
    // console.log(actionGroup)
    return actionGroup;
}