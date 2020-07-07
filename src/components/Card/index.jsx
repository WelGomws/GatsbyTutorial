import React from "react"
import cardStyles from "./card.module.scss"

const Card = () => {
  return (
    <div className={cardStyles.card}>
      <h1>Title Card</h1>
      <h1 className={cardStyles.h1}>Tittle 2 Card</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quasi
        alias perspiciatis vel nobis maiores reiciendis maxime ab? Ex porro
        atque ipsum reprehenderit? Exercitationem suscipit deleniti quae id,
        sapiente nemo!
      </p>
      <button>Button Card</button>
    </div>
  )
}

export default Card
