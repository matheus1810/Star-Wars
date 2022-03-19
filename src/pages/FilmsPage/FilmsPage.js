import { filmsUrls } from "../../assets/imgUrls"
import { FilmsPageContainer, ImgContainer, ImgModalContainer, GridContainer } from "./styles"
import { useRequestData } from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { useState } from "react"
import { Modal } from "../../modal/Modal"
import LoaderPage from "../../components/LoaderPage/LoaderPage"

export const FilmsPage = () => {

    const data = useRequestData(`${BASE_URL}/films`, [])

    const [modalIsVisible, setmodalIsVisible] = useState(false);
    const [img, setImg] = useState(Number);


    return (
        <FilmsPageContainer>
            {Object.keys(data).length <= 0 && (<LoaderPage />)}
            <GridContainer>
                {data && data.results && data.results.map((item, index) => {


                    const {
                        director,
                        opening_crawl,
                        title
                    } = data && data.results && data.results[img]

                    return (
                        <div key={index}>
                            <ImgContainer>
                                <img
                                    onClick={() => {
                                        setmodalIsVisible(true);
                                        setImg(index)
                                    }}
                                    src={filmsUrls[index + 1]} />

                            </ImgContainer>

                            {modalIsVisible && (
                                <Modal setmodalIsVisible={setmodalIsVisible}>
                                    <ImgModalContainer>
                                        <img src={filmsUrls[img + 1]} />
                                    </ImgModalContainer>
                                    <div className="filmsStyled">
                                        <h2>{title}</h2>
                                        <h4>Director: {director}</h4>
                                        <p>{opening_crawl}</p>
                                    </div>
                                </Modal>
                            )}

                        </div>)
                }
                )

                }
            </GridContainer>

        </FilmsPageContainer>
    )
}