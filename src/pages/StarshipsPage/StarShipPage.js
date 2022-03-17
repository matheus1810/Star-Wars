import { ImgContainer, StarShipsPageContainer } from "./styles"
import { starshipsUrls } from "../../assets/imgUrls"
import { BASE_URL } from "../../constants/urls"
import { useNavigate } from "react-router-dom"
import { useRequestData } from "../../hooks/useRequestData"
import { useState } from "react"
import { Modal } from "../../modal/Modal"
import { PageContainerStyled } from "../../globalStyles/PageContainerStyled"
import { CardStyled } from "../../globalStyles/CardStyled"

export const StarShipPage = () => {

  const navigate = useNavigate()

  const data = useRequestData(`${BASE_URL}/starships`, [])
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [img, setImg] = useState(Number);

  return (
    <PageContainerStyled>
      {data && data.results && data.results.map((item, index) => {
        const {
          name,
          MGLT,
          cargo_capacity,
          pilots,
          consumables,
          cost_in_credits,
          crew,
          starship_class,
          hyperdrive_rating,
          length,
          manufacturer,
          max_atmosphering_speed,
          model, passengers
        } = data && data.results && data.results[img]
        return (

          <div key={index}>
            <CardStyled>
              <img
                onClick={() => {
                  setmodalIsVisible(true);
                  setImg(index)
                }}
                src={starshipsUrls[index + 1]} />

              <div>
                {item.name}
              </div>
            </CardStyled>
            {modalIsVisible && (
              <Modal setmodalIsVisible={setmodalIsVisible}>
                <ImgContainer>
                  <img src={starshipsUrls[img + 1]} />
                </ImgContainer>
                <ul>
                  <li>Name: {name}</li>
                  <li>MGLT: {MGLT}</li>
                  <li>Cargo Capacity: {cargo_capacity}</li>
                  <li>consumables: {consumables}</li>
                  <li>Cost in Credits: {cost_in_credits}</li>
                  <li>Crew: {crew}</li>
                  <li>Hyperdrive Rating: {hyperdrive_rating}</li>
                  <li>Length: {length}</li>
                  <li>Manufacturer: {manufacturer}</li>
                  <li>Max Atmosphering Speed: {max_atmosphering_speed}</li>
                  <li>model: {model}</li>
                  <li>Passengers: {passengers}</li>
                  <li>Pilots: {pilots && pilots.length}</li>
                  <li>Starships class: {starship_class}</li>
                </ul>
              </Modal>
            )}
          </div>)
      })}

    </PageContainerStyled>
  )
}