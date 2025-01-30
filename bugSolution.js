function foo(a, b) {
  if (a === null || b === null) {
    console.warn('Null value(s) encountered. Returning default value.');
    return 0; // Or any appropriate default value
  }
  // ... rest of the function
}