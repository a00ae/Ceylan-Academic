import { memo } from "react";

interface Props {
  id: number;
  className?: string;
  title: string;
  desc?: string;
}

const Box = (props: Props) => {
  return (
    <div className={`box ${props.className && props.className}`}>
      <div className={`box ${props.className ? `${props.className}_heading` : "heading"}`}>
        <span>0{props.id}</span>
        <span>|</span>
        <span>{props.title}</span>
      </div>
      {props.desc && <div>{props.desc}</div>}
    </div>
  );
};

export default memo(Box);
