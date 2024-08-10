import React from 'react';
import { Link } from 'react-router-dom';

const TagList = ({ tags }) => {
  return (
    <div className="tag-list">
      {tags.map(tag => (
        <Link key={tag} className="tag" to={`/tag/${tag}`}>
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default TagList;
