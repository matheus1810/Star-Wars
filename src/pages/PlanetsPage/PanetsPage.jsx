import { ImgContainer } from "./styles"
import { planetsUrls } from "../../assets/imgUrls"
import { BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"
import { useState } from "react"
import ModalComponent from "../../modal/ModalComponent"
import { CardStyled } from "../../globalStyles/CardStyled"
import { PageContainerStyled } from "../../globalStyles/PageContainerStyled"
import LoaderPage from "../../components/LoaderPage/LoaderPage"


export const PlanetsPage = () => {

  const data = useRequestData(`${BASE_URL}/planets`, [])
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [img, setImg] = useState(Number);


  return (
    <PageContainerStyled>
      {Object.keys(data).length<=0  && (<LoaderPage/>)}
      {data && data.results && data.results.map((item, index) => {

        const {
          name,
          climate,
          diameter,
          gravity,
          orbital_period,
          population,
          rotation_period,
          residents,
          terrain,
        } = data && data.results && data.results[img]

        return (
          <div key={index}>
            <CardStyled>
              <img
                onClick={() => {
                  setmodalIsVisible(true);
                  setImg(index)
                }}
                src={planetsUrls[index + 1]} />

              <div>
                {item.name}
              </div>
            </CardStyled>
            {modalIsVisible && (
              <ModalComponent modalIsVisible={modalIsVisible} setmodalIsVisible={setmodalIsVisible}>
                <ImgContainer>
                  <img src={planetsUrls[img + 1]} />
                </ImgContainer>
                <ul>
                  <li>Name: {name}</li>
                  <li>Climate: {climate}</li>
                  <li>Diameter: {diameter}</li>
                  <li>Gravity: {gravity}</li>
                  <li>Orbital Period: {orbital_period}</li>
                  <li>Rotation Period: {rotation_period}</li>
                  <li>Population: {population}</li>
                  <li>Residents: {residents && residents.length}</li>
                  <li>Terrain: {terrain}</li>
                </ul>
              </ModalComponent>
            )}

          </div>)
      })}

    </PageContainerStyled>
  )
}