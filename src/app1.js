import "./app1.css";
import $ from "jquery";

const $button1 = $("#add1");
const $button2 = $("#minus1");
const $button3 = $("#mul2");
const $button4 = $("#divide2");
const $number = $("#number");

//先从本地仓库获取n的值，放到id=number的div里
//如果本地仓库没有n，则默认为100
const n = localStorage.getItem("n");
$number.text(n || 100);

$button1.on("click", () => {
  let n = parseInt($number.text()); //获取number.text并把它变成整数
  n += 1;
  localStorage.setItem("n", n); //把当下的n存在本地仓库，保证刷新时，值不变
  $number.text(n);
});
$button2.on("click", () => {
  let n = parseInt($number.text()); //获取number.text并把它变成整数
  n -= 1;
  localStorage.setItem("n", n); //把当下的n存在本地仓库，保证刷新时，值不变

  $number.text(n);
});
$button3.on("click", () => {
  let n = parseInt($number.text()); //获取number.text并把它变成整数
  n *= 2;
  localStorage.setItem("n", n); //把当下的n存在本地仓库，保证刷新时，值不变

  $number.text(n);
});
$button4.on("click", () => {
  let n = parseInt($number.text()); //获取number.text并把它变成整数
  n /= 2;
  localStorage.setItem("n", n); //把当下的n存在本地仓库，保证刷新时，值不变

  $number.text(n);
});
