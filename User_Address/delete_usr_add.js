import http from 'k6/http';
import { check } from 'k6';
import { user_addID } from './usr_all_add.js';
import { tokenGenerate } from '../generateToken.js';

//**************************
//DELETE USER ADDRESS BY ID*
//**************************
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/users/v1/user/address/'

export default function del_add_user()
{
  var tokenID = tokenGenerate() ;
  delUserAddress_invAddress(tokenID);
  delUserAddress_noToken(tokenID);
  delUserAddress_invalidToken(tokenID);
  delUserAddress_diffMethod(tokenID);
  delUserAddress(tokenID);
}

export function delUserAddress(addressID,tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
    };
  let res = http.del(url,null,{ headers: requestHeaders });
  console.log(`,${url},` +' delUserAddress,' + '200,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['delUserAddress: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200,
    });
}
export function delUserAddress_invAddress(tokenID)
{
    var p_url = prop.gintaa_baseurl.concat(endpoint);
    var addressID = 'd68749b3';
    var url = p_url.concat(addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      };
    
    var res = http.del(url,null,{ headers: requestHeaders });
    console.log(`,${url},` +' del_inv_user_add,' + '404,' + res.status + `,${res.timings.duration}`);
    check(res, {
            ['del_inv_user_add: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404,
        });
}
export function delUserAddress_noToken(addressID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  
  let res = http.del(url,null,null);
  console.log(`,${url},` +' delUserAddress_noToken,' + '403,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['delUserAddress_noToken: EXPECTED: 403,      ACTUAL: ' + `${res.status}`]: res.status === 403,
    });
}
export function delUserAddress_invalidToken(addressID,tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID + "a",
    };
  let res = http.del(url,null,{ headers: requestHeaders });
  console.log(`,${url},` +' delUserAddress_invalidToken,' + '403,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['delUserAddress_invalidToken: EXPECTED: 403,      ACTUAL: ' + `${res.status}`]: res.status === 403,
    });
}
export function delUserAddress_diffMethod(addressID,tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
    };
  let res = http.post(url,null,{ headers: requestHeaders });
  console.log(`,${url},` +' delUserAddress_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['delUserAddress_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405,
    });
}