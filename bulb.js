function green(){
    
    let status=document.getElementById('status').checked
    console.log(status);
    if(status==true){
        document.getElementById('img').src='./pic_bulbon.gif'
        
    }
    else{
        document.getElementById('img').src='./pic_bulboff.gif'
    }
   
    
    
    
}