import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99,
        }}
      >
        <button onClick={() => navigate("/css")} style={buttonStyle}>
          CSS
        </button>
        <button onClick={() => navigate("/tailwind")} style={buttonStyle}>
          Tailwind CSS
        </button>
        <button onClick={() => navigate("/bootstrap")} style={buttonStyle}>
          Bootstrap
        </button>
        <button
          onClick={() => navigate("/styled-components")}
          style={buttonStyle}
        >
          Styled Components
        </button>
        <button onClick={() => navigate("/pure")} style={buttonStyle}>
          Pure CSS
        </button>
      </div>
      <div style={{ margin: "auto", height: "100vh" }}>{children}</div>
    </div>
  );
};

const buttonStyle = {
  color: "white",
  padding: "5px 20px",
  fontSize: "14px",
  cursor: "pointer",
};
