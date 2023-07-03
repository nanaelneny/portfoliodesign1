
function flipImage(){
    document.getElementById('flip-image')
    .src="./resources/images/Image_Editor.png";
    document.getElementById('changename')
    .innerHTML="Witch-King of Angmar";
    document.body.style.backgroundImage = "url(./resources/images/maximiliano-moretto-nazgul-1500.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
};

function flipBack(){
    document.getElementById('flip-image')
    .src="./resources/images/Cropped_Image.png";
    document.getElementById('changename')
    .innerHTML="Fokuo Isaac Opoku";
    document.body.style.backgroundImage = "url(./resources/images/1079655.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
};

