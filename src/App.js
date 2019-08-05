import React from "react";

const Food = ({ name, img }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} />
    </div>
  );
};

const foodObject = [
  {
    name: "김치",
    img:
      "http://recipe1.ezmember.co.kr/cache/recipe/2015/04/02/238f0a3e8b567db1229b0f27220033341.jpg"
  },
  {
    name: "감자",
    img:
      "https://file.mk.co.kr/meet/neds/2018/12/image_readmed_2018_775881_15446074643566869.png"
  }
];

function App() {
  return (
    <div>
      <h1>Movie-app</h1>
      {foodObject.map(ha => (
        <Food name={ha.name} img={ha.img} />
      ))}
    </div>
  );
}

export default App;
