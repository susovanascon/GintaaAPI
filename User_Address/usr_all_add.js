import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//*************************
//GET ALL THE USER ADDRESS*
//*************************
var endpoint = '/users/v1/user/address/all';
const prop = JSON.parse(open('../config/config.json'));

export default function()
{
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
    getUserAllAddress(tokenID);
    getUserAllAddress_noToken(baseurl);
    getUserAllAddress_invalidToken(tokenID)
    getUserAllAddress_diffMethod(tokenID);
}
export function getUserAllAddress(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let headers = {'X-Authorization-Firebase': tokenID};
    let res = http.get(url, { headers: headers });

    console.log(`,${url},` +' getUserAllAddress,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getUserAllAddress: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function getUserAllAddress_noToken(baseurl)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let res = http.get(url);
    
    console.log(`,${url},` +' getUserAllAddress_noToken,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getUserAllAddress_noToken: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function getUserAllAddress_invalidToken(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let headers = {'X-Authorization-Firebase': tokenID + "a"};
    let res = http.get(url, { headers: headers });
    
    console.log(`,${url},` +' getUserAllAddress_invalidToken,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getUserAllAddress_invalidToken: EXPECTED: 403,      ACTUAL: ' + `${res.status}`]: res.status === 403
        });
}
export function getUserAllAddress_diffMethod(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let headers = {'X-Authorization-Firebase': tokenID};
    let res = http.patch(url, null,{ headers: headers });
    
    console.log(`,${url},` +' getUserAllAddress_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getUserAllAddress_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}
export function user_addID(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let headers = {'X-Authorization-Firebase': tokenID};
    let res = http.get(url, { headers: headers });
    //*********Extracting address ID from response JSON*************
    if(res.status === 200)
    {
        for (let i = 0; i < res.json().payload.length; i++) {
            if (res.json().payload[i].annotation == "Forest")
            {
                var addID = res.json().payload[i].addressId;
                break;
            };
        }  
    }
    //console.log(addID);
    return addID;
}