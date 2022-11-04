z=localStorage.getItem("p1");
w=localStorage.getItem("p2");
p1s=0
p2s=0
document.getElementById("pl1").innerHTML=z+":";
document.getElementById("pl2").innerHTML=w+":";
document.getElementById("pl1s").innerHTML=p1s;
document.getElementById("pl2s").innerHTML=p2s;
document.getElementById("q").innerHTML="Question Turn: "+z;
document.getElementById("a").innerHTML="Answer Turn: "+w;

function s(){
    h=document.getElementById("word").value;
    h1=h.toLowerCase();
    console.log(h1);

    c1=h1.charAt(1);
    console.log(c1);

    l1=Math.floor(h1.length/2);
    c2=h1.charAt(l1);
    console.log(c2);

    l2=h1.length-1;
    c3=h1.charAt(l2);
    console.log(c3);

    r1=h1.replace(c1,"_");
    r2=r1.replace(c2,"_");
    r3=r2.replace(c3,"_");

    question_word = "<h4 id='word_display'> Q. "+r3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

qt="player1";
at="player2";
function check(){
    x=document.getElementById("input_check_box").value;
   z1=x.toLowerCase();
    console.log(z);
    if(z1==h1){
if(at=="player1"){
    p1s=p1s+1;
    document.getElementById("pl1s").innerHTML=p1s;
}
else{
    p2s=p2s+1;
    document.getElementById("pl2s").innerHTML=p2s;
}
    }

    if(qt=="player1"){
qt="player2";
document.getElementById("q").innerHTML="Question Turn: "+w;
    }
    else{
        qt="player1";
document.getElementById("q").innerHTML="Question Turn: "+z;
    }

    if(at=="player1"){
        at="player2";
        document.getElementById("a").innerHTML="Answer Turn: "+w;
            }
            else{
                at="player1";
        document.getElementById("a").innerHTML="Answer Turn: "+z;
            }  
document.getElementById("output").innerHTML="";
        }

