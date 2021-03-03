import http from 'k6/http';
import { check } from 'k6';
import { getFavDealID } from "./getAllDeals.js";
import { getDealQuestionID } from "./dealQuestionGet.js";
import { tokenGenerate,tokenGenerate_2 } from '../generateToken.js';

//**************
//REPORT A DEAL*
//**************

var endpoint = '/deals/v1/deals/report';

var body = {
    "comment": "string",
    "dealRefNo": "string",
    "questionAnswerSelections": [
      {
        "answerIds": [
          "string"
        ],
        "questionId": "string"
      }
    ]
  }
export default function ()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  reportDeal(baseurl,tokenID);
}
export function reportDeal(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    body.comment = "The product was not the same as shown in the picture";
    body.dealRefNo = getFavDealID(baseurl,tokenID);
    var quesAnsID = getDealQuestionID(baseurl,tokenID)
    body.questionAnswerSelections[0].questionId = quesAnsID[0];
    body.questionAnswerSelections[0].answerIds[0] = quesAnsID[1];
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
                      
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('reportDeal : ' + res.body);
    console.log(`,${url},` +'reportDeal,' + '200,' + res.status);
    check(res, {
        ['reportDeal: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}