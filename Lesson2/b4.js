let list = [];
function addBnt (){
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  // console.log(name,phone)
  let addList = {
    name: name,
    phone: phone,
  }
  list.push(addList)
  function compare(a, b) {
    if (a.name < b.name) {
    return -1;
    }
    if (a.name > b.name) {
    return 1;
    }
    return 0;
  }
  list.sort(compare);
  let text = "";
  list.forEach(arrange) 
  document.getElementById('list-contact').innerHTML = text; 
  
  function arrange (item, index){
    ++index
    text += `
    <tr>
    <td>${item.name}</td>
    <td>${item.phone}</td>
    </tr>
    `
  }
  // console.log(addList)
}

function srchBnt () {
  let srch = document.getElementById('find-bnt').value;
  let result = list.filter((item) => {
    return item.name.includes(srch) || item.phone.includes(srch)
  })
  alert(JSON.stringify(result));
  // chưa làm xong
}
function delBnt (){
  const rs = list.reduce((a,b)=>{
    for (let i = 0; i < a.length; i++) {
      if(a[i].phone === b.phone) {
        return a;
      }
    }
    a.push(b);
    return a;
  },[]);
  console.log(rs);
  let k = "";
  rs.forEach(reWork) 
  document.getElementById('list-contact').innerHTML = k; 
  
  function reWork (a, b){
    ++b
    k += `
    <tr>
    <td>${a.name}</td>
    <td>${a.phone}</td>
    </tr>
    `
  }
}
