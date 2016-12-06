function iteration (step, node1Conn, node2Conn, node3Conn, currentNode, latency, cpu, region ) {
    this.step = step;
    this.node1Conn = node1Conn;
    this.node2Conn = node2Conn;
    this.node3Conn = node3Conn;    
    this.currentNode = currentNode;
    this.latency = latency;
    this.cpu = cpu;
    this.region = region;    
}

function initialize() {
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
function reset(){
  location.reload();
  // var canvas = document.getElementById('canvas');
  // var context = canvas.getContext('2d');
  // context.clearRect(0, 0, canvas.width, canvas.height);
  // initialize();
}

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

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function roundRobin(){
    //constructor(step, node1Conn, node2Conn, node3Conn, currentNode, latency, cpu, region )

   var node1 = 1;
   var node2 = 2;
   var node3 = 3;
   var node1Conn = 0;
   var node2Conn = 0;
   var node3Conn = 0;
   var table = [];
   var n = 1;

   for( var i = 0; i < 20; i++, n++) {
         var it;

         if( n > 3)
           n = 1;

         if( n === 1) {
            node1Conn++;
            it = new iteration(i,node1Conn,node2Conn,node3Conn,node1,0,0,"USA");
         }
         else if( n === 2) {
            node2Conn++;
            it = new iteration(i,node1Conn,node2Conn,node3Conn,node2,0,0,"USA");  
         }
         else if( n === 3) {
            node3Conn++;
            it = new iteration(i,node1Conn,node2Conn,node3Conn,node3,0,0,"USA");
         }
   
         table.push(it);          
   }   
   printResults(table);
   simulateColors(table);
   return table;
}

function lowestLatency(numIterations){
   var node1 = 1;
   var node2 = 2;
   var node3 = 3;  
   var node1Conn = 0;
   var node2Conn = 0;
   var node3Conn = 0;
   var table = [];
   var lowLatencyNode = 0;
   var latencya;
   var latencyb;
   var latencyc;
   var lowLatencyVal;

   for( var i = 0; i < 20; i++) {

      var it;

      
      latencya = Math.floor((Math.random() * 200) + 1);
      latencyb = Math.floor((Math.random() * 200) + 1);
      latencyc = Math.floor((Math.random() * 200) + 1);

      lowLatencyVal = Math.min(latencya,latencyb,latencyc);
      
      if(latencya === lowLatencyVal)
         lowLatencyNode = 1;
      else if(latencyb === lowLatencyVal)
         lowLatencyNode = 2;
      else
         lowLatencyNode = 3;
      if( lowLatencyNode === 1) {
         node1Conn++;
         it = new iteration(i,node1Conn,node2Conn,node3Conn,node1,latencya,0,"USA");
      }
      if( lowLatencyNode === 2) {
         node2Conn++;
         it = new iteration(i,node1Conn,node2Conn,node3Conn,node2,latencyb,0,"USA");
      }
      if( lowLatencyNode === 3) {
         node3Conn++;
         it = new iteration(i,node1Conn,node2Conn,node3Conn,node3,latencyc,0,"USA");
      }
      
      table.push(it);
   }
   return table;
}

//TODO// is the parameter required?
function leastConnections(maxConnections) {
     var node1 = 1;
     var node2 = 2;
     var node3 = 3;  
     var node1Conn = 0;
     var node2Conn = 0;
     var node3Conn = 0;
     var table = [];
     var minNode = 0;
     var i = 0;  

     //generate the # of initial connections per node. NOTE: node connections are fixed in simulation.
     node1Conn =  0;
     node2Conn = 15;    
     //numIterations would also be used as a max in this simulation.
     node3Conn = maxConnections;

     while(node1Conn != node2Conn || node2Conn != node3Conn) {

        var it;
        minNode = Math.min(node1Conn,node2Conn,node3Conn);

        if(minNode === node1Conn) {
           node1Conn++;
	   it = new iteration(i,node1Conn,node2Conn,node3Conn,node1,0,0,"USA");
	}

        else if(minNode === node2Conn) {
           node2Conn++;
	   it = new iteration(i,node1Conn,node2Conn,node3Conn,node2,0,0,"USA");
        }
        else if(mindNode === node3Conn) {
           node3Conn++;
	   it = new iteration(i,node1Conn,node2Conn,node3Conn,node3,0,0,"USA");
        }
          
        i++;
        table.push(it);

     }

   return table;
}
//node 1 has 1x weight, node 2 has 2x weight, node 3 has 3x weight
function ratio(numIterations){

   var node1 = 1;
   var node2 = 2;
   var node3 = 3;  
   var node1Conn = 0;
   var node2Conn = 0;
   var node3Conn = 0;
   var table = [];
   var node1Max = 1;
   var node2Max = 2;
   var node3Max = 3;
   var currentN1 = 0;
   var currentN2 = 0;
   var currentN3 = 0;
   var n = 1;
   var doneIteration = false;
  
   for( var i = 0; i < numIterations; i++,n++) {
   
      var it; 
      
      if ( n > 3)
         n = 1;
         
      if(currentN3 === node3Max) {
         currentN1 = 0;
         currentN2 = 0;
         currentN3 = 0;
      }
      
      if(n === 1 && currentN1 < node1Max) {
         currentN1++;
         node1Conn++;
         it = new iteration(i,node1Conn,node2Conn,node3Conn,node1,0,0,"USA");

      }
      else if(n === 1 && currentN1 === node1Max) {
         n++;
      }
      if(n === 2 && currentN2 < node2Max) {
         currentN2++;
         node2Conn++;
         it = new iteration(i,node1Conn,node2Conn,node3Conn,node2,0,0,"USA");

      }
      else if( n ===2 && currentN2 === node2Max){
         n++;
      }
      if( n === 3  && currentN3 < node3Max){
         currentN3++;
         node3Conn++;
         it = new iteration(i,node1Conn,node2Conn,node3Conn,node3,0,0,"USA");

      }
               
      table.push(it);      
   }
   
   console.log(table);
   return table;
}





var s = leastConnections(20);
console.log(s);


function printResults(arr){

  tableLength = arr.length;

  var tbl = document.getElementById("output");
  for( var stepSim = 0; stepSim < tableLength; stepSim++ ){
        
    var tr = document.createElement('tr');

    var td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].step + 1));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].node1Conn));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].node2Conn));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].node3Conn));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].currentNode));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].latency));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].cpu));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode(arr[stepSim].region));
    tr.appendChild(td);

    tbl.appendChild(tr);
    }
}

function simulateColors(arr) {
    tableLength = arr.length;
    var x = document.getElementById("canvas");

    var fun = function(i) {
      
        if (i === tableLength) {
            return;
        }
      
        current = arr[i].currentNode;

        if (current == 1) {
          // there
            var line1 = x.getContext("2d");
            line1.beginPath();
            line1.moveTo(465, 220);
            line1.lineTo(350, 400);
            line1.strokeStyle = 'red';
            line1.lineWidth = 10;
            line1.stroke();
            line1.closePath();

            setTimeout(
              function() {
                line1.beginPath();
                line1.moveTo(465, 220);
                line1.lineTo(350, 400);
                line1.strokeStyle = 'black';
                line1.lineWidth = 10;
                line1.stroke();
                line1.closePath();

                fun(++i);
              }
              ,
              2000);


        }

        if (current == 2) {
            var line2 = x.getContext("2d");
            line2.beginPath();
          //asdsadsad
            line2.moveTo(500, 240);
            line2.lineTo(500, 400);
            line2.strokeStyle = 'red';
            line2.lineWidth = 10;
            line2.stroke();
            line2.closePath();

            setTimeout(
              function() {
                line2.beginPath();
                line2.moveTo(500, 240);
                line2.lineTo(500, 400);
                line2.strokeStyle = 'black';
                line2.lineWidth = 10;
                line2.stroke();
                line2.closePath();

                fun(++i);
              }
              ,
              2000);
        }

        if (current == 3) {
            var line3 = x.getContext("2d");
            line3.beginPath();
            line3.moveTo(535, 220);
            line3.lineTo(655, 400);
            line3.strokeStyle = 'red';
            line3.lineWidth = 10;
            line3.stroke();
            line3.closePath();


            setTimeout(
              function() {
                line3.beginPath();
                line3.moveTo(535, 220);
                line3.lineTo(655, 400);
                line3.strokeStyle = 'black';
                line3.lineWidth = 10;
                line3.stroke();
                line3.closePath();

                fun(++i);
              }
              ,
              2000);
    }

  }
  fun(0);
}
