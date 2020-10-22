
let JohnScore1 = 89;
let JohnScore2 = 120;
let JohnScore3 = 103;
let averageScoreJohn = (JohnScore1 + JohnScore2 + JohnScore3)/3;
console.log(averageScoreJohn);
 
let MikeScore1 = 116;
let MikeScore2 = 94;
let MIkeScore3 = 123;
let averageScoreMike = (MikeScore1 + MikeScore2 + MIkeScore3)/3;
console.log(averageScoreMike);
 
if (averageScoreMike > averageScoreJohn) {
     console.log(`Mike's team wins with ${averageScoreMike} points`);
} else if(averageScoreMike == averageScoreJohn) {
     console.log(`the same average score`);
} else {
     console.log(`John's team wins with ${averageScoreJohn} points`);
 }
 
let MaryScore1 = 97;
let MaryScore2 = 134;
let MaryScore3 = 105;
let averageScoreMary = (MaryScore1 + MaryScore2 +MaryScore3)/3;
console.log(averageScoreMary);

if (averageScoreMary > averageScoreMike && averageScoreMary > averageScoreJohn){
    console.log(`Mary's team wins with ${averageScoreMary} points`);
} else if (averageScoreJohn > averageScoreMary && averageScoreJohn > averageScoreMike){
    console.log(`John's team wins with ${averageScoreJohn} points`);
} else if (averageScoreMike > averageScoreMary && averageScoreMike > averageScoreJohn) {
    console.log(`John's team wins with ${averageScoreMike} points`);
} else {
    console.log(`No one wins`);
}