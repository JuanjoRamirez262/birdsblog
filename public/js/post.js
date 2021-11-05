//Create Post from Profile page
document.querySelector("#post-input").addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log("working")
  let bird, location;
  switch(document.querySelector("#bird-selection").value){
    case "American Robin":
      bird = 1;
      break;
    case "Eagle":
      bird = 2;
      break;
    case "Condor":
      bird = 3;
      break;
  }
  switch(document.querySelector("#location-selection").value){
    case "Mount Rainier National Park":
      location = 1;
      break;
    case "North Cascade":
      location = 2;
      break;
    case "Cheryy Creek Falls":
      location = 3;
      break;
  }

  const fetchObj = {
    description: document.querySelector("#post-description").value,
    bird_id: bird,
    location_id: location,

  }
  console.log(fetchObj)
  fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(fetchObj),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res)
    if (res.ok) {
      window.location.reload()
    } 
  })
})