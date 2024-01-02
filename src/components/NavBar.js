import './NavBar.css';
import banner from '../Assets/banner.jpg'

function NavBar() {
  return (
    <div className='container'>
        <div className='Nav'>
            <h1>React E-Commerce</h1>
            <p>Shop</p>
            <p>Products</p>
            <p>Blog</p>
            <p>Testimonial</p>
        </div>
        <div className='Banner'>
          <img className='BannerImage' src={banner}></img>
        </div>
    </div>
  )
}

export default NavBar;