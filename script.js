console.log("welcome to TIC TAC TOE")


let turnmusic = new Audio("spacebar-click-keyboard-199448.mp3");
let music = new Audio("");
let gameover = new Audio("brass-fanfare-reverberated-146263.mp3");
let isgameover = false;

let turn = "X";
let btn = document.querySelector("#reset")
// reset button
btn.addEventListener("click", async () => {
    turnmusic.play();
    location.reload();
    turnmusic.play();

})
// function  to change the turn

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// function to check the winner




const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [0, 3, 6, -5, 15, 90],
        [6, 7, 8, 5, 25, 0],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "   WON"
            isgameover = true
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            gameover.play();
        
        }
    })

}


// game logic                                        

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnmusic.play();
            checkwin();

            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "TURN FOR " + turn;
            }
        }
    })
});

