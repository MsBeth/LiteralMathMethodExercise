let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

console.log(warmHugs.toUpperCase());

warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

let beenImpaled = "Oh, look at that. I've been impaled.";

console.log(beenImpaled.slice(18));

let dotDotDot = "...";

let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

console.log(Math.PI);

let randomNum = Math.random();
randomNum *= 3;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);


// BONUS

console.log(" Let It Go!".toUpperCase().repeat(2).trim());

let reindeers = "Reindeers are better than people.";

console.log(reindeers.replace(/ /g, "_"));

console.log(Math.SQRT2);


// Extra Bonus: Completed on a single line
var newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1) + 7);

console.log(newRandomNumber);


let randomNumber = Math.ceil(Math.random() * 17) + 6;

