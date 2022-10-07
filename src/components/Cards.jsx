import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Header,
  LeadInfo,
  InputSearch,
  CardContainer,
  CoinItem,
    Icon,
    IconImage,
    CoinInfo,
    Button,
    Loader,
    Container,
    Wrapper,
} from "../styles/Card.style";

function CryptoCoins() {
  const { cryptoCurrency, status } = useSelector(
    (state) => state.cryptoCurrency
  );

  const [searchcoin, setSearchcoin] = useState("");
  const onSearchItem = (e) => {
    setSearchcoin(e.target.value);
  };
  const searchItem = cryptoCurrency.filter(
    (filteredItem) =>
      filteredItem.name.toLowerCase().includes(searchcoin.toLowerCase()) ||
      filteredItem.symbol.toLowerCase().includes(searchcoin.toLowerCase())
  );
const iD = ["bitcoin", "ethereum", "tether", "usd-coin", "binance-coin"];

  return (
    <Container>
      <Header>
        <LeadInfo>
          <p>Market cap</p>
          {cryptoCurrency.map((btc) => {
            if (btc.id === iD[3]) {
              return (
                <div key={btc.id}>
                  <h2>{btc.marketCap}</h2>
                  <div>
                    <h2>{btc.name} Price</h2>
                    <p>{btc.availableSupply} Available Supply</p>
                    <p>{btc.totalSupply} Total Supply</p>
                    <p>{btc.priceChange1h} Price Change Per Hour</p>
                    <p>${btc.price}</p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </LeadInfo>
        <LeadInfo>
          <p>Market cap</p>
          {cryptoCurrency.map((btc) => {
            if (btc.id === iD[0]) {
              return (
                <div key={btc.id}>
                  <h2>{btc.marketCap}</h2>
                  <div>
                    <h2>{btc.name} Price</h2>
                    <p>{btc.availableSupply} Available Supply</p>
                    <p>{btc.totalSupply} Total Supply</p>
                    <p>{btc.priceChange1h} Price Change Per Hour</p>
                    <p>${btc.price}</p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </LeadInfo>
      </Header>
      <Wrapper>
        <InputSearch>
          <input
            className="search-box"
            placeholder="Enter Name"
            type="text"
            value={searchcoin}
            onChange={onSearchItem}
          />
        </InputSearch>
        <CardContainer>
          {status === "pending" ? (
            <Loader className="loader">
              Loading
              <span />
            </Loader>
          ) : (
            searchItem.map((coin) => (
              <CoinItem key={coin.id}>
                <Icon>
                  <IconImage src={coin.icon} alt="Icon" />
                </Icon>
                <CoinInfo>
                  <p>Number{coin.rank}</p>
                  <h3>{coin.name}</h3>
                  <h4>{coin.symbol}</h4>
                  <p>${coin.price.toFixed(2)}</p>
                </CoinInfo>
                <Link to={`${coin.id}`}>
                  <Button>See More</Button>
                </Link>
              </CoinItem>
            ))
          )}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default CryptoCoins;
