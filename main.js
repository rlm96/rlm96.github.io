var cursor = true;
var speed = 420;

setInterval(() => {
   if(cursor) {
     document.getElementById('cursor').style.opacity = 0;
     cursor = !cursor;
   }else {
     document.getElementById('cursor').style.opacity = 1;
     cursor = !cursor;
   }
}, speed);
