//this function is based on a calorie counting app I found online: http://www.nwhiker.com/calorieburn.html
export function calorieCalc(weight,pace,distance,elevation)
{
	//convert to ft
	var distanceFeet = distance*3.28;
	var distanceMiles = distanceFeet/5280;

	var invertedPace = 1/pace;	
	var estimatedTime = invertedPace*distanceMiles;
	console.log(estimatedTime);
	var hours = Math.floor(estimatedTime);
	var minutes = Math.floor((estimatedTime%1)*60);
  	//this calculates the difficulty of the hike based on elevation gain and distance
 	var difficulty=(((((elevation/distanceFeet*100)*4)+(Math.sqrt(Math.pow(distanceMiles,2)*6))))/2.5);
  
  	//this calculates the calories based on weight, pace, and difficulty
  	var cal = ((((weight * 2462.4)+44044)/Math.pow(1/(pace/60),1.0045))+(Math.sqrt((Math.pow(difficulty,3)))));
  	
  	var response = "This is approximately how many calories you will burn: " + cal + ". It will take you approximately "+hours+" hours and "+minutes+" minutes.";
  	document.getElementById("result").innerHTML = response;//.concat(cal);


	return cal;
};
