///verificare campuri contact
function is_local()
{
    if(localStorage.getItem('parinte'))
        {if(localStorage.getItem('parinte').length> 0)
      addComment();}
    else 
      validate();
}
function validate() {
    
    let nume=document.getElementById("name");
    let tel=document.getElementById("phoneno");
    let email=document.getElementById("email");
    
    if(namecheck(nume))
    {
    if(phonenumbercheck(tel))
        if(emailcheck(email))
            addComment();
    }
}
function namecheck(inputtxt)
{
    if(inputtxt.value)
  {
      return true;
  }
  else
    {
    alert("Please Enter Your Full Name First");
    return false;
    }

}

function phonenumbercheck(inputtxt)
{
  let phoneno = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  if(inputtxt.value.match(phoneno) && inputtxt)
  {
      return true;
  }
  else
  {
     alert("Not a valid Phone Number \n Please Try Again");
     return false;
  }
}

function emailcheck(inputtxt)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputtxt.value.match(mailformat))
    {
    return true;
    }
    else
    {alert("Not a valid Email \n Please Try Again");
    return false;}
}

// function addComment(){

//     let myListVariable = document.getElementById('myList');
//     let newComment=document.getElementById('subject');
//     let newRandomItem = document.createElement("li");
//     let nume;
//     if(localStorage.getItem('parinte'))
//         {if(localStorage.getItem('parinte').length> 0)
//             nume=localStorage.getItem('parinte');}
//     else
//         nume=document.getElementById("name").value;
//     let checkbox = document.getElementById("myCheck");
//     if(newComment.value)
//     {if(checkbox.checked == false)
//         {
//             newRandomItem.setAttribute('class','comentariu');
//             newRandomItem.innerText =nume + ": " + newComment.value;
//             myListVariable.appendChild(newRandomItem);
//         }
//     else{
//     newRandomItem.setAttribute('class','comentariu');
//     newRandomItem.innerText = "Anonim: " + newComment.value;
//     myListVariable.appendChild(newRandomItem);
//     }}
// }

/// modificare navbar

let clicked_var=0;
function menu()
{
    
    if(clicked_var==0)
    {clicked_var+=1;
        openNav();}
    else
    {closeNav();
    clicked_var=0;}

}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("continut").style.marginTop="0%";
  }
  

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("continut").style.marginTop="-35%";
  }

function menu_homepage()
{
    if(clicked_var==0)
    {clicked_var+=1;
        document.getElementById("myNav").style.width = "100%";}
    else
    {document.getElementById("myNav").style.width = "0%";
    clicked_var=0;}
}

/// retine campuri inscriere
//window.onload = userLogIn;

/*function inscrie_copil()
{

    let parinte=document.getElementById("pname");
    let copil=document.getElementById("cname");
    let data=document.getElementById("bdate");
    let tel=document.getElementById("phoneno");
    let email=document.getElementById("email");

    localStorage.setItem("parinte",parinte.value);
    localStorage.setItem("copil",copil.value);
    localStorage.setItem("data",data.value);
    localStorage.setItem("tel",tel.value);
    localStorage.setItem("email",email.value);
    userLogIn();
    
}


 function userLogIn(){
    let loggedparinte = localStorage.getItem('parinte');
    let loggedcopil = localStorage.getItem('copil');
    let loggedtel = localStorage.getItem('tel');
    let loggeddata = localStorage.getItem('data');
    let loggedemail = localStorage.getItem('email');
    console.log(loggedparinte);
    console.log(loggedcopil);
    console.log(loggeddata);
    console.log(loggedtel);
    console.log(loggedemail);

    if(typeof loggedparinte === "string" && loggedparinte.length > 0 && document.getElementById('inscrie'))
    {
      document.getElementById('pname').disabled = true;
      document.getElementById('cname').disabled = true;
      document.getElementById('bdate').disabled = true;
      document.getElementById('phoneno').disabled = true;
      document.getElementById('email').disabled = true;
      document.getElementById('inscrie').disabled = true;
      document.getElementById('stadiu').innerText = loggedparinte + ", copilul dumneavoastră a fost înscris!";
      document.getElementById('logOutButton').style.display = 'block';
      document.getElementById('logOutButton').style.alignItems = 'center';
    }


}
function forgetUser(){

    localStorage.removeItem("parinte");
    localStorage.removeItem("copil");
    localStorage.removeItem("data");
    localStorage.removeItem("tel");
    localStorage.removeItem("email");
    location.reload(); // refresh
}*/

///galerie interactiva

function increase(x){
   // alert(screen.width);
    if(screen.width>720)
    {document.getElementById(x).style.width="25%";
   document.getElementById(x).style.height="25%";
   setTimeout(function back_to_normal(){
    document.getElementById(x).style.width="20%";
    document.getElementById(x).style.height="20%";}, 1000);  }

}

///ascunde/arata galeria
let clicked_galery=0;
function play_galery()
{
    
    if(clicked_galery==0)
    {clicked_galery+=1;
        showImage();}
    else
    {hideImage();
        clicked_galery=0;}

}
function showImage() {
    document.getElementById("button_galery").innerHTML = "Ascunde Imagini";
    var img = document.getElementById('img1');
    img.style.visibility = 'visible';
    var img = document.getElementById('img2');
    img.style.visibility = 'visible';
    var img = document.getElementById('img3');
    img.style.visibility = 'visible';
    var img = document.getElementById('img4');
    img.style.visibility = 'visible';
    var img = document.getElementById('img5');
    img.style.visibility = 'visible';
    var img = document.getElementById('img6');
    img.style.visibility = 'visible';
    var img = document.getElementById('img7');
    img.style.visibility = 'visible';
    var img = document.getElementById('img8');
    img.style.visibility = 'visible';
    var img = document.getElementById('img9');
    img.style.visibility = 'visible';
    var img = document.getElementById('img10');
    img.style.visibility = 'visible';
    var img = document.getElementById('img11');
    img.style.visibility = 'visible';
    let continut = document.getElementById('continut');
    continut.style.visibility='visible';
}

function hideImage() {
    document.getElementById("button_galery").innerHTML = "Afișează Imagini";
    var img = document.getElementById('img1');
    img.style.visibility = 'hidden';
    var img = document.getElementById('img2');
    img.style.visibility = 'hidden';
    var img = document.getElementById('img3');
    img.style.visibility = 'hidden';
    var img = document.getElementById('img4');
    img.style.visibility = 'hidden';
    var img = document.getElementById('img5');
    img.style.visibility = 'hidden';
    var img = document.getElementById('img6');
    img.style.visibility = 'hidden';
    var img = document.getElementById('img7');
    img.style.visibility = 'hidden';
    var img = document.getElementById('img8');
    img.style.visibility = 'hidden';
    var img = document.getElementById('img9');
    img.style.visibility = 'hidden';
    var img = document.getElementById('img10');
    img.style.visibility = 'hidden';
    var img = document.getElementById('img11');
    img.style.visibility = 'hidden';
    let continut = document.getElementById('continut');
    continut.style.visibility='hidden';
}

///time session

function Timer() {
    let timer = setInterval(function() {
    let time_stamp = sessionStorage.getItem('time_counter');
    time_stamp++;
    sessionStorage.setItem("time_counter",time_stamp);
    document.getElementById('timer').innerHTML = 'Time of the session: ' + parseInt(time_stamp/60) + ' min : '+time_stamp%60 + ' s';
    }, 1000);
    }

let timer = new Timer();
/*
function Timer() {
    let timer = setInterval(function() {
    let time_stamp = localStorage.getItem('time_counter');
    time_stamp++;
    localStorage.setItem("time_counter",time_stamp);
    document.getElementById('timer').innerHTML = 'Time of the session: ' + parseInt(time_stamp/60) + ' min : '+time_stamp%60 + ' s';
    }, 1000);
    }

let timer = new Timer();
*/

var i = 0;
var txt1 = 'Clubul Sophia Science oferă într-un spațiu experimental, programe de robotică educațională pentru copii și tineri.';
var txt2='\nRobotica educațională este un instrument de învățare și dezvoltare a abilităților prin stimularea creativității în rezolvarea problemelor comunității.'; 
var txt3='\nCopiii și tinerii învață să construiască și să programeze roboți care rezolvă diverse sarcini.';
var txt4='\nÎn cadrul cursurilor, aceștia sunt ghidați cu ajutorul instrucțiunilor să testeze și să verifice soluțiile găsite.';
var txt5='\nDe asemenea, pregătim echipe pentru participarea la competiții naționale și internaționale.';
var txt6='\nClubul Sophia Science a accesat în anul 2019 fonduri europene pentru dezvoltare prin proiectul';
var txt7='\nFISH ROBO FRIEND - Robotica Educațională Soluția Viitorului pentru Zonele Umede.';

var speed = 20; /* The speed/duration of the effect in milliseconds */
let ok=0;

function typeWriter() {
  let continut=document.getElementById('despre');
  continut.style.visibility='visible'; 
  if (i < txt1.length && ok==0) {
    document.getElementById("paragraf1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(ok==0){ document.getElementById("paragraf1").innerHTML+='<br/>'; ok++;i=0;}
  
  if (i < txt2.length&& ok==1) {
    document.getElementById("paragraf1").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(ok==1){ document.getElementById("paragraf1").innerHTML+='<br/>';ok++;i=0;}
  
  if (i < txt3.length && ok==2) {
    document.getElementById("paragraf1").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(ok==2){ document.getElementById("paragraf1").innerHTML+='<br/>';ok++;i=0;}
  
  if (i < txt4.length && ok==3) {
    document.getElementById("paragraf1").innerHTML += txt4.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(ok==3){ document.getElementById("paragraf1").innerHTML+='<br/>';ok++;i=0;}
 
  if (i < txt5.length && ok==4) {
    document.getElementById("paragraf1").innerHTML += txt5.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  
  else if(ok==4){ document.getElementById("paragraf1").innerHTML+='<br/>';ok++;i=0;}
  if (i < txt6.length && ok==5) {
    document.getElementById("paragraf1").innerHTML += txt6.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  
  else if(ok==5){ document.getElementById("paragraf1").innerHTML+='<br/>';ok++;i=0;}

  if (i < txt7.length && ok==6) {
    document.getElementById("paragraf1").innerHTML += txt7.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  
  else if(ok==6){ document.getElementById("paragraf1").innerHTML+='<br/>';
  document.getElementById("paragraf1").innerHTML+='<br/>';
  ok++;i=0;}
 
}

var txt8='\nGrupe de vârstă:'; /* The text */
var txt9='\n•6-9 ani - Lego WeDo/WeDo2.0'; 
var txt10='\n•10-14 ani - Lego Mindstorms'; 
var txt11='\n•15-18 ani - Lego Mindstorms + platforme auxiliare'; 
let ok2=0;
function grupeWriter()
{
    if (i < txt8.length && ok2==0) {
        document.getElementById("paragraf2").innerHTML += txt8.charAt(i);
        i++;
        setTimeout(grupeWriter, speed);
      }
      
      else if(ok2==0){ document.getElementById("paragraf2").innerHTML+='<br/>';ok2++;i=0;}
    
      if (i < txt9.length && ok2==1) {
        document.getElementById("paragraf2").innerHTML += txt9.charAt(i);
        i++;
        setTimeout(grupeWriter, speed);
      }
      
      else if(ok2==1){ document.getElementById("paragraf2").innerHTML+='<br/>';ok2++;i=0;}
    
      if (i < txt10.length && ok2==2) {
        document.getElementById("paragraf2").innerHTML += txt10.charAt(i);
        i++;
        setTimeout(grupeWriter, speed);
      }
      
      else if(ok2==2){ document.getElementById("paragraf2").innerHTML+='<br/>';ok2++;i=0;}
    
      if (i < txt11.length && ok2==3) {
        document.getElementById("paragraf2").innerHTML += txt11.charAt(i);
        i++;
        setTimeout(grupeWriter, speed);
      }
      
      else if(ok2==3){ document.getElementById("paragraf2").innerHTML+='<br/>';ok2++;i=0;}
}
// //word counter for body
function extractContent(value){
    var body = document.createElement('body')
    body.innerHTML=value;
    var text= body.innerText;            
   return  text.split(' ').length;
}
function getTextfromBody(text)
{
    return text.split(' ').length;
}

function wordCounter()
{
    document.getElementById('word').innerHTML = 'Word Count ' + extractContent(document.getElementsByTagName('body')) ;
}

let plus = [0];
function initLike(mynumber)
{
    for(var i=1; i<=mynumber; i++) 
    plus.push(0);
    // console.log(plus[i])
    
}
function addLike(i)
{
plus[i]+=1;
console.log(plus[i]);
}
let clicked_comm=0;
function play_comm()
{
    
    if(clicked_comm==0)
    {clicked_comm+=1;
        init_comm();}
    else
    {hide_comm();
        clicked_comm=0;}

}
function init_comm()
{
    initLike(100);
    document.getElementById("button_com").innerHTML = "Ascunde Comentarii";
    document.getElementById('comment_list').style.visibility='visible';

}
function hide_comm()
{
    document.getElementById("button_com").innerHTML = "COMENTARII";
    document.getElementById('comment_list').style.visibility='hidden';

}





function logout(){
    fetch('http://localhost:3000/logout',{
        method: 'POST'
    }).then((response) => {
        if(response.status === 200){
            document.getElementById('logoutResponse').innerHTML = 'Ai iesit din cont';
            document.getElementsByClassName('info_login')[0].innerHTML = '';
        }
    })
 }

///setare tema

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function setButton(className)
{
    document.getElementById('switch').setAttribute=('class',className);
}

// function to toggle between light and dark theme
function toggleTheme() {

        if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
       document.getElementById('switch').setAttribute=('class','slider');
   } 
   else {
        setTheme('theme-dark');
        document.getElementById('switch').setAttribute=('class','input:checked + .slider');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
       document.getElementById('switch').setAttribute=('class','input:checked + .slider');
   }
    else {
       setTheme('theme-light');
       document.getElementById('switch').setAttribute=('class','slider');
   }
})();