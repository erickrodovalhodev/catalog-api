# catalog-api

Product catalogue REST API. Express, Postgres, JWT, zod at the boundary.

## run

    docker compose up -d db && sleep 8   # postgres 16; schema.sql roda no primeiro boot
    cp .env.example .env                 # lido por src/env.js (process.loadEnvFile)
    npm ci && npm start                  # http://localhost:3000

`schema.sql` é montado em `/docker-entrypoint-initdb.d/`: cria `produtos` e insere
dois produtos de exemplo. Ele só roda com o volume vazio; para recriar,
`docker compose down -v`.

## demo

    curl -si localhost:3000/produtos | head -1        # 200
    curl -s  localhost:3000/produtos                  # os 2 produtos do schema.sql
    curl -si localhost:3000/produtos/1 | head -1      # 200
    curl -si localhost:3000/produtos/999 | head -1    # 404 (não existe)

    # soft delete: some da listagem e o GET por id vira 404
    docker compose exec -T db psql -U postgres -d catalog \
      -c "UPDATE produtos SET deleted_at = now() WHERE id = 2"
    curl -si localhost:3000/produtos/2 | head -1      # 404

## endpoints

| Method | Path | Auth |
| --- | --- | --- |
| GET | `/health` | no |
| GET | `/produtos?page=&category=` | no |
| GET | `/produtos/:id` | no (404 if missing or soft-deleted) |
| POST | `/produtos` | bearer |

## decisions

- zod validates the payload before the model, so the model never sees a partial
- soft delete (`deleted_at`) instead of a destructive delete
- pagination clamped in `lib/pagination.js`, covered by tests
- helmet and a 120 req/min rate limit on the whole app

## tests

    npm test
