import http from 'k6/http';
import { check } from 'k6';
import { getOfferID,getUserOfferID } from "../Offer/allOffers.js";
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';
//*********************************************/
//Used to add a question for a particular offer/
//*********************************************/
const endpoint = '/qna/v1/qna/offer/';
const prop = JSON.parse(open('../config/config.json'));

var body = {
    "question": "string"
  }
export default function()
{
    var tokenID = tokenGenerate() ;
    var otherTokenID = tokenGenerate_2();
    addQuestionForOffer(otherTokenID);
}
export function addQuestionForOffer(otherTokenID)
{
    var offerID = getUserOfferID();
    var url = prop.gintaa_baseurl.concat(endpoint + offerID[0] + '/question');
    var requestHeaders = {
        'X-Authorization-Firebase': otherTokenID,
        'Content-Type': 'application/json'
      };
    body.question = "This is a test question?";
    
    var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " +res.body) // hide
    console.log(`,${url},` +'addQuestionForOffer,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addQuestionForOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function addQuestionForOffer_validAuth(tokenID)
{
    var offerID = getOfferID(tokenID)
    var url=prop.gintaa_baseurl.concat(endpoint + offerID + '/question');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.question = "What is the detail of Offer?";
    console.log(url);
    // var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'addQuestionForOffer_validAuth,' + '200,' + res.status);
    check(res, {
        ['addQuestionForOffer_validAuth: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function addQuestionForOffer_invalidAuth(tokenID)
{
    var offerID = getOfferID(tokenID)
    var url=prop.gintaa_baseurl.concat(endpoint + offerID + '/question');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
        'Content-Type': 'application/json'
      };
    body.question = "What is the detail of Offer?";
    console.log(url);
    // var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'addQuestionForOffer_invalidAuth,' + '403,' + res.status);
    check(res, {
        ['addQuestionForOffer_invalidAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function addQuestionForOffer_noAuth(tokenID)
{
    var offerID = getOfferID(tokenID)
    var url=prop.gintaa_baseurl.concat(endpoint + offerID + '/question');
    var requestHeaders = {
        'Content-Type': 'application/json'
      };
    body.question = "What is the detail of Offer?";
    console.log(url);
    // var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'addQuestionForOffer_noAuth,' + '403,' + res.status);
    check(res, {
        ['addQuestionForOffer_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function addQuestionForOffer_alphanumericQuestion(tokenID)
{
    var offerID = getOfferID(tokenID)
    var url=prop.gintaa_baseurl.concat(endpoint + offerID + '/question');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.question = "string 123";
    console.log(url);
    // var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'addQuestionForOffer_alphanumericQuestion,' + '200,' + res.status);
    check(res, {
        ['addQuestionForOffer_alphanumericQuestion: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function addQuestionForOffer_numericQuestion(tokenID)
{
    var offerID = getOfferID(tokenID)
    var url=prop.gintaa_baseurl.concat(endpoint + offerID + '/question');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.question = "12345678";
    console.log(url);
    // var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'addQuestionForOffer_numericQuestion,' + '400,' + res.status);
    check(res, {
        ['addQuestionForOffer_numericQuestion: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function addQuestionForOffer_symbolicQuestion(tokenID)
{
    var offerID = getOfferID(tokenID)
    var url=prop.gintaa_baseurl.concat(endpoint + offerID + '/question');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.question = "!@#$%^&*";
    console.log(url);
    // var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'addQuestionForOffer_symbolicQuestion,' + '400,' + res.status);
    check(res, {
        ['addQuestionForOffer_symbolicQuestion: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function addQuestionForOffer_diffMethod(tokenID)
{
    var offerID = getOfferID(tokenID)
    var url=prop.gintaa_baseurl.concat(endpoint + offerID + '/question');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.question = "What is the detail?";
    console.log(url);
    // var res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'addQuestionForOffer_diffMethod,' + '405,' + res.status);
    check(res, {
        ['addQuestionForOffer_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}
export function addQuestionForOffer_invalidOfferID(tokenID)
{
    var offerID = '123456789';
    var url=prop.gintaa_baseurl.concat(endpoint + offerID + '/question');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.question = "What is the detail?";
    console.log(url);
    // var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'addQuestionForOffer_invalidOfferID,' + '404,' + res.status);
    check(res, {
        ['addQuestionForOffer_invalidOfferID: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function addQuestionForOffer_quesMan(tokenID)
{
    var offerID = getOfferID(tokenID)
    var url=prop.gintaa_baseurl.concat(endpoint + offerID + '/question');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    delete body.question;
    console.log(url);
    // var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'addQuestionForOffer_quesMan,' + '400,' + res.status);
    check(res, {
        ['addQuestionForOffer_quesMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function addQuestionForOffer_blankQuestion(tokenID)
{
    var offerID = getOfferID(tokenID)
    var url=prop.gintaa_baseurl.concat(endpoint + offerID + '/question');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.question = "";
    console.log(url);
    // var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'addQuestionForOffer_blankQuestion,' + '400,' + res.status);
    check(res, {
        ['addQuestionForOffer_blankQuestion: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function addQuestionForOffer_invalidContent(tokenID)
{
    var offerID = getOfferID(tokenID)
    var url=prop.gintaa_baseurl.concat(endpoint + offerID + '/question');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'multipart/form-data'
      };
    body.question = "What is the detail?";
    console.log(url);
    // var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'addQuestionForOffer,' + '200,' + res.status);
    check(res, {
        ['addQuestionForOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function addQuestionForOffer_selfOffer(tokenID)
{
    var offerID = getUserOfferID(tokenID)
    var url=prop.gintaa_baseurl.concat(endpoint + offerID + '/question');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'multipart/form-data'
      };
    body.question = "What is the detail?";
    console.log(url);
    // var res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'addQuestionForOffer_selfOffer,' + '406,' + res.status);
    check(res, {
        ['addQuestionForOffer_selfOffer: EXPECTED: 406,     ACTUAL: ' + `${res.status}`] : res.status === 406,
    });
}