import React from 'react';
import Button from '../../elements/Button/Button';
import Title from '../../elements/Title/Title';
import './HomeSection.scss';

function HomeSection({ section }) {
  return (
    <section
      className="HomeSection"
      data-testid="section"
      style={{
        background: `url(${section.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="HomeSection__info">
        <Title title={section.title} subtitle={section.subtitle} />
        <div
          className="button"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-once="true"
        >
          <Button title={section.button} />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
