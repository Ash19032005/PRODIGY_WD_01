import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"
const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footerLogo" width={150} height={46}/>
          </a>
          <p className="mt-6 text-white-400 font-montserrat max-sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find your perfect size
            In store. Get rewards
          </p>
          <div className="flex gap-5 mt-6">
          {socialMedia.map((icon)=>(
            <div className="flex justify-center items-center  rounded-full w-12 h-12 bg-white">
                <img  src={icon.src} className="cursor-pointer"
                 alt={icon.alt}
                 width={24}
                 height={24}/>
            </div>
          ))}
          </div>
          <div className="flex flex-1 mt-4 justify-between lg:gap-10 flex-wrap">
              {footerLinks.map((section)=>(
                   <div className="py-2" key={section}>
                    <h4 className="text-white font-bold  font-montserrat text-2xl">{section.title}</h4>
                      <ul className="py-3 flex-col">
                        {section.links.map(((link)=>(
                          <li className="py-1 font-palanquin" key={link.name}>
                            <a className="text-white cursor-pointer hover:text-slate-gray" href={link.link}>{link.name}
                            </a></li>
                        )
                        ))}
                      </ul>
                   </div>
              ))}
          </div>
          
        </div>
        
      </div>
      <div className="flex justify-between mt-16 max-sm:flex-col max-sm:items-center text-white-400">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign}
            alt="copy-right"
            width={20}
            height={20}
            className="rounded-full"/>
            <p>Copyright. All rights reserved</p>
        </div>
        <p className="font-montserrat">Terms and conditions</p>
      </div>
    </footer>
  )
}
export default Footer