import Img1 from "../../public/imagenes/imagen1.jpg";
import Img2 from "../../public/imagenes/imagen2.jpg";
import { Link } from "react-router-dom";

function Autor() {
  return (
    <>
      <div className="container">
        <img src={Img1} alt="" className="img-fondo2" />
        <div className="row px-0">
          <img src={Img1} alt="" className="img-fondo" />
          <div className="row box-a">
            <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-xs-2 col-4">
              <Link href="/Autor">
                <img src={Img2} alt="" className="img-user" />
              </Link>
            </div>
            <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10 col-xs-10 col-8">
              <h3>Nombre Apellido</h3>
              <p>Detalles</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Licencia - </p>
            <p>Detalles</p>
          </div>
        </div>
        <div className="row">
          <div className="col pb-2">
            <div>
              <form action="tag">
                <Link className="btn btn-primary m-1" href="#" role="button">
                  Link
                </Link>
                <Link className="btn btn-primary m-1" href="#" role="button">
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

export default Autor;
