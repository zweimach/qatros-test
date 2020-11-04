# qatros-test

These are my solutions for the frontend engineer recruitment test at [Qatros](https://qatros.com/).

## Theoretical Questions

- Q: What is a version control system? And name one example that you have used.  
  A: Version control is a system (mostly comes as a computer program) to manage changes to documents such as plain-texts and source codes. I mostly used Git, but I have tried Mercurial and Bazaar in the past.

- Q: How do frontend apps communicate with its backend? Name some methods.  
  A: They communicate with APIs through well-known 'mediums' such as HTTP and usually adhere to a specific API design like SOAP, REST, or GraphQL.

- Q: Explain the differences between `null` and `undefined` in JavaScript?  
  A: `null` is of type `object` and is mainly used as an intentional invalid state, while `undefined` is of its type `undefined` and usually occurs as an unintentional invalid state of uninitialized variables and non-returning functions.

- Q: What are the differences between `==` and `===` in JavaScript?  
  A: Unlike the strict equality operator (`===`), the equality operator (`==`) will attempt to convert the operands to accommodate same-type comparisons.

- Q: How would you compare two objects in JavaScript?  
  A: I would use `JSON.stringify`.

- Q: What does the following code print?

  ```js
  console.log("one");
  setTimeout(function () {
    console.log("two");
  }, 0);
  console.log("three");
  ```

  A: 'one', 'three', and then 'two'.

- Q: If i have a `var str = "hello world"`, write a function so could I get `str.reverse()` return `"dlrow olleh"`?  
  A:

  ```js
  String.prototype.reverse = function () {
    return this.split("").reverse().join("");
  };
  ```
