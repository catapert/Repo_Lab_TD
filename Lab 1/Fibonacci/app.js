const n=11 ;

function getFibonacci(n){
    if(typeof n !== "number") return "not allowed";
    if(n<1 || n>10) return "not allowed";
    var a=1;
    var b=1;
    var aux;
    var arr = [];
    n>=1 ? arr = [a] : null;
    n>=2 ? arr = [a,b] : null;
    for(var i = 3; i<=n; i++ ){
        aux = a+b;
        a = b;
        b = aux;
        arr.push(aux);
    }
    console.log(arr);
}

getFibonacci(n);