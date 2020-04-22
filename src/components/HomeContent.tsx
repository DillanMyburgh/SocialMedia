import React from 'react';
import './Main.css';

interface ContainerProps { }

const HomeContent: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Home</strong>
    </div>
  );
};

export default HomeContent;
