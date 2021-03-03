import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//***************
//storeQuestions*
//***************

var endpoint = '/deals/v1/deals/questions';

var body = {
    "questions": [
      {
        "answers": [
          {
            "answer": "string",
            "displayOrder": 0
          }
        ],
        "displayOrder": 0,
        "question": "string"
      }
    ]
  }
export default function()
{
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
    postQuestionAgainstDeal(baseurl,tokenID)
}
export function postQuestionAgainstDeal(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint+ '?status=INITIATED');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.questions[0].question = "WHY??????"
    body.questions[0].answers[0].answer = "Please";
    body.questions[0].displayOrder = 1
    body.questions[0].answers[0].displayOrder = 1;
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log('postQuestionAgainstDeal : ' + res.body);
    console.log(`,${url},` +'postQuestionAgainstDeal,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['postQuestionAgainstDeal: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}