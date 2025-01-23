// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

// Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show() {
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

git// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

// Practice tasks
{
    // 1. Create one block using {} and declare variables using let, const, and var.
    // let   $practiceLet   = "I'm a block-scoped let";
    // const $practiceConst = "I'm a block-scoped const";
    var   $practiceVar   = "I'm a block-scoped var";

    // 2. Then, try to reassign these variables within the curly braces {}. Check for any errors that may occur.
    let   $practiceLet   = "Let reassignment";
    const $practiceConst = "Const reassignment";
    var   $practiceVar   = "Var reassignment";
}

// 3. Next, try to reassign the same variables outside the block {} and check if assignment outside the sope of variables where the variables are assigned can be done or not.
let   $practiceLet   = "Let reassignment";
const $practiceConst = "Const reassignment";
var   $practiceVar   = "Var reassignment";

