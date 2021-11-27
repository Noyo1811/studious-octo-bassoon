Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="capture_image" src="'+data_uri+'">';

    });

}

console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier("",modelLoaded);

function modelLoaded(){
    console.log("Model Is Loaded !!!!")
    
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data1="the first prediction is "+ prediction_1;
    speak_data2=" and the second prediction is "+ prediction_2; 
    var utterThis= new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}
