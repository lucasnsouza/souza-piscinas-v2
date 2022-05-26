import { useEffect, useState } from "react";
import { mensagemDaEstacao } from "../../../../common/utils/estacao.js";

export default function Estacoes() {
    const [msgEstacao, setMsgEstacao] = useState("");
    useEffect(() => {
        setMsgEstacao(mensagemDaEstacao());
    }, []);
    return (
        <p> {msgEstacao} </p>
    )
}