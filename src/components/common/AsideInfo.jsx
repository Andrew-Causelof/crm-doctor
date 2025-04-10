import PropTypes from 'prop-types';

export default function AsideInfo({
    title = '',

}) {
    return (
        <aside className="aside aside-right">
            <div className="widget">
                <div className="widget_title">{title}</div>
                <div className="widget_actions widget_actions-col">
                    <button className="btn btn-main btn-fw widget_print">
                        Распечатать <span className="widget_print"></span>
                    </button>
                    <a download="" href="info.html" className="btn btn-main btn-fw">Скачать в формате PDF</a>
                </div>
            </div>
        </aside>
    )
}

AsideInfo.propTypes = {
    title: PropTypes.string,
}