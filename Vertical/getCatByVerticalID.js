import http from 'k6/http';
import { check } from 'k6';
import { getVerticalID } from "./getAllVertical.js";

//**************************************************************
//USE THIS API TO GET CHILD CATEGORIES OF VERTICALS OF A GIVEN TYPE SERVICE/ITEM*
//**************************************************************

const endpoint = '/categories/v1/verticals/';

export default function getSingleVertical()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    //getVerical(baseurl);
    getCatByVericalID(baseurl);
}

export function getCatByVerticalID(baseurl)
{
    var verticalID = getVerticalID(baseurl);
    var url = baseurl.concat(endpoint + verticalID + "/category");

    var res = http.get(url);
    console.log(`,${url},` +'getCatByVerticalID,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getCatByVericalID: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}