//
/*1.Do the below programs in anonymous function and Immediately Invoked Function Expression (IIFE)*/

// a.print odd numbers in an array
// anonymous function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let oddNum=[]
numbers.forEach(function(number) {
  if (number % 2 !== 0) {
    oddNum.push(number);
  }
});
console.log(oddNum)

//output:[ 1, 3, 5, 7, 9 ]

// (IIFE)
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num=[];
(function () {
    Numbers.forEach(function(number) {
      if (number % 2 !== 0) {
        num.push(number);
      }
    });
})();
console.log(num)

// output: [ 1, 3, 5, 7, 9 ]

//b.convert all the strings to tilte caps in a string array
//anonymous function

let stringArray = ["this is a test", "hello world", "anOther example"];

let titleCasedArray = stringArray.map(function(string) {
    return string.toLowerCase().replace(/\b\w/g, function(l) { return l.toUpperCase() });
});
console.log(titleCasedArray);

//output:["This Is A Test", "Hello World", "Another Example"]

//(IIFE)
let array = ["this is a test", "hello world", "anOther example"];

(function() {
    let titleCasedArray = array.map(function(string) {
        return string.toLowerCase().replace(/\b\w/g, function(l) { return l.toUpperCase() });
    });
    console.log(titleCasedArray);
})();

//output:["This Is A Test", "Hello World", "Another Example"]

//c.sum of all numbers in an array
//anonymous function

var number = [1, 2, 3, 4, 5];
var sum = number.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);

//output: 15

//(IIFE)
var Number = [1, 2, 3, 4, 5];

(function() {
    var sum = 0;
    for (var i = 0; i < Number.length; i++) {
        sum += numbers[i];
    }
    console.log(sum); 
})();

//output:15

//d.Return all the prime number in an array
//anonymous function

var N = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primes = N.filter(function(number) {
    if (number < 2) return false;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
});

console.log(primes); 
//output: [2, 3, 5, 7]

//(IIFE)
(function(max){
       let arr=[];
       for(let j=2;j<=max;j++)
       {
        count=0;
        for(let i=1;i<=j;i++)
        {
          if(j%i==0)
          {
           count++;        
          }
        }
          if(count==2)
          {
           arr.push(j);     
          }
       }console.log(arr)})(100);

//output:[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

//e.Return all the palindromes in an array 
//anonymous function

let checkPalindrome = function(str) {
       return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
   };
   console.log(checkPalindrome('racecar'))

//output:True

//(IIFE)
console.log((function(str) {
       return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
   })('madam'));

//f.Return median of two sorted arrays of the same size
//anonymous function

let Arr1 = [1, 3, 5, 7, 9];
let Arr2 = [2, 4, 6, 8, 10];
let Merged = Arr1.concat(Arr2).sort((a,b)=>a-b);
let median=function(mer)
{
 return (mer.length % 2 === 0) ? (mer[mer.length / 2])  : mer[Math.floor(mer.length / 2)];

};
console.log(median(Merged))

//output:6

//(IIFE)
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
let merged = arr1.concat(arr2).sort((a,b)=>a-b);
(function(mer)
{
 console.log((mer.length % 2 === 0) ? (mer[mer.length / 2])  : mer[Math.floor(mer.length / 2)]);

})(merged);

//output:6

//g.Remove duplicate from an array
//anonymous function

let array1=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
let findDuplicates=function (arr) {
       const count = {};
       const duplicates = [];
     
       for (let i = 0; i < arr.length; i++) {
         count[arr[i]] = (count[arr[i]] || 0) + 1;
       }
     
       for (const key in count) {
         if (count[key] > 1) {
           duplicates.push(key);
         }
       }     
       return duplicates;
     }
     console.log(findDuplicates(array1));

 //output:[ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]
 
//(IIFE)
let Array=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
  const duplicates = [];
(function(arr){
       const count = {};   
     
       for (let i = 0; i < arr.length; i++) {
         count[arr[i]] = (count[arr[i]] || 0) + 1;
       }
     
       for (const key in count) {
         if (count[key] > 1) {
           duplicates.push(key);
         }
       }     
     return duplicates;
     })(Array);
   console.log(duplicates);

   //output:[ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]

//h.Rotate an array by k times
//anonylmous function

let rotate=function (arr, k) {
       for (let i = 0; i < k; i++) {
         arr.unshift(arr.pop());
       }
       return arr;
     }
     let arrays=[1,2,3,4,5]
     let n=3
     console.log(rotate(arrays,n))

//output:[ 3, 4, 5, 1, 2 ]

//(IIFE)

let array2=[1,2,3,4,5];
let a=3;
(function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr);
})(array2,a);

//output:[ 3, 4, 5, 1, 2 ]

/*2.Do the below programs in arrow function*/

//a.Print odd numbers in an array

let numb= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = numb.filter(n => n % 2 !== 0);
console.log(oddNumbers);

//output:[ 1, 3, 5, 7, 9 ]

//b.Convert all the strings to title caps in a string array

let words = ["hello", "world", "HOW", "are", "you"];
let titleWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
console.log(titleWords);

//output:[ 'Hello', 'World', 'How', 'Are', 'You' ]

//c.Sum of all numbers in an array 

let digit=[1,2,3,4,5]
let total=digit.reduce((num1,num2)=>num1+num2)
console.log(total)

//output:15

//d.Return all the prime numbers in an array

let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let primeNumbers = A.filter(n => {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
});
console.log(primeNumbers);

//output:[ 2, 3, 5, 7, 11, 13, 17, 19 ]

//e.Return all the palindromes in an array

let word = ["hello", "world", "madam", "level", "civic", "deified"];

let palindromes = word.filter(words => {
    let wordReversed = words.split('').reverse().join('');
    return words === wordReversed;
});
console.log(palindromes);

//output:[ 'madam', 'level', 'civic', 'deified' ]


