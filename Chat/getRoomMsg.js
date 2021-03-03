import http from 'k6/http';
import { check } from 'k6';
import { getRoomID } from "./getAllRoom.js";
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';

var endpoint = '/chats/v1/message/room/';

export default function ()
{
    var tokenID = tokenGenerate() ;
    var otherTokenID = tokenGenerate_2();
    var baseurl = 'https://alpha.api.gintaa.com';
        //******WRITE ALL THE METHODS TO CALL*******
    getChatMsg(baseurl,tokenID,otherTokenID);
}

export function getChatMsg(baseurl,tokenID,otherTokenID)
{
    var roomID = getRoomID(baseurl,otherTokenID);
    var url = baseurl.concat(endpoint + roomID);
    var requestHeaders = {'X-Authorization-Firebase': tokenID};
    var res = http.post(url,null, { headers: requestHeaders });
    // console.log(res.status + " " + res.body)
    console.log(`,${url},` +'getChatMsg,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['getChatMsg: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getChatMsg_RoomMan()
{
    var url = baseurl.concat(endpoint);
    var requestHeaders = {'X-Authorization-Firebase': tokenID};
    var res = http.get(url, { headers: requestHeaders });
}
export function getChatMsg_RoomInv()
{
    var roomID = '000000';
    var url = baseurl.concat(endpoint);
    var requestHeaders = {'X-Authorization-Firebase': tokenID};
    var res = http.get(url, { headers: requestHeaders });
}
export function getChatMsg_diffMethod()
{
    var roomID = 'NEED TO WRITE THE CODE FOR FETCHING ROOM ID';
    var url = baseurl.concat(endpoint);
    var requestHeaders = {'X-Authorization-Firebase': tokenID};
    var res = http.put(url, { headers: requestHeaders });
}