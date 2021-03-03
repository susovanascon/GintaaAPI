import http from 'k6/http';
import { check } from 'k6';
//****************** */
//CREATE A CURRENCY
//****************** */
var endpoint = '/currency/v1/currency';
var requestBody = {
    "active": true,
    "base": true,
    "country": "string",
    "currencyCode": "string",
    "currencyLabel": "string",
    "currencySymbol": "string"
  }

// export default function ()
// {
//     var baseurl = 'https://alpha.api.gintaa.com';
//     createCurrency(baseurl);
//     crCurActiveMan(baseurl);
//     crCurBaseMan(baseurl);
//     crCurConMan(baseurl);
//     crCurCodeMan(baseurl);
//     crCurLabMan(baseurl);
//     crCurSymMan(baseurl);
//     getCurID(baseurl)
// }

export function createCurrency(baseurl)
{
    var url = baseurl.concat(endpoint);
    let requestHeaders = {
        'Content-Type': 'application/json'
      };
    requestBody.base = false;
    requestBody.country = "Egypt";
    requestBody.currencyCode = "EP";
    requestBody.currencyLabel = "Pound";
    requestBody.currencySymbol = "£";
    requestBody.active=false
    let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
    // console.log("createCurrency" + " " +res.body)
    console.log(`,${url},` +'createCurrency,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['createCurrency: Status is ' + `${res.status}`]: res.status === 200
      });
}
export function createCurrency_activeMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    let requestHeaders = {
        'Content-Type': 'application/json'
    };
    delete requestBody.active;
    requestBody.active = null;
    let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
    check(res, {
            'crCurActiveMan: Status code MUST be 400': res.status === 400
                });
}
export function createCurrency_baseMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    let requestHeaders = {
        'Content-Type': 'application/json'
    };
    delete requestBody.active;
    requestBody.base = null;
    let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
    check(res, {
           'crCurBaseMan: Status code MUST be 400': res.status === 400
             });
}
export function createCurrency_conMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    let requestHeaders = {
        'Content-Type': 'application/json'
    };
    delete requestBody.active;
    requestBody.country = "";
    let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
    check(res, {
           'crCurConMan: Status code MUST be 400': res.status === 400
             });
}
export function createCurrency_codeMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    let requestHeaders = {
        'Content-Type': 'application/json'
    };
    delete requestBody.active;
    requestBody.currencyCode = "";
    let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
    check(res, {
           'crCurCodeMan: Status code MUST be 400': res.status === 400
             });
}
export function createCurrency_labMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    let requestHeaders = {
        'Content-Type': 'application/json'
    };
    delete requestBody.active;
    requestBody.currencyLabel = "";
    let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
    check(res, {
           'crCurLabMan: Status code MUST be 400': res.status === 400
             });
}
export function createCurrency_symMan(baseurl)
{
    var url = baseurl.concat(endpoint);
    let requestHeaders = {
        'Content-Type': 'application/json'
    };
    delete requestBody.active;
    requestBody.currencySymbol = "";
    let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders });
    check(res, {
           'crCurSymMan: Status code MUST be 400': res.status === 400
           });
}
export function createCurrency_diffMethod(baseurl)
{
    var url = baseurl.concat(endpoint);
    let requestHeaders = {
        'Content-Type': 'application/json'
      };
    requestBody.country = "Egypt";
    requestBody.currencyCode = "EP";
    requestBody.currencyLabel = "Pound";
    requestBody.currencySymbol = "£";
    let res = http.put(url, JSON.stringify(requestBody),{ headers: requestHeaders });
    check(res, {
            'createCurrency: Status code MUST be 200': res.status === 200
                });
}
export function getCurID(baseurl)
{
    var url = baseurl.concat(endpoint);
    let requestHeaders = {
        'Content-Type': 'application/json'
      };
      requestBody.active = false;
      requestBody.base = false;
    requestBody.country = "TestCountry";
    requestBody.currencyCode = "TCC";
    requestBody.currencyLabel = "Test";
    requestBody.currencySymbol = "&$";
    let res = http.post(url, JSON.stringify(requestBody),{ headers: requestHeaders }); 
}