import analytics from "../analytics";
import Utils from "./Utils";

const SHARE_URL = "https://k-mas.org/event/quiz";
const SHARE_TITLE = "2021 K-MAS 라이브마켓";

const sendEvent = (label: string) => {
  analytics.sendEvent({
    category: "영상 퀴즈 공유",
    action: "영상 공유",
    label,
  });
  Utils.copyToClipboard("https://youtu.be/XZbyn7j5Hc4");
};

export default {
  fbShare() {
    const href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      SHARE_URL
    )}`;
    const fbWindow = window.open(href, "_blank");
    sendEvent("페이스북");
    return fbWindow;
  },
  kakaoStoryShare() {
    const href = `https://story.kakao.com/share?url=${encodeURIComponent(
      SHARE_URL
    )}`;
    const storyWindow = window.open(href, "_blank");
    sendEvent("카카오스토리");
    return storyWindow;
  },
  naverBlogShare() {
    const href = `https://share.naver.com/web/shareView.nhn?url=${encodeURIComponent(
      SHARE_URL
    )}&title=${encodeURIComponent(SHARE_TITLE)}`;
    const nblogWindow = window.open(href, "_blank");
    sendEvent("네이버 블로그");
    return nblogWindow;
  },
  twShare() {
    const href = `http://twitter.com/share?count=horizontal&url=${encodeURIComponent(
      SHARE_URL
    )}`;
    const twWindow = window.open(href, "_blank");
    sendEvent("트위터");
    return twWindow;
  },
  bandShare() {
    const href = `https://band.us/plugin/share?body=${encodeURIComponent(
      SHARE_TITLE
    )}&route=${encodeURIComponent(SHARE_URL)}`;
    const nbandWindow = window.open(href, "_blank");
    sendEvent("네이버 밴드");
    return nbandWindow;
  },
  instaShare() {
    const href = `https://www.instagram.com`;
    const instaWindow = window.open(href, "_blank");
    sendEvent("인스타그램");
    return instaWindow;
  },
};
