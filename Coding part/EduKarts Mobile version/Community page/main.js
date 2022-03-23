let result = []
  let Title = document.getElementById("title")
  let Question = document.getElementById("question")
  let title = document.getElementById("question-title")
  let question = document.getElementById("question-question")
  let user = document.getElementById("user")
  let textBottom = document.getElementById("text-bottom")
  let time = new Date()
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  localStorage.setItem("Title", user)

  function sub() {
      user.innerHTML += `
                        <div style="background-color: pink; padding: 10px; color: darkred; border-radius: 10px; margin-bottom: 10px; overflow-x:scroll;">
                        
                        <br>
                        <h3>
                        ${title.value}
                        
                        </h3>
                        <h5>
                        username
                        </h5>
                        <p style="font-size: 13px;">
                         ${days[time.getDay     ()]} ${time  .getDate()} ${month[time.getMonth() + 1]}
                    
                      </p>
                      <br>
                      <p>
                        ${question.value}
                      </p>
                      <br>
                      <button id="like-btn">
                      👍🏽
                      </button>
                      
                      <button id="like-btn">
                        👎🏾
                      </button>
                      
                      <button id="like-btn">
                        🔑
                      </button>
                      <br>
                      </div>
                      `
                      title.value = ''
                      question.value = ''
                      
  textBottom.scrollIntoView(true)
  
  } 
