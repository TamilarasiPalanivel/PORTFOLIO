/**import Profileimg from '../assets/proimg.png';
import { AiOutlineTwitter,AiOutlineLinkedin } from "react-icons/ai";
export default function Hero()
{
    return <section className='flex px-5 py-32 bg-secondary justify-center'>
        <div className='w-1/2 flex flex-col'>

        <h1 className=' text-white text-6xl font-hero-font'>
           Hi, <br/>I'm <span className='text-black'>Tamilarasi Palanivel</span>
           <p className='text-2xl'>I'm a Full-stack developer</p>
        </h1>
        </div>
        <div className='flex h- '>
            <a href='#'><AiOutlineTwitter /></a>
            <a href='#'><AiOutlineLinkedin /></a>
        </div>
        <img className='w-1/3' src={Profileimg} />
    </section>

}**/
import Profileimg from '../assets/proimg.png';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            twitter: 'https://twitter.com/jvlcode',
            linkedin: 'https://in.linkedin.com/company/jvl-code',
            github: 'https://github.com/TamilarasiPalanivel'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Tamilarasi Palanivel</span> 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.twitter} className=' hover:text-white'><AiOutlineTwitter size={40} /></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className=' hover:text-white'><AiOutlineGithub size={40}/></a>

            </div>
       </div>
       <img className='md:w-1/3' src={Profileimg} />
    </section>
}
