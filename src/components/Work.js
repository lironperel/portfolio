import React, { useState, useCallback } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from '@material-ui/core';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

function Work(props) {
  const { gitHubUrl, title } = props;

  const photos = props.images.map(image => {
    return { src: image, height: 9, width: 16 };
  });

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: 0 }}>{title + ' '}</h3>
        <Link target='_blank' href={gitHubUrl}>
          <GitHubIcon style={{ color: 'black' }} fontSize='large' />
        </Link>
        <div>{props.techs}</div>
      </div>

      <Gallery photos={photos} direction={'column'} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      {props.children}
    </div>
  );
}

export default Work;
