import React, { useState } from "react";
import style from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

type OpcoesOrdenador = typeof opcoes

interface Props {
    ordenador: OpcoesOrdenador | null
    setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador | null>>
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && ordenador[0].nome;
    return (
        <button className={classNames({ [style.ordenador]: true, [style["ordenador--ativo"]]: ordenador !== null, })} onClick={() => setAberto(!aberto)} onBlur={() => setAberto(false)}>
            <span>{nomeOrdenador || "Ordenar Por"}</span>
            {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [style.ordenador__options]: true,
                [style["ordenador__options--ativo"]]: aberto
            })} >
                {
                    opcoes.map(opcao => (
                        <div className={style.ordenador__option} key={opcao.value} onClick={() => setOrdenador([{ nome: opcao.nome, value:opcao.value }])}>
                            {opcao.nome}
                        </div>
                    ))
                }
            </div>
        </button >
    );
}