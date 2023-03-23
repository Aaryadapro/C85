canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

var images_array = ["image_1.jpg", "image_2", "image_3", "image_4"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);
background_image = images_array[random_number];


rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

rover_width = 100;
rover_height = 90;

function add(){
    background_img = new Image();
    background_img.onload = upload_Background;
    background_img.src = background_image;

    rover_img = new Image();
    rover_img.onload = upload_rover;
    rover_img.src = rover_image;
}

function upload_Background(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if(key_pressed == "37"){
        left();
        console.log("left");
    }

    if(key_pressed == "38"){
        up();
        console.log("up");
    }

    if(key_pressed == "39"){
        right();
        console.log("right");
    }

    if(key_pressed == "40"){
        down();
        console.log("down")
    }
}

function up(){
    if(rover_y >0){
        rover_y = rover_y - 10;
        console.log("When up arrow key is pressed , x =" + rover_x+", y="+rover_y);
        upload_Background();
        upload_rover();
    }
}

function down(){
    if(rover_y <=500){
        rover_y = rover_y + 10;
        console.log("When down arrow key is pressed , x =" + rover_x+", y="+rover_y);
        upload_Background();
        upload_rover();
    }
}

function left(){
    if(rover_x >0){
        rover_x = rover_x - 10;
        console.log("When left arrow key is pressed , x =" + rover_x+", y="+rover_y);
        upload_Background();
        upload_rover();
    }
}

function right(){
    if(rover_x <=700){
        rover_x = rover_x + 10;
        console.log("When right arrow key is pressed , x =" + rover_x+", y="+rover_y);
        upload_Background();
        upload_rover();
    }
}