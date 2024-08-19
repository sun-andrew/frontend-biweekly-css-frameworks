import "../stylesheets/CSSPage.css";

export const CSSPage: React.FC = () => {
  return (
    <div className="background">
      <div className="card">
        <img
          className="sprite"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/258.png"
          alt=""
        />
        <div className="basic-info">
          <h2 className="name">ミズゴロウ</h2>
          <span className="type">みず</span>
        </div>
        <button className="details">詳細</button>
      </div>
    </div>
  );
};
