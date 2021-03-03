import http from 'k6/http';
import { check } from 'k6';
import { getVerticalID } from "./getAllVertical.js";

//**************************************************************
//USE THIS API TO GET DETAIL INFORMATION ABOUT A GIVEN VERTICAL*
//**************************************************************

const endpoint = '/categories/v1/verticals/'

// export default function getSingleVertical()
// {
//     var baseurl = 'https://alpha.api.gintaa.com';
//     //getVerical(baseurl);
//     getVericalByID(baseurl);
// }
//function to get vertical by ID
export function getVerticalByID(baseurl)
{
    var verticalID = getVerticalID(baseurl);
    var url = baseurl.concat(endpoint + verticalID);
    var res = http.get(url);
    
    console.log(`,${url},` +'getVerticalByID,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getVerticalByID: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function getVerticalByID_invVerticalID(baseurl)
{
    var verticalID = getVerticalID(baseurl);
    var url = baseurl.concat(endpoint + "000000");
    var res = http.get(url);
    console.log(res.body);
    check(res, {
        'getVerticalByInvalidID: Status code MUST be 404': res.status === 404,
      });
}
export function getVerticalByID_diffMethod(baseurl)
{
    var verticalID = getVerticalID(baseurl);
    var url = baseurl.concat(endpoint + verticalID);
    var res = http.put(url);
    console.log(res.body);
    check(res, {
        ['getVerticalByID_diffMethod: Status code MUST be 405' ]: res.status === 405,
      });
}