import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { ImgContainer } from "./styles";
import { CardStyled } from "../../globalStyles/CardStyled";
import { PageContainerStyled } from "../../globalStyles/PageContainerStyled";
import { charactersUrls } from "../../assets/imgUrls";
import { useState } from "react";
import { Modal } from "../../modal/Modal";
import LoaderPage from "../../components/LoaderPage/LoaderPage";


export const CharacterListPage = () => {

  const data = useRequestData(`${BASE_URL}/people`, {});

  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [img, setImg] = useState(Number);

  return (
    <div>

      <PageContainerStyled>
        {Object.keys(data).length <= 0 && (<LoaderPage />)}

        {data?.results?.map((character, index) => {
          const {
            name,
            birth_year,
            hair_color,
            eye_color,
            gender,
            height,
            mass,
          } = data?.results[img];

          return (

            <div key={index}>

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
                  <div>
                    <h2>{name}</h2>
                    <ul>
                      <li>Height: {height}</li>
                      <li>Mass: {mass}</li>
                      <li>Gender: {gender}</li>
                      <li>Eye Color: {eye_color}</li>
                      <li>Birth Year: {birth_year}</li>
                      <li>Hair color: {hair_color}</li>
                    </ul>
                  </div>
                </Modal>
              )}
            </div>
          );
        })}
      </PageContainerStyled>
    </div>
  );
};
