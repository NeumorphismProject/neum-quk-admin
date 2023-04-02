# 兼容各种机型的移动端布局方案

* iPhone and android 浏览器的区别
![iPhone浏览器](./imgs/webLayoutForAllMobile/iPhone%E6%B5%8F%E8%A7%88%E5%99%A8%E8%AF%B4%E6%98%8E.png)
![android浏览器](./imgs/webLayoutForAllMobile/android%E6%B5%8F%E8%A7%88%E5%99%A8%E8%AF%B4%E6%98%8E.png)

## 方案说明

* 该方案主要是为了兼容 iPhone 浏览器的‘url输入区域’的问题的
* * （iPhone 浏览器的‘url输入区域’是一个遮罩层，如上面的图中所示，视口高度是包含了‘url输入区域’的，那么如果只是正常定位设置高度的情况下，我们网页中的内容会被‘url输入区域’遮住）

* 我们以问题最明显的弹窗为案例进行说明
* * [1] - 最外层容器用 fixed 布局并同时设定 top 和 bottom 距离用来控制容器高度;
* * [2] - 然后我们逐层设置 height:100%; 把高度值一直渗透到子元素，直到我们需要设置滚动的区域；
* * [3] - 最后我们在滚动区域的容器上设置 height:calc(100% - xxxpx); 其中的 100% 是最外层设置 fixed 布局的元素的高度(即步骤[1]中说的元素高度)，其中的 xxxpx 根据设计需求来设置即可，

## 代码案例及效果

* 代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body{
     margin: 0;
     padding: 0;
    }
  </style>
  <style>
    .wrapper{
      position: fixed;
      top: 200px;
      bottom: 0;
      width: 99vw;
      border: 2px solid red;
    }
    .wrapper .title{
      font-size: 32px;
    }
    .wrapper .content {
      height: 100%;
      border: 2px solid blue;
    }
    .wrapper .content .content-title {
      font-size: 16px;
    }
    .wrapper .content .list-wrapper {
      height: calc(100% - 65px);
      overflow-y: auto;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="title">
      标题1
    </div>
    <div class="content">
      <div class="content-title">
        标题2
      </div>
      <div class="list-wrapper">

      </div>
    </div>
  </div>
</body>
<script>
  const listWrapperDom = document.querySelector('.list-wrapper')
  listWrapperDom.innerHTML = '<div>--start--</div>'
  for(let i=1; i<100; i+=1){
    listWrapperDom.innerHTML = listWrapperDom.innerHTML + `<div>item_${i}</div>`
  }
  listWrapperDom.innerHTML = listWrapperDom.innerHTML + '<div>--end--</div>'
</script>
</html>
```

* 代码效果预览及说明
![效果及说明](./imgs/webLayoutForAllMobile/html%E4%BB%A3%E7%A0%81%E6%95%88%E6%9E%9C%E8%AF%B4%E6%98%8E.png)