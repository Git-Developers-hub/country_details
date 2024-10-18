import React from "react";
import { useGlobalcontex } from "../ContextAPI";

const Wttr = () => {
  const { CountryDetail } = useGlobalcontex();
  let capital = "";
  if (CountryDetail !== undefined) {
    if (CountryDetail.capital !== undefined) {
      capital = CountryDetail.capital[0];
    }
  }
  return (
    <>
      {!CountryDetail ? (
        ""
      ) : (
        <>
          Weather of capital city &nbsp;&nbsp; {capital}
          <br />
          <div>
            <br />
            {capital === "" ? (
              `No Capital City for : ${CountryDetail.name.official}`
            ) : (
              <iframe
                src={`https://wttr.in/${capital}`}
                width="600px"
                height="300px"
              ></iframe>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Wttr;
