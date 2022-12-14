
import { NavLink } from 'react-router-dom'
import FormatPrice from '../Helpers/FormatPrice'

const Product = ({id, name, image, price, category}) => {
  return (
    <NavLink to={`/SingleProduct/${id}`}>
        <div className="card">
            <figure>
                <img src={image} alt={name} />
                <figcaption className='caption'>{category}</figcaption>
            </figure>
            <div className="card-data">
                <div className="card-data-flex">
                    <h3>{name}</h3>
                    <p className="card-data--price">{<FormatPrice price={price} />}</p>
                </div>
            </div>
        </div>  
    </NavLink>
  )
}

export default Product