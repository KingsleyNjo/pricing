
function slideChange(){
    var len=document.getElementsByClassName("first").length;
    var annual_price= document.getElementsByClassName("second");
    if(annual_price[0].style.display==="block")
    {
        for(i=0;i<len;i++)
        {
            document.getElementsByClassName("second")[i].style.display="none";
            document.getElementsByClassName("first")[i].style.display="block";
        }
    }
    else{
        for(i=0;i<len;i++)
        {
            document.getElementsByClassName("first")[i].style.display="none";
            document.getElementsByClassName("second")[i].style.display="block";

        }   
    }
}