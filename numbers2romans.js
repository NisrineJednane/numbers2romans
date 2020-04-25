function convertToR(n) {
    //set up list of numbers and their matching roman numeral
    let r2N = {
        M : 1000,
        CM : 900,
        D : 500, 
        CD: 400,
        C : 100,
        XC : 90,
        L : 50,
        XL : 40,
        X : 10,
        IX : 9,
        V: 5,
        IV : 4,
        I : 1,
    };

    //set up variable to log results
    let result = '';

    //loop through the list 
    for (let key in r2N) {

        //find where n becomes greater than n to break loop
        while (n >= r2N[key]) {

            //add roman numeral to result and substract its value from n
            result += key;
            n -= r2N[key];
            //loop again with remainder of n until n = 0
        }
    }
    return result;
}

