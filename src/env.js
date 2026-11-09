// Carrega .env (se existir) antes de qualquer módulo ler process.env.
// Importado primeiro em server.js; variáveis já definidas no ambiente têm precedência.
try {
  process.loadEnvFile();
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}
