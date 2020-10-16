function lonelyNumber(array) {
    let lonely = array.filter(function(value){
      return array.indexOf(value) === array.lastIndexOf(value)
    })
    
    return lonely[0];
  }