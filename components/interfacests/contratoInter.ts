interface EnderecoInter {
  cep: string;
  bairro: string;
  rua: string;
  localidade: string;
  uf: string;
}

export { EnderecoInter };

interface ContratoInfoInter {
  data: string;
  horario: string | undefined;
  msgSolicitacao?: string;
  dependente?: string;
  endereco: EnderecoInter;
  valor: number;
}

export { ContratoInfoInter };
