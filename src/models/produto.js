import { db } from "../db.js";
import { PER_PAGE, offset } from "../lib/pagination.js";

export async function listar({ page, category }) {
  const { rows } = await db.query(
    `SELECT id, nome, sku, price FROM produtos
     WHERE deleted_at IS NULL AND ($1::text IS NULL OR category = $1)
     ORDER BY id DESC LIMIT $2 OFFSET $3`,
    [category ?? null, PER_PAGE, offset(page)]
  );
  return rows;
}

export async function criar({ nome, sku, price }) {
  const { rows } = await db.query(
    "INSERT INTO produtos (nome, sku, price) VALUES ($1, $2, $3) RETURNING *",
    [nome, sku, price]
  );
  return rows[0];
}
// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry

// rationale: guard before the call, the caller owns the retry
