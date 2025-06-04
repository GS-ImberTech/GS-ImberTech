# 🌐 Imber Tech - Global Solution
## Projeto de uma página web informativa e interativa sobre o tema de enchentes no Brasil e a tecnologia desenvolvida pela Imber Tech para lidar com essa problemática.

---

## 📄 Descrição
Este site tem como objetivo apresentar a empresa Imber Tech, sua tecnologia, objetivos, público-alvo, benefícios e formas de aplicação no dia a dia. Além disso, o site contém um quiz interativo para testar o conhecimento do visitante e um formulário para contato.

---

## 🌧️ Enchentes no Brasil

O Brasil possui um **clima tropical**, caracterizado por **temperaturas elevadas** e **grandes volumes de chuva**, especialmente entre **dezembro e março**. As enchentes são fenômenos naturais, mas foram **agravadas** pela ação **antrópica**.

Entre os fatores que causam enchentes, destacam-se:

- Encurtamento dos rios  
- Excesso de chuvas  
- Impermeabilização do solo  
- **Incapacidade de escoamento da água pelos bueiros**  

Nosso projeto busca solucionar este último problema.

---

## 🎯 Funcionalidades
- ✅ Navegação intuitiva com menu interativo.

- ✅ Alteração de temas (claro, escuro e cinza).

- ✅ Slider de imagens sobre enchentes no Brasil.

- ✅ Seções informativas sobre a empresa e sua atuação.

- ✅ Quiz interativo para testar conhecimentos.

- ✅ Formulário de contato com campos de validação.

- ✅ Design responsivo utilizando Google Fonts e ícones FontAwesome.

---

## 🖼️ Estrutura das Seções
- Enchentes no Brasil: Galeria de imagens com slider e informações sobre a problemática.

- Nossa Tecnologia: Descrição da solução tecnológica da Imber Tech.

- Nossos Objetivos: Metas e missão da empresa.

- Público-Alvo: Para quem a solução é direcionada.

- Benefícios: Vantagens de utilizar a tecnologia da empresa.

- Uso Diário: Aplicações práticas da solução.

- Teste seu Conhecimento: Quiz interativo.

- Deixe seu Contato: Formulário para o visitante se cadastrar e receber mais informações.

---

## ✅ Estrutura Completa do Site
## 📄 HTML
**O HTML foi estruturado de forma semântica, contendo as principais seções:**

- Cabeçalho
    - Contém:
 
    - Logotipo que muda conforme o tema.

    - Botão de menu hamburguer (#menubtn).
 
    - Lista de navegação (#menulist).

- Slider de Imagens
    - Carrossel com imagens relacionadas a enchentes, com botões #btnPrev e #btnNext.

- Seção Educativa
    - Textos informativos sobre enchentes, com conteúdo educativo.

- Quiz 
    - Contém perguntas de múltipla escolha sobre enchentes, com pontuação ao final.

- Seção de Temas
    **Botões:**
    - claro → Tema Claro  
    - escuro → Tema Escuro    
    - cinza → Tema Cinza

- Formulário de Contato 
    **Campos obrigatórios:**
    - Nome
    - Email
    - Telefone
    - Além de uma autorização para compartilhamento de dados.

- Rodapé 
    - Informações finais e créditos.

---

## 🎨 Estilização com CSS
- Responsivo para dispositivos móveis.

- Utiliza variáveis de cores para facilitar a alteração dinâmica de temas.

- Animações suaves para slider e quiz.

- Estrutura visual clara e de fácil leitura.

---

## 🛠️ Funcionalidades e Detalhamento do JavaScript
✅ Menu Hamburguer
- Exibe/oculta a navegação com clique no #menubtn.

- Controlado por uma variável showdisplay para alternar entre flex e none.

✅ Slider de Imagens
- Navegação manual com #btnNext e #btnPrev.

- Rotação automática a cada 5 segundos via setInterval.
    
- Classes active adicionadas/removidas dinamicamente para mostrar o slide atual.

✅ Quiz Interativo
- 10 perguntas sobre enchentes.

- Cada pergunta possui várias alternativas.

- Feedback visual (verde/vermelho) conforme a escolha correta ou incorreta.

- Pontuação exibida ao final.

- Botão para reiniciar o quiz (startQuiz()).

- Principais funções:

- startQuiz() → inicia/reinicia o quiz.

- showQuestion() → exibe a pergunta atual.

- selectAnswer() → verifica e pontua a resposta.

- showScore() → mostra a pontuação final.

✅ Mudança de Tema (Claro, Escuro, Cinza)
 Funções:

- changeBackgroundWhite():

    - Fundo branco

    - Texto preto

    - Imagem da logo padrão

- changeBackgroundBlack():

    - Fundo azul escuro

    - Texto branco

    - Logo versão escura

- changeBackgroundGrey():

    - Fundo branco

    - Elementos e logo em preto

    - Cada função altera dinamicamente:

    - background-color do body.

    - color de textos.

    - src da logo.

    - Cores de botões.

    - Gradientes de seções específicas.

✅ Validação de Formulário
- Ao enviar o formulário #formInfo:

- Verifica se todos os campos obrigatórios estão preenchidos.

- Garante que o usuário autorizou o compartilhamento de dados.

- Exibe alert() para orientar caso falte alguma informação.

---

## 🖼️ Estrutura de Arquivos

📂 src
 ├── 📁 assets
 │    └── 📁 imgs
 │         ├── logo.png
 │         ├── logo-dark.png
 │         └── logo-allblack.png
 ├── 📄 index.html
 ├── 📄 style.css
 └── 📄 script.js

---

## 💡 Como Utilizar

Clone ou baixe este repositório.

**Link para o repositório:**
[Link do repositório](https://github.com/GS-ImberTech/GS-ImberTech.git)

Abra index.html em seu navegador.

Explore:

- Menu interativo.

- Slider de imagens.

- Quiz educativo.

- Mudança de tema.

- Formulário com validação.

---

## 🚀 Tecnologias Utilizadas
- HTML5 → Estrutura do site.

- CSS3 → Estilização e responsividade.

- JavaScript Vanilla → Interatividade e funcionalidades.

---

## 🧩 Principais Conceitos Aplicados
- DOM Manipulation.

- Event Listeners.

- Arrays e Loops.

- Condicionais.

- Validação de formulários.

- Temas dinâmicos com alteração de estilos.

---

## 🖊️ Autores
- Vitor Fernandes dos Santos — RM: 566275
- João Victor de Souza Abe — RM: 561446

---

## 📝 Licença
Este projeto está licenciado sob a MIT License.