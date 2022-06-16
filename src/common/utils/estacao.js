//função para devolver um texto espcífico para cada estação
export function mensagemDaEstacao() {
  //pegar estações do ano com javascript
  const data = new Date();
  let dia = data.getDate();
  let mes = new Intl.DateTimeFormat("pt-br", { month: "long" }).format(data);

  //pega estação do ano usando a variável de referência mes
  let estacaoDoAno = "";
  switch (mes) {
    case "janeiro":
      estacaoDoAno = "Verão"
      break;
    case "fevreiro":
      estacaoDoAno = "Verão";
      break;
    case "março":
      if (dia < 21) {
        estacaoDoAno = "Verão";
        break
      }
      estacaoDoAno = "Outono";
      break;
    case "abril":
      estacaoDoAno = "Outono";
      break;
    case "maio":
      estacaoDoAno = "Outono";
      break;
    case "junho":
      if (dia < 21) {
        estacaoDoAno = "Outono";
        break;
      }
      estacaoDoAno = "Inverno";
      break;
    case "julho":
      estacaoDoAno = "Inverno";
      break;
    case "agosto":
      estacaoDoAno = "Inverno";
      break;
    case "setembro":
      if (dia < 22) {
        estacaoDoAno = "Inverno";
        break;
      }
      estacaoDoAno = "Primavera";
      break;
    case "outubro":
      estacaoDoAno = "Primavera";
      break;
    case "novembro":
      estacaoDoAno = "Primavera";
      break;
    case "dezembro":
      if(dia < 21) {
        estacaoDoAno = "Primavera";
        break;
      }
      estacaoDoAno = "Verão";
      break;
    default:
      break;
  }

  let mensagemEstacao = "";
  switch (estacaoDoAno) {
    case "Inverno":
      mensagemEstacao =
        "Mesmo no Inverno sua piscina precisa de cuidados. Veja dicas para manter a sua piscina em ordem e porque mesmo sem uso ela ainda precisa de atenção.";
      break;
    case "Primavera":
      mensagemEstacao =
        "Estamos na primavera. O que acha de deixar sua piscina pronta para o calor e evitar dor de cabeça na hora da diversão?";
      break;
    case "Verão":
      mensagemEstacao =
        "O Verão chegou! Saiba como aproveitar ao máximo a sua piscina.";
      break;
    case "Outono":
      mensagemEstacao =
        "Já é Outono! Saiba como aproveitar os últimos dias de calor e deixar sua piscina brilhando.";
      break;
    default:
      mensagemEstacao = `Trabalhamos para que você possa curtir sua piscina sem dor de
        cabeça!`;
      break;
  }
  return mensagemEstacao;
}
