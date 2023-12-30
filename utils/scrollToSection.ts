const ScrollToSection = (sectionId: string) => {
  const headerHeight = document.getElementById("header")?.offsetHeight;
  const targetSection = document.getElementById(sectionId);

  if (targetSection) {
    const offset = targetSection.offsetTop - (headerHeight ? headerHeight : 0);
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
};

export default ScrollToSection;
