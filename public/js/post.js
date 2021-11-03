//Create Post from Profile page
console.log("hello")
document.querySelector("#post-input").addEventListener("submit", (evt) => {
    evt.preventDefault();
    const fetchObj = {
      description: document.querySelector("#post-description").value,
    //   password: document.querySelector("#signup-password").value,
    //   name: document.querySelector("#signup-name").value,
    
    }
    console.log(fetchObj)
    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(fetchObj),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (!res.ok) {
        console.log(res);
        return alert("trumpet sound")
      } else {
        res.json()
        .then(data => {
          console.log(data)
            // location.href = `/profile/${data.id}`
        })
      }
    })
  })