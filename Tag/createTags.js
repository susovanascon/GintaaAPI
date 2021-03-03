import http from 'k6/http';
import { check } from 'k6';
import { getVerticalID } from "../Vertical/getAllVertical.js";

const endpoint = '/categories/v1/tags/';

var tag =
{
  "allowCompletionSearch": true,
  "allowFullTextSearch": true,
  "description": "string",
  "label": "string",
  "name": "string",
  "values": [
    "string"
  ],
  "vertical": "verticalID"
}
var requestHeaders = {
  'Content-Type': 'application/json'
};
export default function tagCreate()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    //createTag(baseurl);
    createTag_withoutDesciption(baseurl);
    createTag_withoutLabel(baseurl);
    createTag_withoutName(baseurl);
    createTag_withoutValue(baseurl);
    createTag_withoutVer(baseurl);
}
export function createTag(baseurl)
{
  var url = baseurl.concat(endpoint);
  tag.description = "Body types is a broad subject to deal with and the names given also vary from country to country." +
                      "The names aregiven depending upon design, utility, technology used and customization."
  tag.label = "Vehicle Body Style";
  tag.name = "Vehicle Body Style";
  tag.values[0] = "Sedan";
  tag.values[1] = "Coupe";
  tag.values[2] = "Wagon";
  tag.vertical = getVerticalID(baseurl);
  var arrayTag = new Array(tag);

  var res = http.post(url, JSON.stringify(arrayTag) , { headers: requestHeaders });
  console.log(`,${url},` +'createTag,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['createTag: Status code MUST be 200' ]: res.status === 200,
      });
}
export function createTag_withoutDesciption(baseurl)
{
  var url = baseurl.concat(endpoint);
  delete tag.description;
  tag.label = "Vehicle Body Style";
  tag.name = "Vehicle Body Style";
  tag.values[0] = "Sedan";
  tag.values[1] = "Coupe";
  tag.values[2] = "Wagon";
  tag.vertical = getVerticalID(baseurl);
  var arrayTag = new Array(tag);
  var res = http.post(url, JSON.stringify(arrayTag), { headers: requestHeaders });
  console.log(res.status + res.body)
}
export function createTag_withoutLabel(baseurl)
{
  var url = baseurl.concat(endpoint);
  tag.description = "Body types is a broad subject to deal with and the names given also vary from country to country." +
                      "The names aregiven depending upon design, utility, technology used and customization."
  delete tag.label;
  tag.name = "Vehicle Body Style";
  tag.values[0] = "Sedan";
  tag.values[1] = "Coupe";
  tag.values[2] = "Wagon";
  tag.vertical = getVerticalID(baseurl);
  var arrayTag = new Array(tag);
  var res = http.post(url, JSON.stringify(arrayTag), { headers: requestHeaders });
  console.log(res.status + res.body)
}
export function createTag_withoutName(baseurl)
{
  var url = baseurl.concat(endpoint);
  tag.description = "Body types is a broad subject to deal with and the names given also vary from country to country." +
                      "The names aregiven depending upon design, utility, technology used and customization."
  tag.label = "Vehicle Body Style";
  delete tag.name;
  tag.values[0] = "Sedan";
  tag.values[1] = "Coupe";
  tag.values[2] = "Wagon";
  tag.vertical = getVerticalID(baseurl);
  var arrayTag = new Array(tag);
  var res = http.post(url, JSON.stringify(arrayTag), { headers: requestHeaders });
  console.log(res.status + res.body)
}
export function createTag_withoutValue(baseurl)
{
  var url = baseurl.concat(endpoint);
  tag.description = "Body types is a broad subject to deal with and the names given also vary from country to country." +
                      "The names aregiven depending upon design, utility, technology used and customization."
  tag.label = "Vehicle Body Style";
  tag.name = "Vehicle Body Style";;
  delete tag.values;
  tag.vertical = getVerticalID(baseurl);
  var arrayTag = new Array(tag);
  var res = http.post(url, JSON.stringify(arrayTag), { headers: requestHeaders });
  console.log(res.status + res.body)
}
export function createTag_withoutVer(baseurl)
{
  var url = baseurl.concat(endpoint);
  tag.description = "Body types is a broad subject to deal with and the names given also vary from country to country." +
                      "The names aregiven depending upon design, utility, technology used and customization."
  tag.label = "Vehicle Body Style";
  tag.name = "Vehicle Body Style";;
  tag.values[0] = "Sedan";
  tag.values[1] = "Coupe";
  tag.values[2] = "Wagon";;
  delete tag.vertical;
  var arrayTag = new Array(tag);
  var res = http.post(url, JSON.stringify(arrayTag), { headers: requestHeaders });
  console.log(res.status + res.body)
}