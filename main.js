nameoftheguestarray=[];
function submit()
{
var displayguestarray=[];
for (var j=1; j<=4; j++)
{
    var namoftheguest=document.getElementById("nameoftheguest"+j).value;
    console.log(namoftheguest);
    nameoftheguestarray.push(namoftheguest);
}
console.log(nameoftheguestarray);
var lengthofnameoftheguestarray=nameofthestudentarray.lenght;
console.log(lengthofnameoftheguestarray);
for (var k=0; k<lengthofnameoftheguestarray; k++)
{
   displayguestarray.push("<h4>name -"+nameoftheguestarray[k] + "<h4>");
   console.log(displayguestarray);
}
console.log(displayguestarray);
document.getElementById("displaynamewithcommas").innerHTML=displayguestarray;
var removecommas=displayguestarraysorting.join(" ");
console.log(removecommas);
document.getElementById("displaynamewithoutcommas").innerHTML=removecommas;
document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";

}