import JoonbotEmbed from "./components/JoonbotEmbed";

export default function Home() {
  const pizzas = [
    { nome: "Pizza de acalme-se calabreso", preco: "R$ 69,00" },
    { nome: "Pizza de 4 queijos", preco: "R$ 67,00" },
    { nome: "Pizza de CR7", preco: "R$ 77,00" },
    { nome: "Não peça essa Pizza (brócolis)", preco: "R$ 01,00" },
  ];

  const bebidas = [
    { nome: "Coca zero", preco: "R$ 10,00" },
    { nome: "Guaraná zero", preco: "R$ 9,50" },
    { nome: "Suco de Urânio (o melhor de todos)", preco: "R$ 12,00" },
  ];

  const imagens = [
    "https://res.cloudinary.com/joon/image/upload/v1776965655/hwxxkpkk0dfmgfmuoilb.gif",
    "https://res.cloudinary.com/joon/image/upload/v1776361034/khvx5khygkmqzorjrpmr.jpg",
    "https://res.cloudinary.com/joon/image/upload/v1776361156/u3h9xgrbg84jwqlc8grg.jpg",
    "https://res.cloudinary.com/joon/image/upload/v1776361243/kalcdiranm2x9dmxzlxi.jpg",
    "https://res.cloudinary.com/joon/image/upload/v1776361350/qrxvefheeum3tqbibqav.jpg",
    "https://res.cloudinary.com/joon/image/upload/v1776966093/xn7vcvcjkxuskcpq98l8.png",
    "https://res.cloudinary.com/joon/image/upload/v1776966194/hn9fl5onolubfs3jomio.png",
    "https://res.cloudinary.com/joon/image/upload/v1776966301/yr0df27yyd1z7btcpmzv.avif",
  ];

  return (
    <div className="cosmic-page">
      <div className="noise-overlay" />

      <header className="hero">
        <p className="hero-kicker">Forno intergalactico aberto</p>
        <h1>Calamidade Cósmica Pizzaria</h1>
        <p className="hero-subtitle">Bem vindo a calamidade cósmica pizzaria.</p>
      </header>

      <main className="content-grid">
        <section className="card story-card">
          <h2>Como essa pizzaria nasceu</h2>
          <p>
            Antes uma pizzaria comum, até que um dia, um dos nossos funcionários colocou o elemento X, e quando
             colocou no forno, ele criou o nosso mascote, a calamidade cósmica
          </p>
          <p>
            alguns dias depois, a calamidade cósmica que antes era tratada como um pet, destrui metade do nosso universo, e assim apelidamos ela
            carinhosamente de calamidade cósmica, e decidimos criar uma pizzaria em homenagem a ela, e desde então, ela é 
            a nossa mascote e símbolo da nossa pizzaria.  
          </p>
        </section>

        <section className="card menu-card">
          <h2>calamidades redondas</h2>
          <ul>
            {pizzas.map((item) => (
              <li key={item.nome}>
                <span>{item.nome}</span>
                <strong>{item.preco}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section className="card menu-card">
          <h2>calamidades em estado líquido</h2>
          <ul>
            {bebidas.map((item) => (
              <li key={item.nome}>
                <span>{item.nome}</span>
                <strong>{item.preco}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section className="card gallery-card">
          <h2>Galeria cósmica</h2>
          <div className="gallery-grid">
            {imagens.map((src) => (
              <div className="gallery-item" key={src}>
                <img src={src} alt="Imagem da Desgraça Cósmica Pizzaria" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section className="card chatbot-card">
          <h2>Faça seu pedido com o chatbot</h2>
          <p className="muted">Use o chatbot oficial da pizzaria para montar seu pedido.</p>
          <div className="joonbot-embed-wrapper">
            <JoonbotEmbed />
          </div>
        </section>
      </main>
    </div>
  );
}
