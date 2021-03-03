import http from 'k6/http';
import { check } from 'k6';
import { getOfferID,getUserOfferID } from "../Offer/allOffers.js";
import { myOfferQuestionID } from "./questionGetAll.js";
import { tokenGenerate } from '../generateToken.js';
//*****************************************************/
//Used to list replies for a particular question thread/
//*****************************************************/
const endpoint = '/qna/v1/qna/offer/';

export default function()
  {
      var tokenID = tokenGenerate() ;
      var baseurl = 'https://alpha.api.gintaa.com';
      //addQuestionForOffer(baseurl,tokenID)
      // getQuestionReplies(baseurl,tokenID);
      getReplyID(baseurl,tokenID)
  }
export function getQuestionReplies(baseurl,tokenID)
{
    var offerID = getUserOfferID(baseurl);
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/' + threadID + '/replies');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      };
      // console.log(url)
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getQuestionReplies,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['getQuestionReplies: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getReplyID(baseurl,tokenID)
{
    var offerID = getUserOfferID(baseurl);
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/' + threadID + '/replies');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      // console.log(url)
    var res = http.get(url,{ headers: requestHeaders });
    // console.log(res.body);
    var replyID = res.json().payload[0].replyId;

    return replyID;
}