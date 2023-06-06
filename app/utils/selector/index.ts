export function getElementByIds(id: string) {
  return document.getElementById(id) as HTMLElement;
}

export function getOffSet(el: HTMLElement) {
  return { id: el.id, offsetTop: el.offsetTop };
}

export function getArraySelector({
  className,
  tag,
}: {
  className: string;
  tag: string;
}) {
  switch (tag) {
    case "link":
      return Array.from(document.querySelectorAll(className));
    default:
      break;
  }
}
