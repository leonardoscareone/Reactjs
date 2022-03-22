import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

const CartWidget = () => {
    return (
        <div>
        <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"25px"}} />
        <p>4</p>
        </div>
    )
}

export default CartWidget