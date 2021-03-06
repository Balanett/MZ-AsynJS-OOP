fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) throw Error(response.statusText);
        else return response.json();
    })
    .then(data => {console.log("data:", data);
    })
    .catch(error => {console.error(error);
    })
