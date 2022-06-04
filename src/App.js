import React, { useEffect, useState } from "react";
import { fetchData } from "./helper";
import "./App.css";

function App() {
  const [someData, setSomeData] = useState();
  useEffect(() => {
    fetchData().then((data) => {
      setSomeData(data);
    });
  }, []);
  const thstyle = {
    border: "1px solid black",
  };
  return (
    <div
      style={{
        padding: "5px",
      }}
    >
      <div className="header">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Client Name:</h1>
          <span
            style={{
              marginTop: "8px",
              marginLeft: "16px",
            }}
          >
            {someData?.ClientName}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Client Description:</h1>
          <span
            style={{
              marginTop: "8px",
              marginLeft: "16px",
            }}
          >{`${someData?.ClientDesc} /`}</span>
          <span
            style={{
              marginTop: "8px",
              marginLeft: "16px",
            }}
          >
            {someData?.ClientSubDesc}
          </span>
        </div>

        {someData?.Faremessage && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Faremessage:</h1>
            <h1>{someData?.Faremessage}</h1>
          </div>
        )}
      </div>
      <table
        style={{
          border: "1px solid black",
        }}
      >
        <tr>
          <th> FareAmount</th>
          <th> CategoryId</th>
          <th> RouteName</th>
          <th> ValidTill</th>
          <th> CreatedDate</th>

          <th> Type</th>
          <th> ExpiryTime</th>
          <th> Farename</th>
          <th> MaxCount</th>
          {/* <th>  ProductDescription</th>
    <th>  ProductMiscDescription</th> */}
          <th> VerificationStatus</th>
          <th> PaymentMode</th>
          <th> ProductName</th>
          <th> ProductCost</th>
          <th> ProductVegCategory</th>
          {/* <th>  ProductImageURL</th> */}
          <th> Category</th>
        </tr>

        {someData?.list.map((dta) => (
          <tr>
            <td>{dta?.FareAmount}</td>
            <td> {dta?.CategoryId}</td>
            <td> {dta?.RouteName}</td>
            <td> {dta?.ValidTill}</td>
            <td> {dta?.CreatedDate}</td>

            <td> {dta?.Type}</td>
            <td> {dta?.ExpiryTime}</td>
            <td> {dta?.Farename}</td>
            <td> {dta?.MaxCount}</td>
            {/* <td>  {dta?.ProductDescription}</td>
    <td>  {dta?.ProductMiscDescription}</td> */}
            <td> {dta?.VerificationStatus}</td>
            <td> {dta?.PaymentMode}</td>
            <td> {dta?.ProductName}</td>
            <td> {dta?.ProductCost}</td>
            <td> {dta?.ProductVegCategory}</td>
            {/* <td>  ProductImageURL</td> */}
            <td> Category</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
