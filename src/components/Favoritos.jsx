import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../store/user";
import axios from "axios";
import Grid from "../commons/Grid";
import {fakeData} from "../utils/fakeData";


const Favoritos = () => {
  const dispatch = useDispatch();

  //ahora traemos el usuario logueado con el hook useSelector
  const user = useSelector((state) => state.user);
  //ingresamos a la propiedad que posee el array de favoritos
  const favProducts = user.favorites;
  const products = useSelector((state) => state.products);

  console.log(user);
  console.log(products);

 /*  if (favProducts.length === 0) {
    axios
      .get(`/api/products/`)
      .then((res) => res.data)
      .then((products) => {
        if (products.length > 0) {
          products.map((product) => {
            dispatch(setFavorites(product));
          });
        }
      })
      .catch((err) => console.error(err));
  } */
  if (favProducts.length === 0){
  fakeData.map((product)=> {
    dispatch(setFavorites(product))
  })}
  console.log(favProducts);
  return (
    <div>
      <h1>Mis favoritos</h1>

      {favProducts !== [] ? (
        <div className="">
            <div >
              <Grid listVinos={favProducts}/>
            </div>
        </div>
      ) : (
        <div>
          <h4>No tiene favoritos por ahora</h4>
        </div>
      )}
    </div>
  );
};

export default Favoritos;