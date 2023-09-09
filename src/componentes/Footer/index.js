import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="rodape">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="78"
        height="68"
        viewBox="0 0 78 68"
        fill="none"
        className="triangle_up"
      >
        <path
          d="M1.76091 66.5L39 2L76.2391 66.5H1.76091Z"
          stroke="#95FFD4"
          strokeWidth="2"
        />
      </svg>

      <section>
        <div className="social_media">
          <a href="facebook.com" target="_blank">
            <img src="/assets/fb.png" alt="" />
          </a>

          <a href="twitter.com" target="_blank">
            <img src="/assets/tw.png" alt="" />
          </a>

          <a href="instagram.com" target="_blank">
            <img src="/assets/ig.png" alt="" />
          </a>
        </div>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="94"
        height="94"
        viewBox="0 0 94 94"
        fill="none"
        className="triangle_left"
      >
        <path
          d="M2.81174 25.642L92.319 1.65864L68.3356 91.1659L2.81174 25.642Z"
          stroke="#95FFD4"
          strokeWidth="2"
        />
      </svg>

      <section>
        <img src="/assets/logo.png" alt="" />
      </section>

      <div className="circle"></div>

      <section className="by">
        <p>Desenvolvido por Diana Rose.</p>
      </section>

      <div className="circle_color"></div>
    </footer>
  );
};
