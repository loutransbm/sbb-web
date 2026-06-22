// Nguồn chung cho 3 khóa "Sắp ra mắt": dùng ở catalog (card) và trang teaser.
// Đây là TEASER — chưa phải giáo trình. Nội dung "dự kiến", sẽ cập nhật khi mở khóa.

export interface UpcomingCourse {
  slug: string;        // /learn/sap-ra-mat/{slug}
  id: string;          // khớp programs[].id ở catalog (english | career | visa)
  title: string;
  tagline: string;     // một dòng dưới tên
  cover: string;       // màu cover pastel cho card
  accent: string;      // màu icon/điểm nhấn trên nền sáng
  icon: string;        // path bên trong <svg viewBox="0 0 64 64">
  intro: string;       // đoạn mở ở hero teaser
  audience: string;    // ai hợp khóa này
  learn: string[];     // "bạn sẽ học gì"
  outline: { title: string; items: string[] }[]; // nội dung dự kiến
  note?: string;       // ghi chú/cảnh báo (vd: visa)
}

export const upcomingCourses: UpcomingCourse[] = [
  {
    slug: 'tieng-anh',
    id: 'english',
    title: 'Tiếng Anh chức năng',
    tagline: 'Tiếng Anh dùng được ngay trong công việc và đời sống ở nước ngoài.',
    cover: '#a9c8e0',
    accent: '#2f6f9e',
    icon: '<path d="M16 18h28a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H28l-9 7v-7h-3a4 4 0 0 1-4-4V22a4 4 0 0 1 4-4z"/><path d="M23 27h18"/><path d="M23 33h12"/>',
    intro: 'Khóa tập trung vào tình huống thật bạn gặp mỗi ngày: ca làm, phỏng vấn, hỏi đường, xử lý sự cố. Học để nói được và hiểu được, không học để thi.',
    audience: 'Ứng viên J-1, 407 và du học sinh cần tiếng Anh thực dụng trước khi lên đường.',
    learn: [
      'Giao tiếp trong ca làm: nhận việc, hỏi lại, báo cáo, xử lý phàn nàn.',
      'Tiếng Anh phỏng vấn: trả lời gọn, tự tin, đúng điều nhà tuyển dụng muốn nghe.',
      'Đời sống hằng ngày: ngân hàng, thuê nhà, y tế, đi lại.',
      'Phát âm và nghe: luyện tai với giọng bản xứ, nói cho người ta hiểu.',
    ],
    outline: [
      { title: 'Nền tảng giao tiếp', items: ['Chào hỏi, giới thiệu, small talk', 'Hỏi và xác nhận thông tin'] },
      { title: 'Tiếng Anh nơi làm việc', items: ['Từ vựng theo ngành dịch vụ', 'Xử lý tình huống với khách và quản lý'] },
      { title: 'Phỏng vấn & hồ sơ', items: ['Câu hỏi thường gặp', 'Cách kể câu chuyện của bạn'] },
    ],
  },
  {
    slug: 'ky-nang-nghe',
    id: 'career',
    title: 'Kỹ năng nghề quốc tế',
    tagline: 'Tác phong và kỹ năng làm việc chuẩn quốc tế cho ngành dịch vụ.',
    cover: '#bcdccb',
    accent: '#3f7d5e',
    icon: '<rect x="12" y="22" width="40" height="28" rx="3"/><path d="M24 22v-4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4"/><path d="M12 35h40"/>',
    intro: 'Làm tốt nghề không chỉ là tay nghề. Khóa này rèn tác phong, thái độ, cách phối hợp đội nhóm và chuẩn dịch vụ mà đối tác nước ngoài mong đợi.',
    audience: 'Ứng viên đi làm diện J-1, 407 trong nhà hàng, khách sạn và dịch vụ.',
    learn: [
      'Chuẩn dịch vụ: đón khách, phục vụ, xử lý tình huống khó.',
      'Tác phong chuyên nghiệp: đúng giờ, chủ động, trung thực.',
      'Làm việc nhóm đa văn hóa và cách nhận phản hồi.',
      'An toàn, vệ sinh và quy tắc nơi làm việc.',
    ],
    outline: [
      { title: 'Thái độ & tác phong', items: ['Tinh thần trách nhiệm', 'Giao tiếp với quản lý'] },
      { title: 'Chuẩn dịch vụ', items: ['Quy trình phục vụ', 'Xử lý phàn nàn của khách'] },
      { title: 'Làm việc & an toàn', items: ['Phối hợp đội nhóm', 'Quy tắc an toàn lao động'] },
    ],
  },
  {
    slug: 'ho-so-visa',
    id: 'visa',
    title: 'Hồ sơ & Visa',
    tagline: 'Đi qua hồ sơ và phỏng vấn visa một cách bài bản, đỡ rối.',
    cover: '#ecc7ac',
    accent: '#c2380a',
    icon: '<rect x="16" y="12" width="32" height="40" rx="3"/><path d="M24 24h16"/><path d="M24 32h16"/><path d="M24 40h10"/>',
    intro: 'Hồ sơ và visa là chặng nhiều người lo nhất. Khóa này đi từng bước: giấy tờ cần gì, điền sao cho đúng, phỏng vấn nói gì, tránh lỗi hay gặp.',
    audience: 'Ứng viên chuẩn bị hồ sơ J-1, 407 và người thân muốn hiểu quy trình.',
    learn: [
      'Bộ hồ sơ chuẩn cho J-1 và 407, cần gì và lấy ở đâu.',
      'Điền form đúng: DS-2019, DS-160 và các mẫu liên quan.',
      'Luyện phỏng vấn visa: câu hỏi thường gặp, cách trả lời.',
      'Lỗi hay gặp khiến hồ sơ bị chậm hoặc bị từ chối.',
    ],
    outline: [
      { title: 'Chuẩn bị hồ sơ', items: ['Danh mục giấy tờ', 'Sắp xếp và dịch thuật'] },
      { title: 'Khai form', items: ['DS-2019 / DS-160', 'Lịch hẹn và lệ phí'] },
      { title: 'Phỏng vấn', items: ['Câu hỏi thường gặp', 'Tâm thế và cách trả lời'] },
    ],
    note: 'Thông tin về visa có thể đổi theo thời điểm và theo diện. Mọi chi tiết cần xác nhận lại với nguồn chính thức và đơn vị bảo lãnh.',
  },
];

export const upcomingBySlug = (slug: string) => upcomingCourses.find((c) => c.slug === slug);
