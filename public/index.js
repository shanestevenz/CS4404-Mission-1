const candidate1 = document.getElementById("candidate1");
const candidate2 = document.getElementById("candidate2");
const candidate3 = document.getElementById("candidate3")
const candidate4 = document.getElementById("candidate4")

candidate1.addEventListener ("click", event => CastVote(event,"candidate1"))

candidate2.addEventListener ("click", event => CastVote(event,"candidate2"))

candidate3.addEventListener ("click", event => CastVote(event,"candidate3"))

candidate4.addEventListener ("click", event => CastVote(event,"candidate4"))



function CastVote(event, candidate) {
    event.preventDefault()

    console.log("Clicked button: " + candidate)
   
          let json = {
              candidate: candidate, //candidate and how much we increment by
              numVotes: 1
          },
          body = JSON.stringify(json)
          console.log(body)
  
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