import dados from "../models/dados.js";
const { livros } = dados;

// Create - Novo livro
const createLivro = (req, res) => {
  const {
    titulo,
    autor,
    saga,
    subgenero,
    paginas,
    anoPublicacao,
    editora,
    avaliacao,
  } = req.body;

  if (
    !titulo ||
    !autor ||
    !saga ||
    !subgenero ||
    !paginas ||
    !anoPublicacao ||
    !editora ||
    !avaliacao
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Título, autor, saga, subgênero, páginas, ano de publicação, editra e avalição são obrigatórios!",
    });
  }

  const novoLivro = {
    id: livros.length + 1,
    titulo: titulo,
    autor: autor,
    saga: saga,
    subgenero: subgenero,
    paginas: paginas,
    anoPublicacao: anoPublicacao,
    editora: editora,
    avaliacao: avaliacao,
  };

  livros.push(novoLivro);

  res.status(201).json({
    success: true,
    message: "Novo livro cadastrado com sucesso!",
    livro: novoLivro,
  });
};

// Get All Livros
const getAllLivros = (req, res) => {
  const id = parseInt(req.params.id);
  const {
    titulo,
    autor,
    saga,
    subgenero,
    paginas,
    anoPublicacao,
    editora,
    avaliacao,
  } = req.body;

  const subgeneroLista = [
    "Alta Fantasia",
    "Fantasia Sombria",
    "Fantasia Urbana",
    "Fantasia Clássica",
    "Fantasia Épica",
    "Fantasia Científica",
  ];

  if (!subgenero || !subgeneroLista.includes(subgenero.toLowerCase())) {
    return res.status(400).json({
      success: false,
      message: `O campo 'subgenero' é obrigatório e deve ser uma das opções: ${subgeneroLista.join(", ")}!`,
    });
  }

  res.status(200).json({
    total: livros.length,
    livros: livros
  });
};

// Get By ID - Listar os livros por ID
const getLivroById = (req, res) => {
  let id = parseInt(req.params.id);

  const livro = livros.find((l) => l.id === id);

  if (livro) {
    res.status(200).json({
      success: true,
      livro: livro,
    });
  }

  res.status(400).json({
    success: false,
    message: "Livro não encontrado!",
  });
};

// Update - Atualizar livro existente por ID
const updateLivro = (req, res) => {
  const { id } = req.params;
  const {
    titulo,
    autor,
    saga,
    subgenero,
    paginas,
    anoPublicacao,
    editora,
    avaliacao,
  } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "ID deve ser um número válido!",
    });
  }

  const idParaEditar = parseInt(id);

  const livroExiste = livros.find((l) => l.id === idParaEditar);
  if (!livroExiste) {
    return res.status(404).json({
      success: false,
      message: `Livro com ID ${id} não encontrado para atualização!`,
    });
  }

  const livrosAtualizados = livros.map((livro) =>
    livro.id === idParaEditar
      ? {
          ...livro,
          ...(titulo && { titulo }),
          ...(autor && { autor }),
          ...(saga && { saga }),
          ...(subgenero && { subgenero }),
          ...(paginas && { paginas }),
          ...(editora && { editora }),
          ...(avaliacao && { avaliacao }),
          ...(anoPublicacao && { anoPublicacao: parseInt(anoPublicacao) }),
        }
      : livro
  );

  livros.splice(0, livros.length, ...livrosAtualizados);

  const livroNovo = livros.find((l) => l.id === idParaEditar);

  res.status(200).json({
    success: true,
    message: `Dados do livro ID ${id} atualizados com sucesso!`,
    livro: livroNovo,
  });
};

// Deletando Livro
const deleteLivro = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "ID deve ser um número válido!",
    });
  }

  const idParaApagar = parseInt(id);

  const livroParaRemover = livros.find((l) => l.id === idParaApagar);
  if (!livroParaRemover) {
    return res.status(404).json({
      success: false,
      message: `Livro com ID ${id} não encontrado para remoção!`,
    });
  }

  const livrosFiltrados = livros.filter((livro) => livro.id !== idParaApagar);

  livros.splice(0, livros.length, ...livrosFiltrados);

  res.status(200).json({
    success: true,
    message: `Livro ${livroParaRemover.titulo} (ID: ${id}) foi removido dos registros.`,
    livroRemovido: livroParaRemover,
  });
};

export { createLivro, getAllLivros, getLivroById, updateLivro, deleteLivro };
