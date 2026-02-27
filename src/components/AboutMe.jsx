export const AboutMe = () => {
  return (
    <section>
      <div
        className="leading-[1.6] flex flex-col gap-2 text-justify
                  m-4"
      >
        <h2 className="text-(--cor-verde) text-xl">Apresentação:</h2>
        <p>
          "Olá! Sou Angela Prado, podóloga especialista na saúde e no bem-estar
          dos seus pés.
        </p>
        <p>
          Acredito que pés saudáveis são a base para uma vida com mais qualidade
          e movimento.
        </p>
        <p>
          Meu foco vai além da estética: trabalho na prevenção e no tratamento
          de patologias, garantindo um atendimento humanizado, seguro e com
          total biossegurança. Vamos cuidar da sua base?"
        </p>
      </div>
      <picture className="min-w-full flex justify-center">
        <img src="./teste.png" alt="" />
      </picture>
    </section>
  );
};
