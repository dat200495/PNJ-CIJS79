/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
function countItem(array, item){
    let count = 0;
    for(let i=0;i<array.length;i++){
      if(array[i]==item) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
        count ++;
    }
    console.log( "Phan tu " +  item  + " xuat hien " + count +  " lan");
}

let array= [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];

/*Xóa phần tử trùng nhau và lấy các phần tử duy nhất*/
let arrayWithNoDuplicates = array.reduce(function (accumulator, element) {
  if (accumulator.indexOf(element) === -1) {
    accumulator.push(element)
  }
  return accumulator
}, [])


/*đếm số lần xuất hiện của các phần tử duy nhất*/
for (let i = 0; i < arrayWithNoDuplicates.length; i++) 
    countItem(array, arrayWithNoDuplicates[i]);


