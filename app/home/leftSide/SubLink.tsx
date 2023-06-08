"use client";

import { useEffect, useCallback, useMemo } from "react";
import style from "../page.module.css";

import {
  getElementByIds,
  getOffSet,
  getArraySelector,
} from "../../utils/selector";

export default function SubLink() {
  const navHeight = 100;
  const areaIds = useMemo(() => ["introduce", "portfolio"], []);

  const onScroll = useCallback(() => {
    const scrollTop = window.scrollY + navHeight;
    const linkTaget = { className: ".link-item", tag: "link" };
    const linkElements = getArraySelector(linkTaget) as HTMLLIElement[];
    const areaElements = areaIds.map(getElementByIds);
    const offSetData = areaElements.map(getOffSet);

    offSetData.forEach((area) => {
      if (area.offsetTop <= scrollTop) {
        linkElements.forEach((el) => el.classList.remove(style.active));
        const getAllElement = document.querySelectorAll(`#link-${area.id}`);
        getAllElement.forEach((el) => el.classList.add(style.active));
      }
    });
  }, [areaIds]);

  const onScrollTarget = (e: React.SyntheticEvent) => {
    if (e.target instanceof HTMLLIElement) {
      const target = e.target.dataset.target as string;
      const { offsetTop } = getElementByIds(target);

      window.scrollTo({
        top: offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    const linkTaget = { className: ".link-item", tag: "link" };
    const linkElements = getArraySelector(linkTaget) as HTMLLIElement[];
    linkElements[0].classList.add(style.active);
  }, []);

  return (
    <div className={style.linkArea}>
      <ul>
        {areaIds.map((link) => (
          <li
            key={link}
            id={`link-${link}`}
            className="link-item"
            data-target={link}
            onClick={onScrollTarget}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
