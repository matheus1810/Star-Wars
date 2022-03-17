import { ImgContainer, VeiclesPageContainer } from "./styles";
import { vehiclesUrls } from "../../assets/imgUrls";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { useState } from "react";
import { Modal } from "../../modal/Modal";

export const VehiclesPage = () => {
  const data = useRequestData(`${BASE_URL}/vehicles`, []);
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [img, setImg] = useState(Number);

  return (
    <VeiclesPageContainer>
      {data.results &&
        data.results.map((item, index) => {
          const {
            cargo_capacity,
            name,
            consumables,
            cost_in_credits,
            length,
            manufacturer,
            max_atmosphering_speed,
            model,
            passengers,
            pilots,
          } = data && data.results && data.results[img];
          return (
            <div key={index}>
              <ImgContainer>
                <img
                  onClick={() => {
                    setmodalIsVisible(true);
                    setImg(index);
                  }}
                  src={vehiclesUrls[index + 1]}
                />
              </ImgContainer>
              <li>{item.name}</li>
              {modalIsVisible && (
                <Modal setmodalIsVisible={setmodalIsVisible}>
                  <ImgContainer>
                    <img src={vehiclesUrls[img + 1]} />
                  </ImgContainer>
                  <ul>
                    <ul>
                      <li>Name: {name}</li>
                      <li>Cargo Capacity: {cargo_capacity}</li>
                      <li>Consumables:{consumables}</li>
                      <li>Cost in_credits:{cost_in_credits}</li>
                      <li>Length:{length}</li>
                      <li>Consumables:{consumables}</li>
                      <li>Manufacturer:{manufacturer}</li>
                      <li>Max Atmosphering speed:{max_atmosphering_speed}</li>
                      <li>Model:{model}</li>
                      <li>Passengers:{passengers}</li>
                      <li>Pilots:{pilots && pilots.length}</li>
                    </ul>
                  </ul>
                </Modal>
              )}
            </div>
          );
        })}
    </VeiclesPageContainer>
  );
};
