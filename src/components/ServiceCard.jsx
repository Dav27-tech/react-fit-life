export default function serviceCard({ service }) {
  return (
    <div className="col-md-4 d-flex">
      <div className="card shadow w-100">
        <div className="card-body text-center d-flex flex-column">
          <i className={`${service.icon} display-3 text-success mb-3`}></i>
          <h3>{service.title}</h3>
          <p className="flex-grow-1">{service.description}</p>
          <button className="btn btn-outline-success">Learn More</button>
        </div>
      </div>
    </div>
  );
}
