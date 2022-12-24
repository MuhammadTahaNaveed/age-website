import React, { useEffect, useState, useCallback } from 'react';
import { notification } from 'antd';
import PropTypes from 'prop-types';
import * as styles from './styles/ProjectDtail.module.scss';

const ProjectDetail = (props) => {
  const [project] = useState({ ...props?.project });
  const [mode] = useState({ ...props?.mod });

  useEffect(() => { }, []);

  const card = useCallback(() => {
    return <div></div>;
  }, [project]);

  const openNotification = () => {
    notification.open({
      message: 'To be available soon',      
      placement: 'top'
    });
  };

  const projectDateMaker = (dateString) => {
    const stringArr = dateString.split('T');
    const d = new Date(stringArr[0]);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return String(d.toLocaleDateString('en-US', options));
  };

  const table = useCallback(() => {
    if (Object.keys(project).length === 0) return <></>;
    return (
      <div className={styles.root}>
        <div>
          <p className={styles.update}>
            update on {projectDateMaker(project.updatedAt)}
          </p>
          <p className={styles.title}>{project.title}</p>
          <p className={styles.desc}>
            {(project.shortDescription) == undefined ? "No description" : project.shortDescription}
          </p>
        </div>
        {project.public ?
          <a className={styles.link} href={project.url} target="_blank">
            View Details
          </a> :
          <a className={styles.link} onClick={(e) => {
            e.preventDefault();
            openNotification();
          }}>
            To be Available...
          </a>}
      </div>
    );
  }, [project]);

  return <>{mode === 'card' ? card() : table()}</>;
};

ProjectDetail.propTypes = {
  project: PropTypes.shape({
    number: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    shortDescription: PropTypes.string,
    close: PropTypes.bool,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    public: PropTypes.bool,
  }),
  mode: PropTypes.string,
};

export default ProjectDetail;