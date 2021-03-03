import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//========================================
//use this api to create new offer service
//=========================================

var endpoint = '/offers/v1/offers/service';
var requestBody = {
    "availableDays": [
      "string"
    ],
    "categoryId": "string",
    "condition": "string",
    "customTags": [
      "string"
    ],
    "description": "string",
    // IS THIS THE NEW FIELD ????
    "desire": {
      "amount": 0,
      "categoryId": "string",
      "description": "string",
      "desireType": "string",
      "tags": [
        "string"
      ],
      "verticalId": "string"
    },
    "draftId": "string",  ///????
    "endDate": "string",
    "endTime": "string",
    "exchangeMode": "string",
    "facets": [        ///????
      {
        "label": "string",
        "name": "string",
        "values": [
          "string"
        ]
      }
    ],
    "images": [
      {
        "displayIndex": "string",  ///????
        "id": "string"
      }
    ],
    "location": {
      "addressLine": "string",
      "annotation": "string",
      "area": "string",
      "city": "string",
      "country": "string",
      "flatNo": "string",
      "lat": 0,
      "lng": 0,
      "state": "string",
      "zip": "string"
    },
    "name": "string",
    "startDate": "string",
    "startTime": "string",
    "totalOfferValuation": 0,
    "unitOfferValuation": 0,
  //NON-MANDATORY FIELDS  
  //====================
  // "documents": [
  //   {
  //    "displayIndex": "string",
  //    "id": "string"
  //  }
  //],
    // "videos": [
    //   {
    //     "displayIndex": "string",
    //     "id": "string"
    //   }
    // ]
  }
export function change_user_default()
{
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
    var url = baseurl.concat(endpoint);
    let requestHeaders = {
          'X-Authorization-Firebase': tokenID,
          'Content-Type': 'application/json'
        };
    let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
    var statusCode = res.json().code;
  }