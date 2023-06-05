const myFtech = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "User 1"
    })
})
myFtech
.then(response=> 
    response.json()
).then(data => console.log(data))
.catch(err => console.log(err))


// to check that api working or not 

const toFetch = fetch('https://jsonplaceholder.typicode.com/users23')
toFetch.then(res => {
    if (res.ok) {
        console.log("Success fully Fetch")
    } else {
        console.log("Data is not Fetch 'Something went's wrong!'")
    }
    res.json()})
.then(data => console.log(data))
.catch(err => console.log(err, "This is the Error"))


// So this is all About the basices of the fetch api's