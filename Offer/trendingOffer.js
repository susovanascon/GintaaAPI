import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';


const endpoint = '/offers/v1/reject/offers/trendingOffer';


export default function rejectOff (){
    
    var tokenID1 = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
    trendOffer(baseurl,tokenID1)

    
}

export function trendOffer(baseurl,tokenID){

    // offerType & region passed as a query but according to QA don't know where we find this data
    var addQuery = "?offerType="+"&region=" 
    var url = baseurl.concat(endpoint)+addQuery;
    // console.log("combine URL:------"+url) // hide
  
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };

    var res = http.get(url,{ headers: requestHeaders });
    // console.log("Res:------"+res.body); // hide
    if(res.status === 200){
        // console.log(`,${url},` +' trendOffer,' + 'Expected:- 200, & getting:-' + res.status +' Duration:-'+ `,${res.timings.duration}`);//hide
    }else{
        // console.log('Expected:- 200, & getting:-' + res.status + ' Message:-'+res.json().message); //hide
    }
    check(res, {
        ['trendOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });

   
}