import React, { useState } from "react";
import {
  MoreButton,
  ButtonFilterModal,
} from "../../styledComponents/buttons/buttons";
import {
  Container,
  ModalFilters,
  ModalBackground,
  ModalContainer
} from "../../styledComponents/containers/containers";
import { GenreLabel } from "../../styledComponents/labels/labels";
const MoreFiltersModal = ({
  filters,
  selectFilter,
  selected,
  genres,
  genreSelectedId,
  selectGenre,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Container desktop={{ display: "none" }} mobile={{ display: "flex" }}>
      <MoreButton onClick={handleOpen}>+</MoreButton>
      <ModalBackground open={open} onClick={handleClose}>
          <section>
            <h4>principales filtros</h4>
            <Container>
            {filters.map((option) => (
              <ButtonFilterModal
                selected={selected === option.type}
                onClick={() => {
                  handleClose();
                  selectFilter(option);
                }}
              >
                {option.label.toUpperCase()}
              </ButtonFilterModal>
            ))}
            </Container>
          </section>
          <section>
            <h4>géneros</h4>
            <Container>
              {genres.map((genre) => {
                return (
                  <GenreLabel
                    selected={genreSelectedId === genre.id}
                    onClick={() => {
                      handleClose();
                      selectGenre({ genre });
                    }}
                  >
                    {genre.name}
                  </GenreLabel>
                );
              })}
            </Container>
          </section>
      </ModalBackground>
    </Container>
  );
};

export default MoreFiltersModal;
