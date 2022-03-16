import React from "react";
import classes from './collectionLink.module.css'
const CollectionLink = ({name,posterPath,goToCollection}) => {
  return (
    <section className={classes.collection_container}>
      <span>está película pertenece a la colección: </span>
      <br />
      <strong>{name}</strong>
      <img
        className={classes.img_collection}
        src={
          "https://image.tmdb.org/t/p/original" +posterPath
           }
          alt='imagen de la colección'
          onClick={goToCollection}
      />
    </section>
  );
};
export default CollectionLink;
