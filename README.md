# Firebase Nested Data Access Error

This repository demonstrates a common error when accessing nested data in Firebase and provides a solution.

## Problem
The provided `handleData` function attempts to access nested data within a Firebase snapshot. If the nested data does not exist or if any part of the path is null, the code will throw an error.

## Solution
The solution involves adding null checks to ensure the nested data exists before accessing it.

## Usage
1. Clone the repository.
2. Run `npm install` to install necessary dependencies.
3. Run the sample application. It will demonstrates the error in `bug.js` and the correction in `bugSolution.js`.