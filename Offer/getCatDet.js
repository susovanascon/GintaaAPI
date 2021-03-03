import http from 'k6/http';
import { check } from 'k6';


var endpoint = '/categories/v1/categories';

export function getListCat(baseurl,tokenID)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url = baseurl.concat(endpoint);
    let res = http.get(url, null, null);
    var catID = res.json().payload[0].categoryId;

    return catID;
}