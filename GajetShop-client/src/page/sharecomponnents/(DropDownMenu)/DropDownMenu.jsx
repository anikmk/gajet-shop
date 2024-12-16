import { Link } from 'react-router';
import useAuth from '../../(hook)/useAuth';
import userLogo from '../../../../public/user.png'
const DropDownMenu = () => {
    const {user,logOut} = useAuth();
    const userImage = user?.photoURL || userLogo;
    
    const handleLogout = async() => {
       try{
        await logOut();
       }
       catch(err){console.log(err.message)}
        
    }
    return(
<ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary><img className='w-10' src={userImage} alt="" /></summary>
          <ul className="p-2">
            <li><Link to={"/dashboard/overview"}>Dashboard</Link></li>
            <li><a onClick={handleLogout}>Log Out</a></li>
          </ul>
        </details>
      </li>
    </ul>
    )
}
export default DropDownMenu;