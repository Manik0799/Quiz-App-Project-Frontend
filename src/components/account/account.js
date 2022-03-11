import { Link } from 'react-router-dom';
import classes from './account.module.css';

export default function Account() {
    // define state, logic to authenticate user
    return (
        <div className={classes.account}>
            <span
                className='material-icons-outlined'
                title='UserAccount'>
                    account_circle   {/*show icon after user logged in */}
                </span> 
                {/* <Link to='/signup'>Signup</Link>
                <Link to='/login'>Login</Link> */}
        </div>
    );
}