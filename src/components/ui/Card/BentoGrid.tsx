import { RiArrowRightUpLine } from '@remixicon/react';
import { gridData } from '../../layout/Main/section-1/gridData.ts';
import './BentoGrid.scss';
import Button from '../Button/Button.tsx';

export function BentoGrid() {
  return (
    <div className="bento-container">
      {gridData.map((card) => (
        <div key={card.id} className={`grid-item item-${card.type}`}>
          
          {/* كارت المقدمة */}
          {card.type === 'intro' && (
            <>
              <h2>{card.title}</h2>
              <p>{card.tagline}</p>
              <button className="btn-play">{card.footer}</button>
            </>
          )}

          {/* كارت الخدمات */}
          {card.type === 'services' && (
            <>
              <ul className="tags-list">
                {card.tags?.map((tag, index) => <li key={index}>{tag} -</li>)}
              </ul>
              <span className="footer-text">{card.footer}</span>
            </>
          )}

          {/* كارت التقييم والإحصائيات */}
          {card.type === 'meta' && (
            <>
              <span className="rating">{card.rating}</span>
              <p>{card.stats}</p>
            </>
          )}

          {/* كارت التوفر */}
          {card.type === 'availability' && (
            <>
            <a href="#">
              <span>availability</span>
              <RiArrowRightUpLine/>

            </a>
            </>
          )}
          

        </div>
      ))}
    </div>
  );
}