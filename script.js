function pro_img(num)
{
  const proimg = document.getElementById('product');
  
  if(num==1){
    proimg.src ="1image.jpg";
  }
  else if(num==2)
    {
        proimg.src="2image.jpg";
    }
  else if(num==3)
        {
            proimg.src="3image.jpg";
        }  
        else if(num==4)
            {
                proimg.src="4image.jpg";
            }     
}