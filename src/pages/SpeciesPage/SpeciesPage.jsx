import { ImgContainer, SpeciesPageContainer } from "./styles";
import { speciesUrls } from "../../assets/imgUrls";
import { BASE_URL } from "../../constants/urls";
import {useRequestData } from "../../hooks/useRequestData";
import { Modal } from "../../modal/Modal";
import { useState } from "react";

export const SpeciesPage = () => {
  const data = useRequestData(`${BASE_URL}/species`, []);

  const [modalIsVisible, setmodalIsVisible] = useState(false);

  const [img, setImg] = useState(Number);

  return (
    <SpeciesPageContainer>
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
            <ImgContainer>
              <img
                id={index + 1}
                onClick={() => {
                  setmodalIsVisible(true);
                  setImg(index);
                }}
                src={speciesUrls[index + 1]}
              />
            </ImgContainer>
            <li>{item.name}</li>
            {modalIsVisible && (
              <Modal setmodalIsVisible={setmodalIsVisible}>
                <ImgContainer>
                  <img src={speciesUrls[img + 1]} />
                </ImgContainer>
                <h3>{name}</h3>
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
              </Modal>
            )}
          </div>
        );
      })}
    </SpeciesPageContainer>
  );
};
