import "./aboutMe.css";
import GuilhermeLaux from "../../assets/guilheme-laux-photo.png";

export default function AboutMe() {
  return (
    <main className="hero">
      <div className="hero-content">
        <section className="text-area">
          <h1 className="name-title">Guilherme Olavo Laux</h1>

          <p>
            Atuo com desenvolvimento Full Stack há mais de cinco anos,
            atualmente estou na empresa CWI Software, alocado no cliente Riachuelo.
            Sou formado em Análise e Desenvolvimento De Sistemas. Tenho sólida
            experiência em grandes projetos, utilizando diversas tecnologias e
            aplicando boas práticas de desenvolvimento, arquitetura de software
            e metodologias ágeis. Tenho experiência na criação de aplicações web
            e mobile, buscando sempre entregar soluções eficientes, escaláveis e
            com foco na experiência do usuário.
          </p>
        </section>

        <div className="image-placeholder">
          <img src={GuilhermeLaux} alt="" className="photo" />
        </div>
      </div>

      <div className="bottom-wave" />
    </main>
  );
}
