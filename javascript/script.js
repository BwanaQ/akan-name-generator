//initialise variables and populate them
var dateOfBirth = "28-02-1983"
var dd = dateOfBirth.slice(0,2)
var mm = dateOfBirth.slice(3,5)
var cc = dateOfBirth.slice(6,8)
var yy = dateOfBirth.slice(8,10)
var fullYear = parseInt(cc+yy)
console.log(fullYear)
var maleNames=[]
var femaleNames = []
if (mm>0 && mm<=12){
  console.log ("Month is Okay");
  if (dd>0 &&dd<=31){
    if (mm==1||mm==3||mm==5||mm==7||mm==8||mm==10||mm==12){
      if (dd>0 && dd<=31){
        console.log("Date is Okay!");
      } else {
        console.log("invalid Date");
      }
    }else if (mm==4||mm==6||mm==9||mm==11){
      if (dd>0 && dd<=30){
        console.log("Date is Okay!");
      } else {
        console.log("Invalid Date");
      }
    }else if (mm==2){
      if (fullYear%4==0 && fullYear%400==0){
        if (dd>0 && dd<=29){
          console.log("Date is Okay");
        } else {
          console.log("Invalid Date");
        }
      }else{
        if (dd>0 && dd<=28){
          console.log("Date is Okay");
        } else{
          console.log("Invalid Date");
        }
      }
    }else{
      console.log("Invalid Date");
    }
  } else {
    console.log("Invalid Date");
  }  
}else{
  console.log ("Invalid Month");
  if (dd>0&&dd<=31){
    console.log("Date is okay")
  } else {
    console.log("Invalid Date")
  }
}