var path = require('path');
const ipc = require('electron').ipcRenderer;

var sys = require('sys');
var exec = require('child_process').exec;
var child;



function button1(evt) {
  var nodeConsole = require('console');
  var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
  myConsole.log('\x1b[34m%s\x1b[0m','Urcabalurca ');
  child = exec("./core.sh 1 ", function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
  child.stdout.on('data', function(data) {
    var nodeConsole = require('console');
    var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
    myConsole.log('\x1b[36m%s\x1b[0m', 'Urcabalurca ' + data.toString()); 
  });

}  

function button2(evt) {
  var nodeConsole = require('console');
  var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
  myConsole.log('\x1b[34m%s\x1b[0m','Urcabalurca ');
  child = exec("./core.sh 2 ", function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
  child.stdout.on('data', function(data) {
    var nodeConsole = require('console');
    var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
    myConsole.log('\x1b[36m%s\x1b[0m', 'Urcabalurca ' + data.toString()); 
  });

} 

function button3(evt) {
  var nodeConsole = require('console');
  var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
  myConsole.log('\x1b[34m%s\x1b[0m','Urcabalurca ');
  child = exec("./core.sh 3", function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
  child.stdout.on('data', function(data) {
    var nodeConsole = require('console');
    var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
    myConsole.log('\x1b[36m%s\x1b[0m', 'Urcabalurca ' + data.toString()); 
  });

}  

function button4(evt) {
  var nodeConsole = require('console');
  var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
  myConsole.log('\x1b[34m%s\x1b[0m','Urcabalurca ');
  child = exec("./core.sh 4", function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
  child.stdout.on('data', function(data) {
    var nodeConsole = require('console');
    var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
    myConsole.log('\x1b[36m%s\x1b[0m', 'Urcabalurca ' + data.toString()); 
  });

}  

function button5(evt) {
  var nodeConsole = require('console');
  var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
  myConsole.log('\x1b[34m%s\x1b[0m','Urcabalurca ');
  child = exec("./core.sh 5", function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
  child.stdout.on('data', function(data) {
    var nodeConsole = require('console');
    var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
    myConsole.log('\x1b[36m%s\x1b[0m', 'Urcabalurca ' + data.toString()); 
  });

}
    
    document.addEventListener('DOMContentLoaded', function() {
    
      document.getElementById("b1").addEventListener("click", button1);
      document.getElementById("b2").addEventListener("click", button2);
      document.getElementById("b3").addEventListener("click", button3);
      document.getElementById("b4").addEventListener("click", button4);
      document.getElementById("b5").addEventListener("click", button5);
    
    })