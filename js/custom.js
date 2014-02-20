function ConvertTimeToDate(time)
//given a time in miliseconds, returns a string representing the time converted to days, hours, minutes, and seconds
{
   
  var currTime = time.valueOf();
  //alert(currTime.toString());
  var numDays, numHours, numMins, numSecs;
  var output = "";
  var dayConstant = 24*60*60*1000; //number of miliseconds on a day
  //alert(dayConstant.toString());
  var hourConstant = dayConstant/24; //number of miliseconds in an hour
  var minConstant = hourConstant/60; //number of miliseconds in a minute
  var secConstant = minConstant/60; //number of miliseconds in a second
  numDays = Math.floor(currTime/dayConstant);
  currTime = currTime - numDays*dayConstant;
  numHours = Math.floor((currTime)/hourConstant);
  currTime = currTime - numHours*hourConstant;
  numMins = Math.floor((currTime)/minConstant);
  currTime = currTime - numMins*minConstant;
  numSecs = Math.floor((currTime)/secConstant);
  output = numDays.toString() + ":" + numHours.toString() + ":" + numMins.toString() + ":" + numSecs.toString();
  return output;
}


  function Countdown()
  {
  var today=new Date();
  var schoolStart = new Date(2014,1,3, 9, 25);
  var timeRemaining = schoolStart.valueOf() - today.valueOf();
  //alert(timeRemaining.toString());
  //timeRemaining = new Date(timeRemaining);
  var output = ConvertTimeToDate(timeRemaining);
  //var output = timeRemaining.toLocaleDateString();
  document.getElementById("time").innerHTML=output;
  }

  //setInterval(function(){Countdown()},1000);


