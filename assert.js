var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        console.log("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    },

    isEqual: function(assertion1, assertion2){
        if(assertion1 !== assertion2){
            console.log("Assertion failed: " + assertion1 + " is not equal to " + assertion2);
        }
        else{
            console.log("Test passed " + assertion1 + " is equal to " + assertion2); 
        }
    },

  };

  function it (description, fun){
      console.log(description)
      fun();
  }




  //bracket colourizer 