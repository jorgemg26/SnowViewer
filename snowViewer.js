document.addEventListener("DOMContentLoaded", function(){

    //Array to iterate the objects, and with the properties of the image, its text and its circle
    const images = [
        {src: "photo1.jpg", text: "Photo 1", circle: "circle1"},
        {src: "photo2.jpg", text: "Photo 2", circle: "circle2"},
        {src: "photo3.jpg", text: "Photo 3", circle: "circle3"},
        {src: "photo4.jpg", text: "Photo 4", circle: "circle4"},
        {src: "photo5.jpg", text: "Photo 5", circle: "circle5"},
        {src: "photo6.jpg", text: "Photo 6", circle: "circle6"},
    ]

    //Big visible image
    let imgVisible = document.getElementById("photo");
    //Text of the big image
    let text = document.getElementById("text");

    //Arrows and hands over them
    let leftArrow = document.getElementById("leftArrow");
    leftArrow.style.cursor= "pointer";
    let rightArrow = document.getElementById("rightArrow");
    rightArrow.style.cursor= "pointer";

    //Index to know the image of the array that is currently visible
    let index = 0;

    //Function to update what we see in the viewer (image and text)
    function updateViewer(){
        imgVisible.setAttribute("src", images[index].src);                      //We change the image visible to the index one
        text.innerText = images[index].text;                                    //We change the text visible to the index one
        //Loop to clear the circles
        for (let i=0; i<images.length; i++){
            let clearCircle = document.getElementById(images[i].circle);
            clearCircle.setAttribute("src", "emptyCircle.png");
        }
        //Get the circle of the current index
        let currentCircle = document.getElementById(images[index].circle);
        //Fill the circle of the current index
        currentCircle.setAttribute("src", "fullCircle.png");
    }

    //Loop to iterate the array and assign a click to each circle
    for (let i=0; i<images.length; i++){
        let circle = document.getElementById(images[i].circle);
        circle.style.cursor= "pointer";    
        //Event that is activated when we click in one of the circles
        circle.addEventListener("click", function(){
            index = i;                                                          //The new index would be the lap of the loop where we are
            updateViewer();                                                     //We execute the function that we created before to update what we see (the image and the text) 
        });
    }

    //What happens when we click on the left arrow
    leftArrow.addEventListener("click", function() {
        index--;                                                               //We decrease 1 to the index
        //If the index is less than 0, we go to the last image
        if (index<0){
            index = images.length - 1;
        }
        updateViewer();                                                         //We update the viewer because we modified the index
    });

    //What happens when we click on the right arrow
    rightArrow.addEventListener("click", function() {
        index++;                                                               //We add one to the index
        //If the index is the same or more than the number of images, we go to the first one
        if (index>=images.length){
            index = 0;
        }
        updateViewer();                                                         //We update the viewer because we modified the index
    });
});