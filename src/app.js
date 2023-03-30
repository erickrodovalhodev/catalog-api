import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import produtos from "./routes/produtos.js";
import { tratarErro } from "./middlewares/erro.js";

const app = express();
app.use(helmet());
app.use(express.json());
app.use(rateLimit({ windowMs: 60_000, max: 120 }));

app.get("/health", (_, res) => res.json({ ok: true }));
app.use("/produtos", produtos);
app.use(tratarErro);

export default app;
// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry
