import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import DesignCard from './projects/DesignCard';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  sectionHeader: {
    color: '#fff',
    marginTop: 20,
    marginBottom: 20,
  },
};

const Design = (props) => {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.design, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => err);
  }, []);

  const renderSection = (title, items, type) => {
    if (!items || items.length === 0) {
      return null;
    }

    return (
      <>
        <h2 style={styles.sectionHeader}>{title}</h2>
        <Container style={styles.containerStyle}>
          <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {items.map((project) => (
              <Fade key={project.title}>
                <DesignCard project={project} type={type} />
              </Fade>
            ))}
          </Row>
        </Container>
      </>
    );
  };

  return (
    <>
      <Header title={header} />
      {data ? (
        <div className="section-content-container">
          {renderSection('Videos', data.videos)}
          {renderSection('Social Media Posts', data.socialMediaPosts, 'socialMediaPost')}
          {renderSection('Social Media Stories', data.socialMediaStories, 'socialMediaStory')}
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
};

Design.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Design;
