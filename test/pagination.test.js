import test from "node:test";
import assert from "node:assert";
import { clampPage, offset } from "../src/lib/pagination.js";

test("negative page falls back to 1", () => assert.equal(clampPage("-3"), 1));
test("non numeric page falls back to 1", () => assert.equal(clampPage("abc"), 1));
test("decimal page is floored", () => assert.equal(clampPage("2.9"), 2));
test("offset multiplies by page size", () => assert.equal(offset(3), 40));
// rationale: guard before the call, the caller owns the retry
