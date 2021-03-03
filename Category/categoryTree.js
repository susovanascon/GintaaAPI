import http from 'k6/http';
import { check } from 'k6';
import { getCatID } from "./getCategory.js";

//**********************************
//USE THIS API TO GET CATEGORY TREE*
//**********************************
const endpoint = '/categories/v1/tree/'

export default function getCatTree()
{
  var baseurl = 'https://alpha.api.gintaa.com';
  catTree(baseurl);
  catTree_diffMethod(baseurl);
  catTree_non_existCatID(baseurl)
}

export function catTree(baseurl)
{
    var catID = getCatID();
    var url = baseurl.concat(endpoint + catID);
    var res = http.get(url);
    console.log(`,${url},` +'catTree,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['catTree: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200,
      });
}
export function catTree_diffMethod(baseurl)
{
    var catID = getCatID();
    var url = baseurl.concat(endpoint + catID);
    var res = http.put(url);
    check(res, {
      ['catTree_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405,
      });   
}
export function catTree_non_existCatID(baseurl)
{
    var catID = '000000';
    var url = baseurl.concat(endpoint + catID);
    var res = http.put(url);
    check(res, {
      ['catTree_non_existCatID: EXPECTED: 404,      ACTUAL: ' + `${res.status}`]: res.status === 404,
      });   
}