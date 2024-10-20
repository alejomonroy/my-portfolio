import './Header.css'
import avatar from '../assets/images/avatar.jpg'
import linkedin_ico from '../assets/icons/linkedin.svg'
import github_ico from '../assets/icons/github.svg'
import email_ico from '../assets/icons/email.svg'

const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/alejandro-monroy-dev/",
    github: "https://github.com/alejomonroy",
    email: "alejo_un@hotmail.com",
};

export function Header(){
    return (
        <section id="header">
            <header>
                <span className="image avatar"><img src={avatar} alt="" /></span>
                <h1 id="logo"><a href="#">Ing. Luis Alejandro Monroy</a></h1>
            </header>

            <nav id="nav">
                <ul>
                    <li><a href="#one" className="active">About</a></li>
                    <li><a href="#two">Skills</a></li>
                    <li><a href="#three">Experience</a></li>
                    <li><a href="#four">Projets</a></li>
                    <li><a href="#four">Education</a></li>
                    <li><a href="#four">Contact</a></li>
                </ul>
            </nav>

            <footer>
                <ul className="icons">
                    <li><a href={SOCIAL_LINKS.linkedin}><img src={linkedin_ico} alt=""/><span className="label">Instagram</span></a></li>
                    <li><a href={SOCIAL_LINKS.github}><img src={github_ico} alt=""/><span className="label">Github</span></a></li>
                    <li><a href={SOCIAL_LINKS.email}><img src={email_ico} alt=""/><span className="label">Email</span></a></li>
                </ul>
            </footer>
        </section>
    )    
}
