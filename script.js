function display(val){
  let d=document.getElementById('result')
  d.value=d.value+val
  
   
  }
  function del(){
    result.value=result.value.slice(0,-1)
  }
  





function clearDisplay(){
    window.location="index.html"
}
function Result(){
    let inp=document.getElementById('result')
     let res=document.getElementById('result').value
     inp.value=eval(res)

     try{
        res.value=eval('result')
     }
     catch(err){
        alert("enter the valid result");
     }
    
}