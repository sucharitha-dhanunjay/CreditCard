import "./DetailsForm.css";
const DetailsForm = props => {
  const onSubmitHandler = event => {
    event.preventDefault();
  };

  return (
    <div className="detailform">
      <form onSubmit={onSubmitHandler} className="form">
        <label className="label" htmlFor="number">
          Card Number
        </label>
        <input
          className="input"
          type="tel"
          id="number"
          name="number"
          placeholder=""
          value={props.details.number}
          onChange={e => props.onFormInputChange({ number: e.target.value })}
          onFocus={e => props.onFormInputChange({ focus: e.target.name })}
        />
        <label className="label" htmlFor="name">
          Card Holder
        </label>
        <input
          className="input"
          id="name"
          type="text"
          name="name"
          placeholder=""
          value={props.details.name}
          onChange={e => props.onFormInputChange({ name: e.target.value })}
          onFocus={e => props.onFormInputChange({ focus: e.target.name })}
        />
        <div className="expiry">
          <label className="label" htmlFor="expiry">
            Expiration Date
          </label>

          <select
            onChange={e => {
              props.onFormInputChange({ expirymonth: e.target.value });
            }}
            onFocus={e => props.onFormInputChange({ focus: e.target.name })}
            name="expiry"
            id="month"
          >
            <option value=""> Month </option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>

          <select
            name="expiry"
                      onChange={e =>
                          props.onFormInputChange({ expiryyear: e.target.value })
                      }
                      onFocus={e => props.onFormInputChange({ focus: e.target.name })}
          >
            <option value="">
              Year
            </option>
            <option value="21">2021</option>
            <option value="22">2022</option>
            <option value="23">2023</option>
            <option value="24">2024</option>
            <option value="25">2025</option>
            <option value="26">2026</option>
            <option value="27">2027</option>
            <option value="28">2028</option>
            <option value="29">2029</option>
          </select>
        </div>
        <div className="cvv">
          <label className="label" htmlFor="number">
           CVV
          </label>
          <input
            className="input"
            id="cvc"
            type="tel"
            name="cvc"
            placeholder=""
            value={props.details.cvc}
            onChange={e => props.onFormInputChange({ cvc: e.target.value })}
            onFocus={e => props.onFormInputChange({ focus: e.target.name })}
          />
        </div>
        <button className="button">Submit</button>
          </form>
          
    </div>
  );
};

export default DetailsForm;
