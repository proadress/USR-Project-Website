import React, { useState, useEffect } from 'react';

const CustomTOC = ({ headings }) => {
  const [showTOC, setShowTOC] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleIntersection = (entries) => { 
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
          console.log(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.9 });

    headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => {
      headings.forEach(heading => {
        const element = document.getElementById(heading.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setShowTOC(scrollPosition > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (headingId) => {
    setActiveItem(headingId);
  };

  return (
    <div className={`custom-toc ${showTOC ? 'visible' : ''}`}>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={activeItem === heading.id ? 'custom-active' : ''}>
            <a href={`#${heading.id}`} onClick={() => handleClick(heading.id)}>{heading.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomTOC;
