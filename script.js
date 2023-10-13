'use strict';
const follower=document.getElementById("follower");
const body=document.getElementById("body");
const one=document.getElementById("one");
const two=document.getElementById("two");


//! Creating a function
function movement(details) {
    follower.style.left=details.clientX+"px";
    follower.style.top=details.clientY+"px";
    
    if (details.clientX<=960) {
        body.style.backgroundColor="red";
        follower.style.backgroundColor="lightblue";
        follower.style.boxShadow="0 0 20px 5px blue";
        one.style.transform="scale(1)";
        two.style.transform="scale(0)";
        

    }
    else if (details.clientX>960) {
        body.style.backgroundColor="lightblue";
        follower.style.backgroundColor="red";
        follower.style.boxShadow="0 0 20px 5px red";
        one.style.transform="scale(0)";
        two.style.transform="scale(1)";
    }
}
//Creating a eventlistner

body.addEventListener("mousemove",movement);