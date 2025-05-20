import Image from "next/image";
import Link from "next/link";
import {
	FaPeopleCarry,
	FaHandHoldingHeart,
	FaLightbulb,
	FaHandshake,
} from "react-icons/fa";
import Button from "@/components/ui/Button";
import { Metadata } from "next";

export default function AboutPage() {
	return (
		<div className="pt-24">
			{/* Hero Section */}
			<div className="relative bg-primary-800 text-white py-20">
				<div className="absolute inset-0 overflow-hidden">
					<Image
						src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg"
						alt="Hoạt động thiện nguyện"
						fill
						style={{ objectFit: "cover", objectPosition: "center" }}
						className="opacity-20"
					/>
				</div>
				<div className="container-custom relative z-10">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Hành trình lan tỏa yêu thương bằng nghệ thuật
						</h1>
						<p className="text-xl mb-4 text-neutral-200">
							Câu chuyện về CLB Thiện Nguyện Smile Gift và sứ mệnh kết nối những
							trái tim nhân ái.
						</p>
					</div>
				</div>
			</div>

			{/* Our Story */}
			<section className="py-16">
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold mb-6 title-underline">
								Câu Chuyện Smile Gift
							</h2>
							<p className="text-lg mb-4">
								Bắt đầu từ vài bạn trẻ yêu sân khấu và mong muốn làm thiện
								nguyện, Smile Gift đã phát triển thành một CLB với hơn 100 TNV,
								tổ chức hơn 30 chương trình từ thiện, gây quỹ hơn 300 triệu đồng
								cho người nghèo và trẻ em khó khăn.
							</p>
							<p className="text-lg mb-6">
								Chúng tôi tin rằng mỗi nụ cười, mỗi tiết mục hay, mỗi suất cơm
								tặng đi... đều có thể chạm vào trái tim người khác. Trong hành
								trình hơn 3 năm qua, chúng tôi tự hào đã tạo ra những tác động
								tích cực và lan tỏa giá trị tốt đẹp trong cộng đồng.
							</p>

							<div className="p-5 bg-primary-50 rounded-lg mb-6">
								<h3 className="text-xl font-semibold mb-4">Slogan</h3>
								<p className="text-primary-800 italic text-xl font-serif">
									"Đừng bao giờ từ chối nếu bạn vẫn còn cái để cho!"
								</p>
							</div>
						</div>

						<div className="relative">
							<div className="aspect-[4/3] rounded-lg overflow-hidden">
								<Image
									src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
									alt="Hoạt động thiện nguyện"
									fill
									className="object-cover"
								/>
							</div>
							<div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-xl max-w-xs">
								<p className="italic text-primary-700">
									"Mỗi chương trình của chúng tôi không chỉ là giúp đỡ vật chất,
									mà còn là sự sẻ chia tinh thần và lan tỏa năng lượng tích
									cực."
								</p>
								<div className="mt-3 font-medium">- Ban điều hành CLB</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mission and Values */}
			<section className="py-16 bg-neutral-50">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Sứ mệnh & Giá trị cốt lõi
						</h2>
						<p className="text-lg text-neutral-600 max-w-3xl mx-auto">
							Chúng tôi hoạt động với những giá trị tốt đẹp và mục tiêu rõ ràng
							để tạo ra tác động tích cực đến cộng đồng.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 mb-12">
						<div className="bg-white p-8 rounded-lg shadow-md">
							<h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
							<ul className="space-y-4">
								<li className="flex">
									<div className="text-primary-700 mr-4 mt-1">
										<FaPeopleCarry size={20} />
									</div>
									<div>
										<p className="font-medium">
											Kết nối những trái tim nhân ái với những mảnh đời thiếu
											may mắn.
										</p>
									</div>
								</li>
								<li className="flex">
									<div className="text-primary-700 mr-4 mt-1">
										<FaHandHoldingHeart size={20} />
									</div>
									<div>
										<p className="font-medium">
											Tạo sân khấu cho những bạn trẻ chưa từng có cơ hội đứng
											trên ánh đèn.
										</p>
									</div>
								</li>
								<li className="flex">
									<div className="text-primary-700 mr-4 mt-1">
										<FaLightbulb size={20} />
									</div>
									<div>
										<p className="font-medium">
											Góp phần làm đẹp xã hội bằng hành động thiết thực.
										</p>
									</div>
								</li>
							</ul>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-md">
							<h3 className="text-2xl font-bold mb-4">Giá trị cốt lõi</h3>
							<div className="grid grid-cols-2 gap-4">
								<div className="p-4 bg-primary-50 rounded-lg">
									<div className="text-primary-700 mb-2">
										<FaHandshake size={24} />
									</div>
									<h4 className="font-semibold text-lg mb-1">Tình người</h4>
									<p className="text-sm text-neutral-600">
										Đặt con người và tình cảm chân thành lên hàng đầu
									</p>
								</div>
								<div className="p-4 bg-primary-50 rounded-lg">
									<div className="text-primary-700 mb-2">
										<FaHandshake size={24} />
									</div>
									<h4 className="font-semibold text-lg mb-1">Chân thành</h4>
									<p className="text-sm text-neutral-600">
										Hoạt động với sự chân thật và minh bạch
									</p>
								</div>
								<div className="p-4 bg-primary-50 rounded-lg">
									<div className="text-primary-700 mb-2">
										<FaHandshake size={24} />
									</div>
									<h4 className="font-semibold text-lg mb-1">Cống hiến</h4>
									<p className="text-sm text-neutral-600">
										Sẵn sàng trao đi và không ngừng nỗ lực
									</p>
								</div>
								<div className="p-4 bg-primary-50 rounded-lg">
									<div className="text-primary-700 mb-2">
										<FaHandshake size={24} />
									</div>
									<h4 className="font-semibold text-lg mb-1">Chuyên nghiệp</h4>
									<p className="text-sm text-neutral-600">
										Tổ chức mọi hoạt động một cách bài bản
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="text-center">
						<Button variant="primary" size="lg">
							<Link href="/volunteer">Tham gia cùng chúng tôi</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-16">
				<div className="container-custom">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Đội ngũ của chúng tôi
						</h2>
						<p className="text-lg text-neutral-600 max-w-3xl mx-auto">
							Những người trẻ đầy nhiệt huyết, tài năng và tâm huyết với công
							tác thiện nguyện.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								name: "Nguyễn Văn Hữu",
								role: "Chủ nhiệm CLB",
								image:
									"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
							},
							{
								name: "Trần Minh Trang",
								role: "Phó chủ nhiệm",
								image:
									"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
							},
							{
								name: "Lê Thanh Tùng",
								role: "Trưởng Ban Truyền thông",
								image:
									"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
							},
						].map((member, index) => (
							<div
								key={index}
								className="bg-white rounded-lg overflow-hidden shadow-md"
							>
								<div className="relative h-64 w-full">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-6 text-center">
									<h3 className="text-xl font-bold mb-1">{member.name}</h3>
									<p className="text-primary-600 mb-4">{member.role}</p>
									<div className="flex justify-center space-x-4">
										<a
											href="#"
											className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-colors"
										>
											<span className="sr-only">Facebook</span>
											<svg
												className="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
													clipRule="evenodd"
												/>
											</svg>
										</a>
										<a
											href="#"
											className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-700 hover:bg-primary-100 hover:text-primary-700 transition-colors"
										>
											<span className="sr-only">Email</span>
											<svg
												className="w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
