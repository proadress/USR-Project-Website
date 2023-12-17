import React, { useState, useEffect } from 'react';

const CustomTOC = ({ headings }) => {
  const [showTOC, setShowTOC] = useState(false);
  const [activeItem, setActiveItem] = useState(null); 
  const [flag, setFlag] = useState(false); 
  
  /*刪掉原本TOC所佔的空間*/ 
  useEffect(() => {
    const deleteClass = () => {
      const element = document.querySelector('.nextra-toc');
      // 對找到的第一個元素刪除 class
      if (element) {
        element.classList.remove('nx-w-64');
        setFlag(true);
        console.log(element);
      } else {
        console.log('not found');
      }
    };
    if(!flag){
        deleteClass();
    }
  
    return () => {
    };
  });
  
  /* 根據現在瀏覽的位置變動顯示的標題 */
  useEffect(() => {
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
          const headingId = entry.target.querySelector('h2 a').id;
          // 使用 querySelector 選擇標題內的 a 元素，然後獲取其 id
          if (headingId && entry.isIntersecting) {
            setActiveItem(headingId);
          }
        });
      };
      

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.6 });

    headings.forEach(heading => {
        const element = document.getElementById(heading.id);
        if (element) {
          const parentElement = element.parentElement.parentElement;
          if (parentElement) {
            observer.observe(parentElement);
            // console.log(parentElement);
          }
        }
      });
    
    return () => {
          headings.forEach(heading => {
            const element = document.getElementById(heading.id);
            if (element) {
              const parentElement = element.parentElement.parentElement;
              if (parentElement) {
                observer.unobserve(parentElement);
              }
            }
          });
        }
  }, [headings]);

  /* 在某位置以下後才顯示按鈕 */
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

  /* 點擊跳轉主題時，變動顯示的標題 */
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
