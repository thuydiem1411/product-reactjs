import { Link } from "react-router-dom"
import Logo from "../images/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="footer logo" />
                </Link>
                <p>
                Lorem ipsum dolor sit amet,consectetur adipisciing elit.Qui tenetur harum pariatur!
                Iusto animi cupiditabe,provident dolore poro eum obcaecati
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer nooperer'><FaLinkedinIn/></a>
                    <a href="https://www.facebook.com/Nguyenthithuydiem1411/" target="_blank" rel='noreferrer nooperer'><FaFacebook/></a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer nooperer'><AiFillTwitterCircle/></a>
                    <a href="https://instagram.com/" target="_blank" rel='noreferrer nooperer'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/new">New</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/product">Product</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">"Support"</Link>
            </article>
        </div>
        <div className="footer_coppyright">
            <small> 2023 EGATOR TUTORIALS &coppy; All rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
