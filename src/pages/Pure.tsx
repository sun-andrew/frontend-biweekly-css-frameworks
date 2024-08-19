import { Card } from "../components/Card";

export const PurePage: React.FC = () => {
  return (
    <div
      className="pure-g"
      style={{
        height: "100%",
        alignContent: "center",
      }}
    >
      <div className="pure-u-1-3">
        <Card />
      </div>
      <div className="pure-u-1-3">
        <Card />
      </div>
      <div className="pure-u-1-3">
        <Card />
      </div>
    </div>
  );
};
