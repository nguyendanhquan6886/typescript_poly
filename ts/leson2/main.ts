const myname: string = "Nguyễn Danh Quân";
const myage: number = 20;
const myjob: string[] = ["capenter", "student"];
type myproductType = {
  id: number;
  name: string;
};

type infor = {
  name: string;
  age: number;
  home: string;
  myjob: string[];
  myproducts: myproductType[];
};

const myinfor: infor = {
  name: "Nguyễn danh quân",
  age: 20,
  home: "thạch thất",
  myjob: ["capenter", "student"],
  myproducts: [
    {
      id: 1,
      name: "Tủ áo cánh kính",
    },
    {
      id: 2,
      name: "Tủ bếp",
    },
  ],
};
