import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/users/v1/user/images';
const profilePNGImage = open ('./UserFile/Rating_Original.PNG','b');
const InvalidImage = open ('./UserFile/sample.pdf','b');

export default function()
{
  var tokenID = tokenGenerate() ;
  uploadProfileImage(tokenID);
}

export function uploadProfileImage(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    var data = {
        file: http.file(profilePNGImage,'Rating_Original.PNG','multipart/form-data')
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      }; 
    var res = http.post(url,data,{ headers: requestHeaders });
    // console.log(`,${url},` +' uploadProfileImage,' + '200,' + res.status);
    console.log(`,${url},` +'uploadProfileImage,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['uploadProfileImage: Status is ' + `${res.status}`]: res.status === 200
      });
}
export function uploadProfileImage_blankImage(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      }; 
    var res = http.post(url,null,{ headers: requestHeaders });
    console.log(`,${url},` +' uploadProfileImage_blankImage,' + '400,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        'uploadProfileImage_blankImage: Status code MUST be 400': res.status === 400,
      }); 
}
export function uploadProfileImage_invalidImage(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    var data = {
      file: http.file(InvalidImage,'sample.pdf','multipart/form-data')
  };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      };
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +' uploadProfileImage_invalidImage,' + '415,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        'uploadProfileImage_invalidImage: Status code MUST be 415': res.status === 415
      });   
}
export function uploadProfileImage_noToken()
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    var data = {
        file: http.file(profilePNGImage,'Rating_Original.PNG','application/json')
    };
    // let requestHeaders = {
    //     'X-Authorization-Firebase': tokenID,
    //   }; 
    
    var res = http.post(url,data);
    console.log(`,${url},` +' uploadProfileImage_noToken,' + '403,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        'uploadProfileImage_noToken: Status code MUST be 403': res.status === 403,
      });
      
}
export function uploadProfileImage_invalidToken(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    var data = {
        file: http.file(profilePNGImage,'Rating_Original.PNG','multipart/form-data')
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
      }; 
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +' uploadProfileImage_invalidToken,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['uploadProfileImage_invalidToken: Status is ' + `${res.status}`]: res.status === 403
      });
}
export function uploadProfileImage_diffMethod(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    var data = {
        file: http.file(profilePNGImage,'Rating_Original.PNG','multipart/form-data')
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      }; 
    var res = http.put(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +' uploadProfileImage_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['uploadProfileImage_diffMethod: Status is ' + `${res.status}`]: res.status === 405
      });
}