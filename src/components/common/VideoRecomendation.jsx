import React, { useState } from 'react';
import { REACT_APP_ROOT } from '../../config.js';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement(`#${REACT_APP_ROOT}`);

export default function VideoRecomendation({ img, url, title }) {
  function getEmbedUrl(url) {
    if (url.includes('youtube.com/watch')) {
      const videoId = new URLSearchParams(new URL(url).search).get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('rutube.ru/video/')) {
      const videoId = url.split('/').pop();
      return `https://rutube.ru/play/embed/${videoId}/`;
    }
    return url; // если это уже embed-ссылка
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="video_item">
        <div className="video_item_img">
          <img src={img} alt={title} />
          <button
            className="video_item_play"
            onClick={() => setModalIsOpen(true)}
          ></button>
        </div>
        <div className="video_item_title">{title}</div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Видео рекомендация"
        className="video-modal"
        overlayClassName="video-modal-overlay"
      >
        <button
          className="video-modal-close"
          onClick={() => setModalIsOpen(false)}
        >
          X
        </button>
        <iframe
          width="100%"
          height="500"
          src={getEmbedUrl(url)}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
    </>
  );
}

VideoRecomendation.propTypes = {
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
