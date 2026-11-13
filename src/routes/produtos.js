import { Router } from "express";
import { z } from "zod";
import { authenticate } from "../middlewares/auth.js";
import * as model from "../models/produto.js";
import { clampPage } from "../lib/pagination.js";

const router = Router();
const schema = z.object({ nome: z.string().min(2), sku: z.string(), price: z.number().positive() });

router.get("/", async (req, res, next) => {
  try {
    res.json(await model.listar({ page: clampPage(req.query.page), category: req.query.category }));
  } catch (e) { next(e); }
});

router.get("/:id", async (req, res, next) => {
  try {
    // id não numérico não existe; evita mandar lixo para a coluna integer
    const produto = /^\d+$/.test(req.params.id) ? await model.buscar(Number(req.params.id)) : null;
    if (!produto) return res.status(404).json({ erro: "not found" });
    res.json(produto);
  } catch (e) { next(e); }
});

router.post("/", authenticate, async (req, res, next) => {
  try {
    res.status(201).json(await model.criar(schema.parse(req.body)));
  } catch (e) { next(e); }
});

export default router;
// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry
