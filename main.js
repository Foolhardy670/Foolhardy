var quarter = 0;
var dimes = 0;
var nickels = 0;
var pennies = 0;
var change = 0;


document.querySelector(".Calculate").addEventListener("click", function(){
    change = Number(window.prompt("Please Enter Number (1 - 99) "));
    document.querySelector(".change").value = change;

    if (Number.isNaN(change)){
        console.log("invalid Number");
        document.querySelector(".change").value = "INVALID NUMBER";
        document.querySelector(".change").style.backgroundColor = "	#ff033e";
        document.querySelector(".change").style.color = "white";

        document.querySelector(".alert").style.color = "#ff033e";
        document.querySelector(".alert").textContent = "INVALID NUMBER! please enter a valid number not letters";

    }

    if (change > 99){
        console.log("invalid Number");
        document.querySelector(".change").value = "INVALID NUMBER";
        document.querySelector(".change").style.backgroundColor = "	#ff033e";
        document.querySelector(".change").style.color = "white";
        document.querySelector(".alert").style.color = "#ff033e";
        document.querySelector(".alert").textContent = "Please Enter a Number between 1 through 99";

        change = 0;
    }



    // check for quarters 
    while (change >= 25){
        quarter++;
        change = change - 25;
        document.querySelector(".quarters").value = quarter;
        
    }

    //debug
        //console.log("quarter" + quarter);
        //console.log(change);

    // check for dimes
    while (change >= 10){
        dimes++;
        change = change - 10;
        document.querySelector(".dimes").value = dimes;

    }

    // debug
    //console.log("dimes"+dimes);
    //console.log(change);

    while (change >= 5){
        nickels++;
        change = change - 5;
        document.querySelector(".nickels").value = nickels;
    }

    if (change < 5){
        pennies = change;
        document.querySelector(".pennies").value = pennies;
    }

    if (quarter == 0){
        document.querySelector(".quarters").value = 0;
    }

    if (nickels == 0 ){
        document.querySelector(".nickels").value = 0;
    }

   if (dimes == 0){
       document.querySelector(".dimes").value = 0;
   }


 quarter = 0;
 dimes = 0;
 nickels = 0;
 pennies = 0;
 change = 0;

    //debug
     //console.log("Nickels"+nickels);
     //console.log("pennies" + pennies)
    //console.log( "Change" + change);


});

document.querySelector(".Clear").addEventListener("click", function(){

    document.querySelector(".quarters").value = "";
    document.querySelector(".nickels").value = "";
    document.querySelector(".dimes").value = "";
    document.querySelector(".pennies").value = "";
    document.querySelector(".change").value = "";
    document.querySelector(".change").style.backgroundColor = "white";
    document.querySelector(".alert").textContent = "";
    

});








