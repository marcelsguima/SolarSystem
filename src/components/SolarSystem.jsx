import React from 'react';
import Planets from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map(({ name, image }) => (
          <PlanetCard key={ name } planetName={ name } planetImage={ image } />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
