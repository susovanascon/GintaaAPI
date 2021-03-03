import http from 'k6/http';
import { check } from 'k6';
import { getActionModeName } from "../Action_mode/getActionMode.js";
import { getActionGroupName } from "../Action_group/getAllActionGroup.js";

//*********************
//CREATE/ADD AN ACTION*
//*********************

var endpoint = '/action/v1/action';

var body = {
    "actionGroup": "string",
    "actionLabel": "string",
    "actionMode": "CREATE",
    "actionPurpose": "string",
    "actionUrl": "string",
    "price": 0
  }

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    createAction(baseurl);
}

export function createAction(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function createAction_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function createAction_actionGroupMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    delete body.actionGroup;
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_actionGroupMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_actionGroupMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_actionLabelMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    delete body.actionLabel;
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_actionLabelMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_actionLabelMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_actionModeMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    delete body.actionMode;
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_actionModeMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_actionModeMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_actionPurposeMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    delete body.actionPurpose;
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_actionPurposeMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_actionPurposeMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_actionURLman(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    delete body.actionUrl;
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_actionURLman,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_actionURLman: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_priceMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    delete body.price ;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_priceMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_priceMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_blankActionGroup(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = '';
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_invActionGroup(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = 'aaaaaa';
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function createAction_blankActionLabel(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_blankActionLabel,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_blankActionLabel: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_invalidActionLabel(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "aaaaaa";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_invalidActionLabel,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_invalidActionLabel: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_blankActionMode(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    body.actionMode = '';
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_blankActionMode,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_blankActionMode: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_invalidActionMode(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    body.actionMode = 'aaaaaaa';
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_invalidActionMode,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_invalidActionMode: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_blankActionPurpose(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_blankActionURL(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_blankActionURL,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_blankActionURL: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_invalidActionURL(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "aaaaaaa";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_nonNumericPrice(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 'Hello';
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_nonNumericPrice,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_nonNumericPrice: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
        });
}
export function createAction_diffHeader(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.actionGroup = getActionGroupName(baseurl);
    body.actionLabel = "Give User Ratings";
    body.actionMode = getActionModeName(baseurl);
    body.actionPurpose = "To provide the rating against an offer";
    body.actionUrl = "/rating/provide";
    body.price = 500;
    var requestHeaders = {
        'Content-Type': 'application/text'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + res.body);
    console.log(`,${url},` +' createAction_diffHeader,' + '412,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createAction_diffHeader: EXPECTED: 412,      ACTUAL: ' + `${res.status}`]: res.status === 412
        });
}
