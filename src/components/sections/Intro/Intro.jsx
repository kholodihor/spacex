import './Intro.scss';

const Intro = ({ background, title, subtitle }) => {
  return (
    <section
      className="Intro"
      style={{
        background: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="Intro__title">
        <h1 data-aos="fade-up" data-aos-duration="3000" data-aos-once="true">
          {title}
        </h1>
        <h3 data-aos="fade-up" data-aos-duration="3000" data-aos-once="true">
          {subtitle}
        </h3>
      </div>
    </section>
  );
};

export default Intro;
