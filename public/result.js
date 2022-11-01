
fetch("/getResults", {
})
    .then(function (response) {
        return response.json();
    })
    .then(db => {
        //TODO render as  results
    });

