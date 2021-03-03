import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//*************************
//getQuestionsByDealStatus*
//*************************

var endpoint = '/deals/v1/deals/questions';

export default function ()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  getDealQuestions(baseurl,tokenID);
  getDealQuestionID(baseurl,tokenID)
}
export function getDealQuestions(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?status=INITIATED');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };

    var res = http.get(url,{ headers: requestHeaders });
    // console.log('getDealQuestions : ' + res.body);
    console.log(`,${url},` +'getDealQuestions,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getDealQuestions: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getDealQuestionID(baseurl,tokenID)
{
    var quesAns = [];
    var url=baseurl.concat(endpoint + '?status=INITIATED');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };

    var res = http.get(url,{ headers: requestHeaders });
    // console.log(res.status + res.body);
    quesAns.push(res.json().payload[0].questionId);
    quesAns.push(res.json().payload[0].answers[0].answerId);
    // console.log(quesAns);
    return quesAns;
}