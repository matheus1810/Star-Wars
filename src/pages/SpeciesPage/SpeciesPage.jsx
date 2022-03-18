import { ImgContainer, SpeciesPageContainer } from "./styles";
import { speciesUrls } from "../../assets/imgUrls";
import { BASE_URL } from "../../constants/urls";
import {useRequestData } from "../../hooks/useRequestData";
import { Modal } from "../../modal/Modal";
import { useState } from "react";
import { PageContainerStyled } from "../../globalStyles/PageContainerStyled";
import { CardStyled } from "../../globalStyles/CardStyled";
import LoaderPage from "../../components/LoaderPage/LoaderPage";

export const SpeciesPage = () => {
  const data = useRequestData(`${BASE_URL}/species`, []);

  const [modalIsVisible, setmodalIsVisible] = useState(false);

  const [img, setImg] = useState(Number);

  return (
    <PageContainerStyled>
      {Object.keys(data).length<=0  && (<LoaderPage/>)}
      {data?.results?.map((item, index) => {
  const {
    name,
    language,
    average_height,
    average_lifespan,
    classification,
    designation,
    skin_colors,
    eye_colors,
    people,
  } = data && data.results && data.results[img]
  
        return (
          <div key={index}>
            <CardStyled>
              <img
                id={index + 1}
                onClick={() => {
                  setmodalIsVisible(true);
                  setImg(index);
                }}
                src={speciesUrls[index + 1]}
              />
          
            <div>{item.name}</div>
            </CardStyled>
            {modalIsVisible && (
              <Modal setmodalIsVisible={setmodalIsVisible}>
                <ImgContainer>
                  <img src={speciesUrls[img + 1]} />
                </ImgContainer>
                <div>
                <h2>{name}</h2>
                <ul>
                  <li>Language: {language}</li>
                  <li>Average heigth: {average_height}</li>
                  <li>Average Lifespan: {average_lifespan}</li>
                  <li>classification: {classification}</li>
                  <li>Designation: {designation}</li>
                  <li>Skin Colors: {skin_colors}</li>
                  <li>Eye Colors: {eye_colors}</li>
                  <li>
                    Total Specie {name}: {people && people.length}
                  </li>
                </ul>
                </div>
              </Modal>
            )}
          </div>
        );
      })}
    </PageContainerStyled>
  );
};
