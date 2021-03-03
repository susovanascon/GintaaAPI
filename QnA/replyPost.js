import http from 'k6/http';
import { check } from 'k6';
import { getUserOfferID } from "../Offer/allOffers.js";
import { myOfferQuestionID } from "./questionGetAll.js";
import { tokenGenerate } from '../generateToken.js';
//************************************/
//Used to provide reply for a question/
//************************************/     
const prop = JSON.parse(open('../config/config.json'));
const endpoint = '/qna/v1/qna/offer/';

var body ={
    "comment": "string"
  }     
export default function()
{
    var tokenID = tokenGenerate() ;
    //addQuestionForOffer(tokenID)
    // postReplyOfQuestion(tokenID);
    getReplyID(tokenID);
}
export function postReplyOfQuestion(tokenID)
{
    var offerID = getUserOfferID();
    var threadID = myOfferQuestionID(tokenID);
    var url = prop.gintaa_baseurl.concat(endpoint + offerID[0] + '/question/' + threadID + '/reply');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.comment = "This is my answer";

    var res = http.post(url,JSON.stringify(body), { headers: requestHeaders });
    // console.log(res.status+ " "+res.body)
    console.log(`,${url},` +'postReplyOfQuestion,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['postReplyOfQuestion: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}