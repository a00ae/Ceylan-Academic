import {RiStarFill } from "@remixicon/react";
import { gridData } from "../../layout/Main/section-1/gridData.ts";
import "./BentoGrid.scss";
import Button from "../Button/Button.tsx";

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
              <span className="rating">
                {" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--gap-xxs)",
                  }}>
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
                </div>
                <p>{card.stats}</p>
              </span>
              <div
                style={{
                  backgroundColor: "var(--border-color)",
                  width: "100%",
                  height: "2px",
                }}></div>
              <div className="available">
                <div className="available_left">
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "var(--color-primary-hover)",
                    }}></div>
                  <p>{card.title}</p>
                </div>

                <p className="available_right">{card.spots}</p>
              </div>
            </>
          )}

          {/* كارت التوفر */}
          {card.type === "availability" && (
            <>
              {/* <a href="#">
                <div className="first">
                  <span className="data-title" data-title={card.title}>{card.title}</span>
                </div>
                <div className="svg">
                  <RiArrowRightUpLine />
                </div>
              </a> */}
              <Button>{card.title}</Button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
