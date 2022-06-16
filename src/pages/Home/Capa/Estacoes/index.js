import { useEffect, useState } from "react";
import { mensagemDaEstacao } from "../../../../common/utils/estacao.js";

export default function Estacoes() {
    const [msgEstacao, setMsgEstacao] = useState("");
    useEffect(() => {
        setMsgEstacao(mensagemDaEstacao());
    }, [msgEstacao]);
    return (
        <p> {msgEstacao} </p>
    )
}