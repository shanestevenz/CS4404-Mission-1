
fetch("/getResults", {
})
    .then(function (response) {
        return response.json();
    })
    .then(db => {
        //TODO render as  results
    });


function CastVote() {

  //  let candidate = todoForm.elements.todo,
  
        
        let json = {
            candidate: 1, //candidate and how much we increment by
        },
        body = JSON.stringify(json)


    fetch('/vote', {
        method: 'POST',
        body,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (response) {
            // do something with the reponse
            return response.json();
        })

        .then(function (data) {
           // document.querySelector("form").reset();
            // addRowToTable (data);
        });
}