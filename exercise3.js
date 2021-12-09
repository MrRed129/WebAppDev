fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
    const uncomplete = data.filter(foo => foo.completed
      ).map(foo => ({userId : foo.userId, title : foo.title}))
      console.log(uncomplete)
  })
  .catch(function(err) { 
    console.log(err);
  });
