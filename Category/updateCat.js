import http from 'k6/http';
import { check } from 'k6';
import { getVerticalID } from "../Vertical/getAllVertical.js";
import { getImageID } from "./uploadImageCat.js";
import { getCatID } from "../Category/getCategory.js";
//********************************
//USE THIS API TO UPDATE CATEGORY*
//********************************

var endpoint = '/categories/v1/categories/';
var body = {
    "completionSearchScore": 0,
    "description": "string",
    "fullSearchScore": 0,
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

  export default function categoryUpdate()
  {
    var baseurl = 'https://alpha.api.gintaa.com';
    updateCategory(baseurl);
    updateCategory_diffMethod(baseurl);
    updateCategory_diffHeader(baseurl);
    updateCategory_nonExistingCatID(baseurl);
    updateCategory_comScoreMan(baseurl);
    updateCategory_desMan(baseurl);
    updateCategory_fullScoreMan(baseurl);
    updateCategory_imageMan(baseurl);
    updateCategory_labelMan(baseurl);
    updateCategory_nameMan(baseurl);
    updateCategory_statusMan(baseurl);
    updateCategory_synMan(baseurl);
    updateCategory_verMan(baseurl);
    updateCategory_typeMan(baseurl)
  }

export function updateCategory(baseurl)
{
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory'+JSON.stringify(body));
}
export function updateCategory_diffMethod(baseurl)
{
  var catID = getCatID(baseurl);
  var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_diffMethod'+JSON.stringify(body));
}
export function updateCategory_diffHeader(baseurl)
{
  var catID = getCatID(baseurl);
  var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    var requestHeaders = {
      'Content-Type': 'multipart/form-data'
    };
    // var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_diffHeader'+JSON.stringify(body));
}
export function updateCategory_nonExistingCatID(baseurl)
{
  var catID = '000000';
  var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_nonExistingCatID'+ JSON.stringify(body));
}
export function updateCategory_comScoreMan(baseurl)
{
  var catID = getCatID(baseurl);
  var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    delete body.completionSearchScore;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.post(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_comScoreMan'+JSON.stringify(body));
}
export function updateCategory_desMan(baseurl)
{
  var catID = getCatID(baseurl);
  var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    delete body.description;
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_desMan'+JSON.stringify(body));
}
export function updateCategory_fullScoreMan(baseurl)
{
  var catID = getCatID(baseurl);
  var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    delete body.fullSearchScore;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_fullScoreMan'+JSON.stringify(body));
}
export function updateCategory_imageMan(baseurl)
{
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    delete body.imageId;
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_imageMan'+JSON.stringify(body));
}
export function updateCategory_labelMan(baseurl)
{
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    delete body.label;
    body.name = "Test Name";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_labelMan'+JSON.stringify(body));
}
export function updateCategory_nameMan(baseurl)
{
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    delete body.name;
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_nameMan'+JSON.stringify(body));
}
export function updateCategory_parentMan(baseurl)
{
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    delete body.parent;
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_parentMan'+JSON.stringify(body));
}
export function updateCategory_statusMan(baseurl)
{
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    body.parent = "Test Parent";
    delete body.status;
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_statusMan'+JSON.stringify(body));
}
export function updateCategory_synMan(baseurl)
{
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    delete body.synonyms;
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_synMan'+JSON.stringify(body));
}
export function updateCategory_verMan(baseurl)
{
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID);
    delete body.verticalId;
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms = new Array("Dummy","Demo");
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_verMan'+JSON.stringify(body));
}
export function updateCategory_typeMan(baseurl)
{
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID);
    body.verticalId = getVerticalID(baseurl);
    body.completionSearchScore = 1;
    body.description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    body.fullSearchScore = 1;
    body.imageId = getImageID();
    body.label = "Test Dummy Label";
    body.name = "Test Name";
    body.parent = "Test Parent";
    body.status = "Active"
    //Sending two values in "synonym" parameter of API
    body.synonyms[0] = "Dummy";
    body.synonyms[1] = "Demo";
    delete body.type;
    var requestHeaders = {
      'Content-Type': 'application/json'
    };
    // var res = http.put(url,JSON.stringify(body),{ headers: requestHeaders });
    console.log('updateCategory_typeMan'+JSON.stringify(body));
}