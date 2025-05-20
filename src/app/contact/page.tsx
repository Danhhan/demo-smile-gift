"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import {
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
	FaFacebook,
	FaCheckCircle,
} from "react-icons/fa";
import Button from "@/components/ui/Button";

type ContactFormData = {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
};

export default function ContactPage() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormData>();

	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const onSubmit = (data: ContactFormData) => {
		console.log(data);
		setIsSubmitted(true);
		// In a real app, this would submit to a server
	};

	return (
		<div className="pt-24">
			{/* Hero Section */}
			<div className="relative bg-primary-800 text-white py-16">
				<div className="absolute inset-0 overflow-hidden">
					<Image
						src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg"
						alt="Liên hệ"
						fill
						style={{ objectFit: "cover", objectPosition: "center" }}
						className="opacity-20"
					/>
				</div>
				<div className="container-custom relative z-10">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Liên hệ với Smile Gift
						</h1>
						<p className="text-xl mb-4 text-neutral-200">
							Chúng tôi luôn sẵn sàng lắng nghe ý kiến đóng góp, câu hỏi hoặc đề
							xuất của bạn.
						</p>
					</div>
				</div>
			</div>

			{/* Contact Info & Form */}
			<section className="py-16">
				<div className="container-custom">
					<motion.div
						ref={ref}
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.5 }}
						className="grid md:grid-cols-2 gap-10"
					>
						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<h2 className="text-3xl font-bold mb-6">Thông tin liên hệ</h2>

							<div className="space-y-6 mb-10">
								<div className="flex">
									<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mr-4">
										<FaPhone />
									</div>
									<div>
										<h3 className="text-lg font-semibold mb-1">Hotline</h3>
										<p className="text-neutral-600">
											<a
												href="tel:0355749581"
												className="hover:text-primary-700"
											>
												0355.749.581
											</a>
										</p>
									</div>
								</div>

								<div className="flex">
									<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mr-4">
										<FaEnvelope />
									</div>
									<div>
										<h3 className="text-lg font-semibold mb-1">Email</h3>
										<p className="text-neutral-600">
											<a
												href="mailto:smilegift.vn@gmail.com"
												className="hover:text-primary-700"
											>
												smilegift.vn@gmail.com
											</a>
										</p>
									</div>
								</div>

								<div className="flex">
									<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mr-4">
										<FaMapMarkerAlt />
									</div>
									<div>
										<h3 className="text-lg font-semibold mb-1">
											Địa điểm hoạt động
										</h3>
										<p className="text-neutral-600">
											TP.HCM – An Giang – các tỉnh miền Tây
										</p>
									</div>
								</div>

								<div className="flex">
									<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mr-4">
										<FaFacebook />
									</div>
									<div>
										<h3 className="text-lg font-semibold mb-1">Mạng xã hội</h3>
										<p className="text-neutral-600">
											<a
												href="https://www.facebook.com/smilegift.sg"
												target="_blank"
												rel="noopener noreferrer"
												className="hover:text-primary-700"
											>
												facebook.com/smilegift.sg
											</a>
										</p>
									</div>
								</div>
							</div>

							<div className="mb-8">
								<h3 className="text-xl font-semibold mb-4">Giờ làm việc</h3>
								<p className="mb-2">
									<span className="font-medium">Thứ 2 - Thứ 6:</span> 9:00 -
									18:00
								</p>
								<p>
									<span className="font-medium">Thứ 7 - Chủ nhật:</span> Theo
									lịch chương trình
								</p>
							</div>

							<div className="bg-primary-50 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-4">
									Bạn muốn tổ chức sự kiện thiện nguyện?
								</h3>
								<p className="mb-4">
									Chúng tôi sẵn sàng hỗ trợ bạn tổ chức các chương trình gây
									quỹ, sự kiện thiện nguyện cho cộng đồng.
								</p>
								<Button variant="primary">
									<a href="tel:0355749581">Gọi ngay để được tư vấn</a>
								</Button>
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<h2 className="text-3xl font-bold mb-6">
								Gửi tin nhắn cho chúng tôi
							</h2>

							{!isSubmitted ? (
								<form
									onSubmit={handleSubmit(onSubmit)}
									className="bg-white p-8 rounded-lg shadow-md"
								>
									<div className="mb-6">
										<label
											htmlFor="name"
											className="block text-sm font-medium text-neutral-700 mb-1"
										>
											Họ và tên <span className="text-accent-500">*</span>
										</label>
										<input
											id="name"
											type="text"
											className={`w-full px-4 py-2 border ${
												errors.name ? "border-accent-500" : "border-neutral-300"
											} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
											{...register("name", { required: true })}
										/>
										{errors.name && (
											<span className="text-sm text-accent-500 mt-1">
												Vui lòng nhập họ tên của bạn
											</span>
										)}
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-neutral-700 mb-1"
											>
												Email <span className="text-accent-500">*</span>
											</label>
											<input
												id="email"
												type="email"
												className={`w-full px-4 py-2 border ${
													errors.email
														? "border-accent-500"
														: "border-neutral-300"
												} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
												{...register("email", {
													required: true,
													pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												})}
											/>
											{errors.email && (
												<span className="text-sm text-accent-500 mt-1">
													Vui lòng nhập email hợp lệ
												</span>
											)}
										</div>

										<div>
											<label
												htmlFor="phone"
												className="block text-sm font-medium text-neutral-700 mb-1"
											>
												Số điện thoại
											</label>
											<input
												id="phone"
												type="tel"
												className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
												{...register("phone")}
											/>
										</div>
									</div>

									<div className="mb-6">
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-neutral-700 mb-1"
										>
											Chủ đề <span className="text-accent-500">*</span>
										</label>
										<select
											id="subject"
											className={`w-full px-4 py-2 border ${
												errors.subject
													? "border-accent-500"
													: "border-neutral-300"
											} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
											{...register("subject", { required: true })}
										>
											<option value="">-- Chọn chủ đề --</option>
											<option value="volunteer">
												Đăng ký tình nguyện viên
											</option>
											<option value="donation">Quyên góp</option>
											<option value="partnership">Hợp tác</option>
											<option value="event">Tổ chức sự kiện</option>
											<option value="other">Khác</option>
										</select>
										{errors.subject && (
											<span className="text-sm text-accent-500 mt-1">
												Vui lòng chọn chủ đề
											</span>
										)}
									</div>

									<div className="mb-6">
										<label
											htmlFor="message"
											className="block text-sm font-medium text-neutral-700 mb-1"
										>
											Tin nhắn <span className="text-accent-500">*</span>
										</label>
										<textarea
											id="message"
											rows={6}
											className={`w-full px-4 py-2 border ${
												errors.message
													? "border-accent-500"
													: "border-neutral-300"
											} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
											{...register("message", { required: true })}
										></textarea>
										{errors.message && (
											<span className="text-sm text-accent-500 mt-1">
												Vui lòng nhập nội dung tin nhắn
											</span>
										)}
									</div>

									<Button type="submit" variant="primary" size="lg" fullWidth>
										Gửi tin nhắn
									</Button>
								</form>
							) : (
								<div className="bg-white p-8 rounded-lg shadow-md text-center">
									<div className="text-primary-600 mb-4">
										<FaCheckCircle size={60} className="mx-auto" />
									</div>
									<h3 className="text-2xl font-bold mb-4">
										Cảm ơn bạn đã liên hệ!
									</h3>
									<p className="text-lg mb-6">
										Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong
										thời gian sớm nhất có thể.
									</p>
									<Button
										variant="outline"
										onClick={() => setIsSubmitted(false)}
									>
										Gửi tin nhắn khác
									</Button>
								</div>
							)}
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Map Section */}
			<section className="py-16 bg-neutral-50">
				<div className="container-custom">
					<h2 className="text-3xl font-bold mb-10 text-center">
						Khu vực hoạt động
					</h2>

					<div className="bg-white p-4 rounded-lg shadow-md">
						<div className="aspect-[16/9] bg-neutral-200 relative">
							<div className="absolute inset-0 flex items-center justify-center text-neutral-500">
								[Bản đồ khu vực hoạt động]
							</div>
						</div>
					</div>

					<div className="mt-8 text-center">
						<p className="text-lg">
							CLB Thiện Nguyện Smile Gift chủ yếu hoạt động tại TP.HCM, An Giang
							và các tỉnh miền Tây Nam Bộ.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
