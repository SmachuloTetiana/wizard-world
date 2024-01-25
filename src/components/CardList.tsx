import { IData } from "../types/data";
import Card from "./Card";

type ICardListProps = {
  data: IData[] | null;
};

export default function CardList({ data }: ICardListProps) {
  if (!data) return null;

  return (
    <ul>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </ul>
  );
}
