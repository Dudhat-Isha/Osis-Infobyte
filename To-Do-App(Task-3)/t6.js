const addUser = document.getElementById('for-add');
const button = addUser.innerText;
const inputText = document.getElementById('input-section');
const inputDate = document.getElementById('for-date');
const recordsDisplay = document.getElementById('records');
let userArray = [];
let objstr = localStorage.getItem('users');
let edit_id = null;

if (objstr !== null && objstr !== '') {
    userArray = JSON.parse(objstr);
}

DisplayInfo();

function forAdd() {
    if (inputText.value === "") {
        setTimeout(() => {
            document.getElementById('alert1').style.visibility = 'visible';
            document.getElementById('alert1').style.display = 'inline-block';
        }, 300);
    } else if (inputText.value !== "") {
        setTimeout(() => {
            document.getElementById('alert2').style.visibility = 'visible';
            document.getElementById('alert2').style.display = 'inline-block';
        }, 300);

        const task = inputText.value;
        var date = inputDate.value;
        if (edit_id!=null) 
        {
            userArray.splice(edit_id,1,{ 'task': task, 'date': date });
        }
        else{
            userArray.push({ 'task': task, 'date': date });
        }
        SaveInfo(userArray);
        DisplayInfo();
        addUser.innerText = button;
    }
}

function SaveInfo(userArray) {
    let str = JSON.stringify(userArray);
    localStorage.setItem('users', str);
}

function DisplayInfo() {
    let statment = '';
    userArray.forEach((user,i) => {
        statment += `<tr>
            <th>${i+1}</th>
            <td>${user.task}</td>
            <td>${user.date}</td>
            <td id="status">pending</td>
            <td>
                <i class="fa-sharp fa-regular fa-pen-to-square" onclick="EditInfo(${i})"></i>
                <i class="fa-sharp fa-solid fa-check" onclick="StatusInfo()"></i>
                <i class="fa-sharp fa-solid fa-trash-can" onclick="DeleteInfo(${i})"></i>
            </td>
        </tr>`;
    });
    recordsDisplay.innerHTML = statment;
}

function EditInfo(id) {
    edit_id = id;
    inputText.value = userArray[id].task;
    inputDate.value = userArray[id].date;
    addUser.innerText = 'add';
}

function DeleteInfo(id) {
    userArray.splice(id,1);
    SaveInfo(userArray); 
    DisplayInfo();
}

// function StatusInfo(){
//     var check = document.getElementById('status').value;
//     if(check == 'pending'){
//         document.getElementById('status').value = str;
//     }
//     SaveInfo();
//     DisplayInfo();
// }

function DeleteAll(id){
    userArray.splice(id,1000);
    SaveInfo(userArray);
    DisplayInfo();
}
