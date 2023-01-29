import { Box } from "../components/Box/Box";
import "./margin.css";

interface Props {
  direction: "vertical" | "horizontal";
  layout: "flow" | "flex";
  margin?: number;
}

export const Margin = ({ direction, layout }: Props) => {
  return (
    <div className="marginWrapper">
      <Box />
      <Box color="deeppink" />
    </div>
  );
};
