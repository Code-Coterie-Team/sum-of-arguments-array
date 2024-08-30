function sumOfArgumentsArray() {
    let getInput =document.getElementById("argumentsArray").value;
    let showResult = document.getElementById("showResult");
    let array = getInput.split(",");
    let sumArray = 0;
   
    //console.log("arr : " +typeof(array[2]));
    for (let i = 0; i < array.length; i++) {
        sumArray += Number(array[i])
     }
     console.log("sum of arguments array : "+ sumArray);
     showResult.innerHTML = "sum of arguments array : " + sumArray;

}


