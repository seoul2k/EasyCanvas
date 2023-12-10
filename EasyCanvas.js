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
    createRoundedRect(cxt, x, y, azwidth, height, r) {
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
        cxt.scale(scaleX, scaleY)
        cxt.strokeStyle = color
        cxt.beginPath()
        cxt.arc(x, y, r, 0, 2 * Math.PI, false)
        cxt.closePath()
        cxt.stroke()
        cxt.restore()
    }
    fill(cxt) {
        cxt.save()
        cxt.translate(x, y)
        cxt.rotate(rotation)
        cxt.scale(scaleX, scaleY)
        cxt.fillStyle = color
        cxt.beginPath()
        cxt.arc(0, 0, r, 0, 2 * Math.PI, false)
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
            let e = e || window.event;
            let x, y;
            if (e.pageX || e.pageY) {
                x = e.pageX;
                y = e.pageY;
            } else {
                x = e.clientX + document.body.scrollLeft || document.documentElement.scrollLeft;
                y = e.clientY + document.body.scrollTop || document.documentElement.scrollTop;
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