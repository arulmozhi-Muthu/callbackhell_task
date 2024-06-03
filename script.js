var h1=document.createElement("h1")
h1.className="main";
document.body.append(h1);

setTimeout(()=>{
    document.querySelector("h1").innerHTML=`Counter:${10}`;
    setTimeout(()=>{
        document.querySelector("h1").innerHTML=`Counter:${9}`;
        setTimeout(()=>{
            document.querySelector("h1").innerHTML=`Counter:${8}`;
            setTimeout(()=>{
                document.querySelector("h1").innerHTML=`Counter:${7}`;
                setTimeout(()=>{
                    document.querySelector("h1").innerHTML=`Counter:${6}`;
                    setTimeout(()=>{
                        document.querySelector("h1").innerHTML=`Counter:${5}`;
                        setTimeout(()=>{
                            document.querySelector("h1").innerHTML=`Counter:${4}`;
                            setTimeout(()=>{
                                document.querySelector("h1").innerHTML=`Counter:${3}`;
                                setTimeout(()=>{
                                    document.querySelector("h1").innerHTML=`Counter:${2}`;
                                    setTimeout(()=>{
                                        document.querySelector("h1").innerHTML=`Counter:${1}`;
                                        setTimeout(()=>{
                                            document.querySelector("h1").innerHTML=`Happy Independence Day`;
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
},1000);