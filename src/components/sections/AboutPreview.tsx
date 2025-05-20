"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";

export default function AboutPreview() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className="py-20">
			<div className="container-custom">
				<motion.div
					ref={ref}
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="grid md:grid-cols-2 gap-10 items-center"
				>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h2 className="title-underline text-3xl md:text-4xl font-bold mb-6">
							Hành trình lan tỏa yêu thương bằng nghệ thuật
						</h2>

						<p className="text-lg mb-6 text-neutral-700">
							CLB Thiện Nguyện Smile Gift ra đời từ tháng 9/2022 với sứ mệnh kết
							nối nghệ thuật và lòng nhân ái. Chúng tôi là nơi tập hợp những bạn
							trẻ yêu thích diễn xuất, ca hát, tổ chức sân khấu và mong muốn
							dùng tài năng để trao đi yêu thương.
						</p>

						<div className="mb-8 p-4 border-l-4 border-primary-700 bg-primary-50">
							<p className="text-primary-800 italic font-serif">
								"Đừng bao giờ từ chối nếu bạn vẫn còn cái để cho!"
							</p>
						</div>

						<h3 className="text-xl font-semibold mb-3">Giá trị cốt lõi</h3>
						<div className="grid grid-cols-2 gap-3 mb-8">
							<div className="bg-white p-3 rounded-lg shadow-sm border border-neutral-100">
								<div className="font-medium text-primary-700">Tình người</div>
							</div>
							<div className="bg-white p-3 rounded-lg shadow-sm border border-neutral-100">
								<div className="font-medium text-primary-700">Chân thành</div>
							</div>
							<div className="bg-white p-3 rounded-lg shadow-sm border border-neutral-100">
								<div className="font-medium text-primary-700">Cống hiến</div>
							</div>
							<div className="bg-white p-3 rounded-lg shadow-sm border border-neutral-100">
								<div className="font-medium text-primary-700">
									Chuyên nghiệp
								</div>
							</div>
						</div>

						<Button
							variant="primary"
							rightIcon={<FaArrowRight />}
							className="mt-2"
						>
							<Link href="/about">Tìm hiểu thêm về chúng tôi</Link>
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="relative aspect-[4/5] rounded-lg"
					>
						<div>
							<Image
								src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg"
								alt="Hoạt động thiện nguyện"
								fill
								className="object-cover rounded-lg"
							/>
						</div>

						<div className="absolute -bottom-10 -left-10 w-2/3 bg-white p-4 rounded-lg shadow-xl">
							<div className="bg-primary-50 p-4 rounded">
								<div className="text-sm text-primary-600 font-medium mb-1">
									Từ khi thành lập
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<div className="text-3xl font-bold text-primary-700">
											30+
										</div>
										<div className="text-sm text-neutral-600">Chương trình</div>
									</div>
									<div>
										<div className="text-3xl font-bold text-primary-700">
											100+
										</div>
										<div className="text-sm text-neutral-600">
											Tình nguyện viên
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
