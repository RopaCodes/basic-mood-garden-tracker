// get the date
var date = new Date()

// extract current date info
var currentMonth = date.getMonth()
var currentDate = date.getDate()
var currentDay = date.getDay()
var currentYear = date.getFullYear()

// months
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

var monthTitle = document.getElementById("the_month")
monthTitle.innerHTML = months[currentMonth]

// store clicked circle reference
var activeCircle = null

// store colour values
var emotionColors = {
    "Ecstatic": "#FFD93E",
    "Happy": "#FD7792",
    "Okay": "#DD8BD9",
    "Sad": "#B3B3B3",
    "Angry": "#DC3D3D"
}
var flowerMeanings = {
    "Ecstatic": "./assets/Sunflower.png",
    "Happy": "./assets/Tulip.png" ,
    "Okay": "./assets/Orchid.png",
    "Sad": "./assets/LilyOfTheValley.png",
    "Angry": "./assets/Rose.png"
}

// open dialog when circle is clicked
document.querySelectorAll(".day").forEach(function(day) {
    day.addEventListener("click", function() {
        activeCircle = this;
        document.getElementById("pick_dialog").classList.toggle("show")
    });
});

calendarBtn = document.getElementById("calendar_btn")
calendarBtn.addEventListener('click', function(){
    calendarBtn.style.position= "absolute"
    document.getElementById("flowersId").classList.toggle("show")
    document.getElementById("calendarId").classList.toggle("show")
})

// close dialog and change colour when emotion is picked
document.querySelectorAll(".emotions_log p").forEach(function(emotion) {
    emotion.addEventListener("click", function() {
        var selected = this.textContent;
        console.log("Selected:", selected);

        if (activeCircle) {
            activeCircle.style.backgroundColor = emotionColors[selected];
            activeCircle.style.border = "3px solid white";
        }
        // create and add the flower image
        var index = activeCircle.getAttribute("data-index");
        var flowerImg = document.createElement("img");
        flowerImg.src = flowerMeanings[selected];
        flowerImg.alt = selected;
        flowerImg.style.left = (index * 80) + "px";  // each flower is 50px apart
        document.querySelector(".flowers").appendChild(flowerImg);
        

        document.getElementById("pick_dialog").classList.remove("show");
        document.getElementById("flowersId").classList.remove("show")
        document.getElementById("calendarId").classList.remove("show")
    });
});