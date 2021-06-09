var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top: player_y, left: player_x });
        canvas.add(player_object);
    });
}

function new_image(new_image) {
    fabric.Image.fromURL(new_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({ top: player_y, left: player_x });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypress = e.KeyCode
    console.log(keypress)

    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10
        block_image_height = block_image_height + 10
        document.getElementById("current_height").innerHTML = block_image_height
        document.getElementById("current_width").innerHTML = block_image_width
    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10
        block_image_height = block_image_height - 10
        document.getElementById("current_height").innerHTML = block_image_height
        document.getElementById("current_width").innerHTML = block_image_width
    }

    if (keypressed == '38') {
        up();
        console.log("up")
    }
    if (keypressed == '40') {
        down();
        console.log("down")
    }
    if (keypressed == '37') {
        left();
        console.log("left")
    }
    if (keypressed == '39') {
        right();
        console.log("right")
    }

    if (keypressed == '87') {
        new_image('wall.jpg');
        console.log("w")
    }

    if (keypressed == '71') {
        new_image('ground.png');
        console.log("g")
    }
    if (keypressed == '87') {
        new_image('light_green.png');
        console.log("l")
    }
    if (keypressed == '84') {
        new_image('trunk.jpg');
        console.log("t")
    }
    if (keypressed == '82') {
        new_image('roof.jpg');
        console.log("r")
    }
    if (keypressed == '68') {
        new_image('dark_green.jpg');
        console.log("d")
    }
    if (keypressed == '85') {
        new_image('unique.png');
        console.log("u")
    }
    if (keypressed == '67') {
        new_image('cloud.jpg');
        console.log("c")
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height)
        console.log("When Up arrow key is pressed, X =" + player_x + " , Y =" + player_y)
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height)
        console.log("When Up arrow key is pressed, X =" + player_x + " , Y =" + player_y)
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width)
        console.log("When left arrow key is width, X =" + player_x + " , Y =" + player_y)
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_y >= 850) {
        player_y = player_y - block_image_width;
        console.log("block image width = " + block_image_height)
        console.log("When right arrow key is pressed, X =" + player_x + " , Y =" + player_y)
        canvas.remove(player_object);
        player_update();
    }

}