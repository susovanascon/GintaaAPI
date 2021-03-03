import http from 'k6/http';
import { check } from 'k6';
import { getDeliveryMethodID } from "./delMethods.js";
import { getUserOfferID,getOfferID } from "../Offer/allOffers.js";
import { tokenGenerate } from '../generateToken.js';

//*********************************
//INITIATE A DEAL AGAINST AN OFFER*
//*********************************

var endpoint = '/deals/v1/deals/initiate';

var body = {
            "amountCurrency": "INR",
            "comments": "I badly need this",
            "destinationOfferDetails": [
                                            {
                                            "offerId": "string",
                                            "offerItemCount": 0,
                                            "offerType": "string"
                                            }
                                        ],
            "deliveryMethodId": "Junction|Self|Shipping",
            "expiryDate": "20211024",
            "includeInsurance": true,
            "requestedAmount": 500,
            "meetingDate": "20201218",
            "meetingStartTime": "10:00:00",
            "meetingEndTime": "15:00:00",
            "sourceOfferDetails": [
                                    {
                                        "offerId": "1609831177744",
                                        "offerItemCount": 1,
                                        "offerType": "Item"
                                    }
            ]
}
export default function ()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  moneyWithItemDealID(baseurl,tokenID);
}
export function initiateDeal_moneyWithItem(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = getOfferID(baseurl);
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.deliveryMethodId = "Shipping";
    delete body.sourceOfferDetails;
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log('initiateDeal_moneyWithItem : ' + res.body);
    console.log(`,${url},` +'initiateDeal_moneyWithItem,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['initiateDeal_moneyWithItem: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function initiateDeal_moneyWithService(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = getOfferID(baseurl);
    body.destinationOfferDetails[0].offerType = "Service";
    body.deliveryMethodId = "Shipping";
    delete body.sourceOfferDetails;
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'initiateDeal_moneyWithService,' + '200,' + res.status);
    check(res, {
        ['initiateDeal_moneyWithService: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function initiateDeal_itemToItem(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "1611224379811";//"NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.deliveryMethodId = getDeliveryMethodID(baseurl,tokenID);
    delete body.requestedAmount;
    var sOffer = getUserOfferID(baseurl,tokenID);
    body.sourceOfferDetails[0].offerId = sOffer[0];
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log(res.status + " " + res.body);
    // console.log(`,${url},` +'initiateDeal_itemToItem,' + '200,' + res.status);
    // check(res, {
    //     ['initiateDeal_itemToItem: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    // });
}
export function initiateDeal_serviceToService(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Service";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Service";
    console.log(JSON.stringify(body));
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_serviceToItem(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR SERVICE OFFER ID";
    delete body.destinationOfferDetails[0].offerItemCount;
    body.destinationOfferDetails[0].offerType = "Service";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_itemToService(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR SERVICE OFFER ID";
    delete body.destinationOfferDetails[0].offerItemCount;
    body.destinationOfferDetails[0].offerType = "Service";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_itemToItemNMoney(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.requestedAmount = 200;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_itemToServiceNMoney(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR SERVICE OFFER ID";
    delete body.destinationOfferDetails[0].offerItemCount;
    body.destinationOfferDetails[0].offerType = "Service";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_serviceToServiceNMoney(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Service";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.requestedAmount = 150;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Service";
    console.log(JSON.stringify(body));
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_amountCurrencyMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    delete body.amountCurrency;
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Service";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.requestedAmount = 150;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Service";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_amountCurrencyBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.amountCurrency = "";
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_amountCurrencyInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.amountCurrency = "000000";
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_commentsMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    delete body.comments;
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_commentsBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.comments = "";
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_destinationOfferIDMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    delete body.destinationOfferDetails[0].offerId;
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_destinationOfferIDBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_destinationOfferIDInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "000000";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_destinationOfferIDAlpha(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "ajshgshsx";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_destinationOfferIDSymbol(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "#@$@%@@%$";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_destinationOfferItemCountMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    delete body.destinationOfferDetails[0].offerItemCount;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_destinationOfferItemCountBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = null;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_destinationOfferItemCountInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = "00A";
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_destinationOfferTypeMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    delete body.destinationOfferDetails[0].offerType;
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_destinationOfferTypeBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_destinationOfferTypeInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "ppp";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_deliveryMethodIDMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    delete body.deliveryMethodId;
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_deliveryMethodIDBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_deliveryMethodIDInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "000";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_junctionMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    delete body.gintaaJunctionId;
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_junctionBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_junctionInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "000000";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_expiryDateMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.expiryDate;
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_expiryDateBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.expiryDate = "";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_expiryDateInvalidYear(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.expiryDate = "20001024";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_expiryDatePast(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.expiryDate = "20001035";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_expiryDateInvalidMonth(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.expiryDate = "20211924";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_expiryDateInvalidDay(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.expiryDate = "20211040";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_includeInsuranceMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    delete body.includeInsurance;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_requestedAmountBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.requestedAmount = "";
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_meetingDateMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    delete body.meetingDate;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_meetingDateBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.meetingDate = "";
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_meetingDateInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.meetingDate = "20211035";
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_meetingDatePast(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.meetingDate = "20001035";
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_startTimeMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    delete body.meetingStartTime;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_startTimeBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.meetingStartTime = "";
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_startTimeInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.meetingStartTime = "100:00:00"
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_endTimeMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    delete body.meetingEndTime;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_endTimeInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.meetingEndTime = "150:00:00";
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_sourceOfferIDMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    delete body.sourceOfferDetails[0].offerId;
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_sourceOfferIDBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_sourceOfferIDInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "0000";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_sourceOfferCountMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    delete body.sourceOfferDetails[0].offerItemCount;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_sourceOfferCountBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = null;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_sourceOfferCountInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = "A1";
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_sourceOfferTypeMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    delete body.sourceOfferDetails[0].offerType;
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_sourceOfferTypeBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_sourceOfferTypeInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "tgh";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_invalidAuth(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_noAuth(baseurl)
{
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function initiateDeal_diffMethod(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Item";
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function moneyWithItemDealID(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = getOfferID(baseurl);
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.deliveryMethodId = "Shipping";
    delete body.sourceOfferDetails;
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    // console.log(JSON.stringify(body));
    var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    // console.log(res.body)
    var dealID = res.json().payload.dealReferenceId;
    // console.log(dealID)
    return dealID;
}
