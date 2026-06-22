// Trắc nghiệm GRP Lớp 1 — 5 câu/bài, bám "Tự kiểm tra" + nội dung từng bài.
// BẢN NHÁP để duyệt. answer = chỉ số (0-based) đáp án đúng trong options.
// Key = slug bài (module.replace('.','-')), vd "1-1".

export interface QuizQ {
  q: string;
  options: string[];
  answer: number;
}

export const grpQuizzes: Record<string, QuizQ[]> = {
  '1-1': [
    { q: 'Hiểu một nước "vận hành thế nào" nghĩa là gì?', options: [
      'Thuộc tên thủ đô, món ăn và danh lam',
      'Biết cách nó chạy: người ta xếp hàng, đúng giờ, hỏi ai khi cần',
      'Học thuộc lịch sử và chính trị của nước đó',
      'Nhớ tỉ giá tiền và thời tiết các mùa',
    ], answer: 1 },
    { q: '"Quy tắc ngầm" là gì?', options: [
      'Nội quy dán ở nơi công cộng',
      'Quy định riêng của trường học',
      'Luật bất thành văn không ai viết ra nhưng ai cũng theo',
      'Điều khoản ghi trong hợp đồng',
    ], answer: 2 },
    { q: 'Cách an toàn nhất để nắm quy tắc ngầm trong tuần đầu?', options: [
      'Quan sát số đông và làm theo, hỏi người mình tin khi không chắc',
      'Đọc một cuốn sách hướng dẫn du lịch',
      'Cứ làm theo thói quen ở Việt Nam',
      'Xem vài video giật tít trên mạng',
    ], answer: 0 },
    { q: 'Loại luật nào bạn nên biết TRƯỚC khi đi?', options: [
      'Toàn bộ bộ luật hình sự của nước đó',
      'Luật doanh nghiệp và thuế thu nhập',
      'Luật bản quyền và sở hữu trí tuệ',
      'Visa cho làm gì/cấm gì, tuổi hợp pháp dùng rượu bia, luật giao thông cơ bản',
    ], answer: 3 },
    { q: 'Nguồn thông tin nào đáng tin hơn một video giật tít?', options: [
      'Tin đồn trong nhóm chat',
      'Người đã sống ở đó thật, trang chính thức của trường/chính phủ, nhóm cộng đồng',
      'Một bài quảng cáo dịch vụ',
      'Bình luận ẩn danh trên mạng',
    ], answer: 1 },
  ],
  '1-2': [
    { q: 'Vì sao nên coi trục trặc (lạc đường, lỡ xe, sai giấy tờ) là bình thường?', options: [
      'Vì chúng không bao giờ nghiêm trọng',
      'Vì sẽ luôn có người lo hộ bạn',
      'Vì xảy ra với mọi người kể cả người bản địa; coi vậy thì bớt hoảng, xử nhanh hơn',
      'Vì bảo hiểm sẽ bồi thường hết',
    ], answer: 2 },
    { q: 'Ba câu hỏi giúp bạn ra khỏi cơn hoảng là gì?', options: [
      'Chuyện gì đang xảy ra thật; mình cần kết quả gì; bước nhỏ nhất tiếp theo là gì',
      'Ai có lỗi; sao mình xui thế; bao giờ mới hết',
      'Mình kém ở đâu; có nên về nước không; ai biết chuyện này',
      'Tốn bao nhiêu tiền; mất bao lâu; trách ai bây giờ',
    ], answer: 0 },
    { q: 'Có vấn đề về visa thì nên hỏi ai?', options: [
      'Một nhóm chat ngẫu nhiên trên mạng',
      'Người ở cùng phòng',
      'Sponsor hoặc SBB',
      'Tự tra và tự quyết, không hỏi ai',
    ], answer: 2 },
    { q: '"Thử, sai, rồi chỉnh" nghĩa là gì?', options: [
      'Chờ tới khi có câu trả lời hoàn hảo rồi mới làm',
      'Làm bừa cho xong rồi thôi',
      'Không bao giờ được phép sai',
      'Thử một giải pháp hợp lý, xem kết quả, rồi điều chỉnh; sai thì sửa nhanh',
    ], answer: 3 },
    { q: 'Việc nào KHÔNG nên tự ôm một mình?', options: [
      'Tự nấu ăn, tự dọn phòng',
      'Vấn đề pháp lý, sức khỏe, an toàn, tiền bạc lớn',
      'Tự đi chợ, tự bắt xe buýt',
      'Tự học bài, tự lên lịch',
    ], answer: 1 },
  ],
  '1-3': [
    { q: 'Vì sao đi nhiều không tự khắc làm bạn khôn ra?', options: [
      'Vì trải nghiệm tự biến thành bài học',
      'Vì khôn hay không là do bẩm sinh',
      'Vì cần phản tư — dừng lại nhìn lại — mới biến trải nghiệm thành trưởng thành',
      'Vì phải ở đủ nhiều năm mới khôn',
    ], answer: 2 },
    { q: 'Ba câu hỏi phản tư cuối tuần là gì?', options: [
      'Điều gì làm mình bất ngờ; mình xử ổn ở chỗ nào; lần sau làm khác ở chỗ nào',
      'Kiếm bao nhiêu; tiêu bao nhiêu; còn lại bao nhiêu',
      'Ai làm mình vui; ai làm mình bực; mình thích gì',
      'Đã đi đâu; ăn gì; chụp ảnh gì',
    ], answer: 0 },
    { q: 'Khác nhau giữa rút kinh nghiệm và tự dằn vặt là gì?', options: [
      'Không khác gì nhau',
      'Tự dằn vặt mới là nghiêm túc',
      'Rút kinh nghiệm là bỏ qua, không nghĩ gì',
      '"Lần sau mình làm thế này" giúp lớn lên; "mình thật vô dụng" chỉ kéo xuống',
    ], answer: 3 },
    { q: 'Bản ghi hành trình (vài dòng, vài ảnh mỗi tuần) có ích thật ở chỗ nào?', options: [
      'Để khoe trên mạng xã hội',
      'Thành kho câu chuyện cho phỏng vấn việc làm, hồ sơ học bổng, lúc cần kể mình trưởng thành',
      'Để chứng minh mình đã đi du lịch',
      'Không có ích gì thật, chỉ cho vui',
    ], answer: 1 },
    { q: 'Mục đích sâu xa của cả chuyến đi là gì?', options: [
      'Chỉ là khoảng thời gian ở nước ngoài',
      'Kiếm được nhiều tiền nhất có thể',
      'Con người bạn trở thành và những gì bạn mang về',
      'Đi được nhiều nơi nhất có thể',
    ], answer: 2 },
  ],
  '2-1': [
    { q: 'Vì sao nói bạn cũng "có văn hóa" dù không để ý?', options: [
      'Vì văn hóa chỉ là thứ của người khác',
      'Vì ai sinh ra cũng giống nhau',
      'Vì cách bạn chào hỏi, hiểu lịch sự, nghĩ về đúng giờ… đều do nơi bạn lớn lên định hình',
      'Vì văn hóa là thứ chỉ học ở trường',
    ], answer: 2 },
    { q: 'Khi gặp cách làm lạ, nên đổi câu hỏi trong đầu thành gì?', options: [
      '"Vì sao họ làm thế này"',
      '"Cái này sai rồi"',
      '"Sao họ kỳ vậy"',
      '"Mình phải sửa họ"',
    ], answer: 0 },
    { q: 'Khác biệt giao tiếp nào hay gây hiểu nhầm?', options: [
      'Màu áo và kiểu tóc',
      'Món ăn sáng',
      'Cách trang trí nhà',
      'Giao tiếp bằng mắt, khoảng cách đứng, mức nói thẳng hay nói vòng',
    ], answer: 3 },
    { q: 'Vì sao không nên dán nhãn cả một dân tộc từ vài lần gặp?', options: [
      'Vì như thế là phạm pháp',
      'Vì một người không đại diện cho tất cả',
      'Vì người ta sẽ trả đũa',
      'Vì mình chưa đủ tuổi để đánh giá',
    ], answer: 1 },
    { q: 'Giữ gốc của mình và mở lòng có mâu thuẫn nhau không?', options: [
      'Có, phải bỏ gốc mới hòa nhập được',
      'Có, mở lòng là phản bội văn hóa Việt',
      'Không — người vững gốc lại dễ mở lòng nhất vì không sợ mất mình',
      'Không liên quan gì tới nhau',
    ], answer: 2 },
  ],
  '2-2': [
    { q: 'Sốc văn hóa là gì, và có bình thường không?', options: [
      'Một bệnh hiếm gặp, dấu hiệu chọn sai đường',
      'Cảm giác mệt/lạc lõng khi cái mới lạ thành cái mệt; bình thường, gần như ai cũng gặp',
      'Chỉ xảy ra với người yếu đuối',
      'Chuyện chỉ có trong phim ảnh',
    ], answer: 1 },
    { q: 'Bốn chặng cảm xúc khi ra nước ngoài, theo đúng thứ tự?', options: [
      'Vỡ mộng → hứng khởi → hòa nhập → thích nghi',
      'Thích nghi → hòa nhập → hứng khởi → vỡ mộng',
      'Hứng khởi → vỡ mộng → thích nghi → hòa nhập',
      'Hòa nhập → hứng khởi → vỡ mộng → thích nghi',
    ], answer: 2 },
    { q: 'Cách lành mạnh để xử lý nỗi nhớ nhà?', options: [
      'Giữ liên lạc với gia đình nhưng cân bằng với việc xây kết nối mới, sống ở hiện tại',
      'Vùi mình cả ngày trong điện thoại gọi về nhà',
      'Cắt liên lạc hoàn toàn với nhà',
      'Tự xấu hổ và giấu cảm xúc đi',
    ], answer: 0 },
    { q: 'Việc tự chăm mình trong giai đoạn khó gồm những gì?', options: [
      'Ở lì trong phòng cho an toàn',
      'Bỏ ăn để tiết kiệm tiền',
      'Thức khuya xem phim cho quên',
      'Ngủ đủ, ăn tử tế, vận động, ra ngoài gặp người thật, đặt mục tiêu nhỏ mỗi ngày',
    ], answer: 3 },
    { q: 'Dấu hiệu nào cho thấy nên tìm trợ giúp chuyên môn?', options: [
      'Hơi nhớ nhà vài hôm đầu',
      'Buồn/lo kéo dài nhiều tuần, mất ngủ triền miên, không còn thiết gì, có ý nghĩ hại bản thân',
      'Thấy đồ ăn hơi lạ miệng',
      'Lạc đường một lần',
    ], answer: 1 },
  ],
  '2-3': [
    { q: 'Vì sao mạng lưới quan hệ quan trọng khi sống xa nhà?', options: [
      'Để khoe có nhiều bạn',
      'Để có người trả tiền hộ',
      'Người quen là thứ cứu bạn lúc khó; cô lập làm mọi khó khăn nặng gấp đôi',
      'Thật ra không quan trọng lắm',
    ], answer: 2 },
    { q: 'Small talk (chuyện phiếm) có vai trò gì?', options: [
      'Là cánh cửa — cách người ta dò xem có hợp nhau không trước khi thân hơn',
      'Vô nghĩa, chỉ tốn thời gian',
      'Chỉ dành cho người rảnh rỗi',
      'Là cách khoe kiến thức',
    ], answer: 0 },
    { q: 'Vì sao nên nói "có" với các lời mời dù bạn ngại?', options: [
      'Vì từ chối là vô lễ',
      'Vì sẽ bị phạt nếu từ chối',
      'Vì được trả tiền khi tham gia',
      'Vì cơ hội kết bạn nằm ở đó; phần lớn quan hệ tốt bắt đầu từ việc chịu có mặt',
    ], answer: 3 },
    { q: 'Quan hệ bền cần gì ngoài việc nhận trợ giúp?', options: [
      'Chỉ cần nhận, không cần cho',
      'Cho đi hai chiều: giúp lại, chia sẻ, lắng nghe khi người khác cần',
      'Cần tiền để duy trì',
      'Cần gặp nhau mỗi ngày',
    ], answer: 1 },
    { q: 'Rủi ro của việc chỉ chơi trong nhóm người Việt là gì?', options: [
      'Không có rủi ro gì',
      'Bị nhóm Việt xa lánh',
      'Bỏ lỡ phần lớn ý nghĩa chuyến đi và tiếng Anh chậm tiến',
      'Vi phạm điều kiện visa',
    ], answer: 2 },
  ],
  '3-1': [
    { q: 'Tiếng Anh "đủ dùng" khác tiếng Anh "thi điểm cao" ở chỗ nào?', options: [
      'Đủ dùng cần ngữ pháp hoàn hảo hơn',
      'Đủ dùng cần phản xạ nhanh và từ vựng thực tế để xong việc, không phải nói hay',
      'Hai cái giống hệt nhau',
      'Đủ dùng cần điểm IELTS cao hơn',
    ], answer: 1 },
    { q: 'Tình huống nào bạn phải nói được NGAY trong tuần đầu?', options: [
      'Thuyết trình học thuật trước lớp',
      'Tranh luận về chính trị',
      'Qua cửa nhập cảnh, hỏi đường, thuê nhà/nhận phòng, mở tài khoản ngân hàng',
      'Viết một bài luận dài',
    ], answer: 2 },
    { q: 'Vì sao không nên sợ sai khi nói?', options: [
      'Ở nước nhập cư người ta nghe đủ giọng, chỉ muốn hiểu bạn cần gì; mỗi lần mở miệng là một lần tiến bộ',
      'Vì nói sai sẽ được điểm cao',
      'Vì nói sai thì không ai để ý đâu',
      'Vì người bản địa cũng nói sai như bạn',
    ], answer: 0 },
    { q: 'Khi quên một từ giữa câu, bạn làm gì?', options: [
      'Đứng im chờ nhớ ra',
      'Bỏ cuộc, không nói nữa',
      'Chuyển hẳn sang tiếng Việt',
      'Diễn đạt vòng (mô tả), hỏi "How do you say…?", dùng tay hoặc tra nhanh',
    ], answer: 3 },
    { q: 'Cách thực tế để tiến bộ tiếng Anh mỗi ngày?', options: [
      'Học 50 từ trong sách rồi quên',
      'Học 3 từ thực tế gặp mỗi ngày, nghe người ta nói, bớt dịch trong đầu',
      'Chỉ học khi sắp thi',
      'Chỉ nói tiếng Việt cho chắc',
    ], answer: 1 },
  ],
  '3-2': [
    { q: 'Một email công việc tốt cần gì?', options: [
      'Văn hoa, dài, xin lỗi nhiều',
      'Càng dài càng lịch sự',
      'Rõ ràng và gọn: lời chào, đi thẳng vào việc, tiêu đề rõ, câu hỏi cụ thể',
      'Không cần tiêu đề',
    ], answer: 2 },
    { q: 'Vì sao im suốt buổi họp ở phương Tây có thể bất lợi?', options: [
      'Dễ bị hiểu là bạn không có gì đóng góp hoặc không theo kịp',
      'Vì sẽ bị phạt tiền',
      'Vì im lặng là vô lễ với sếp',
      'Thật ra không bất lợi gì cả',
    ], answer: 0 },
    { q: 'Một câu để chủ động xin phản hồi là gì?', options: [
      '"Tôi làm đúng hết rồi phải không?"',
      '"Đừng chê tôi nhé"',
      '"How did I do? Anything I should improve?"',
      '"Việc này là của người khác"',
    ], answer: 2 },
    { q: 'Làm sao để từ chối mà vẫn lịch sự?', options: [
      'Im rồi làm không nổi',
      'Từ chối thẳng thừng không giải thích',
      'Nhờ người khác từ chối hộ',
      'Nói thẳng mà mềm: "I\'d love to help, but I\'m finishing another task. Can it wait an hour?"',
    ], answer: 3 },
    { q: 'Quy tắc an toàn khi nhắn tin trong chat công việc là gì?', options: [
      'Viết thoải mái như chat với bạn thân',
      'Đừng viết gì mà bạn ngại bị người khác đọc lại',
      'Dùng thật nhiều emoji cho thân thiện',
      'Luôn viết thật dài và trang trọng',
    ], answer: 1 },
  ],
  '3-3': [
    { q: 'Vì sao giọng thật khó nghe hơn giọng trên app?', options: [
      'Vì người thật nói sai ngữ pháp',
      'Người thật nói nhanh, nuốt âm, dùng từ lóng; app thì chậm và rõ',
      'Vì app dùng giọng máy',
      'Vì bạn học kém',
    ], answer: 1 },
    { q: 'Khi không nghe rõ, nên làm gì thay vì gật cho qua?', options: [
      'Làm rõ: "Sorry, could you say that again?", "Could you speak a bit slower?"',
      'Cười và gật để khỏi mất mặt',
      'Bỏ đi chỗ khác',
      'Đoán đại rồi làm',
    ], answer: 0 },
    { q: 'Bạn có cần "giọng bản xứ" để được hiểu không?', options: [
      'Có, không có giọng Tây thì không ai hiểu',
      'Có, phải bỏ hẳn giọng Việt',
      'Không — cần phát âm rõ, nói chậm vừa phải, nhấn đúng từ quan trọng',
      'Không cần làm gì, nói sao cũng được',
    ], answer: 2 },
    { q: 'Vì sao nói quá nhanh lại khiến người nghe khó hiểu bạn?', options: [
      'Vì nói nhanh là bất lịch sự',
      'Vì máy ghi âm không bắt kịp',
      'Thật ra nói nhanh dễ hiểu hơn',
      'Vì người nghe khó theo; một câu chậm và rõ dễ hiểu hơn một tràng nhanh và mờ',
    ], answer: 3 },
    { q: 'Cách luyện tai hiệu quả trước khi bay?', options: [
      'Chỉ nghe giọng chuẩn trên app',
      'Nghe podcast/xem video/phim của đúng nước mình đến, mỗi ngày ~15 phút không phụ đề',
      'Đợi tới nơi mới làm quen giọng',
      'Học thuộc cả quyển từ điển',
    ], answer: 1 },
  ],
  '4-1': [
    { q: 'Vì sao im lặng cả kỳ có thể làm tụt điểm dù bài thi tốt?', options: [
      'Vì giảng viên không ưa sinh viên im',
      'Vì im lặng bị coi là gian lận',
      'Ở Mỹ/Canada điểm phát biểu (participation) tính thật trong tổng điểm',
      'Vì phải nói mới được vào lớp',
    ], answer: 2 },
    { q: 'Bạn dịch một đoạn từ tiếng Việt sang rồi đưa vào bài — có cần ghi nguồn không?', options: [
      'Có — đạo văn tính theo ý, không theo ngôn ngữ; dịch lại vẫn phải trích nguồn',
      'Không, đã dịch thì là của mình',
      'Không, vì phần mềm không bắt được',
      'Chỉ cần ghi nguồn nếu chép nguyên văn tiếng Anh',
    ], answer: 0 },
    { q: 'Kênh hỗ trợ nào của trường bạn nên dùng?', options: [
      'Không có kênh nào miễn phí cả',
      'Chỉ có thư viện',
      'Office hours của giảng viên, trung tâm hỗ trợ viết, cố vấn học tập, dịch vụ tâm lý',
      'Phải trả phí mới được hỗ trợ',
    ], answer: 2 },
    { q: 'Đề cương môn học (syllabus) nên xử lý thế nào trong tuần đầu?', options: [
      'Để đó, tới đâu hay tới đó',
      'Chỉ đọc trước kỳ thi',
      'Nhờ bạn tóm tắt hộ',
      'Ghi mọi deadline vào một lịch duy nhất ngay khi nhận, chia nhỏ bài lớn làm sớm',
    ], answer: 3 },
    { q: 'Bài luận hỏi "phân tích" mà bạn chép đúng sách vào thì vấn đề là gì?', options: [
      'Không vấn đề gì, chép đúng là được',
      'Thiếu góc nhìn riêng và lập luận của bạn nên vẫn điểm thấp',
      'Sẽ được điểm cao bất ngờ',
      'Chỉ sai nếu chép quá nhiều',
    ], answer: 1 },
  ],
  '4-2': [
    { q: 'Ca làm 8 giờ ở một bếp Mỹ, bạn nên có mặt lúc mấy giờ?', options: [
      'Đúng 8 giờ, đúng phút mở ca',
      'Tới sớm theo nhịp team (thường 10–15 phút) để kịp chuẩn bị trạm',
      '8 giờ 15, trễ chút không sao',
      'Khi nào tiện thì tới',
    ], answer: 1 },
    { q: 'Sếp giao việc bạn chưa hiểu hết, câu tiếng Anh nên nói là gì?', options: [
      'Gật đầu rồi làm theo trí nhớ',
      '"I know, I know"',
      'Could you show me once more how you\'d like this done?',
      'Im lặng và đoán',
    ], answer: 2 },
    { q: 'Quản lý chê việc của bạn (kiểu chê thẳng). Nên làm gì?', options: [
      'Nhận vào người, thấy mình vô dụng',
      'Cãi lại ngay tại chỗ',
      'Bỏ việc cho xong',
      'Hiểu phản hồi nói về việc chứ không phải con người; nghe, cảm ơn, rồi sửa',
    ], answer: 3 },
    { q: 'Bạn làm xong phần được giao sớm hơn dự kiến, nên làm gì?', options: [
      'Đứng xem điện thoại chờ được giao việc',
      'Chủ động hỏi "What can I help with next?", tìm việc phụ thêm',
      'Lặng lẽ về sớm',
      'Giả vờ vẫn đang bận',
    ], answer: 1 },
    { q: 'Bị giao việc ngoài training plan kéo dài nhiều tuần thì xử lý qua bước nào?', options: [
      'Im lặng chịu đựng cho hết chương trình',
      'Tự ý nghỉ việc',
      'Hỏi lại quản lý; việc lớn/không giải quyết được thì báo SBB (SBB làm việc với sponsor)',
      'Tự đi tìm host khác',
    ], answer: 2 },
  ],
  '4-3': [
    { q: 'Vai trò công việc của bạn được định nghĩa ở đâu?', options: [
      'Trong lời nói miệng của host',
      'Trong giấy tờ chương trình: training plan trong DS-2019 (J-1), training plan + mã ANZSCO (407)',
      'Do bạn tự quyết',
      'Trong hợp đồng thuê nhà',
    ], answer: 1 },
    { q: 'Quyền cơ bản của bạn ở nơi làm việc nước ngoài gồm gì?', options: [
      'Không có quyền gì, host bảo sao làm vậy',
      'Chỉ có quyền nghỉ phép',
      'Giờ làm tối đa, giờ nghỉ, lương tối thiểu theo luật, môi trường an toàn',
      'Quyền đổi việc bất cứ lúc nào',
    ], answer: 2 },
    { q: 'Vì sao làm thêm "chui" một công việc khác là rủi ro lớn?', options: [
      'Vì chỉ mệt người thêm thôi',
      'Vì lương thường thấp',
      'Thật ra không có rủi ro gì',
      'Là cách nhanh nhất hủy chương trình và visa; cái lợi trước mắt không đáng',
    ], answer: 3 },
    { q: 'Bị giao việc sai training plan kéo dài, báo theo thứ tự nào?', options: [
      'Báo thẳng đại sứ quán',
      'Quản lý trực tiếp (việc nhỏ) → SBB → sponsor can thiệp với host',
      'Đăng lên mạng xã hội',
      'Im lặng và tự chịu',
    ], answer: 1 },
    { q: 'Vì sao hành vi ngoài giờ làm cũng quan trọng?', options: [
      'Không quan trọng, ngoài giờ là việc riêng',
      'Vì host theo dõi bạn 24/7',
      'Nhiều chương trình coi hành vi ngoài giờ thuộc phạm vi; vi phạm pháp luật ảnh hưởng visa, và bạn đại diện cho SBB lẫn người đi sau',
      'Vì bạn phải làm thêm giờ',
    ], answer: 2 },
  ],
  '5-1': [
    { q: 'Hai dấu hiệu của lừa nhà cho thuê là gì?', options: [
      'Có hợp đồng rõ ràng và cho xem nhà thật',
      'Đòi đặt cọc trước khi xem nhà, giá rẻ bất thường, viện cớ không gặp mặt được',
      'Giá đúng thị trường',
      'Yêu cầu gặp mặt để ký hợp đồng',
    ], answer: 1 },
    { q: 'Vì sao nên lập ngân sách ngay tuần đầu?', options: [
      'Nhiều người cháy túi không phải vì kiếm ít, mà vì không theo dõi mình tiêu gì',
      'Vì ngân hàng bắt buộc',
      'Vì để khoe biết quản lý tiền',
      'Thật ra không cần thiết',
    ], answer: 0 },
    { q: 'Khi ốm nhẹ, nơi đầu tiên nên tới là đâu?', options: [
      'Bệnh viện cấp cứu',
      'Đại sứ quán',
      'Hiệu thuốc (pharmacy)',
      'Về Việt Nam khám',
    ], answer: 2 },
    { q: 'Bạn nên giữ bản sao những giấy tờ nào (cả giấy lẫn trên đám mây)?', options: [
      'Chỉ cần hộ chiếu',
      'Không cần giữ bản sao gì',
      'Chỉ giữ bản gốc cho an toàn',
      'Hộ chiếu, visa, hợp đồng và giấy tờ chương trình',
    ], answer: 3 },
    { q: 'Số/liên hệ quan trọng nào phải lưu sẵn?', options: [
      'Chỉ số của một người bạn',
      'Số khẩn cấp nước sở tại, SBB, sponsor, người thân ở nhà, đại sứ quán Việt Nam',
      'Chỉ số tổng đài taxi',
      'Không cần lưu, tra mạng lúc cần',
    ], answer: 1 },
  ],
  '5-2': [
    { q: 'Thói quen giữ an toàn hằng ngày gồm gì?', options: [
      'Khoe đồ đắt cho người ta nể',
      'Để ý xung quanh (nhất là tối/khu lạ), cho người tin biết mình đi đâu, tin vào trực giác',
      'Đi một mình ban đêm cho nhanh',
      'Không cần đề phòng gì',
    ], answer: 1 },
    { q: 'Khi nào thì nên gọi số khẩn cấp?', options: [
      'Khi cần hỏi đường',
      'Khi nhớ nhà',
      'Khi có nguy hiểm tới tính mạng, tai nạn, cháy, hoặc tội phạm đang diễn ra',
      'Khi tiếng Anh chưa tốt nên ngại tự xử',
    ], answer: 2 },
    { q: 'Dấu hiệu nào cho thấy sức khỏe tinh thần cần được quan tâm?', options: [
      'Hơi mệt sau một ngày dài',
      'Một hôm chán ăn',
      'Thỉnh thoảng nhớ nhà',
      'Buồn/lo kéo dài nhiều tuần, mất ngủ triền miên, không còn thiết việc từng thích, có ý nghĩ hại bản thân',
    ], answer: 3 },
    { q: 'Với vấn đề tâm lý, bạn nên tìm trợ giúp ở đâu?', options: [
      'Dịch vụ tư vấn của trường (thường miễn phí) hoặc đường dây hỗ trợ tâm lý nước sở tại',
      'Tự chịu một mình cho qua',
      'Hỏi trên một nhóm chat lạ',
      'Không nói với ai',
    ], answer: 0 },
    { q: 'Khi bạn bè có dấu hiệu nghiêm trọng (ý nghĩ hại bản thân), bạn nên làm gì?', options: [
      'Tự mình xử lý hết một mình',
      'Lờ đi vì không phải việc của mình',
      'Lắng nghe, ở bên, nhưng giúp họ kết nối người có chuyên môn hoặc gọi trợ giúp khẩn cấp — đừng tự ôm khủng hoảng',
      'Hứa giữ bí mật tuyệt đối rồi không làm gì',
    ], answer: 2 },
  ],
  '5-3': [
    { q: 'Vì sao nói bạn là một "đại diện" khi ở nước ngoài?', options: [
      'Vì bạn được chính phủ cử đi',
      'Với nhiều người, bạn có thể là người Việt đầu tiên họ tiếp xúc gần; cách bạn cư xử in vào ấn tượng về cả đất nước',
      'Vì bạn phải mặc quốc phục',
      'Thật ra bạn chỉ là cá nhân, không đại diện ai',
    ], answer: 1 },
    { q: 'Vì sao nên tôn trọng cả những quy tắc địa phương nhỏ (phân loại rác, giữ yên lặng…)?', options: [
      'Vì sợ bị phạt tiền nặng',
      'Vì các quy tắc đó luôn hợp lý',
      'Tôn trọng quy tắc địa phương là cách nhanh nhất được cộng đồng đón nhận; phá luật nhỏ làm người ta dè chừng cả nhóm',
      'Không cần, miễn không phạm luật lớn',
    ], answer: 2 },
    { q: 'Cách đóng góp cho cộng đồng nơi bạn sống?', options: [
      'Chỉ lo việc của mình',
      'Cho tiền là đủ',
      'Không cần đóng góp gì',
      'Tình nguyện, giúp hàng xóm một tay, chia sẻ văn hóa Việt qua món ăn hay câu chuyện',
    ], answer: 3 },
    { q: 'Hành vi của bạn ảnh hưởng tới người Việt đi sau như thế nào?', options: [
      'Không ảnh hưởng gì',
      'Làm tốt khiến host/sponsor muốn nhận thêm người Việt; làm sai khiến họ dè dặt với ứng viên sau',
      'Chỉ ảnh hưởng tới bản thân bạn',
      'Chỉ ảnh hưởng nếu bị bắt',
    ], answer: 1 },
    { q: 'Tinh thần "công dân toàn cầu" trong bài này nghĩa là gì?', options: [
      'Đi được nhiều nước nhất',
      'Có hộ chiếu nhiều dấu nhất',
      'Không chỉ tới một nơi để lấy, mà còn để lại nó tốt hơn một chút so với khi bạn đến',
      'Nói được nhiều thứ tiếng',
    ], answer: 2 },
  ],
};

export const quizFor = (slug: string): QuizQ[] => grpQuizzes[slug] || [];
export const QUIZ_PASS_RATIO = 0.8; // đạt ≥ 80% (4/5)
