let myImage = (function () {
    let imgNode = document.createElement('img')
    imgNode.style.width = '500px'
    imgNode.style.height = '350px'
    document.body.appendChild(imgNode)
    return {
        setSrc: function (src) {
            imgNode.src = src
        }
    }
})()

let proxyMyImage = (function () {
    let img = new Image()
    img.onload = function () {
        myImage.setSrc(this.src)
    }
    return {
        setSrc: function (src) {
            myImage.setSrc('./loading.png')
            img.src = src
        }
    }
})()

proxyMyImage.setSrc('https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg')