function sum() {
    let sum = 0;
    for (let i = 10; i <= 99; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum());





function m2cisual() {
    let count = 0;
    for (let i = 100; i <= 999; i++) {
        if (i % 10 === 2) {
            count++;
        }
    }
    return count;
}

console.log(m2cisual());






function hem7hem8() {
    let sum = 0;
    for (let i = 100; i <= 999; i++) {
        if (i % 7 === 0 && i % 8 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(hem7hem8());





function arraycemi() {
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
        sum += array1[i];
    }
    return sum;
}
let array1 = [1, 2, 3, 4, 5];
console.log(arraycemi());






function maxeded(arr) {
    let maxqiymet = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxqiymet) {
            maxqiymet = arr[i];
        }
    }
    return maxqiymet;
}

let max = [1, 2, 3, 4, 5];
console.log(maxeded(max));




function tersine(str) {
    return str.split('').reverse().join('');
}

console.log(tersine("hello world"));





function saitsayi(str) {
    const saitler = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (saitler.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(saitsayi("hello world")); 





function sadecemleri(reqem) {
    if (reqem <= 1) return false;
    for (let i = 2; i <= Math.sqrt(reqem); i++) {
        if (reqem % i === 0) return false;
    }
    return true;
}function sumPrimes(arr) {
    return arr.filter(sadecemleri).reduce((sum, reqem) => sum + reqem, 0);
}

console.log(sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



function yeniarray(kohne){
    var yeni = [] ;
    for (let i = 0;i < kohne.length;i++){
        if (yeni.indexOf(kohne[i]) === -1) {
            yeni.push(kohne[i]);
        }
    }return yeni;
}let kohne = [1,2,3,4,5];
console.log(yeniarray(kohne));



function funksiya(start, end) {
    let netice = [];
    for (let i = start; i <= end; i++) {
        netice.push(i);
    }
    return netice;
}
console.log(funksiya(1, 5));




function ededitap(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] !== array[i] + 1) {
            return array[i] + 1;
        }
    }
    return null; 
}
console.log(ededitap([1, 2, 3, 4, 5, 6, 8, 9, 10]));





function vurmacedveli(num) {
    let netice = [];
    for (let i = 1; i <= 10; i++) {
        netice.push(`${num} x ${i} = ${num * i}`);
    }
    return netice;
}
console.log(vurmacedveli(5));




function IsPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(IsPalindrome('madam'));
console.log(IsPalindrome('hello'));




function bolunenler(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (number % array[i] !== 0) {
            return false;
        }
    }
    return true;
}
console.log(bolunenler([1, 2, 4], 8)); 
console.log(bolunenler([1, 2, 5], 8));






function Atekler(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return false;
        }
    }
    return true;
}
console.log(tekler([1, 3, 5])); 
console.log(tekler([1, 2, 3])); 