fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
     const completed = data.filter(foo => foo.completed && foo.id > 100
     )
     completed.forEach( foo => {
      console.log(`${foo.title} - ${foo.completed} - ${foo.id}`)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });
