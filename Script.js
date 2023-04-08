// alert 

let alertShow = document.getElementById('alertShow');
function alertBtn(AlertName){
    document.getElementById('alertName').innerHTML = AlertName;

    console.log("enter")
    alertShow.style.display = "block";
    setTimeout(()=>{
        alertShow.style.display = "none"
    },1500)
}


// thems

let modeType = document.getElementById('moddType');
let Navbar = document.getElementById('Navbar');
let enterAttendenStart = document.getElementById('EnterAttendenStart');
let BodyStyleId = document.getElementById('BodyStyleId');


function moods(){
    
    if(modeType.innerHTML == 'Dark Mood'){
        console.log(modeType.innerText)
        modeType.innerHTML = "Light Mood"

        Navbar.style.backgroundColor = "linear-gradient(90deg, rgba(195,40,103,1) 0%, rgba(53,54,56,1) 0%, rgba(74,75,77,1) 100%);"
        
        Navbar.classList.remove("BodyStyle");
        Navbar.classList.add("DarkMoodBodyStyle");

        BodyStyleId.classList.remove("BodyStyle");
        BodyStyleId.classList.add( "DarkMoodBodyStyle");

        // enterAttendenStart.classList.remove("btnStyle");
        // enterAttendenStart.classList.add( "DarkMoodBtnStyle");

        DisplyTable.style.color = "aliceblue";

    }else{
        modeType.innerHTML = "Dark Mood"
        Navbar.classList.remove("DarkMoodBodyStyle");
        Navbar.classList.add("BodyStyle");

        BodyStyleId.classList.remove("DarkMoodBodyStyle");
        BodyStyleId.classList.add("BodyStyle");

        DisplyTable.style.color = "black";
        
        // enterAttendenStart.classList.remove("DarkMoodBtnStyle");
        // enterAttendenStart.classList.add("btnStyle");

    }
   
}





// variable
let Subject = document.getElementById('Subject');
let ClassName = document.getElementById('ClassName');
let Semester = document.getElementById('Semester');


function EnterAttendenStart(){
    viewData.style.display = "none";
     let subjectName = Subject.value;
     let ClassNameValue = ClassName.value;
     let semesterValue = Semester.value;


    localStorage.setItem("ClassName", ClassNameValue);
    localStorage.setItem("SubjectName", subjectName);
    localStorage.setItem("SemesterValue", semesterValue);


    if(subjectName=="choise" && ClassNameValue == "choise" && semesterValue== "choise"){
        alert("Plz select semeter ,  Subject and Class Name .....")
    }else if(Subject.value == "choise"){
        alert("plz select subject")
    }else if(ClassNameValue == "choise"){
        alert("plz select Class Name... ")
    }else if(semesterValue == "choise"){
        alert("plz select Semester... ")
    }

    else{
        window.open('Attendes.html');
    }
    return false;
}

// function B() {
//     let rollNumber = document.getElementById('btn-B').value;
//     localStorage.setItem("startRoll", rollNumber);
//     if(Subject.value == "choise"){
//         alert("plz select subject")
//     }
//     return false;
// }
// function C() {
//     let rollNumber = document.getElementById('btn-C').value;
//     localStorage.setItem("startRoll", rollNumber);
//     if(Subject.value == "choise"){
//         alert("plz select subject")
//     }
//     return false;
// }
// function D() {
//     let rollNumber = document.getElementById('btn-D').value;
//     localStorage.setItem("startRoll", rollNumber);
//     if(Subject.value == "choise"){
//         alert("plz select subject")
//     }
//     return false;
// }


// variable


let searchDate = document.getElementById('searchDate');
let viewData = document.getElementById('viewData');
let DisplyTable = document.getElementById('DisplyTable');

let dateArray = JSON.parse(localStorage.getItem('currentDate')) || [];
let timeArray = JSON.parse(localStorage.getItem('currentTime')) || [];
let absentNumArray = JSON.parse(localStorage.getItem('absentNum'))  || [];
let subjectNameArray = JSON.parse(localStorage.getItem('Subjectnamearry')) || [];
let semesterArray = JSON.parse(localStorage.getItem('Semesterarray')) || [];


search.addEventListener('click', () => {
    let searchDateValue = searchDate.value;
    console.log("search")

  viewData.style.display = "block";

  if((dateArray.length == 0 && timeArray.length == 0 && absentNumArray.length == 0 && subjectNameArray.length==0)|| searchDateValue==null){
    viewData.innerHTML = "<B><h3>Result is not found........!!</h3></B>"
  }
   
let countData = 0;

    for (let i = 0; i < timeArray.length; i++) {
        if(searchDateValue == dateArray[i]){
            
            DisplyTable.innerHTML +=
                `
                <tr>
                <td>${semesterArray[i]}</td>
                <td>${subjectNameArray[i]}</td>
                <td>${dateArray[i]}</td>
                <td>${timeArray[i]}</td>
                <td>${absentNumArray[i]}</td>
            </tr>
            `

            countData++;
        }
    }

    if(countData==0){
        viewData.innerHTML = "<B><h3>Result is not found........!!</h3></B>"
    }
    
})

let tableName = document.getElementsByClassName('table');


        

// const veiw_all_data = ()=>{

//     console.log("chauhary")

//     // for(let i=0;i<dateArray.length;i++){
      
//     //     // DisplyTable.innerHTML = "paresh"
//     //     console.log("hello paresh")


//     // //     DisplyTable.innerHTML +=
//     // //     `
//     // //     <tr>
//     // //     <td>${semesterArray[i]}</td>
//     // //     <td>${subjectNameArray[i]}</td>
//     // //     <td>${dateArray[i]}</td>
//     // //     <td>${timeArray[i]}</td>
//     // //     <td>${absentNumArray[i]}</td>
//     // // </tr>
//     // // `
//     // }
// }

let alertName = document.getElementById('alertName');
const delet_all_data = ()=>{
    alertBtn("delet all data");

    localStorage.removeItem('currentDate');
    localStorage.removeItem('currentTime');
    localStorage.removeItem('Subjectnamearry');
    localStorage.removeItem('absentNum');
   localStorage.removeItem('Semesterarray');

//    alertName.innerHTML = "delet all data"

    DisplyTable.innerHTML = " ";
    viewData.innerHTML = " ";
}
