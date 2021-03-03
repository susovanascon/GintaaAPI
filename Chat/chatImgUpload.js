import http from 'k6/http';
import { check } from 'k6';
import { getRoomID } from "./getAllRoom.js";
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';

var endpoint = '/chats/v1/chat/attachment/image';
const JPGimage = open ('./ChatDocument/AC_Repair1.jpg','b');
const PNGimage = open ('./ChatDocument/Android.png','b');
//const JPEGimage = open ('./ChatDocument/Android.png','b');
const imageInvalid = open ('./ChatDocument/Git-2.30.0-64-bit.exe','b');

export default function ()
{
    var tokenID = tokenGenerate() ;
    var otherTokenID = tokenGenerate_2();
    var baseurl = 'https://alpha.api.gintaa.com';
        //******WRITE ALL THE METHODS TO CALL*******
        uploadJPGimage(baseurl,tokenID,otherTokenID);
        uploadPNGimage(baseurl,tokenID,otherTokenID)
    // uploadMultiDoc_roomMan(baseurl,tokenID);
    // uploadMultiDoc_fileMan(baseurl,tokenID);
    // uploadMultiDoc_invFile(baseurl,tokenID);
    // uploadMultiDoc_diffMethod(baseurl,tokenID);
}
export function uploadJPGimage(baseurl,tokenID,otherTokenID)
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(JPGimage,'AC_Repair1.jpg','multipart/form-data'),
    roomId : getRoomID(baseurl,otherTokenID)
   };
   var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url, data, { headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'uploadJPGimage,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['uploadJPGimage: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function uploadPNGimage(baseurl,tokenID,otherTokenID)
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(PNGimage,'Android.png','multipart/form-data'),
    roomId : getRoomID(baseurl,otherTokenID)
   };
   var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url, data, { headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'uploadPNGimage,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['uploadPNGimage: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function uploadPNGimage_RoomMan()
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(PNGimage,'Android.png','multipart/form-data')
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
export function uploadPNGimage_InvalidImage()
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(imageInvalid,'Git-2.30.0-64-bit.exe','multipart/form-data'),
    roomId : ''
   };
    var res = http.post(url, data, { 'headers': 'nameOfHeaders' });
}
export function uploadPNGimage_diffMethod()
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(PNGimage,'Android.png','multipart/form-data'),
    roomId : ''
   };
    var res = http.put(url, data, { 'headers': 'nameOfHeaders' });
}
