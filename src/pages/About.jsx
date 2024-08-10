import React from 'react';
  
const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About Us</h1>
        <p>
          Welcome to our blog! We are passionate about sharing knowledge and
          insights on a variety of topics. Our team of authors is dedicated to
          providing you with high-quality content that is both informative and
          engaging.
        </p>
        <h2>Our Authors</h2>
        <div className="authors">
          <div className="author">
            <img src="path_to_author_image" alt="Author 1" />
            <h3>Author 1</h3>
            <p>Short bio about Author 1.</p>
          </div>
          <div className="author">
            <img src="path_to_author_image" alt="Author 2" />
            <h3>Author 2</h3>
            <p>Short bio about Author 2.</p>
          </div>
          {/* Add more authors as needed */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
