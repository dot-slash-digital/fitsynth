import { NextRouter } from "next/router";

export enum Page {
  BLOG = "BLOG",
  BLOGS = "BLOGS",
  CONTACT = "CONTACT",
  HOME = "HOME",
  WAITLIST = "WAITLIST",
}

export enum Section {
  FEATURES = "FEATURES",
  USERS = "USERS",
}

export const routes: {
  [page in Page]: {
    page: string;
    sections?: { [section in Section]: string };
  };
} = {
  [Page.BLOG]: {
    page: "",
  },
  [Page.BLOGS]: {
    page: "/blogs",
  },
  [Page.CONTACT]: {
    page: "/contact",
  },
  [Page.HOME]: {
    page: "/",
    sections: {
      [Section.FEATURES]: "features",
      [Section.USERS]: "users",
    },
  },
  [Page.WAITLIST]: {
    page: "/waitlist",
  },
};

export const getSectionFullPath = (
  router: NextRouter,
  page: Page,
  section: Section
) => {
  const pageRoute = routes[page].page;
  const pageSections = routes[page].sections;
  const sectionPath =
    pageSections && section in pageSections ? pageSections[section] : "";

  return `${
    router.pathname === pageRoute
      ? ""
      : `${pageRoute === "/" ? "" : pageRoute}/`
  }#${sectionPath}`;
};

export const getPageFromSection = (section: Section) => {
  return Object.keys(routes).find((page) => {
    const pageSections = routes[page as Page].sections || [];
    return Object.keys(pageSections).find((s) => s === section);
  });
};
