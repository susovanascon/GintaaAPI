import http from 'k6/http';
import { check } from 'k6';
import { getUserOfferID } from "../Offer/allOffers.js";
import { myOfferQuestionID } from "./questionGetAll.js";
import { getReplyID } from "./replyGet.js";
import { tokenGenerate } from '../generateToken.js';
//************************************/
//Used to provide reply for a question/
//************************************/     
const endpoint = '/qna/v1/qna/offer/';

var body ={
    "comment": "string"
  }     
export default function()
{
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
    //addQuestionForOffer(baseurl,tokenID)
    // postReplyOfQuestion(baseurl,tokenID);
    editReplyOfQuestion(baseurl,tokenID);
}
export function editReplyOfQuestion(baseurl,tokenID)
{
    var offerID = getUserOfferID(baseurl,tokenID);
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var replyID = getReplyID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/' + threadID + '/reply/' + replyID);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.comment = "This is my updated answer";
    // console.log(url);
    var res = http.put(url,JSON.stringify(body), { headers: requestHeaders });
    // console.log(res.status+ " "+res.body)
    console.log(`,${url},` +'editReplyOfQuestion,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['editReplyOfQuestion: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}