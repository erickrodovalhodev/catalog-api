const PER_PAGE = 20;

export function clampPage(valor) {
  const n = Number(valor);
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.floor(n);
}

export function offset(page) {
  return (clampPage(page) - 1) * PER_PAGE;
}

export { PER_PAGE };
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
