---
title: "Test content"
description: "just test."
date: "May 14, 2024"
---

Lets say in our program we want to introduce the popular mathematical symbol pi as a variable in our program to solve calculations. We would not want at any point in time for the variable to be modified. That's where constants come in.

>[!Definition]
>In C#, constants are immutable values which are known at compile time and do not change for the life of the program


>[!note]
>In C#, a **modifier** is a keyword added to the declarations of types and type members, altering their behaviors.
>Modifiers in C# include:
> **Access Modifiers**: These control the visibility and accessibility of classes, methods, and variables. They include `public`, `private`, `protected`, `internal`, `protected internal`, and `private protected`
>**Other Modifiers**: These include `abstract`, `async`, `const`, `event`, `extern`, 
>`new`, `override`, `partial`, `readonly`, `sealed`, `static`, `unsafe`, `virtual`, and `volatile`.


```C#
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
// constants are declared by the const modifier
public const double pi = 3.14;
// public is used to control the visibiltity of the class
// as seen constants must be initialized as they are declared
public const int month = 12, days = 365 , weeks = 52;
//Multiple constants of the same type can be declared at the same time
```

```C#
using System;

namespace MyFirstProgram{

    class Program{

          public const double pi = 3.14;

          static void Main(string[] args){
                Console.WriteLine("Hello World");

                Console.WriteLine(pi);
          }
    }
}
```
Make sure to have your constants outside your main method but in your class.
In C#, constants are typically defined within the class scope but outside any method. This makes them accessible to all methods within the class.


