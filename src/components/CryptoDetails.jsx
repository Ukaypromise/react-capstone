import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { InfoContainer, Container, InfoWrapper, Title } from "../styles/Info.style";

const CryptoDetails = () => {
  const { id } = useParams();

  const { cryptoCurrency, status } = useSelector(
    (state) => state.cryptoCurrency
  );
  return (
    <InfoContainer>
      {status === "pending" ? (
        <div >
          Loading....
        </div>
      ) : (
        cryptoCurrency.map((coin) => {
          if (coin.id === id) {
            return (
              <Container key={coin.id}>
                <div >
                  <div>
                    <div>
                      <p>
                        <img src={coin.icon} alt="Coin Icon" />
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2>coin: {coin.name}</h2>
                    Ranked at: #{coin.rank}
                  </div>
                </div>

                <InfoWrapper>
                  <Title>
                    <p>Coin name</p>
                    <p>{coin.name}</p>
                  </Title>

                  <Title>
                    <p>Coin symbol</p>
                    <p>{coin.symbol}</p>
                  </Title>

                  <Title>
                    <p>Ranking</p>
                    <p>{coin.rank}</p>
                  </Title>

                  <Title>
                    <p>Coin Price</p>
                    <p>{coin.price}</p>
                  </Title>

                  <Title>
                    <p>Coin volume</p>
                    <p>{coin.volum}</p>
                  </Title>

                  <Title>
                    <p>Market cap</p>
                    <p>{coin.marketCap}</p>
                  </Title>

                  <Title>
                    <p>Price change day</p>
                    <p>{coin.priceChange1d}</p>
                  </Title>

                  <Title>
                    <p>Price change Hour</p>
                    <p>{coin.priceChange1h}</p>
                  </Title>

                  <Title>
                    <p>Price change Week</p>
                    <p>{coin.priceChange1w}</p>
                  </Title>

                  <Title>
                    <p>Coin total supply</p>
                    <p>{coin.totalSupply}</p>
                  </Title>

                  <Title>
                    <p>Coin availability Supply</p>
                    <p>{coin.availableSupply}</p>
                  </Title>

                  <Title>
                    <p>Twitter link</p>
                    <p>{coin.twitterUrl}</p>
                  </Title>

                  <Title>
                    <p>Website link</p>
                    <p>{coin.websiteUrl}</p>
                  </Title>
                </InfoWrapper>
              </Container>
            );
          }
          return null;
        })
      )}
    </InfoContainer>
  );
};

export default CryptoDetails;
