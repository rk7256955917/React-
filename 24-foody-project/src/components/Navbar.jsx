import Categories from "./Categories"
const Navbar = () => {
  return (
  <div className="navbar">
  <div className="logo">
    <img src="../src/assets/image/Foody Zone.png" alt="" />
  </div>

  <div className="search">
    <input type="text" placeholder="Search Food" />
  </div>
</div>

  )
}

export default Navbar
