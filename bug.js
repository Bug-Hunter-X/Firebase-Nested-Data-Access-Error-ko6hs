function handleData(snapshot) {
  if (snapshot.exists()) {
    const data = snapshot.val();
    // Accessing nested data
    const nestedData = data.nested.property; // This could throw an error
    // ...rest of your code
  }
}