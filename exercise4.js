fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
     const totalCompleted = data.reduce( (acc, foo) => 
          foo.completed ? acc += 1 : acc
     ,0
     )
     console.log(totalCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });
