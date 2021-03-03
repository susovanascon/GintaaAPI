import http from 'k6/http';
import { check } from 'k6';
import { getMobileTransactionID } from './ini_verify_mob.js';

//**************
//use this api to verify mobile through otp*
//**************
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/users/v1/user/mobile/verify';


export function verify_mob(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint);
  var requestHeaders = {'X-Authorization-Firebase': tokenID};  
  let p_tran_ID = getMobileTransactionID(tokenID);
  var payload = JSON.stringify({
    verificationTransactionId : "'"+p_tran_ID+"'",
    verifyOtp : '123456'      
  });
  let res = http.post(url, payload,{ headers: requestHeaders });
  check(res, {
    'verify_mob: Status code MUST be 200': res.status === 200,
  });
}

export function vm_no_auth()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let res = http.post(url);
    check(res, {
      'vm_no_auth: Status code MUST be 403': res.status === 403
    });
}
