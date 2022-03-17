import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { ImgContainer } from "./styles";
import { CardStyled } from "../../globalStyles/CardStyled";
import { PageContainerStyled } from "../../globalStyles/PageContainerStyled";
import { charactersUrls } from "../../assets/imgUrls";
import { useState } from "react";
import { Modal } from "../../modal/Modal";

export const CharacterListPage = () => {
  const data = useRequestData(`${BASE_URL}/people`, []);

  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [img, setImg] = useState(Number);

  return (
    <div>
      <PageContainerStyled>
        {data?.results &&
          data.results.map((character, index) => {
            const {
              name,
              birth_year,
              hair_color,
              eye_color,
              gender,
              height,
              mass,
            } = data && data.results && data.results[img];

            return (
              <div>
                <CardStyled
                  onClick={() => {
                    setmodalIsVisible(true)
                    setImg(index)
                  }}>

                  <img src={charactersUrls[index + 1]}></img>

                  <div>{character.name}</div>

                </CardStyled>

                {modalIsVisible && (
                  <Modal setmodalIsVisible={setmodalIsVisible}>
                    <ImgContainer>
                      <img src={charactersUrls[img + 1]} />
                    </ImgContainer>
                    <ul>
                      <h3>{name}</h3>
                      <li>Birth Year: {birth_year}</li>
                      <li>Hair color: {hair_color}</li>
                      <li>Eye Color: {eye_color}</li>
                      <li>Gender: {gender}</li>
                      <li>Height: {height}</li>
                      <li>Mass: {mass}</li>
                    </ul>
                  </Modal>
                )}
              </div>
            );
          })}
      </PageContainerStyled>
    </div>
  );
};
