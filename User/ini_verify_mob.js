import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from "../generateToken.js";

//*************************
//use this api to initiate user mobile verification through otp*
//*************************
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/users/v1/user/mobile/initiate/'

export default function start_verif()
{
  var tokenID = tokenGenerate() ;
  // initiateVerifyMob(tokenID);
  // initiateVerifyMob_noToken();
  // initiateVerifyMob_invalidToken(tokenID);
  // initiateVerifyMob_alphabeticNumber(tokenID);
  // initiateVerifyMob_alphanumericNumber(tokenID);
  initiateVerifyMob_symbolicNumber(tokenID);
  // initiateVerifyMob_moreLengthNumber(tokenID);
  // initiateVerifyMob_lessLengthNumber(tokenID);
  // initiateVerifyMob_diffMethod(tokenID);

}
export function initiateVerifyMob(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.validPhone);
  var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };
  let res = http.post(url,null, {headers : requestHeaders});
  // console.log("initiateVerifyMob ----->" + url + res.body)
  console.log(`,${url},` +' initiateVerifyMob,' + '200,' + res.status + `,${res.timings.duration}`);
  check(res, {
      ['initiateVerifyMob: Expected: 200,Actual: ' + `${res.status}`]: res.status === 200,
    });
}
export function initiateVerifyMob_noToken()
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.validPhone)
  let res = http.post(url);
  // console.log("initiateVerifyMob_noToken ----->" + url + res.body)
  console.log(`,${url},` +' initiateVerifyMob_noToken,' + '403,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['initiateVerifyMob_noToken: Expected: 403,Actual: ' + `${res.status}`]: (res) => res.status === 403
  });
}
export function initiateVerifyMob_invalidToken(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.validPhone);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID + "a"
  };
  let res = http.post(url,null, {headers : requestHeaders});
  // console.log("initiateVerifyMob_invalidToken ----->" + url + res.body)
  console.log(`,${url},` +' initiateVerifyMob_invalidToken,' + '403,' + res.status + `,${res.timings.duration}`);
  check(res, {
      ['initiateVerifyMob_invalidToken: Expected: 403,Actual: ' + `${res.status}`]: res.status === 403,
    });
}
export function initiateVerifyMob_alphabeticNumber(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.invalidPhone.alphabetic);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID
  };
  let res = http.post(url,null, {headers : requestHeaders});
  // console.log("initiateVerifyMob_alphabeticNumber ----->" + url + res.body)
  console.log(`,${url},` +' initiateVerifyMob_alphabeticNumber,' + '404,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['initiateVerifyMob_alphabeticNumber: Expected: 404,Actual: ' + `${res.status}`]: res.status === 404,
  });
}
export function initiateVerifyMob_alphanumericNumber(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.invalidPhone.alphanumeric);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID
  };
  let res = http.post(url,null, {headers : requestHeaders});
  // console.log("initiateVerifyMob_alphanumericNumber ----->" + url + res.body)
  console.log(`,${url},` +' initiateVerifyMob_alphanumericNumber,' + '404,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['initiateVerifyMob_alphanumericNumber: Expected: 404,Actual: ' + `${res.status}`]: res.status === 404,
  });
}
export function initiateVerifyMob_symbolicNumber(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.invalidPhone.symbolic);
  // console.log("Dynamic URL ----->" + url)
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID
  };
  
  try{
    let res = http.post(url, null, {headers : requestHeaders});
    // console.log("initiateVerifyMob_symbolicNumber ----->" +  res.body)
    console.log(`,${url},` +' initiateVerifyMob_symbolicNumber,' + '404,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['initiateVerifyMob_symbolicNumber: Expected: 404,Actual: ' + `${res.status}`]: res.status === 404,
    });
  }catch(err){
    // console.log("initiateVerifyMob_symbolicNumber ----- Error!"+err)
  }
}
export function initiateVerifyMob_moreLengthNumber(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.invalidPhone.moreLength);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID
  };
  let res = http.post(url,null, {headers : requestHeaders});
  // console.log("initiateVerifyMob_moreLengthNumber ----->" + url + res.body)
  console.log(`,${url},` +' initiateVerifyMob_moreLengthNumber,' + '406,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['initiateVerifyMob_moreLengthNumber: Expected: 406,Actual: ' + `${res.status}`]: res.status === 406,
  });
}
export function initiateVerifyMob_lessLengthNumber(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.invalidPhone.lessLength);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID
  };
  let res = http.post(url,null, {headers : requestHeaders});
  // console.log("initiateVerifyMob_lessLengthNumber ----->" + url + res.body)
  console.log(`,${url},` +' initiateVerifyMob_lessLengthNumber,' + '406,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['initiateVerifyMob_lessLengthNumber: Expected: 406,Actual: ' + `${res.status}`]: res.status === 406,
  });
}
export function initiateVerifyMob_diffMethod(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.validPhone);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID
  };
  let res = http.post(url,null, {headers : requestHeaders});
  // console.log("initiateVerifyMob_diffMethod ----->" + url + res.body)
  console.log(`,${url},` +' initiateVerifyMob_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
  check(res, {
      ['initiateVerifyMob_diffMethod: Expected: 405,Actual: ' + `${res.status}`]: res.status === 405,
    });
}
export function initiateVerifyMob_existingMob(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.invalidPhone.existing);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID
  };
  let res = http.post(url,null, {headers : requestHeaders});
// console.log("initiateVerifyMob_existingMob ----->" + url + res.body)
//PLEASE RE-VERIFY THE STATUS CODE
  console.log(`,${url},` +' initiateVerifyMob_existingMob,' + '409,' + res.status + `,${res.timings.duration}`);
  check(res, {
      ['initiateVerifyMob_existingMob: Expected: 409,Actual: ' + `${res.status}`]: res.status === 409,
    });
}
export function getMobileTransactionID(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.validPhone);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID
  };
  let res = http.post(url,null, {headers : requestHeaders});
  if(res.status === 200){
    var phoneID = res.json().payload.verificationTransactionId;
  }
  return phoneID;
}