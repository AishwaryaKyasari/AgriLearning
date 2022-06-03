import React from "react";
import PropTypes from "prop-types";
import './YoutubeEmbed1.css'

const YoutubeEmbed1 = ({ embedId }) => (
  <div className="video-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/WJaebuO95L4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
);

YoutubeEmbed1.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed1;
