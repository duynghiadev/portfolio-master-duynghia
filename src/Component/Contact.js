import "../Styles/ContactStyles.css";
import { ContactData } from "../data/ContactData";
function Contact() {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-heading">My Contact Info</h1>
      <div className="contact-wrapper-detail">
        <div className="contact-detail">
          <div className="contact-email">
            <i className="fa-regular fa-envelope"></i>
            <p>{ContactData[0].data}</p>
          </div>
          <div className="contact-github">
            <i className="fa-brands fa-github"></i>
            <a href={ContactData[1].data}>{ContactData[1].data} </a>
          </div>
          <div className="contact-phone-number">
            <i className="fa-solid fa-phone"></i>
            <p>{ContactData[2].data}</p>
          </div>
          <div className="contact-linkedin">
            <i className="fa-brands fa-linkedin"></i>
            <a href={ContactData[3].data}>{ContactData[3].data} </a>
          </div>
        </div>
        <div>
          <img
            alt=""
            src="https://i.pinimg.com/originals/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.png"
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
export default Contact;
