import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//*********************
//GET DELIVERY METHODS*
//*********************

var endpoint = '/deals/v1/deals/delivery-method';

export default function ()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  getDelMethods(baseurl,tokenID)
}
export function getDelMethods(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1611226560187'); //** Offer ID belongs to same user */
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };

    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getDelMethods,' + '200,' + res.status);
    check(res, {
        ['getDelMethods: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getDelMethods_destinationOfferMan(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?sourceOfferIds=1609913675756');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };
    
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getDelMethods_destinationOfferMan,' + '404,' + res.status);
    check(res, {
        ['getDelMethods_destinationOfferMan: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function getDelMethods_destinationOfferBlnk(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=&sourceOfferIds=1609913675756');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };
      
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getDelMethods_destinationOfferBlnk,' + '404,' + res.status);
    check(res, {
        ['getDelMethods_destinationOfferBlnk: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function getDelMethods_destinationOfferInvalid(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=000000&sourceOfferIds=1609913675756');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };
         
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getDelMethods_destinationOfferInvalid,' + '404,' + res.status);
    check(res, {
        ['getDelMethods_destinationOfferInvalid: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function getDelMethods_destinationOfferAlphabet(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=abcdef&sourceOfferIds=1609913675756');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };
            
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getDelMethods_destinationOfferAlphabet,' + '404,' + res.status);
    check(res, {
        ['getDelMethods_destinationOfferAlphabet: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function getDelMethods_destinationOfferSymbol(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=!@#$%^&sourceOfferIds=1609913675756');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };
               
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getDelMethods_destinationOfferSymbol,' + '404,' + res.status);
    check(res, {
        ['getDelMethods_destinationOfferSymbol: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function getDelMethods_sourceOfferMan(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };
               
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getDelMethods_sourceOfferMan,' + '404,' + res.status);
    check(res, {
        ['getDelMethods_sourceOfferMan: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function getDelMethods_sourceOfferBlank(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };
                
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getDelMethods_sourceOfferBlank,' + '404,' + res.status);
    check(res, {
        ['getDelMethods_sourceOfferBlank: EXPECTED: 404,     ACTUAL: ' + `${res.status}`] : res.status === 404,
    });
}
export function getDelMethods_invalidAuth(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a"
    };
                  
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getDelMethods_invalidAuth,' + '403,' + res.status);
    check(res, {
        ['getDelMethods_invalidAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function getDelMethods_noAuth(baseurl)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
                      
    var res = http.get(url,{ headers: requestHeaders });
    console.log(`,${url},` +'getDelMethods_noAuth,' + '403,' + res.status);
    check(res, {
        ['getDelMethods_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function getDelMethods_diffMehod(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };

    var res = http.put(url,null,{ headers: requestHeaders });
    console.log(`,${url},` +'getDelMethods_diffMehod,' + '405,' + res.status);
    check(res, {
        ['getDelMethods_diffMehod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}
export function getDeliveryMethodID(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1612000708838'); //** Offer ID belongs to same user */
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID
    };

    var res = http.get(url,{ headers: requestHeaders });
    console.log(res.body + " " + res.status)
    var deliveryMethodID = res.json().payload[0].id;
    return deliveryMethodID;
}