import http from 'k6/http';
import { check } from 'k6';
import { getRoomID } from "./getAllRoom.js";
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';

var endpoint = '/chats/v1/chat/attachment/multi/image';
const image1 = open ('./ChatDocument/AC_Repair1.jpg','b');
const image2 = open ('./ChatDocument/Android.png','b');
const docInvalid = open ('./ChatDocument/Git-2.30.0-64-bit.exe','b');

export default function ()
{
    var tokenID = tokenGenerate() ;
    var otherTokenID = tokenGenerate_2();
    var baseurl = 'https://alpha.api.gintaa.com';
        //******WRITE ALL THE METHODS TO CALL*******
    uploadMultiImage(baseurl,tokenID,otherTokenID);
    // uploadMultiImage_roomMan(baseurl,tokenID);
    // uploadMultiImage_fileMan(baseurl,tokenID);
    // uploadMultiImage_invFile(baseurl,tokenID);
    // uploadMultiImage_diffMethod(baseurl,tokenID)
}
export function uploadMultiImage(baseurl,tokenID,otherTokenID)
{
    var url = baseurl.concat(endpoint);
    var data = {
        file: http.file(image1,'AC_Repair1.jpg','multipart/form-data'),
        file: http.file(image2,'Android.png','multipart/form-data'),
        roomId : getRoomID(baseurl,otherTokenID)
       };
    var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url, data, { headers: requestHeaders });
    console.log(`,${url},` +'uploadMultiImage,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['uploadMultiImage: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function uploadMultiImage_roomMan(baseurl,tokenID)
{
    var url = baseurl.concat(endpoint);
    var data = {
        file: http.file(image1,'AC_Repair1.jpg','multipart/form-data'),
        file: http.file(image2,'Android.png','multipart/form-data'),
       };
    var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url, data, { headers: requestHeaders });
}
export function uploadMultiImage_fileMan(baseurl,tokenID)
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
export function uploadMultiImage_invFile(baseurl,tokenID)
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
export function uploadMultiImage_diffMethod(baseurl,tokenID)
{
    var url = baseurl.concat(endpoint);
    var data = {
        file: http.file(image1,'AC_Repair1.jpg','multipart/form-data'),
        file: http.file(image2,'Android.png','multipart/form-data'),
        roomId : 'NEED TO WRITE VALID ROOM ID'
       };
    var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.put(url, data, { headers: requestHeaders });
}