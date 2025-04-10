import React from 'react'
import PropTypes from 'prop-types'

function FileRecomendation({ title = '', url }) {
  return (
    <div className="text_unit">
      <span className="text_unit_icon"></span>
      <div className="text_unit_title">{title}</div>
      <div className="text_unit_actions actions">
        <span className="print_btn"></span>
        <a  href={url} className="pdf_btn" target="_blank"></a>
      </div>
    </div>
  )
}


FileRecomendation.propTypes = {
  title: PropTypes.string.isRequired, // Заголовок статьи
};

export default FileRecomendation
