import React from "react"
import * as Styled from "./styled"
import Images from "../Images"

const Cardv2 = props => {
  return (
    <Styled.CardWrapper
      className="card"
    >
      <Images name={props.nameImage} />
      <div className="card-body">
        <h5 className="card-title">{props.titleCard}</h5>
        <p className="card-text">{props.textCard}</p>
      </div>
    </Styled.CardWrapper>
  )
}

export default Cardv2
