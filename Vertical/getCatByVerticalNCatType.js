import http from 'k6/http';
import { check } from 'k6';
import { getVerticalID } from "./getAllVertical.js";

//**************************************************************
//USE THIS API TO GET CHILD CATEGORIES OF VERTICALS OF A GIVEN TYPE SERVICE/ITEM*
//**************************************************************

const endpoint = '/categories/v1/verticals/'

export default function getSingleVertical()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    //getVerical(baseurl);
    getCatByVericalIDNTypeI(baseurl);
    getCatByVericalIDNTypeS(baseurl);
}
//function to get vertical by ID
export function getCatByVericalIDNTypeI(baseurl)
{
    var verticalID = getVerticalID(baseurl);
    var url = baseurl.concat(endpoint + verticalID + "/category/Item");
    var res = http.get(url);
    
    console.log(`,${url},` +'getCatByVericalIDNTypeI,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getCatByVericalIDNTypeI: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getCatByVericalIDNTypeS(baseurl)
{
    var verticalID = getVerticalID(baseurl);
    var url = baseurl.concat(endpoint + verticalID + "/category/Service");
    var res = http.get(url);
    
    console.log(`,${url},` +'getCatByVericalIDNTypeS,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getCatByVericalIDNTypeS: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getCatByVericalIDNTypeS_diffMethod(baseurl)
{
    var verticalID = getVerticalID(baseurl);
    var url = baseurl.concat(endpoint + verticalID + "/category/Service");
    var res = http.put(url);
    check(res, {
        'getCatByVericalIDNTypeS_diffMethod: Status code MUST be 200': res.status === 200,
      });
}
export function getCatByVericalIDNTypeI_noVertical(baseurl)
{
    var verticalID = '000000';
    var url = baseurl.concat(endpoint + verticalID + "/category/Item");
    var res = http.get(url);
    check(res, {
        'getCatByVericalIDNTypeI_noVertical: Status code MUST be 200': res.status === 200,
      });
}
export function getCatByVericalIDNType_NoType(baseurl)
{
    var verticalID = getVerticalID(baseurl);
    var url = baseurl.concat(endpoint + verticalID + "/category/ABC");
    var res = http.get(url);
    check(res, {
        'getCatByVericalIDNTypeI: Status code MUST be 200': res.status === 200,
      });
}