import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//***************
//ABANDON A DEAL*
//***************
var endpoint = '/deals/v1/deals/abandon';

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
  abandonDeal(baseurl,tokenID);
}


export function abandonDeal(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    var requestHeaders = {
                            'X-Authorization-Firebase': tokenID,
                            'Content-Type': 'application/json'
                        };
    body.comment = "No money, so abandoned"
    body.dealRefNo = "NEED TO WRITE";
    body.questionAnswerSelections[0].answerIds = "NEED TO WRITE";
    body.questionAnswerSelections[0].questionId = "NEED TO WRITE"
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'abandonDeal,' + '200,' + res.status);
    check(res, {
        ['abandonDeal: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    }); 
}