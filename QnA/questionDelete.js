import http from 'k6/http';
import { check } from 'k6';
import { getUserOfferID } from "../Offer/allOffersOfUser.js";
import { myOfferQuestionID } from "./questionGetAll.js";

//************************************************/
//Used to remove a question from particular offer/
//**********************************************/
const endpoint = '/qna/v1/qna/offer/';

export function deleteQuestionForOffer(baseurl,tokenID)
{
    var offerID = getUserOfferID(baseurl);
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var url=baseurl.concat(endpoint + offerID + '/question/'+ threadID);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
        
    var res = http.del(url,null,{ headers: requestHeaders });
    console.log(`,${url},` +'deleteQuestionForOffer,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['deleteQuestionForOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}