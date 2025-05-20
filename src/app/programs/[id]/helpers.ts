export const allPrograms = [
	{
		id: 1,
		title: 'Đêm nhạc "Yêu Là Đủ" gây quỹ phát cơm',
		date: "28/07/2025",
		location: "Nhà văn hóa Q3",
		image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
		description:
			"Chương trình âm nhạc đặc biệt với sự tham gia của các nghệ sĩ trẻ, gây quỹ cho hoạt động phát cơm từ thiện.",
		category: "Gây quỹ",
		status: "upcoming",
		longDescription: `
      Đêm nhạc "Yêu Là Đủ" là sự kiện âm nhạc đặc biệt được tổ chức nhằm gây quỹ cho hoạt động phát cơm từ thiện cho người vô gia cư và người khó khăn tại Thành phố Hồ Chí Minh.

      Chương trình sẽ diễn ra với sự tham gia của các nghệ sĩ trẻ tài năng, mang đến không gian âm nhạc chất lượng và ý nghĩa. Toàn bộ số tiền thu được từ việc bán vé và các hoạt động gây quỹ trong sự kiện sẽ được dành cho việc tổ chức các suất cơm từ thiện trong 6 tháng tiếp theo.
    `,
		organizer: "CLB Thiện Nguyện Smile Gift",
		contactPerson: "Nguyễn Văn A",
		phoneNumber: "0978123456",
		email: "contact@thienguyensmilegift.org",
		schedule: [
			{
				time: "18:00 - 19:00",
				activity: "Đón khách, check-in",
			},
			{
				time: "19:00 - 19:15",
				activity: "Phát biểu khai mạc",
			},
			{
				time: "19:15 - 20:30",
				activity: "Chương trình âm nhạc phần 1",
			},
			{
				time: "20:30 - 21:00",
				activity: "Giới thiệu về hoạt động phát cơm từ thiện",
			},
			{
				time: "21:00 - 22:00",
				activity: "Chương trình âm nhạc phần 2",
			},
			{
				time: "22:00 - 22:30",
				activity: "Kết thúc chương trình, cảm ơn",
			},
		],
		gallery: [
			"https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg",
			"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
			"https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
			"https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
			"https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
			"https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg",
		],
		registrationFee: "200.000 VNĐ",
		maxAttendees: 200,
		remainingSlots: 120,
		volunteerNeeded: true,
		volunteerPositions: [
			"Hỗ trợ check-in",
			"Hỗ trợ kỹ thuật",
			"Hỗ trợ hậu cần",
		],
	},
	{
		id: 2,
		title: "Công quả tại Chùa Phổ Quang",
		date: "10/08/2025",
		location: "Tân Bình",
		image: "https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg",
		description:
			"Hoạt động công quả tại chùa, hỗ trợ công tác chuẩn bị và phân phát thực phẩm cho người nghèo.",
		category: "Công quả",
		status: "upcoming",
		longDescription: `
      Chương trình công quả tại Chùa Phổ Quang là hoạt động thường niên của CLB Thiện Nguyện Smile Gift, nhằm hỗ trợ công tác chuẩn bị và phân phát thực phẩm cho người nghèo tại khu vực quận Tân Bình.

      Các tình nguyện viên sẽ tham gia vào các công việc như sơ chế thực phẩm, nấu ăn, đóng gói và phân phát suất ăn cho người có hoàn cảnh khó khăn. Đây không chỉ là hoạt động ý nghĩa về mặt xã hội mà còn giúp mỗi người tham gia có cơ hội tích đức và rèn luyện đức tính kiên nhẫn, yêu thương.
    `,
		organizer: "CLB Thiện Nguyện Smile Gift phối hợp với Chùa Phổ Quang",
		contactPerson: "Trần Thị B",
		phoneNumber: "0912345678",
		email: "volunteer@thienguyensmilegift.org",
		schedule: [
			{
				time: "06:00 - 07:00",
				activity: "Tập trung tại chùa",
			},
			{
				time: "07:00 - 09:00",
				activity: "Sơ chế thực phẩm, chuẩn bị nấu ăn",
			},
			{
				time: "09:00 - 11:00",
				activity: "Nấu ăn, chuẩn bị suất cơm",
			},
			{
				time: "11:00 - 13:00",
				activity: "Phân phát suất ăn",
			},
			{
				time: "13:00 - 14:00",
				activity: "Dọn dẹp, tổng kết",
			},
		],
		gallery: [
			"https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg",
			"https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
			"https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg",
			"https://images.pexels.com/photos/6647030/pexels-photo-6647030.jpeg",
		],
		registrationFee: "Miễn phí",
		maxAttendees: 50,
		remainingSlots: 35,
		volunteerNeeded: true,
		volunteerPositions: [
			"Hỗ trợ nấu ăn",
			"Hỗ trợ đóng gói",
			"Hỗ trợ phân phát",
		],
	},
	{
		id: 3,
		title: "Chương trình mổ mắt từ thiện",
		date: "25/08/2025",
		location: "Bệnh viện Mắt Tp.HCM",
		image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
		description:
			"Hỗ trợ chi phí phẫu thuật mắt cho các bệnh nhân nghèo tại khu vực nông thôn.",
		category: "Y tế",
		status: "upcoming",
		longDescription: `
      Chương trình mổ mắt từ thiện là hoạt động y tế cộng đồng ý nghĩa, nhằm hỗ trợ chi phí phẫu thuật mắt cho các bệnh nhân nghèo tại khu vực nông thôn, giúp họ có cơ hội phục hồi thị lực và cải thiện chất lượng cuộc sống.

      Với sự hỗ trợ từ các bác sĩ chuyên khoa mắt tại Bệnh viện Mắt Tp.HCM cùng đội ngũ tình nguyện viên y tế, chương trình dự kiến thực hiện 50 ca phẫu thuật mắt miễn phí cho người có hoàn cảnh khó khăn. Đây là chương trình thiết thực, mang lại giá trị lâu dài cho người dân, đặc biệt là người cao tuổi ở các vùng nông thôn xa xôi.
    `,
		organizer: "CLB Thiện Nguyện Smile Gift phối hợp với Bệnh viện Mắt Tp.HCM",
		contactPerson: "Lê Văn C",
		phoneNumber: "0901234567",
		email: "medical@thienguyensmilegift.org",
		schedule: [
			{
				time: "07:00 - 08:00",
				activity: "Đón tiếp bệnh nhân",
			},
			{
				time: "08:00 - 09:00",
				activity: "Khám sàng lọc, chuẩn bị phẫu thuật",
			},
			{
				time: "09:00 - 16:00",
				activity: "Thực hiện các ca phẫu thuật",
			},
			{
				time: "16:00 - 17:00",
				activity: "Tổng kết, hướng dẫn chăm sóc hậu phẫu",
			},
		],
		gallery: [
			"https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg",
			"https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg",
			"https://images.pexels.com/photos/4225891/pexels-photo-4225891.jpeg",
			"https://images.pexels.com/photos/4226763/pexels-photo-4226763.jpeg",
		],
		registrationFee: "Miễn phí",
		maxAttendees: 20,
		remainingSlots: 10,
		volunteerNeeded: true,
		volunteerPositions: [
			"Tình nguyện viên y tế",
			"Hỗ trợ đón tiếp bệnh nhân",
			"Hỗ trợ hậu cần",
		],
	},
	{
		id: 4,
		title: "Công quả ở Tổ Đình Phật Bửu",
		date: "15/03/2025",
		location: "Quận 10, TP.HCM",
		image: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg",
		description:
			"Chương trình công quả tại Tổ Đình Phật Bửu, phân phát thực phẩm và quà cho người già neo đơn.",
		category: "Công quả",
		status: "completed",
		longDescription: `
      Chương trình công quả tại Tổ Đình Phật Bửu là hoạt động định kỳ của CLB Thiện Nguyện Smile Gift, nhằm hỗ trợ phân phát thực phẩm và quà cho người già neo đơn trong khu vực quận 10.

      Trong chương trình này, ngoài việc trao tặng các suất quà, các tình nguyện viên còn tham gia vào việc dọn dẹp, trang trí chùa và tổ chức các hoạt động văn nghệ nhỏ để mang lại niềm vui cho người cao tuổi. Hoạt động đã diễn ra thành công tốt đẹp với sự tham gia của 40 tình nguyện viên và đã trao tặng 150 suất quà cho người già neo đơn.
    `,
		organizer: "CLB Thiện Nguyện Smile Gift phối hợp với Tổ Đình Phật Bửu",
		contactPerson: "Phạm Thị D",
		phoneNumber: "0934567890",
		email: "volunteer@thienguyensmilegift.org",
		schedule: [],
		gallery: [
			"https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
			"https://images.pexels.com/photos/6646927/pexels-photo-6646927.jpeg",
			"https://images.pexels.com/photos/6646730/pexels-photo-6646730.jpeg",
			"https://images.pexels.com/photos/6647022/pexels-photo-6647022.jpeg",
			"https://images.pexels.com/photos/6647029/pexels-photo-6647029.jpeg",
			"https://images.pexels.com/photos/6647033/pexels-photo-6647033.jpeg",
		],
		results: {
			volunteersParticipated: 40,
			beneficiaries: 150,
			fundsRaised: "10.000.000 VNĐ",
			giftsDistributed: 150,
			mealsServed: 300,
		},
	},
	{
		id: 5,
		title: 'Đêm nhạc gây quỹ "ĐÊM"',
		date: "05/03/2025",
		location: "Nhà văn hóa Thanh Niên",
		image: "https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg",
		description:
			'Đêm nhạc gây quỹ với chủ đề "ĐÊM", quyên góp được 50 triệu đồng cho quỹ học bổng sinh viên.',
		category: "Gây quỹ",
		status: "completed",
		longDescription: `
      Đêm nhạc gây quỹ với chủ đề "ĐÊM" là sự kiện văn hóa nghệ thuật được tổ chức nhằm quyên góp tiền cho quỹ học bổng sinh viên nghèo vượt khó. Chương trình đã diễn ra thành công tốt đẹp tại Nhà văn hóa Thanh Niên với sự tham gia của nhiều nghệ sĩ nổi tiếng.

      Sự kiện đã thu hút được hơn 300 khán giả tham dự và quyên góp được 50 triệu đồng. Số tiền này đã được sử dụng để trao 25 suất học bổng, mỗi suất trị giá 2 triệu đồng cho các sinh viên có hoàn cảnh khó khăn nhưng vẫn nỗ lực học tập.
    `,
		organizer: "CLB Thiện Nguyện Smile Gift",
		contactPerson: "Trần Văn E",
		phoneNumber: "0956789012",
		email: "events@thienguyensmilegift.org",
		schedule: [],
		gallery: [
			"https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
			"https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
			"https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
			"https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
			"https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg",
			"https://images.pexels.com/photos/1549196/pexels-photo-1549196.jpeg",
		],
		results: {
			volunteersParticipated: 30,
			attendees: 300,
			fundsRaised: "50.000.000 VNĐ",
			scholarshipsAwarded: 25,
			scholarshipAmount: "2.000.000 VNĐ",
		},
	},
	{
		id: 6,
		title: "Tặng quà Tết cho người vô gia cư",
		date: "20/01/2025",
		location: "Trung tâm TP.HCM",
		image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
		description:
			"Chương trình tặng quà Tết cho người vô gia cư tại khu vực trung tâm thành phố.",
		category: "Tặng quà",
		status: "completed",
		longDescription: `
      Chương trình tặng quà Tết cho người vô gia cư là hoạt động thường niên của CLB Thiện Nguyện Smile Gift vào dịp Tết Nguyên đán. Hoạt động nhằm mang không khí Tết đến với những người kém may mắn, giúp họ cảm nhận được sự ấm áp, yêu thương trong những ngày đầu năm mới.

      Năm nay, chương trình đã trao tặng 200 suất quà Tết, bao gồm các nhu yếu phẩm, bánh kẹo, lì xì và các vật dụng cần thiết cho người vô gia cư tại khu vực trung tâm thành phố. Hoạt động đã nhận được sự hỗ trợ nhiệt tình từ 50 tình nguyện viên và các nhà hảo tâm.
    `,
		organizer: "CLB Thiện Nguyện Smile Gift",
		contactPerson: "Nguyễn Thị F",
		phoneNumber: "0967890123",
		email: "gifts@thienguyensmilegift.org",
		schedule: [],
		gallery: [
			"https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
			"https://images.pexels.com/photos/6646730/pexels-photo-6646730.jpeg",
			"https://images.pexels.com/photos/6646724/pexels-photo-6646724.jpeg",
			"https://images.pexels.com/photos/6647022/pexels-photo-6647022.jpeg",
			"https://images.pexels.com/photos/6647031/pexels-photo-6647031.jpeg",
		],
		results: {
			volunteersParticipated: 50,
			beneficiaries: 200,
			fundsUsed: "40.000.000 VNĐ",
			giftsDistributed: 200,
			foodServings: 400,
		},
	},
];

// Helper function to get related programs based on category and exclude current program
export function getRelatedPrograms(
	currentProgramId: number,
	limit: number = 3
) {
	const currentProgram = allPrograms.find((p) => p.id === currentProgramId);

	if (!currentProgram) return [];

	return allPrograms
		.filter(
			(p) => p.id !== currentProgramId && p.category === currentProgram.category
		)
		.slice(0, limit);
}
