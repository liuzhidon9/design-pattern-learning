# 代理模式

#### 定义：`代理模式为对象提供一个代用品或占位符，以便控制对它的访问。`

### 虚拟代理实现图片预加载

```js
let myImage = (function () {
  let imgNode = document.createElement("img");
  imgNode.style.width = "500px";
  imgNode.style.height = "350px";
  document.body.appendChild(imgNode);
  return {
    setSrc: function (src) {
      imgNode.src = src;
    },
  };
})();

let proxyMyImage = (function () {
  let img = new Image();
  img.onload = function () {
    myImage.setSrc(this.src);
  };
  return {
    setSrc: function (src) {
      myImage.setSrc("https://fakeimg.pl/350x200/?text=IMAGE&font=lobster");
      img.src = src;
    },
  };
})();

proxyMyImage.setSrc("https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg");
```
