import avatar from '../assets/images/avatar.jpg'

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
                <p>Hardware & Firmware developper<br/>with open work permit</p>
            </header>

            <nav id="nav">
                <ul>
                    <li><a href="#one" className="active">About</a></li>
                    <li><a href="#two">Things I Can Do</a></li>
                    <li><a href="#three">A Few Accomplishments</a></li>
                    <li><a href="#four">Contact</a></li>
                </ul>
            </nav>

            <footer>
                <ul className="icons">
                </ul>
            </footer>
        </section>
    )    
}
