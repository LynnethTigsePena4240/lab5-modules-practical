import { toUpperCase } from "./stringModule.js";
import { findMax } from "./arrayModule.js";

export function add(a, b)
{
    return(a+b);
}
export function subtract(a, b)
{
    return(a-b);
}

export default function multiply(a, b)
{
    return a*b;
}

export function addAndLogUpper(a, b)
{
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}

export function multiAndMax(arr, a)
{
    var result = findMax(arr);
    var result1 = result*a;
    console.log(toUpperCase(result1.toString()));
}