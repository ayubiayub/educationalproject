
console.log('Hello World!');
let teamMember1 = document.getElementById("about1")
let teamMember2 = document.getElementById("about2")
let teamMember3 = document.getElementById("about3")
let teamMember4 = document.getElementById("about4")
let teamMember5 = document.getElementById("about5")
let teamMember6 = document.getElementById("about6")
let teamMember7 = document.getElementById("about7")
let teamMember8 = document.getElementById("about8")
let teamMember9 = document.getElementById("about9")
function bio1() {
  teamMember1.innerHTML = `
                           <p>
                             He brings diverse <br>
                             professional experience.<br>
                             Ayub loves to develop<br>
                             new teams and<br> 
                             squeeze their creativity. <br>
                             He is a squash <br>
                             player and fitness crazy.
                           </p>
                           `
}
function bio2() {
  teamMember2.innerHTML = `
                          <p>
                          A university<br>
                          undergraduate from <br>
                          India: a philomath <br>
                          enthusiastic about <br>
                          creative thinking; <br>
                          a bibliophile
                          </p>
                          `
}
function bio3() {
  teamMember3.innerHTML = `
                          <p>
                          He is a high<br>
                          school student from<br>
                          India who wants<br>
                          to be a Full Stack<br>
                          Web Developer.<br>
                          He enjoys learning
                          about <br>
                          Coding and
                          Aeronautics.
                          </p>
                          `
}
function bio4() {
  teamMember4.innerHTML = `
                          <p>
                          He is an enthusiastic <br>
                          developer who is well<br>
                          versed in building modern<br>
                          web applications and software.
                          <br> When he’s not working<br> 
                          Timi enjoys time with
                          his<br> partner and
                          designing graphics.
                          </p>
                          `
}
function bio5() {
  teamMember5.innerHTML = `
                          <p>
                          Oladele Segun is<br> 
                          a designer and a<br> 
                          developer with extensive
                          <br> experience
                          and works with <br>
                          different
                          
                          top brands
                          <br> in
                          
                          Media and <br>
                          Human
                          Resource.
                          
                          </p>
                          `
}
function bio6() {
  teamMember6.innerHTML = `
                          <p>
                          As a team member: <br>She combines flexibility,<br> commitment, and smart work<br> to provide effective<br> solutions.<br> Islam firmly believes<br> in the exchange of ideas.
                          </p>
                          `
}
function bio7() {
  teamMember7.innerHTML = `
                          <p>
                          He is a young<br>
                          gentleman from<br>
                          Kenya in Africa.<br>
                          Nelson is an enthusiastic Web<br>
                          Developer. His slogan is <br>
                          “Life is short, live it<br> to the fullest!"
                          </p>
                          `
}
function bio8() {
  teamMember8.innerHTML = `
                          <p>
                          Logical problems<br>
                          solving has always appealed <br>to him.<br>
                          He finds it amazing
                          how <br>
                          the digital revolution
                          sculpts <br>
                          society at a rate that <br>has never
                          been seen!
                          </p>
                          `
}
function bio9() {
  teamMember9.innerHTML = `
                          <p>
                          
                          </p>
                          `
}



let psw = document.getElementById("password").value;
let repsw = document.getElementById("rePassword").value;

function submit() {
      let name = document.getElementById("name").value
  let email = document.getElementById("email").value
let password = document.getElementById("password").value
let rePassword = document.getElementById("rePassword").value
let p = document.getElementById("p")


  localStorage.setItem("Name", name)
  localStorage.setItem("E-mail : ", email)
  localStorage.setItem( "Password : ", password)
  localStorage.setItem("Repassword : ", rePassword)
  console.log(localStorage)
  
  
  p.textContent = "Hey " + name + "! Your account is being created !"
}


                           
