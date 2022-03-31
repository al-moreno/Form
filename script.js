const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern =  /^[a-zA-Z]{6,12}$/;
// 1.  get a reference to the input field
// const username = document.querySelector('#username');

form.addEventListener('submit', (event) => {
    event.preventDefault();
//1. and use the reference .value to obtain the value
    // console.log(username.value);

//2. or use dotnotation to reference the field (input field needs an id or a name attribute)
// console.log(form.username.value);

// Regular Expression or RegEx to implement checks 
// Regular expressions start with a /   and end with a / 
// or /^ninja$/  where the ^ indicates at the start of the input and the $ specivies only at the end to match a single word
// to match any letter from A-Z /^[a-z]$/ 
// match a word between 6-10 char long  /^[a-zA-Z]{6,10}$/
// match a word between 6-10 char long with numbers /^[a-zA-Z0-9]{6,10}$/
// match any char between 6-10 /^.{6,10}$/ where the . means any characters


//validate
const username = form.username.value 



if(usernamePattern.test(username)){
    feedback.textContent=`${username} is a valid username.`;
} else{
    feedback.textContent=`Must include only letters and be a min of 6 characters!!!`;
}

});
form.username.addEventListener('keyup', (e)=>{
    console.log(e.target.value);
    if(usernamePattern.test(e.target.value)){
        console.log('passed');
        form.username.setAttribute('class', 'passed');
    } else{
        console.log('failed');
        form.username.setAttribute('class', 'failed');
    
    }
});

//     const username = 'analaura';
//as long as it has learters lowercase with a min of 6 it will pass
//if I add /^[a-z]{6,}$/ then it would not match becasue it does not begain and end with the specific 
// without the carrot ^ to specifiy the start or the $ to specify it will accept so long as it is in there
//     const pattern = /^[a-z]{6,}$/;

//test regex pattern match
// let result = pattern.test(username);
// console.log(result);
// if (result){
//     console.log("regex passed");
// } else {
//     console.log("regex failed");
// }

