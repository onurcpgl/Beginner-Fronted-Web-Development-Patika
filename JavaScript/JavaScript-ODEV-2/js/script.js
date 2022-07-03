//Verileri tutacagım dizim.
let input=document.querySelector('#task')
let listDOM=document.querySelector('#list')
function veriYukle()
{
    if(JSON.parse(localStorage.getItem('todo')) != undefined)
    {
        
        let gelendizi=JSON.parse(localStorage.getItem('todo'))
        for(let i=0;i<gelendizi.length;i++)
        {
            let liDOM=document.createElement('li')
            liDOM.innerHTML=gelendizi[i]
            listDOM.append(liDOM)
        }
    }else
    {
        console.log('localstorage boş')
    }
}

veriYukle()





//Dizimizi tanımladık ve öncesinde eklenen elemanları dizimize koyduk..
let elemanDizim=[]
if(JSON.parse(localStorage.getItem('todo')) != undefined)
{
    for(let j=0;j<JSON.parse(localStorage.getItem('todo')).length;j++)
    {
        elemanDizim.push(JSON.parse(localStorage.getItem('todo'))[j])
    }
}else
{
    elemanDizim=[]
}



//Eleman ekleme
function newElement()
{
    if(!input.value)
    {
        $('#liveToastt').toast('show')//Boş geldiyse
    }else
    {
        
        let liDOM=document.createElement('li')
        liDOM.innerHTML=input.value
        
        elemanDizim.push(input.value)
        listDOM.append(liDOM)
        $('#liveToast').toast('show')//Boş gelmediyse
        input.value="";
        localStorage.setItem('todo',JSON.stringify(elemanDizim))
        liDOM.onclick = check;
        //Kapama tuşunu ekleme ve yapıldı ekleme.
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");
    }
}


let ullength = document.getElementsByTagName("li"); //burda var olan bütün li elementlerini alıp ullength'e atadık böylece elimizde kaç madde yani li olduğunu öğrendik.


// MEVCUT LİSTEYİ SİLMEK İÇİN ÇARPI BUTONUNUN OLUŞTURULMASI
for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7"; 
    closeButton.classList.add("close"); 
    closeButton.onclick = removeButton; 
    ullength[i].append(closeButton); 
    ullength[i].onclick = check; 
}



//Fonksiyonlar 

function check(){
  this.classList.toggle("checked"); 
}

function removeButton(){
  this.parentElement.remove();  
}




