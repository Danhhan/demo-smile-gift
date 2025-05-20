import Image from "next/image";
import {
	FaHandHoldingHeart,
	FaFileAlt,
	FaRegCreditCard,
	FaMoneyBillWave,
	FaQrcode,
} from "react-icons/fa";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";

export default function DonatePage() {
	return (
		<div className="pt-24">
			{/* Hero Section */}
			<div className="relative bg-primary-800 text-white py-16">
				<div className="absolute inset-0 overflow-hidden">
					<Image
						src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
						alt="Quyên góp"
						fill
						style={{ objectFit: "cover", objectPosition: "center" }}
						className="opacity-20"
					/>
				</div>
				<div className="container-custom relative z-10">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Ủng hộ hoạt động
						</h1>
						<p className="text-xl mb-4 text-neutral-200">
							Mỗi đóng góp của bạn đều mang ý nghĩa to lớn. Cùng chúng tôi lan
							tỏa yêu thương và chia sẻ với những mảnh đời khó khăn.
						</p>
					</div>
				</div>
			</div>

			{/* Donation Impact */}
			<section className="py-16">
				<div className="container-custom">
					<h2 className="text-3xl font-bold mb-10 text-center">
						Đóng góp của bạn sẽ tạo nên sự khác biệt
					</h2>

					<div className="grid md:grid-cols-4 gap-6">
						{[
							{
								amount: "50.000 đ",
								impact: "Cung cấp 5 suất cơm cho người vô gia cư",
								icon: <FaHandHoldingHeart />,
							},
							{
								amount: "100.000 đ",
								impact: "Tặng 2 bộ sách giáo khoa cho học sinh nghèo",
								icon: <FaHandHoldingHeart />,
							},
							{
								amount: "500.000 đ",
								impact: "Hỗ trợ chi phí đi lại và khám bệnh cho 1 người già",
								icon: <FaHandHoldingHeart />,
							},
							{
								amount: "1.000.000 đ",
								impact: "Đóng góp vào quỹ phẫu thuật mắt cho người cao tuổi",
								icon: <FaHandHoldingHeart />,
							},
						].map((item, index) => (
							<div
								key={index}
								className="bg-white p-6 rounded-lg shadow-md text-center"
							>
								<div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary-700 rounded-full mb-4 text-2xl">
									{item.icon}
								</div>
								<div className="text-2xl font-bold text-primary-700 mb-2">
									{item.amount}
								</div>
								<p className="text-neutral-600">{item.impact}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Donation Methods */}
			<section className="py-16 bg-neutral-50">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Phương thức quyên góp</h2>
						<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
							Chọn phương thức quyên góp phù hợp với bạn. Mọi đóng góp đều được
							ghi nhận và sử dụng minh bạch.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-10">
						{/* Bank Transfer */}
						<div className="bg-white p-8 rounded-lg shadow-md">
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mr-4">
									<FaMoneyBillWave size={24} />
								</div>
								<h3 className="text-2xl font-bold">Chuyển khoản ngân hàng</h3>
							</div>

							<div className="mb-8">
								<div className="grid grid-cols-3 gap-4 mb-4">
									<div className="col-span-1 text-neutral-500">Ngân hàng:</div>
									<div className="col-span-2 font-medium">
										BIDV Chi nhánh TP.HCM
									</div>
								</div>
								<div className="grid grid-cols-3 gap-4 mb-4">
									<div className="col-span-1 text-neutral-500">
										Số tài khoản:
									</div>
									<div className="col-span-2 font-medium">31410001234567</div>
								</div>
								<div className="grid grid-cols-3 gap-4 mb-4">
									<div className="col-span-1 text-neutral-500">
										Chủ tài khoản:
									</div>
									<div className="col-span-2 font-medium">
										CLB THIỆN NGUYỆN SMILE GIFT
									</div>
								</div>
								<div className="grid grid-cols-3 gap-4">
									<div className="col-span-1 text-neutral-500">
										Nội dung CK:
									</div>
									<div className="col-span-2 font-medium">
										[Họ tên] ủng hộ [tên dự án nếu có]
									</div>
								</div>
							</div>

							<div className="bg-primary-50 p-4 rounded-lg">
								<div className="flex">
									<div className="text-primary-700 mr-3">
										<FaQrcode size={100} />
									</div>
									<div>
										<p className="text-sm text-neutral-600 mb-2">
											Quét mã QR để chuyển khoản nhanh chóng
										</p>
										<Button variant="primary" size="sm">
											Tải mã QR
										</Button>
									</div>
								</div>
							</div>
						</div>

						{/* Credit Card / Online Payment */}
						<div className="bg-white p-8 rounded-lg shadow-md">
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mr-4">
									<FaRegCreditCard size={24} />
								</div>
								<h3 className="text-2xl font-bold">Thanh toán trực tuyến</h3>
							</div>

							<p className="mb-6 text-neutral-600">
								Thực hiện quyên góp trực tuyến bằng thẻ tín dụng/ghi nợ hoặc các
								phương thức thanh toán điện tử khác. Giao dịch được bảo mật và
								xử lý ngay lập tức.
							</p>

							<div className="space-y-4 mb-8">
								<div className="border border-neutral-200 rounded-lg p-4 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
									<div className="flex items-center">
										<input
											id="amount-100k"
											name="donation-amount"
											type="radio"
											className="h-4 w-4 text-primary-600 border-neutral-300 focus:ring-primary-500"
											defaultChecked
										/>
										<label
											htmlFor="amount-100k"
											className="ml-3 block text-lg font-medium"
										>
											100.000 đ
										</label>
									</div>
								</div>

								<div className="border border-neutral-200 rounded-lg p-4 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
									<div className="flex items-center">
										<input
											id="amount-200k"
											name="donation-amount"
											type="radio"
											className="h-4 w-4 text-primary-600 border-neutral-300 focus:ring-primary-500"
										/>
										<label
											htmlFor="amount-200k"
											className="ml-3 block text-lg font-medium"
										>
											200.000 đ
										</label>
									</div>
								</div>

								<div className="border border-neutral-200 rounded-lg p-4 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
									<div className="flex items-center">
										<input
											id="amount-500k"
											name="donation-amount"
											type="radio"
											className="h-4 w-4 text-primary-600 border-neutral-300 focus:ring-primary-500"
										/>
										<label
											htmlFor="amount-500k"
											className="ml-3 block text-lg font-medium"
										>
											500.000 đ
										</label>
									</div>
								</div>

								<div className="border border-neutral-200 rounded-lg p-4 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
									<div className="flex items-center">
										<input
											id="amount-other"
											name="donation-amount"
											type="radio"
											className="h-4 w-4 text-primary-600 border-neutral-300 focus:ring-primary-500"
										/>
										<label
											htmlFor="amount-other"
											className="ml-3 block text-lg font-medium"
										>
											Số tiền khác
										</label>
									</div>
									<div className="mt-2 pl-7">
										<input
											type="text"
											placeholder="Nhập số tiền (VNĐ)"
											className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
										/>
									</div>
								</div>
							</div>

							<Button variant="secondary" size="lg" fullWidth>
								Tiến hành thanh toán
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Transparency Section */}
			<section className="py-16">
				<div className="container-custom">
					<div className="max-w-3xl mx-auto">
						<div className="flex items-center mb-6">
							<div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mr-4">
								<FaFileAlt size={24} />
							</div>
							<h2 className="text-3xl font-bold">Cam kết minh bạch</h2>
						</div>

						<p className="text-lg mb-6">
							Tại CLB Thiện Nguyện Smile Gift, chúng tôi cam kết:
						</p>

						<ul className="space-y-3 mb-8">
							<li className="flex">
								<div className="text-primary-700 mr-3">•</div>
								<p>
									100% số tiền quyên góp được sử dụng đúng mục đích, đúng đối
									tượng.
								</p>
							</li>
							<li className="flex">
								<div className="text-primary-700 mr-3">•</div>
								<p>Báo cáo tài chính được công khai, minh bạch hàng tháng.</p>
							</li>
							<li className="flex">
								<div className="text-primary-700 mr-3">•</div>
								<p>
									Mọi khoản chi được ghi chép đầy đủ, có hóa đơn, chứng từ rõ
									ràng.
								</p>
							</li>
							<li className="flex">
								<div className="text-primary-700 mr-3">•</div>
								<p>
									Mạnh thường quân có thể kiểm tra, theo dõi việc sử dụng quỹ
									bất cứ lúc nào.
								</p>
							</li>
						</ul>

						<div className="text-center">
							<Button variant="primary">
								<Link href="/reports">Xem báo cáo tài chính</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16 bg-primary-50">
				<div className="container-custom">
					<h2 className="text-3xl font-bold mb-10 text-center">
						Câu hỏi thường gặp
					</h2>

					<div className="max-w-3xl mx-auto">
						<div className="space-y-6">
							{[
								{
									question:
										"100% số tiền quyên góp có được sử dụng cho người thụ hưởng không?",
									answer:
										"Phần lớn số tiền quyên góp sẽ được sử dụng trực tiếp cho người thụ hưởng. Một phần nhỏ (khoảng 5%) được sử dụng cho chi phí vận hành như in ấn, di chuyển, và các chi phí hành chính khác để đảm bảo các chương trình được tổ chức hiệu quả.",
								},
								{
									question:
										"Làm thế nào để tôi biết đóng góp của mình được sử dụng đúng mục đích?",
									answer:
										"Chúng tôi công khai báo cáo tài chính hàng tháng trên website và fanpage. Mỗi chương trình đều có báo cáo chi tiết về số tiền quyên góp và cách sử dụng. Bạn cũng có thể yêu cầu thông tin cụ thể về đóng góp của mình bất cứ lúc nào.",
								},
								{
									question:
										"Tôi có được giấy xác nhận cho khoản đóng góp không?",
									answer:
										"Có, chúng tôi sẽ gửi giấy xác nhận đóng góp qua email cho tất cả các khoản quyên góp. Nếu bạn cần bản cứng hoặc định dạng khác, vui lòng liên hệ với chúng tôi qua email hoặc hotline.",
								},
								{
									question: "Tôi có thể quyên góp cho một dự án cụ thể không?",
									answer:
										"Có, bạn có thể chỉ định đóng góp của mình cho một dự án hoặc đối tượng cụ thể. Chỉ cần ghi rõ trong nội dung chuyển khoản hoặc chọn dự án tương ứng khi thanh toán trực tuyến.",
								},
								{
									question:
										"Làm thế nào để tôi trở thành mạnh thường quân thường xuyên?",
									answer:
										"Bạn có thể đăng ký trở thành mạnh thường quân thường xuyên bằng cách liên hệ với chúng tôi qua email hoặc hotline. Chúng tôi sẽ gửi thông tin định kỳ về các dự án và cách bạn có thể đóng góp.",
								},
							].map((faq, index) => (
								<div key={index} className="bg-white p-6 rounded-lg shadow-md">
									<h3 className="text-lg font-bold mb-3">{faq.question}</h3>
									<p className="text-neutral-600">{faq.answer}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16">
				<div className="container-custom">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-6">Cần hỗ trợ thêm?</h2>
						<p className="text-lg mb-8">
							Nếu bạn có bất kỳ câu hỏi nào về việc quyên góp, vui lòng liên hệ
							với chúng tôi.
						</p>

						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Button variant="primary">
								<Link href="/contact">Liên hệ ngay</Link>
							</Button>

							<Button variant="outline">
								<a href="tel:0355749581">Hotline: 0355.749.581</a>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
