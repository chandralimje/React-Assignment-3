import React from "react";

const Card = ({name}) => {
  return (
    <div style={{ backgroundColor: "cyan", margin: "0.8rem", padding: "0.5rem", borderRadius: "9px" }}>
      <h1>Hello : {name} </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        dignissimos! Vero, ipsum porro. Accusantium corrupti nobis quas
        temporibus tempora, alias nisi? Maiores non mollitia ut ad ducimus
        assumenda ab labore accusamus libero id recusandae sit, dolore
        laudantium autem distinctio earum omnis dolores aliquid suscipit nihil.
        Ex perspiciatis debitis quasi omnis, tenetur repellendus quidem illo
        expedita ipsa minus esse nemo culpa laboriosam voluptatibus, distinctio
        nesciunt veritatis eius, libero non. Delectus veniam asperiores
        necessitatibus voluptas a totam officia quos architecto blanditiis,
        velit nobis facilis, expedita placeat reiciendis suscipit voluptatibus
        dolorum beatae atque voluptate sunt iure omnis ipsum! Iure, magnam!
        Maxime, amet eveniet.
      </p>
    </div>
  );
};

export default Card;
