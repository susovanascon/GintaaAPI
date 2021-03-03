import http from 'k6/http';
import { check } from 'k6';
import { getVerticalID } from "../Vertical/getAllVertical.js";

const endpoint = '/categories/v1/tags';
var tagID= [];

export default function TagsOfvertical()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    getTagsofVertical(baseurl);
    // getTagID(baseurl);
    getTagsofVer_diffMethod(baseurl);
    getTagsofVer_noParam(baseurl);
    getTagsofVer_nonExistingVer(baseurl)
}

export function getTagsofVertical(baseurl)
{
    var verticalID = getVerticalID(baseurl);
    var url = baseurl.concat(endpoint + '?vertical=' + verticalID);
    var res = http.get(url);
    console.log(`,${url},` +'getTagsofVertical,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getTagsofVertical: Status code MUST be 200' ]: res.status === 200,
      });
}
export function getTagsofVer_diffMethod(baseurl)
{
    var verticalID = getVerticalID(baseurl);
    var url = baseurl.concat(endpoint + '?vertical=' + verticalID);
    var res = http.put(url);
    check(res, {
        ['getTagsofVer_diffMethod: Status code MUST be 405' ]: res.status === 405,
      });
}
export function getTagsofVer_noParam(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    //console.log(res.status + ' ' + res.body);
    check(res, {
        ['getTagsofVer_noParam: Status code MUST be 400' ]: res.status === 400,
      });
}
export function getTagsofVer_nonExistingVer(baseurl)
{
    var verticalID = '000000';
    var url = baseurl.concat(endpoint + '?vertical=' + verticalID);
    var res = http.get(url);
    //console.log(res.status + ' ' + res.body);
    check(res, {
        ['getTagsofVer_nonExistingVer: Status code MUST be 404' ]: res.status === 404,
      });
}
export function getTagID(baseurl)
{
    var verticalID = getVerticalID(baseurl);
    var url = baseurl.concat(endpoint + '?vertical=' + verticalID);
    var res = http.get(url);
    if (res.json().payload != null) {
        var payloadSize = res.json().payload.length;
        //*****************Returning me the the  last Tag ID that is present */
        for (let i = 0; i < payloadSize; i++)
        {
            // var tagID = res.json().payload[i].id;
            tagID.push(res.json().payload[i].id)
        }
    };
    
    return tagID;
}