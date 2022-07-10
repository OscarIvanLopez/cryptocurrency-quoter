import styled from "@emotion/styled";

const Container = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Text = styled.p`
  font-size: 18;
  span {
    font-weight: 700;
  }
`;

const Price = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Image = styled.img`
  display: block;
  width: 120px;
`;
const Result = ({ quoteResult }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    quoteResult;

  return (
    <Container>
      <Image
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Currency Image"
      />
      <div>
        <Price>
          The price is: <span>{PRICE}</span>
        </Price>
        <Text>
          The higer price today is: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          The lowest price today is: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variation in the last 24 hours: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Last update: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Container>
  );
};

export default Result;
