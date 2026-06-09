import { memo } from "react";
import "./box.scss"

interface Props {
  id: number;
  className?: string;
  title: string;
  desc?: string;
}

const Box = ({ id, className = "", title, desc }: Props) => {
  return (
    <div className={`box ${className}`}>
      <div className={`box ${className ? `${className}_heading` : "heading"}`}>
        <span>0{id}</span>
        <span> | </span>
        <span>{title}</span>
      </div>
      {desc && <div className="box-desc">{desc}</div>}
    </div>
  );
};

export default memo(Box);
