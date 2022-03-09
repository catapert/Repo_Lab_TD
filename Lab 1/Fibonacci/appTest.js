function test(){
    console.log(getFibonacci() == "not allowed" ? "Passed" : "Failed");
    console.log(getFibonacci(0) == "not allowed" ? "Passed" : "Failed");
    console.log(getFibonacci(11) == "not allowed" ? "Passed" : "Failed");
    console.log(getFibonacci(2) == JSON.stringify [1,1] ? "Passed" : "Failed");
    console.log(getFibonacci(5) == JSON.stringify [1,1,2,3,5] ? "Passed" : "Failed");
}
test();