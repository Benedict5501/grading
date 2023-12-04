var songtoplay = new Audio("audio/make.mp3")
var songtoplay_2 = new Audio("audio/shout.mp3")
var songtoplay_3 = new Audio("audio/pity.mp3")
var songtoplay_4 = new Audio("audio/No Evidence.mp3")
var songtoplay_5 = new Audio("audio/play.mp3")
var songtoplay_6 = new Audio("audio/clap.wav") 



function checkvalue() {
    if (num.value != "") {
        if (num.value >= 0 && num.value < 30) {
            console.log("F");
            display.innerHTML ="F- You are a failure😭😧"
            songtoplay.play()
            songtoplay_2.pause()
            songtoplay_3.pause()
            songtoplay_4.pause()
            songtoplay_5.pause()
            songtoplay_6.pause()


        }else if (num.value >= 30 && num.value < 40) {
            console.log("E");
            display.innerHTML ="E- You manage pass F 😧😨"
            songtoplay.pause()
            songtoplay_2.play()
            songtoplay_3.pause()
            songtoplay_4.pause()
            songtoplay_5.pause()
            songtoplay_6.pause()


        } if (num.value >= 40 && num.value < 45) {
            console.log("D");
            display.innerHTML ="D- You try but read harder😬"
            songtoplay.pause()
            songtoplay_2.pause()
            songtoplay_3.play()
            songtoplay_4.pause()
            songtoplay_5.pause()
            songtoplay_6.pause()


        } if (num.value >= 45 && num.value < 55) {
            console.log("C");
            display.innerHTML ="C- For your mind u don do beter thing ba🧐🧐"
            songtoplay.pause()
            songtoplay_2.pause()
            songtoplay_3.pause()
            songtoplay_4.play()
            songtoplay_5.pause()
            songtoplay_6.pause()


        } if (num.value >= 55 && num.value < 75) {
            console.log("B");
            display.innerHTML ="B"
            songtoplay.pause()
            songtoplay_2.pause()
            songtoplay_3.pause()
            songtoplay_4.pause()
            songtoplay_5.play()
            songtoplay_6.pause()


        } if (num.value >= 75 && num.value <= 100) {
            console.log("A");
            display.innerHTML ="A- RESPECT🧑‍🎓"
            songtoplay.pause()
            songtoplay_2.pause()
            songtoplay_3.pause()
            songtoplay_4.pause()
            songtoplay_5.pause()
            songtoplay_6.play()


        }
    } else{
        alert("Please fill in the empty space")
    }
}

// function Music() {
//     var songtoplay = new Audio("audio/shout.mp3")
//     songtoplay.play();
// }