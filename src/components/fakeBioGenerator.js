import React from 'react';


export default function Generator() {



const one = "Introvert. Gamer. Beer expert. Wannabe pop culture buff. Proud web fanatic. Freelance travel specialist. Friendly food aficionado."

const two = "Friendly web trailblazer. Travel geek. Certified beer specialist. Subtly charming reader."

const three = "Lifelong beer practitioner. Web advocate. Student. Hardcore communicator. Internet lover. Hipster-friendly thinker."

const four=  "Twitter practitioner. Beer advocate. Typical food enthusiast. Zombie guru. Music geek. Friendly alcohol lover."

const five=  "Friend of animals everywhere. Lifelong webaholic. Internet aficionado. Food expert."

const six = "Certified entrepreneur. Coffeeaholic. Bacon buff. Friend of animals everywhere. Web guru. Student."

const seven = "Social media maven. Bacon geek. Amateur writer. Friendly pop culture nerd. Analyst. Evil explorer."

const eight = "Typical analyst. Beer fanatic. Music advocate. Pop culture aficionado. Total tv ninja. Travel specialist."

const nine ="Subtly charming internet geek. Tv ninja. Award-winning bacon guru. Music nerd. Pop culture junkie. Proud travel lover."

const ten = "Beer junkie. Music buff. Evil bacon expert. Tv aficionado. Typical explorer."

function randomBio() {
    var result;
    let  number = Math.random() * 10;
    if (number < 2) {
        const newNum = Math.random() * 3;
            newNum > 2 ? result = two: result = one;
    }if ((number < 4) && ( number > 2 )) {
        const newNum = Math.random() * 5;
            newNum > 5 ? result = three: result = four;
    }if ((number < 6) && ( number > 4 )) {
        const newNum = Math.random() * 7;
            newNum > 6 ? result = five: result = six;
    }if ((number < 8) && ( number > 6 )) {
        const newNum = Math.random() * 9;
            newNum > 8 ? result = seven: result = eight;
    }if ((number < 10) && ( number > 8 )) {
        const newNum = Math.random() * 11;
            newNum > 10 ? result = nine: result = ten;
    } else result = one
    return result;
}

return (
    <p>{randomBio()}</p>
        )

}