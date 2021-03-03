import http from 'k6/http';
import { check } from 'k6';
import { getCatID } from "./getCategory.js";

//********************************************************
//USE THIS API TO GET ALL CHILD CATEGORIES BY CATEGORY ID*
//******************************************************** 
const endpoint = '/categories/v1/categories/';

export default function getAllChildCategories()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    childCat(baseurl);
    // childCatPaginated(baseurl);
    // childCat_diffMethod(baseurl);
    // childCat_nonExistingCategory(baseurl);
    // childCat_noQuerry(baseurl);
}

export function childCat(baseurl)
{  
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID + "/next?depth=10");
    var res = http.get(url);
    
    console.log(`,${url},` +'childCat,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['childCat: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
      });
}
export function childCatPaginated(baseurl)
{
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID + "/next?depth=2");
    console.log(url);
    // var res = http.get(url);
    // check(res, {
    //     'childCatPaginated: Status code MUST be 200': res.status === 200,
    //   });
}
export function childCat_diffMethod(baseurl)
{  
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID + "/next?depth=10");
    console.log(url);
    // var res = http.post(url);
    // check(res, {
    //     'childCat_diffMethod: Status code MUST be 405': res.status === 405,
    //   });
}
export function childCat_nonExistingCategory(baseurl)
{  
    var catID = '000000';
    var url = baseurl.concat(endpoint + catID + "/next?depth=10");
    console.log(url);
    // var res = http.get(url);
    // check(res, {
    //     'childCat_nonExistingCategory: Status code MUST be 404': res.status === 404,
    //   });
}
export function childCat_noQuerry(baseurl)
{  
    var catID = getCatID(baseurl);
    var url = baseurl.concat(endpoint + catID + "/next");
    console.log(url);
    // var res = http.get(url);
    // check(res, {
    //     'childCat_nonExistingCategory: Status code MUST be 400': res.status === 400,
    //   });
}
