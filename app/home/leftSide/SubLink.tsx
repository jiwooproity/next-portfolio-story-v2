"use client";

import { useCallback, useEffect, useMemo } from "react";
import style from "../page.module.css";

import {
  getElementByIds,
  getOffSet,
  getArraySelector,
} from "../../utils/selector";

export default function SubLink() {
  const areaIds = useMemo(() => ["introduce", "portfolio"], []);

  const onScroll = useCallback(() => {
    const scrollTop = window.scrollY + 100;

    const linkTaget = { className: ".link-item", tag: "link" };
    const linkElements = getArraySelector(linkTaget) as HTMLLinkElement[];

    const areaElements = areaIds.map(getElementByIds) as HTMLElement;

    const offSetData = areaElements.map(getOffSet);

    offSetData.forEach((area) => {
      if (area.offsetTop <= scrollTop) {
        linkElements.forEach((el) => el.classList.remove(style.active));
        const getAllElement = document.querySelectorAll(`#link-${area.id}`);

        getAllElement.forEach((el) => el.classList.add(style.active));
      }
    });
  }, [areaIds]);

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div className={style.linkArea}>
      <ul>
        <li id="link-introduce" className={`link-item ${style.active}`}>
          Introduce
        </li>
        <li id="link-portfolio" className="link-item">
          Porfolio
        </li>
      </ul>
    </div>
  );
}
