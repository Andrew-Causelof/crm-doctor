import React from 'react';
import { useEffect, useState } from 'react';
import { useAppStore } from '../../store/store';
import { API_BASE_URL } from '../../config';
import Loader from '../common/Loader';

import PatientOperations from './PatientDetails/PatientOperations';
import PatientInfo from './PatientDetails/PatientInfo';
import PatientMedicalInfo from './PatientDetails/PatientMedicalInfo';
import PatientDocuments from './PatientDetails/PatientDocuments';
import PatientProgress from './PatientDetails/PatientProgress';

function PatientDetails() {
  const { setSelectedPatientId, selectedPatientId } = useAppStore();

  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/patient/${selectedPatientId}`
        );
        if (!response.ok) {
          throw new Error('Произошла ошибка при загрузке данных Пациента');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRules();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <form className="main">
      <div className="content">
        {!error ? (
          <>
            <div className="content_head">
              <div className="breadcrumbs">
                <a href="events.html" className="breadcrumbs_link">
                  Личный кабинет
                </a>
                <span className="breadcrumbs_sep">/</span>
                <a
                  className="breadcrumbs_link"
                  onClick={() => setSelectedPatientId(null)}
                >
                  Все пациенты
                </a>
                <span className="breadcrumbs_sep">/</span>
                <span className="breadcrumbs_text">
                  {[userData.lastName, userData.firstname, userData.thirdname]
                    .filter(Boolean)
                    .join(' ')}
                </span>
              </div>
              <div className="title title-page">
                {[userData.lastName, userData.firstname, userData.thirdname]
                  .filter(Boolean)
                  .join(' ')}
              </div>
            </div>
            <div className="content_body">
              <PatientOperations userData={userData} />
              <PatientInfo userData={userData} />
              <PatientMedicalInfo userData={userData} />
              <PatientDocuments userData={userData} />
            </div>
          </>
        ) : (
          <>
            <div className="content_head">
              <div className="breadcrumbs">
                <a href="events.html" className="breadcrumbs_link">
                  Личный кабинет
                </a>
                <span className="breadcrumbs_sep">/</span>
                <a
                  className="breadcrumbs_link"
                  onClick={() => setSelectedPatientId(null)}
                >
                  Все пациенты
                </a>
              </div>
              <div className="title title-page"></div>
            </div>
            <p style={{ color: 'red' }}>{error}</p>
          </>
        )}
      </div>

      <PatientProgress progress={userData.progress} />
    </form>
  );
}

export default PatientDetails;
