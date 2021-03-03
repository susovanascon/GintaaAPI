import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';
import { getCatID } from "../Category/getCategory.js";
import { getImageID } from "./uploadImage.js";
import { getVideoID } from "./uploadVideo.js";
import { getVerticalID } from "../Vertical/getAllVertical.js";

//***********************/
//CREATE A SERVICE OFFER*
//***********************/
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/offers/v1/offers/service';

var requestBody = {
  "availableDays": [
    "string"
  ], // 1. What should be the values 2. If the values will be seperated by comma
  "categoryId": "string",
  "customTags": [
    "string"
  ],
  "description": "string",
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
  "documents": [
    {
      "displayIndex": "string",
      "id": "string"
    }
  ],
  "endDate": "string",
  "endTime": "string",
  "exchangeMode": "string",
  "facets": [
    {
      "label": "string",
      "name": "string",
      "values": [
        "string"
      ]
    }
  ],
  "fixedRate": 0,
  "images": [
    {
      "displayIndex": "string",
      "id": "string",
      "cover":true
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
  "ratePerHour": 0,
  "startDate": "string",
  "startTime": "string",
  "totalOfferValuation": 0,
  "unitOfferValuation": 0,
  "videos": [
    {
      "displayIndex": "string",
      "id": "string"
    }
  ],
  "serviceTimingInfos": [
    {
      "dayOfWeek": "string",
      "timingInfoList": [
        {
          "endTime": "string",
          "startTime": "string"
        }
      ]
    }
  ]
}


export default function()
{
  var tokenID = tokenGenerate() ;
  createService(tokenID);
  //createService_invalidAuth(tokenID);
  // createService_rateMan(tokenID);
  //createService_availableDayMan(tokenID);
  //createService_availableDayInvalid(tokenID)
  // createService_catMan(tokenID)
}


export function createService(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  //requestBody.customTags[0] = "createCustomTags";
  requestBody.availableDays[0] = "SUNDAY";
  requestBody.categoryId = getCatID();
  requestBody.description = "Home Tutors provide instruction to students in their homes." +
  "Essential job duties a Home Tutor should mention in his or her resume are preparing lesson materials," + 
  "identifying student strengths and weaknesses, helping with homework, explaining topics students don't understand," +
  "and praising effort.";
  requestBody.desire.amount = 20000;
  requestBody.desire.categoryId = getCatID(),
  requestBody.desire.description = "A camera is an optical instrument used to capture an image." + 
                                  "At their most basic, cameras are sealed boxes (the camera body)" +
                                  "with a small hole (the aperture) that allow light in to capture " +
                                  "an image on a light-sensitive surface";
  requestBody.desire.desireType = "Anything";
  requestBody.desire.tags[0] = "desireTags"
  requestBody.desire.verticalId = getVerticalID();;
  delete requestBody.documents;
  requestBody.endDate = "20-04-2021"; //Need to confirm the format
  requestBody.endTime = "23:56:34"; //Need to confirm the format
  requestBody.exchangeMode = "Anything";
  
  requestBody.fixedRate = 1000;
  requestBody.images[0].id = getImageID(tokenID);
  requestBody.location.addressLine = "Address Line 1";
  requestBody.location.annotation = "Annotation 1";
  requestBody.location.area = "Area 1";
  requestBody.location.city = "city 1";
  requestBody.location.country = "country 1";
  requestBody.location.flatNo = "flatNo 1";
  requestBody.location.lat = 22.765;
  requestBody.location.lng = 80.866;
  requestBody.location.state = "state 1";
  requestBody.location.zip = "654362";
  requestBody.name = "TestOffer1";
  requestBody.ratePerHour = 100;
  requestBody.startDate = "14-04-2020",
  requestBody.startTime = "23:56:34",
  delete requestBody.totalOfferValuation;
  delete requestBody.unitOfferValuation;
  requestBody.videos[0].id = getVideoID(tokenID);
  requestBody.serviceTimingInfos[0].dayOfWeek = "SUNDAY",
  requestBody.serviceTimingInfos[0].timingInfoList[0].startTime = "08:00:00";
  requestBody.serviceTimingInfos[0].timingInfoList[0].endTime = "10:00:00"
  //requestBody.documents[1].id = "123456";
  // console.log("Print the Json Body :-"+JSON.stringify(requestBody)); // hide
/*
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  console.log(res.body); // hide
  console.log(`,${url},` +'createService,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createService: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
    */
}
export function createService_invalidAuth(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
        'Content-Type': 'application/json'
      };

  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  console.log(res.body);
  // console.log(`,${url},` +'createService_invalidAuth,' + '403,' + res.status + `,${res.timings.duration}`);
  //   check(res, {
  //   ['createService_invalidAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
  //   });
}
export function createService_noAuth(tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'Content-Type': 'application/json'
      };

  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  console.log(res.body);
  // console.log(`,${url},` +'createService,' + '403,' + res.status + `,${res.timings.duration}`);
  //   check(res, {
  //   ['createService: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
  //   });
}
export function createService_rateMan(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  delete requestBody.ratePerHour;
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "ratePerHour")
    {
      console.log(`,${url},` +'createService_rateMan,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_rateMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_rateMan,' + 'No Error found for Parameter');
    } 
}
export function createService_rateNonNum(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  requestBody.ratePerHour = "abc";

  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });

  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "ratePerHour")
    {
      console.log(`,${url},` +'createService_rateNonNum,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_rateNonNum: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_rateNonNum,' + 'No Error found for Parameter');
    }
}
export function createService_fixedRateMan(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  delete requestBody.fixedRate;

  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "fixedRate")
    {
      console.log(`,${url},` +'createService_fixedRateMan,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_fixedRateMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_fixedRateMan,' + 'No Error found for Parameter');
    }
}
export function createService_fixedRateNonNum(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  requestBody.fixedRate = "abc";

  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });

  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "fixedRate")
    {
      console.log(`,${url},` +'createService_fixedRateNonNum,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_fixedRateNonNum: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_fixedRateNonNum,' + 'No Error found for Parameter');
    }
}
export function createService_availableDayMan(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  delete requestBody.availableDays;
  console.log(JSON.stringify(requestBody))
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "availableDays[0]")
    {
      console.log(`,${url},` +'createService_availableDayMan,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_availableDayMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_fixedRateMan,' + 'No Error found for Parameter');
    }
    console.log(res.body)
}
export function createService_availableDayInvalid(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  requestBody.availableDays[0] = "ABC";
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "availableDays[0]")
    {
      console.log(`,${url},` +'createService_availableDayMan,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_availableDayMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_fixedRateMan,' + 'No Error found for Parameter');
    }
}
export function createService_catMan(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  delete requestBody.categoryId;
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "categoryId")
    {
      console.log(`,${url},` +'createService_catMan,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_catMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_catMan,' + 'No Error found for Parameter');
    } 
}
export function createService_catInvalid(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  requestBody.categoryId = '111111';
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "categoryId")
    {
      console.log(`,${url},` +'createService_catInvalid,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_catInvalid: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_catMan,' + 'No Error found for Parameter');
    } 
}
export function createService_cusTagMan(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  delete requestBody.customTags;
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  console.log(`,${url},` +'createService_catMan,' + '200,' + res.status + `,${res.timings.duration}`);
  check(res, {
      ['createService_catMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
      }); 
}
export function createService_cusTagInvalid(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  requestBody.customTags[0] = 'abc';
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  console.log(`,${url},` +'createService_cusTagInvalid,' + '200,' + res.status + `,${res.timings.duration}`);
  check(res, {
      ['createService_cusTagInvalid: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
      }); 
}
export function createService_nameMan(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  delete requestBody.name;
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "name")
    {
      console.log(`,${url},` +'createService_nameMan,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_nameMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_catMan,' + 'No Error found for Parameter');
    }
}
export function createService_nameNum(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  requestBody.name = "@#$+";
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "name")
    {
      console.log(`,${url},` +'createService_nameNum,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_nameNum: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_nameNum,' + 'No Error found for Parameter');
    }
}
export function createService_nameLength(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  requestBody.name = "phone";
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "name")
    {
      console.log(`,${url},` +'createService_nameLength,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_nameLength: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_nameLength,' + 'No Error found for Parameter');
    }
}
export function createService_desMan(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  delete requestBody.description;
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "description")
    {
      console.log(`,${url},` +'createService_desMan,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_desMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_desMan,' + 'No Error found for Parameter');
    }
}
export function createService_desNum(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  delete requestBody.description;
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "description")
    {
      console.log(`,${url},` +'createService_desMan,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_desMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_desMan,' + 'No Error found for Parameter');
    }
}
export function createService_desLength(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  requestBody.description = "Iphone 7s";
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "description")
    {
      console.log(`,${url},` +'createScreateService_desLengthervice_desMan,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_desLength: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_desLength,' + 'No Error found for Parameter');
    }
}
export function createService_exchangeModeMan(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  delete requestBody.exchangeMode;
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "exchangeMode")
    {
      console.log(`,${url},` +'createService_exchangeModeMan,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_exchangeModeMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_exchangeModeMan,' + 'No Error found for Parameter');
    }
}
export function createService_exchangeModeInvalid(tokenID)
{
  var flag = 1;
  var url = prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
  requestBody.exchangeMode = "abc";
  
  let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
  // console.log(res.body)
  for (let i=0;i<res.json().payload.length;i++){
    if(res.json().payload[i].param == "exchangeMode")
    {
      console.log(`,${url},` +'createService_exchangeModeMan,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
          ['createService_exchangeModeMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
          });
      flag = 0
    }
  }
  if(flag == 1)
    {
      console.log(`,${url},` +'createService_exchangeModeMan,' + 'No Error found for Parameter');
    }
}