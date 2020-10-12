function houseRobber(houses) {
    let currentMax = 0;
    let prevMax = 0;
  
    for(let i = 0; i < houses.length; i++) {
      let currentHouse = houses[i];
      let newMax = Math.max(currentMax, prevMax + currentHouse)
      prevMax = currentMax;
      currentMax = newMax;
    }
  
    return currentMax
  }
  