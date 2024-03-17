const myImage = document.querySelector("img")

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src")
    if(mySrc === "images/swiz.jpg") {
        myImage.setAttribute("src", "images/swiz-1.jpg")
    } else {
        myImage.setAttribute("src", "images/swiz.jpg")
    }
}

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Please enter your name")
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = `Welcome, ${myName}`
    }
    
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}