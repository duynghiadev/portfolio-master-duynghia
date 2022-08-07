import { useEffect } from "react";
import "../Styles/ToTopStyles.css";
function ToTop() {
  const scroll = () => {
    const toTop = document.getElementById("test");
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div className="totop-btn-wrapper">
      <button className="totop-btn" id="test">
        <a href="#">
          <i className="fa-solid fa-arrow-turn-up"></i>
        </a>
      </button>
    </div>
  );
}
export default ToTop;
