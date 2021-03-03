import http from 'k6/http';
import { check } from 'k6';
import { getCatID } from "./getCategory.js";

//********************************************
//USE THIS API TO GET CATEGORY BY CATEGORY ID*
//********************************************
const endpoint = '/categories/v1/categories/';

export default function getcategorybyID()
{
  var baseurl = 'https://alpha.api.gintaa.com';
  catByID(baseurl);
  // catByID_diffMethod(baseurl);
  // catByID_nonExistingCat(baseurl);
}

export function catByID(baseurl)
{
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID);
    var res = http.get(url);
    
    console.log(`,${url},` +'catByID,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['catByID: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
      });
}
export function catByID_diffMethod(baseurl)
{
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID);
    var res = http.del(url);
    // console.log('catByID: Actual response Status :' + res.status);
    check(res, {
        'catByID: Status code MUST be 405': res.status === 405,
      });
}
export function catByID_nonExistingCat(baseurl)
{
    var catID = '000000';
    var url = baseurl.concat(endpoint + catID);
    var res = http.get(url);
    // console.log('catByID: Actual response Status :' + res.status);
    check(res, {
        'catByID_nonExistingCat: Status code MUST be 404': res.status === 404,
      });
}