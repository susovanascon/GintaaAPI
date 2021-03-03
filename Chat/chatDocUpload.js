import http from 'k6/http';
import { check } from 'k6';
import { getRoomID } from "./getAllRoom.js";
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';


var endpoint = '/chats/v1/chat/attachment/document';
const doc = open ('./ChatDocument/Bill-Struct.pdf','b');
const docInvalid = open ('./ChatDocument/Git-2.30.0-64-bit.exe','b');

export default function ()
{
    var tokenID = tokenGenerate() ;
    var otherTokenID = tokenGenerate_2();
    var baseurl = 'https://alpha.api.gintaa.com';
        //******WRITE ALL THE METHODS TO CALL*******
        uploadDoc(baseurl,tokenID,otherTokenID);
    // uploadMultiDoc_roomMan(baseurl,tokenID);
    // uploadMultiDoc_fileMan(baseurl,tokenID);
    // uploadMultiDoc_invFile(baseurl,tokenID);
    // uploadMultiDoc_diffMethod(baseurl,tokenID);
}
export function uploadDoc(baseurl,tokenID,otherTokenID)
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(doc,'Bill-Struct.pdf','multipart/form-data'),
    roomId : getRoomID(baseurl,otherTokenID)
   };
   var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url, data, { headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'uploadDoc,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['uploadDoc: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function uploadDoc_RoomMan()
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(doc,'Bill-Struct.pdf','multipart/form-data')
   };
    var res = http.post(url, data, { 'headers': 'nameOfHeaders' });
}
export function uploadDoc_fileMan()
{
   var url = baseurl.concat(endpoint);
   var data = {
    roomId : '',
   };
    var res = http.post(url, data, { 'headers': 'nameOfHeaders' });
}
export function uploadDoc_InvalidImage()
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(docInvalid,'Git-2.30.0-64-bit.exe','multipart/form-data'),
    roomId : ''
   };
    var res = http.post(url, data, { 'headers': 'nameOfHeaders' });
}
export function uploadDoc_diffMethod()
{
   var url = baseurl.concat(endpoint);
   var data = {
    file: http.file(PNGimage,'Android.png','multipart/form-data'),
    roomId : ''
   };
    var res = http.put(url, data, { 'headers': 'nameOfHeaders' });
}
