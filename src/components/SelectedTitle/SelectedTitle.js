import React from "react";
import classes from "./selectedTitle.module.css";
import Genre from "../Genre/Genre";
import ActorCasting from "../ActorCasting/ActorCasting";
import CollectionLink from "../CollectionLink/CollectionLink";
import EpisodesLink from "../EpisodesLink/EpisodesLink";
import { toggleElement, formatDate } from "../../utils";
import { useNavigate } from "react-router-dom";
import Images from "../Images/Images";
import InformationContainer from "../InformationContainer/InformationContainer";
import PreviousTitles from "../PreviousTitles/PreviousTitles";
import Director from "../Director/Director";
import Button from "../Button/Button";
import {
  RateNumber,
  DateContainer,
  TitlePerson,
} from "../../styledComponents/texts/texts";
import {
  Container,
  PosterContainer,
  SelectTitleContainer,
  HomepageLink,
  LinkToHomePage,
  InfoContainer,
  CrewContainer,
  DirectorContainer,
  ActorsContainer,
  SeasonContainer,
} from "../../styledComponents/containers/containers";

const SelectedTitle = ({ selectedTitle, credits, type }) => {
  const navigate = useNavigate();
  return (
    <div>
      {selectedTitle && credits ? (
        <Container desktop={{ flexDirection: "column" }}>
          <h3 style={{ textAlign: "center", marginTop: "30px" }}>
            {selectedTitle.title ? selectedTitle.title : selectedTitle.name}
          </h3>
          <SelectTitleContainer>
            <Container
              desktop={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <PosterContainer>
                <Container
                  desktop={{
                    justifyContent: "space-between",
                    flexWrap: "nowrap",
                  }}
                  mobile={{
                    justifyContent: "space-between",
                    flexWrap: "nowrap",
                  }}
                >
                  {selectedTitle?.genres?.map((genre) => (
                    <Genre genreName={genre.name} />
                  ))}
                </Container>
                <Images singleURL={selectedTitle.poster_path} />
                <a href={selectedTitle.homepage}>
                  <HomepageLink
                    onMouseEnter={() => {
                      toggleElement("link_to_homepage", "flex", "enter");
                    }}
                    onMouseLeave={() =>
                      toggleElement("link_to_homepage", "flex", "leave")
                    }
                  >
                    <LinkToHomePage id="link_to_homepage">
                      <span>visitar la página oficial</span>
                    </LinkToHomePage>
                  </HomepageLink>
                </a>
              </PosterContainer>
            </Container>
            <Container desktop={{flexDirection:'column'}}>
              <InfoContainer>
                <Container
                  desktop={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "start",
                  }}
                  mobile={{
                    flexDirection: "column-reverse",
                    alignItems: "center",
                  }}
                >
                  <InformationContainer information={selectedTitle.overview} />
                  <Container desktop={{ flexDirection: "column" }}>
                    <section>
                      <div>
                        <strong>fecha de estreno:</strong>
                        <DateContainer>
                          {formatDate(
                            selectedTitle.release_date
                              ? selectedTitle.release_date
                              : selectedTitle.first_air_date
                          )}
                        </DateContainer>
                      </div>
                      <div>
                        <strong>puntuación:</strong>
                        <RateNumber rate={+selectedTitle.vote_average}>
                          {selectedTitle.vote_average}
                        </RateNumber>
                      </div>
                    </section>
                    <Container mobile={{ display: "none" }}>
                      <PreviousTitles
                        type="películas"
                        name={selectedTitle.title}
                        titles={selectedTitle.previewSimilarMovies}
                      />
                    </Container>
                  </Container>
                </Container>
              </InfoContainer>
              <SeasonContainer>
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
              </SeasonContainer>
            </Container>
            <CrewContainer>
              {credits.director ? (
                <section>
                  <TitlePerson>Director</TitlePerson>
                  <DirectorContainer>
                    {credits.director.map((dir) => (
                      <Director
                        name={dir.name}
                        imgURL={dir.profile_path}
                        goToPersonPage={() => navigate("/person/" + dir.id)}
                      />
                    ))}
                  </DirectorContainer>
                </section>
              ) : null}
              {type === "tvserie" ? (
                <section>
                  <TitlePerson>creado por</TitlePerson>
                  <DirectorContainer>
                    {selectedTitle.created_by.map((dir) => (
                      <Director
                        name={dir.name}
                        imgURL={dir.profile_path}
                        goToPersonPage={() => navigate("/person/" + dir.id)}
                      />
                    ))}
                  </DirectorContainer>
                </section>
              ) : null}
              <ActorsContainer>
                <TitlePerson>casting</TitlePerson>
                {credits.cast.map((actor) => (
                  <ActorCasting
                    ActorName={actor.name}
                    characterName={actor.character}
                    imgURL={actor.profile_path}
                    goToPersonPage={() => navigate("/person/" + actor.id)}
                  />
                ))}
              </ActorsContainer>
            </CrewContainer>
          </SelectTitleContainer>
        </Container>
      ) : (
        <span>loading</span>
      )}
    </div>
  );
};

export default SelectedTitle;
