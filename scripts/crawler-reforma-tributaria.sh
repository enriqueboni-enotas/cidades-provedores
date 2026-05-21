#!/bin/bash
# Crawler diário da página de marcos da Reforma Tributária
# Fonte: https://www.gov.br/receitafederal/pt-br/.../marcos
# Verifica se houve alteração na página e sinaliza para atualização manual
set -e

URL="https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/marcos"
HASH_FILE="LogsAlteracoes/.reforma-tributaria-hash"
DATA_FILE="LogsAlteracoes/reforma-tributaria-data.js"

echo "[1/3] Buscando página de marcos da Receita Federal..."
CONTENT=$(curl -sL "$URL" | sed 's/<[^>]*>//g' | tr -s ' \n' | grep -i "lei\|portaria\|emenda\|complementar\|constitucional" | head -50)

if [ -z "$CONTENT" ]; then
  echo "ERRO: Não foi possível acessar a página da Receita Federal"
  exit 1
fi

echo "[2/3] Calculando hash do conteúdo..."
NEW_HASH=$(echo "$CONTENT" | sha256sum | cut -d' ' -f1)

if [ -f "$HASH_FILE" ]; then
  OLD_HASH=$(cat "$HASH_FILE")
else
  OLD_HASH=""
fi

echo "[3/3] Comparando com versão anterior..."
if [ "$NEW_HASH" = "$OLD_HASH" ]; then
  echo "Sem alterações na página de marcos. Nada a fazer."
  echo "$NEW_HASH" > "$HASH_FILE"
  exit 0
fi

echo "ALTERAÇÃO DETECTADA na página de marcos!"
echo "Hash anterior: $OLD_HASH"
echo "Hash novo:     $NEW_HASH"
echo ""
echo "Conteúdo relevante encontrado:"
echo "$CONTENT"
echo ""
echo "$NEW_HASH" > "$HASH_FILE"

# Atualiza a data de verificação no arquivo de dados
TS=$(TZ='America/Sao_Paulo' date '+%d/%m/%Y')
sed -i "s/atualizadoEm: '[^']*'/atualizadoEm: '$TS'/" "$DATA_FILE"

echo ""
echo "Data de verificação atualizada para $TS"
echo "AÇÃO NECESSÁRIA: Revisar manualmente os novos marcos e atualizar reforma-tributaria-data.js"
