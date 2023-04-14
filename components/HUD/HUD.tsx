import React from "react"
import {useSession} from "next-auth/react";

const cssPrefix = 'trs-hud'
const HUD:React.FC = () => {

  const {data: session} = useSession()

  return (
    <div className={`${cssPrefix}__container`}>

    </div>
  )
}

export default HUD