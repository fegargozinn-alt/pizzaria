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
        <h1>Desgraça Cósmica Pizzaria</h1>
        <p className="hero-subtitle">Bem vindo a desgraça cósmica pizzaria.</p>
      </header>

      <main className="content-grid">
        <section className="card story-card">
          <h2>Como essa pizzaria nasceu</h2>
          <p>
            A Desgraça Cósmica Pizzaria começou quando um forno velho caiu de um meteoro no quintal do fundador,
            Toninho Nebuloso. Ao testar a primeira massa, ele misturou temperos da Terra com um molho secreto vindo
            de uma feira interplanetária. O resultado foi tão absurdo que os vizinhos fizeram fila às 3 da manhã.
          </p>
          <p>
            Desde então, a casa virou ponto oficial de quem quer pizza boa com clima de caos espacial: receitas
            clássicas, sabores estranhos e bebidas com nomes perigosos, tudo feito no forno intergaláctico que nunca
            apaga.
          </p>
        </section>

        <section className="card menu-card">
          <h2>Qual desgraças você quer?</h2>
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
          <h2>Desgraças em estado líquido</h2>
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
          <h2>Faça seu pedido no chat</h2>
          <p className="muted">Use o chatbot oficial da pizzaria para montar seu pedido.</p>
          <div className="joonbot-embed-wrapper">
            <JoonbotEmbed />
          </div>
        </section>
      </main>
    </div>
  );
}
