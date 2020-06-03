


const butt= document.getElementById('butt');

butt.addEventListener('click',help);


function help(){

    //window.alert("hello");

    let str=performance.now();

    let num=document.getElementById("numb").value;

    num=parseInt(num);

    console.log(typeof num);
    console.log(num);

    const mlim =Number.MAX_SAFE_INTEGER;

    if(num>mlim) {console.log("too big ");return ;}  
    let i=2;
    const res=[];

    while(!(num%i))
    {
        res.push(i);
        num/=i;
    }

    for(i=3;i*i<=num;i+=2)
    {
        while(!(num%i))
        {
            res.push(i);
            num/=i;
        }
    }
    if(num>1)res.push(num);


    console.log(res);



    let end =performance.now();

    console.log(end-str);

}