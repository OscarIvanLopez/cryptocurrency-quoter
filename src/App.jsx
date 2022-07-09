import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Form from "./components/Form";
import cryptoImage from "./img/imagen-criptos.png";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100 auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: "red";
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &:after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2f3;
    display: block;
    margin: 10px auto;
  }
`;

const App = () => {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
      const { currency, cryptoCurrency } = currencies;
      const quoteCrypto = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;

        const response = await fetch(url);
        const result = await response.json();

        console.log(result);
      };

      quoteCrypto();
    }
  }, [currencies]);

  return (
    <Container>
      <Image src={cryptoImage} alt="Crypto image" />
      <div>
        <Heading>Trade cryptocurrencies instantly</Heading>

        <Form setCurrencies={setCurrencies} />
      </div>
    </Container>
  );
};

export default App;
