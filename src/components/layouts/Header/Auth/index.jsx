import {Link, useLocation} from 'react-router-dom';
import logo from '@assets/images/icon/logo.svg';
import styles from './index.module.scss';
import Button from '@common/Button/index.jsx';

const AuthHeader = () =>
  {
  const location = useLocation().pathname.split('/')[1];

  const webName = 'Simple Task';
  console.log(webName);
  return (<header className={ styles.header }>
    <Link to='/' className={ styles.logo }>
      <img src={ logo } alt={ webName }/>
      <span>{ webName }</span>
    </Link>
    <div className={ styles.button }>
      <Button to='/login' active={ location === 'login' }>log in</Button>
      <Button to='/signup' active={ location === 'signup' }>sign up</Button>
    </div>
  </header>);
  };

export default AuthHeader;
