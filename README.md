# Validador de CPF v.1.0.0

**Esta biblioteca se destina à validação de números de CPF, para uso em aplicações web.**
Na versão atual é capaz de validar o CPF retornando true ou false.

## Como instalar:

```shell

$  npm install cpfvalidator-la

```

## Como utilizar:

```node

> const cpfValidator = require("cpfvalidator-la");
> console.log(cpfValidator("53925915079"))
> // returns "true"

```

## Roadmap oficial do projeto

#### Versão 1.0.0 (released)
- Verifica se o CPF tem 11 dígitos
- Verifica se o CPF possui todos os números iguais
- Retorna se o número de CPF é válido ou não
