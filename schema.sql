CREATE TABLE IF NOT EXISTS produtos (
    id          SERIAL        PRIMARY KEY,
    nome        TEXT          NOT NULL,
    sku         TEXT          NOT NULL UNIQUE,
    price       NUMERIC(10,2) NOT NULL CHECK (price > 0),
    category    TEXT,
    deleted_at  TIMESTAMPTZ
);

INSERT INTO produtos (nome, sku, price, category) VALUES
    ('Caneca esmaltada', 'CAN-001', 49.90, 'cozinha'),
    ('Camiseta básica',  'CAM-001', 79.90, 'vestuario');
