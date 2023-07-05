import test from "node:test";
import assert from "node:assert";
import { z } from "zod";

const schema = z.object({ nome: z.string().min(2), sku: z.string(), price: z.number().positive() });

test("rejects non positive price", () => {
  assert.equal(schema.safeParse({ nome: "Caneca", sku: "S1", price: 0 }).success, false);
});

test("accepts a valid payload", () => {
  assert.equal(schema.safeParse({ nome: "Caneca", sku: "S1", price: 9.9 }).success, true);
});
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
