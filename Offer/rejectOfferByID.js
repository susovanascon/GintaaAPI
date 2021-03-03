import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';
import { AllOffers } from '../offer/allOffers.js';

// used for :- reject the offer by id.

const endpoint = '/offers/v1/reject/offers/oid';


export default function rejectOff (){
    
    var tokenID1 = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
    rejectAllOffById(baseurl,tokenID1)

    
}

export function rejectAllOffById(baseurl,tokenID){
    
 
    // there is no reject api according to the QA Team, so im using hardcode
    var rejectOID = 1613198698163
    // console.log("Print the function name:-"+Object.values(this)[1].name) // print the function name but not working for the default func

    // var tokenID = tokenGenerate() ;
    // var baseurl = 'https://alpha.api.gintaa.com';
    var url = baseurl.concat(endpoint+"/"+rejectOID);
    // console.log("combine URL:------"+url) //hide
  
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
    };

    var res = http.get(url,{ headers: requestHeaders });
    // console.log("Res:------"+res.body); // hide
    if(res.status === 200){
        // console.log(`,${url},` +' rejectAllOffById,' + 'Expected:- 200, & getting:-' + res.status +' Duration:-'+ `,${res.timings.duration}`);//hide
    }else{
        // console.log('Expected:- 200, & getting:-' + res.status + ' Message:-'+res.json().message); // hide
    }
    
    check(res, {
        ['rejectAllOffById: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });

   
}