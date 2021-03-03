import http from 'k6/http';
import { check } from 'k6';
// import { tokenGenerate } from '../generateToken.js';
//=======================================
//use this api to upload temporary document
//==========================================
const prop = JSON.parse(open('../config/config.json'));
var docEndpoint = '/offers/v1/offers/document';
const doc = open ('./OfferImagesNdocs/Bill-Struct.pdf','b');
const invFile = open ('./OfferImagesNdocs/sampleVideo1.mp4','b');

export default function()
{
  var tokenID = tokenGenerate() ;
  getDocID(tokenID);
}

export function uploadDoc(tokenID)
{
    var url=prop.gintaa_baseurl.concat(docEndpoint);
    var data = {
        file: http.file(doc,'Bill-Struct.pdf','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      }; 
    var res = http.post(url,data,{ headers: requestHeaders });

    console.log(`,${url},` +'uploadDoc,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadDoc: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function uploadDoc_invalidAuth(tokenID)
{
    var url=prop.gintaa_baseurl.concat(docEndpoint);
    var data = {
        file: http.file(doc,'Bill-Struct.pdf','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
      }; 
    var res = http.post(url,data,{ headers: requestHeaders });

    console.log(`,${url},` +'uploadDoc_invalidAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadDoc_invalidAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function uploadDoc_noAuth(tokenID)
{
    var url=prop.gintaa_baseurl.concat(docEndpoint);
    var data = {
        file: http.file(doc,'Bill-Struct.pdf','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        
      }; 
    var res = http.post(url,data,{ headers: requestHeaders });

    console.log(`,${url},` +'uploadDoc_noAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadDoc_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function uploadDoc_diffMethod(tokenID)
{
    var url=prop.gintaa_baseurl.concat(docEndpoint);
    var data = {
        file: http.file(doc,'Bill-Struct.pdf','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      }; 
    var res = http.put(url,data,{ headers: requestHeaders });

    console.log(`,${url},` +'uploadDoc_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadDoc_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}
export function uploadDoc_displayMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(docEndpoint);
    var data = {
        file: http.file(doc,'Bill-Struct.pdf','multipart/form-data')
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      }; 
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadDoc_displayMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadDoc_displayMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
      
}
export function uploadDoc_noDocument(tokenID)
{
    var url=prop.gintaa_baseurl.concat(docEndpoint);
    var data = {
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      }; 
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadDoc_noDocument,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadDoc_noDocument: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
      
}
export function uploadDoc_invalidFile(tokenID)
{
    var url=prop.gintaa_baseurl.concat(docEndpoint);
    var data = {
        file: http.file(invFile,'sampleVideo1.mp4','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      }; 
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadDoc_invalidFile,' + '415,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadDoc_invalidFile: EXPECTED: 415,     ACTUAL: ' + `${res.status}`] : res.status === 415,
    });   
}
export function getDocID(tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=prop.gintaa_baseurl.concat(docEndpoint);
    var data = {
        file: http.file(doc,'Bill-Struct.pdf','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      }; 
    var res = http.post(url,data,{ headers: requestHeaders });
    
    var  docID = res.json().payload.id;
    // console.log(docID);
    return docID;
}
