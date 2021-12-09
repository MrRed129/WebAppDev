fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
    const totalCompleted = data.reduce((foo, acc) => {
      if (foo.completed) {
        acc[foo.userId] === undefined
          ? (acc[foo.userId] = 1)
          : (acc[foo.userId] += 1);
      }
      return acc;
    }, {});
    console.log(totalCompleted);
  })
  .catch(function(err) {
    console.log(err);
  });
