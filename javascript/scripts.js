var getAkanName = function(){ 
 //initialise variables and populate them
  var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
  var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
  var gender = prompt("Enter your gender M for Male and F for Female");
  var dateOfBirth = prompt("Enter your date of birth in DD/MM/YYYY format");
  //slice to get day month century year
  var dd = parseInt(dateOfBirth.slice(0,2));
  var mm = parseInt(dateOfBirth.slice(3,5));
  var cc = parseInt(dateOfBirth.slice(6,8));
  var yy = parseInt(dateOfBirth.slice(8,10));
  console.log (dd+" "+" "+mm+" "+cc+" "+yy);

  var genderUp = gender.toUpperCase();

  //validation

  if (genderUp === 'M'||genderUp==='F'){
    if (mm>0 && mm<=12){
      if(dd>0 && dd<=31){
        //alert("Everything is okay");
        //Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
        dayOfWeekRHS = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd);
        dayOfWeekRHSFloor = Math.floor(dayOfWeekRHS);
        console.log(dayOfWeekRHSFloor);
        dayOfWeek = dayOfWeekRHSFloor % 7;
        console.log(dayOfWeek);
        if (genderUp==='M'){
          return(alert("Your male Akan name is "+ maleNames[dayOfWeek]));
        } else {
          return(alert("Your female Akan name is "+ femaleNames[dayOfWeek]));
        }
      }
    }  
  }else{
    return(alert("Invalid Input"));
  }
}  