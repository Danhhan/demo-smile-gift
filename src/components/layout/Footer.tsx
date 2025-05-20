import Link from "next/link";
import Image from "next/image";
import {
	FaFacebook,
	FaYoutube,
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
	FaHeart,
} from "react-icons/fa";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-primary-800 text-white pt-16 pb-6">
			<div className="container-custom">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* About */}
					<div>
						<h4 className="text-xl font-bold mb-6 flex items-center">
							<FaHeart className="mr-2 text-accent-500" />
							CLB Thiện Nguyện Smile Gift
						</h4>
						<p className="mb-4 text-neutral-200">
							Kết nối nghệ thuật và lòng nhân ái - Nơi tập hợp những bạn trẻ yêu
							thích nghệ thuật và mong muốn dùng tài năng để trao đi yêu thương.
						</p>
						<div className="flex space-x-4 mt-6">
							<a
								href="https://www.facebook.com/smilegift.sg"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-primary-700 hover:bg-primary-600 transition-colors p-2 rounded-full"
								aria-label="Facebook"
							>
								<FaFacebook size={20} />
							</a>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-primary-700 hover:bg-primary-600 transition-colors p-2 rounded-full"
								aria-label="YouTube"
							>
								<FaYoutube size={20} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-xl font-bold mb-6">Liên kết nhanh</h4>
						<ul className="space-y-3">
							<li>
								<Link
									href="/about"
									className="text-neutral-200 hover:text-white transition-colors flex items-center"
								>
									<span className="text-secondary-500 mr-2">›</span> Giới thiệu
									CLB
								</Link>
							</li>
							<li>
								<Link
									href="/programs"
									className="text-neutral-200 hover:text-white transition-colors flex items-center"
								>
									<span className="text-secondary-500 mr-2">›</span> Dự án thiện
									nguyện
								</Link>
							</li>
							<li>
								<Link
									href="/volunteer"
									className="text-neutral-200 hover:text-white transition-colors flex items-center"
								>
									<span className="text-secondary-500 mr-2">›</span> Đăng ký
									tình nguyện viên
								</Link>
							</li>
							<li>
								<Link
									href="/reports"
									className="text-neutral-200 hover:text-white transition-colors flex items-center"
								>
									<span className="text-secondary-500 mr-2">›</span> Báo cáo tài
									chính
								</Link>
							</li>
							<li>
								<Link
									href="/donate"
									className="text-neutral-200 hover:text-white transition-colors flex items-center"
								>
									<span className="text-secondary-500 mr-2">›</span> Quyên góp
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-xl font-bold mb-6">Liên hệ</h4>
						<ul className="space-y-4">
							<li className="flex items-start">
								<FaPhone className="text-secondary-500 mt-1 mr-3 flex-shrink-0" />
								<div>
									<p className="font-medium">Hotline</p>
									<a
										href="tel:0355749581"
										className="text-neutral-200 hover:text-white"
									>
										0355.749.581
									</a>
								</div>
							</li>
							<li className="flex items-start">
								<FaEnvelope className="text-secondary-500 mt-1 mr-3 flex-shrink-0" />
								<div>
									<p className="font-medium">Email</p>
									<a
										href="mailto:smilegift.vn@gmail.com"
										className="text-neutral-200 hover:text-white"
									>
										smilegift.vn@gmail.com
									</a>
								</div>
							</li>
							<li className="flex items-start">
								<FaMapMarkerAlt className="text-secondary-500 mt-1 mr-3 flex-shrink-0" />
								<div>
									<p className="font-medium">Địa điểm hoạt động</p>
									<p className="text-neutral-200">
										TP.HCM – An Giang – các tỉnh miền Tây
									</p>
								</div>
							</li>
						</ul>
					</div>

					{/* Inspirational Quote */}
					<div className="bg-primary-700/50 rounded-lg p-6">
						<div className="relative">
							<div className="mb-4">
								<Image
									src="/images/logo-circle.png"
									alt="Smile Gift Logo"
									width={60}
									height={60}
									className="mx-auto"
								/>
							</div>
							<blockquote className="text-center">
								<p className="text-lg font-serif italic mb-4">
									"Đừng bao giờ từ chối nếu bạn vẫn còn cái để cho!"
								</p>
								<footer className="text-neutral-200">
									— Slogan của CLB Thiện Nguyện Smile Gift
								</footer>
							</blockquote>
						</div>
					</div>
				</div>

				<div className="mt-12 pt-6 border-t border-primary-600">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-neutral-300 text-sm">
							&copy; {currentYear} CLB Thiện Nguyện Smile Gift. All rights
							reserved.
						</p>
						<div className="flex items-center space-x-4 mt-4 md:mt-0">
							<a
								href="https://www.facebook.com/smilegift.sg"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-300 hover:text-white transition-colors"
								aria-label="Facebook"
							>
								<FaFacebook size={24} />
							</a>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-300 hover:text-white transition-colors"
								aria-label="YouTube"
							>
								<FaYoutube size={24} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
