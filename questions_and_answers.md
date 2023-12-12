<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

Ans is : (C). Undefined.

<i>Explanation:

       In the given code, a variable greeting is declared, but there's a typo in the assignment statement (greetign instead of greeting). As a result, greetign is undefined and trying to log it will print "undefined".</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

Ans is : (A). NaN

<i>Explanation:

     In JavaScript, when attempting to add a number and a string, the string is coerced into a number. However, if the string cannot be converted into a valid number (like "2" in this case), the result of the addition will be NaN (Not a Number). Therefore, the expression 1 + "2" results in "12", which cannot be further added with the + operator, leading to the final result being NaN. </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

Ans is : (A): ['🍕', '🍫', '🥑', '🍔']

<i>  Explanation:

     The food array remains unchanged despite modifying the favoriteFood property of the info object. The info.favoriteFood = "🍝" statement only changes the value of the favoriteFood property within the info object and does not affect the original food array. Therefore, the food array will still contain the original values.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

Ans is : (B): Hi there, undefined

<i>Explanation:

     The sayHi function expects an argument name, but when called with sayHi(), no argument is provided. In JavaScript, if a function parameter is not provided a value, it defaults to undefined. Therefore, the returned string will be "Hi there, undefined" as the name is undefined in this case.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

Ans is : (C): 3

<i>Explanation:

       The forEach method iterates over each element in the nums array. In this case, the condition if (num) checks if the current element num is truthy (i.e., not 0), and if so, increments the count by 1. Since there are three truthy elements (1, 2, and 3) in the array, the final value of count is 3.</i>

</p>
</details>
