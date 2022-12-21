const arr = [1, 2, 3, 5, 4, 2, 6, 4]
const initialArr = [];
const rs = arr.reduce((result, item) => {
    // console.log("result: ",result)
    // console.log("item: ", item)
    // console.log();
    for (let i = 0; i < result.length; i++) {
        if (result[i] === item) {
            return result;
        }
    }
    result.push(item);
    return result;
}, initialArr);
alert(rs);