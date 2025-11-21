console.log("this is a text message")
const screen= document.getElementById("outputscreen");
    function display(val){
        screen.value += val;
    }
    function Clear(){
        screen.value="";
    }
    function del(){
        screen.value= screen.value.slice(0,-1);
    }
    function Calculate(){
        const expr= screen.value;
        if (!expr.trim()) return;
        try{
            const result= Function('return ' + expr)();
            screen.value=String(result);
        } catch(e){
            screen.value="Error";
            setTimeout(()=>(screen.value=''),800)
        }

    }
