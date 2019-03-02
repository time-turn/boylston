// JavaScript Document
// Set constraints for the video stream
var constraints = { video: { facingMode: "environment" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
// Take a picture when cameraTrigger is tapped
//cameraTrigger.onclick = function() {
//    cameraSensor.width = cameraView.videoWidth;
//    cameraSensor.height = cameraView.videoHeight;
//    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
//    cameraOutput.src = cameraSensor.toDataURL("image/webp");
//    cameraOutput.classList.add("taken");
//};

var n = 1;

function changeImage() {
  if ( n == 0 ) {
    document.images["home"].src = "img/OldBoylston47.gif";
    n = 1;
  }
  else if ( n == 1 ) {
    document.images["home"].src = "img/NewBoylston4.gif";
    n = 0;
  }
  // else {
  //  document.images["image"].src = "img/AltFuture.png";
  //  n = 0;
 // }
}

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);