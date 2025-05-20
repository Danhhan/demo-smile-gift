"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	FaCalendarAlt,
	FaUserAlt,
	FaFacebook,
	FaTwitter,
	FaLink,
	FaArrowLeft,
	FaArrowRight,
} from "react-icons/fa";
import Button from "@/components/ui/Button";
import { Metadata } from "next";

// Sample news data array
const allNews = [
	{
		id: 1,
		title: "Smile Gift: Nhóm bạn trẻ biến nghệ thuật thành thiện nguyện",
		excerpt:
			"Hành trình đặc biệt của những bạn trẻ dùng tài năng nghệ thuật để giúp đỡ cộng đồng và lan tỏa giá trị tốt đẹp trong xã hội.",
		date: "15/06/2025",
		author: "Minh Anh",
		image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
		category: "Truyền thông",
		content: `
      <p>Hành trình đặc biệt của những bạn trẻ dùng tài năng nghệ thuật để giúp đỡ cộng đồng và lan tỏa giá trị tốt đẹp trong xã hội bắt đầu từ một ý tưởng đơn giản: "Tại sao không kết hợp đam mê nghệ thuật với hoạt động thiện nguyện?"</p>
      
      <p>Từ ý tưởng đó, CLB Thiện Nguyện Smile Gift đã ra đời vào tháng 9/2022. Ban đầu chỉ với vài thành viên, nhưng sau hơn một năm hoạt động, CLB đã phát triển thành một tổ chức với hơn 100 tình nguyện viên tích cực.</p>
      
      <h2>Nghệ thuật vì cộng đồng</h2>
      
      <p>Điểm đặc biệt của Smile Gift là cách họ kết hợp nghệ thuật với hoạt động thiện nguyện. Thay vì chỉ đơn thuần gây quỹ hoặc phát quà, CLB tổ chức các đêm nhạc, kịch nghệ để vừa tạo sân chơi cho các bạn trẻ đam mê nghệ thuật, vừa quyên góp được nguồn quỹ cho các hoạt động từ thiện.</p>
      
      <p>"Chúng tôi tin rằng nghệ thuật có sức mạnh kết nối con người và lan tỏa những giá trị tốt đẹp. Khi một người xem được truyền cảm hứng bởi một tiết mục, họ sẽ sẵn sàng chung tay giúp đỡ những hoàn cảnh khó khăn hơn", anh Nguyễn Văn Hữu - Chủ nhiệm CLB chia sẻ.</p>
      
      <h2>Những con số ấn tượng</h2>
      
      <p>Sau hơn một năm hoạt động, Smile Gift đã đạt được những kết quả đáng ghi nhận:</p>
      <ul>
        <li>Tổ chức hơn 30 chương trình thiện nguyện</li>
        <li>Gây quỹ được hơn 300 triệu đồng</li>
        <li>Hỗ trợ hơn 500 hoàn cảnh khó khăn</li>
        <li>Kết nối hơn 100 tình nguyện viên</li>
      </ul>
      
      <h2>Hướng đến tương lai</h2>
      
      <p>Với slogan "Đừng bao giờ từ chối nếu bạn vẫn còn cái để cho", Smile Gift đặt mục tiêu mở rộng hoạt động và tạo thêm nhiều sân chơi nghệ thuật ý nghĩa cho cộng đồng. CLB cũng đang xây dựng các chương trình đào tạo để giúp các tình nguyện viên phát triển kỹ năng biểu diễn và tổ chức sự kiện.</p>
    `,
	},
	{
		id: 2,
		title: "Họ là những người trẻ, hát để sẻ chia – diễn để lan tỏa",
		excerpt:
			"Câu chuyện cảm động về những tình nguyện viên đầy nhiệt huyết, dùng giọng hát và khả năng diễn xuất để mang lại niềm vui cho người khó khăn.",
		date: "02/06/2025",
		author: "Thanh Tùng",
		image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
		category: "Truyền thông",
	},
	{
		id: 4,
		title:
			'Chiến dịch "Mắt sáng cho người già" đạt mục tiêu phẫu thuật cho 100 bệnh nhân',
		excerpt:
			"Sau 3 tháng phát động, chiến dịch đã hỗ trợ chi phí phẫu thuật mắt cho 100 người cao tuổi có hoàn cảnh khó khăn.",
		date: "05/05/2025",
		author: "Quốc Tuấn",
		image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
		category: "Truyền thông",
	},
	{
		id: 5,
		title:
			"Gương mặt TNV tiêu biểu: Nguyễn Thành Trung và hành trình 20 chương trình thiện nguyện",
		excerpt:
			"Câu chuyện cảm động về chàng trai 22 tuổi đã tham gia hơn 20 chương trình thiện nguyện cùng Smile Gift.",
		date: "28/04/2025",
		author: "Thu Hương",
		image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
		category: "Truyền thông",
	},
];

export default function NewsDetailPage({ params }: { params: { id: string } }) {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const id = Number(params.id);
	const news = allNews.find((item) => item.id === id);

	// Get related news (same category, excluding current)
	const relatedNews = allNews
		.filter((item) => item.category === news?.category && item.id !== id)
		.slice(0, 3);

	if (!news) {
		return (
			<div className="pt-24 min-h-screen bg-neutral-50">
				<div className="container-custom py-16 text-center">
					<h1 className="text-3xl font-bold mb-4">Không tìm thấy bài viết</h1>
					<p className="mb-8">Bài viết này không tồn tại hoặc đã bị xóa.</p>
					<Button variant="primary">
						<Link href="/news" className="flex items-center">
							<FaArrowLeft className="mr-2" />
							<span>Quay lại tin tức</span>
						</Link>
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="pt-24">
			{/* Hero Section */}
			<div className="relative bg-primary-800 text-white py-16">
				<div className="absolute inset-0 overflow-hidden">
					<Image
						src={news.image}
						alt={news.title}
						fill
						style={{ objectFit: "cover", objectPosition: "center" }}
						className="opacity-20"
						priority
					/>
				</div>
				<div className="container-custom relative z-10">
					<div className="max-w-3xl">
						<div className="flex items-center space-x-4 mb-4">
							<span className="bg-primary-700 text-white text-sm font-medium px-3 py-1 rounded-full">
								{news.category}
							</span>
							<time
								dateTime={news.date.split("/").reverse().join("-")}
								className="flex items-center text-neutral-200"
							>
								<FaCalendarAlt className="mr-2" size={14} />
								{news.date}
							</time>
							<div className="flex items-center text-neutral-200">
								<FaUserAlt className="mr-2" size={14} />
								{news.author}
							</div>
						</div>

						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							{news.title}
						</h1>
						<p className="text-xl mb-4 text-neutral-200">{news.excerpt}</p>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<section className="py-16">
				<div className="container-custom">
					<div className="grid grid-cols-12 gap-8">
						{/* Main Content */}
						<div ref={ref} className="col-span-12 lg:col-span-8">
							<div className="bg-white rounded-lg shadow-md overflow-hidden">
								<div className="relative aspect-video w-full">
									<Image
										src={news.image}
										alt={`Hình ảnh minh họa: ${news.title}`}
										fill
										className="object-cover"
									/>
								</div>

								<div className="p-8">
									<article className="prose prose-lg max-w-none">
										<div dangerouslySetInnerHTML={{ __html: news.content }} />
									</article>

									{/* Share */}
									<div className="mt-8 pt-8 border-t">
										<h3 className="text-lg font-semibold mb-4">
											Chia sẻ bài viết
										</h3>
										<div className="flex space-x-4">
											<button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877f2] text-white hover:bg-[#166fe5] transition-colors">
												<FaFacebook size={20} />
											</button>
											<button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1da1f2] text-white hover:bg-[#1a91da] transition-colors">
												<FaTwitter size={20} />
											</button>
											<button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-200 text-neutral-700 hover:bg-neutral-300 transition-colors">
												<FaLink size={20} />
											</button>
										</div>
									</div>
								</div>
							</div>

							{/* Navigation */}
							<div className="mt-8">
								<Button variant="outline">
									<Link href="/news" className="flex items-center">
										<FaArrowLeft className="mr-2" />
										<span>Quay lại tin tức</span>
									</Link>
								</Button>
							</div>
						</div>

						{/* Sidebar */}
						<div className="col-span-12 lg:col-span-4">
							{/* Author Info */}
							{/* <div className="bg-white p-6 rounded-lg shadow-md mb-8">
								<h3 className="text-lg font-semibold mb-4">Về tác giả</h3>
								<div className="flex items-center">
									<div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
										<Image
											src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
											alt={news.author}
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<div className="font-semibold">{news.author}</div>
										<div className="text-sm text-neutral-500">Phóng viên</div>
									</div>
								</div>
							</div> */}

							{/* Related Posts */}
							<div className="bg-white rounded-lg shadow-md overflow-hidden">
								<div className="p-6 bg-primary-50">
									<h3 className="text-lg font-semibold text-primary-800">
										Bài viết liên quan
									</h3>
								</div>
								<div className="divide-y divide-neutral-100">
									{relatedNews.map((item) => (
										<Link
											href={`/news/${item.id}`}
											key={item.id}
											className="block hover:bg-neutral-50 transition-colors"
										>
											<div className="p-6">
												<div className="flex items-start space-x-4">
													<div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
														<Image
															src={item.image}
															alt={item.title}
															fill
															className="object-cover"
														/>
													</div>
													<div className="flex-1">
														<h4 className="font-medium text-neutral-900 line-clamp-2 mb-2 group-hover:text-primary-700 transition-colors">
															{item.title}
														</h4>
														<div className="flex items-center text-sm text-neutral-500">
															<FaCalendarAlt size={12} className="mr-2" />
															<time
																dateTime={item.date
																	.split("/")
																	.reverse()
																	.join("-")}
															>
																{item.date}
															</time>
														</div>
													</div>
													<div className="text-primary-600 flex-shrink-0">
														<FaArrowRight size={16} />
													</div>
												</div>
											</div>
										</Link>
									))}
								</div>
								<div className="p-4 bg-primary-50 text-center">
									<Button variant="primary" size="sm">
										<Link href="/news" className="flex items-center">
											Xem tất cả tin tức
										</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
