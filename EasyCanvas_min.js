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
eval(function (p, a, c, k, e, r) { e = function (c) { return (c < 62 ? '' : e(parseInt(c / 62))) + ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '([57-9d-fhj-qs-wzA-Z]|1\\w)' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('m ${z(1b){8.A=B.querySelector(1b);d 8.A}onclick(q){d 8.A.C(\'click\',q)}onmouseover(q){d 8.A.C(\'mouseover\',q)}onmouseout(q){d 8.A.C(\'mouseout\',q)}}m Graphicals{createRoundedRect(5,x,y,s,n,r){5.t();5.D(x+r,y);5.e(x+s-r,y);5.T(x+s,y,y+n,y+r,r)5.e(x+s,y+n-r);5.T(x,y+n,x,y+n-r,r)5.e(x,y+r);5.T(x,y,x+r,y,r);5.u()}createSector(5,x,y,r,1c,1d){5.t();5.D(x,y);5.U(x,y,r,1c*h.E/1e,1d*h.E/1e);5.u()}F(5,x,y){5.V(1,0,0,1,x,y)}G(5,f){5.V(h.H(f),h.I(f),-h.I(f),h.H(f),0,0)}W(5,J,K){5.V(J,0,0,K,0,0)}setTranslate(5,x,y){5.X(1,0,0,1,x,y)}setRotate(5,f){5.X(h.H(f),h.I(f),-h.I(f),h.H(f),0,0)}setScale(5,J,K){5.X(J,0,0,K,0,0)}checkRect(o,p){d!(o.x>p.x+p.s||o.x+o.s<p.x||o.y>p.y+p.n||o.y+o.n<p.y)}checkCircle(L,M){Y Z=L.x-M.x;Y dy=L.y-M.y;Y 1f=h.sqrt(Z*Z+dy*dy);d 1f<L.r+M.r}}m Ball{z(x,y,1g,j,N){8.x=x||0;8.y=y||0;8.r=1g||0;8.13=1;8.14=1;8.j=j||\'#6699FF\';8.N=N||0}O(5){5.P()5.W(13,14)5.1h=j 5.t()5.U(x,y,r,0,2*h.E,1i)5.u()5.O()5.Q()}R(5){5.P()5.F(x,y)5.G(N)5.W(13,14)5.1j=j 5.t()5.U(0,0,r,0,2*h.E,1i)5.u()5.R()5.Q()}}m ImageData{reverse(7){k(9 i=0;i<7.l;i+=4){7[i]=16-7[i];7[i+1]=16-7[i+1];7[i+2]=16-7[i+2]}d 7}blackWhite(7){k(9 i=0;i<7.l;i+=4){9 S=(7[i]*0.3+7[i+1]*0.6+7[i+2]*0.1);7[i]=S;7[i+1]=S;7[i+2]=S}d 7}brightness(7,b){k(9 i=0;i<7.l;i+=4){7[i]+=b;7[i+1]+=b;7[i+2]+=b}d 7}speia(7){k(9 i=0;i<7.l;i+=4){9 r=7[i];9 g=7[i+1];9 b=7[i+2];7[i]=r*0.39+g*0.76+b*0.15;7[i+1]=r*0.34+g*0.6+b*0.06;7[i+2]=r*0.11+g*0.81+b*0.19}d 7}redMask(7){k(9 i=0;i<7.l;i+=4){9 r=7[i];9 g=7[i+1];9 b=7[i+2];9 v=(r+g+b)/3;7[i]=v;7[i+1]=0;7[i+2]=0}d 7}greenMask(7){k(9 i=0;i<7.l;i+=4){9 r=7[i];9 g=7[i+1];9 b=7[i+2];9 v=(r+g+b)/3;7[i]=0;7[i+1]=v;7[i+2]=0}d 7}blueMask(7){k(9 i=0;i<7.l;i+=4){9 r=7[i];9 g=7[i+1];9 b=7[i+2];9 v=(r+g+b)/3;7[i]=0;7[i+1]=0;7[i+2]=v}d 7}alpha(7,a){k(9 i=0;i<7.l;i+=4){7[i+3]*=a}d 7}}m Arrow{z(x,y,j,f){8.x=x||0 8.y=y||0 8.j=j||\'#FF0099\'8.f=f||0}O(5){5.P()5.F(8.x,8.y)5.G(8.f)5.1h=8.j 5.t()5.D(-20,-10)5.e(0,-10)5.e(0,-20)5.e(20,0)5.e(0,20)5.e(0,10)5.e(-20,10)5.u()5.O()5.Q()}R(5){5.P()5.F(8.x,8.y)5.G(8.f)5.1j=8.j 5.t()5.D(-20,-10)5.e(0,-10)5.e(0,-20)5.e(20,0)5.e(0,20)5.e(0,10)5.e(-20,10)5.u()5.R()5.Q()}}m 17{z(){8.x=0 8.y=0}getMouse(18){1a.C("mousemove",1k(c){9 c=c||1a.event;9 x,y;if(c.1l||c.1m){x=c.1l;y=c.1m}else{x=c.clientX+B.1n.1o||B.1p.1o;y=c.clientY+B.1n.1q||B.1p.1q}x-=18.offsetLeft;y-=18.offsetTop;17.x=x;17.y=y})x=8.x y=8.y d{x,y}}}m Key{z(){9 w={}}getKey(){1a.C("keydown",1k(c){8.w.w=c.w})d 8.w.w}}', [], 89, '|||||cxt||data|this|let||||return|lineTo|angle||Math||color|for|length|class|height|rect1|rect2|callback||width|beginPath|closePath|average|key|||constructor|dom|document|addEventListener|moveTo|PI|translate|rotate|cos|sin|sx|sy|circle1|circle2|rotation|stroke|save|restore|fill|gray|arcTo|arc|transform|scale|setTransform|var|dx||||scaleX|scaleY||255|Mouse|element||window|selector|startAngle|endAngle|180|distance|radius|strokeStyle|false|fillStyle|function|pageX|pageY|body|scrollLeft|documentElement|scrollTop'.split('|'), 0, {}));