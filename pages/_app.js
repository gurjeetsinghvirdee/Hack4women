import '../styles/globals.css'
import Link from 'next/link'
import Sawo from "sawo"

function Marketplace({ Component, pageProps }) {
  const activeStyles = {
    color:"white"
  }

  let active;
  const handleClick = (str)=>{
    active = str;
  }
  return (
    <div>
      <nav>
         <ul>
            <li className="logo">SHENFT MARKETPLACE</li>
            <li className="btn"><span className="fas fa-bars"></span></li>
            <div className="items">
              <li>
            <Link href="/">
            <a className="" style = {(active == 'home') ? activeStyles : {}} onClick={handleClick('home')}>
              Home
            </a>
          </Link>
          </li>
          <li>
          <Link href="/create-item">
            <a className="" style = {(active == 'digital_asset') ? activeStyles : {}} onClick={handleClick('digital_asset')}>
              Add To Marketplace
            </a>
          </Link>
          </li>
          <li>
          <Link href="/my-assets">
            <a className="" style = {(active == 'my') ? activeStyles : {}} onClick={handleClick('my')}>
              My Digital Assets
            </a>
          </Link>
          </li>
          <li>
          <Link href="/creator-dashboard" style = {(active == 'creator') ? activeStyles : {}} onClick={handleClick('creator')}>
            <a className="">
              Creator Dashboard
            </a>
          </Link>
          </li>
          <li>
          <Link href="https://mi-kio.github.io/cyberbully/cyberbullying.html" target="_blank">
            <a className="" style = {{cursor:"pointer"}}>
              EmpowerHer
            </a>
          </Link>
          </li>
          {/* <li>
          <Link href="https://radiant-mesa-29894.herokuapp.com/" target="_blank">
            <a className="" style = {{cursor:"pointer"}}>
              Plantation Area
            </a>
          </Link>
          </li> */}
          {/* <li>
          <Link href="/login">
            <a className="" style = {{cursor:"pointer"}}>
              Login
            </a>
          </Link>
          </li> */}
         
            </div>
         </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace
