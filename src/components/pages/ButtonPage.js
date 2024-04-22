import React from 'react'
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from '../Button'

const ButtonPage = () => {
  return (
    <>
    <h1 className="text-2xl font-bold mb-4">Buttons</h1>
    <div className="flex">
      <div>
        <Button primary outline className="mr-2">
          <GoBell />
          Click me
        </Button>
      </div>
      <div className="mr-2">
        <Button danger outline>
          <GoCloudDownload />
          Buy Now
        </Button>
      </div>
      <div className="mr-2">
        <Button warning>
          <GoDatabase />
          See Deal
        </Button>
      </div>
      <div className="mr-2">
        <Button success>Hide Ads</Button>
      </div>
      <div className="mr-2">
        <Button secondary rounded>
          Something
        </Button>
      </div>
    </div>
    </>
  )
}

export default ButtonPage
