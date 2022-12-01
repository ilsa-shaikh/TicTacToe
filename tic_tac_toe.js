function myfunc(){
    var ps1=document.getElementById("p1").value;
    var ps2=document.getElementById("p2").value;
    var b1=document.getElementById('b1').value;
    var b2=document.getElementById('b2').value;
    var b3=document.getElementById('b3').value;
    var b4=document.getElementById('b4').value;
    var b5=document.getElementById('b5').value;
    var b6=document.getElementById('b6').value;
    var b7=document.getElementById('b7').value;
    var b8=document.getElementById('b8').value;
    var b9=document.getElementById('b9').value;

    if((b1=='x'|| b1=='X')  && (b2=='x'|| b2=='X') && (b3=='x'|| b3=='X')){
        document.getElementById('p').innerHTML="Player 1 won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 1 won');
        ps1=parseInt(ps1)+1;
        console.log(ps1)


    }else if((b1=='x' || b1=='X') && (b4=='x' || b4=='X') && (b7=='x' || b7=='X')){
        document.getElementById('p').innerHTML="Player 1 won"
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 1 won');
        ps1=parseInt(ps1)+1;

    }else if((b1=='x' || b1=='X') && (b5=='x' || b5=='X') && (b9=='x' || b9=='X')){
        document.getElementById('p').innerHTML="Player 1 won"
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player 1 won');
        ps1=parseInt(ps1)+1;


    }else if((b3=='x' || b3=='X') && (b6=='x' ||b6=='X') && (b9=='x'||b9=='X')){
        document.getElementById('p').innerHTML="Player 1 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player 1 won');
        ps1=parseInt(ps1)+1;


    }else if((b3=='x' || b3=='X') && (b5=='x' || b5=='X') && (b7=='x' || b7=='X')){
        document.getElementById('p').innerHTML="Player 1 won"
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 1 won');
        ps1=parseInt(ps1)+1;


    }else if((b7=='x' || b7=='X')&& (b8=='x' || b8=='X') && (b9=='x' || b9=='X')){
        document.getElementById('p').innerHTML="Player 1 won"
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        window.alert('Player 1 won');
        ps1=parseInt(ps1)+1;


    }else if((b2=='x' || b2=='X')&& (b5=='x' || b5=='X') && (b8=='x' || b8=='X')){
            document.getElementById('p').innerHTML="Player 1 won"
            document.getElementById("b1").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b9").disabled = true;
            window.alert('Player 1 won');
            ps1=parseInt(ps1)+1;


    }else if((b4=='x' || b4=='X')&& (b5=='x' || b5=='X') && (b6=='x' || b6=='X')){
        document.getElementById('p').innerHTML="Player 1 won"
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 1 won');
        ps1=parseInt(ps1)+1;


    }
        //start for 00

    else if((b1=='0'|| b1=='0')  && (b2=='0'|| b2=='0') && (b3=='0'|| b3=='0')){
        document.getElementById('p').innerHTML="Player 2 won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 2 won')
        ps2=parseInt(ps2)+1;

    }else if((b1=='0' || b1=='0') && (b4=='0' || b4=='0') && (b7=='0' || b7=='0')){
        document.getElementById('p').innerHTML="Player 2 won"
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 2 won');
        ps2=parseInt(ps2)+1;


    }else if((b1=='0' || b1=='0') && (b5=='0' || b5=='0') && (b9=='0' || b9=='0')){
        document.getElementById('p').innerHTML="Player 2 won"
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player 2 won');
        ps2=parseInt(ps2)+1;


    }else if((b3=='0' || b3=='0') && (b6=='0' ||b6=='0') && (b9=='0'||b9=='0')){
        document.getElementById('p').innerHTML="Player 2 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player 2 won');
        ps2=parseInt(ps2)+1;


    }else if((b3=='0' || b3=='0') && (b5=='0' || b5=='0') && (b7=='0' || b7=='0')){
        document.getElementById('p').innerHTML="Player 2 won"
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 2 won');
        ps2=parseInt(ps2)+1;


    }else if((b7=='0' || b7=='0')&& (b8=='0' || b8=='0') && (b9=='0' || b9=='0')){
        document.getElementById('p').innerHTML="Player 2 won"
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        window.alert('Player 2 won');
        ps2=parseInt(ps2)+1;


    }else if((b2=='0' || b2=='0')&& (b5=='0' || b5=='0') && (b8=='0' || b8=='0')){
        document.getElementById('p').innerHTML="Player 2 won"
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 2 won');
        ps2=parseInt(ps2)+1;


    }else if((b4=='0' || b4=='0')&& (b5=='0' || b5=='0') && (b6=='0' || b6=='0')){
    document.getElementById('p').innerHTML="Player 2 won"
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player 2 won');
    ps2=parseInt(ps2)+1;

    }
      else if ((b1 == 'X' || b1 == '0' || b1 == 'x') && 
    (b2 == 'X'|| b2 == '0' || b2 == 'x') && 
    (b3 == 'X' || b3 == '0' || b3 == 'x') &&
    (b4 == 'X' || b4 == '0' || b4 == 'x') && 
    (b5 == 'X' || b5 == '0' || b5 == 'x') && 
    (b6 == 'X' || b6 == '0' || b6 == 'x') &&
    (b7 == 'X' || b7 == '0' || b7 == 'x') && 
    (b8 == 'X' ||b8 == '0' || b8 == 'x')  && 
    (b9 == 'X' || b9 == '0' || b9 == 'x')) {
    document.getElementById('p').innerHTML = "Match Tie";
    window.alert('Match Tie');
}
else {

    // Here, Printing Result
    if (flag == 1) {
        document.getElementById('p')
            .innerHTML = "Player 1 Turn";
    }
    else {
        document.getElementById('p')
            .innerHTML = "Player 2 Turn";
    }
}
document.getElementById('p1').value=ps1;
document.getElementById('p2').value=ps2;
}
    
    function next(){
     
    document.getElementById('b1').value="";
    document.getElementById('b2').value="";
    document.getElementById('b3').value="";
    document.getElementById('b4').value="";
    document.getElementById('b5').value="";
    document.getElementById('b6').value="";
    document.getElementById('b7').value="";
    document.getElementById('b8').value="";
    document.getElementById('b9').value="";
      
    document.getElementById('b1').disabled = false;
    document.getElementById('b2').disabled = false;
    document.getElementById('b3').disabled = false;
      document.getElementById("b4").disabled = false;
      document.getElementById("b5").disabled = false;
      document.getElementById("b6").disabled = false;
      document.getElementById("b7").disabled = false;
      document.getElementById("b8").disabled = false;
      document.getElementById("b9").disabled = false;
    }

    flag=1;
    function myfunc1(){
    if(flag==1){
    document.getElementById('b1').value='x';
    document.getElementById('b1').disabled=true;
    flag=0;
    }else{
    document.getElementById('b1').value='0';
    document.getElementById('b1').disabled=true;
     flag=1;
    }
    }
    function myfunc2(){
    if(flag==1){
    document.getElementById('b2').value='x';
    document.getElementById('b2').disabled=true;
    flag=0;
    }else{
    document.getElementById('b2').value='0';
    document.getElementById('b2').disabled=true;
     flag=1;
    }
    }
    function myfunc3(){
    if(flag==1){
    document.getElementById('b3').value='x';
    document.getElementById('b3').disabled=true;
    flag=0;
    }else{
    document.getElementById('b3').value='0';
    document.getElementById('b3').disabled=true;
     flag=1;
    }
    }
    function myfunc4(){
    if(flag==1){
    document.getElementById('b4').value='x';
    document.getElementById('b4').disabled=true;
    flag=0;
    }else{
    document.getElementById('b4').value='0';
    document.getElementById('b4').disabled=true;
     flag=1;
    }
    }

    function myfunc5(){
    if(flag==1){
    document.getElementById('b5').value='x';
    document.getElementById('b5').disabled=true;
    flag=0;
    }else{
    document.getElementById('b5').value='0';
    document.getElementById('b5').disabled=true;
     flag=1;
    }
    }
    function myfunc6(){
    if(flag==1){
    document.getElementById('b6').value='x';
    document.getElementById('b6').disabled=true;
    flag=0;
    }else{
    document.getElementById('b6').value='0';
    document.getElementById('b6').disabled=true;
     flag=1;
    }
    }
    function myfunc7(){
    if(flag==1){
    document.getElementById('b7').value='x';
    document.getElementById('b7').disabled=true;
    flag=0;
    }else{
    document.getElementById('b7').value='0';
    document.getElementById('b7').disabled=true;
     flag=1;
    }
    }

    function myfunc8(){
    if(flag==1){
    document.getElementById('b8').value='x';
    document.getElementById('b8').disabled=true;
    flag=0;
    }else{
    document.getElementById('b8').value='0';
    document.getElementById('b8').disabled=true;
     flag=1;
    }
    }

    function myfunc9(){
    if(flag==1){
    document.getElementById('b9').value='x';
    document.getElementById('b9').disabled=true;
    flag=0;
    }else{
    document.getElementById('b9').value='0';
    document.getElementById('b9').disabled=true;
     flag=1;
    }
    }
    var ps1=document.getElementById("p1").value;
    var ps2=document.getElementById("p2").value;
    console.log(ps1)
