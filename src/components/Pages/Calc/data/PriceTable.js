import React from "react";

const PriceTable = (props) => {
  const { customsClearence, transport, carPrice, EUR, USD } = props;

  const DriveUsaFee = 500;
  const transportToPLFee = 1700;
  const houseCompanyFee = parseInt(carPrice) * 0.07;

  const sumEUR = parseInt(customsClearence);
  const sumUSD =
    parseInt(carPrice) + houseCompanyFee + parseInt(transport) + DriveUsaFee;

  const EURtoPLN = sumEUR * EUR;
  const USDtoPLN = sumUSD * USD;

  const total = EURtoPLN + USDtoPLN + transportToPLFee;

  return (
    <>
      <table className="cost__table">
        <tbody>
          <tr>
            <td>Koszt samochodu:</td>
            <td>
              <span>{carPrice} USD</span>
            </td>
          </tr>
          <tr>
            <td>Prowizja domu aukcyjnego:</td>
            <td>
              <span>{houseCompanyFee.toFixed(2)} $</span>
            </td>
          </tr>
          <tr>
            <td>Koszt transportu naziemnego po USA oraz kontenera do DE</td>

            <td>
              <div>{transport} $</div>
            </td>
          </tr>
          <tr>
            <td>Prowizja DriveUSA</td>
            <td>
              <span>{DriveUsaFee} $ </span>
            </td>
          </tr>
          <tr>
            <td>Opłaty celne, VAT i koszty portowe</td>
            <td>
              <p>{customsClearence.toFixed(2)} €</p>
            </td>
          </tr>
          <tr>
            <td>Transport do Polski</td>
            <td>
              <span>{transportToPLFee} zł</span>
            </td>
          </tr>
          <tr>
            <td>
              <d>Łącznie</d>
            </td>
            <td>
              <p>{total.toFixed(2)}zł</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PriceTable;
