Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

//Question 1 Multiples of 3 or 5
function solution(num){
  let sum = 0;
  for(let i = 3; i < num; i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i;
  }
  return sum;
}

/*
  In this problem we are looking for multiples of 3 or 5 that are less than the given parameter, `num`. We, first, declare a variable name sum and set it to the value of zero. We, then, use a for loop to iterate through the number given to us in the argument. We then start at 3 since 0,1,2 is not a multiple of 3 or 5 and we want a positive number. We end at `num` because we only want multiples up `num` that is less than equal to the argument. In line 7 we are setting a if condition statement to check if the multiples is divisible by 3 or 5. If so, then it will add the to the variable sum. If it's not a multiple of 3 or 5, the sum variable will remain with the value of 0.
*/

// Question 2 Who likes it?

function likes(names) {
  if(names.length === 0)return 'no one likes this'
  if(names.length === 1)return `${names} likes this`
  if(names.length === 2)return `${names[0]} and ${names[1]} like this`
  if(names.length === 3)return `${names[0]}, ${names[1]} and ${names[2]} like this`
  if(names.length >= 4)return `${names[0]}, ${names[1]} and ${names.length-2 } others like this`
}

/*
 This code challenge asks us to create a like system to know how many people like a post. In line 20, we declare an if condition, which states if the length of the array is equal to 0 or is an empty array, it should return a string 'no one like this.' In line 21, we set another if condition; if the length of names is equal to 1, it should return the person's name and 'that they like this.' In line 22, I set another if condition if the name length is equal to, then it returns names[0] and names[1] because we are using the index to access the value of the array, which is the person name and we do the same thing for line 23 and then return which individual like the post. In line 24, we create a final if condition, which states if the array length is equal to for or more, return the value of names[0] and name[1] because we want to access the values of the array and the the value of the array and the final one we would like to access is names.length-2 because we just want all the values in the array except last two and it will amount of people that like this.
*/
// question 3


function findUniq(arr) {
  
  let counter = {}
  
  for(let i = 0; i < arr.length; i++){
    if(counter[arr[i]]){
      counter[arr[i]] += 1
    } else{
      counter[arr[i]] = 1      
    }
  }
  for(let element in counter){
    return parseFloat(Object.keys(counter).find(key => counter[key] === 1))
  }
}
/*
  In this problem, we want to find the outlier in the given array; we first declare an empty object to keep track of how many times a number occurs. On line 37 we can create a  for loop to iterate through the given array. Then we set and  if the condition wants to check the key value. In line 39, we want to check  if we see the same value we increment; else, we give it a value of one; if we are seeing this value for the first time on line 44, I create a for-in loop to check the property in value in the counter object. I want to return the value into a number, and we want to access the object key in our counter object. We then find a method to check if the key value only shows up once we return that value.

*/
// question 4

function findOutlier(arr){
  let even = [];
  let odd = [];
  for(let i = 0; i < arr.length ; i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i])
    }else{
      odd.push(arr[i])
    }
  }
  if(even.length > odd.length){
    return odd[0];
  }else{
    return even[0];
  }
}
/*
In this problem, we want to find the outlier in an array of numbers. I first declare two empty arrays, one for even and one for odd. Then we want to create  a for loop to iterate through the given array, Then I create and if condition, which states the value of the index is  divisible by two; we want to push it into the even array, then else - we want to push it into our odd array.I create another if condition that states if the length of the even array is less than the length of the odd array, then when we want to return the first index in the odd, else we want to return the first index in the even.

*/

//Question 5

function duplicateCount(str){
  let obj = {};
  let count = 0;
  
  for(let i = 0; i < str.length; i++){
    if(obj[str[i].toUpperCase()]){
      obj[str[i].toUpperCase()]++;
    }else{
      obj[str[i].toUpperCase()] = 1;
    }
  }
  for (let i in obj){
    if(obj[i] > 1){
      count++
    }
   }
  return count
}

/*
In this problem we want to find the value in a string that appears more than once and they want us to return it.
I create an empty obj to keep track of characters how many times a letter or number occurs in a string. I iterated through the string using a for loop. I set conditions in order to place keys and values inside of the object. I add the toUpperCase method when referring to an index in order to have all case characters the same and it will work if I were to use toLowerCase instead.
In the first condition I stated that if the key already existed in the object increment it by the value of one. If not, the key to be added with the value of 1.
After my object is completed I iterate through my object then make an if statement that gives us if the key in the object has a value greater than 1, count would be incremented by the value of one which was initialized in the beginning the function with the value of 0, finally I return count.

*/

//question 6

function moveZeros(arr) {
  let zeroArr = [];
  let numArr = [];
  
  for(let i in arr){
    if(arr[i] === 0){
      zeroArr.push(arr[i])
    }else if(arr[i] !== 0){
      numArr.push(arr[i])
    }
  }
  return numArr.concat(zeroArr)
}

/*
This problem is asking us to move all zero at the end of the array by preserving the order. I did this by declaring two empty arrays. `zeroArr` for the zeros and `numArr` for the numbers, then created a for in loop to iterate through the given array. I set an if condition so that if the value of index is strictly  equal to zero then push zero into the `zeroArr`, if not strictly to zero then we would push it into the `numArr`. We, then, return the numArr combined with the zeroArr using the concat method.


*/

//question 7
function pigIt(str){
  return str.split(' ').map(word => {
  if ((/\W/).test(word)){
    return word
  }else{
    return word.substring(1) + word[0] + "ay"
    }
  }).join(' ')
}
}

/*
In this problem it asks us to take the first letter of the word, then put it at the end word, and add `’ay’` to the end of the word. First, I converted the string into an array using the `split(‘ ’)` method. Then, I iterated through the array of words using the `map()` method to  test whether or not the character is a punctuation. If it is, The word would return as it is. If not =, I would remove the first index of the word using the `’substring’` method, place the first index and add `’ay’` and concatenate it all together using the `+`. Lastly, we join the array together using the `join(‘ ‘)` method in order to convert it back into a string.
*/




// Ben or Carmen, I have been trying to fix my code and I don't why everything is comment out.
