function divide (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined || typeof numOne !=="number" || typeof numTwo !=="number") {
        return undefined;
    }else if (typeof numOne === "number" && typeof numTwo=== "number"){
     return numOne / numTwo;
    }
}