
const Nav = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul>
             <li><a>Home</a></li>
             <li><a href = "/pod">Picture of the Day</a></li>
             {/* <Link to={user.id}>{user.name}</Link> */}
             <li><a href="mars" >Mars Rover Photos </a></li>
             <li><a >About</a></li>
            </ul>
    </nav>
  )
}
export default Nav;
