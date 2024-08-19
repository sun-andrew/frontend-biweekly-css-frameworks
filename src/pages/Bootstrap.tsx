export const BootstrapPage: React.FC = () => {
  return (
    <div className="d-flex w-100 h-100 bg-gradient bg-primary text-center align-items-center justify-content-center">
      <div className="col-2 h-25 p-3 bg-white gap-3 mx-auto d-flex flex-column align-items-center justify-content-center shadow rounded">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/258.png" />
        <div className="d-flex flex-row gap-3">
          <h2 className="h3">ミズゴロウ</h2>
          <span className="badge text-bg-primary align-self-center">みず</span>
        </div>
        <button className="btn btn-primary">詳細</button>
      </div>
    </div>
  );
};
