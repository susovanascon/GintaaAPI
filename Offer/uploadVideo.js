import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//=====================
//Upload Video in Offer
//=====================
const prop = JSON.parse(open('../config/config.json'));
var videoEndpoint = '/offers/v1/offers/videos';
const offerVideo = open ('./OfferImagesNdocs/sampleVideo1.mp4','b');
const invVideo = open ('./OfferImagesNdocs/Bill-Struct.pdf','b');

export default function uploadOfferImage()
{
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
    //uploadVideoWithoutFile(baseurl,tokenID);
    // uploadVideo(baseurl,tokenID)
    getVideoID(tokenID)
}

export function uploadVideo(baseurl,tokenID)
{
    var url=baseurl.concat(videoEndpoint);
    var data = {
        file: http.file(offerVideo,'sampleVideo_2MB.mp4','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadVideo,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadVideo: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function uploadVideo_invalidAuth(baseurl,tokenID)
{
    var url=baseurl.concat(videoEndpoint);
    var data = {
        file: http.file(offerVideo,'sampleVideo1.mp4','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
    };
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadVideo_invalidAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadVideo_invalidAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function uploadVideo_noAuth(baseurl,tokenID)
{
    var url=baseurl.concat(videoEndpoint);
    var data = {
        file: http.file(offerVideo,'sampleVideo1.mp4','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        
    };
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadVideo_noAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadVideo_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function uploadVideo_diffMethod(baseurl,tokenID)
{
    var url=baseurl.concat(videoEndpoint);
    var data = {
        file: http.file(offerVideo,'sampleVideo1.mp4','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };
    var res = http.put(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadVideo_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadVideo_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}
export function uploadVideo_noIndex(baseurl,tokenID)
{
    var url=baseurl.concat(videoEndpoint);
    var data = {
        file: http.file(offerVideo,'sampleVideo1.mp4','multipart/form-data'),
        displayIndex: ""
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadVideo_noIndex,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadVideo_noIndex: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function uploadVideoWithoutFile(baseurl,tokenID)
{
    var url=baseurl.concat(videoEndpoint);
    var data = {
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(res.body);
    console.log(`,${url},` +'uploadVideoWithoutFile,' + '400,' + res.status + `,${res.timings.duration}` + JSON.stringify(res.timings));
    check(res, {
        ['uploadVideoWithoutFile: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function uploadVideo_invFile(baseurl,tokenID)
{
    var url=baseurl.concat(videoEndpoint);
    var data = {
        file: http.file(invVideo,'Bill-Struct.pdf','multipart/form-data'),
        displayIndex: ""
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };
    
    var res = http.post(url,data,{ headers: requestHeaders });
    console.log(`,${url},` +'uploadVideo_invFile,' + '415,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadVideo_invFile: EXPECTED: 415,     ACTUAL: ' + `${res.status}`] : res.status === 415,
    });
}
export function getVideoID(tokenID)
{
    var url=prop.gintaa_baseurl.concat(videoEndpoint);
    var data = {
        file: http.file(offerVideo,'sampleVideo_2MB.mp4','multipart/form-data'),
        displayIndex: "1"
    };
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url,data,{ headers: requestHeaders });
    var videoID = res.json().payload.id;
    // console.log("Video id:-"+videoID) // hide
    return videoID;
}