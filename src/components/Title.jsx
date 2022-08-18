import React from 'react';
import PropTypes from 'prop-types';

class Tilte extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div>
        <h2>{headline}</h2>
      </div>
    );
  }
}

Tilte.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Tilte;
