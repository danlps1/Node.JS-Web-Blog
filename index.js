import express from "express";
import multer from "multer";
import methodOverride from "method-override";

const app = express();
const porta = 3000;

// Configuração do armazenamento de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

const artigos = [];

// Rotas
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/artigos", (req, res) => {
  res.render("artigos.ejs", { artigos });
});

app.get("/sobre", (req, res) =>{
  res.render("sobre.ejs");
})

app.get("/publicar", (req, res) => {
  res.render("publicar.ejs");
});

app.get("/artigos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("Acessando artigo com ID:", id);

  if (id >= 0 && id < artigos.length) {
    res.render("artigoCompleto.ejs", { artigo: artigos[id], id });
  } else {
    console.log("ID inválido ou artigo não encontrado para o ID:", id);
    res.status(404).send("Artigo não encontrado");
  }
});

app.get("/artigos/:id/editar", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < artigos.length) {
    res.render("editarArtigo.ejs", { artigo: artigos[id], id });
  } else {
    res.status(404).send("Artigo não encontrado");
  }
});

// Formulário publicar artigos
app.post("/artigos", upload.single("imagem"), (req, res) => {
  const { titulo, resumo, conteudo } = req.body;
  const imagem = req.file ? `/uploads/${req.file.filename}` : null;

  if (titulo && resumo && conteudo && imagem) {
    artigos.push({ titulo, resumo, conteudo, imagem });
    console.log("Artigo adicionado com sucesso.");
    res.redirect("/artigos");
  } else {
    res.status(400).send("Todos os campos são obrigatórios.");
  }
});

// Formulário editar artigos
app.post("/artigos/:id", upload.single("imagem"), (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, resumo, conteudo } = req.body;
  const imagem = req.file ? `/uploads/${req.file.filename}` : artigos[id].imagem;

  if (id >= 0 && id < artigos.length && titulo && resumo && conteudo) {
    artigos[id] = { titulo, resumo, conteudo, imagem };
    console.log("Artigo atualizado com sucesso.");
    res.redirect(`/artigos/${id}`); 
  } else {
    console.log("ID inválido ou artigo não encontrado.");
    res.status(404).send("Artigo não encontrado.");
  }
});

// Excluir artigos
app.delete("/artigos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (id >= 0 && id < artigos.length) {
    artigos.splice(id, 1); 
    console.log("Artigo excluído com sucesso.");
    res.redirect("/artigos");
  } else {
    console.log("ID inválido ou artigo não encontrado.");
    res.status(404).send("Artigo não encontrado.");
  }
});

app.listen(porta, () => {
  console.log(`Aplicação rodando em http://localhost:${porta}`);
});
