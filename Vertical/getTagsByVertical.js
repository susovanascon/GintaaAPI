import http from 'k6/http';
import { check } from 'k6';
import { getVerticalID } from "./getAllVertical.js";

const endpoint = '/categories/v1/verticals/';

export default function()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    getTagsLinkedWithVertical(baseurl);
}
export function getTagsLinkedWithVertical(baseurl)
{
    var verticalID = getVerticalID(baseurl);
    var url = baseurl.concat(endpoint + verticalID + '/tags');
    var res = http.get(url);
        
    console.log(`,${url},` +'getTagsLinkedWithVertical,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getTagsLinkedWithVertical: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}