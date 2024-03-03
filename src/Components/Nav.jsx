import {headerLogo} from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
const  Nav = () => {
  const toggle=()=>{
    setMenu(!menu);
  };
  return (
       <header className='padding-x py-8 absolute z-fill 10 w-full'>
            <nav className='flex justify-between items-center max-container gap-[15em]'>
            <a href=''>
             <img src={headerLogo}
                alt="logo"
                width={130}
                height={10}
                />
             </a> 
             <ul className='flex-1 flex justify center 
              gap-16 max-lg:hidden'>
                 {navLinks.map((item)=>(
                   <li key={item.label}>
                     <a className='font-montserrat 
                     leading-normal text-lg 
                     text-slate-gray' href={item.href}
                     >{item.label}</a>
                   </li>
                 )  
              )} 
              </ul> 
              <div className='hidden max-lg:block'>
              
                     <img className='cursor-pointer'   src={hamburger}
                     width={25}
                     height={25} />
              </div>
             </nav>  
       </header>
  )
      
    
  
}

export default Nav



