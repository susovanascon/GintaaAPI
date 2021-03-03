import http from 'k6/http';
import { check } from 'k6';
import { getEmailVerificationID} from './ini_verify_email.js';

//************************************* */
//use this api to verify email through otp
//************************************* */
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/users/v1/user/email/verify';

export default function()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  verify_email(tokenID);
  verify_email_no_auth(baseurl)
}
export function verify_email(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint)
  var requestheaders = {'X-Authorization-Firebase': tokenID};
  var emailID = getEmailVerificationID(tokenID)
  var body = JSON.stringify({
    verificationTransactionId : "'"+emailID+"'",
    verifyOtp : ''      
  });
  
  let res = http.post(url,body, { headers: requestheaders });
  check(res, {
    'verify_email: Status code MUST be 200': res.status === 200
    });
}
export function verify_email_no_auth()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let res = http.post(url);
    check(res, {
      'verify_email_no_auth: Status code MUST be 403': res.status === 403
    });
}