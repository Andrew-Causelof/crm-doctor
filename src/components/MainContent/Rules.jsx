import React from 'react';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../common/Breadcrumbs';
import AsideInfo from '../common/AsideInfo';
import { API_BASE_URL } from '../../config';

export default function Rules() {
  const [rules, setRules] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/rules`);
        if (!response.ok) {
          throw new Error('Ошибка загрузки правил');
        }
        const data = await response.json();
        setRules(data.rules);
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
          <Breadcrumbs title={rules.title} />
        </div>
        <div className="content_body">
          {rules.sections.map((section, sectionIndex) => (
            <article className="article" key={sectionIndex}>
              <div className="article_head">
                <div className="title title-article">{section.title}</div>
              </div>
              <div className="article_body">
                <div className="text_items">
                  {section.items.map((item, itemIndex) => (
                    <div className="text_item" key={itemIndex}>
                      <span className="text_item_count">{item.number}</span>
                      <div className="text_item_content">
                        <p>
                          <b>{item.text}</b>
                          {item.notice ? '\u00A0' + item.notice : ''}
                        </p>
                        <div
                          className="rules_item_description"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <AsideInfo title="Информация" />
    </main>
  );
}
