import http from 'k6/http';
import { check } from 'k6';
import { getTagID } from "./getVertTag.js";

const endpoint = '/categories/v1/tags/';

export default function tagByItsID()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    tagByID(baseurl);
    tagByID_diffMethod(baseurl);
    tagByID_nonExistingTagID(baseurl)
}

export function tagByID(baseurl)
{
    var tagID = getTagID(baseurl);
    var url = baseurl.concat(endpoint + tagID[0]);
    var res = http.get(url);
    console.log(`,${url},` +'tagByID,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['tagByID: Status code MUST be 200' ]: res.status === 200,
      });
}
export function tagByID_diffMethod(baseurl)
{
    var tagID = getTagID(baseurl);
    var url = baseurl.concat(endpoint + tagID[0]);
    var res = http.put(url);
    // console.log(res.body + " " + res.status);
    check(res, {
        ['tagByID_diffMethod: Status code MUST be 405' ]: res.status === 405,
      });
}
export function tagByID_nonExistingTagID(baseurl)
{
    var tagID = '000000';
    var url = baseurl.concat(endpoint + tagID);
    var res = http.get(url);
    console.log(res.body + " " + res.status);
    check(res, {
        ['tagByID_nonExistingTagID: Status code MUST be 404' ]: res.status === 404,
      });
}
