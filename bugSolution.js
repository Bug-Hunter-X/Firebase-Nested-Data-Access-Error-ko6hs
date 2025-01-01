function handleData(snapshot) {
  if (snapshot.exists()) {
    const data = snapshot.val();
    // Accessing nested data with null checks
    const nestedData = data.nested ? (data.nested.property || null) : null;
    if(nestedData !== null){
        //Process data
    }else{
        //Handle null data
    }
    // ...rest of your code
  }
}