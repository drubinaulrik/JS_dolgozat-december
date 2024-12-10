//1. feladat - Is this a triangle?
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

//2. feladat - Credit Card Mask
// return masked string
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

//3. feladat - Number to digit tiers
function createArrayOfTiers(num) {
    return [...String(num)].map((_, i, arr) => arr.slice(0, i + 1).join(''));
}

//4. feladat - Easy Time Convert
function timeConvert(num) { 
    let minutes = 0
    let hours = 0
    if(num > 60 && num == 60){
        minutes = num - 60
    }   
    else{
        minutes = num
        hours = "00"
    } 
    
    if(minutes > 60 && minutes == 60){
        hours += 1 && minutes == minutes - 60
    }

    if (minutes > 60){
        hours += 1
    }

    return hours + ":" + minutes;
}
