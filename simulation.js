function initialize(){
  
  var x = document.getElementById("canvas");
  var cr = x.getContext("2d");
  cr.beginPath();
  cr.rect(150,180,50,50);
  cr.strokeStyle = 'black';
  cr.stroke();
  cr.closePath();

  var circle = x.getContext("2d");
  circle.beginPath();
  circle.arc(500,200,40,0,2*Math.PI);
  circle.strokeStyle = 'black';
  circle.stroke();
  circle.closePath();

  var client1 = x.getContext("2d");
  client1.beginPath();
  client1.rect(300,400,80,80);
  client1.strokeStyle = 'black';
  client1.stroke();
  client1.closePath();

  var client2 = x.getContext("2d");
  client2.beginPath();
  client2.rect(460,400,80,80);
  client2.strokeStyle = 'black';
  client2.stroke();
  client2.closePath();

  var client3 = x.getContext("2d");
  client3.beginPath();
  client3.rect(620,400,80,80);
  client3.strokeStyle = 'black';
  client3.stroke();
  client3.closePath();

  var line1 = x.getContext("2d");
  line1.beginPath();
  line1.moveTo(465,220);
  line1.lineTo(350,400);
  line1.strokeStyle = 'black';
  line1.stroke();
  line1.closePath();
  
  var line2 = x.getContext("2d");
  line2.beginPath();
  line2.moveTo(500,240);
  line2.lineTo(500,400);
  line2.strokeStyle = 'black';
  line2.stroke();
  line2.closePath();

  var line3 = x.getContext("2d");
  line3.beginPath();
  line3.moveTo(535,220);
  line3.lineTo(655,400);
  line3.strokeStyle = 'black';
  line3.stroke();
  line3.closePath();

  } 

initialize();

// bind event handler to clear button
document.getElementById('reset').addEventListener('click', function() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        initialize();
      }, false);

function drawLine1(color){
  var x = document.getElementById("canvas");
  var line1 = x.getContext("2d");
  line1.beginPath();
  line1.moveTo(465,220);
  line1.lineTo(350,400);
  line1.strokeStyle = color;
  line1.stroke();
  line1.closePath();
}

function drawline2(color){
  var x = document.getElementById("canvas");
  var line2 = x.getContext("2d");
  line2.beginPath();
  line2.moveTo(500,240);
  line2.lineTo(500,400);
  line2.strokeStyle = color;
  line2.stroke();
  line2.closePath();
}

function drawline3(color){
  var x = document.getElementById("canvas");
  var line3 = x.getContext("2d");
  line3.beginPath();
  line3.moveTo(535,220);
  line3.lineTo(655,400);
  line3.strokeStyle = color;
  line3.stroke();
  line3.closePath();
}


