const posts = [
  {
    title: "#001 JavaScript Variables",
    content: `
When learning a new programming language, regardless of what it is, variables are one of the most fundamental and necessary concepts. Every piece of code you write is going to require the use of variables, so let's delve in and learn how to declare and use variables effectively in JavaScript.

## What is a variable?

A variable, in simple terms, is a container for data which is stored in memory for later use in our code. A classic analogy to use is to think of a labelled box, with the name of the kind of data it is on the outside, and inside is the actual data itself.

Variables are made up of key-value pairs, the key being the ‘label’, and the value of course being the data. The value is assigned to the key and the variable is then held in memory, typically on a computer. This variable can later be referred to in our code, and its data retrieved from memory, allowing us to use it and manipulate it.

## How do you create a variable?

Creating a variable is known as declaring a variable, or simply variable declaration, and there are 3 different ways of declaration in JavaScript although the method is the same throughout, the key word differs.

Take a look at the example below, which shows a snippet of declaring the same variable, in the 3 different ways;

\`\`\`jsx
var greeting = "Hello World"
const greeting = "Hello World"
let greeting = "Hello World"
\`\`\`

The word ‘greeting’ to the left of the equals operator is the key, and the string to the right is the value. To the far left, is the keyword, the different means of variable declaration and variables are always declared like this.

Of course, in an actual coding environment you would not be able to declare the same 3 variables with the same key, you would get something called a ReferenceError, due to the fact that that variable name is already being referenced in memory.

Another important thing to mention is that in JavaScript, declaring variables with camelCase is a widely used convention, so instead of declaring a variable called newgreeting, NewGreeting, Newgreeting etc., it should be declared as newGreeting.  

## The Scope

Now, you might be wondering what on earth the difference is between var, const and let. However, before we are able to understand that, we need to look at a concept called scope.

Scope refers to where abouts in the code variables are declared, and therefore where they can be accessed.

In JavaScript, there are two main types of scope which are Global Scope and Local Scope.

Global scope refers to the ‘main code space’, any variable that is not declared within a code block such as a function or loop is considered to be in the global scope. If a variable is declared in the global scope it can be accessed anywhere in our code, for example;

\`\`\`jsx
var globalVariable = "I am global";

function showGlobal() {
  console.log(globalVariable);
}

showGlobal(); // Output: I am global
\`\`\`

On the other hand, Local Scope refers to code which is declared within a function or loops code block, and can only be accessed in that code block. Trying to access a locally scope variable in global will result in an error, for example;

\`\`\`jsx
function showLocal() {
  var localVariable = "I am local";
  console.log(localVariable);
}

showLocal(); // Output: I am local
console.log(localVariable); // Error: localVariable is not defined
\`\`\`

A little tip that I personally use, as a general rule of thumb a parent can always access its child but not the other way round. What that essentially means is if a function is a child of global, the global scope can look inside the function but the function cannot reach out into the global scope.

## So…var, let and const?

Let's begin with var, in modern JavaScript it is also a very popular convention not to use this method of declaring a variable which we are not going to go in-depth about, but the reason for this summed up is because it opens up opportunities for the variable to be mutated outside of where it is declared.

let and const are the most common ways of declaring a variable, they both act the same in terms of scope but have very different uses when it comes to actual functionality.

let is used to declare a block-scoped variable, which means it is only accessible in the block it is declared, and let can have its value reassigned. const is the opposite, its also block scoped but its value cannot be re-assigned, its more appropriately used when hard-coding data.
    `,
    author: "Charley Crowson",
    created_at: new Date("2024-08-10"),
    updated_at: new Date("2025-02-18"),
    image: "",
    tags: ["JavaScript", "Fundamentals"],
    collection: "JavaScript Basics",
    num: 1,
  },
];

export default posts;
