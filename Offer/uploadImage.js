import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//=======================
//Upload Temporary image
//=======================
const prop = JSON.parse(open('../config/config.json'));
var imageEndpoint = '/offers/v1/offers/images';
const offerJPGImage = open ('./OfferImagesNdocs/Air_Conditioner(1).jpg','b');
const offerPNGImage = open ('./OfferImagesNdocs/1-min.png','b');
const offerJPEGImage = open ('./OfferImagesNdocs/1-min.jpeg','b');
const invImage1 = open ('./OfferImagesNdocs/Bill-Struct.pdf','b');

export default function uploadOfferImage()
{
    var tokenID = tokenGenerate() ;
    // uploadJPGimage(tokenID);
    // uploadJPEGimage(tokenID);
    // uploadPNGimage(tokenID);
    // uploadPNGimageWithIndex(tokenID);
    // uploadImgPDF(tokenID);
    // uploadImgVideo(tokenID);
    // uploadImage_noFile(tokenID);
    getImageID(tokenID);
}

export function uploadJPGimage(tokenID)
{
    var url=prop.gintaa_baseurl.concat(imageEndpoint);
    var data = {
        file: http.file(offerJPGImage,'Air_Conditioner(1).jpg','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadJPGimage,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadJPGimage: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function uploadJPEGimage(tokenID)
{
    var url=prop.gintaa_baseurl.concat(imageEndpoint);
    var data = {
        file: http.file(offerJPEGImage,'1-min.jpeg','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadJPEGimage,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadJPEGimage: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function uploadPNGimage(tokenID)
{
    var url=prop.gintaa_baseurl.concat(imageEndpoint);
    var data = {
        file: http.file(offerJPGImage,'1-min.png','multipart/form-data'),
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadPNGimage,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadPNGimage: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function uploadImage_invalidAuth(tokenID)
{
    var url=prop.gintaa_baseurl.concat(imageEndpoint);
    var data = {
        file: http.file(offerJPGImage,'Air_Conditioner(1).jpg','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
    };
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadImage_invalidAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadImage_invalidAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function uploadImage_noAuth(tokenID)
{
    var url=prop.gintaa_baseurl.concat(imageEndpoint);
    var data = {
        file: http.file(offerJPGImage,'Air_Conditioner(1).jpg','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        
    };
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadImage_noAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadImage_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function uploadImage_diffMethod(tokenID)
{
    var url=prop.gintaa_baseurl.concat(imageEndpoint);
    var data = {
        file: http.file(offerJPGImage,'Air_Conditioner(1).jpg','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };
    var res = http.put(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadImage_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadImage_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}
export function uploadImage_displayMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(imageEndpoint);
    var data = {
        file: http.file(offerPNGImage,'Air_Conditioner(1).jpg','multipart/form-data')
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };
    
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadImage_displayMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadImage_displayMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function uploadImage_noFile(tokenID)
{
    var url=prop.gintaa_baseurl.concat(imageEndpoint);
    var data = {
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'multipart/form-data'
    };
    
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadImage_noFile,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadImage_noFile: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function uploadImg_invalidFile(tokenID)
{
    var url=prop.gintaa_baseurl.concat(imageEndpoint);
    var data = {
        file: http.file(invImage1,'Bill-Struct.pdf','multipart/form-data')
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };
    
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadImg_invalidFile,' + '415,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadImg_invalidFile: EXPECTED: 415,     ACTUAL: ' + `${res.status}`] : res.status === 415,
    });
}
export function getImageID(tokenID)
{
    var url=prop.gintaa_baseurl.concat(imageEndpoint);
    var data = {
        file: http.file(offerJPGImage,'Air_Conditioner(1).jpg','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };
    var res = http.post(url,data,{ headers: requestHeaders });
    var imageID = res.json().payload.id;
    // console.log(res.body) // hide
    return imageID;
}