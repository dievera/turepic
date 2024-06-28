import Img1 from "../../public/imagenes/imagen1.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row img-back">
          <div className="col">
            <h1 className="display-1 text-center">Titulo</h1>
            <form action="">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar imagenes"
                  aria-label="Buscar imagenes"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col pb-2">
            <div>
              <form action="tag">
                <Link className="btn btn-primary m-1" to="#" role="button">
                  Link
                </Link>
                <Link className="btn btn-primary m-1" to="#" role="button">
                  Link
                </Link>
                <Link className="btn btn-primary m-1" href="#" role="button">
                  Link
                </Link>
                <Link className="btn btn-primary m-1" href="#" role="button">
                  Link
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="row p-1">
          <div className="col">
            <form action="filtros">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </form>
          </div>
          <div className="col">
            <form action="filtros">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </form>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-outline-primary">
              Descargar
            </button>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-xl-3 col-md-4 col-sm-6 col-xs-6 mb-3">
            <Link href="/Imagen">
              <img src={Img1} className="img-fluid" alt="..." />
            </Link>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-xs-6 mb-3">
            <Link href="/Imagen">
              <img src={Img1} className="img-fluid" alt="..." />
            </Link>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-xs-6 mb-3">
            <Link href="/Imagen">
              <img src={Img1} className="img-fluid" alt="..." />
            </Link>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6 col-xs-6 mb-3">
            <Link href="/Imagen">
              <img src={Img1} className="img-fluid" alt="..." />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
