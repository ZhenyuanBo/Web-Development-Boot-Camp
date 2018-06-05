function scoreAverage(scoreArray){
    var total = 0;
    var average = 0;
    // for (var item in scoreArray){
    //     total += scoreArray[item];
    // }
    
    // for(var i=0; i<scoreArray.length; i++){
    //     console.log(scoreArray[i]);
    //     total += scoreArray[i];
    // }
    scoreArray.forEach(function(score){
        total += score;
    });
    average = total / (scoreArray.length);
    
    console.log(Math.round(average));
}


var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

scoreAverage(scores);
scoreAverage(scores2);