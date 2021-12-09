fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
    const incompleteTasks = data.reduce((acc, foo) => {
      foo.completed ? acc : 
      acc.push({ userId : foo.userId, title : foo.title })
      return acc;
    }, []);
    console.log(incompleteTasks);
  })
  .catch(function(err) {
    console.log(err);
  });
