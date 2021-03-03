import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';
import { getCatID } from "../Category/getCategory.js";
import { getImageID } from "./uploadImage.js";
import { getDocID } from './uploadDocument.js';
import { getVideoID } from './uploadVideo.js';
import { getVerticalID } from "../Vertical/getAllVertical.js";

const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/offers/v1/offers/item';

const body = {
    "categoryId": "string",
    "conditionType": "string",
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
    "images": [
      {
        "displayIndex": "string",
        "id": "string",
        "cover":true
      }
    ],
    "itemCondition": "string",
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
    "quantity": 0,
    "totalOfferValuation": 0,
    "unitOfferValuation": 0,
    "videos": [
      {
        "displayIndex": "string",
        "id": "string"
      }
    ]
  }

export default function()
{
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
    createNewOfferItem(tokenID);
    //createNewOfferItem_invalidAuth(tokenID);
    //createNewOfferItem_noAuth(tokenID);
    // createNewOfferItem_catMan(tokenID);
    // createNewOfferItem_catBlank(tokenID);
    // createNewOfferItem_blankCountry(tokenID);
    // createNewOfferItem_blankFlatNo(tokenID);
    // createNewOfferItem_blankLat(tokenID);
    // createNewOfferItem_blankLng(tokenID);
    // createNewOfferItem_blankState(tokenID);
    // createNewOfferItem_blankZip(tokenID);
    // createNewOfferItem_catInvalid(tokenID);
    // createNewOfferItem_conInvalid(tokenID);
    // createNewOfferItem_conMan(tokenID);
    // createNewOfferItem_descriptionBlank(tokenID);
    // createNewOfferItem_desireAmountMan(tokenID);
    // createNewOfferItem_desireCatMan(tokenID);
    // createNewOfferItem_desireDescriptionMan(tokenID);
    // createNewOfferItem_desireTagMan(tokenID);
    // createNewOfferItem_desireTypeItem(tokenID);
    // createNewOfferItem_desireTypeItemAmountMan(tokenID);
    // createNewOfferItem_desireTypeItemTagMan(tokenID);
    // createNewOfferItem_desireTypeMoney(tokenID);
    // createNewOfferItem_desireTypeMoneyDesMan(tokenID);
    // createNewOfferItem_desireTypeMoneyNonNumeric(tokenID);
    // createNewOfferItem_desireTypeMoneyTagMan(tokenID);
    // createNewOfferItem_desireTypeMoneyVerMan(tokenID);
    // createNewOfferItem_invalidDocID(tokenID);
    // createNewOfferItem_docMan(tokenID);
    // createNewOfferItem_grLat90(tokenID);
    // createNewOfferItem_grLng180(tokenID);
    // createNewOfferItem_invalidImageID(tokenID);
    // createNewOfferItem_imageMan(tokenID);
    // createNewOfferItem_invalidAnnotation(tokenID);
    // createNewOfferItem_invalidArea(tokenID);
    // createNewOfferItem_invalidCity(tokenID);
    // createNewOfferItem_invalidCountry(tokenID);
    
    // createNewOfferItem_invalidFlatNo(tokenID);
    
    // createNewOfferItem_invalidItemCon(tokenID);
    // createNewOfferItem_invalidQuantity(tokenID);
    // createNewOfferItem_invalidState(tokenID);
    // createNewOfferItem_invalidTotalOfferValuation(tokenID);
    // createNewOfferItem_invalidUnitOfferValuation(tokenID);
    // createNewOfferItem_invalidVideoID(tokenID);
    // createNewOfferItem_invalidZip(tokenID);
    // createNewOfferItem_invalidZipLength(tokenID);
    // createNewOfferItem_itemConditionMan(tokenID);
    // createNewOfferItem_lessLatM90(tokenID);
    // createNewOfferItem_lessLngM180(tokenID);
    // createNewOfferItem_nameAlphanumeric(tokenID);
    // createNewOfferItem_nameMan(tokenID);
    // createNewOfferItem_quantityMan(tokenID);
    // createNewOfferItem_tagInvalid(tokenID);
    // createNewOfferItem_tagMan(tokenID);
    // createNewOfferItem_totalOfferValuationMan(tokenID);
    // createNewOfferItem_unitOfferValuationMan(tokenID);
    // createNewOfferItem_videoMan(tokenID);
    // createNewOfferItem_zeroTotalOfferValuation(tokenID);
    // createNewOfferItem_zeroUnitOfferValuation(tokenID);
}
export function createNewOfferItem(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.name = "Apple iphone 9S 128Gb";
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
                       "The device functions on iOS v9 Operating System, and for powerful performance. ";
    body.desire.amount = 0;
    body.desire.categoryId = getCatID()
    body.desire.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
    "The device functions on iOS v9 Operating System, and for powerful performance. ";
    body.desire.desireType = "Anything"
    body.desire.verticalId = getVerticalID();
    body.exchangeMode = "Anything";
    body.location.addressLine = "Jadavpur";
    body.location.annotation = "Home";
    body.location.lat = 22.6519;
    body.location.lng = 88.3786;
    body.location.state = "West Bengal";
    body.location.zip = "700108"
    body.location.city = "Kolkata";
    body.location.country = "India";
    body.images[0].id = getImageID(tokenID);
    delete body.images[0].displayIndex;
    body.documents[0].id = getDocID(tokenID);
    delete body.videos[0].displayIndex;
    body.videos[0].id = getVideoID(tokenID);
    delete body.videos[0].displayIndex;
    body.totalOfferValuation = 100;
    body.unitOfferValuation = 100
    body.quantity = 1
    body.categoryId = getCatID();
    body.conditionType = "Good";
    body.itemCondition = "New";
    body.facets[0].name = "RAM";
    body.facets[0].label = "RAM"
    body.facets[0].values[0] = "16GB";

    // console.log('createNewOfferItem : ' + JSON.stringify(body))
    
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'createNewOfferItem,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_invalidAuth(tokenID) 
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
        'Content-Type': 'application/json'
      };
    body.desire.categoryId = getCatID(baseurl);
    body.conditionType = "Good";
    body.exchangeMode = "Anything";
    body.name = "Test Item Offer Create";
    body.itemCondition = "Used";
    
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(res.body)
    console.log(`,${url},` +'createNewOfferItem_invalidAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_invalidAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function createNewOfferItem_noAuth(tokenID) 
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'Content-Type': 'application/json'
      };
    body.desire.categoryId = getCatID(baseurl);
    body.conditionType = "Good";
    body.exchangeMode = "Anything";
    body.name = "Test Item Offer Create";
    body.itemCondition = "Used";
    
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(res.body)
    console.log(`,${url},` +'createNewOfferItem_noAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_noAuth: EXPECTED: 403,     ACTUAL: ' + `${res.status}`] : res.status === 403,
    });
}
export function createNewOfferItem_catMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    delete body.categoryId;
    body.conditionType = "Good";
    body.exchangeMode = "Anything";
    body.name = "Test Item Offer Create";
    body.itemCondition = "Used";

    // console.log('createNewOfferItem_catMan : ' + JSON.stringify(body))
    
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(res.body)
    console.log(`,${url},` +'createNewOfferItem_catMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_catMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_catBlank(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = "";
    body.conditionType = "Good";
    body.exchangeMode = "Anything";
    body.name = "Test Item Offer Create";
    body.itemCondition = "Used";

    // console.log('createNewOfferItem_catBlank : ' + JSON.stringify(body))
    
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(res.status + res.body)
    console.log(`,${url},` +'createNewOfferItem_catBlank,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_catBlank: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_catInvalid(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = "111111";
    body.conditionType = "Good";
    body.exchangeMode = "Anything";
    body.name = "Test Item Offer Create";
    body.itemCondition = "Used";
    
    // console.log('createNewOfferItem_catInvalid : ' + JSON.stringify(body))

    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    
    console.log(`,${url},` +'createNewOfferItem_catInvalid,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_catInvalid: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_conMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = "111111";
    delete body.conditionType;
    body.exchangeMode = "Anything";
    body.name = "Test Item Offer Create";
    body.itemCondition = "Used";

    // console.log('createNewOfferItem_conMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_conMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_conMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_conInvalid(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.name = "Test Item Offer Create";
    body.itemCondition = "Used";

    // console.log('createNewOfferItem_conInvalid : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_conInvalid,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_conInvalid: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_tagMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.name = "Test Item Offer Create";
    body.itemCondition = "Used"; 
    delete body.customTags;
    // console.log('createNewOfferItem_tagMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_tagMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_tagMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_tagInvalid(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.name = "Test Item Offer Create";
    body.itemCondition = "Used"; 
    body.customTags[0] = "abc";

    // console.log('createNewOfferItem_tagInvalid : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_tagInvalid,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_tagInvalid: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_nameMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    delete body.name;
    body.itemCondition = "Used";

    // console.log('createNewOfferItem_nameMan : ' + JSON.stringify(body))

    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_nameMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_nameMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_nameAlphanumeric(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.name = "@#$+";
    body.itemCondition = "Used";

    // console.log('createNewOfferItem_nameAlphanumeric : ' + JSON.stringify(body))

    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_nameAlphanumeric,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_nameAlphanumeric: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_descriptionBlank(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    // console.log('createNewOfferItem_descriptionBlank : ' + JSON.stringify(body))
    
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_descriptionBlank,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_descriptionBlank: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_desireDescriptionMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    delete body.desire.description;

    // console.log('createNewOfferItem_desireDescriptionMan : ' + JSON.stringify(body))
    
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireDescriptionMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireDescriptionMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_desireAmountMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    delete body.desire.amount;
    
    // console.log('createNewOfferItem_desireAmountMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireAmountMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireAmountMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_desireCatMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    delete body.desire.categoryId;
    
    // console.log('createNewOfferItem_desireCatMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireCatMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireCatMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_desireTagMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    delete body.desire.tags;
    
    // console.log('createNewOfferItem_desireTagMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireTagMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireTagMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_desireVerticalMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    delete body.desire.tags;
    
    // console.log('createNewOfferItem_desireVerticalMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireVerticalMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireVerticalMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_desireTypeItem(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Item";
    delete body.desire.categoryId;
    delete body.desire.verticalId;
    
    // console.log('createNewOfferItem_desireTypeItem : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireTypeItem,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireTypeItem: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_desireTypeItemAmountMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Item";
    delete body.desire.categoryId;
    delete body.desire.verticalId;
    delete body.desire.amount;
    
    // console.log('createNewOfferItem_desireTypeItemAmountMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireTypeItemAmountMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireTypeItemAmountMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_desireTypeItemTagMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Item";
    delete body.desire.categoryId;
    delete body.desire.verticalId;
    delete body.desire.tags;
    
    // console.log('createNewOfferItem_desireTypeItemTagMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireTypeItemTagMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireTypeItemTagMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_desireTypeMoney(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.categoryId = getCatID(baseurl);
    body.desire.verticalId = getVerticalID(baseurl);
    delete body.desire.amount;
    
    // console.log('createNewOfferItem_desireTypeMoney : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireTypeMoney,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireTypeMoney: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_desireTypeMoneyCatMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    delete body.desire.categoryId;
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = 10;
    // console.log('createNewOfferItem_desireTypeMoneyCatMan : ' + JSON.stringify(body))
    
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireTypeMoneyCatMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireTypeMoneyCatMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_desireTypeMoneyDesMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    delete body.desire.description;
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = 10;
    // console.log('createNewOfferItem_desireTypeMoneyDesMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireTypeMoneyDesMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireTypeMoneyDesMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_desireTypeMoneyTagMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    delete body.desire.tags;
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = 10;
    // console.log('createNewOfferItem_desireTypeMoneyTagMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireTypeMoneyTagMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireTypeMoneyTagMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_desireTypeMoneyVerMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    delete body.desire.verticalId;
    body.desire.amount = 10;
    // console.log('createNewOfferItem_desireTypeMoneyVerMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireTypeMoneyVerMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireTypeMoneyVerMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_desireTypeMoneyNonNumeric(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    delete body.desire.verticalId;
    body.desire.amount = "Money";
    // console.log('createNewOfferItem_desireTypeMoneyNonNumeric : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_desireTypeMoneyNonNumeric,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_desireTypeMoneyNonNumeric: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_imageMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    delete body.images;
    // console.log('createNewOfferItem_imageMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_imageMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_imageMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_invalidImageID(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.images[0].id = "XYZ";
    // console.log('createNewOfferItem_invalidImageID : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidImageID,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_invalidImageID: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_videoMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    delete body.videos;
    // console.log('createNewOfferItem_videoMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_videoMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_videoMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_invalidVideoID(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.videos[0].id = "XYZ";
    // console.log('createNewOfferItem_invalidVideoID : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidVideoID,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_invalidVideoID: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_docMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    delete body.documents;
    // console.log('createNewOfferItem_videoMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_videoMan,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_videoMan: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function createNewOfferItem_invalidDocID(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.documents[0].id = "XYZ";
    // console.log('createNewOfferItem_invalidDocID : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidDocID,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_invalidDocID: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_itemConditionMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    delete body.itemCondition;
    // console.log('createNewOfferItem_itemConditionMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_itemConditionMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_itemConditionMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_invalidItemCon(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "XYZ";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    // console.log('createNewOfferItem_invalidItemCon : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidItemCon,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_invalidItemCon: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_quantityMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    delete body.quantity;
    // console.log('createNewOfferItem_quantityMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_quantityMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_quantityMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_invalidQuantity(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.quantity = "abc";
    // console.log('createNewOfferItem_invalidQuantity : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidQuantity,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_invalidQuantity: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_unitOfferValuationMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    delete body.unitOfferValuation;
    // console.log('createNewOfferItem_unitOfferValuationMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_unitOfferValuationMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_unitOfferValuationMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_invalidUnitOfferValuation(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.unitOfferValuation = "abc";
    // console.log('createNewOfferItem_invalidUnitOfferValuation : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidUnitOfferValuation,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_invalidUnitOfferValuation: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_zeroUnitOfferValuation(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.unitOfferValuation = 0;
    // console.log('createNewOfferItem_zeroUnitOfferValuation : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_zeroUnitOfferValuation,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_zeroUnitOfferValuation: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_totalOfferValuationMan(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    delete body.totalOfferValuation;
    // console.log('createNewOfferItem_totalOfferValuationMan : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_totalOfferValuationMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_totalOfferValuationMan: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_invalidTotalOfferValuation(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.totalOfferValuation = "abc";
    // console.log('createNewOfferItem_invalidTotalOfferValuation : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidTotalOfferValuation,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_invalidTotalOfferValuation: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_zeroTotalOfferValuation(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.totalOfferValuation = 0;
    // console.log('createNewOfferItem_zeroTotalOfferValuation : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_zeroTotalOfferValuation,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['createNewOfferItem_zeroTotalOfferValuation: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400,
    });
}
export function createNewOfferItem_blankAddressLine(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "";
    body.location.annotation = "Patuli";
    body.location.area = "Area2";
    body.location.city = "kolkata";
    body.location.country = "India";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.state = "West Bengal";
    body.location.zip = "223344";
    // console.log('createNewOfferItem_blankAddressLine : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_blankAddressLine,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_blankAddressLine: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_blankZip(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.annotation = "Patuli";
    body.location.area = "Area2";
    body.location.city = "kolkata";
    body.location.country = "India";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.state = "West Bengal";
    body.location.zip = "";
    // console.log('createNewOfferItem_blankZip : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_blankZip,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_blankZip: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_invalidZipLength(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.annotation = "Patuli";
    body.location.area = "Area2";
    body.location.city = "kolkata";
    body.location.country = "India";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.state = "West Bengal";
    body.location.zip = "12";
    // console.log('createNewOfferItem_invalidZipLength : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidZipLength,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_invalidZipLength: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_invalidZip(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.annotation = "Patuli";
    body.location.area = "Area2";
    body.location.city = "kolkata";
    body.location.country = "India";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.state = "West Bengal";
    body.location.zip = "ABCDEF";
    // console.log('createNewOfferItem_invalidZip : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidZip,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_invalidZip: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_blankFlatNo(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.annotation = "Patuli";
    body.location.area = "Area2";
    body.location.city = "kolkata";
    body.location.country = "India";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.state = "West Bengal";
    body.location.flatNo = "";
    // console.log('createNewOfferItem_blankFlatNo : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_blankFlatNo,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_blankFlatNo: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_invalidFlatNo(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.annotation = "Patuli";
    body.location.area = "Area2";
    body.location.city = "kolkata";
    body.location.country = "India";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.state = "West Bengal";
    body.location.flatNo = "/.,@";
    // console.log('createNewOfferItem_invalidFlatNo : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidFlatNo,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_invalidFlatNo: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_blankArea(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.annotation = "Patuli";
    body.location.city = "kolkata";
    body.location.country = "India";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.state = "West Bengal";
    body.location.area = "";
    // console.log('createNewOfferItem_blankArea : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_blankArea,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_blankArea: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_invalidArea(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.annotation = "Patuli";
    body.location.city = "kolkata";
    body.location.country = "India";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.state = "West Bengal";
    body.location.area = "/%#@";
    // console.log('createNewOfferItem_invalidArea : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidArea,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_invalidArea: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_blankAnnotation(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.city = "kolkata";
    body.location.country = "India";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.state = "West Bengal";
    body.location.annotation = "";
    // console.log('createNewOfferItem_blankAnnotation : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_blankAnnotation,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_blankAnnotation: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_invalidAnnotation(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.city = "kolkata";
    body.location.country = "India";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.state = "West Bengal";
    body.location.annotation = "!@##";
    // console.log('createNewOfferItem_invalidAnnotation : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidAnnotation,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_invalidAnnotation: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_blankCity(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.description = "Apple presents Apple iPhone 6S mobile sporting 4.7 Inches display in Rose Gold colour." + 
      "The device functions on iOS v9 Operating System, and for powerful performance, " + 
      "Apple iPhone 6S comes with combination of Dual Core processors."
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.country = "India";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.state = "West Bengal";
    body.location.annotation = "!@##";
    body.location.city = "";
    // console.log('createNewOfferItem_blankCity : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_blankCity,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_blankCity: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_invalidCity(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.country = "India";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.state = "West Bengal";
    body.location.annotation = "!@##";
    body.location.city = "!@#12@#";
    // console.log('createNewOfferItem_invalidCity : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidCity,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_invalidCity: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_blankState(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.country = "India";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.annotation = "Patuli";
    body.location.city = "Kolkata";
    body.location.state = "";
    body.location.zip = "223456";
    // console.log('createNewOfferItem_blankState : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_blankState,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_blankState: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_invalidState(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.country = "India";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.annotation = "Patuli";
    body.location.city = "Kolkata";
    body.location.zip = "223456";
    body.location.state = "!@32";
    // console.log('createNewOfferItem_invalidState : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidState,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_invalidState: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_blankCountry(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.annotation = "Patuli";
    body.location.city = "Kolkata";
    body.location.zip = "223456";
    body.location.state = "West Bengal";
    body.location.country = "";
    // console.log('createNewOfferItem_blankCountry : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_blankCountry,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_blankCountry: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_invalidCountry(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.annotation = "Patuli";
    body.location.city = "Kolkata";
    body.location.zip = "223456";
    body.location.state = "West Bengal";
    body.location.country = "!@!13";
    // console.log('createNewOfferItem_invalidCountry : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_invalidCountry,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_invalidCountry: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_blankLat(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.lng = -170.44;
    body.location.annotation = "Patuli";
    body.location.city = "Kolkata";
    body.location.zip = "223456";
    body.location.state = "West Bengal";
    body.location.country = "India";
    body.location.lat = null;
    // console.log('createNewOfferItem_blankLat : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_blankLat,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_blankLat: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_blankLng(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.flatNo = "90876";
    body.location.lat = -80.22;
    body.location.annotation = "Patuli";
    body.location.city = "Kolkata";
    body.location.zip = "223456";
    body.location.state = "West Bengal";
    body.location.country = "India";
    body.location.lat = -80.22;
    body.location.lng = null;
    // console.log('createNewOfferItem_blankLng : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_blankLng,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_blankLng: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_grLat90(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.flatNo = "90876";
    body.location.annotation = "Patuli";
    body.location.city = "Kolkata";
    body.location.zip = "223456";
    body.location.state = "West Bengal";
    body.location.country = "India";
    body.location.lat = 95.22;
    body.location.lng = -170.44;
    // console.log('createNewOfferItem_grLat90 : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_grLat90,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_grLat90: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_grLng180(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.flatNo = "90876";
    body.location.annotation = "Patuli";
    body.location.city = "Kolkata";
    body.location.zip = "223456";
    body.location.state = "West Bengal";
    body.location.country = "India";
    body.location.lat = 95.22;
    body.location.lng = -185.44;
    // console.log('createNewOfferItem_grLng180 : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_grLng180,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_grLng180: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_lessLatM90(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.flatNo = "90876";
    body.location.annotation = "Patuli";
    body.location.city = "Kolkata";
    body.location.zip = "223456";
    body.location.state = "West Bengal";
    body.location.country = "India";
    body.location.lat = -100.22;
    body.location.lng = -170.44;
    // console.log('createNewOfferItem_lessLatM90 : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_lessLatM90,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_lessLatM90: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}
export function createNewOfferItem_lessLngM180(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.categoryId = getCatID(baseurl);
    body.conditionType = "ABC";
    body.exchangeMode = "Anything";
    body.itemCondition = "Used";
    body.name = "Test Item";
    body.itemCondition = "Used";
    body.desire.desireType = "Money";
    body.desire.verticalId = getVerticalID(baseurl);
    body.desire.amount = "Money";
    body.location.addressLine = "worli";
    body.location.flatNo = "90876";
    body.location.annotation = "Patuli";
    body.location.city = "Kolkata";
    body.location.zip = "223456";
    body.location.state = "West Bengal";
    body.location.country = "India";
    body.location.lat = -80.22;
    body.location.lng = -190.44;
    delete body.location.state;
    delete body.location.zip;
    // console.log('createNewOfferItem_lessLngM180 : ' + JSON.stringify(body))
    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log(`,${url},` +'createNewOfferItem_lessLngM180,' + '400,' + res.status + `,${res.timings.duration}` );
    check(res, {
    ['createNewOfferItem_lessLngM180: EXPECTED: 400,     ACTUAL: ' + `${res.status}`] : res.status === 400
    });
}