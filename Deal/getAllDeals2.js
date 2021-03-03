import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';
import { getUserOfferID } from "../Offer/allOffers.js";

//***********/
//getAllDeals/
//***********/
const prop = JSON.parse(open('../config/config.json'));
var endpoint = '/dview/v1/deals';

export default function()
{
    var tokenID = tokenGenerate() ;
    getDealID(tokenID)
}
export function getAllDeals(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    var res = http.get(url + "?status=ALL&type=ALL");
}
export function getDealID(tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    var requestHeaders = {'X-Authorization-Firebase': tokenID};
    var res = http.get(url+ "?status=ALL&type=ALL", { headers: requestHeaders });
    // console.log(res.body)
    if(res.status == 200)
    {
        for (let i = 0; i < res.json().payload.length; i++) {
            console.log(res.json().payload[i].requestedOffers[0].offerId)
            if (res.json().payload[i].requestedOffers[0].offerId == getUserOfferID()) {
                console.log("DEAL FOUND")
                
            }
            
        }
    }
}