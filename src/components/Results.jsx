import Carrossel from "./Carrossel";

export const Results = () => {
  return (
    <section className="h-screen bg-emerald-800">
      <h2 className="text-xl text-white m-3">Resultados:</h2>
      <h3 className="m-6 text-white">
        Veja como os procedimentos podem trazer grandes melhoras:
      </h3>
      <Carrossel/>
    </section>
  );
};
