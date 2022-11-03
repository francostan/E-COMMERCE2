import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../store/user";
import axios from "axios";
import CardFav from "../components/CardFav";


const Favoritos = () => {
  const dispatch = useDispatch();

  //ahora traemos el usuario logueado con el hook useSelector
  const user = useSelector((state) => state.user);
  //ingresamos a la propiedad que posee el array de favoritos
  const favProducts = user.favorites;

  console.log(user);

  if (favProducts.length === 0) {
    axios
      .get(`/api/products/¿? que ruta trae los productos favoritos, por id de usuario?`)
      .then((res) => res.data)
      .then((products) => {
        if (products.length > 0) {
          products.map((product) => {
            dispatch(setFavorites(product));
          });
        }
      })
      .catch((err) => console.error(err));
  }
  return (
    <section>
      <h1>Mis favoritos</h1>

      {favMovies !== [] ? (
        <div className="">
          {favMovies.map((movie) => (
            <div
              className="card"
              style={{ width: "30rem", display: "flex" }}
              id={movie.id}
            >
              <CardFavMov data={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h4>No tiene favoritos por ahora</h4>
        </div>
      )}
    </section>
  );
};

export default Favoritos;