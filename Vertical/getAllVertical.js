import http from 'k6/http';
import { check } from 'k6';

//******************************
//USE THIS API TO GET VERTICALS*
//******************************

const endpoint = '/categories/v1/verticals'

export default function getAllvertical()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    getAllVerticals(baseurl);
    // getAllVerticalsID(baseurl);
}
//function to get all vertical
export function getAllVerticals(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);

    console.log(`,${url},` +'getAllVerticals,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['getAllVerticals: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
    });
}
//function to extract a vertical ID
export function getVerticalID()
{
    var url = prop.gintaa_baseurl.concat(endpoint);
    var res = http.get(url);
    if (res.json().payload != null){
        var payloadLength = res.json().payload.length;
        //Extracting a vertical ID from response
        for (let i = 0; i < payloadLength; i++)
        {    
            if(res.json().payload[i].label == "Cameras and Optics")
            {
               var verticalID = res.json().payload[i].verticalId;
               break;
            }     
        }
    }
    return verticalID;
}

export function getHomeVerticalID(baseurl)
{
    var url = baseurl.concat(endpoint);
    var res = http.get(url);
    if (res.json().payload != null){
        var payloadLength = res.json().payload.length;
        //Extracting a vertical ID from response
        for (let i = 0; i < payloadLength; i++)
        {    
            if(res.json().payload[i].label == "Home and Lifestyle")
            {
               var verticalID = res.json().payload[i].verticalId;
               break;
            }     
        }
    }
    return verticalID;
}