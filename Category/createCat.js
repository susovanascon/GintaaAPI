import http from 'k6/http';
import { check } from 'k6';
import { getHomeVerticalID } from "../Vertical/getAllVertical.js";
import { getCategoryImageID } from "../Category/uploadImageCat.js";
//***************************************************
//	USE THIS API TO CREATE CATEGORY UNDER A VERTICAL*
//***************************************************

var endpoint = '/categories/v1/categories';
var requestHeaders = {
  'Content-Type': 'application/json'
};

const body = {
    "completionSearchScore": 1,
    "description": "string",
    "fullSearchScore": 1,
    "imageId": "string",
    "label": "string",
    "name": "string",
    "parent": "string",
    "status": "string",
    "synonyms": [
      "string"
    ],
    "themeImageIds": [
      "string"
    ],
    "type": "Item",
    "verticalId": "string"
  }

export default function categoryCreate()
{
  var baseurl = 'https://alpha.api.gintaa.com';
  createCategory(baseurl);
//   createCategory_DescriptionMan(baseurl);
//   createCategory_imageMan(baseurl);
//   createCategory_labelMan(baseurl);
//   createCategory_nameMan(baseurl);
//   createCategory_statusMan(baseurl);
//   createCategory_statusInv(baseurl);
//   createCategory_synMan(baseurl);
//   createCategory_typeMan(baseurl);
//   createCategory_verMan(baseurl);
//   createCategory_themeMan(baseurl);
}

export function createCategory(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.verticalId = getHomeVerticalID(baseurl);
    body.imageId = getCategoryImageID(baseurl);
    body.label = "Fitness Equipment";
    body.name = "Fitness Equipment";
    body.parent = null;
    body.status = "active";
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
                        "Aenean commodo ligula eget dolor.";
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    delete body.themeImageIds[0];
    body.type = "Item";

    var res = http.post(url, JSON.stringify(body), { headers: requestHeaders });
    console.log('createCategory' + res.body);
    // console.log(`,${url},` +'createCategory,' + '200,' + res.status);
    // check(res, {
    //     ['createCategory: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    //   });
}
export function createCategory_DescriptionMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    delete body.description;
    body.verticalId = getVerticalID(baseurl);
    body.imageId = getImageID(baseurl);
    body.label = "Dummy Test Category 2";
    body.name = "Dummy Test Category 2";
    body.parent = "Test Parent";
    body.status = "active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    body.themeImageIds[0] = getImageID(baseurl);
    body.type = "Item";
    console.log('createCategory_DescriptionMan' + JSON.stringify(body));
    // var res = http.post(url, JSON.stringify(body), { headers: requestHeaders })
    // check(res, {
    //    ['createCategory_DescriptionMan: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    //   });  
}
export function createCategory_imageMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.verticalId = getVerticalID(baseurl);
    delete body.imageId;
    body.label = "Dummy Test Category 3";
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
    body.name = "Dummy Test Category 3";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    body.themeImageIds[0] = getImageID(baseurl);
    body.type = "Item";
    console.log('createCategory_imageMan' + JSON.stringify(body));
    // var res = http.post(url, JSON.stringify(body), { headers: requestHeaders })
    // check(res, {
    //    ['createCategory_imageMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    //   });  
}
export function createCategory_labelMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.verticalId = getVerticalID(baseurl);
    body.imageId = getImageID(baseurl);
    delete body.label;
    body.name = "Dummy Test Category 4";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    body.themeImageIds[0] = getImageID(baseurl);
    body.type = "Item";
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
    console.log('createCategory_labelMan' + JSON.stringify(body));
    // var res = http.post(url, JSON.stringify(body), { headers: requestHeaders })
    // check(res, {
    //    ['createCategory_labelMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    //   });  
}
export function createCategory_nameMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.verticalId = getVerticalID(baseurl);
    body.imageId = getImageID(baseurl);
    body.label = "Dummy Test Category 5";
    delete body.name;
    body.parent = "Test Parent";
    body.status = "Active"
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    body.themeImageIds[0] = getImageID(baseurl);
    body.type = "Item";
    console.log('createCategory_nameMan' + JSON.stringify(body));
    // var res = http.post(url, JSON.stringify(body), { headers: requestHeaders })
    // check(res, {
    //    ['createCategory_nameMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    //   });  
}
export function createCategory_statusMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.verticalId = getVerticalID(baseurl);
    body.imageId = getImageID(baseurl);
    body.label = "Dummy Test Category 6";
    body.name = "Dummy Test Category 6";
    body.parent = "Test Parent";
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
    body.themeImageIds[0] = getImageID(baseurl);
    delete body.status;
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    body.type = "Item";
    console.log('createCategory_statusMan' + JSON.stringify(body));
    // var res = http.post(url, JSON.stringify(body), { headers: requestHeaders })
    // check(res, {
    //    ['createCategory_statusMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    //   });  
}
export function createCategory_statusInv(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.verticalId = getVerticalID(baseurl);
    body.imageId = getImageID(baseurl);
    body.label = "Dummy Test Category 6";
    body.name = "Dummy Test Category 6";
    body.parent = "Test Parent";
    body.status = "ABC";
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
    body.themeImageIds[0] = getImageID(baseurl);
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    body.type = "Item";
    console.log('createCategory_statusInv' + JSON.stringify(body));
    // var res = http.post(url, JSON.stringify(body), { headers: requestHeaders })
    // check(res, {
    //    ['createCategory_statusInv: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    //   });  
}
export function createCategory_synMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.verticalId = getVerticalID(baseurl);
    body.imageId = getImageID(baseurl);
    body.label = "Dummy Test Category 7";
    body.name = "Dummy Test Category 7";
    body.parent = "Test Parent";
    body.status = "Active";
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
    body.themeImageIds[0] = getImageID(baseurl);
    //Sending two values in "synonym" parameter of API
    delete body.synonyms;
    body.type = "Item";
    console.log('createCategory_synMan' + JSON.stringify(body));
    // var res = http.post(url, JSON.stringify(body), { headers: requestHeaders })
    // check(res, {
    //    ['createCategory_synMan: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    //   });  
}
export function createCategory_typeMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.verticalId = getVerticalID(baseurl);
    body.imageId = getImageID(baseurl);
    body.label = "Dummy Test Category 8";
    body.name = "Dummy Test Category 8";
    body.parent = "Test Parent";
    body.status = "Active";
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
    body.themeImageIds[0] = getImageID(baseurl);
    //Sending two values in "synonym" parameter of API
    body.synonyms = new Array("Dummy","Demo");
    delete body.type;

    console.log('createCategory_typeMan'+JSON.stringify(body));
    // var res = http.post(url, JSON.stringify(body), { headers: requestHeaders })
    // check(res, {
    //    ['createCategory_typeMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    //   });  
}
export function createCategory_verMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    delete body.verticalId;
    body.imageId = getImageID(baseurl);
    body.label = "Dummy Test Category 9";
    body.name = "Dummy Test Category 9";
    body.parent = "Test Parent";
    body.status = "Active";
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
    body.themeImageIds[0] = getImageID(baseurl);
    //Sending two values in "synonym" parameter of API
    delete body.verticalId;
    body.type = "Item";
    body.synonyms[0]="Dummy";
    body.synonyms[1]="Demo";
    console.log('createCategory_verMan'+JSON.stringify(body));
    // var res = http.post(url, JSON.stringify(body), { headers: requestHeaders })
    // check(res, {
    //    ['createCategory_verMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    //   });  
}
export function createCategory_themeMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    body.imageId = getImageID(baseurl);
    body.label = "Dummy Test Category 9";
    body.name = "Dummy Test Category 9";
    body.parent = "Test Parent";
    body.status = "Active";
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
    delete body.themeImageIds[0];
    //Sending two values in "synonym" parameter of API
    body.verticalId = getVerticalID(baseurl);;
    body.type = "Item";
    body.synonyms[0]="Dummy";
    body.synonyms[1]="Demo";
    console.log('createCategory_themeMan'+JSON.stringify(body));
    // var res = http.post(url, JSON.stringify(body), { headers: requestHeaders })
    // check(res, {
    //    ['createCategory_themeMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    //   });  
}