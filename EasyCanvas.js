console.log((function () {/*
   _______   ________  ________       ___    ___      ________  ________  ________   ___      ___ ________  ________      
|\  ___ \ |\   __  \|\   ____\     |\  \  /  /|    |\   ____\|\   __  \|\   ___  \|\  \    /  /|\   __  \|\   ____\     
\ \   __/|\ \  \|\  \ \  \___|_    \ \  \/  / /    \ \  \___|\ \  \|\  \ \  \\ \  \ \  \  /  / | \  \|\  \ \  \___|_    
 \ \  \_|/_\ \   __  \ \_____  \    \ \    / /      \ \  \    \ \   __  \ \  \\ \  \ \  \/  / / \ \   __  \ \_____  \   
  \ \  \_|\ \ \  \ \  \|____|\  \    \/  /  /        \ \  \____\ \  \ \  \ \  \\ \  \ \    / /   \ \  \ \  \|____|\  \  
   \ \_______\ \__\ \__\____\_\  \ __/  / /           \ \_______\ \__\ \__\ \__\\ \__\ \__/ /     \ \__\ \__\____\_\  \ 
    \|_______|\|__|\|__|\_________\\___/ /             \|_______|\|__|\|__|\|__| \|__|\|__|/       \|__|\|__|\_________\
                       \|_________\|___|/                                                                   \|_________|
*/}).toString().split('\n').slice(1, -1).join('\n'))
console.log('%c+', 'padding:32px 160px; font-size: 0;background-image: url("data:image/png;base64,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"); no-repeat;')
class ${
    constructor(selector) {
        // 获取指定选择器的DOM对象
        this.dom = document.querySelector(selector);
        return this.dom;
    }
    onclick(callback) {
        return this.dom.addEventListener('click', callback);
    }
    onmouseover(callback) { 
        return this.dom.addEventListener('mouseover', callback);
    }
    onmouseout(callback) { 
        return this.dom.addEventListener('mouseout', callback);
    }
}

class Graphicals{
    createRoundedRect(cxt, x, y, width, height, r) {
        cxt.beginPath();
        cxt.moveTo(x + r, y);
        cxt.lineTo(x + width - r, y);
        cxt.arcTo(x + width, y, y + height, y + r, r)
        cxt.lineTo(x + width, y + height - r);
        cxt.arcTo(x, y + height, x, y + height - r, r)
        cxt.lineTo(x, y + r);
        cxt.arcTo(x, y, x + r, y, r);
        cxt.closePath();
    }
    createSector(cxt, x, y, r, startAngle, endAngle) {
        cxt.beginPath();
        cxt.moveTo(x, y);
        cxt.arc(x, y, r, startAngle*Math.PI/180, endAngle*Math.PI/180);
        cxt.closePath();
    }
    translate(cxt, x, y) {
        cxt.transform(1, 0, 0, 1, x, y);
    }
    rotate(cxt, angle) {
        cxt.transform(Math.cos(angle), Math.sin(angle), -Math.sin(angle), Math.cos(angle), 0, 0);
    }
    scale(cxt, sx, sy) {
        cxt.transform(sx, 0, 0, sy, 0, 0);
    }
    setTranslate(cxt, x, y) {
        cxt.setTransform(1, 0, 0, 1, x, y);
    }
    setRotate(cxt, angle) {
        cxt.setTransform(Math.cos(angle), Math.sin(angle), -Math.sin(angle), Math.cos(angle), 0, 0);
    }
    setScale(cxt, sx, sy) {
        cxt.setTransform(sx, 0, 0, sy, 0, 0);
    }
    checkRect(rect1, rect2) {
        return !(rect1.x > rect2.x + rect2.width ||
            rect1.x + rect1.width < rect2.x ||
            rect1.y > rect2.y + rect2.height ||
            rect1.y + rect1.height < rect2.y);
    }
    checkCircle(circle1, circle2) {
        var dx = circle1.x - circle2.x;
        var dy = circle1.y - circle2.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        return distance < circle1.r + circle2.r;
    }
}
class Ball {
    constructor(x, y, radius, color, rotation) {
        this.x = x || 0;
        this.y = y || 0;
        this.r = radius || 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.color = color || '#6699FF';
        this.rotation = rotation || 0;
    }
    stroke(cxt) {
        cxt.save()
        cxt.scale(this.scaleX, this.scaleY)
        cxt.strokeStyle = this.color
        cxt.beginPath()
        cxt.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
        cxt.closePath()
        cxt.stroke()
        cxt.restore()
    }
    fill(cxt) {
        cxt.save()
        cxt.translate(this.x, this.y)
        cxt.rotate(this.rotation)
        cxt.scale(this.scaleX, this.scaleY)
        cxt.fillStyle = this.color
        cxt.beginPath()
        cxt.arc(0, 0, this.r, 0, 2 * Math.PI, false)
        cxt.closePath()
        cxt.fill()
        cxt.restore()
    }
}
class ImageData{
    reverse(data) {
        for (let i = 0; i < data.length; i += 4){
            data[i] = 255 - data[i];
            data[i + 1] = 255 - data[i + 1];
            data[i + 2] = 255 - data[i + 2];
        }
        return data
    }
    blackWhite(data) { 
        for (let i = 0; i < data.length; i += 4){
            let gray = (data[i]*0.3 + data[i + 1]*0.6 + data[i + 2]*0.1);
            data[i] = gray;
            data[i + 1] = gray;
            data[i + 2] = gray;
        }
        return data
    }
    brightness(data, b) {
        for (let i = 0; i < data.length; i += 4){
            data[i] += b;
            data[i + 1] += b;
            data[i + 2] += b;
        }
        return data
    }
    speia(data) {
        for (let i = 0; i < data.length; i += 4){
            let r = data[i];
            let g = data[i + 1];
            let b = data[i + 2];
            data[i] = r*0.39+g*0.76+b*0.15;
            data[i + 1] = r*0.34+g*0.6+b*0.06;
            data[i + 2] = r*0.11+g*0.81+b*0.19;
        }
        return data
    }
    redMask(data) {
        for (let i = 0; i < data.length; i += 4) {
            let r = data[i];
            let g = data[i + 1];
            let b = data[i + 2];
            let average = (r + g + b) / 3;
            data[i] = average;
            data[i + 1] = 0;
            data[i + 2] = 0;
        }
        return data
    }
    greenMask(data) { 
        for (let i = 0; i < data.length; i += 4) {
            let r = data[i];
            let g = data[i + 1];
            let b = data[i + 2];
            let average = (r + g + b) / 3;
            data[i] = 0;
            data[i + 1] = average;
            data[i + 2] = 0;
        }
        return data
    }
    blueMask(data) { 
        for (let i = 0; i < data.length; i += 4) {
            let r = data[i];
            let g = data[i + 1];
            let b = data[i + 2];
            let average = (r + g + b) / 3;
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = average;
        }
        return data
    }
    alpha(data,a) {
        for (let i = 0; i < data.length; i += 4){
            data[i + 3] *= a;
        }
        return data
    }
}
class Arrow{
    constructor(x,y,color,angle) {
        this.x = x || 0
        this.y = y || 0
        this.color = color || '#FF0099'
        this.angle = angle || 0
    }
    stroke(cxt) {
        cxt.save()
        cxt.translate(this.x, this.y)
        cxt.rotate(this.angle)
        cxt.strokeStyle = this.color
        cxt.beginPath()
        cxt.moveTo(-20, -10)
        cxt.lineTo(0, -10)
        cxt.lineTo(0, -20)
        cxt.lineTo(20, 0)
        cxt.lineTo(0, 20)
        cxt.lineTo(0, 10)
        cxt.lineTo(-20, 10)
        cxt.closePath()
        cxt.stroke()
        cxt.restore()
    }
    fill(cxt) {
        cxt.save()
        cxt.translate(this.x, this.y)
        cxt.rotate(this.angle)
        cxt.fillStyle = this.color
        cxt.beginPath()
        cxt.moveTo(-20, -10)
        cxt.lineTo(0, -10)
        cxt.lineTo(0, -20)
        cxt.lineTo(20, 0)
        cxt.lineTo(0, 20)
        cxt.lineTo(0, 10)
        cxt.lineTo(-20, 10)
        cxt.closePath()
        cxt.fill()
        cxt.restore()
    }
}
class Mouse{
    constructor() {
        this.x = 0
        this.y = 0
    }
    getMouse(element) {
        window.addEventListener("mousemove", function (e) {
            let e1 = e || window.event;
            let x, y;
            if (e1.pageX || e1.pageY) {
                x = e1.pageX;
                y = e1.pageY;
            } else {
                x = e1.clientX + document.body.scrollLeft || document.documentElement.scrollLeft;
                y = e1.clientY + document.body.scrollTop || document.documentElement.scrollTop;
            }
            x -= element.offsetLeft;
            y -= element.offsetTop;
            Mouse.x = x;
            Mouse.y = y;
        })
        x = this.x
        y = this.y
        return {x,y}
    }
}
class Key{
    constructor() {
        let key = {}
    }
    getKey() { 
        window.addEventListener("keydown", function (e) {
            this.key.key = e.key
        })
        return this.key.key
    }
}