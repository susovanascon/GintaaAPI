import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';
//**************************************** */
//use this api to initiate user email verification through otp
//**************************************** */
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/users/v1/user/email/initiate/';

export default function start_verif()
{
  var tokenID = tokenGenerate() ;
  initiateVerifyEmail(tokenID)
}
export function initiateVerifyEmail(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.validEmail);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID
  };
  let res = http.post(url,null, {headers : requestHeaders});
  console.log(`,${url},` +' initiateVerifyEmail,' + '200,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['initiateVerifyEmail: Expected: 200,Actual: ' + `${res.status}`]: res.status === 200
  });
}
export function initiateVerifyEmail_noToken()
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.validEmail);
  let res = http.post(url);
  console.log(`,${url},` +' initiateVerifyEmail_noToken,' + '403,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['initiateVerifyEmail_noToken: Expected: 403,Actual: ' + `${res.status}`]: res.status === 403
  });
}
export function initiateVerifyEmail_invalidToken(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.validEmail);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID + 'a'
  };
  let res = http.post(url,null, {headers : requestHeaders});
  
  console.log(`,${url},` +' initiateVerifyEmail_invalidToken,' + '403,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['initiateVerifyEmail_invalidToken: Expected: 403,Actual: ' + `${res.status}`]: res.status === 403
  });
}
export function initiateVerifyEmail_invalidEmail(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.invalidEmail.format);
  var requestHeaders =  {
    'X-Authorization-Firebase': tokenID
  };

  let res = http.post(url,null, { headers: requestHeaders });
  // console.log(res.status + " " + res.body)
  console.log(`,${url},` +' initiateVerifyEmail_invalidEmail,' + '404,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['initiateVerifyEmail_invalidEmail: Expected: 404,Actual: ' + `${res.status}`]: res.status === 404
    });
}
export function initiateVerifyEmail_diffMethod(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.validEmail);
  var payload = JSON.stringify({  });
  var params = {
      headers: {
        'X-Authorization-Firebase': tokenID,
      },
  };
  let res = http.put(url,payload, params);
  console.log(`,${url},` +' initiateVerifyEmail_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['initiateVerifyEmail_diffMethod: Expected: 405,Actual: ' + `${res.status}`]: res.status === 405
  });
}
export function initiateVerifyEmail_existingMail(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.invalidEmail.existing);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID
  };
  let res = http.post(url,null, {headers : requestHeaders});
  //PLEASE RE-VERIFY THE STATUS CODE
  console.log(`,${url},` +' initiateVerifyEmail_existingMail,' + '404,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['initiateVerifyEmail_existingMail: Expected: 404,Actual: ' + `${res.status}`]: res.status === 404
  });
}
export function getEmailVerificationID(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + prop.userService.validEmail);
  var requestHeaders = {
    'X-Authorization-Firebase': tokenID
  };
  let res = http.post(url,null, {headers : requestHeaders});
  if (res.status === 200) {
    var emailID = res.json().payload.verificationTransactionId;
  }  
  return emailID;
}