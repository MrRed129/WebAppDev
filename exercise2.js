fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
     const titles = data.map(foo => foo.title
     )
     console.log(titles)
  })
  .catch(function(err) { 
    console.log(err);
  });
