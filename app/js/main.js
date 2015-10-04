// history and data object
var myData = {
    history: []
};

var seconds = 0;

window.addEventListener('load', function(){
    
    buttons = document.querySelectorAll('.add_amount');
    calc = document.querySelector('.calc');
    visible = document.querySelector('#visible');
    
    // takinng original html value and creating output div for the sum
    var element = document.createElement('div');
    calc.appendChild(element);
    
    theSum = document.querySelector('.calc div:last-child');
      
    // checking for exceptions and setting rules for them
    var startValue = parseInt(visible.innerHTML);
    if (!startValue)
    {
        startValue = 0;
        calc.style.display = 'none'; // hide if 0 or no data to display
    }
    element.textContent = startValue;
    visible.innerHTML = startValue;
    
    // main adding function
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            
            calc.style.display = 'block'; // show when data
            
            // disabling buttons and setting wait messages
            for(var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
            if( seconds < 4)
                theSum.innerHTML = 'adding...';
            else
                theSum.innerHTML = 'adding... Get full version to add faster!';
            
            // show added amount
            var value = this.dataset.amount;
            visible.innerHTML += ' + ' + value;
            
            // add server based delay counter - seconds
            // the adding and history updating are called inside this function
            delay(seconds++, value, startValue);
        }
    }
});

//delay function
function delay(seconds, value, startValue) {

    var oReq = new XMLHttpRequest();
    
    oReq.addEventListener("load", function(){    
        addAmount(value, startValue); // calling adding   
        for(var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false; // enable buttons
        }      
    });
    
    oReq.open("GET", "http://www.httpbin.org/delay/" + seconds, true);
    oReq.send();  
}

function addAmount(amount, startValue) {
    
    addHistory(amount); // calling history

    var sum = startValue;
    for(var i = 0; i < myData.history.length; i++ ) {
        sum += parseInt(myData.history[i]);
    }    
    theSum.innerHTML = sum;    
}

function addHistory(amount) {
    i = myData.history.length 
    myData.history[i] = amount;
}

// Before you reuse this script you may want to have your head examined 
// 
// Copyright 1999 InsideDHTML.com, LLC.   

