import { makeStyles } from '@material-ui/core/styles'
import Background from '../assets/backgroundHome.jpg';


export default makeStyles((theme) => ({
    body: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));