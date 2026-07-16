export default function Hero() {
  function handleClick() {
    alert("Welcome to FitLife!");
  }

  return (
    <section className="bg-success text-white py-5">
      <div className="container text-center">
        <h1 className="display-3 fw-bold">Transform Your Body</h1>
        <p className="lead my-4">
          Personalized fitness programs for every goal.
        </p>
        <button className="btn btn-light btn-lg" onClick={handleClick}>
          Join Today
        </button>
      </div>
    </section>
  );
}
