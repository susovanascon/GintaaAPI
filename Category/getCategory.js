import http from 'k6/http';
import { check } from 'k6';
import { getVerticalID } from "../Vertical/getAllVertical.js";

//**************************************************
//USE THIS API TO GET PAGINATED LIST/ALL CATEGORIES*
//**************************************************
const prop = JSON.parse(open('../config/config.json'));
const endpoint = '/categories/v1/categories'
export default function getAllCategory()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    // allCategories(baseurl);
    // categoryByVericalID(baseurl);
    // categoryByVericalIDPaginated(baseurl)
    getCatID(baseurl);
    // getCatURL(prop.gintaa_baseurl)
}
//function to get all the category in my system
export function allCategories()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    var res = http.get(url);

    console.log(`,${url},` +'allCategories,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['allCategories: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
      });
}
//get all category by a vertical ID
export function categoryByVerticalID(baseurl)
{
    var verticalID = getVerticalID(baseurl)
    var url = baseurl.concat(endpoint + '?verticalId=' + verticalID);
    var res = http.get(url);

    console.log(`,${url},` +'categoryByVericalID,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['categoryByVericalID: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
      });
}
//get category in paginated view    
export function categoryByVerticalIDPaginated(baseurl)
{
    var verticalID = getVerticalID(baseurl)
    var url = baseurl.concat(endpoint + '?page=1&size=3');
    var res = http.get(url);
    var catSize = res.json().payload.length;
    check(res, {
        'categoryByVericalIDPaginated: Status code MUST be 200': res.status === 200,
        'categoryByVericalIDPaginated: The size is same' : catSize === 3
      });
}
//function to get a category in my system
export function getCatID()
{
    var verticalID = getVerticalID()
    var url = prop.gintaa_baseurl.concat(endpoint + '?verticalId=' + verticalID);
    
    var res = http.get(url);
    var catID = res.json().payload[0].categoryId;
    // console.log("Cat id:-"+catID) // hide
    return catID;
}
export function getCatURL(baseurl)
{
    var verticalID = getVerticalID(baseurl)
    var url = baseurl.concat(endpoint + '?verticalId=' + verticalID);
    var res = http.get(url);
    var catURL = res.json().payload[0].url;
    
    return catURL;
}