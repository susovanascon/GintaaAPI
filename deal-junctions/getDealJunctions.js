import http from 'k6/http';
import { check } from 'k6';
//import { tokenGenerate } from '../generateToken.js';

var endpoint = '/deals/v1/deals/junctions';

// export default function ()
// {
//   var tokenID = tokenGenerate() ;
//   var baseurl = 'https://dev.api.gintaa.com';
//   dealJunction(baseurl,tokenID);
//   dealJunction_Pagination(baseurl,tokenID);
//   dealJunction_noLat(baseurl,tokenID);
//   dealJunction_noLng(baseurl,tokenID);
//   dealJunction_latGreater90(baseurl,tokenID);
//   dealJunction_lngGreater180(baseurl,tokenID);
//   dealJunction_latLessM90(baseurl,tokenID);
//   dealJunction_lngLessM180(baseurl,tokenID);
//   dealJunction_invalidAuth(baseurl);
//   dealJunction_noAuth(baseurl);
// }

export function dealJunction(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':20,
                        '_lng':80};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)
}
export function dealJunction_Pagination(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + "?page=1&size=4&destinationOfferIds=1609913675786&sourceOfferIds=1609913675756");
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':20,
                        '_lng':80};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)

}
export function dealJunction_destinationOfferMan(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?sourceOfferIds=1609913675756');
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':20,
                        '_lng':80};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)
}
export function dealJunction_sourceMan(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786');
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':20,
                        '_lng':80};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)
}
export function dealJunction_invalidDestination(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + "?destinationOfferIds=000000&sourceOfferIds=1609913675756");
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':20,
                        '_lng':80};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)

}
export function dealJunction_noLat(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lng':80};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)

}
export function dealJunction_noLng(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':20};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)

}
export function dealJunction_blankLat(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':null,
                        '_lng':80};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)
}
export function dealJunction_blnkLng(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':20,
                        '_lng':null};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)
}
export function dealJunction_latGreater90(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':95,
                        '_lng':80};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)
}
export function dealJunction_lngGreater180(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':20,
                        '_lng':186};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)
}
export function dealJunction_latLessM90(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':-100,
                        '_lng':80};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)
}
export function dealJunction_lngLessM180(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':20,
                        '_lng':-190};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)
}
export function dealJunction_invalidAuth(baseurl)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var tokenID = "abcdef";
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':20,
                        '_lng':80};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)
}
export function dealJunction_noAuth(baseurl)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {'_lat':20,
                        '_lng':80};
    var res = http.get(url, { headers: requestHeaders });
    console.log(res.status + res.body)
}
export function dealJunction_diffMethod(baseurl,tokenID)
{
    var url=baseurl.concat(endpoint + '?destinationOfferIds=1609913675786&sourceOfferIds=1609913675756');
    var requestHeaders = {'X-Authorization-Firebase': tokenID,
                        '_lat':20,
                        '_lng':80};
    var res = http.del(url, { headers: requestHeaders });
    console.log(res.status + res.body)
}