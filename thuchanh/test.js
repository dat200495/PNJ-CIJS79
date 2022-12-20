function saveLocalStorage() {
    var username = document.getElementById('username_id').value
    var fullname = document.getElementById('fullname_id').value
    var email = document.getElementById('email_id').value

    localStorage.setItem('username', username)
    localStorage.setItem('fullname', fullname)
    localStorage.setItem('email', email)
}

function readLocalStorage() {
    document.getElementById('username_id').value = localStorage.getItem('username')
    document.getElementById('fullname_id').value = localStorage.getItem('fullname')
    document.getElementById('email_id').value = localStorage.getItem('email')
}

// Chuong trinh quan ly sinh vien bang JS
var resultTag = document.getElementById('result')

var studentList = []

function saveData() {
    var username = document.getElementById('username_id').value
    var fullname = document.getElementById('fullname_id').value
    var email = document.getElementById('email_id').value

    var std = {
        'username': username,
        'fullname': fullname,
        'email': email
    }

    if(cIndex >= 0) {
        //sua thong tin
        studentList[cIndex] = std
        cIndex = -1 //Sau khi sua xong -> lan tiep theo la them moi
    } else {
        studentList.push(std)
    }

    showData()

    return false
}

function showData() {
    resultTag.innerHTML = ''

    var index = 0
    for(std of studentList) {
        resultTag.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td>${std.username}</td>
            <td>${std.fullname}</td>
            <td>${std.email}</td>
            <td>
                <button onclick="editStudent(${index})">Sua</button>
                <button onclick="removeStudent(${index})">Xoa</button>
            </td>
        </tr>`
        index++
    }
}

var cIndex = -1
function editStudent(index) {
    cIndex = index

    document.getElementById('username_id').value = studentList[index].username
    document.getElementById('fullname_id').value = studentList[index].fullname
    document.getElementById('email_id').value = studentList[index].email
}

function removeStudent(index) {
    var option = confirm('Ban chac chan muon xoa sinh vien nay khong?')
    if(!option) return

    studentList.splice(index, 1)

    showData()
}
