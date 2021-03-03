import http from 'k6/http';
import { check } from 'k6';
import { getOfferID,getUserOfferID } from "../Offer/allOffers.js";
import { tokenGenerate } from '../generateToken.js';
//*********************************************/
//Used to add a question for a particular offer/
//*********************************************/
const endpoint = '/qna/v1/qna/offer/';
const prop = JSON.parse(open('../config/config.json'));
export default function()
{
    var tokenID = tokenGenerate() ;
    //addQuestionForOffer(baseurl,tokenID)
    myOfferQuestionID(tokenID);
    //getAllQuestion_myOffer(baseurl,tokenID)
}
export function getAllQuestion(baseurl,tokenID)
{
    var offerID = getUserOfferID(baseurl);
    var url=baseurl.concat(endpoint + offerID[0] + '/question/all');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      };
    
    var res = http.get(url,{ headers: requestHeaders });
    // console.log(res.status+ " "+res.body) //hide
    console.log(`,${url},` +'getAllQuestion,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getAllQuestion: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function myOfferQuestionID(tokenID)
{
    var offerID = getUserOfferID();
    var url=prop.gintaa_baseurl.concat(endpoint + offerID[0] + '/question/all');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
    
    var res = http.get(url,{ headers: requestHeaders });
    // console.log(res.status+ " "+res.body) //hide
    // console.log(url)
    var threadID = res.json().payload[0].threadId;

    return threadID;
}
export function otherOfferQuestionID(baseurl,tokenID)
{
    var offerID = getOfferID(baseurl);
    console.log(offerID)
    var url=baseurl.concat(endpoint + offerID + '/question/all');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
      };
    // console.log(url)
    var res = http.get(url,{ headers: requestHeaders });
    // console.log(res.status + " " + res.body)
    var threadID = res.json().payload[0].threadId;
    // console.log(threadID)
    return threadID;
}