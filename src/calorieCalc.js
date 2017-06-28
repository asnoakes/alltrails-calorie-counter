function calc(form) { 
  //get weight in either lbs or kg
  var weight = form.wt.value

  //get pace for either miles or km
  var pace = (form.pmin.value * 60);  

  //get duration and convert duration to hours, from hours, and minutes
  var dur = ((form.hrs.value * 1) + (form.min.value / 60));
  
  //get elevation gain during hike
  var elv = form.elev.value;
  
  //check for necessary values
  if(form.wt.value * 1 == 0)
  {alert("Please enter your Weight");
   return false;}
  if(pace == 0)
  {alert("Please enter your Pace");
   return false;} 
  if(dur == 0)
  {alert("Please enter Duration");
   return false;} 
  if(elv == 0)
  {alert("Please enter Elevation");
   return false;}
 
  //insert zeros in blank fields
  if(form.pmin.value == "") form.pmin.value = 0;
  if(form.hrs.value == "") form.hrs.value = 0;
  if(form.min.value == "") form.min.value = 0;
  if(form.elev.value == "") form.elev.value = 0;
  
  //eliminate decimal places in time values
  hrs2 = form.hrs.value;
  form.hrs.value = Math.floor(hrs2);
  form.min.value = (form.min.value * 1) + (hrs2 - Math.floor(hrs2)) * 60;
  min2 = form.min.value;
  form.min.value = Math.floor(min2);
  pmin2 = form.pmin.value;
  form.pmin.value = Math.floor(pmin2);

  //correct for minutes >= 60
  if(form.min.value >= 60) 
  {min1 = form.min.value / 60;
   form.min.value = Math.round(60 * (min1 - Math.floor(min1)));
   form.hrs.value = form.hrs.value * 1 + Math.floor(min1);} 
    
  //calculate calories burned!
  dist = ((dur/(form.pmin.value/60)));
  form.dist.value = parseInt(dist);
  diff=(((((elv/(dist*5280)*100)*4)+(Math.sqrt((dist*dist)*6))))/2.5);
  form.hikediff.value = Math.round(diff);
  
  
  cal = ((((weight * 2462.4)+44044)/Math.pow(pace,1.0045))+(Math.sqrt((Math.pow(diff,3)))));
  
  form.calhr.value = parseInt(cal);
  form.caltot.value = parseInt(cal * dur);

    //extra stuff
  if (form.min.value < 10)
  {form.min.value = 0+form.min.value}
} 