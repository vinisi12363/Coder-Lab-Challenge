import "./header.scss";
import Logo from "../../assets/logo.png";
import { useContextUser } from "../../Contexts/UserContext";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { Link } from "react-router-dom";

export const HeaderWithUSer: React.FC = () => {
  const { setUpUser } = useContextUser();
  const userLocalStorage = useLocalStorage.getLocalStorage("user");

  const logout = () => {
    setUpUser({ name: "", token: "" });
    useLocalStorage.deleteLocalStorage("user");
    useLocalStorage.deleteLocalStorage("categories");
    useLocalStorage.deleteLocalStorage("products");
    window.location.reload();
  };

  return (
    <div className="headerInfo">
      <div className="headerLogo">
        <Link className="linkPWUser" to={"/"}>
          <img className="imgLogo" src={Logo} alt="Vini Fast Food"></img>
        </Link>
      </div>

      <div className="headerOptionsWUser">
        <p className="">{`Bem Vindo(a): ${userLocalStorage?.name}`} </p>

        <Link className="linkPWUser" to={"/produtos/cadastrar"}>
          <p className="linkP" onClick={() => {}}>
            Cadastrar Produto
          </p>
        </Link>
        <Link className="linkPWUser" to={"/produtos/editar"}>
          <p className="linkP" onClick={() => {}}>
            Editar Produto
          </p>
        </Link>
        <Link className="linkPWUser" to={"/produtos/deletar"}>
          <p className="linkP" onClick={() => {}}>
            Deletar Produto
          </p>
        </Link>

        <p
          className="linkPWUser"
          onClick={() => {
            logout();
          }}
        >
          Sair
        </p>
      </div>
    </div>
  );
};
