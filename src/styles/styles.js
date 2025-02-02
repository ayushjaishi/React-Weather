import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SearchButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
`;

export const WeatherContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
  background-color: #f8f9fa;
`;

export const WeatherInfo = styled.p`
  font-size: 18px;
  margin: 5px 0;
`;

export const ErrorContainer = styled.div`
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
`;
