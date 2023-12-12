
# Project Title : Corrporate Event Management 

# Project Live Link --->

https://event-management-assignm-2c740.web.app/

A brief description of what this project include :

My Project has some navigation router , user authentication and footer and event managemnet service details.





## Project  Features

- In the top banner section, we've included a convenient background image , title and discription.

- Our event management platform offers a seamless experience for   provide convinent services. When any client choose us , we also provide 100% effecient work.


- Home page we have add our convinet services and price that is 
  most reasonable . When user click hire us button the page rediect
  service details page.


- We also added our previous successfull work history background.
  Here we also shown that , our team also completed 200+ projects.

- Testimonial section our happy client feedback with us for accurate and convinent service provide.

- Team member route alos intro to the member of our company.
  This section our company all of the employ information ,we 
  also provide.

 - We also added ours history of background and our future mission of our company . 

 - Final part , user can be login and register using the firebase
  authentication. 


  <----   Thanks a lot for read the project details.  -------> 


  <---- some questions answer ---- >

  1. Write the correct answer from the following options and give an  explanation (2-5 lines).

        let greeting;
        greetign = {};
       console.log(greetign);


       A: {}
       B: ReferenceError: greetign is not defined
       C: undefined


  1. Ans is : (C). Undefined. 
  
       Explanation:

       In the given code, a variable greeting is declared, but there's a typo in the assignment statement (greetign instead of greeting). As a result, greetign is undefined and trying to log it will print "undefined".   






      2. Write the correct answer from the following options and give an explanation (2-5 lines).


         function sum(a, b) {

                      return a + b;

                       }

                  sum(1, "2");

           A: NaN
           B: TypeError
           C: "12"
           D: 3       



      2. Ans is : (A). NaN

     Explanation:

     In JavaScript, when attempting to add a number and a string, the string is coerced into a number. However, if the string cannot be converted into a valid number (like "2" in this case), the result of the addition will be NaN (Not a Number). Therefore, the expression 1 + "2" results in "12", which cannot be further added with the + operator, leading to the final result being NaN.     







     3. Write the correct answer from the following options and give an explanation (2-5 lines).



       const food = ["🍕", "🍫", "🥑", "🍔"];
       const info = { favoriteFood: food[0] };



     info.favoriteFood = "🍝";

     console.log(food);


      A: ['🍕', '🍫', '🥑', '🍔']
      B: ['🍝', '🍫', '🥑', '🍔']
      C: ['🍝', '🍕', '🍫', '🥑', '🍔']
      D: ReferenceError



   3. Ans is : (A): ['🍕', '🍫', '🥑', '🍔']

     Explanation:

     The food array remains unchanged despite modifying the favoriteFood property of the info object. The info.favoriteFood = "🍝" statement only changes the value of the favoriteFood property within the info object and does not affect the original food array. Therefore, the food array will still contain the original values.  







   4. Write the correct answer from the following options and give an explanation (2-5 lines).


       function sayHi(name) {

            return `Hi there, ${name}`;
        }

    
    
        console.log(sayHi());
        A: Hi there,
        B: Hi there, undefined
        C: Hi there, null
        D: ReferenceError  






     4. Ans is : (B): Hi there, undefined



     Explanation:

     The sayHi function expects an argument name, but when called with sayHi(), no argument is provided. In JavaScript, if a function parameter is not provided a value, it defaults to undefined. Therefore, the returned string will be "Hi there, undefined" as the name is undefined in this case.




     5. Write the correct answer from the following options and give an explanation (2-5 lines).


      let count = 0;
      const nums = [0, 1, 2, 3];



         nums.forEach((num) => {
            if (num) count += 1;
          });



          console.log(count);
         
          A: 1
          B: 2
          C: 3
          D: 4      




    5. Ans is : (C): 3

       Explanation:

       The forEach method iterates over each element in the nums array. In this case, the condition if (num) checks if the current element num is truthy (i.e., not 0), and if so, increments the count by 1. Since there are three truthy elements (1, 2, and 3) in the array, the final value of count is 3.      

