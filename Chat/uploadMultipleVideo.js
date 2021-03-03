import http from 'k6/http';
import { check } from 'k6';
import { getRoomID } from "./getAllRoom.js";
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';

var endpoint = '/chats/v1/chat/attachment/multi/video';
const video1 = open ('./ChatDocument/sampleVideo1.mp4','b');
const video2 = open ('./ChatDocument/sampleVideo.avi','b');
const vidInvalid = open ('./ChatDocument/Git-2.30.0-64-bit.exe','b');

export default function ()
{
    var tokenID = tokenGenerate() ;
    var otherTokenID = tokenGenerate_2();
    var baseurl = 'https://alpha.api.gintaa.com';
        //******WRITE ALL THE METHODS TO CALL*******
    uploadMultiVid(baseurl,tokenID,otherTokenID);
    // uploadMultiVid_roomMan(baseurl,tokenID);
    // uploadMultiVid_fileMan(baseurl,tokenID);
    // uploadMultiVid_invFile(baseurl,tokenID);
    // uploadMultiVid_diffMethod(baseurl,tokenID)
}
export function uploadMultiVid(baseurl,tokenID,otherTokenID)
{
    var url = baseurl.concat(endpoint);
    var data = {
        file: http.file(video1,'sampleVideo1.mp4','multipart/form-data'),
        file: http.file(video2,'sampleVideo.avi','multipart/form-data'),
        roomId : getRoomID(baseurl,otherTokenID)
       };
    var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url, data, { headers: requestHeaders });
    
    console.log(`,${url},` +'uploadMultiVid,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['uploadMultiVid: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function uploadMultiVid_roomMan(baseurl,tokenID)
{
    var url = baseurl.concat(endpoint);
    var data = {
        file: http.file(video1,'sampleVideo1.mp4','multipart/form-data'),
        file: http.file(video2,'sampleVideo.avi','multipart/form-data'),
       };
    var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url, data, { headers: requestHeaders });
}
export function uploadMultiVid_fileMan(baseurl,tokenID)
{
    var url = baseurl.concat(endpoint);
    var data = {
        roomId : 'NEED TO WRITE VALID ROOM ID'
       };
    var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url, data, { headers: requestHeaders });
}
export function uploadMultiVid_invFile(baseurl,tokenID)
{
    var url = baseurl.concat(endpoint);
    var data = {
        file: http.file(docInvalid,'Git-2.30.0-64-bit.exe','multipart/form-data'),
        roomId : 'NEED TO WRITE VALID ROOM ID'
       };
    var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url, data, { headers: requestHeaders });
}
export function uploadMultiVid_diffMethod(baseurl,tokenID)
{
    var url = baseurl.concat(endpoint);
    var data = {
        file: http.file(video1,'sampleVideo1.mp4','multipart/form-data'),
        file: http.file(video2,'sampleVideo.avi','multipart/form-data'),
        roomId : 'NEED TO WRITE VALID ROOM ID'
       };
    var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.put(url, data, { headers: requestHeaders });
}