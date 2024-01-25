import isValidColor from "../helper/isValidColor";
import { IData } from "../types/data";

type ICardProps = {
  item: IData;
};

export default function Card({ item }: ICardProps) {
  const { name, animal, founder, houseColours } = item;

  const colorArray = houseColours.split("and").map((el) => {
    const currColor = el.toLowerCase().trim();

    return isValidColor(currColor);
  });

  const bgColor = colorArray.some((el) => el === "")
    ? "to right, white, black"
    : `to right, ${colorArray[0]}, ${colorArray[colorArray.length - 1]}`;

  return (
    <li className="card">
      <div className="card-header">
        <h3>{name}</h3>
        <span>{animal}</span>
      </div>

      <div
        className="card-colours-indicator w-full"
        style={{ background: `linear-gradient(${bgColor})` }}
      />

      <div>
        <p>
          Founder: <strong>{founder}</strong>
        </p>
      </div>
    </li>
  );
}
