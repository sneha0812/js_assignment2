function currentDate(){
  let dates =  new Date();
  let weekDay=["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"];
  let day= weekDay[dates.getDay()];
  let time= dates.toTimeString();
  console.log("Today is"+' '+day+ "\ncurrent time is"+' '+time);
}
currentDate();
