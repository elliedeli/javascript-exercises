const fibonacci = function(num) {

    num = parseInt(num);
    if (num == 0){
        return 0;
    }
    if (num < 0 ){
        return "OOPS";
    }
    if (num == 1 || num == 2)
        {
            return 1;
        }
        
    let fibSum = fibonacci(num-1) + fibonacci(num-2); 
    
    return fibSum;
};

// Do not edit below this line
module.exports = fibonacci;
