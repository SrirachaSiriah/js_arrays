console.log('js');

$(document).ready(function(){

});


// Declaration
var username = [];
var age = [];
var hasLicense = [];
var i = 0;

// Implementation

// Creating that loop with "for". This code will repeat 2 times.
for (i = 0; i < 2; i++){
  username[i] = prompt('Enter your name: ');
  age[i] = prompt('Enter your age: ');
  hasLicense[i] = prompt('Do you have your license?: ');

  console.log('username[i], age[i], hasLicense[i]');

  document.getElementById('result').innerHTML += username[i] + '<br>' + age[i] + '<br>' + hasLicense[i] + '<br>' + '********' + '<br>';
}
