import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../constants/urls";
import { useRequestData } from "../../../hooks/useRequestData";
import { CardCharacterContainer, CharacterListPageContainer ,ImgContainer} from "./styles";
import { charactersUrls } from "../../../assets/imgUrls";
import { useState } from "react";
import { Modal } from "../../../modal/Modal";
import { speciesUrls } from "../../../assets/imgUrls";

export const CharacterListPage = () => {
  const data = useRequestData(`${BASE_URL}/people`, []);

  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [img, setImg] = useState(Number);

  return (
    <div>
      <CharacterListPageContainer>
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
              <CardCharacterContainer key={index}>
                <img
                  onClick={() => {
                    setmodalIsVisible(true);
                    setImg(index);
                  }}
                  src={charactersUrls[index + 1]}
                ></img>
                {character.name}

                {modalIsVisible && (
                  <Modal setmodalIsVisible={setmodalIsVisible}>
                    <ImgContainer>
                      <img src={speciesUrls[img + 1]} />
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
              </CardCharacterContainer>
            );
          })}
      </CharacterListPageContainer>
    </div>
  );
};
