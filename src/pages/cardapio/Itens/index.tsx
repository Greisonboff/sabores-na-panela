import cardapio from "data/cardapio.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";
import ordenaOptions from "../Ordenador/opcoes.json";
import { Cardapio } from "types/Prato";

interface Props {
    busca: string,
    filtro: number | null,
    ordenador: typeof ordenaOptions | null
}
export default function Itens(props: Props) {
    const [lista, setLista] = useState(cardapio);
    const { busca, filtro, ordenador } = props;

    useEffect(() => {
        function testaBusca(title: string) {
            const regex = new RegExp(busca, "i");
            return regex.test(title);
        }

        function testaFiltro(id: number) {
            if (filtro !== null) return filtro === id;
            return true;
        }

        const ordenarPropriedadeCrescente = (
            lista: Cardapio,
            propriedade: "size" | "serving" | "price"
        ) => {
            return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
        };

        function ordenar(novaLista: Cardapio) {
            const ordenar = ordenador !== null ? ordenador[0].value : "";
            switch (ordenar) {
                case "porcao":
                    return ordenarPropriedadeCrescente(novaLista, "size");

                case "qtd_pessoas":
                    return ordenarPropriedadeCrescente(novaLista, "serving");

                case "preco":
                    return ordenarPropriedadeCrescente(novaLista, "price");

                default:
                    return novaLista;
            }
        }


        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(ordenar(novaLista));
    }, [busca, filtro, ordenador]);

    return (
        <div className={styles.itens}>
            {lista.map((item) => (
                <div key={item.id}>
                    <Item {...item} />
                </div>
            ))}
        </div>
    );
}