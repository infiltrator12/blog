import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      <List component="nav">
        {categories.map((category) => (
          <ListItem button component={Link} to={`/category/${category.slug}`} key={category.slug}>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoryList;
