function pro_img(num)
{
  const proimg = document.getElementById('product');
  
  if(num==1){
    proimg.src ="./product images/1image.jpg";
  }
  else if(num==2)
    {
        proimg.src="./product images/2image.jpg";
    }
  else if(num==3)
        {
            proimg.src="./product images/3image.jpg";
        }  
        else if(num==4)
            {
                proimg.src="./product images/4image.jpg";
            }     
}