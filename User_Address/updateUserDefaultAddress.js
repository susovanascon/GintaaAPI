import http from 'k6/http';
import { check } from 'k6';
import { user_addID } from './usr_all_add.js';
import { tokenGenerate } from "../generateToken.js";

//**********************************
//CHANGE USER DEFUALT ADDRESS BY ID*
//**********************************
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/users/v1/user/address/update/default';
var body = {addressId : ''};

export default function change_user_default_address_set()
{
    var tokenID = tokenGenerate() ;
    //change_user_default(tokenID);
    // ch_usr_inv_add(tokenID);
    // ch_usr_blnk_add(tokenID);
    changeUserDefault_addressIDMan(tokenID);
    changeUserDefault_diffMethod(tokenID)
}
export function changeUserDefault(addressID,tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    //console.log(addressID);
    body.addressId = addressID;
    //console.log(JSON.stringify(body));
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' change_user_default,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['change_user_default: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200,
        });
}
export function changeUserDefault_addressIDMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    delete body.addressId;
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    
    console.log(`,${url},` +' changeUserDefault_addressIDMan,' + '400,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['changeUserDefault_addressIDMan : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400,
        });
}
export function changeUserDefault_invalidAddress(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    body.addressId = '578bd';
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' ch_usr_inv_add,' + '400,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['ch_usr_inv_add : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400,
        });
}
export function changeUserDefault_blankAddress(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    body.addressId = '';
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' ch_usr_blnk_add,' + '400,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['ch_usr_blnk_add : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400,
        });
}
export function changeUserDefault_noToken(addressID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    //console.log(addressID);
    body.addressId = addressID;
    //console.log(JSON.stringify(body));
    let requestHeaders = {
        'Content-Type': 'application/json'
    };
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' changeUserDefault_noToken,' + '403,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['changeUserDefault_noToken: EXPECTED: 403,      ACTUAL: ' + `${res.status}`]: res.status === 403,
        });
}
export function changeUserDefault_invalidToken(addressID,tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    body.addressId = addressID;
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
        'Content-Type': 'application/json'
    };
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' changeUserDefault_invalidToken,' + '403,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['changeUserDefault_invalidToken: EXPECTED: 403,      ACTUAL: ' + `${res.status}`]: res.status === 403,
        });
}
export function changeUserDefault_diffMethod(addressID,tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    body.addressId = addressID;
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    
    console.log(`,${url},` +' changeUserDefault_diffMethod,' + '405,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['changeUserDefault_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405,
        });
}