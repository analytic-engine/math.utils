;(function(math, undefined){
    /* Tidbits of mathematical utlity */
    math.div = function(a,b){
        return Math.floor(a/b);
    }

    math.digits = function(n){
        var q = math.div(n, 10);
        if (q > 0){
            return math.digits(math.div(n, 10)).concat([n % 10]);
        }
        return [n];
    };
})(window.math = window.math || {})
