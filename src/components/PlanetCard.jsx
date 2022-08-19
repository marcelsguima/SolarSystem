import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <section className="card">
        <div data-testid="planet-card">
          <p data-testid="planet-name">
            {planetName}
          </p>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </section>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
