import http from 'k6/http';
import { check } from 'k6';
// import { user_addID } from './usr_all_add.js';
import { tokenGenerate } from '../generateToken.js';

//***********************
//GET USER ADDRESS BY ID*
//***********************
var endpoint = '/users/v1/user/address/';
const prop = JSON.parse(open('../config/config.json'));
export default function()
{
  var tokenID = tokenGenerate();
    // getAddressByID(tokenID);
    // getAddressByID_invalidAddressByID(tokenID);
    getAddressByID_noToken(tokenID);
    getAddressByID_invalidToken(tokenID);
    getAddressByID_diffMethod(tokenID);
}
export function getAddressByID(addressID,tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      };
  let res = http.get(url,{ headers: requestHeaders });
  console.log(`,${url},` +' getAddressByID,' + '200,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['getAddressByID : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200,
    });
}
export function getAddressByID_invalidAddressByID(tokenID)
{
  var addressID = 'd68749b3'; 
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);  
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
    };
  let res = http.get(url,{ headers: requestHeaders });
  console.log(`,${url},` +' getAddressByID_invalidAddressByID,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['getAddressByID_invalidAddressByID : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400,
    });
}
export function getAddressByID_noToken(addressID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  
  let res = http.get(url);
  console.log(`,${url},` +' getAddressByID_noToken,' + '403,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['getAddressByID_noToken : EXPECTED: 403,      ACTUAL: ' + `${res.status}`]: res.status === 403,
    });
}
export function getAddressByID_invalidToken(addressID,tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID + "a",
  };
  let res = http.get(url,{ headers: requestHeaders });
  
  console.log(`,${url},` +' getAddressByID_invalidToken,' + '403,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['getAddressByID_invalidToken : EXPECTED: 403,      ACTUAL: ' + `${res.status}`]: res.status === 403,
    });
}
export function getAddressByID_diffMethod(addressID,tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      };
  let res = http.patch(url,null,{ headers: requestHeaders });
  
  console.log(`,${url},` +' getAddressByID_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['getAddressByID_diffMethod : EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405,
    });
}