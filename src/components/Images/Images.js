import React, { useEffect, useState } from "react";
import classes from './image.module.css'
const Image = ({ allImg, singleURL, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedURL, setSelectedURL] = useState(
    allImg ? allImg[0].file_path : singleURL
  );

  useEffect(() => {
    const containerImg = document.getElementById("all_img")
    if(containerImg){
        const allImg = containerImg.childNodes
        allImg.forEach((div) => {
          const [img,line] = div.childNodes
          if (img.id === `img_${selectedIndex}`) {
            img.style.border = "solid 3px #610094";
            img.style.filter= 'opacity(1)'
            line.style.width ='3px'
          } else {
            img.style.border = "3px solid transparent";
            img.style.filter= 'opacity(0.5)'
            line.style.width ='0px'
          }
        });
    }
    
  }, [selectedURL]);

  return (
    <>
      {title ? (<h4>{title}</h4>) : null }
      <img 
          src={`https://image.tmdb.org/t/p/original${selectedURL}`} 
          className={classes.principal_img}
          />
    </>
  );
};

export default Image