  var clientRequest = document.getElementById("canvas");
  var cr = clientRequest.getContext("2d");
  cr.rect(150,180,50,50);
  cr.stroke();

  var lb1 = document.getElementById("canvas");
  var circle = lb1.getContext("2d");
  circle.beginPath();
  circle.arc(500,200,40,0,2*Math.PI);
  circle.stroke();

  var c1=document.getElementById("canvas");
  var client1=c1.getContext("2d");
  client1.rect(300,400,80,80);
  client1.stroke();

  var c2=document.getElementById("canvas");
  var client2=c2.getContext("2d");
  client2.rect(460,400,80,80);
  client2.stroke();

  var c3=document.getElementById("canvas");
  var client3=c3.getContext("2d");
  client3.rect(620,400,80,80);
  client3.stroke();

  var c1line = document.getElementById("canvas");
  var line1 = c1line.getContext("2d");
  line1.moveTo(465,220);
  line1.lineTo(350,400);
  line1.stroke();

  var c2line = document.getElementById("canvas");
  var line2 = c2line.getContext("2d");
  line2.moveTo(500,240);
  line2.lineTo(500,400);
  line2.stroke();

  var c3line = document.getElementById("canvas");
  var line3 = c3line.getContext("2d");
  line3.moveTo(535,220);
  line3.lineTo(655,400);
  line3.stroke();
