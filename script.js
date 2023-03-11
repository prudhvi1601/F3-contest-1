let score = { red: 0, blue: 0, green: 0, yellow: 0 };

function openingCeremony(race) {
    setTimeout(() => {
        console.log("Let the games begin");
        console.log(score);
        race(longJump);
    }, 1000);
}

function race(longJump) {
    setTimeout(() => {
        // console.log("race");
        // let num =  Math.floor(Math.random()*15);
        score.red = Math.floor(Math.random()*16);
        score.blue = Math.floor(Math.random()*16);
        score.green = Math.floor(Math.random()*16);
        score.yellow = Math.floor(Math.random()*16);
        firstLeast();
        secondLeast();
        console.log(score);
        longJump(highJump);
        console.log(score);
    }, 3000);
}

function firstLeast(){
    if((score.red < score.blue) && (score.red <score.green) && (score.red <score.yellow)) {
        console.log("red 50")
    }
    else if((score.blue < score.red) && (score.blue <score.green) && (score.blue <score.yellow)) {
        console.log("blue 50")
    }
    else if((score.green < score.blue) && (score.green <score.red) && (score.green <score.yellow)) {
        console.log("green 50")
    }
    else if((score.yellow < score.blue) && (score.yellow <score.red) && (score.yellow <score.green)) {
        console.log("yellow 50")
    }
}

function secondLeast(){
    if((score.red < score.blue && score.red > (score.green && score.yellow)) || (score.red < score.green && score.red > (score.blue && score.yellow)) || (score.red < score.yellow && score.red > (score.green && score.blue))){
        console.log("red 25");
    }
    else if((score.blue < score.red && score.blue > (score.green && score.yellow)) || (score.blue < score.green && score.blue > (score.red && score.yellow)) || (score.blue < score.yellow && score.blue > (score.green && score.red))){
        console.log("blue 25");
    }
    else if((score.green < score.red && score.green > (score.blue && score.yellow)) || (score.green < score.blue && score.green > (score.red && score.yellow)) || (score.green < score.yellow && score.green > (score.blue && score.red))){
        console.log("green 25");
    }
    else if((score.yellow < score.red && score.yellow > (score.blue && score.green)) || (score.yellow < score.blue && score.yellow > (score.red && score.green)) || (score.yellow < score.green && score.yellow > (score.blue && score.red))){
        console.log("yellow 25");
    }
}

function longJump(highJump) {
    console.log("longjump");
    highJump(awardCeremony);
}

function highJump(awardCeremony) {
    console.log("hughjump");
    awardCeremony();
}

function awardCeremony() {
    console.log("awardceremony");
}

openingCeremony(race);