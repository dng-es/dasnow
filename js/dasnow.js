/*!
 * Da Snow v1.0.1
 *
 * @name     dasnow
 * @example  include file in header section <script language="Javascript" src="dasnow.js"></script> 
 * @author   David Noguera Gutierrez
 * @date     2013-10-07
 * @license  Released under GPL license
 */
(function(){  
  
  this.daSnow = function(){
    //create first snow
    var element = document.createElement("span"),
        docHeight = document.body.offsetHeight - 20,
        docWidth = document.body.offsetWidth,
        generalSpeed = docHeight/100;
        distance = 8,
        cloneSnow = null,
        cloneSnowSize = 5;

    element.className = "snow";
    element.id = "snow0";
    element.style.top = 0
    document.body.appendChild(element); 

    //clone snow      
    for (var j = 1; j < (docWidth/distance); j++) {
      cloneSnow = element.cloneNode(false);
      cloneSnow.style.left = ((j*distance)-1) + "px";
      cloneSnow.style.top = Math.floor(Math.random()*docHeight) + 1 + "px";
      cloneSnow.snowSpeed = (Math.random()*generalSpeed)+1;
      cloneSnowSize = (Math.random()*4)+2 + "px";
      cloneSnow.style.width = cloneSnowSize;
      cloneSnow.style.height = cloneSnowSize;
      cloneSnow.id = "snow"+ j;
      document.body.appendChild(cloneSnow);
    }

    //move snow
    var obj = document.getElementsByClassName("snow"),
        numSnow = obj.length,
        current = null,
        posicion = 0,
        snowSpeed = 1;

    setInterval(function(){
      for (var i = 0; i < numSnow; i++) {
        current = obj[i];
        posicion =current.offsetTop;   
        snowSpeed = current.snowSpeed;         
        current.style.top = (posicion<docHeight) ? (posicion + snowSpeed) + "px" : (0 - current.offsetHeight) + "px";
      }
    },20);
  }

  window.onload = function(){
    daSnow();
  }
})();