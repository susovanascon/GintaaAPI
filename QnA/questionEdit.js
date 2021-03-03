import http from 'k6/http';
import { check } from 'k6';
import { getUserOfferID } from "../Offer/allOffers.js";
import { myOfferQuestionID } from "./questionGetAll.js";
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';
//**********************************************/
//Used to edit a question for a particular offer/
//**********************************************/
const prop = JSON.parse(open('../config/config.json'));
const endpoint = '/qna/v1/qna/offer/';

var body = {
    "question": "string"
  }
  export default function()
  {
      var tokenID = tokenGenerate() ;
      var otherTokenID = tokenGenerate_2();
      var baseurl = 'https://alpha.api.gintaa.com';
      //addQuestionForOffer(baseurl,tokenID)
      editQuestionOfOffer_alphanumericQuestion(baseurl,otherTokenID);
  }
export function editQuestionOfOffer(baseurl,otherTokenID,tokenID)
{
    var offerID = getUserOfferID();
    // console.log(offerID)
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/' + threadID);
    var requestHeaders = {
        'X-Authorization-Firebase': otherTokenID,
        'Content-Type': 'application/json'
      };
    body.question = "This is an updated question?";

    var res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body) // hide
    console.log(`,${url},` +'editQuestionOfOffer,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['editQuestionOfOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function editQuestionOfOffer_invalidToken(baseurl,otherTokenID,tokenID)
{
    var offerID = getUserOfferID(baseurl);
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/' + threadID);
    var requestHeaders = {
        'X-Authorization-Firebase': otherTokenID + "a",
        'Content-Type': 'application/json'
      };
    body.question = "This is an updated question?";

    var res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body)
    console.log(`,${url},` +'editQuestionOfOffer_invalidToken,' + '403,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['editQuestionOfOffer_invalidToken: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function editQuestionOfOffer_alphanumericQuestion(baseurl,otherTokenID,tokenID)
{
    var offerID = getUserOfferID(baseurl);
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/' + threadID);
    var requestHeaders = {
        'X-Authorization-Firebase': otherTokenID,
        'Content-Type': 'application/json'
      };
    body.question = prop.qnaService.alphanumericQuestion;
      // console.log(JSON.stringify(body))
    var res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(res.status + " " + res.body)
    console.log(`,${url},` +'editQuestionOfOffer_alphanumericQuestion,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['editQuestionOfOffer_alphanumericQuestion: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function editQuestionOfOffer_numericQuestion(baseurl,otherTokenID,tokenID)
{
    var offerID = getUserOfferID(baseurl);
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/' + threadID);
    var requestHeaders = {
        'X-Authorization-Firebase': otherTokenID,
        'Content-Type': 'application/json'
      };
    body.question = prop.qnaService.numericQuestion;
      // console.log(JSON.stringify(body))
    var res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(res.status + " " + res.body)
    console.log(`,${url},` +'editQuestionOfOffer_numericQuestion,' + '400,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['editQuestionOfOffer_numericQuestion: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function editQuestionOfOffer_symbolicQuestion(baseurl,otherTokenID,tokenID)
{
    var offerID = getUserOfferID(baseurl);
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/' + threadID);
    var requestHeaders = {
        'X-Authorization-Firebase': otherTokenID,
        'Content-Type': 'application/json'
      };
    body.question = prop.qnaService.symbolicQuestion;
      // console.log(JSON.stringify(body))
    var res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(res.status + " " + res.body)
    console.log(`,${url},` +'editQuestionOfOffer_symbolicQuestion,' + '400,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['editQuestionOfOffer_symbolicQuestion: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function editQuestionOfOffer_diffMethod(baseurl,otherTokenID,tokenID)
{
    var offerID = getUserOfferID(baseurl);
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/' + threadID);
    var requestHeaders = {
        'X-Authorization-Firebase': otherTokenID,
        'Content-Type': 'application/json'
      };
    body.question = prop.qnaService.symbolicQuestion;
      // console.log(JSON.stringify(body))
    var res = http.get(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(res.status + " " + res.body)
    console.log(`,${url},` +'editQuestionOfOffer_symbolicQuestion,' + '400,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['editQuestionOfOffer_symbolicQuestion: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}