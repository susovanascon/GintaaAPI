import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from "../generateToken.js";

//**************************
// GET USER DEFAULT ADDRESS*
//**************************
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/users/v1/user/address'
export default function start_verif()
{
  var tokenID = tokenGenerate() ;
    getUserDefaultAddress(tokenID);
    getUserDefaultAddress_noToken();
    getUserDefaultAddress_invalidToken(tokenID);
    getUserDefaultAddress_diffMethod(tokenID);
}
export function getUserDefaultAddress(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {'X-Authorization-Firebase': tokenID};
    let res = http.get(url, { headers: requestHeaders });
    
    console.log(`,${url},` +' getUserDefaultAddress,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getUserDefaultAddress: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200,
        });
}
export function getUserDefaultAddress_noToken()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let res = http.get(url);
    
    console.log(`,${url},` +' getUserDefaultAddress_noToken,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getUserDefaultAddress_noToken: EXPECTED: 403,      ACTUAL: ' + `${res.status}`]: res.status === 403,
        });
}
export function getUserDefaultAddress_invalidToken(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {'X-Authorization-Firebase': tokenID + "a"};
    let res = http.get(url, { headers: requestHeaders });
    
    console.log(`,${url},` +' getUserDefaultAddress_invalidToken,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getUserDefaultAddress_invalidToken: EXPECTED: 403,      ACTUAL: ' + `${res.status}`]: res.status === 403,
        });
}
export function getUserDefaultAddress_diffMethod(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {'X-Authorization-Firebase': tokenID};
    let res = http.put(url, null,{ headers: requestHeaders });

    console.log(`,${url},` +' getUserDefaultAddress_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getUserDefaultAddress_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405,
        });
}