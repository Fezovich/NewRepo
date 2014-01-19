var lightGrid =[["one","two","three","four"],["five","six","seven","eight"],["nine","ten","eleven","twelve"],["thirteen","fourteen","fifteen","sixteen"]];
var level1 =[[1,0,1,1],[0,1,0,0],[0,0,1,0],[0,1,0,0]];
var clickCount=0;


$(document).ready(function() {
   var name = prompt("What is your name?");
   $("#userName").html(name); 
   $("#info").on("click", "div", initialise); 
   $("#outer").on("click", "div", display);
});

function initialise(){

reset();

$("#scoreValue").html(clickCount);  
for(var i =0;i<4; i++){                                   // verticle
    for(var k=0;k<4;k++){                                 // horizontal
        if(level1[i][k] === 1){                       // set up level 1
         toggleLights("#"+lightGrid[i][k]);
         toggleLights("#"+lightGrid[i][k]);
        }else{
         toggleLights("#"+lightGrid[i][k]);
        }
    }
}
}

function display(){
    var lightNum = this.id;
    var id = "#"+lightNum;
    
if($(id).hasClass('red')|| $(id).hasClass('yellow') ){
    
for(var i =0;i<4; i++){                                   // verticle
    for(var k=0;k<4;k++){                                 // horizontal
        if(lightNum == lightGrid[i][k]){
            setLights(i,k);
       }
     }
}
 toggleLights(id);
 clickCount++;
 $("#scoreValue").html(clickCount);
 winCheck();
}
}

function setLights(vert, horiz){
    
  if(vert !== 0){
      setUp(vert, horiz);
  }
  if(vert !== 3){
      setDown(vert, horiz);
  }
  if(horiz !== 0){
      setLeft(vert, horiz);
  }
  if(horiz !== 3){
      setRight(vert, horiz);
  }
}

function setUp(y, x){
    y--;
    var targetId = "#"+lightGrid[y][x];
    toggleLights(targetId);
}

function setDown(y, x){
    y++;
    var targetId = "#"+lightGrid[y][x];
    toggleLights(targetId);
}

function setLeft(y, x){
    x--;
    var targetId = "#"+lightGrid[y][x];
    toggleLights(targetId);
}

function setRight(y, x){
    x++;
    var targetId = "#"+lightGrid[y][x];
    toggleLights(targetId);
}

function toggleLights(id){
  
if($(id).hasClass('red')){
    $(id).removeClass('red');
    $(id).addClass('yellow');
    }else{
    $(id).removeClass('yellow');
    $(id).addClass('red');
    }
  
}

function winCheck(){
    
var numYellow=0;

for(var i =0;i<4; i++){                                   // verticle
    for(var k=0;k<4;k++){                                 // horizontal
        if($("#"+lightGrid[i][k]).hasClass('yellow')){
            numYellow++;
       }
    }
}

if(numYellow == 16){
    alert("You won in "+ clickCount +" moves!");
    reset();
}
}

function reset(){
    
    clickCount= 0;
    for(var i =0;i<4; i++){                                   // verticle
        for(var k=0;k<4;k++){                                 // horizontal
         $("#"+lightGrid[i][k]).removeClass('yellow');
         $("#"+lightGrid[i][k]).removeClass('red');
        }
    }
}