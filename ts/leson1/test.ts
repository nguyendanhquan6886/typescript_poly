console.log('Xin chao cac bạn');

{
const mystring: string = 'Quân home'

console.log(mystring.toLocaleUpperCase());
}

// khai báo kiểu object

type user ={
    name: string,
    age: number,
    home: string,
    hobies: string[], // mảng có phần tử là các chuỗi
}
{
const myquan: user = {
    name: 'Nguyễn Danh Quân',
    age: 20,
    home: 'Thạch Thất',
    hobies: ['money', 'movie']
}
console.log(myquan);
}

