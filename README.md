# catalog-api

Product catalogue REST API. Express, Postgres, JWT, zod at the boundary.

## run

    docker compose up -d db
    cp .env.example .env
    npm ci && npm start

## endpoints

| Method | Path | Auth |
| --- | --- | --- |
| GET | `/health` | no |
| GET | `/produtos?page=&category=` | no |
| POST | `/produtos` | bearer |

## decisions

- zod validates the payload before the model, so the model never sees a partial
- soft delete (`deleted_at`) instead of a destructive delete
- pagination clamped in `lib/pagination.js`, covered by tests
- helmet and a 120 req/min rate limit on the whole app

## tests

    npm test
