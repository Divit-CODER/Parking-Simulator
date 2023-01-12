canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_img="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;


function add(){
background_imgtag=new Image();
background_imgtag.onload=uploadbackground;
background_imgtag.src=background_img;

rover_imgtag=new Image();
rover_imgtag.onload=uploadrover;
rover_imgtag.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='37'){
        left();
    }
    if(keypressed=='38'){
    up();
    }
    if(keypressed=='39'){
        right();
    }
    if(keypressed=='40'){
        down();
    }
}
 function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
    uploadbackground();
    uploadrover();
    }
 }

 function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();
    }
 }

function left(){
    if(rover_x>=0){
        rover_x=rover_x-`10;
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadbackground();
        uploadrover();
    }
}