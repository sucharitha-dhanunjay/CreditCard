import Card from "./Card";
const CreditCard = props => {
  const placeholders = { name: "AD SOYAB" };

  return (
    <div className="card">
      <Card
        number={props.details.number}
        name={props.details.name}
        expirymonth={props.details.expirymonth} 
        expiryyear={props.details.expiryyear}
        cvc={props.details.cvc}
        focused={props.details.focus}
        placeholders={placeholders}
      />
    </div>
  );
};
export default CreditCard;
