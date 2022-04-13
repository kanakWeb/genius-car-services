import  './Regiester.css'
import {useNavigate} from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init'
const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate=useNavigate()

    const navigatelogin=()=>{
        navigate('/login')
    }

    if(user){
        navigate('/home')
    }
    const handleRegiester=(event)=>{
        event.preventDefault()
        const name=event.target.name.value
        const email=event.target.email.value
        const password=event.target.password.value
        createUserWithEmailAndPassword(email,password)
    }

    return (
        <div className="regiester-from">
        <h2 className='text-center p-2'>Please Regiester</h2>
        <form onSubmit={handleRegiester}>
            <input type="text"  name='name' id=''  placeholder='your name' />
            <input name='email' id=''type="email" placeholder='your email' />
            <input name='password' type="password" id='' placeholder='your password' />
            <input className='btn btn-primary' id='' type="submit" value="Regiester" />
            <p>
          New to genius car?
          <Link to='/login' onClick={navigatelogin} className="text-primary text-decoration-none">
            already have an account
          </Link>
        </p>
        </form>
      </div>
    );
};

export default Register;