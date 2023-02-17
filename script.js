const getUserButton = document.getElementById("getUser");
const fullName = document.getElementById("fullname");
const photo = document.getElementById("photo");
const additionalInfo = document.getElementById("additionalInfo");

  


async function myAsyncFunction(){
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json()
    if(data){
        console.log("res1",data);
        const user = data.results[0];
        fullName.innerText = user.name.first + " " + user.name.last;
        photo.src = user.picture.large;
        fullName.dataset.age = user.dob.age;
        fullName.dataset.email= user.email;
        fullName.dataset.phone = user.phone;
        additionalInfo.innerText = ""; 
        
    }
}

const age = document.querySelector('[data-attr="age"]');
const email = document.querySelector('[data-attr="email"]');
const phone = document.querySelector('[data-attr="phone"]')

age.addEventListener("click",function(){
    additionalInfo.innerText = fullName.dataset.age;
})
email.addEventListener("click",function(){
    additionalInfo.innerText = fullName.dataset.email;
})
phone.addEventListener("click",function(){
    additionalInfo.innerText = fullName.dataset.phone;
})

getUserButton.addEventListener("click",function(){
    myAsyncFunction();
})



myAsyncFunction();

