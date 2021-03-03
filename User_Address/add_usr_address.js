import http from 'k6/http';
import { check } from 'k6';
import { tokenGenerate } from '../generateToken.js';

//*****************
//ADD USER ADDRESS*
//*****************
const prop = JSON.parse(open('../config/config.json'));
var endpoint = "/users/v1/user/address";
var body = {
            "addressLine": "Test addressLine 1",
            "zip": "253465",
            "flatNo": "90876",
            "area": "area2",
            "annotation": "Demo Anno 1",
            "landmark": "landm2",
            "city": "kolkata",
            "state": "West Bengal",
            "country": "India",
            "lat": -80.22,
            "lng": -170.44,
            "default": false
  };

export default function addUserAddress()
{
  var tokenID = tokenGenerate() ;
// //******WRITE ALL THE METHODS TO CALL*******
addAddress(tokenID);
addAddress_addLineMan(tokenID);
addAddress_addLineBlnk(tokenID);
addAddress_numericAddLine(tokenID)
addAddress_capAlphabeticAddLine(tokenID)
addAddress_smallAlphabeticAddLine(tokenID)
addAddress_alphanumericWithSpecialCharacterAddLine(tokenID)
addAddress_alphanumericAddLine(tokenID)
addAddress_zipMan(tokenID)
addAddress_zipBlnk(tokenID);
addAddress_addZipAlphanumeric(tokenID);

addAddress_greaterZip(tokenID);
addAddress_lessZip(tokenID);
addAddress_numericFlat(tokenID);
addAddress_capAlphabeticFlat(tokenID);
addAddress_addFlatnoMan(tokenID);
addAddress_addFlatnoBlnk(tokenID);
addAddress_addFlatnoAlphanumeric(tokenID);
addAddress_smallAlphabeticFlat(tokenID);
addAddress_alphanumericWithSpecialCharacterFlat(tokenID);
addAddress_alphanumericFlat(tokenID);
addAddress_addAreaMan(tokenID);
addAddress_addAreaBlnk(tokenID);
addAddress_addAreaAlphanumeric(tokenID);
addAddress_numericArea(tokenID);
addAddress_capAlphabeticArea(tokenID);
addAddress_smallAlphabeticArea(tokenID);
addAddress_alphanumericWithSpecialCharacterArea(tokenID);
addAddress_alphanumericArea(tokenID);


addAddress_addAnnoMan(tokenID);
addAddress_addAnnoBlnk(tokenID);
addAddress_addAnnoAlphanumeric(tokenID);
addAddress_numericAnno(tokenID);
addAddress_capAlphabeticAnno(tokenID);
addAddress_smallAlphabeticAnno(tokenID);
addAddress_alphanumericWithSpecialCharacterAnno(tokenID);
addAddress_alphanumericAnno(tokenID);

addAddress_addLanmMan(tokenID);
addAddress_addLanmBlank(tokenID);
addAddress_addLanmAlphanumeric(tokenID);
addAddress_numericLandmark(tokenID);
addAddress_capAlphabeticLandmark(tokenID);
addAddress_smallAlphabeticLandmark(tokenID);
addAddress_alphanumericWithSpecialCharacterLandmark(tokenID);

addAddress_alphanumericLandmark(tokenID);
addAddress_addCityMan(tokenID);
addAddress_addCityBlnk(tokenID);
addAddress_addCityNumeric(tokenID);
addAddress_addCitySymbols(tokenID);
addAddress_numericCity(tokenID);

addAddress_capAlphabeticCity(tokenID);
addAddress_smallAlphabeticCity(tokenID);
addAddress_alphanumericWithSpecialCharacterCity(tokenID);
addAddress_alphanumericCity(tokenID);
addAddress_addStateMan(tokenID);
addAddress_addStateBlank(tokenID);
addAddress_addStateSymbols(tokenID);
addAddress_numericState(tokenID);
addAddress_capAlphabeticState(tokenID);
addAddress_smallAlphabeticState(tokenID);
addAddress_alphanumericWithSpecialCharacterState(tokenID);
addAddress_alphanumericState(tokenID);
addAddress_addCntryMan(tokenID);
addAddress_addCntryBlank(tokenID);
addAddress_addCntryNonAlphabet(tokenID);
addAddress_numericCountry(tokenID);
addAddress_capAlphabeticCountry(tokenID);
addAddress_smallAlphabeticCountry(tokenID);
addAddress_alphanumericWithSpecialCharacterCountry(tokenID);
addAddress_alphanumericCountry(tokenID);
addAddress_addLatMan(tokenID);
addAddress_addLatBlank(tokenID);
addAddress_addLonMan(tokenID);
addAddress_addLonBlank(tokenID);
addAddress_addLatGr90(tokenID);
addAddress_decimalLatBet90toM90(tokenID);
addAddress_decimalLatBey90toM90(tokenID);
addAddress_addLonGr180(tokenID);
addAddress_addLatLess90(tokenID);
addAddress_addLonLess180(tokenID);
addAddress_decimalLngBet180toM180(tokenID);
addAddress_decimalLngBey180toM180(tokenID);
addAddress_noAuth(tokenID);
addAddress_invalidAuth(tokenID);
addAddress_diffMethod(tokenID);
addAddress_diffContentType(tokenID);

}

export function revertBackJsonRawForAddUserAddress(){
  body = {
    "addressLine": "Test addressLine 1",
    "zip": "253465",
    "flatNo": "90876",
    "area": "area2",
    "annotation": "Demo Anno 1",
    "landmark": "landm2",
    "city": "kolkata",
    "state": "West Bengal",
    "country": "India",
    "lat": -80.22,
    "lng": -170.44,
    "default": false
};

}

export function addAddress(tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };
    body.addressLine = "Amazon Rainforest";
    body.zip = "700064",
    body.annotation = "Forest" + Date.now();
    body.flatNo = "98";
    body.area = "Columbia",
    body.landmark =  "French Guinana",
    body.city = "Brazil";
    body.state = "Brazil";
    body.country =  "Brazil";
    body.lat =  -80.22;
    body.lng =  -170.44;
    // console.log('addAddress----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['addAddress: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
      });
    // console.log(res.body) // hide
    var addID = res.json().payload.addressId;
    // console.log(addID) // hide

    revertBackJsonRawForAddUserAddress();

    return addID;

    
}
export function addAddress_addLineMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.addressLine;
    body.annotation = "Test Demo" + Date.now();
    // console.log('addAddress----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addLineMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLineMan: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();

    
}
export function addAddress_addLineBlnk(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.addressLine = "";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addLineBlnk,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLineBlnk: EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_numericAddLine(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.addressLine = prop.userService.updateNAddUserAddress.numericAddLine;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) //hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_numericAddLine,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_numericAddLine: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_capAlphabeticAddLine(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.addressLine = prop.userService.updateNAddUserAddress.capAlphabeticAddLine;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_capAlphabeticAddLine,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_capAlphabeticAddLine: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_smallAlphabeticAddLine(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.addressLine = prop.userService.updateNAddUserAddress.smallAlphabeticAddLine;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_smallAlphabeticAddLine,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_smallAlphabeticAddLine: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress(); 
}
export function addAddress_alphanumericWithSpecialCharacterAddLine(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.addressLine = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterAddLine;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericWithSpecialCharacterAddLine,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericWithSpecialCharacterAddLine: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericAddLine(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.addressLine = prop.userService.updateNAddUserAddress.alphanumericAddLine;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body))  // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericAddLine,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericAddLine: EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_zipMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.zip;
    body.annotation = "Test Demo" + Date.now();
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    console.log(`,${url},` +' addAddress_zipMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_zipMan : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_zipBlnk(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.zip = "";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_zipBlnk,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_zipBlnk : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addZipAlphanumeric(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.zip = "ABCDEF";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addZipAlphanumeric,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addZipAlphanumeric : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_greaterZip(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.zip = prop.userService.updateNAddUserAddress.greaterZip;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_greaterZip,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_greaterZip : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_lessZip(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.zip = prop.userService.updateNAddUserAddress.lessZip;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_lessZip,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_lessZip : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addFlatnoMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.flatNo;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    
    console.log(`,${url},` +' addAddress_addFlatnoMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addFlatnoMan : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addFlatnoBlnk(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.flatNo = "";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addFlatnoBlnk,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addFlatnoBlnk : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addFlatnoAlphanumeric(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.flatNo = "!@$%";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addFlatnoAlphanumeric,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addFlatnoAlphanumeric : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_numericFlat(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.flatNo = prop.userService.updateNAddUserAddress.numericFlat;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_numericFlat,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_numericFlat : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_capAlphabeticFlat(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.flatNo = prop.userService.updateNAddUserAddress.capAlphabeticFlat;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_capAlphabeticFlat,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_capAlphabeticFlat : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_smallAlphabeticFlat(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.flatNo = prop.userService.updateNAddUserAddress.smallAlphabeticFlat;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_smallAlphabeticFlat,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_smallAlphabeticFlat : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericWithSpecialCharacterFlat(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.flatNo = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterFlat;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericWithSpecialCharacterFlat,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericWithSpecialCharacterFlat : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericFlat(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.flatNo = prop.userService.updateNAddUserAddress.alphanumericFlat;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericFlat,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericFlat : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addAreaMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.area;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addAreaMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addAreaMan : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addAreaBlnk(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.area = "";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addAreaBlnk,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addAreaBlnk : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addAreaAlphanumeric(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.area = "!@#$%^";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addAreaAlphanumeric,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addAreaAlphanumeric : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_numericArea(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.area = prop.userService.updateNAddUserAddress.numericArea;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_numericArea,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_numericArea : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_capAlphabeticArea(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.area = prop.userService.updateNAddUserAddress.capAlphabeticArea;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body))
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_capAlphabeticArea,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_capAlphabeticArea : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_smallAlphabeticArea(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.area = prop.userService.updateNAddUserAddress.smallAlphabeticArea;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_smallAlphabeticArea,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_smallAlphabeticArea : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericWithSpecialCharacterArea(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.area = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterArea;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericWithSpecialCharacterArea,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericWithSpecialCharacterArea : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericArea(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.area = prop.userService.updateNAddUserAddress.alphanumericArea;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericArea,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericArea : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addAnnoMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.annotation;
    
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    console.log(`,${url},` +' addAddress_addAnnoMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addAnnoMan : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addAnnoBlnk(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.annotation = "";
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    console.log(`,${url},` +' addAddress_addAnnoBlnk,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addAnnoBlnk : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addAnnoAlphanumeric(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.annotation = "!@#$%^";
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addAnnoAlphanumeric,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addAnnoAlphanumeric : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_numericAnno(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.annotation = Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_numericAnno,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_numericAnno : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_capAlphabeticAnno(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.annotation = prop.userService.updateNAddUserAddress.capAlphabeticAnno;
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_capAlphabeticAnno,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_capAlphabeticAnno : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_smallAlphabeticAnno(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.annotation = prop.userService.updateNAddUserAddress.smallAlphabeticAnno;
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_smallAlphabeticAnno,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_smallAlphabeticAnno : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericWithSpecialCharacterAnno(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.annotation = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterAnno;
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'addAddress_alphanumericWithSpecialCharacterAnno,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericWithSpecialCharacterAnno : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericAnno(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.annotation = prop.userService.updateNAddUserAddress.alphanumericAnno;
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericAnno,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericAnno : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addLanmMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.landmark;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    
    console.log(`,${url},` +' addAddress_addLanmMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLanmMan : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addLanmBlank(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.landmark = "";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addLanmBlank,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLanmBlank : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addLanmAlphanumeric(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.landmark = "!@#$%^";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addLanmAlphanumeric,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLanmAlphanumeric : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_numericLandmark(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.landmark = prop.userService.updateNAddUserAddress.numericLandmark;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_numericLandmark,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_numericLandmark : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_capAlphabeticLandmark(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.landmark = prop.userService.updateNAddUserAddress.capAlphabeticLandmark;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_capAlphabeticLandmark,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_capAlphabeticLandmark : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_smallAlphabeticLandmark(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.landmark = prop.userService.updateNAddUserAddress.smallAlphabeticLandmark;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_smallAlphabeticLandmark,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_smallAlphabeticLandmark : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericWithSpecialCharacterLandmark(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.landmark = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterLandmark;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericWithSpecialCharacterLandmark,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericWithSpecialCharacterLandmark : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericLandmark(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.landmark = prop.userService.updateNAddUserAddress.alphanumericLandmark;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide

    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericLandmark,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericLandmark : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addCityMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.city;
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addCityMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addCityMan : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addCityBlnk(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.city = "";
    // console.log('print json body----->' + JSON.stringify(body)) // hide //hide 
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addCityBlnk,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addCityBlnk : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addCityNumeric(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.city = "1234";
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addCityNumeric,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addCityNumeric : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addCitySymbols(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.city = "!@#$";
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addCitySymbols,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addCitySymbols : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: (res) => res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_numericCity(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    
    body.city = prop.userService.updateNAddUserAddress.numericCity;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_numericCity,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_numericCity : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: (res) => res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_capAlphabeticCity(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    
    body.city = prop.userService.updateNAddUserAddress.capAlphabeticCity;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_capAlphabeticCity,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_capAlphabeticCity : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: (res) => res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_smallAlphabeticCity(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    
    body.city = prop.userService.updateNAddUserAddress.smallAlphabeticCity;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_smallAlphabeticCity,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_smallAlphabeticCity : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: (res) => res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericWithSpecialCharacterCity(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    
    body.city = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterCity;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericWithSpecialCharacterCity,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericWithSpecialCharacterCity : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: (res) => res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericCity(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    
    body.city = prop.userService.updateNAddUserAddress.alphanumericCity;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericCity,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericCity : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: (res) => res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addStateMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.state;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print the JSON Body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addStateMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addStateMan : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: (res) => res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addStateBlank(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.state = "";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print JSON Body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    
    console.log(`,${url},` +' addAddress_addStateBlank,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addStateBlank : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: (res) => res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addStateSymbols(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.state = "!@#$";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print JSON Body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addStateSymbols,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addStateSymbols : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_numericState(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.state = prop.userService.updateNAddUserAddress.numericState;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_numericState,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_numericState : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_capAlphabeticState(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.state = prop.userService.updateNAddUserAddress.capAlphabeticState;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_capAlphabeticState,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_capAlphabeticState : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_smallAlphabeticState(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.state = prop.userService.updateNAddUserAddress.smallAlphabeticState;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body))
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_smallAlphabeticState,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_smallAlphabeticState : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericWithSpecialCharacterState(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.state = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterState;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body))
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericWithSpecialCharacterState,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericWithSpecialCharacterState : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericState(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.state = prop.userService.updateNAddUserAddress.alphanumericState;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body))
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericState,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericState : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addCntryMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.country;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body))
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addCntryMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addCntryMan : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addCntryBlank(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.country = "";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body))
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addCntryBlank,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addCntryBlank : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addCntryNonAlphabet(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.country = "!@!13";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addCntryNonAlphabet,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addCntryNonAlphabet : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_numericCountry(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.country = prop.userService.updateNAddUserAddress.numericCountry;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_numericCountry,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_numericCountry : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_capAlphabeticCountry(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.country = prop.userService.updateNAddUserAddress.capAlphabeticCountry;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_capAlphabeticCountry,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_capAlphabeticCountry : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_smallAlphabeticCountry(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.country = prop.userService.updateNAddUserAddress.smallAlphabeticCountry;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_smallAlphabeticCountry,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_smallAlphabeticCountry : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericWithSpecialCharacterCountry(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.country = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterCountry;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericWithSpecialCharacterCountry,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericWithSpecialCharacterCountry : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_alphanumericCountry(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.country = prop.userService.updateNAddUserAddress.alphanumericCountry;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_alphanumericCountry,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_alphanumericCountry : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addLatMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.lat;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addLatMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLatMan : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addLatBlank(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lat = "";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addLatBlank,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLatBlank : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addLonMan(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.lng;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addLonMan,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLonMan : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addLonBlank(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lng = "";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addLonBlank,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLonBlank : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addLatGr90(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lat = "95.22";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addLatGr90,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLatGr90 : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_decimalLatBet90toM90(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lat = prop.userService.updateNAddUserAddress.decimalLatBet90toM90;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_decimalLatBet90toM90,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_decimalLatBet90toM90 : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_decimalLatBey90toM90(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lat = prop.userService.updateNAddUserAddress.decimalLatBey90toM90;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'addAddress_decimalLatBey90toM90,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_decimalLatBey90toM90 : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addLonGr180(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lng = "185.44";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addLonGr180,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLonGr180 : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addLatLess90(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lat = "-100.22";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body))// hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addLatLess90,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLatLess90 : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_addLonLess180(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lng = "-190.44";
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_addLonLess180,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_addLonLess180 : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_decimalLngBet180toM180(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lng = prop.userService.updateNAddUserAddress.decimalLngBet180toM180;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_decimalLngBet180toM180,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_decimalLngBet180toM180 : EXPECTED: 200,      ACTUAL: ' + `${res.status}`]: res.status === 200
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_decimalLngBey180toM180(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lng = prop.userService.updateNAddUserAddress.decimalLngBey180toM180;
    body.annotation = "Test Demo" + Date.now();
    // console.log('print json body----->' + JSON.stringify(body)) // hide
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'addAddress_decimalLngBey180toM180,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['addAddress_decimalLngBey180toM180 : EXPECTED: 400,      ACTUAL: ' + `${res.status}`]: res.status === 400
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_noAuth(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'Content-Type': 'application/json'
    };
    
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_noAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['addAddress_noAuth: EXPECTED: 403,      ACTUAL: ' + `${res.status}`]: res.status === 403
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_invalidAuth(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID + "a",
        'Content-Type': 'application/json'
    };
    
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_invalidAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['addAddress_invalidAuth: EXPECTED: 403,      ACTUAL: ' + `${res.status}`]: res.status === 403
    });

    revertBackJsonRawForAddUserAddress();
}
export function addAddress_diffMethod(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

      body.addressLine = "Amazon Rainforest";
      body.zip = "700064",
      body.annotation = "Forest2";
      body.flatNo = "98";
      body.area = "Columbia",
      body.landmark =  "French Guinana",
      body.city = "Brazil";
      body.state = "Brazil";
      body.country =  "Brazil";
      body.lat =  -80.22;
      body.lng =  -170.44;
      let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
      console.log(`,${url},` +' addAddress_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
      check(res, {
        ['addAddress_diffMethod: EXPECTED: 405,      ACTUAL: ' + `${res.status}`]: res.status === 405
      });

      revertBackJsonRawForAddUserAddress();
}
export function addAddress_diffContentType(tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'multipart/form-data'
    };

    body.addressLine = "Amazon Rainforest";
    body.zip = "700064",
    body.annotation = "Forest";
    body.flatNo = "98";
    body.area = "Columbia",
    body.landmark =  "French Guinana",
    body.city = "Brazil";
    body.state = "Brazil";
    body.country =  "Brazil";
    body.lat =  -80.22;
    body.lng =  -170.44;
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' addAddress_diffContentType,' + '412,' + res.status + `,${res.timings.duration}`);
    check(res, {
      ['addAddress_diffContentType: EXPECTED: 412,      ACTUAL: ' + `${res.status}`]: res.status === 412
    });

    revertBackJsonRawForAddUserAddress();
}