import { Link } from "react-router-dom";

/* SFC to get this template */
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Test Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" /* style={{
                    color : "White",
                    backgroundColor: '#A46877',
                    borderRadius: '8px'

                }} */>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;