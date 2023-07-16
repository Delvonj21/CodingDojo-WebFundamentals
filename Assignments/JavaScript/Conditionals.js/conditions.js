function rewardMe(){
  let reward = '';

  if (currentTime < 10) {
   reward = 'latte'
  } else if (currentTime >= 10 && currentHour < 16) {
   reward = 'hot chocolate';
  } else if (currentTime >= 16 && currentTime < 22)  {
    reward = isWednesday ? 'strawberry ice cream' : 'vanilla ice cream';
  } else {
    reward = 'sleep';
   
  
  }

  return reward;
 
  }
  
  
  