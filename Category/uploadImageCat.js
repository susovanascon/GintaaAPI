import http from 'k6/http';
import { check } from 'k6';

//******************************************
//USE THIS API TO UPLOAD IMAGE FOR CATEGORY*
//******************************************
const file = open ('./categoryImages/AC_Repair1.jpg','b');
const endpoint = '/categories/v1/categories/images';

export default function uploadImageforCat()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    uploadCategoryImage(baseurl);
    getCategoryImageID(baseurl);
}
export function uploadCategoryImage(baseurl)
{
    var url=baseurl.concat(endpoint);
    var data = {
        file: http.file(file,'AC_Repair1.jpg','multipart/form-data')
    };
    var res = http.post(url,data);
    
    console.log(`,${url},` +'uploadCategoryImage,' + '200,' + res.status + `,${res.timings.duration}`);
    check(res, {
        ['uploadCategoryImage: EXPECTED: 200,     ACTUAL: ' + `${res.status}`] : res.status === 200,
      });
}
export function getCategoryImageID()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    var url=baseurl.concat(endpoint);
    var data = {
        file: http.file(file,'AC_Repair1.jpg','multipart/form-data')
    };
    var res = http.post(url,data);
    var imageID = res.json().payload.id;
    return imageID;
}

