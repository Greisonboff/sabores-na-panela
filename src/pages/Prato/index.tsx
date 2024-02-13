import styles from "./Prato.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import cardapio from "data/cardapio.json";
import TagsPratos from "components/TagsPrato";
import NotFound from "pages/NotFound";
import PaginasPadrao from "components/PaginaPadrao";

export default function Proto() {
    const { id } = useParams();
    const prato = cardapio.find(item => item.id === Number(id));

    const navigate = useNavigate();

    if (!prato) {
        return <NotFound/>;
    }

    return (
        <PaginasPadrao>
            <button
                className={styles.voltar}
                onClick={()=>{navigate(-1);}}
            >
                {"< Voltar"}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>
                    {prato.title}
                </h1>
                <div className={styles.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo_descricao}>
                        {prato.description}
                    </p>
                </div>
                <TagsPratos {...prato}/>
            </section>
        </PaginasPadrao>
    );
}