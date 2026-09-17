# Portfólio — Amanda Frolini

Portfólio pessoal responsivo para apresentar minha trajetória, habilidades e projetos acadêmicos e pessoais.

## Seções

- Apresentação
- Sobre mim
- Certificações com visualização ampliada
- Habilidades e tecnologias
- Projetos com filtros por categoria
- Contato e redes profissionais

## Tecnologias

- HTML semântico por meio de JSX
- CSS responsivo e animações
- JavaScript para menu, filtros e animações de entrada
- Next.js/Vinext como estrutura de publicação

## Estrutura principal

```text
app/
├── page.tsx       # Conteúdo e estrutura da página
├── globals.css    # Design, responsividade e animações
└── layout.tsx     # Metadados e configuração global
public/
└── script.js      # Interações em JavaScript puro
```

## Como executar

Requer Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

## Evolução planejada

O JavaScript está isolado em `public/script.js`, facilitando uma futura migração para TypeScript.

1. Criar componentes React para menu, filtros e animações.
2. Migrar as interações para arquivos `.tsx` tipados.
3. Instalar GSAP e substituir o `IntersectionObserver` pelas timelines desejadas.
4. Conectar os cards a um arquivo de dados ou CMS.
5. Adicionar páginas individuais e links reais para cada projeto.

## Como adicionar novos certificados

1. Salve a imagem em `public/certificados/`.
2. Abra `app/page.tsx`.
3. Acrescente um novo item no array `certificates`, informando título, instituição, data, duração e caminho da imagem.

O novo certificado aparecerá automaticamente na grade e poderá ser aberto em tamanho maior.

## Contato

- [LinkedIn](https://www.linkedin.com/in/amanda-frolini-097186301/)
- [GitHub](https://github.com/amandafrolini6)
- [E-mail](mailto:amandafrolini6@gmail.com)

© 2026 Amanda Frolini
