// ALERT

let alertShow = document.getElementById('alertShow');
function alertBtn(AlertName){
    document.getElementById('alertName').innerHTML = AlertName;

    console.log("enter")
    alertShow.style.display = "block";
    setTimeout(()=>{
        alertShow.style.display = "none"
    },1500)
}

// them

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

       displyData_Table.style.color = "aliceblue";
        
    }else{
        modeType.innerHTML = "Dark Mood"
        Navbar.classList.remove("DarkMoodBodyStyle");
        Navbar.classList.add("BodyStyle");
        
        BodyStyleId.classList.remove("DarkMoodBodyStyle");
        BodyStyleId.classList.add("BodyStyle");
        
       displyData_Table.style.color = "black";
        // enterAttendenStart.classList.remove("DarkMoodBtnStyle");
        // enterAttendenStart.classList.add("btnStyle");

    }
   
}


// variable
let num = document.getElementById('disply-Num');
let PresentNum = document.getElementById('PresentNum');
let A = document.getElementById('A');
let absentNum = document.getElementById('absentNum');
let backBtn = document.getElementById('backBtn');
let TableDisply = document.getElementById('TableDisply');
let displyData_Table = document.getElementById('displyData_Table');


//home page vlue get
let className_header = localStorage.getItem("ClassName");
let countNum;

if(className_header == "Class-A"){//countNum

    countNum = 101
    console.log("hii")
}else if(className_header == "Class-B"){
    countNum = 201
}else if(className_header == "Class-C"){
    countNum = 301
}else if(className_header == "Class-D"){
    countNum  = 401
}else if(className_header == 'Class-E'){
    countNum = 501
}else if(className_header == "Class-F"){
    countNum = 601
}

let subjectName_pass = localStorage.getItem("SubjectName");
let semester_pass = localStorage.getItem("SemesterValue");


//variable dicrel

let sem = document.getElementById('sem');
let Subject_Name_Header = document.getElementById('Subject_Name_Header');
let classNameHeader = document.getElementById('classNameHeader');

sem.innerHTML = semester_pass;
Subject_Name_Header.innerHTML = subjectName_pass;
classNameHeader.innerHTML = className_header

localStorage.removeItem('AbsNums');

num.innerHTML = countNum;


// localStorage.removeItem('currentAbsentNumArry');
// localStorage.removeItem('currentDate');
// localStorage.removeItem('currentTime');
// localStorage.removeItem('Subjectnamearry');
// localStorage.removeItem('Semesterarray');
// localStorage.removeItem('absentNum');
// localStorage.removeItem('searchDate');


function PNum() {
    if(countNum != 101 || countNum != 201 || countNum != 301 || countNum != 401 ||countNum != 501 ||countNum != 601){
        document.getElementById('backBtn').disabled = false;
  }
    countNum++;
    num.innerHTML = countNum;
}




let currentAbsentNumArry = JSON.parse(localStorage.getItem('AbsNums')) || [];

function ANum() {
    if(countNum != 101 || countNum != 201 || countNum != 301 || countNum != 401 ||countNum != 501 ||countNum != 601){
        document.getElementById('backBtn').disabled = false;
  }
  localStorage.setItem("AbsNums", JSON.stringify(currentAbsentNumArry));
  absent.innerHTML += countNum + ",";
  
  currentAbsentNumArry.push(countNum);
  countNum++;
  num.innerHTML = countNum;

}

function backNum() {
    
    if( countNum == 101 || countNum == 201 || countNum == 301 || countNum == 401 ||countNum == 501 ||countNum == 601){
        document.getElementById('backBtn').disabled = true;
  }else{
      countNum--;
  }
    num.innerHTML = countNum;
}

//  date Arry decalera
let dateArray = JSON.parse(localStorage.getItem('currentDate')) || [];
let timeArray = JSON.parse(localStorage.getItem('currentTime')) || [];
let subjectNameArray = JSON.parse(localStorage.getItem('Subjectnamearry')) || [];
let semesterArray = JSON.parse(localStorage.getItem('Semesterarray')) || [];
let absentNumArray = JSON.parse(localStorage.getItem('absentNum'))  || [];
let searchDateArray = JSON.parse(localStorage.getItem('searchDate'))  || [];


// View_attendance_List BTN desibles

document.getElementById('View_attendance_List').disabled = true;
document.getElementById('Copy_attendance_List').disabled = true;

//save data
function saveData() {
    alertBtn("save  data");

    document.getElementById('View_attendance_List').disabled = false;
    document.getElementById('Copy_attendance_List').disabled = false;
    document.getElementById('P').disabled = true;
    document.getElementById('A').disabled = true;
    document.getElementById('backBtn').disabled = true;
    let currentDate = new Date();


    if ((currentDate.getMonth() + 1) < 9) {
        currenMouth = "0" + (currentDate.getMonth() + 1);
    }else{
        currenMouth = currentDate.getMonth();
    }
    if ((currentDate.getDate()) < 9) {
        currenDay = "0" + (currentDate.getDate());
    }else{
        currenDay = currentDate.getDate();
    }

      
    let date = currentDate.getFullYear() + '-' + currenMouth  + '-' + currenDay;
    // let date = 2023 + '-' + 11 + '-' + 12;
    let time = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();



    dateArray.push(date);
    localStorage.setItem("currentDate", JSON.stringify(dateArray));
    timeArray.push(time);
    localStorage.setItem("currentTime", JSON.stringify(timeArray));
    subjectNameArray.push(subjectName_pass);
    localStorage.setItem("Subjectnamearry", JSON.stringify(subjectNameArray));
    semesterArray.push(semester_pass);
    localStorage.setItem("Semesterarray", JSON.stringify(semesterArray));
    absentNumArray.push(currentAbsentNumArry);
    localStorage.setItem("absentNum" , JSON.stringify(absentNumArray));
    localStorage.removeItem(currentAbsentNumArry);
} 

let chackLengthDateArry = dateArray.length;

//veiw data
function view_attendance_List(){

    displyData_Table.style.display = "block"

    displyData_Table.innerHTML +=
            `
            <tr>
               <td>${semesterArray[chackLengthDateArry]}</td>
               <td>${subjectNameArray[chackLengthDateArry]}</td>
               <td>${dateArray[chackLengthDateArry]}</td>
               <td>${timeArray[chackLengthDateArry]}</td>
               <td>${absentNumArray[chackLengthDateArry]}</td>
            </tr>
        `
}

//copy data
function copy_attendance_List(){
    alertBtn("copied");
    navigator.clipboard.writeText("date = " +  dateArray[chackLengthDateArry] + " , "  + "Time = " +  timeArray[chackLengthDateArry] + " , " + "Semester = " + semesterArray[chackLengthDateArry] +" , " + className_header + " , " +"Subject =  " +  subjectNameArray[chackLengthDateArry] + " , " + "Roll No : " +  absentNumArray[chackLengthDateArry]);
}

function clearData(){
    localStorage.removeItem('currentAbsentNumArry');
    localStorage.removeItem('currentDate');
    localStorage.removeItem('currentTime');
    localStorage.removeItem('absentNum');
    
    displyData.innerHTML = "";
}




// btns disabled

