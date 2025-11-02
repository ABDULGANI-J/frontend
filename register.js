// function registerdata(e){
//     console.log(e)
// }

// let sample = document.getElementById("registration").addEventListener("submit",function(event){
//     event.preventDefault();
//     let formdata = new FormData(event.target);
//     let newObj=Object.fromEntries(formdata.entries());
//     console.log(formdata);
//     console.log(newObj);
// })

let Users =JSON.parse(localStorage.getItem("Users")) || [{
    username:"Abdul Gani",
    password:"Abdulrash"
}
];
function saveUsers() {
  localStorage.setItem("Users", JSON.stringify(Users));
}

let login = document.getElementById("logindata");
if(login){
login.addEventListener("submit",function(event){
    event.preventDefault();
    let formdata = new FormData(event.target);
    let userData=Object.fromEntries(formdata.entries());
    // console.log(userData.username);
    if(Users.find(user => user.username === userData.username && user.password === userData.password)){
        // console.log("username already exist please login");
        window.location.replace("homepage.html");
    }else{
        window.location.replace("signin.html");
    }
}
);}

let register  = document.getElementById("registration");
if(register){
register.addEventListener("submit",function(event){
    event.preventDefault();
    let registerform = new FormData(event.target);
    let registerData=Object.fromEntries(registerform.entries());
    console.log(registerData.username);
    if(!Users.find(user => user.username ===registerData.username && user.password === registerData.password)){
    let temp = {
        username:registerData.username,
        password:registerData.password
    }
    Users.push(temp);
    localStorage.setItem("Users", JSON.stringify(Users));
    window.location.replace("loginpage.html");
    }
}
);
}