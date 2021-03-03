import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//***************************************
//UPDATE A DEAL AGAINST A CHANGE REQUEST*
//***************************************

var endpoint = '/deals/v1​/deals​/update';

var body = {
            "amountCurrency": "INR",
            "comments": "I badly need this",
            "dealRefNo": "string",
            "destinationOfferDetails": [
                    {
                            "offerId": "1609913675786",
                            "offerItemCount": 1,
                            "offerType": "Item"
                    }
            ],
            "deliveryMethodId": "Junction|Self|Shipping",
            "gintaaJunctionId": "6d6d35cd-630f-469b-8f42-c237dbc398c8",
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

export function updateDeal(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.dealRefNo = "Need to write";
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.sourceOfferDetails;
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_amountMan(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Service";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    delete body.amountCurrency;
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_amountBlank(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Item";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.amountCurrency = "";
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
export function updateDeal_amountInvalid(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.destinationOfferDetails[0].offerId = "NEED TO WRITE CODE FOR ITEM OFFER ID";
    body.destinationOfferDetails[0].offerItemCount = 1;
    body.destinationOfferDetails[0].offerType = "Service";
    body.gintaaJunctionId = "NEED TO WRITE CODE FOR IT";
    body.deliveryMethodId = "NEED TO WRITE CODE FOR IT";
    body.amountCurrency = "0000";
    delete body.requestedAmount;
    body.sourceOfferDetails[0].offerId = "NEED TO WRITE CODE";
    body.sourceOfferDetails[0].offerItemCount = 1;
    body.sourceOfferDetails[0].offerType = "Service";
    console.log(JSON.stringify(body));
    var requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_commentsMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_commentsBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_destinationOfferIDMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_destinationOfferIDBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_destinationOfferIDInvalid(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_destinationOfferIDAlpha(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_destinationOfferIDSymbol(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_destinationOfferItemCountMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_destinationOfferItemCountBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_destinationOfferItemCountInvalid(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_destinationOfferTypeMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_destinationOfferTypeBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_destinationOfferTypeInvalid(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_deliveryMethodIDMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_deliveryMethodIDBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_deliveryMethodIDInvalid(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_junctionMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_junctionBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_junctionInvalid(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_expiryDateMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_expiryDateBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_expiryDateInvalidYear(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_expiryDatePast(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_expiryDateInvalidMonth(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_expiryDateInvalidDay(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_includeInsuranceMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_requestedAmountBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_meetingDateMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_meetingDateBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_meetingDateInvalid(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_meetingDatePast(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_startTimeMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_startTimeBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_startTimeInvalid(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_endTimeMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_endTimeInvalid(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_sourceOfferIDMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_sourceOfferIDBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_sourceOfferIDInvalid(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_sourceOfferCountMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_sourceOfferCountBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_sourceOfferCountInvalid(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_sourceOfferTypeMan(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_sourceOfferTypeBlank(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_sourceOfferTypeInvalid(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_invalidAuth(baseurl,tokenID)
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
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export function updateDeal_noAuth(baseurl)
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
        'Content-Type': 'application/json'
    };
    console.log(JSON.stringify(body));
    var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
}
export default function updateDeal_diffMethod(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    body.dealRefNo = "NEED TO WRITE THE CODE FOR REF NUMBER"
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
