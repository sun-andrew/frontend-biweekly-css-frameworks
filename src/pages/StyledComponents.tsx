import styled from "styled-components";

export const StyledComponentsPage: React.FC = () => {
  return (
    <Background>
      <Card>
        <Sprite
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/258.png"
          alt=""
        />
        <BasicInfo>
          <Name>ミズゴロウ</Name>
          <Type>みず</Type>
        </BasicInfo>
        <Button>詳細</Button>
      </Card>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top, #b993d6 0%, #8ca6db 100%);
`;
const Card = styled.div`
  width: 200px;
  height: 300px;
  padding: 20px;
  background: #fff;
  margin: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;
const Sprite = styled.img`
  height: 150px;
  width: 150px;
`;
const BasicInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const Name = styled.h2`
  font-size: 24px;
  margin: 0;
  justify-self: center;
  align-self: center;
`;
const Type = styled.span`
  font-size: 12px;
  padding: 2px 4px;
  color: white;
  background-color: #6390f0;
  border-radius: 4px;
  justify-self: center;
  align-self: center;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 5px 25px;
  border: 2px solid #6390f0;
  background-color: white;
  color: #6390f0;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #6390f0;
    color: #fff;
  }
`;
