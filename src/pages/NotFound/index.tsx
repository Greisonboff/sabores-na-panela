import styles from "./NotFound.module.scss";
import { ReactComponent as NotFoundImg } from "assets/NotFound/not_found.svg";
import classNames from "classnames";
import stylesTema from "styles/Temas.module.scss";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navegate = useNavigate();
    return (
        <div className={classNames({
            [styles.container]: true,
            [stylesTema.container]: true,
        })}>
            <div className={styles.voltar}>
                <button onClick={()=>{navegate(-1);}}>
                    {"< Voltar"}
                </button>
            </div>
            <NotFoundImg />
        </div>
    );
}