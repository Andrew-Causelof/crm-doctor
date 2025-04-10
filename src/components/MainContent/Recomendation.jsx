import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../config';
import Breadcrumbs from '../common/Breadcrumbs';
import AsideInfo from '../common/AsideInfo';
import FileRecomendation from '../common/FileRecomendation';
import VideoRecomendation from '../common/VideoRecomendation';

export default function Recomendation() {
  const [recomendation, setRecomendation] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/recomendation`);
        if (!response.ok) {
          throw new Error('Ошибка загрузки правил');
        }
        const data = await response.json();
        setRecomendation(data.recomendation);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRules();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <main className="main">
      <div className="content">
        <div className="content_head">
          <Breadcrumbs title={recomendation.title} />
        </div>
        <div className="content_body">
          {recomendation.sections.map((section, sectionIndex) => (
            <article className="article" key={sectionIndex}>
              <div className="article_head">
                <div className="title title-article">{section.title}</div>
              </div>
              <div className="article_body">
                {section.type === 'video' && (
                  <div className="video_items">
                    {section.items.map((video, videoIndex) => (
                      <VideoRecomendation
                        key={videoIndex}
                        title={video.title}
                        img={video.img}
                        url={video.url}
                      />
                    ))}
                  </div>
                )}
                {section.type === 'file' && (
                  <div className="text_items">
                    {section.items.map((file, fileIndex) => (
                      <FileRecomendation
                        key={fileIndex}
                        title={file.title}
                        url={file.url}
                      />
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <AsideInfo title="Информация" />
    </main>
  );
}
