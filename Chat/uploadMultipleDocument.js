import http from 'k6/http';
import { check } from 'k6';
import { getRoomID } from "./getAllRoom.js";
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';

var endpoint = '/chats/v1/chat/attachment/multi/document';
const doc1 = open ('./ChatDocument/Bill-Struct.pdf','b');
const doc2 = open ('./ChatDocument/dummy.pdf','b');
const docInvalid = open ('./ChatDocument/Git-2.30.0-64-bit.exe','b');

export default function ()
{
    var tokenID = tokenGenerate() ;
    var otherTokenID = tokenGenerate_2();
    var baseurl = 'https://alpha.api.gintaa.com';
        //******WRITE ALL THE METHODS TO CALL*******
    uploadMultiDoc(baseurl,tokenID,otherTokenID);
    // uploadMultiDoc_roomMan(baseurl,tokenID);
    // uploadMultiDoc_fileMan(baseurl,tokenID);
    // uploadMultiDoc_invFile(baseurl,tokenID);
    // uploadMultiDoc_diffMethod(baseurl,tokenID);
}

export function uploadMultiDoc(baseurl,tokenID,otherTokenID)
{
    var url = baseurl.concat(endpoint);
    var data = {
        file: http.file(doc1,'Bill-Struct.pdf','multipart/form-data'),
        file: http.file(doc2,'dummy.pdf','multipart/form-data'),
        roomId : getRoomID(baseurl,otherTokenID)
       };
    var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url, data, { headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'uploadMultiImage,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['uploadMultiImage: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function uploadMultiDoc_roomMan(baseurl,tokenID)
{
    var url = baseurl.concat(endpoint);
    var data = {
        file: http.file(doc1,'Bill-Struct.pdf','multipart/form-data'),
        file: http.file(doc2,'dummy.pdf','multipart/form-data')
       };
    var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.post(url, data, { headers: requestHeaders });
}
export function uploadMultiDoc_fileMan(baseurl,tokenID)
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
export function uploadMultiDoc_invFile(baseurl,tokenID)
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
export function uploadMultiDoc_diffMethod(baseurl,tokenID)
{
    var url = baseurl.concat(endpoint);
    var data = {
        file: http.file(doc1,'Bill-Struct.pdf','multipart/form-data'),
        file: http.file(doc2,'dummy.pdf','multipart/form-data'),
        roomId : 'NEED TO WRITE VALID ROOM ID'
       };
    var requestHeaders = {
    'X-Authorization-Firebase': tokenID
    };
    var res = http.put(url, data, { headers: requestHeaders });
}