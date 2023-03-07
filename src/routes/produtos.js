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

router.post("/", authenticate, async (req, res, next) => {
  try {
    res.status(201).json(await model.criar(schema.parse(req.body)));
  } catch (e) { next(e); }
});

export default router;
// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry
