function add()
  {
    var x = parseInt(document.getElementById("txtNo1").value);
    var y = parseInt(document.getElementById("txtNo2").value);
    //alert(x+y);
    console.log(x+y);
    document.getElementById("txtResult").value = x+y;
 }
 function subtract()
 {
  var x = parseInt(document.getElementById("txtNo1").value);
    var y = parseInt(document.getElementById("txtNo2").value);
    //alert(x+y);
    console.log(x-y);
    document.getElementById("txtResult").value = x-y;
 }
 function product()
 {
  var x = parseInt(document.getElementById("txtNo1").value);
    var y = parseInt(document.getElementById("txtNo2").value);
    //alert(x+y);
    console.log(x*y);
    document.getElementById("txtResult").value = x*y;
 }
 function divide()
 {
  var x = parseInt(document.getElementById("txtNo1").value);
    var y = parseInt(document.getElementById("txtNo2").value);
    //alert(x+y);
    console.log(x/y);
    document.getElementById("txtResult").value = x/y;
 }
 function change()
 {
   alert("A");
  document.getElementById("para1").style.fontSize = "35px";
 }

 function documentwrite()
 {
   document.write("Hello");
 }

 function CheckForEven()
 {
    var num = parseInt(document.getElementById("txtNo").value);
    if(num%2==0)
    console.log("even");
    else
    console.log("odd");
 }