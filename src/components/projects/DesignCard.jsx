import React from 'react';
import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const styles = {
  cardStyle: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#333',
    color: '#fff',
  },
  cardTitleStyle: {
    fontSize: 20,
    fontWeight: 700,
  },
  cardTextStyle: {
    textAlign: 'left',
    fontSize: 14,
  },
  videoStyle: {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
  },
  footerStyle: {
    backgroundColor: '#444',
  },
  linkStyle: {
    color: '#1e90ff',
  },
  socialMediaPostStyle: {
    height: 'auto',
    objectFit: 'cover',
  },
  socialMediaStoryStyle: {
    height: 'auto',
    objectFit: 'cover',
  },
};

const DesignCard = ({ project, type }) => {
  let imageStyle;
  if (type === 'socialMediaPost') {
    imageStyle = styles.socialMediaPostStyle;
  } else if (type === 'socialMediaStory') {
    imageStyle = styles.socialMediaStoryStyle;
  } else {
    imageStyle = styles.imageStyle;
  }

  return (
    <Col>
      <Card style={styles.cardStyle}>
        {project.mediaType === 'image' ? (
          <Card.Img variant="top" src={project.mediaUrl} style={imageStyle} />
        ) : (
          <video controls style={styles.videoStyle}>
            <source src={project.mediaUrl} type="video/mp4" />
            <track kind="captions" srcLang="en" label="English" />
            Your browser does not support videos.
          </video>
        )}
        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle}>
            <ReactMarkdown>{project.bodyText}</ReactMarkdown>
          </Card.Text>
        </Card.Body>
        {project.links && (
          <Card.Footer style={styles.footerStyle}>
            {project.links.map((link) => (
              <Card.Link key={link.href} href={link.href} target="_blank" style={styles.linkStyle}>
                {link.text}
              </Card.Link>
            ))}
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
};

DesignCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    mediaUrl: PropTypes.string.isRequired,
    mediaType: PropTypes.oneOf(['image', 'video']).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  type: PropTypes.string,
};

DesignCard.defaultProps = {
  type: '',
};

export default DesignCard;
