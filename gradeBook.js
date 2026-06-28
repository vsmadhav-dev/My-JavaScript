const array = [100 , 98 , 94 , 84 , 93];
function getAverage(arr){
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    result += arr[i];

  }
  result = result / arr.length;
  return result;
}

function getGrade(score){
  if(score == 100){
    return "A+";
  }else if(score >= 90 && score <= 99){
    return "A";
  }else if(score >= 80 && score <= 89){
    return "B";
  }else if(score >= 70 && score <= 79){
    return "C";
  }else if(score >= 60 && score <= 69){
    return "D";
  }else{
    return "F";
  }
}
function hasPassingGrade(score){
  if(getGrade(score) == "F"){
    return false;
  }
  else{
    return true;

  }
}
 function studentMsg(arr , score){
  const avg = getAverage(arr);
  const grade = getGrade(score);
  const isPass = hasPassingGrade(score);
  if(isPass == true){
    return`Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
  }else{
     return`Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
  }
 }
 let score = "100"
 console.log(studentMsg(array , score));