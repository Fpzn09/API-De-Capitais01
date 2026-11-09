import express, { Request, Response } from "express";
import { ESTADOS_BRASIL } from "./data/estados";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/estados/:sigla", (req: Request, res: Response) => {
  const { sigla } = req.params;
  const siglaNormalizada = sigla.toUpperCase();
  const capital = ESTADOS_BRASIL[siglaNormalizada];

  if (!capital) {
    return res.status(404).json({
      erro: "Estado não encontrado."
    });
  }

  return res.status(200).json({
    sigla: siglaNormalizada,
    capital
  });
});

app.listen(PORT, () => {
  console.log(` Servidor rodando em: http://localhost:${PORT}`);
});