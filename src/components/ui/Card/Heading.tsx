import "./box.scss";

type Props = {
    heading?: string;
    titleDescription?: string;
}

const Heading = (props: Props) => {
  return (
    <div className="box__title">
        {props.heading && props.heading ? <h2>{props.heading}</h2> : "" }
        {props.titleDescription && props.titleDescription ? <p>{props.titleDescription}</p> : ""}
    </div>
  )
}

export default Heading