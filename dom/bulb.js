function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "pic_bulboff.gif";
    } else {
      image.src = "pic_bulbon.gif";
    }
  }


{/* <img id="myImage" onclick="changeImage()" src="pic_bulboff.gif" width="100" height="180"></img> */}