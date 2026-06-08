import { RiArrowRightUpLine, RiStarFill } from "@remixicon/react";
import { gridData } from "../../layout/Main/section-1/gridData.ts";
import "./BentoGrid.scss";

export function BentoGrid() {
  return (
    <div className="bento-container">
      {gridData.map((card) => (
        <div key={card.id} className={`grid-item item-${card.type}`}>
          {/* كارت المقدمة */}
          {card.type === "intro" && (
            <>
              <h2>{card.title}</h2>
              <p>{card.tagline}</p>
              <button className="btn-play">{card.footer}</button>
            </>
          )}

          {/* كارت الخدمات */}
          {card.type === "services" && (
            <>
              <ul className="tags-list">
                {card.tags?.map((tag, index) => (
                  <li key={index}>
                    {tag} <span>—</span>
                  </li>
                ))}
              </ul>
              <span className="footer-text">{card.footer}</span>
            </>
          )}

          {/* كارت التقييم والإحصائيات */}
          {card.type === "meta" && (
            <>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--gap-xxs)",
                }}
                className="rating">
                {" "}
                <div>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <RiStarFill
                      color="var(--btn-color)"
                      className="star"
                      key={i}
                    />
                  ))}
                </div>
                <span
                  style={{
                    color: "var(--heading-color)",
                    fontSize: "calc(var(--font-size-md) - 2px)",
                    fontWeight: "var(--font-weight-main)",
                  }}>
                  {" "}
                  {card.rating}
                </span>
              </span>
              <p>{card.stats}</p>
            </>
          )}

          {/* كارت التوفر */}
          {card.type === "availability" && (
            <>
              <a href="#">
                <div className="farst">
                  <span data-title={card.title}>{card.title}</span>
                </div>
                <div className="svg">
                  <RiArrowRightUpLine />
                </div>
              </a>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
