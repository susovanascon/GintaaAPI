import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//**************************************/
//use this api to fetch all user details/
//**************************************/
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/users/v1/user/profile'; 

export default function userDetails()
{
  var tokenID = tokenGenerate() ;
  getUserDetail(tokenID);
  // getUserDetail_noToken();
  // getUserDetail_invalidToken();
}

export function getUserDetail(tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint);
  // console.log(url)
  var requestHeaders = {'X-Authorization-Firebase': tokenID};
  var res = http.get(url, { headers: requestHeaders });
  // if (res.status == 200) {
  //   var testStatus = "PASS";
  // }
  // else
  // {
  //   var testStatus = "FAIL";
  // }
  // console.log(`,${url},` +'getUserDetail,' + '200,' + res.status);
  // console.log(res.body);
  console.log(`,${url},` +'getUserDetail,' +   '200,' + res.status + `,${res.timings.duration}`);
  // console.log(`,${url},` +'getUserDetail,' + '200,' + res.status + `,${testStatus}`);
  check(res, {
    ['getUserDetail: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
  });
}
export function getUserDetail_noToken()
{
  var url=prop.gintaa_baseurl.concat(endpoint);
  let res = http.get(url);
  // if (res.status == 403) {
  //   var testStatus = "PASS";
  // }
  // else
  // {
  //   var testStatus = "FAIL";
  // }
  // console.log(`,${url},` + 'getUserDetail_noToken,'+'403,' + res.status + `,${testStatus}`);
  // console.log(`,${url},` + 'getUserDetail_noToken,'+'403,' + res.status);
  console.log(`,${url},` +'getUserDetail_noToken,' + '200,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['getUserDetail_noToken: EXPECTED: 403,      ACTUAL: ' + `${res.status}`]: res.status === 403,
  });
}
export function getUserDetail_invalidToken(tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint);
  let headers = {'X-Authorization-Firebase': tokenID + 'a'};
  let res = http.get(url, { headers: headers });
  // if (res.status == 403) {
  //   var testStatus = "PASS";
  // }
  // else
  // {
  //   var testStatus = "FAIL";
  // }
  // console.log(`,${url},` +'getUserDetail_invalidToken,' + '403,' + res.status + `,${testStatus},`);
  // console.log(`,${url},` +'getUserDetail_invalidToken,' + '403,' + res.status);
  console.log(`,${url},` +'getUserDetail_invalidToken,' + '403,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['getUserDetail_invalidToken: EXPECTED: 403,    ACTUAL:  ' + `${res.status}`]: res.status === 403,
  });
}
export function getUserDetail_diffMethod(tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint);
  var requestHeaders = {'X-Authorization-Firebase': tokenID};
  var res = http.put(url,null, { headers: requestHeaders });
  // if (res.status == 200) {
  //   var testStatus = "PASS";
  // }
  // else
  // {
  //   var testStatus = "FAIL";
  // }
  // console.log(`,${url},` +'getUserDetail_diffMethod,' + '405,' + res.status + `,${testStatus}`);
  console.log(`,${url},` +'getUserDetail_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['getUserDetail_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
  });
}
