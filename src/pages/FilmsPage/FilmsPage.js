import { filmsUrls } from "../../assets/imgUrls"
import { FilmsPageContainer, ImgContainer,ImgModalContainer} from "./styles"
import { useRequestData} from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { useState } from "react"
import { Modal } from "../../modal/Modal"

export const FilmsPage = () => {

    const data = useRequestData(`${BASE_URL}/films`, [])

    const [modalIsVisible, setmodalIsVisible] = useState(false);
    const [img, setImg] = useState(Number);

    return (
        <FilmsPageContainer>

            {data && data.results && data.results.map((item, index) => {

                const {
                    director,
                    opening_crawl,
                    title
                } = data && data.results && data.results[img]

                return (
                    <div
                        key={index}
                    >
                        <ImgContainer>
                            <img
                                onClick={() => {
                                    setmodalIsVisible(true);
                                    setImg(index)
                                }}
                                src={filmsUrls[index + 1]} />
                        </ImgContainer>
                        <li>
                            {item.title}
                        </li>

                        {modalIsVisible && (
                            <Modal setmodalIsVisible={setmodalIsVisible}>
                                <ImgModalContainer>
                                    <img src={filmsUrls[img + 1]} />
                                </ImgModalContainer>
                                <ul>
                                    <h3>title: {title}</h3>
                                    <p>Director: {director}</p>
                                    <li>openiing crawl: {opening_crawl}</li>
                                </ul>
                            </Modal>
                        )}

                    </div>)
            }
            )

            }

        </FilmsPageContainer>
    )
}