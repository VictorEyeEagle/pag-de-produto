import './App.css';

function App() {
  return (
    <body>
      <header id="header">
        <nav id="nav-bar">
          <img id="header-img"
            src="https://static.vecteezy.com/ti/vetor-gratis/t2/3026148-pc-logo-monogram-modern-design-template-gratis-vetor.jpg" />
          <ul class="navul">
            <a href="#info" class="nav-link">
              <li class="nav-link2">Recursos</li>
            </a>
            <a href="#video" class="nav-link">
              <li class="nav-link2">Demonstração</li>
            </a>
            <a href="#prices" class="nav-link">
              <li class="nav-link2">Preços</li>
            </a>
          </ul>
        </nav>
      </header>
      <main id="main">
        <form id="form" method="post" action="https://www.freecodecamp.com/email-submit">
          <h1>PCs Gamers Poderosos</h1>
          <input name="email" id="email" type="email" placeholder="Digite seu email" required />
          <div class="subform"><input id="submit" type="submit" value="COMEÇAR" /></div>
        </form>
        <div id="info">
          <section>
            <img class="icon1" src="https://cdn-icons-png.flaticon.com/128/7310/7310330.png" />
            <h2>Componentes Premium</h2>
            <p>Nossos computadores gamers possuem componentes de alta qualidade, cuidadosamente selecionados para garantir o
              melhor desempenho. Isso assegura uma maior durabilidade para o seu investimento.</p>
          </section>
          <section>
            <img class="icon2" src="https://cdn-icons-png.flaticon.com/128/7032/7032218.png" />
            <h2>Entrega Rápida</h2>
            <p>Priorizamos entregar o seu computador gamer assim que ele estiver montado. Além disso, oferecemos devolução
              grátis se você não ficar totalmente satisfeito com a sua compra.</p>
          </section>
          <section>
            <img class="icon3" src="https://cdn-icons-png.flaticon.com/128/5735/5735354.png" />
            <h2>Garantia de Qualidade</h2>
            <p>Com cada computador gamer que você compra, garantimos que não há defeitos ou problemas. Testamos e validamos
              cuidadosamente o desempenho para garantir que você tenha uma experiência de jogo incrível.</p>
          </section>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VbV7xWplOSI?si=5eMhF0NgxfoHkmEd"
          title="YouTube video player" frameborder="0" allowfullscreen id="video"></iframe>
        <div id="prices">
          <div class="price-inf1 infopric">
            <h2 class="pcname">PC Gamer Junior</h2>

            <h2>R$3.000,00</h2>
            <ul>

              <li>Intel Core i3-12100F</li>
              <li>16GB RAM Kingston</li>
              <li>NVIDIA GeForce GTX 1650</li>
            </ul>
            <input class="select" type="submit" value="Selecionar" />
          </div>
          <div class="price-inf2 infopric">
            <h2 class="pcname">PC Gamer Studio</h2>
            <h2>R$5.000,00</h2>
            <ul>
              <li>Intel Core i5-12400F</li>
              <li>16GB RAM Corsair</li>
              <li>NVIDIA GeForce RTX 3050</li>
            </ul>
            <input class="select" type="submit" value="Selecionar" />
          </div>
          <div class="price-inf3 infopric">
            <h2 class="pcname">PC Gamer Pro</h2>
            <h2>R$10.000,00</h2>
            <ul>

              <li>AMD Ryzen 7 7700X</li>
              <li>32GB RAM HyperX</li>
              <li>NVIDIA GeForce RTX 4060 Ti</li>
              <li>1TB SSD Samsung</li>
            </ul>
            <input class="select" type="submit" value="Selecionar" />
          </div>
        </div>

        <div class="footer">
          <ul>
            <a href="">
              <li>Privacidade</li>
            </a>
            <a href="">
              <li>Termos</li>
            </a>
            <a href="">
              <li>Contato</li>
            </a>
          </ul>

          <p>© 2023, PC Gamer - A melhor loja de computadores gamers do Brasil</p>
        </div>
      </main>
    </body>
  );
}

export default App;
