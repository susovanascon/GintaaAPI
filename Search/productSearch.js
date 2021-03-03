import http from 'k6/http';
import { check } from 'k6';
import { getCatID } from "../Category/getCategory.js";

const endpoint = '/search/v1/search';
const prop = JSON.parse(open('../config/config.json'));

export default function productSearch()
{
    searchProduct();
    searchProductbyCat();
    searchProductbyDevice();
    searchProductPaginated();
    searchProductFproduct()
}

export function searchProduct()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    // console.log("url:-"+url); // hide
    var res = http.get(url);
    console.log(`,${url},` +' searchProduct,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['searchProduct: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function searchProductbyCat()
{
    var catID = getCatID(prop.gintaa_baseurl);
    var url = prop.gintaa_baseurl.concat(endpoint + '?categoryId=' + catID);
    var res = http.get(url);
    // console.log(res.body + res.status);
    console.log(`,${url},` +' searchProductbyCat,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['searchProductbyCat: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function searchProductbyDevice()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    var requestHeaders = {
        'Cookie': '_deviceId=gintaa30'
      };
    let res = http.get(url,{ headers : requestHeaders});
    
    console.log(`,${url},` +' searchProductbyDevice,' + '200,' + res.status);
    check(res, {
        ['searchProductbyDevice: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function searchProductPaginated()
{
    var url = prop.gintaa_baseurl.concat(endpoint + '?page=1&size=10');
    let res = http.get(url);
    // console.log(res.body + res.status);
    console.log(`,${url},` +' searchProductPaginated,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['searchProductPaginated: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function searchProductQproduct()
{
    var url = prop.gintaa_baseurl.concat(endpoint + '?q=sony');
    let res = http.get(url);
    // console.log(res.body + res.status);
    console.log(`,${url},` +' searchProductQproduct,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['searchProductQproduct: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function searchProductFproduct()
{
    var url = prop.gintaa_baseurl.concat(endpoint + 'f=Brand_Nikon');
    let res = http.get(url);
    // console.log(res.body + res.status);
    console.log(`,${url},` +' searchProductFproduct,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['searchProductFproduct: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function searchProductSort()
{
    var url = prop.gintaa_baseurl.concat(endpoint + 'sort=publishedDate');
    let res = http.get(url);
    // console.log(res.body + res.status);
    console.log(`,${url},` +' searchProductbyCat,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['searchProductbyCat: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
        });
}
export function searchProduct_diffMethod()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    var res = http.put(url);
    // console.log(res.body + res.status);
    console.log(`,${url},` +' searchProduct_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['searchProduct_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
        });
}