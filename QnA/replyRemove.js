import http from 'k6/http';
import { check } from 'k6';
import { getUserOfferID } from "../Offer/allOffers.js";
import { myOfferQuestionID } from "./questionGetAll.js";
import { getReplyID } from "./replyGet.js";

//**********************/
//Used to remove a reply/
//**********************/
const endpoint = '/qna/v1/qna/offer/';

export function deleteReplyForOffer(baseurl,tokenID)
{
    var offerID = getUserOfferID(baseurl);
    var threadID = myOfferQuestionID(baseurl,tokenID);
    var replyID = getReplyID(baseurl,tokenID);
    var url=baseurl.concat(endpoint + offerID[0] + '/question/'+ threadID + '/reply/' + replyID);
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
      };
        
    var res = http.del(url,null,{ headers: requestHeaders });
    console.log(`,${url},` +'deleteReplyForOffer,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['deleteReplyForOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}