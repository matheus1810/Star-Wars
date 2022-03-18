import {
    ModalBackDrop,
    ModalContent,
    ModalFrame,
    ModalHeader,
} from "./styles"


export const Modal = ({ children, setmodalIsVisible }) => {

    const closeModal = (e) => {

        const id = e.target.id

        if (id === "outside" || id === "spam-buttom") {
            setmodalIsVisible(false)
        }
    }
    return (
        <ModalBackDrop
            id="outside"
            onClick={closeModal}>
            <ModalFrame>
                <ModalHeader>
                    <p
                        id="spam-buttom"
                        onClick={closeModal}
                        
                    >X</p>
                </ModalHeader>

                <ModalContent>
                    {children}
                </ModalContent>

            </ModalFrame>
        </ModalBackDrop>
    )
}