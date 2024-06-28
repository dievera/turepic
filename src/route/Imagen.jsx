import Img1 from "../../public/imagenes/imagen1.jpg";
import Img2 from "../../public/imagenes/imagen2.jpg";
import { Link } from "react-router-dom";

function Imagen() {
  return (
    <>
      <div className="container">
        <form action="">
          <div className="row py-2">
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Descargar
              </button>
            </div>
          </div>
        </form>
        <div className="row py-2">
          <div className="col">
            <img src={Img1} className="img-fluid" alt="..." />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Licencia - </p>
            <p>Detalles</p>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-xs-2 col-2">
            <Link href="/Autor">
              <img src={Img2} alt="" className="img-user" />
            </Link>
          </div>
          <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10 col-xs-10 col-10">
            <h3>Nombre Apellido</h3>
            <p>Detalles</p>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-xl-3 col-md-4 col-sm-6 col-xs-6 mb-3">
            <img src={Img1} className="img-fluid" alt="..." />
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-xs-6 mb-3">
            <img src={Img1} className="img-fluid" alt="..." />
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-xs-6 mb-3">
            <img src={Img1} className="img-fluid" alt="..." />
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-xs-6 mb-3">
            <img src={Img1} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Imagen;
