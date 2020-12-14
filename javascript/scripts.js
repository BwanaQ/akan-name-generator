var getAkanName = function(){ 
 //initialise variables and populate them
  var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
  var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
  var radios = document.getElementsByName('gender');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      // do whatever you want with the checked radio
      var gender=radios[i].value;
      // only one radio can be logically checked, don't check the rest
      break;
    }
  }
 
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  console.log(gender +" "+ dateOfBirth);

  //slice to get day month century year
  var dd = parseInt(dateOfBirth.slice(0,2));
  var mm = parseInt(dateOfBirth.slice(3,5));
  var cc = parseInt(dateOfBirth.slice(6,8));
  var yy = parseInt(dateOfBirth.slice(8,10));

  //validation

  if (gender==='M'||gender==='F'){
    if (mm>0 && mm<=12){
      if(dd>0 && dd<=31){
        dayOfWeekRHS = (((cc/4) -2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd);
        dayOfWeekRHSFloor = Math.floor(dayOfWeekRHS);
        dayOfWeek = dayOfWeekRHSFloor % 7;
        if (gender==='M'){
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