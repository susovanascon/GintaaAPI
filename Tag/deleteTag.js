import http from 'k6/http';
import { check } from 'k6';
import { getTagID } from "./getVertTag.js";

const endpoint = '/categories/v1/tags';
var toBeDeletedTags = [];
var requestHeaders = {
    'Content-Type': 'application/json'
  };

export default function multipleTagCreate()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    deleteTags(baseurl);
}
export function deleteTags(baseurl)
{
    var allTagIds = getTagID(baseurl);
    if (allTagIds.length > 0) {
        for (let i = 0; i < allTagIds.length; i++)
        {
            if (i > 1 )
            {
                toBeDeletedTags.push(allTagIds[i]);
            }
        }       
    }
    var url = baseurl.concat(endpoint);  
    let res = http.del(url,JSON.stringify(toBeDeletedTags),{ headers: requestHeaders });

    console.log(`,${url},` +'deleteTags,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['deleteTags: Status code MUST be 200' ]: res.status === 200,
      });
}
