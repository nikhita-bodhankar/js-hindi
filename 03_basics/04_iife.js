// immediately invoked functions expressions (iife)

(function chai(){
    //named iife
  console.log("DB Connected");
  
})();

( (name) => {
  console.log(`DB Connected two ${name}`);
  
})("Rani")

// chai()