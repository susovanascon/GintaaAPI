import http from 'k6/http';
import { check } from 'k6';
//*************************/
//GET ALL PUBLISHED OFFERS*
//************************ */
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/offers/v1/offers/all';

export default function ()
{
  // AllOffers();
  // AllOffersPagination();
  getOfferID();
  getUserOfferID()
}

export function AllOffers()
{
    let url = prop.gintaa_baseurl.concat(endpoint)
    let res = http.get(url);
    // console.log(res.status + " " + res.body);
    console.log(`,${url},` +'AllOffers,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['AllOffers: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
export function AllOffers_diffMethod()
{
    let url = prop.gintaa_baseurl.concat(endpoint)
    let res = http.put(url);
    console.log(`,${url},` +'AllOffers_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
    ['AllOffers_diffMethod: EXPECTED: 405,     ACTUAL: ' + `${res.status}`] : res.status === 405,
    });
}
// export function AllOffersPagination()
// {
//     let url = prop.gintaa_baseurl.concat(endpoint + "?page=1&size=2")
//     let res = http.get(url);
//     if(res.status === 200)
//     {
//       var offerSize = res.json().payload.length;
//     }
    
//     console.log(`,${url},` +'AllOffers,' + '200,' + res.status + `,${res.timings.duration}`);
//     check(res, {
//     ['AllOffersPagination: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
//     'AllOffersPagination: The size is same' : offerSize === 2
//     });
// }
export function getOfferID()
{
    let url = prop.gintaa_baseurl.concat(endpoint)
    let res = http.get(url);
    // console.log(res.status + " " + res.body);
    if(res.status === 200)
    {
      for (let i = 0; i < res.json().payload.length; i++)
      {
        if (res.json().payload[i].user.identityId == "m5T8dzsuKgcJlhAFZwmxm31BUhP2")
        {
          // console.log(i);
          var offerID_2 = res.json().payload[i].offerId;
          break;
        }
      }  
    }
  // console.log(res.status + " " + res.body);
  // console.log(offerID_2);
  return offerID_2;
}
export function getUserOfferID()
{
    var offerDetail = [];
    let url = prop.gintaa_baseurl.concat(endpoint)
    let res = http.get(url);
    // console.log("getUserOfferID Response:-"+res.body) //hide
    if(res.status === 200)
    {
      for (let i = 0; i < res.json().payload.length; i++)
      {
        // console.log("print offer id:-"+res.json().payload[i].offerId) //hide
        // console.log("print seOId:-"+res.json().payload[i].seOId) //hide
        // console.log("print identityId:-"+res.json().payload[i].user.identityId) //hide
        if (res.json().payload[i].user.identityId == "1GwHhfgfvwPYwHePdgMS14EGs3f2")
        {
          offerDetail.push(res.json().payload[i].offerId);
          offerDetail.push(res.json().payload[i].seOId);
          break;
        }
      }  
    }
    // console.log(offerDetail)
  return offerDetail;
}