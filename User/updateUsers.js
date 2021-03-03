import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

const prop = JSON.parse(open('../config/config.json'));

var endpoint = '/users/v1/user';

var body = {
  "dob": "12-09-1972",
  "gender": "string",
  "name": "string"
}
export default function()
{
  var tokenID = tokenGenerate();
  updateUser(tokenID);
}
export function updateUser(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.dob = prop.userService.userDetail.dob;
    body.gender = prop.userService.userDetail.gender;
    body.name = prop.userService.userDetail.name;
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    //var statusCode = res.json().code;
    // console.log(res.body)
    console.log(`,${url},` +' updateUser,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['updateUser: Expected: 200,Actual:  ' + `${res.status}`]: (res) => res.status === 200,
     });
}
export function updateUser_blankNameField(tokenID) {
    
  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.name = prop.userService.invalidUserDetail.blankName;
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +'updateUser_blankNameField,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
  'updateUser_blankNameField : Expected: 400,Actual:  ': (res) => res.status === 400
  });
}
export function updateUser_invalidLengthName(tokenID) {
    
  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.name = prop.userService.invalidUserDetail.moreLengthName; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateUser_invalidLengthName,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
  ['updateUser_invalidLengthName : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400
  });
}
export function updateUser_numName(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.name = prop.userService.invalidUserDetail.numName; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateUser_numName,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['updateUser_numName : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400
  });
}
export function updateUser_symName(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.name = prop.userService.invalidUserDetail.symName; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //var statusCode = res.json().code;
  console.log(`,${url},` +' updateUser_symName,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['updateUser_symName : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'numName : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_alphaNumName(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.name = prop.userService.invalidUserDetail.alphaNumName; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //var statusCode = res.json().code;
  console.log(`,${url},` +' updateUser_alphaNumName,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['updateUser_alphaNumName : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'numName : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_genMan(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  delete body.gender;

  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  // console.log(res.status + " " + res.body)
  console.log(`,${url},` +' updateUser_genMan,' + '200,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['updateUser_genMan : Expected: 200,Actual:  ' + `${res.status}`]: (res) => res.status === 200
  });
}
export function updateUser_genBlank(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.gender = prop.userService.invalidUserDetail.blankGender;
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateUser_genBlank,' + '400,' + res.status + `,${res.timings.duration}`);
  //var statusCode = res.json().code;
  check(res, {
    ['updateUser_genBlank : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'genMan : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_genNum(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.gender = prop.userService.invalidUserDetail.numericGender;
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateUser_genNum,' + '400,' + res.status + `,${res.timings.duration}`);
  //var statusCode = res.json().code;
  check(res, {
    ['updateUser_genNum : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'genMan : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_genSym(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.gender = prop.userService.invalidUserDetail.symbolicGender;
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateUser_genSym,' + '400,' + res.status + `,${res.timings.duration}`);
  //var statusCode = res.json().code;
  check(res, {
    ['updateUser_genSym : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'genMan : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_genCap(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.gender = prop.userService.invalidUserDetail.capGender;
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });

  console.log(`,${url},` +' updateUser_genCap,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['updateUser_genCap : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'genMan : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_invGen(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.gender = 'AAA'; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //var statusCode = res.json().code;
  console.log(`,${url},` +' updateUser_invGen,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    ['updateUser_invGen : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'invGen : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_dobMan(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  delete body.dob; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //var statusCode = res.json().code;
  console.log(`,${url},` +' updateUser_dobMan,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
  ['updateUser_dobMan : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'dobMan : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_dobBlank(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.dob = ''; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateUser_dobBlank,' + '400,' + res.status + `,${res.timings.duration}`);
  //var statusCode = res.json().code;
  check(res, {
  ['updateUser_dobBlank : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'lessDOB : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_dobAlpha(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.dob = prop.userService.invalidUserDetail.alphaDOB; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateUser_dobAlpha,' + '400,' + res.status + `,${res.timings.duration}`);
  //var statusCode = res.json().code;
  check(res, {
  ['updateUser_dobAlpha : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'lessDOB : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_dobSym(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.dob = prop.userService.invalidUserDetail.symDOB; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateUser_dobSym,' + '400,' + res.status + `,${res.timings.duration}`);
  //var statusCode = res.json().code;
  check(res, {
  ['updateUser_dobSym : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  });
}
export function updateUser_lessDOB(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.dob = '19-04-2020'; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateUser_lessDOB,' + '400,' + res.status + `,${res.timings.duration}`);
  //var statusCode = res.json().code;
  check(res, {
  ['updateUser_lessDOB : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'lessDOB : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_invDOB(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.dob = '31-02-1989'; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //var statusCode = res.json().code;
  console.log(`,${url},` +' updateUser_invDOB,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
  ['updateUser_invDOB : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'invDOB : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_invDOBMonth(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.dob = '19-18-1997'; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //var statusCode = res.json().code;
  console.log(`,${url},` +' updateUser_invDOBMonth,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
  ['updateUser_invDOBMonth : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'invDOB : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_invDOBYear(tokenID) {

  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
    'X-Authorization-Firebase': tokenID,
    'Content-Type': 'application/json'
  };
  body.dob = '19-18-3000'; 
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //var statusCode = res.json().code;
  console.log(`,${url},` +' updateUser_invDOBYear,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
  ['updateUser_invDOBYear : Expected: 400,Actual:  ' + `${res.status}`]: (res) => res.status === 400,
  //'invDOB : Status code in response body MUST be 400': (res) => statusCode === 400,
  });
}
export function updateUser_invalidAuth(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID + "a",
      'Content-Type': 'application/json'
    };
    body.dob = '19-04-1990';
    body.gender = 'Male';
    body.name = 'Test User'
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    //var statusCode = res.json().code;
    console.log(`,${url},` +' updateUser_invalidAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['updateUser_invalidAuth: Expected: 403,Actual:  ' + `${res.status}`]: (res) => res.status === 403,
     });
}
export function updateUser_noToken()
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
      'Content-Type': 'application/json'
    };
    body.dob = '19-04-1990';
    body.gender = 'Male';
    body.name = 'Test User'
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    //var statusCode = res.json().code;
    console.log(`,${url},` +' updateUser_noToken,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['updateUser_noToken: Expected: 403,Actual:  ' + `${res.status}`]: (res) => res.status === 403,
     });
}
export function updateUser_diffMethod(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.dob = '19-04-1990';
    body.gender = 'Male';
    body.name = 'Test User'
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    //var statusCode = res.json().code;
    console.log(`,${url},` +' updateUser_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['updateUser_diffMethod: Expected: 405,Actual:  ' + `${res.status}`]: (res) => res.status === 405,
     });
}
export function updateUser_diffContentType(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'multipart/form-data'
    };
    body.dob = '19-04-1990';
    body.gender = 'Male';
    body.name = 'Test User'
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    //var statusCode = res.json().code;
    console.log(`,${url},` +' updateUser_diffContentType,' + '412,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['updateUser_diffContentType: Expected: 412,Actual:  ' + `${res.status}`]: (res) => res.status === 412,
     });
}