import { ZodError } from "zod";

export function tratarErro(erro, req, res, _next) {
  if (erro instanceof ZodError) {
    return res.status(422).json({ erro: "invalid payload", details: erro.issues });
  }
  console.error(erro);
  res.status(500).json({ erro: "internal error" });
}