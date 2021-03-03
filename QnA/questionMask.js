import http from 'k6/http';
import { check } from 'k6';
import { getUserOfferID } from "../Offer/allOffers.js";
import { myOfferQuestionID } from "./questionGetAll.js";
import { tokenGenerate } from '../generateToken.js';
//**********************************************/
//Used to mask a question for a particular offer/
//**********************************************/
const endpoint = '/qna/v1/qna/offer/';

export default function()
{
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
    // maskQuestionOfOffer(baseurl,tokenID);
    unmaskQuestionOfOffer(baseurl,tokenID)
}
export function maskQuestionOfOffer(baseurl,tokenID)
{
    var offerID = getUserOfferID(baseurl,tokenID);
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/' + threadID + '/mask');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
    var res = http.patch(url,null, { headers: requestHeaders });
    // console.log(res.status+ " "+res.body)
    console.log(`,${url},` +'maskQuestionOfOffer,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['maskQuestionOfOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function unmaskQuestionOfOffer(baseurl,tokenID)
{
    var offerID = getUserOfferID(baseurl,tokenID);
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/' + threadID + '/mask?mask=false');
    
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
    var res = http.patch(url,null, { headers: requestHeaders });
    // console.log(res.status+ " "+res.body)
    console.log(`,${url},` +'unmaskQuestionOfOffer,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['unmaskQuestionOfOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}