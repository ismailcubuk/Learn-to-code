import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"

function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            here is an important agreement for you to accept
        </p>
    </Modal>
    return (
        <div>
            <Button onClick={handleClick} primary> Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque magnam beatae, veniam esse commodi possimus sequi neque in recusandae non voluptatum doloribus, distinctio expedita nostrum quae, soluta porro laboriosam! Omnis ducimus exercitationem, delectus laudantium obcaecati, architecto alias nam velit molestias nisi porro hic placeat optio temporibus sequi saepe qui impedit nesciunt tempore mollitia. Itaque beatae accusamus cumque rerum est, rem debitis doloribus quas perferendis ducimus ipsam quis, at magnam provident veniam reiciendis nemo dolor repellendus deleniti dolorum. Officia officiis, accusamus voluptatem fuga consectetur corporis optio nihil quam veritatis pariatur corrupti similique odit omnis dolore eveniet nesciunt, quia expedita doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque magnam beatae, veniam esse commodi possimus sequi neque in recusandae non voluptatum doloribus, distinctio expedita nostrum quae, soluta porro laboriosam! Omnis ducimus exercitationem, delectus laudantium obcaecati, architecto alias nam velit molestias nisi porro hic placeat optio temporibus sequi saepe qui impedit nesciunt tempore mollitia. Itaque beatae accusamus cumque rerum est, rem debitis doloribus quas perferendis ducimus ipsam quis, at magnam provident veniam reiciendis nemo dolor repellendus deleniti dolorum. Officia officiis, accusamus voluptatem fuga consectetur corporis optio nihil quam veritatis pariatur corrupti similique odit omnis dolore eveniet nesciunt, quia expedita doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque magnam beatae, veniam esse commodi possimus sequi neque in recusandae non voluptatum doloribus, distinctio expedita nostrum quae, soluta porro laboriosam! Omnis ducimus exercitationem, delectus laudantium obcaecati, architecto alias nam velit molestias nisi porro hic placeat optio temporibus sequi saepe qui impedit nesciunt tempore mollitia. Itaque beatae accusamus cumque rerum est, rem debitis doloribus quas perferendis ducimus ipsam quis, at magnam provident veniam reiciendis nemo dolor repellendus deleniti dolorum. Officia officiis, accusamus voluptatem fuga consectetur corporis optio nihil quam veritatis pariatur corrupti similique odit omnis dolore eveniet nesciunt, quia expedita doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque magnam beatae, veniam esse commodi possimus sequi neque in recusandae non voluptatum doloribus, distinctio expedita nostrum quae, soluta porro laboriosam! Omnis ducimus exercitationem, delectus laudantium obcaecati, architecto alias nam velit molestias nisi porro hic placeat optio temporibus sequi saepe qui impedit nesciunt tempore mollitia. Itaque beatae accusamus cumque rerum est, rem debitis doloribus quas perferendis ducimus ipsam quis, at magnam provident veniam reiciendis nemo dolor repellendus deleniti dolorum. Officia officiis, accusamus voluptatem fuga consectetur corporis optio nihil quam veritatis pariatur corrupti similique odit omnis dolore eveniet nesciunt, quia expedita doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque magnam beatae, veniam esse commodi possimus sequi neque in recusandae non voluptatum doloribus, distinctio expedita nostrum quae, soluta porro laboriosam! Omnis ducimus exercitationem, delectus laudantium obcaecati, architecto alias nam velit molestias nisi porro hic placeat optio temporibus sequi saepe qui impedit nesciunt tempore mollitia. Itaque beatae accusamus cumque rerum est, rem debitis doloribus quas perferendis ducimus ipsam quis, at magnam provident veniam reiciendis nemo dolor repellendus deleniti dolorum. Officia officiis, accusamus voluptatem fuga consectetur corporis optio nihil quam veritatis pariatur corrupti similique odit omnis dolore eveniet nesciunt, quia expedita doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque magnam beatae, veniam esse commodi possimus sequi neque in recusandae non voluptatum doloribus, distinctio expedita nostrum quae, soluta porro laboriosam! Omnis ducimus exercitationem, delectus laudantium obcaecati, architecto alias nam velit molestias nisi porro hic placeat optio temporibus sequi saepe qui impedit nesciunt tempore mollitia. Itaque beatae accusamus cumque rerum est, rem debitis doloribus quas perferendis ducimus ipsam quis, at magnam provident veniam reiciendis nemo dolor repellendus deleniti dolorum. Officia officiis, accusamus voluptatem fuga consectetur corporis optio nihil quam veritatis pariatur corrupti similique odit omnis dolore eveniet nesciunt, quia expedita doloribus.
            </p>

        </div>
    )
}

export default ModalPage