"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import {
	FaPeopleCarry,
	FaMicrophone,
	FaCamera,
	FaUsers,
	FaHandshake,
	FaSmile,
	FaGraduationCap,
} from "react-icons/fa";
import Button from "@/components/ui/Button";

type VolunteerFormData = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	birthDate: string;
	address: string;
	occupation: string;
	skills: string[];
	availability: string[];
	reason: string;
	hearAbout: string;
	agreeTerms: boolean;
};

export default function VolunteerPage() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<VolunteerFormData>();

	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const onSubmit = (data: VolunteerFormData) => {
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
						src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
						alt="Tình nguyện viên"
						fill
						style={{ objectFit: "cover", objectPosition: "center" }}
						className="opacity-20"
					/>
				</div>
				<div className="container-custom relative z-10">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Trở thành Tình Nguyện Viên
						</h1>
						<p className="text-xl mb-4 text-neutral-200">
							Hãy cùng Smile Gift lan tỏa yêu thương và sáng tạo những giá trị
							tốt đẹp cho cộng đồng.
						</p>
					</div>
				</div>
			</div>

			{/* Benefits Section */}
			<section className="py-16">
				<div className="container-custom">
					<motion.div
						ref={ref}
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.5 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Bạn sẽ nhận được gì?
						</h2>
						<p className="text-lg text-neutral-600 max-w-3xl mx-auto">
							Tham gia Smile Gift không chỉ là cơ hội để đóng góp cho cộng đồng
							mà còn là hành trình phát triển bản thân đầy ý nghĩa.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
						{[
							{
								icon: <FaUsers />,
								title: "Kết nối",
								description:
									"Gặp gỡ và làm việc với những người bạn tuyệt vời có cùng đam mê và giá trị.",
							},
							{
								icon: <FaGraduationCap />,
								title: "Học hỏi",
								description:
									"Phát triển kỹ năng tổ chức, truyền thông, teamwork và nhiều kỹ năng mềm khác.",
							},
							{
								icon: <FaHandshake />,
								title: "Trải nghiệm",
								description:
									"Tham gia các chương trình thiện nguyện thực tế với những tác động tích cực.",
							},
							{
								icon: <FaSmile />,
								title: "Niềm vui",
								description:
									"Cảm nhận niềm hạnh phúc khi thấy nụ cười trên gương mặt của những người nhận hỗ trợ.",
							},
						].map((benefit, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-white p-6 rounded-lg shadow-md text-center"
							>
								<div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary-700 rounded-full mb-4 text-2xl">
									{benefit.icon}
								</div>
								<h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
								<p className="text-neutral-600">{benefit.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Volunteer Roles */}
			<section className="py-16 bg-neutral-50">
				<div className="container-custom">
					<h2 className="text-3xl font-bold mb-10 text-center">
						Các vị trí tình nguyện viên
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: <FaPeopleCarry />,
								title: "Tham gia công quả",
								description:
									"Hỗ trợ tại các buổi phát quà, phát cơm, công quả tại chùa và các hoạt động thiện nguyện trực tiếp.",
								skills: ["Siêng năng", "Chăm chỉ", "Nhiệt tình"],
							},
							{
								icon: <FaMicrophone />,
								title: "Hát, diễn, làm MC",
								description:
									"Tham gia biểu diễn trong các đêm nhạc, sự kiện gây quỹ, hoặc làm MC dẫn chương trình.",
								skills: ["Ca hát", "Diễn xuất", "Kỹ năng trình bày"],
							},
							{
								icon: <FaCamera />,
								title: "Hỗ trợ media",
								description:
									"Chụp ảnh, quay video, thiết kế đồ họa, viết bài, xử lý hậu kỳ cho các chương trình.",
								skills: ["Nhiếp ảnh", "Chỉnh sửa", "Thiết kế"],
							},
						].map((role, index) => (
							<div
								key={index}
								className="bg-white rounded-lg shadow-md overflow-hidden"
							>
								<div className="bg-primary-700 text-white p-6 text-center">
									<div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4 text-2xl">
										{role.icon}
									</div>
									<h3 className="text-xl font-bold">{role.title}</h3>
								</div>

								<div className="p-6">
									<p className="mb-4 text-neutral-600">{role.description}</p>

									<div className="mb-4">
										<h4 className="font-semibold mb-2">Kỹ năng cần có:</h4>
										<div className="flex flex-wrap gap-2">
											{role.skills.map((skill, i) => (
												<span
													key={i}
													className="inline-block bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-sm"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Registration Form */}
			<section className="py-16">
				<div className="container-custom">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold mb-6 text-center">
							Đăng ký tham gia
						</h2>
						<p className="text-lg text-center mb-10 text-neutral-600">
							Điền thông tin bên dưới để đăng ký trở thành tình nguyện viên của
							CLB Thiện Nguyện Smile Gift.
						</p>

						{!isSubmitted ? (
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="bg-white p-8 rounded-lg shadow-md"
							>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
									<div>
										<label
											htmlFor="firstName"
											className="block text-sm font-medium text-neutral-700 mb-1"
										>
											Họ <span className="text-accent-500">*</span>
										</label>
										<input
											id="firstName"
											type="text"
											className={`w-full px-4 py-2 border ${
												errors.firstName
													? "border-accent-500"
													: "border-neutral-300"
											} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
											{...register("firstName", { required: true })}
										/>
										{errors.firstName && (
											<span className="text-sm text-accent-500 mt-1">
												Vui lòng nhập họ của bạn
											</span>
										)}
									</div>

									<div>
										<label
											htmlFor="lastName"
											className="block text-sm font-medium text-neutral-700 mb-1"
										>
											Tên <span className="text-accent-500">*</span>
										</label>
										<input
											id="lastName"
											type="text"
											className={`w-full px-4 py-2 border ${
												errors.lastName
													? "border-accent-500"
													: "border-neutral-300"
											} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
											{...register("lastName", { required: true })}
										/>
										{errors.lastName && (
											<span className="text-sm text-accent-500 mt-1">
												Vui lòng nhập tên của bạn
											</span>
										)}
									</div>
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
												Vui lòng nhập địa chỉ email hợp lệ
											</span>
										)}
									</div>

									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-neutral-700 mb-1"
										>
											Số điện thoại <span className="text-accent-500">*</span>
										</label>
										<input
											id="phone"
											type="tel"
											className={`w-full px-4 py-2 border ${
												errors.phone
													? "border-accent-500"
													: "border-neutral-300"
											} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
											{...register("phone", { required: true })}
										/>
										{errors.phone && (
											<span className="text-sm text-accent-500 mt-1">
												Vui lòng nhập số điện thoại
											</span>
										)}
									</div>
								</div>

								<div className="mb-6">
									<label
										htmlFor="birthDate"
										className="block text-sm font-medium text-neutral-700 mb-1"
									>
										Ngày sinh <span className="text-accent-500">*</span>
									</label>
									<input
										id="birthDate"
										type="date"
										className={`w-full px-4 py-2 border ${
											errors.birthDate
												? "border-accent-500"
												: "border-neutral-300"
										} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
										{...register("birthDate", { required: true })}
									/>
									{errors.birthDate && (
										<span className="text-sm text-accent-500 mt-1">
											Vui lòng chọn ngày sinh
										</span>
									)}
								</div>

								<div className="mb-6">
									<label
										htmlFor="address"
										className="block text-sm font-medium text-neutral-700 mb-1"
									>
										Địa chỉ
									</label>
									<input
										id="address"
										type="text"
										className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
										{...register("address")}
									/>
								</div>

								<div className="mb-6">
									<label
										htmlFor="occupation"
										className="block text-sm font-medium text-neutral-700 mb-1"
									>
										Nghề nghiệp / Trường học
									</label>
									<input
										id="occupation"
										type="text"
										className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
										{...register("occupation")}
									/>
								</div>

								<div className="mb-6">
									<label className="block text-sm font-medium text-neutral-700 mb-3">
										Kỹ năng và sở thích{" "}
										<span className="text-accent-500">*</span>
									</label>

									<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
										{[
											"Ca hát",
											"Diễn xuất",
											"MC",
											"Nhiếp ảnh",
											"Thiết kế",
											"Viết lách",
											"Tổ chức sự kiện",
											"Kỹ năng giao tiếp",
										].map((skill) => (
											<div key={skill} className="flex items-center">
												<input
													id={`skill-${skill}`}
													type="checkbox"
													value={skill}
													className="h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
													{...register("skills")}
												/>
												<label
													htmlFor={`skill-${skill}`}
													className="ml-2 text-sm text-neutral-700"
												>
													{skill}
												</label>
											</div>
										))}
									</div>
								</div>

								<div className="mb-6">
									<label className="block text-sm font-medium text-neutral-700 mb-3">
										Thời gian có thể tham gia{" "}
										<span className="text-accent-500">*</span>
									</label>

									<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
										{[
											"Thứ 2-6 (buổi tối)",
											"Thứ 7-CN (buổi sáng)",
											"Thứ 7-CN (buổi chiều)",
											"Toàn thời gian",
											"Tùy dự án",
										].map((time) => (
											<div key={time} className="flex items-center">
												<input
													id={`time-${time}`}
													type="checkbox"
													value={time}
													className="h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
													{...register("availability")}
												/>
												<label
													htmlFor={`time-${time}`}
													className="ml-2 text-sm text-neutral-700"
												>
													{time}
												</label>
											</div>
										))}
									</div>
								</div>

								<div className="mb-6">
									<label
										htmlFor="reason"
										className="block text-sm font-medium text-neutral-700 mb-1"
									>
										Lý do bạn muốn tham gia CLB Thiện Nguyện Smile Gift{" "}
										<span className="text-accent-500">*</span>
									</label>
									<textarea
										id="reason"
										rows={4}
										className={`w-full px-4 py-2 border ${
											errors.reason ? "border-accent-500" : "border-neutral-300"
										} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
										{...register("reason", { required: true })}
									></textarea>
									{errors.reason && (
										<span className="text-sm text-accent-500 mt-1">
											Vui lòng chia sẻ lý do bạn muốn tham gia
										</span>
									)}
								</div>

								<div className="mb-8">
									<label
										htmlFor="hearAbout"
										className="block text-sm font-medium text-neutral-700 mb-1"
									>
										Bạn biết đến CLB qua đâu?
									</label>
									<select
										id="hearAbout"
										className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
										{...register("hearAbout")}
									>
										<option value="">-- Chọn --</option>
										<option value="facebook">Facebook</option>
										<option value="friend">Bạn bè giới thiệu</option>
										<option value="event">Sự kiện</option>
										<option value="other">Khác</option>
									</select>
								</div>

								<div className="mb-8">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<input
												id="agreeTerms"
												type="checkbox"
												className={`h-4 w-4 text-primary-600 border ${
													errors.agreeTerms
														? "border-accent-500"
														: "border-neutral-300"
												} rounded focus:ring-primary-500`}
												{...register("agreeTerms", { required: true })}
											/>
										</div>
										<div className="ml-3 text-sm">
											<label htmlFor="agreeTerms" className="text-neutral-700">
												Tôi đồng ý với{" "}
												<a
													href="#"
													className="text-primary-700 hover:underline"
												>
													điều khoản
												</a>{" "}
												và{" "}
												<a
													href="#"
													className="text-primary-700 hover:underline"
												>
													chính sách bảo mật
												</a>{" "}
												của CLB <span className="text-accent-500">*</span>
											</label>
											{errors.agreeTerms && (
												<p className="text-accent-500 mt-1">
													Bạn cần đồng ý với điều khoản và chính sách
												</p>
											)}
										</div>
									</div>
								</div>

								<Button type="submit" variant="primary" size="lg" fullWidth>
									Đăng ký tham gia
								</Button>
							</form>
						) : (
							<div className="bg-white p-8 rounded-lg shadow-md text-center">
								<div className="inline-flex items-center justify-center w-20 h-20 bg-primary-50 text-primary-700 rounded-full mb-6 text-3xl">
									<FaSmile />
								</div>
								<h3 className="text-2xl font-bold mb-4">
									Cảm ơn bạn đã đăng ký!
								</h3>
								<p className="text-lg mb-6">
									Thông tin đăng ký của bạn đã được ghi nhận. Chúng tôi sẽ liên
									hệ với bạn trong thời gian sớm nhất để thông báo về các bước
									tiếp theo.
								</p>
								<Button variant="outline" onClick={() => setIsSubmitted(false)}>
									Quay lại form đăng ký
								</Button>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-16 bg-primary-50">
				<div className="container-custom">
					<h2 className="text-3xl font-bold mb-10 text-center">
						Chia sẻ từ các tình nguyện viên
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								quote:
									"Tham gia Smile Gift đã thay đổi cuộc sống của tôi. Tôi không chỉ được giúp đỡ người khác mà còn tìm thấy một gia đình thứ hai.",
								name: "Nguyễn Minh Huy",
								role: "TNV từ 2023",
								image:
									"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
							},
							{
								quote:
									"Được dùng giọng hát của mình để mang lại niềm vui cho người khác là điều tuyệt vời nhất. Tôi rất tự hào khi là thành viên của Smile Gift.",
								name: "Lê Thị Mai",
								role: "TNV từ 2022",
								image:
									"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
							},
							{
								quote:
									"Những kỹ năng tổ chức sự kiện, làm việc nhóm mà tôi học được từ Smile Gift đã giúp ích rất nhiều cho công việc và cuộc sống.",
								name: "Trần Văn Nam",
								role: "TNV từ 2024",
								image:
									"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
							},
						].map((testimonial, index) => (
							<div key={index} className="bg-white p-6 rounded-lg shadow-md">
								<div className="text-primary-300 mb-4">
									<svg
										className="w-8 h-8"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
									</svg>
								</div>
								<p className="mb-6 text-neutral-600 italic">
									{testimonial.quote}
								</p>
								<div className="flex items-center">
									<div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
										<Image
											src={testimonial.image}
											alt={testimonial.name}
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<div className="font-semibold">{testimonial.name}</div>
										<div className="text-sm text-neutral-500">
											{testimonial.role}
										</div>
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
