// history and data object
var myData = {
    history: []
};

var seconds = 1;

window.addEventListener('load', function(){
    // takinng original value and creating output div of total sum
    var element = document.createElement('div');
    document.querySelector('.calc').appendChild(element);
    
    var startValue = parseInt(document.querySelector('#visible').innerHTML);
    // checking for exceptions and setting rules for them
    if (!startValue)
    {
        startValue = 0;
        document.querySelector('.calc').style.display = 'none';
    }
    element.textContent = startValue;
    document.querySelector('#visible').innerHTML = startValue;
    // unified summing function for all buttons
    document.querySelector('.add_amount').onclick = function() {
        var value = this.dataset.amount;
        //add server based delay counter - seconds
        //console.log('start', seconds);
        delay(seconds++);
        //console.log('delay', seconds);
        addAmount(value);
    }
    // creating output div for wait message
        //set rules for wait message 
});
        
function addAmount(amount) {
    //add number to history array
    //console.log('add', amount);
    //add number to visible history
    addHistory(amount);

    //add number to final sum

    //checking for lenght and hiding older values if necessary
    //if lenght big create link to toggle history
}

function addHistory(amount) {
    //save history 
    //console.log('history', amount);
}

//delay function
function delay(seconds) {
    var oReq = new XMLHttpRequest();
    //oReq.addEventListener("load", function(){ console.log('ready');});
    oReq.open("GET", "http://www.httpbin.org/delay/" + seconds, false);
    oReq.send();
}

/* commented for reference

//moved from index from head

// Before you reuse this script you may want to have your head examined 
// 
// Copyright 1999 InsideDHTML.com, LLC.   

function doBlink() { 
    // Blink, Blink, Blink... 
    var blink = document.all.tags("BLINK") 
        for (var i=0; i < blink.length; i++) 
              blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : "" 
} 

function startBlink() { 
    // Make sure it is IE4 
    if (document.all) 
          setInterval("doBlink()",1000) 
} 
window.onload = startBlink; 





//originally in this file
o = {
  history: [],
};

element = document.createElement('div');
setTimeout(function(){
  document.querySelector('body').insertBefore(element, document.querySelector('button'));
  element.textContent = 0;
}, 200)

function addFive () {
  addhistory(5)
  element.innerHTML = parseInt(element.innerHTML) + 5;
}
function addhistory (Added) {
document.
querySelector('span:last-child').appendChild(
document.
createElement('span')

)
document.querySelector('span:last-child').textContent += ' + ' + Added;
}


// onclick="addTen()" --- action from the button with functionality 10
// moved from index from the bottom

setTimeout(function () {
document.querySelector('button').onclick = function () {
  addFive();
  }}, 200);

// moved from code2.js

function reqListener () {
   element.textContent = oldNumber + parseInt(10);
   element2.remove()
}

function addTen () { 
  oldNumber = parseInt(element.textContent)
  addhistory(10)
element2 = document.createElement('div');
  element2.textContent = 'adding'
document.querySelector('body').insertBefore(element2, document.querySelector('button'));

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.httpbin.org/delay/1", true);oReq.send(); }

element = document.createElement('div');
setTimeout(function(){
document.querySelector('body').insertBefore(element, document.querySelector('button'));
}, 500)

*/