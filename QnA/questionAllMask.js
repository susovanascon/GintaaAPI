import http from 'k6/http';
import { check } from 'k6';
import { getUserOfferID } from "../Offer/allOffers.js";
import { tokenGenerate } from '../generateToken.js';
//*********************************************/
//Used to add a question for a particular offer/
//*********************************************/
const endpoint = '/qna/v1/qna/offer/';

export default function()
{
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
    maskAllQuestionOfOffer(baseurl,tokenID);
}

export function maskAllQuestionOfOffer(baseurl,tokenID)
{
    var offerID = getUserOfferID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/maskAll');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
    var res = http.patch(url,null, { headers: requestHeaders });
    // console.log(res.status+ " "+res.body)//hide
    console.log(`,${url},` +'maskAllQuestionOfOffer,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['maskAllQuestionOfOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function unmaskAllQuestionOfOffer(baseurl,tokenID)
{
    var offerID = getUserOfferID(baseurl,tokenID);
    var url = baseurl.concat(endpoint + offerID[0] + '/question/maskAll?mask=false');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
    var res = http.patch(url,null, { headers: requestHeaders });
    // console.log(res.status+ " "+res.body)
    console.log(`,${url},` +'unmaskAllQuestionOfOffer,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
        ['unmaskAllQuestionOfOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}