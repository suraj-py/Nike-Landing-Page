import { hamburger } from "../assets/icons";
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'

const Nav = () => {
  return (
      <header className='padding-x py-8 absolute z-10 w-full'>
          <nav className='flex justify-between items-center max-container'>
              <a href="/">
                  <img
                    src={headerLogo}
                    alt="Logo"
                    width={130}
                   height={29}
                  />
              </a>
              <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {
                  // dyanamically adding links from external file 
                  navLinks.map((item) => {
                          return (
                            <li key={item.label}>
                              <a href="{item.href}"
                                className='fonts-montserrat leading-normal text-lg text-slate-gray' 
                              ></a>
                              {item.label}
                                    </li>
                                  )
                        })
                }
            </ul>
            <div className='hidden max-lg:block cursor-pointer'>
                <img src={hamburger} alt='hamburger icon' width={25} height={25} />
            </div>
        
          </nav>
    </header>
  )
}

export default Nav