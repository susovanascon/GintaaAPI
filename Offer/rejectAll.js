import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';


var endpoint = '/offers/v1/reject/offers/all';


export default function(){
    
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
    rejectAllOffer(baseurl,tokenID)   
}

export function rejectAllOffer(baseurl,tokenID){
    
    var url = baseurl.concat(endpoint);  
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };

    var res = http.get(url,{ headers: requestHeaders });
    // console.log("Response:-"+res.body); // hide
    
    if(res.status === 200){
        // console.log(`,${url},` +' rejectAllOffer,' + 'Expected:- 200, & getting:-' + res.status +' Duration:-'+ `,${res.timings.duration}`); // hide
    }else{
        // console.log('Expected:- 200, & getting:-' + res.status); // hide
    }
    
    check(res, {
        ['rejectAllOffer: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });

   
}

