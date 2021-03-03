import http from 'k6/http';


var baseurl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/';
var APIkey = 'AIzaSyDF8q5f7ErhnFfy9261MdnJi2mAJw_pgjk';
var verificationCodePath = 'sendVerificationCode';
var verificationPhonePath = 'verifyPhoneNumber';
var header = {'Content-Type': 'application/json'};

export default function()
{
  tokenGenerate();
  tokenGenerate_2()
}

export function tokenGenerate() {
    var vfcode = baseurl.concat(verificationCodePath + '?key=' + APIkey);
    var phone = JSON.stringify({
        "phoneNumber": "+917070707070"
      });
    //let header11 = {'Content-Type': 'application/json'};
    let respons = http.post(vfcode, phone , { headers: header });
    const sinfo = respons.json().sessionInfo;
    var payload5 = JSON.stringify({
            "sessionInfo": 	sinfo,
        "code":"707070"
      });
    var vfphone = baseurl.concat(verificationPhonePath + '?key=' + APIkey);
    let res100 = http.post(vfphone, payload5 , { headers: header });
    var tokenID = res100.json().idToken;
    // console.log(tokenID)
    return tokenID;
}
export function tokenGenerate_2() {
    
  var vfcode = baseurl.concat(verificationCodePath + '?key=' + APIkey);
  var phone = JSON.stringify({
      "phoneNumber": "+911010101010"
    });
  let respons = http.post(vfcode, phone , { headers: header });
  const sinfo = respons.json().sessionInfo;
  var payload5 = JSON.stringify({
          "sessionInfo": 	sinfo,
      "code":"101010"
    });
  var vfphone = baseurl.concat(verificationPhonePath + '?key=' + APIkey);
  let res100 = http.post(vfphone, payload5 , { headers: header });
  var tokenID_2 = res100.json().idToken;
  // console.log(tokenID_2)
  return tokenID_2;
}