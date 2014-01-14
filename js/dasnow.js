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
        docHeight = window.innerHeight - 20,
        docWidth = window.innerWidth,
        generalSpeed = docHeight/100;
        distance = 8,
        cloneSnow = null,
        cloneSnowSize = 5;

    element.className = "snow";
    element.id = "snow0";
    element.style.top = 0
    element.style.borderRadius = "5px";
    document.body.appendChild(element); 

    //clone snow      
    for (var j = 1; j < (docWidth/distance); j++) {
      cloneSnowSize = (Math.random()*4)+2 + "px";
      cloneSnow = element.cloneNode(false);
      cloneSnow.snowSpeed = (Math.random()*generalSpeed)+1;
      cloneSnow.style.left = ((j*distance)-1) + "px";
      cloneSnow.style.top = Math.floor(Math.random()*docHeight) + 1 + "px";    
      cloneSnow.style.width = cloneSnow.style.height = cloneSnowSize;
      document.body.appendChild(cloneSnow);
    }

    //move snow
    var obj = document.getElementsByClassName("snow"),
        numSnow = obj.length,
        current = null,
        position = 0,
        snowSpeed = 1;

    setInterval(function(){
      for (var i = 0; i < numSnow; i++) {
        current = obj[i];
        position = current.offsetTop;   
        snowSpeed = current.snowSpeed;         
        current.style.top = (position<docHeight) ? (position + snowSpeed) + "px" : (0 - current.offsetHeight) + "px";
      }
    },20);
  }

  window.onload = function(){
    daSnow();
  }
  
})();
