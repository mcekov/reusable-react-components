import React, { useState } from 'react'
import Modal from '../Modal'
import Button from '../Button'

import { GoNote } from 'react-icons/go'

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = (
    <div>
      <Button onClick={handleClose} danger>
        I Accept
      </Button>
    </div>
  )
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is important agreement for you to accept</p>
    </Modal>
  )

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Modal</h1>
      <Button primary outline onClick={handleClick}>
        <GoNote />
        Opne Modal
      </Button>
      {showModal ? modal : null}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in est
        eget arcu consequat pulvinar sed eu dolor. Nulla sit amet lobortis
        lacus. Duis eu risus euismod, pretium sem nec, vulputate massa. Ut
        scelerisque nibh sed nisl faucibus, faucibus ullamcorper urna semper.
        Donec lectus tortor, aliquam et consectetur in, placerat eu lectus.
        Quisque bibendum tellus at dignissim commodo. Ut venenatis lorem neque,
        sed accumsan ex efficitur a. Maecenas et tellus libero. Proin vitae
        lectus nec quam iaculis mollis et ac ex. Aliquam lobortis neque eget
        augue blandit eleifend.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in est
        eget arcu consequat pulvinar sed eu dolor. Nulla sit amet lobortis
        lacus. Duis eu risus euismod, pretium sem nec, vulputate massa. Ut
        scelerisque nibh sed nisl faucibus, faucibus ullamcorper urna semper.
        Donec lectus tortor, aliquam et consectetur in, placerat eu lectus.
        Quisque bibendum tellus at dignissim commodo. Ut venenatis lorem neque,
        sed accumsan ex efficitur a. Maecenas et tellus libero. Proin vitae
        lectus nec quam iaculis mollis et ac ex. Aliquam lobortis neque eget
        augue blandit eleifend.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in est
        eget arcu consequat pulvinar sed eu dolor. Nulla sit amet lobortis
        lacus. Duis eu risus euismod, pretium sem nec, vulputate massa. Ut
        scelerisque nibh sed nisl faucibus, faucibus ullamcorper urna semper.
        Donec lectus tortor, aliquam et consectetur in, placerat eu lectus.
        Quisque bibendum tellus at dignissim commodo. Ut venenatis lorem neque,
        sed accumsan ex efficitur a. Maecenas et tellus libero. Proin vitae
        lectus nec quam iaculis mollis et ac ex. Aliquam lobortis neque eget
        augue blandit eleifend.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in est
        eget arcu consequat pulvinar sed eu dolor. Nulla sit amet lobortis
        lacus. Duis eu risus euismod, pretium sem nec, vulputate massa. Ut
        scelerisque nibh sed nisl faucibus, faucibus ullamcorper urna semper.
        Donec lectus tortor, aliquam et consectetur in, placerat eu lectus.
        Quisque bibendum tellus at dignissim commodo. Ut venenatis lorem neque,
        sed accumsan ex efficitur a. Maecenas et tellus libero. Proin vitae
        lectus nec quam iaculis mollis et ac ex. Aliquam lobortis neque eget
        augue blandit eleifend.
      </p>

    </>
  )
}

export default ModalPage
