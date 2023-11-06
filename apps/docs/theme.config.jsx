import { useRouter } from "next/router";

export default {
  logo: <strong>Naver Maps</strong>,
  project: {
    link: "https://github.com/Dongkyuuuu/naver-maps",
  },
  docsRepositoryBase: "https://github.com/Dongkyuuuu/naver-maps/tree/main/apps",
  useNextSeoProps() {
    const { asPath } = useRouter();

    if (asPath !== "/") {
      return {
        titleTemplate: "%s - NaverMaps",
      };
    }
  },
};
