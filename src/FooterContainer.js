import { useEffect } from "react";
import feather from "feather-icons"
import './FooterContainer.css'



function FooterContainer() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="FooterWrapper">
      <div className="socialIcons">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i data-feather="instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i data-feather="facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i data-feather="twitter"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <i data-feather="youtube"></i>
        </a>
      </div>

      <div className="footerView">
        <ul>
          <li><a>Home</a></li>
          <li><a>Ueber uns</a></li>
          <li><a>Wettbewerbe</a></li>
          <li><a>Traningszeiten</a></li>
        </ul>
      </div>

      <div className="footerBottom">
        <p>Copyright &copy;2025; designed by David</p>
      </div>
    </div>
  );
}

export default FooterContainer;