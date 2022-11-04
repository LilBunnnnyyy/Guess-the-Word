function a(){
     b=document.getElementById("input1").value;
     c=document.getElementById("input2").value;
     localStorage.setItem("p1",b);
     localStorage.setItem("p2",c);
     window.location="index1.html";
}