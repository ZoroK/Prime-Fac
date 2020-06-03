


const butt= document.getElementById('butt');

butt.addEventListener('click',help);


function help(){

    //window.alert("hello");

    const outp= document.getElementById('outp');

    let str=performance.now();
    let ans="";

    let num=document.getElementById("numb").value;

    // console.log(typeof num);

    if(isNaN(parseInt(num)))
    {
        ans="Enter a valid number";
    }
    else 
    {
        num=parseInt(num);

        // console.log(typeof num);
        // console.log(num);
    
        const mlim =Number.MAX_SAFE_INTEGER;
    
        if(num>mlim||num<1) {ans="Enter a valid number";} 
        else{
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
    
    
     //   console.log(res);
        ans=res.join(" ,");
        let end =performance.now();
    
        console.log(end-str);
        } 
    }
    outp.textContent=("Output : "+ ans);
   // console.log(ans);
}