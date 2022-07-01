

let userFormDOM=document.querySelector("#userForm2");
userFormDOM.addEventListener('submit',formHandler);

const ALERT=(message)=>`<div class="alert alert-danger mt-5 alert-dismissible fade show" role="alert">
<strong>${message}</strong>
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`
let alertDOM=document.querySelector('#alert');

function formHandler(event){
    event.preventDefault()
    const USER_NAME=document.querySelector('#username')
    const SCORE=document.querySelector('#score')
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value,SCORE.value)
        USER_NAME.value="";
        SCORE.value="";
    }else{
        if(USER_NAME.value =="" && SCORE.value==0)
            alertDOM.innerHTML=ALERT('KULLANICI ADI VE SIFRE BOS')
        else if(USER_NAME.value =="")
            alertDOM.innerHTML=ALERT('KULLANICI ADI BOS')
        else
            alertDOM.innerHTML=ALERT('SIFRE BOS')
    }
    
}




let userListDOM=document.querySelector('#userList')

const  addItem =(userName,score)=>{
    let liDOM=document.createElement('li')
    liDOM.innerHTML=`
    ${userName} 
    <span class="badge badge-primary badge-pill">${score}</span></li>`
    liDOM.classList.add('list-group-item', 'd-flex' ,'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)

}


