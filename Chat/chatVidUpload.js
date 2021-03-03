import http from 'k6/http';
import { check } from 'k6';
import { getRoomID } from "./getAllRoom.js";
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';

var endpoint = '/chats/v1/chat/attachment/video';
const video = open ('./ChatDocument/sampleVideo1.mp4','b');
const vidInvalid = open ('./ChatDocument/Git-2.30.0-64-bit.exe','b');

export default function ()
{
    var tokenID = tokenGenerate() ;
    var otherTokenID = tokenGenerate_2();
    var baseurl = 'https://alpha.api.gintaa.com';
        //******WRITE ALL THE METHODS TO CALL*******
        uploadVid(baseurl,tokenID,otherTokenID);
    // uploadMultiDoc_roomMan(baseurl,tokenID);
    // uploadMultiDoc_fileMan(baseurl,tokenID);
    // uploadMultiDoc_invFile(baseurl,tokenID);
    // uploadMultiDoc_diffMethod(baseurl,tokenID);
}
export function uploadVid(baseurl,tokenID,otherTokenID)
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(video,'sampleVideo1.mp4','multipart/form-data'),
    roomId : getRoomID(baseurl,otherTokenID)
   };
   var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url, data, { headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'uploadVid,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['uploadVid: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function uploadVid_RoomMan()
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(video,'sampleVideo1.mp4','multipart/form-data')
   };
    var res = http.post(url, data, { 'headers': 'nameOfHeaders' });
}
export function uploadPNGimage_fileMan()
{
   var url = baseurl.concat(endpoint);
   var data = {
    roomId : '',
   };
    var res = http.post(url, data, { 'headers': 'nameOfHeaders' });
}
export function uploadPNGimage_InvalidVideo()
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(vidInvalid,'Git-2.30.0-64-bit.exe','multipart/form-data'),
    roomId : ''
   };
    var res = http.post(url, data, { 'headers': 'nameOfHeaders' });
}
export function uploadPNGimage_diffMethod()
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(vidInvalid,'sampleVideo1.mp4','multipart/form-data'),
    roomId : ''
   };
    var res = http.put(url, data, { 'headers': 'nameOfHeaders' });
}
