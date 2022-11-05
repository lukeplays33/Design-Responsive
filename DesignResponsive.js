var width = 376.346;
var height = 668.2;

if(window.innerWidth < 600) {
   width = width - 80;
   } else if(window.innerWidth < 1600) {
   
   } else {
     const am = window.innerWidth - 1600;
     const div = am / 600;
     width = width + 550 * div
     height = height + 80 * div
   }

var noChangeWidth = width;
var noChangeHeight = height;

var resizedEll = [];

 function getResizedElements () {
  return resizedEll;
}

 function getWidth () {
  return width
}

 function getHeight () {
  return height
}

 function setSize (w,h) {
  width = w;
  height = h;
  
if(window.innerWidth < 600) {
   width = width - 80;
   } else if(window.innerWidth < 1600) {
   
   } else {
     const am = window.innerWidth - 1600;
     const div = am / 600;
     width = width + 550 * div
     height = height + 80 * div
   }
  
  noChangeWidth = w;
  noChangeHeight = h;
}

var am = 0

 function resizeElement (id,include = ['width','height','font-size','padding','margin','border-width','border-radius']) {
  resizedEll.push(id);
  
      document.body.style.width = width + 'px';
  document.body.style.height = height + 'px';
    
  let wcc = document.body.style.width == String(width + 'px') ? width : window.innerWidth
  
  let hcc = document.body.style.height == String(height + 'px') ? width : window.innerHeight
  var styles = window.getComputedStyle(id,null);
  
  for (var i of include) {
    if(i.includes('width')) {
          var w = Number(String(styles[i]).replaceAll('px',''));
    var pc = Number(w / width) * 100;

    id.style.minWidth = String(pc) + '%';
    } else if (i.includes('height')) {
           var h = Number(String(styles[i]).replaceAll('px',''));
      var pc = Number(h / height) * 100;
          id.style.minHeight = String(pc) + '%';
     } else if(i == 'font-size') {
           var h = Number(String(styles.fontSize).replaceAll('px',''));
       var j = window.innerWidth < 600 ? width - 30 : width;
      var pc = Number(h/j) * 70;
          id.style.fontSize = String(pc) + 'vmin';
     } else {
       
       var val = ''
       if(i.includes('top') || i.includes('bottom') || i .includes('left') || i.includes('right')) {
         val = styles.getPropertyValue(i);
       } else {
           val = styles[i];
       }
         
         
           var h = Number(String(val).replaceAll('px',''));
       var j = window.innerWidth < 600 ? width : height;
      var pc = Number(h/j) * 100;
          id.style[i] = String(pc) + 'vmin';
     }
  }
  
          document.body.style.width = window.innerWidth + 'px';
  document.body.style.height = window.innerHeight + 'px';
  
  if(String(id).includes('IFRAME')) {
    id.src = id.src;
  }
  
}

 function resizeAllElements(skip = [], include = ['width','height','font-size','padding','margin','border-width','border-radius']) {
    var el = document.body.getElementsByTagName('*');
  for(var i of el) {
 
    if(skip.includes(i)) {
    } else {
    resizeElement(i,include);
    }
    }
}
