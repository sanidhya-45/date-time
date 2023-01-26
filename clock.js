monthinyear=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function getdate()
{
    const date=new Date();
    var x=date.getFullYear()
    x=x.toString()
    var y=date.getMonth()
    y=monthinyear[y]
    console.log(y);
    var z=date.getDate()
    z=z.toString()
    console.log(z);
    console.log(x,y,z);
    document.getElementById("date").innerHTML=x+' '+y+' '+z
}
function sound()
{
    var audio= new Audio('clock-ticking-2.wav')
    audio.play()
    audio.loop(1)
}
function gettime()
{
    const time=new Date();

    var x1=time.getHours()
    var y1=time.getMinutes()
    var z1=time.getSeconds()
    var w1=time.getMilliseconds()

    x1=x1.toString()
    y1=y1.toString()
    z1=z1.toString()
    w1=w1.toString()
    document.getElementById("timenow").innerHTML=x1+ ' '+y1+' '+z1;
    setTimeout("gettime()",1000);
}