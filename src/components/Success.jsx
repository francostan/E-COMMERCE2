import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Styles/Success.css'
import { useSelector } from 'react-redux'

const Success = () => {

    const user = useSelector((state) => state.user);
    console.log(user)

    React.useEffect(() => {
        axios.post(`/api/success`, { email: user.email })
            .then(res =>console.log(res))
            .catch(err => console.log(err))
    }, [])

  return (
    <div className='father' >
        <div className='container'>
            <div className='success'>
        <h1>Compra exitosa!</h1>
        <br/>
        <h3>En instantes recibira un mail con la confirmacion de la misma</h3>
        <Link to='/home'>
            <button className='button'>Volver al home</button>
        </Link>
        </div>
        </div>
    </div>
  )
}

export default Success