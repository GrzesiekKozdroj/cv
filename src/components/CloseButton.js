import { Link } from 'react-router-dom'
import pack from './vars'
const { buttonColor } = pack
const CloseButton = () => {
    return (
        <Link to="/cv">
            <a class={"btn-floating btn-large right waves-effect waves-orange waves-circle"+buttonColor}>
                <i class="material-icons">close</i>
            </a>
        </Link>
    )
}
export default CloseButton