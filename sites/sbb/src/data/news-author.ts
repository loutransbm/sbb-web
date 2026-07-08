/**
 * Tác giả mặc định cho cụm bài J-1 / News.
 * Dùng cho byline hiển thị + schema Article.author (E-E-A-T, nội dung YMYL visa).
 */
export const SITE_URL = 'https://sbb.edu.vn';

export const NEWS_AUTHOR = {
  name: 'Lou Tran',
  title: 'Nhà sáng lập & Giám đốc SBB Institute',
  url: SITE_URL,
  avatar: '/images/team/lou-avatar.webp',
  // Tiểu sử ngắn hiển thị dưới bài (tăng độ tin cậy cho nội dung visa).
  bio: 'Trực tiếp xây dựng và vận hành chương trình J-1 tại SBB Institute, đồng hành cùng người trẻ Việt trên hành trình thực tập và phát triển sự nghiệp tại Mỹ.',
};

export const NEWS_PUBLISHER = {
  '@type': 'Organization',
  name: 'SBB Institute',
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/brand/apple-touch-icon.png`,
  },
};
