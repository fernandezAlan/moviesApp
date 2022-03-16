import React from "react";
import classes from "./selectedTitle.module.css";
import Genre from "../Genre/Genre";
import ActorCasting from "../ActorCasting/ActorCasting";
import CollectionLink from "../CollectionLink/CollectionLink";
import EpisodesLink from "../EpisodesLink/EpisodesLink";
import { toggleElement } from "../../utils";
import { useNavigate } from "react-router-dom";
import Images from "../Images/Images";
import InformationContainer from "../InformationContainer/InformationContainer";
import PreviousTitles from "../PreviousTitles/PreviousTitles";
import Director from "../Director/Director";
import Button from "../Button/Button";

const SelectedTitle = ({ selectedTitle, credits, type }) => {
  const navigate = useNavigate();
  return (
    <div>
      {selectedTitle && credits ? (
        <>
          <div className={classes.container}>
            <section className={classes.sub_container}>
              <div className={classes.img_container}>
                <div className={classes.genre_container}>
                  {selectedTitle?.genres?.map((genre) => (
                    <Genre genreName={genre.name} />
                  ))}
                </div>
                <Images singleURL={selectedTitle.poster_path} />
                <a href={selectedTitle.homepage}>
                  <div
                    className={classes.homepageLink}
                    onMouseEnter={() =>
                      toggleElement("link_to_homepage", "block", "enter")
                    }
                    onMouseLeave={() =>
                      toggleElement("link_to_homepage", "block", "leave")
                    }
                  >
                    <div id="link_to_homepage" style={{ display: "none" }}>
                      <span>visitar la página oficial</span>
                    </div>
                  </div>
                </a>
              </div>
            </section>
            <section className={classes.info_movie_container}>
              <section>
                <h3 className={classes.title}>
                  {selectedTitle.title
                    ? selectedTitle.title
                    : selectedTitle.name}
                </h3>
                <InformationContainer information={selectedTitle.overview} />
                <section className={classes.additional_data}>
                  <section>
                    <div>
                      <strong>fecha de estreno:</strong>
                      <span>{selectedTitle.release_date}</span>
                    </div>
                    <div>
                      <strong>puntuación:</strong>
                      <span>{selectedTitle.vote_average}</span>
                    </div>
                  </section>
                  <section>
                    <PreviousTitles
                      type="películas"
                      name={selectedTitle.title}
                      titles={selectedTitle.previewSimilarMovies}
                    />
                  </section>
                </section>
                {false ? (
                  <CollectionLink
                    name={selectedTitle?.belongs_to_collection?.name}
                    posterPath={
                      selectedTitle?.belongs_to_collection?.poster_path
                    }
                    goToCollection={() =>
                      navigate(
                        "/collection/" +
                          selectedTitle?.belongs_to_collection?.id
                      )
                    }
                  />
                ) : null}
                {type === "tvserie" ? (
                  <div className={classes.season_container}>
                    <span>{`${selectedTitle.number_of_seasons} TEMPORADA${
                      selectedTitle.number_of_seasons > 1 ? "S" : ""
                    }`}</span>
                    <Button
                      label={"ver detalles de las temporadas"}
                      click={() => navigate(`/tv/${selectedTitle.id}/seasons`)}
                    />
                  </div>
                ) : null}
              </section>
            </section>
            <section className={classes.actors_container}>
              {credits.director ? (
                <section>
                  <h6 className={classes.title_person}>Director</h6>
                  <div className={classes.director_container}>
                    {credits.director.map((dir) => (
                      <Director
                        name={dir.name}
                        imgURL={dir.profile_path}
                        goToPersonPage={() => navigate("/person/" + dir.id)}
                      />
                    ))}
                  </div>
                </section>
              ) : null}
              {type === "tvserie" ? (
                <section>
                  <h6 className={classes.title_person}>creado por</h6>
                  <div className={classes.director_container}>
                    {selectedTitle.created_by.map((dir) => (
                      <Director
                        name={dir.name}
                        imgURL={dir.profile_path}
                        goToPersonPage={() => navigate("/person/" + dir.id)}
                      />
                    ))}
                  </div>
                </section>
              ) : null}
              <section className={classes.actors_sub_container}>
                <h6 className={classes.title_person}>casting</h6>
                {credits.cast.map((actor) => (
                  <ActorCasting
                    ActorName={actor.name}
                    characterName={actor.character}
                    imgURL={actor.profile_path}
                    goToPersonPage={() => navigate("/person/" + actor.id)}
                  />
                ))}
              </section>
            </section>
          </div>
        </>
      ) : (
        <span>loading</span>
      )}
    </div>
  );
};

export default SelectedTitle;
