// history and data object
var myData = {
    history: []
};

var seconds = 0;

window.addEventListener('load', function(){
    buttons = document.querySelectorAll('.add_amount');
    
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
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            
            //show data
            document.querySelector('.calc').style.display = 'block';
            
             //disable buttons
            for(var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
            
            //add adding text
            if( seconds < 4)
                document.querySelector('.calc div:last-child').innerHTML = 'adding...';
            else
                document.querySelector('.calc div:last-child').innerHTML = 'adding... Get full version to add faster!';
            
            //show added amount
            var value = this.dataset.amount;
            document.querySelector('#visible').innerHTML += ' + ' + value;
            
            //add server based delay counter - seconds
            delay(seconds++, value, startValue);
            //console.log('delay', seconds);

        }
    }
    // creating output div for wait message
        //set rules for wait message 
});
        
function addAmount(amount, startValue) {
    
    //add number to visible history
    addHistory(amount);

    //add number to final sum
    var sum = startValue;
    for(var i = 0; i < myData.history.length; i++ ) {
        sum += parseInt(myData.history[i]);
    }
    console.log('sum: ' + sum);    
    document.querySelector('.calc div:last-child').innerHTML = sum;    
    //checking for lenght and hiding older values if necessary
    //if lenght big create link to toggle history
}

function addHistory(amount) {
    //save history 
    //add number to history array
    i = myData.history.length
    myData.history[i] = amount;
    console.log('history', myData.history);
    //console.log('history', amount);
}

//delay function
function delay(seconds, value, startValue) {

    var oReq = new XMLHttpRequest();
    
    oReq.addEventListener("load", function(){ 
        
        addAmount(value, startValue);
        
        //enable buttons
        for(var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
        
    });
    
    oReq.open("GET", "http://www.httpbin.org/delay/" + seconds, true);
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