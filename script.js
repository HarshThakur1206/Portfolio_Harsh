const tablinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
const textArea = document.getElementById("textArea");
const submitButton = document.getElementById("submitButton");
const sidemenu = document.getElementById("sidemenu");

const openTab = (tablink) =>{
    tablink.addEventListener("click", function(e){
       for(tablink of tablinks){
           tablink.classList.remove("active-link");
       }
       for(tabContent of tabContents){
           tabContent.classList.remove("active-tab");
       }
       e.target.classList.add("active-link");

        // console.log(document.getElementsByClassName("experience"))
        if(e.target.classList.contains("experience")){
            document.getElementById("experience").classList.add("active-tab")
        }
        if(e.target.classList.contains("education")){
            document.getElementById("education").classList.add("active-tab")
        }
        if(e.target.classList.contains("skills")){
            document.getElementById("skills").classList.add("active-tab")
        }
  } )       
}

for(tablink of tablinks){
    openTab(tablink)
}

window.addEventListener("load", ()=>{
    textArea.value = ""
})


function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}




