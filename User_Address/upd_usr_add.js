import http from 'k6/http';
import { check } from 'k6';
import { user_addID } from './usr_all_add.js';
import { tokenGenerate } from '../generateToken.js';


//*****************************
//UPDATE AN USER ADDRESS BY ID*
//*****************************


const prop = JSON.parse(open('../config/config.json'));
var endpoint = "/users/v1/user/address/";
var body = {
    "addressLine": "Test worli",
    "annotation": "Forest",
    "area": "Test Area",
    "city": "Test City",
    "country": "Test Country",
    "flatNo": "Test 90876",
    "landmark": "Test landmark",
    "lat": -80.22,
    "lng": -170.44,
    "state": "Test State",
    "zip": "223344",
    "default" : false
};

export default function()
{
  var tokenID = tokenGenerate() ;
  var baseurl = 'https://alpha.api.gintaa.com';
  // updateAddress(tokenID);
  // updateAddress_noAddLine(tokenID);
  // updateAddress_noZip(tokenID);
  // updateAddress_zipAlpha(tokenID);
  // updateAddress_noFlat(tokenID);
  // updateAddress_flatNonNumeric(tokenID);
  // updateAddress_noArea(tokenID);
  // updateAddress_areaNonAphabetic(tokenID);
  // updateAddress_noAnno(tokenID);
  // updateAddress_annoNonAlphanumeruc(tokenID);
  // updateAddress_noLM(tokenID);
  // updateAddress_symLM(tokenID);
  // updateAddress_noCity(tokenID);
  // updateAddress_citywithoutAlphabet(tokenID);
  // updateAddress_noState(tokenID);
  // updateAddress_stateWithoutAlphabet(tokenID);
  // updateAddress_noCountry(tokenID);
  // updateAddress_countryWithouAlphabet(tokenID);
  // updateAddress_noLat(tokenID);
  // updateAddress_nolng(tokenID);
  // updateAddress_latGr90(tokenID);
  // updateAddress_lngGr180(tokenID);
  // updateAddress_latlessM90(tokenID);
  // updateAddress_lnglessM190(tokenID);
  // updateAddress_zipLenInvalid(tokenID)

  // updateAddress_numericArea ("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  updateAddress_numericArea ("3eff9bd5-729c-4625-b260-0a8b132e5274",tokenID) // created by susovan
  // updateAddress_capAlphabeticArea("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_smallAlphabeticArea("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_alphanumericWithSpecialCharacterFlat("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by suman
  // updateAddress_alphanumericFlat("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_blankAnno("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_numericAnno("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_capAlphabeticAnno("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_smallAlphabeticAnno ("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_alphanumericWithSpecialCharacterAnno("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_alphanumericAnno("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_specialCharAnno("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_blankLandmark("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_numericLandmark("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_capAlphabeticLandmark("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_smallAlphabeticLandmark("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_alphanumericWithSpecialCharacterLandmark("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_alphanumericLandmark("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_specialCharLandmark("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID)// created by susovan
  // updateAddress_blankCity("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_numericCity("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_capAlphabeticCity("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_smallAlphabeticCity("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_alphanumericWithSpecialCharacterCity  ("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_blankState("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_numericState("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_capAlphabeticState("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_smallAlphabeticState("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_alphanumericWithSpecialCharacterState("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_alphanumericState("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_blankCountry("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_numericCountry("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_capAlphabeticCountry("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_smallAlphabeticCountry("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_alphanumericWithSpecialCharacterCountry("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_alphanumericCountry("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_blankLattitud("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_blankLongitude("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  // updateAddress_POC("f4a08503-05c7-4d22-98d0-4a0b5de43e09",tokenID) // created by susovan
  





}

export function revartbacktheJsonRaw(){

body = {
    "addressLine": "Test worli",
    "annotation": "Forest",
    "area": "Test Area",
    "city": "Test City",
    "country": "Test Country",
    "flatNo": "Test 90876",
    "landmark": "Test landmark",
    "lat": -80.22,
    "lng": -170.44,
    "state": "Test State",
    "zip": "223344",
    "default" : false
    };

} //end revartbacktheJsonRaw

export function updateAddress(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.annotation = "Forest"+" " + Date.now();
      body.lat = -80.22;
      body.lng = -170.44;
      
      let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
      // console.log(res.status + " " + res.body)
      console.log(`,${url},` +' updateAddress,' + '200,' + res.status+ `,${res.timings.duration}`);
      check(res, {
        'updateAddress : Status code MUST be 200': (res) => res.status === 200
        });

        revartbacktheJsonRaw();
}
export function updateAddress_noAddLine(addressID,tokenID)
{
    var url = prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    delete body.addressLine;
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_noAddLine,' + '400,' + res.status+ `,${res.timings.duration}`);
    check(res, {
      'updateAddress_noAddLine : Status code MUST be 400': (res) => res.status === 400
      });

      revartbacktheJsonRaw();
}
export function updateAddress_numericAddLine(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.addressLine = updateNAddUserAddress.numericAddressLine;
    body.annotation = "Test Anno" + Date.now();
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_numericAddLine,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
      'updateAddress_numericAddLine : Status code MUST be 200': (res) => res.status === 200
      });

      revartbacktheJsonRaw();
}
export function updateAddress_capAlphabeticAddLine(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.addressLine = updateNAddUserAddress.capAlphabeticAddLine;
    body.annotation = "Test Anno" + Date.now();
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_capAlphabeticAddLine,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
      'updateAddress_capAlphabeticAddLine : Status code MUST be 200': (res) => res.status === 200
      });

      revartbacktheJsonRaw();
}
export function updateAddress_smallAlphabeticAddLine(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.addressLine = updateNAddUserAddress.smallAlphabeticAddLine;
    body.annotation = "Test Anno" + Date.now();
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_smallAlphabeticAddLine,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
      'updateAddress_smallAlphabeticAddLine : Status code MUST be 200': (res) => res.status === 200
      });

      revartbacktheJsonRaw();
}
export function updateAddress_alphanumericWithSpecialCharacterAddLine(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.addressLine = updateNAddUserAddress.alphanumericWithSpecialCharacterAddLine;
    body.annotation = "Test Anno" + Date.now();
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_alphanumericWithSpecialCharacterAddLine,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
      'updateAddress_alphanumericWithSpecialCharacterAddLine : Status code MUST be 200': (res) => res.status === 200
      });

      revartbacktheJsonRaw();
}
export function updateAddress_alphanumericAddLine(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.addressLine = updateNAddUserAddress.alphanumericAddLine;
    body.annotation = "Test Anno" + Date.now();
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_alphanumericAddLine,' + '200,' + res.status+ `,${res.timings.duration}`);
    check(res, {
      'updateAddress_alphanumericAddLine : Status code MUST be 200': (res) => res.status === 200
      });

      revartbacktheJsonRaw();
}
export function updateAddress_noZip(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      delete body.zip; //Test Zip
      
      let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
      console.log(`,${url},` +' updateAddress_noZip,' + '400,' + res.status+ `,${res.timings.duration}`);
      check(res, {
        'updateAddress_noZip : Status code MUST be 400': (res) => res.status === 400
        });

        revartbacktheJsonRaw();
}
export function updateAddress_zipAlpha(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.zip = "ABCD"; //Test Zip
      
      let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
      console.log(`,${url},` +' updateAddress_zipAlpha,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
        'updateAddress_zipAlpha : Status code MUST be 400': (res) => res.status === 400
        });

        revartbacktheJsonRaw();
}
export function updateAddress_greaterZip(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
      body.zip = updateNAddUserAddress.greaterZip;
      body.annotation = "Test Anno" + Date.now();
      
      let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
      console.log(`,${url},` +' updateAddress_zipAlpha,' + '400,' + res.status + `,${res.timings.duration}`);
      check(res, {
        'updateAddress_zipAlpha : Status code MUST be 400': (res) => res.status === 400
        });

      revartbacktheJsonRaw();
}
export function updateAddress_lessZip(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    body.zip = updateNAddUserAddress.lessZip;
    body.annotation = "Test Anno" + Date.now();
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +'updateAddress_lessZip,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_lessZip : Status code MUST be 400': (res) => res.status === 400
      });

    revartbacktheJsonRaw();
}
export function updateAddress_noFlat(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
      };
    delete body.flatNo;
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_noFlat,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_noFlat : Status code MUST be 400': (res) => res.status === 400
    });

    revartbacktheJsonRaw();
}
export function updateAddress_numericFlat(addressID,tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };
  body.flatNo = updateNAddUserAddress.numericFlat;
  body.annotation = "Test Anno" + Date.now();
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_numericFlat,' + '200,' + res.status + `,${res.timings.duration}` );
  check(res, {
    'updateAddress_numericFlat : Status code MUST be 200': (res) => res.status === 200
  });
  
  revartbacktheJsonRaw();
}
export function updateAddress_capAlphabeticFlat(addressID,tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };
  body.flatNo = updateNAddUserAddress.capAlphabeticFlat;
  body.annotation = "Test Anno" + Date.now();
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_capAlphabeticFlat,' + '200,' + res.status + `,${res.timings.duration}` );
  check(res, {
    'updateAddress_capAlphabeticFlat : Status code MUST be 200': (res) => res.status === 200
  });

  revartbacktheJsonRaw();
}
export function updateAddress_smallAlphabeticFlat(addressID,tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };
  body.flatNo = updateNAddUserAddress.smallAlphabeticFlat;
  body.annotation = "Test Anno" + Date.now();
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_smallAlphabeticFlat,' + '200,' + res.status + `,${res.timings.duration}` );
  check(res, {
    'updateAddress_smallAlphabeticFlat : Status code MUST be 200': (res) => res.status === 200
  });

  revartbacktheJsonRaw();
}
export function updateAddress_alphanumericWithSpecialCharacterFlat(addressID,tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };
  body.flatNo = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterFlat;
  body.annotation = "Test Anno" + Date.now();
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_alphanumericWithSpecialCharacterFlat,' + '400,' + res.status + `,${res.timings.duration}` );
  check(res, {
    'updateAddress_alphanumericWithSpecialCharacterFlat : Status code MUST be 400': (res) => res.status === 400
  });

  revartbacktheJsonRaw();
}
export function updateAddress_flatNonNumeric(addressID,tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };
      
  body.flatNo = "Test 90876";
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_flatNonNumeric,' + '400,' + res.status + `,${res.timings.duration}` );
  check(res, {
    'updateAddress_flatNonNumeric : Status code MUST be 400': (res) => res.status === 400
  });

  revartbacktheJsonRaw();
}
export function updateAddress_noArea(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };  
    delete body.area ;
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_noArea,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_noArea : Status code MUST be 400': (res) => res.status === 400
    });

    revartbacktheJsonRaw();
}
export function updateAddress_areaNonAphabetic(addressID,tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };
  body.area ="Test /%#@";
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  // console.log("body:-----"+JSON.stringify(body))  // hide
  console.log(`,${url},` +'updateAddress_areaNonAphabetic,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    'updateAddress_areaNonAphabetic : Status code MUST be 400': (res) => res.status === 400
  });

  revartbacktheJsonRaw();
}
export function updateAddress_noAnno(addressID,tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };
  delete body.annotation;
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_noAnno,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    'updateAddress_noAnno : Status code MUST be 400': (res) => res.status === 400
  });

  revartbacktheJsonRaw();
}

export function updateAddress_annoNonAlphanumeric(addressID,tokenID)
{
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };
  
  body.annotation = "!@##";
        
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_annoNonAlphanumeric,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    'add_address : Status code MUST be 400': (res) => res.status === 400
  });

  revartbacktheJsonRaw();
}
export function updateAddress_noLM(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    
    delete body.landmark ;
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_noLM,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_noLM : Status code MUST be 400': (res) => res.status === 400
    });

    revartbacktheJsonRaw();
}
export function updateAddress_symLM(addressID,tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };
  
  body.landmark = "!@#$";
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_symLM,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    'add_address : Status code MUST be 400': (res) => res.status === 400
  });

  revartbacktheJsonRaw();
}
export function updateAddress_noCity(addressID,tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };

  delete body.city ;
  // console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_noCity,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    'updateAddress_noCity : Status code MUST be 400': (res) => res.status === 400
  });

  revartbacktheJsonRaw();
}

export function updateAddress_citywithoutAlphabet(addressID,tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };
  body.city = "!@#12@#";
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_citywithoutAlphabet,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    'updateAddress_citywithoutAlphabet : Status code MUST be 400': (res) => res.status === 400
  });

  revartbacktheJsonRaw();
}
export function updateAddress_noState(addressID,tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };
  
  delete body.state;
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_noState,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    'updateAddress_noState : Status code MUST be 400': (res) => res.status === 400
  });

  revartbacktheJsonRaw();
}
export function updateAddress_stateWithoutAlphabet(addressID,tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };

  body.state = "!@32";
    
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_stateWithoutAlphabet,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    'updateAddress_stateWithoutAlphabet : Status code MUST be 400': (res) => res.status === 400
  });

  revartbacktheJsonRaw();
}
export function updateAddress_noCountry(addressID,tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };

  delete body.country;
  // console.log("Print the JSON body:---"+JSON.stringify(body))  // hide
  
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_noCountry,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    'updateAddress_noCountry : Status code MUST be 400': (res) => res.status === 400
  });

  revartbacktheJsonRaw();
}

export function updateAddress_countryWithouAlphabet(addressID,tokenID)
{
  var url=prop.gintaa_baseurl.concat(endpoint + addressID);
  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
  };

  body.country = "!@!13";
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  console.log(`,${url},` +' updateAddress_countryWithouAlphabet,' + '400,' + res.status + `,${res.timings.duration}`);
  check(res, {
    'updateAddress_countryWithouAlphabet : Status code MUST be 400': (res) => res.status === 400
  });

  revartbacktheJsonRaw();
}
export function updateAddress_noLat(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.lat;
  
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_noLat,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_noLat : Status code MUST be 400': (res) => res.status === 400
    });

    revartbacktheJsonRaw();
}
export function updateAddress_nolng(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    delete body.lng;
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_nolng,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_nolng : Status code MUST be 400': (res) => res.status === 400
    });

    revartbacktheJsonRaw();
}
export function updateAddress_decimalLatBet90toM90(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lat = updateNAddUserAddress.decimalLatBet90toM90;
    body.annotation = "Test Anno" + Date.now();
      
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_decimalLatBet90toM90,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_decimalLatBet90toM90 : Status code MUST be 200': (res) => res.status === 200
    });

    revartbacktheJsonRaw();

}
export function updateAddress_decimalLatBey90toM90(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lat = updateNAddUserAddress.decimalLatBet90toM90;
    body.annotation = "Test Anno" + Date.now();
    
    // console.log(JSON.stringify(body));  // hide
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_decimalLatBey90toM90,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_decimalLatBey90toM90 : Status code MUST be 400': (res) => res.status === 400
    });

    revartbacktheJsonRaw();
}
export function updateAddress_latGr90(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.lat = 95.22;
      
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_latGr90,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_latGr90 : Status code MUST be 400': (res) => res.status === 400
    });

    revartbacktheJsonRaw();
}
export function updateAddress_lngGr180(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };
    body.lng = 185.44;
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_lngGr180,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        'updateAddress_lngGr180 : Status code MUST be 400': (res) => res.status === 400
    });

    revartbacktheJsonRaw();
}
export function updateAddress_latlessM90(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lat = -100.22;

      
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_latlessM90,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        'updateAddress_latlessM90 : Status code MUST be 400': (res) => res.status === 400
    });

    revartbacktheJsonRaw();
}
export function updateAddress_decimalLngBet180toM180(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lng = updateNAddUserAddress.decimalLngBet180toM180;
    body.annotation = "Test Anno" + Date.now();
      
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_decimalLngBet180toM180,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_decimalLngBet180toM180 : Status code MUST be 200': (res) => res.status === 200
    });

    revartbacktheJsonRaw();
}
export function updateAddress_decimalLngBey180toM180(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lng = updateNAddUserAddress.decimalLngBey180toM180;
    body.annotation = "Test Anno" + Date.now();
      
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_decimalLngBey180toM180,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_decimalLngBey180toM180 : Status code MUST be 400': (res) => res.status === 400
    });

    revartbacktheJsonRaw();
}
export function updateAddress_lnglessM190(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.lng = -190.44;
      
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_lnglessM190,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        'updateAddress_lnglessM190 : Status code MUST be 400': (res) => res.status === 400
    });

    revartbacktheJsonRaw();
}
export function updateAddress_zipLenInvalid(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.zip = "12";
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_zipLenInvalid,' + '400,' + res.status + `,${res.timings.duration}`);
    check(res, {
        'updateAddress_zipLenInvalid : Status code MUST be 400': (res) => res.status === 400
     });

     revartbacktheJsonRaw();
}
export function updateAddress_noAuth(addressID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'Content-Type': 'application/json'
    };

    body.annotation = "Forest";
    body.lat = -80.22;
    body.lng = -170.44;
      
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_noAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_noAuth : Status code MUST be 403': (res) => res.status === 403
    });

    revartbacktheJsonRaw();
}
export function updateAddress_invalidAuth(addressID,tokenID)
{
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
      'X-Authorization-Firebase': tokenID + "a",
        'Content-Type': 'application/json'
    };

    body.annotation = "Forest";
    body.lat = -80.22;
    body.lng = -170.44;
    
    let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_invalidAuth,' + '403,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_invalidAuth : Status code MUST be 403': (res) => res.status === 403
    });

    revartbacktheJsonRaw();
}
export function updateAddress_diffMethod(addressID,tokenID)
{
    var addID = user_addID(tokenID);
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'application/json'
    };

    body.annotation = "Forest";
    body.lat = -80.22;
    body.lng = -170.44;
    
    let res = http.patch(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_diffMethod,' + '405,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_diffMethod : Status code MUST be 405': (res) => res.status === 405
    });

    revartbacktheJsonRaw();
}
export function updateAddress_diffHeader(addressID,tokenID)
{
    var addID = user_addID(tokenID);
    var url=prop.gintaa_baseurl.concat(endpoint + addressID);
    let requestHeaders = {
        'X-Authorization-Firebase': tokenID,
        'Content-Type': 'multipart/form-data'
    };

    body.annotation = "Forest";
    body.lat = -80.22;
    body.lng = -170.44;
    
    let res = http.post(url, JSON.stringify(body),{ headers: requestHeaders });
    console.log(`,${url},` +' updateAddress_diffHeader,' + '412,' + res.status + `,${res.timings.duration}`);
    check(res, {
      'updateAddress_diffHeader : Status code MUST be 412': (res) => res.status === 412
    });

    revartbacktheJsonRaw();
}



export function updateAddress_numericArea(addressID,tokenID){
 // we are hardcoing the address id 

  // console.log("tokenID:-"+tokenID) // hide
  // console.log("addressID:-"+addressID) // hide
  var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  // console.log("URL:-"+url)// hide

  let requestHeaders = {
      'X-Authorization-Firebase': tokenID,
      'Content-Type': 'application/json'
    };

    body.area = prop.userService.updateNAddUserAddress.numericArea;
    body.annotation = "Forest" + Date.now();
    // console.log("body.area:---"+body.area)  // hide
    // console.log("Print the JSON body:---"+JSON.stringify(body))  // hide
  
  let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  // console.log("Body:-"+res.body) // hide

  console.log(`URL:--${url},` +' updateAddress_numericArea, Expected 200, Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
  check(res, {
    'updateAddress_numericArea : Status code MUST be 200': (res) => res.status === 200
    });

  try{
    if (body.area===res.json().payload.area){
      // console.log("Matched !") // hide
     } else {
      // console.log("Not Matched !") // hide
     }
  }catch(err){
    // console.log("Print the Error!"+err) // hide
  }
  
  revartbacktheJsonRaw();
} // end updateAddress_numericArea

export function updateAddress_capAlphabeticArea(addressID,tokenID){
  // we are hardcoing the address id 
 
 
   // console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.area = prop.userService.updateNAddUserAddress.capAlphabeticArea;
     body.annotation = "Forest" + Date.now();
    //  console.log("cap Alphabetic Area:---"+body.area) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
 
   console.log(`URL:-${url},` +' updateAddress_capAlphabeticArea, Expected 200, Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     'updateAddress_capAlphabeticArea : Status code MUST be 200': (res) => res.status === 200
     });

     try{
        if (body.area===res.json().payload.area){
        // console.log("Matched !") // hide
        } else {
        // console.log("Not Matched !") // hide
        }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_capAlphabeticArea

 export function updateAddress_smallAlphabeticArea(addressID,tokenID){
  // we are hardcoing the address id 
 
   // console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.area = prop.userService.updateNAddUserAddress.smallAlphabeticArea;
     body.annotation = "Forest" + Date.now();
    //  console.log("small Alphabetic Area:---"+body.area) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
 
   console.log(`URL:-${url},` +' updateAddress_smallAlphabeticArea, Expected 200, Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     'updateAddress_smallAlphabeticArea : Status code MUST be 200': (res) => res.status === 200
     });

     try {
        if (body.area===res.json().payload.area){
        // console.log("Matched !") // hide
        } else {
        // console.log("Not Matched !") // hide
        }
    }catch(err){
       // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_smallAlphabeticArea
 
 
 export function updateAddress_alphanumericFlat(addressID,tokenID){
  // we are hardcoing the address id 
 
   // console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.area = prop.userService.updateNAddUserAddress.alphanumericFlat;
     body.annotation = "Forest" + Date.now();
    //  console.log("alphanumeric With Special Character Flat:---"+body.area) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
 
   console.log(`URL:-${url},` +' updateAddress_alphanumericFlat, Expected 200, Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     'updateAddress_alphanumericFlat : Status code MUST be 200': (res) => res.status === 200
     });
     try {
      if (res.status===200){
        if (body.area===res.json().payload.area){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_alphanumericFlat

 export function updateAddress_blankAnno(addressID,tokenID){
  // we are hardcoing the address id 
 
   // console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.annotation = prop.userService.updateNAddUserAddress.blankAnno;
    //  console.log("blank Anno:---"+body.annotation) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
 
   console.log(`URL:-${url},` +' updateAddress_blankAnno, Expected 400, Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     'updateAddress_blankAnno : Status code MUST be 400': (res) => res.status === 400
     });
     try {
      if (res.status===400){
          // console.log("Matched !"+"\n"+res.json().payload[1].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_blankAnno



 export function updateAddress_numericAnno(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.annotation = prop.userService.updateNAddUserAddress.numericAnno+Date.now();
    //  console.log("numeric Anno:---"+body.annotation) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_numericAnno, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_numericAnno : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_numericAnno

 export function updateAddress_capAlphabeticAnno(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.annotation = prop.userService.updateNAddUserAddress.capAlphabeticAnno+Date.now();
    //  console.log("cap Alphabetic  Anno:---"+body.annotation) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_capAlphabeticAnno, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_capAlphabeticAnno : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();


 } // end updateAddress_capAlphabeticAnno

 export function updateAddress_smallAlphabeticAnno(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.annotation = prop.userService.updateNAddUserAddress.smallAlphabeticAnno+Date.now();
    //  console.log("cap Alphabetic  Anno:---"+body.annotation) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_smallAlphabeticAnno, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_smallAlphabeticAnno : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();


 } // end updateAddress_smallAlphabeticAnno


 export function updateAddress_alphanumericWithSpecialCharacterAnno(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.annotation = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterAnno;
    //  console.log("cap Alphabetic  Anno:---"+body.annotation) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide

   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_alphanumericWithSpecialCharacterAnno, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_alphanumericWithSpecialCharacterAnno : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){       
          // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();


 } // end updateAddress_alphanumericWithSpecialCharacterAnno


 export function updateAddress_alphanumericAnno(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.annotation = prop.userService.updateNAddUserAddress.alphanumericAnno;
    //  console.log("cap Alphabetic  Anno:---"+body.annotation) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_alphanumericAnno, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_alphanumericAnno : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();


 } // end updateAddress_alphanumericAnno


 export function updateAddress_specialCharAnno(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.annotation = prop.userService.updateNAddUserAddress.specialCharAnno;
    //  console.log("cap Alphabetic  Anno:---"+body.annotation) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide

   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_specialCharAnno, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_specialCharAnno : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){       
          // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();


 } // end updateAddress_specialCharAnno

 export function updateAddress_blankLandmark(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.landmark = prop.userService.updateNAddUserAddress.blankLandmark;
    //  console.log("blank Landmark:---"+body.landmark) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide

   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_blankLandmark, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_blankLandmarko : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){       
          // console.log("Matched !"+"\n"+res.json().payload[1].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_blankLandmark


 export function updateAddress_numericLandmark(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.landmark = prop.userService.updateNAddUserAddress.numericLandmark;
     body.annotation = "Forest"+ Date.now();
    //  console.log("Numeric Landmark:---"+body.landmark) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_numericLandmark, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_numericLandmark : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation && body.landmark===res.json().payload.landmark){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();


 } // end updateAddress_numericLandmark

 export function updateAddress_capAlphabeticLandmark(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.landmark = prop.userService.updateNAddUserAddress.capAlphabeticLandmark;
     body.annotation = "Forest"+ Date.now();
    //  console.log("cap Alphabetic Landmark:---"+body.landmark) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_capAlphabeticLandmark, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_capAlphabeticLandmark : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation && body.landmark===res.json().payload.landmark){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_capAlphabeticLandmark

 export function updateAddress_smallAlphabeticLandmark(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.landmark = prop.userService.updateNAddUserAddress.smallAlphabeticLandmark;
     body.annotation = "Forest"+ Date.now();
    //  console.log("small Alphabetic Landmark:---"+body.landmark) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) 
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_smallAlphabeticLandmark, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_smallAlphabeticLandmark : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation && body.landmark===res.json().payload.landmark){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_smallAlphabeticLandmark


 

 export function updateAddress_alphanumericWithSpecialCharacterLandmark(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.landmark = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterLandmark;
     body.annotation = "Forest"+ Date.now();
    //  console.log("alpha numeric With Special Character Landmark:---"+body.landmark) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_alphanumericWithSpecialCharacterLandmark, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_alphanumericWithSpecialCharacterLandmark : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err)// hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_alphanumericWithSpecialCharacterLandmark


 

 export function updateAddress_alphanumericLandmark(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
    };
     
     body.landmark = prop.userService.updateNAddUserAddress.alphanumericLandmark;
     body.annotation = "Forest"+ Date.now();
    //  console.log("alpha numeric Landmark:---"+body.landmark) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) 
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_alphanumericLandmark, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_alphanumericLandmark : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
    });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation && body.landmark===res.json().payload.landmark){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) 
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_alphanumericLandmark


 export function updateAddress_specialCharLandmark(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
    };
     
     body.landmark = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterLandmark;
     body.annotation = "Forest"+ Date.now();
    //  console.log("special Char Landmark:---"+body.landmark) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_specialCharLandmark, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_specialCharLandmark : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
    });

     try {
      if (res.status===exptd){
        // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message)// hide 
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_specialCharLandmark




 export function updateAddress_numericCity(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
  };
     
     body.city = prop.userService.updateNAddUserAddress.numericCity;
     body.annotation = "Forest"+ Date.now();
    //  console.log("numericCity:---"+body.city) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body)// hide
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_numericCity, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_numericCity : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_numericCity


 export function updateAddress_capAlphabeticCity(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
    };
     
     body.city = prop.userService.updateNAddUserAddress.capAlphabeticCity;
     body.annotation = "Forest"+ Date.now();
    //  console.log("cap Alphabetic City:---"+body.city) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_capAlphabeticCity, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_capAlphabeticCity : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation && body.city===res.json().payload.city){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_capAlphabeticCity

 

 export function updateAddress_smallAlphabeticCity(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.city = prop.userService.updateNAddUserAddress.smallAlphabeticCity;
     body.annotation = "Forest"+ Date.now();
    //  console.log("cap Alphabetic City:---"+body.city) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_smallAlphabeticCity, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_smallAlphabeticCity : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation && body.city===res.json().payload.city){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_smallAlphabeticCity

 
 export function updateAddress_alphanumericWithSpecialCharacterCity(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.city = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterCity;
     body.annotation = "Forest"+ Date.now();
    //  console.log("alpha numeric With Special Character City:---"+body.city) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_alphanumericWithSpecialCharacterCity, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_alphanumericWithSpecialCharacterCity : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_alphanumericWithSpecialCharacterCity


 export function updateAddress_numericState(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.state = prop.userService.updateNAddUserAddress.numericState;
     body.annotation = "Forest"+ Date.now();
    //  console.log("Numeric State:---"+body.state) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_numericState, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_numericState : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        // console.log("Matched !"+"\n"+res.json().payload[0].reason)// hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_numericState


 export function updateAddress_capAlphabeticState(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.state = prop.userService.updateNAddUserAddress.capAlphabeticState;
     body.annotation = "Forest"+ Date.now();
    //  console.log("cap Alphabetic State:---"+body.state) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_capAlphabeticState, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_capAlphabeticState : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation && body.state===res.json().payload.state){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_capAlphabeticState


 export function updateAddress_smallAlphabeticState(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.state = prop.userService.updateNAddUserAddress.smallAlphabeticState;
     body.annotation = "Forest"+ Date.now();
    //  console.log("small Alphabetic State:---"+body.state) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_smallAlphabeticState, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_smallAlphabeticState : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation && body.state===res.json().payload.state){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_smallAlphabeticState




 export function updateAddress_alphanumericWithSpecialCharacterState(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.state = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterState;
     body.annotation = "Forest"+ Date.now();
    //  console.log("alpha numeric With Special Character State:---"+body.state) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_alphanumericWithSpecialCharacterState, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_alphanumericWithSpecialCharacterState : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_alphanumericWithSpecialCharacterState



 export function updateAddress_alphanumericState(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.state = prop.userService.updateNAddUserAddress.alphanumericState;
     body.annotation = "Forest"+ Date.now();
    //  console.log("alphan umeric State:---"+body.state) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_alphanumericState, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_alphanumericState : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_alphanumericState



 export function updateAddress_numericCountry(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.country = prop.userService.updateNAddUserAddress.numericCountry;
     body.annotation = "Forest"+ Date.now();
    //  console.log("Numeric Country:---"+body.country) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_numericCountry, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_numericCountry : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_numericCountry


 export function updateAddress_capAlphabeticCountry(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };

     body.country = prop.userService.updateNAddUserAddress.capAlphabeticCountry;
     body.annotation = "Forest"+ Date.now();
    //  console.log("cap Alphabetic Country:---"+body.country) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_capAlphabeticCountry, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_capAlphabeticCountry : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation && body.state===res.json().payload.state){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      } 
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_capAlphabeticCountry


 export function updateAddress_smallAlphabeticCountry(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };

     body.country = prop.userService.updateNAddUserAddress.smallAlphabeticCountry;
     body.annotation = "Forest"+ Date.now();
    //  console.log("small Alphabetic Country:---"+body.country) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 200;// expected
 
   console.log(`URL:-${url},` +' updateAddress_smallAlphabeticCountry, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_smallAlphabeticCountry : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        if (body.annotation===res.json().payload.annotation && body.state===res.json().payload.state){
          // console.log("Matched !") // hide
        }
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) 
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_smallAlphabeticCountry


 export function updateAddress_alphanumericWithSpecialCharacterCountry(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.country = prop.userService.updateNAddUserAddress.alphanumericWithSpecialCharacterCountry;
     body.annotation = "Forest"+ Date.now();
    //  console.log("alpha numeric With Special Character Country:---"+body.country) // hide 
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_alphanumericWithSpecialCharacterCountry, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_alphanumericWithSpecialCharacterCountry : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      } 
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_alphanumericWithSpecialCharacterCountry


 export function updateAddress_alphanumericCountry(addressID,tokenID){
  // we are hardcoing the address id 
 
  //  console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.country = prop.userService.updateNAddUserAddress.alphanumericCountry;
     body.annotation = "Forest"+ Date.now();
    //  console.log("alph anumeric Country:---"+body.country) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_alphanumericCountry, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_alphanumericCountry : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_alphanumericCountry


 export function updateAddress_blankLattitud(addressID,tokenID){
  // we are hardcoing the address id 
 
   // console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.lat = prop.userService.updateNAddUserAddress.blankLattitud;
    //  console.log("blank Lattitud:---"+body.lat) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_blankLattitud, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_blankLattitud : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_blankLattitud


 export function updateAddress_blankLongitude(addressID,tokenID){
  // we are hardcoing the address id 
 
   // console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide 
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
     body.lng = prop.userService.updateNAddUserAddress.blankLongitude;
    //  console.log("blank Longitude:---"+body.lng) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_blankLongitude, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_blankLongitude : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        // console.log("Matched !"+"\n"+res.json().payload[0].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_blankLongitude

 export function updateAddress_blankCity(addressID,tokenID){
  // we are hardcoing the address id 
 
   // console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
  body.city = prop.userService.updateNAddUserAddress.blankCity;
    //  console.log("blank City:---"+body.annotation) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
 
   console.log(`URL:-${url},` +' updateAddress_blankCity, Expected 400, Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     'updateAddress_blankCity : Status code MUST be 400': (res) => res.status === 400
     });
     try {
      if (res.status===400){
          // console.log("Matched !"+"\n"+res.json().payload[1].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_blankCity

 export function updateAddress_blankState(addressID,tokenID){
  // we are hardcoing the address id 
 
   // console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
    body.state = prop.userService.updateNAddUserAddress.blankState ;
    //  console.log("blank State:---"+body.annotation) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
 
   console.log(`URL:-${url},` +' updateAddress_blankState, Expected 400, Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     'updateAddress_blankState : Status code MUST be 400': (res) => res.status === 400
     });
     try {
      if (res.status===400){
          // console.log("Matched !"+"\n"+res.json().payload[1].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();

 } // end updateAddress_blankState


 export function updateAddress_blankCountry(addressID,tokenID){
  // we are hardcoing the address id 
 
   // console.log("tokenID:-"+tokenID) // hide
   var url = prop.gintaa_baseurl.concat(endpoint + addressID);
  //  console.log("URL:-"+url)// hide
 
   let requestHeaders = {
       'X-Authorization-Firebase': tokenID,
       'Content-Type': 'application/json'
     };
     
    body.country = prop.userService.updateNAddUserAddress.blankCountry;
    
    //  console.log("blank Country:---"+body.country) // hide
    //  console.log("Print the JSON body:---"+JSON.stringify(body)) // hide
 
   // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
  //  console.log("Response Body:-"+res.body) // hide
 
   console.log(`URL:-${url},` +' updateAddress_blankCountry, Expected 400, Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     'updateAddress_blankCountry : Status code MUST be 400': (res) => res.status === 400
     });
     try {
      if (res.status===400){
          // console.log("Matched !"+"\n"+res.json().payload[1].reason) // hide
      } else {
        // console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message) // hide
      }
    }catch(err){
      // console.log("Print the Error!"+err) // hide
    }

    revartbacktheJsonRaw();
 } // end updateAddress_blankCountry























 const prop_2 = JSON.parse(open('../config/config_2.json'));
 export function updateAddress_POC(addressID,tokenID){
 
     body.lng = prop.userService.updateNAddUserAddress.blankLongitude;
     console.log("blank Longitude:---"+body.lng) 
     console.log("Print the JSON body:---"+JSON.stringify(body))

     var sm = prop.gintaa_baseurl
     console.log("sm:-"+sm)

     var sm1 = prop_2.userService.updateNAddUserAddress.area
     
     var jsonStringfy = JSON.stringify(sm1)
     var splitJson = jsonStringfy.split(",")
     

    //  var splitJson = jsonStringfy.split(",").replace("{","").replace("}","")
     console.log("jsonStringfy:-"+jsonStringfy)
     console.log("splitJson and replace :-"+splitJson)
     console.log("splitJson[0]:-"+splitJson[0])

     for (var i = 0 ; i <splitJson.length; i++ ){
      console.log("i:-"+i+" - "+splitJson[i])
     }

     var repSplitJson = jsonStringfy.replace("{","").replace("}","").split(",")
     console.log("repSplitJson:-"+repSplitJson)
     for (var ii = 0 ; ii <repSplitJson.length; ii++ ){
      console.warn("ii:-"+ii+" - "+repSplitJson[ii])
     }

  //    var getKeys = function(sm1){
  //     var keys = [];
  //     for(var key in obj){
  //        keys.push(key);
  //     }

  //     return keys;

  //  }

  console.log("=============================");
    // var keys = [];
    for(var key in sm1){
        // keys.push(key);
        let val = sm1[key];
        console.log(key,"--", val);
    }
    console.log("=============================");

    
 
 /*
     // body.area = prop.userService.updateNAddUserAddress.numericArea;
   
   let res = http.put(url, JSON.stringify(body),{ headers: requestHeaders });
   console.log("Response Body:-"+res.body)
   var exptd = 400;// expected
 
   console.log(`URL:-${url},` +' updateAddress_POC, Expected '+`${exptd}`,', Response Status:-' + res.status + `, Response Time:-${res.timings.duration}`);
   check(res, {
     ['updateAddress_POC : Status code MUST be '+`${exptd}`]: (res) => res.status === exptd
     });

     try {
      if (res.status===exptd){
        console.log("Matched !"+"\n"+res.json().payload[0].reason)
      } else {
        console.log("Not Matched !"+"Res Status:-"+res.status+" Res MSG:-"+res.message)
      }
    }catch(err){
      console.log("Print the Error!"+err)
    }
*/

 } // end updateAddress_POC