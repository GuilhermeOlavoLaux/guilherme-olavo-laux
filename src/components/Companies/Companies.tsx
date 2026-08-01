import "./companies.css";
export default function Companies() {
  return (
    <div className="companies">
      <li className="companie">
        <h1>Cwi Software</h1>
      </li>
      <p className="selfCheckout">
        &emsp; Na cwi ja atuei alocado no cliente Coca-Cola e atualmente na
        Riachuelo.
      </p>
      <h2 className="selfCheckout-title">
        <span className="number">1.</span>Riachuelo
      </h2>
      <p className="selfCheckout">
        &emsp;Experiência nos projetos PDX e SelfCheckout da Riachuelo:
      </p>
      <p className="selfCheckout">
        &emsp;&emsp;<span className="bold">PDX: </span>Aplicação de frente de
        caixa utilizada em todas as lojas Riachuelo, responsável por processar
        vendas, pagamentos, emissão fiscal e operações de retaguarda.
        Desenvolvido com Electron, ReactJS e NodeJs, o sistema é essencial para
        o funcionamento das operações da empresa, garantindo performance,
        estabilidade e integração com os demais serviços.
      </p>
      <p className="selfCheckout">
        &emsp;&emsp;
        <span className="bold">SelfCheckout: </span>
        Sistema desenvolvido com o mesmo intuito do PDX, porém nele, o próprio
        cliente faz a operação da venda, desde a sua identificação, adição dos
        produtos, pagamento até a finalização. Também desenvolvido utilizando a
        mesma stack de Electron, ReactJs e NodeJs.
      </p>
      <h2 className="selfCheckout-title">2. Coca-Cola</h2>
      <p className="selfCheckout">
        &emsp;Na Coca-Cola atuei em vários projetos, sendo alguns deles:
      </p>
      <p className="selfCheckout">
        &emsp;&emsp;
        <span className="bold">Caravanas de Natal: </span>
        Aplicativo desenvolvido em React Native com o objetivo principal de
        proporcionar aos usuários a localização em tempo real dos caminhões de
        Natal da Coca-Cola.
      </p>
      <p className="selfCheckout">
        &emsp;&emsp;<span className="bold"> Volta às Aulas Kapo: </span> Projeto
        desenvolvido em React, onde o usuário cadastra notas fiscais de produtos
        Kapo e pode concorrer a prêmios instantâneos e semanais.
      </p>

      <p className="selfCheckout">
        &emsp;&emsp;
        <span className="bold"> Site Coca-Cola Brasil: </span>Projeto
        desenvolvido em React, um hub para divulgação da marca e também de
        promoções.
      </p>

      <p className="selfCheckout">
        &emsp;&emsp; <span className="bold">Projeto VbLATAM: </span>Site
        desenvolvido em React, onde o usuário pode escanear uma garrafa física
        vazia para gerar uma garrafa virtual e utilizá-la para comprar novos
        produtos da Coca-Cola.
      </p>

      <li className="companie2">
        <h1>PrivacyTools</h1>

        <p>
          &emsp;Na Privacy Tools trabalhei no desenvolvimento de uma plataforma
          de governança de privacidade e conformidade com a LGPD. A solução
          centralizava o mapeamento de dados, gestão de consentimentos, controle
          de cookies, atendimento aos direitos dos titulares, etc. Atuei como
          desenvolvedor full stack utilizando as seguintes tecnologias: React,
          JavaScript, PostgreSQL, HTML/CSS, Java, Kotlin, Spring Boot e Docker.
        </p>
      </li>
      <li className="companie2">
        <h1>Compliance Station</h1>

        <p>
          &emsp;Na Compliance Station trabalhei no desenvolvimento de uma
          plataforma especializada em mecanismos de integridade, ética
          corporativa e conformidade regulatória para organizações de todos os
          portes. A aplicação conta com soluções personalizadas de mapeamento de
          riscos, códigos de conduta e treinamentos automatizados para combater
          irregularidades e mitigar riscos institucionais. Utilizei a stack
          React, JavaScript, MongoDb, HTML/CSS, NodeJs, Express e ReactNative.
        </p>
      </li>
    </div>
  );
}
