const vinhos = [
  { nome: "Agnello Reserva Tinto",    tipo: "Tinto",      safra: 2019, estoque: 12 },
  { nome: "Agnello Chardonnay",       tipo: "Branco",     safra: 2021, estoque: 3  },
  { nome: "Agnello Rosé Primavera",   tipo: "Rosé",       safra: 2022, estoque: 7  },
  { nome: "Agnello Grand Cru",        tipo: "Tinto",      safra: 2017, estoque: 2  },
  { nome: "Agnello Sauvignon Blanc",  tipo: "Branco",     safra: 2020, estoque: 9  },
  { nome: "Agnello Merlot Clássico",  tipo: "Tinto",      safra: 2018, estoque: 4  },
  { nome: "Agnello Espumante Brut",   tipo: "Espumante",  safra: 2023, estoque: 1  },
];

function adicionarVinho(nome, tipo, safra, estoque) {
  vinhos.push({ nome, tipo, safra, estoque });
  console.log(`Vinho "${nome}" adicionado.`);
}

function listarVinhos() {
  console.log("\n--- Lista completa de vinhos ---");
  vinhos.forEach((v, i) => {
    console.log(`${i + 1}. ${v.nome} | ${v.tipo} | Safra: ${v.safra} | Estoque: ${v.estoque} un.`);
  });
}

function vinhosBaixoEstoque() {
  const criticos = vinhos.filter(v => v.estoque < 5);
  console.log("\n--- Vinhos com estoque baixo (< 5 unidades) ---");
  criticos.forEach(v => console.log(`${v.nome}: ${v.estoque} un.`));
  return criticos;
}

function estoqueTotal() {
  const total = vinhos.reduce((acc, v) => acc + v.estoque, 0);
  console.log(`\nEstoque total: ${total} unidades`);
  return total;
}

function nomesEmCaixaAlta() {
  const nomes = vinhos.map(v => v.nome.toUpperCase());
  console.log("\n--- Nomes em caixa alta ---");
  nomes.forEach(n => console.log(n));
  return nomes;
}

function exibirResumo() {
  const total = vinhos.reduce((acc, v) => acc + v.estoque, 0);
  const criticos = vinhos.filter(v => v.estoque < 5);
  const nomes = vinhos.map(v => v.nome.toUpperCase());

  let msg = "VINHERIA AGNELLO – RESUMO DO ESTOQUE\n\n";
  msg += `Total em estoque: ${total} unidades\n\n`;
  msg += "Estoque crítico (< 5 un.):\n";
  criticos.forEach(v => { msg += `  - ${v.nome}: ${v.estoque} un.\n`; });
  msg += "\nTodos os vinhos:\n";
  nomes.forEach(n => { msg += `  ${n}\n`; });

  alert(msg);
}

adicionarVinho("Agnello Cabernet Franc", "Tinto", 2020, 6);

listarVinhos();
vinhosBaixoEstoque();
estoqueTotal();
nomesEmCaixaAlta();
exibirResumo();