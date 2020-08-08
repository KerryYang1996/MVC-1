//监听事件1 2
import "./app2.css";
import $ from "jquery";
const $tabBar = $("#app2 #tab-bar");
const $tabContent = $("#app2 #tab-content");
//事件委托，监听父元素，通过触发子元素监听达到触发父元素的目的
//触发tab-bar的子元素li触发响应
$tabBar.on("click", "li", (e) => {
  //e.target用户点击的元素，如果li里面包含着span元素，则console输出span
  //    console.log(e.target);
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  const index = $li.index(); //获取下标
  console.log(index);
  $tabContent
    .children()
    .eq(index)
    .addClass("active") //tabContent的孩子中等于index的加样式display：block
    .siblings()
    .removeClass("active"); //index个孩子的兄弟姐妹们加样式display：none
});
$tabBar.children().eq(0).trigger("click"); //自动触发tabBar的第一个子元素的click事件
