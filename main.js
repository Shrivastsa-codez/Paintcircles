canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_positition_of_x, last_positition_of_y;
color = "black";
width_of_line=1;
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    color=document.getElementById("Color").value;
width_of_line=document.getElementById("width_of_line").value;
radius=document.getElementById("Radius").value;
mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouseEvent="mouseup";   
}


canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseleave";   
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    current_position_of_mouse_x= e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY-canvas.offsetTop;
    
    if(mouseEvent=="mousedown"){ 
        console.log("current position of x and y coordinates = ");
        console.log("x="+ current_position_of_mouse_x + "y="+ current_position_of_mouse_y);
        
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2* Math.PI);
        ctx.stroke();
        
    }
        
        last_positition_of_x=current_position_of_mouse_x;
        last_positition_of_y=current_position_of_mouse_y;
}



