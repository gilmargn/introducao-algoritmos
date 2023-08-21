let x1,x2,x3,y1,y2,y3;
x1 = parseInt(prompt("x1 = "));
y1 = parseInt(prompt("y1 = "));
x2 = parseInt(prompt("x2 = "));
y2 = parseInt(prompt("y2 = "));
x3 = parseInt(prompt("x3 = "));
y3 = parseInt(prompt("y3 = "));
var det1 = (x1*y2 + x3*y1 + x2*y3);
var det2 =(x2*y1 + x3*y2 + x1*y3);
// 5*2 + 3*4 + 4* 6 = 10 + 12 + 24
// 4*2 - 5*4 - 3*6 8+20+18
/*
x3    1 
x1 y1 1
x2 y2 1   x3*y1*1 + x1*y2 + x2*y3
x3 y3 1   x2*y1 + x3*y2 + x1*y3
x1    1

*/
var det = det1-det2;
alert(det + "\n" + (det == 0)?"Colineares":"Não são colineares")