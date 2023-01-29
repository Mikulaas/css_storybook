import { SBox } from "./Box.styled";

interface Props {
  color?: "deeppink" | "dodgerblue" | "limegreen";
}

export const Box = (props: Props) => <SBox {...props} />;
