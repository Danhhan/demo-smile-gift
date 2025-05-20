"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "@/components/ui/Button";
import {
	FaPeopleCarry,
	FaHandHoldingHeart,
	FaCalendarAlt,
} from "react-icons/fa";

export default function Hero() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.6, 0.05, 0.01, 0.9],
			},
		},
	};

	return (
		<div className="relative pt-20 bg-neutral-50">
			<div
				className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-primary-800/30"
				style={{ mixBlendMode: "multiply" }}
			/>

			<div className="absolute inset-0 overflow-hidden">
				<Image
					src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
					alt="Nụ cười của tình nguyện"
					fill
					priority
					style={{ objectFit: "cover", objectPosition: "center" }}
				/>
			</div>

			<div className="relative container-custom min-h-[80vh] flex flex-col justify-center py-20">
				<motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="max-w-3xl text-white"
				>
					<motion.div
						variants={itemVariants}
						className="mb-4 inline-block px-4 py-1 bg-primary-700/80 rounded-full text-sm font-medium"
					>
						CLB Thiện Nguyện Smile Gift
					</motion.div>

					<motion.h1
						variants={itemVariants}
						className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
					>
						Không phải ai cũng có sân khấu để tỏa sáng
					</motion.h1>

					<motion.p
						variants={itemVariants}
						className="text-xl mb-8 text-white/90 max-w-2xl"
					>
						Smile Gift tạo ra sân khấu cho những trái tim biết cho đi. Cùng nhau
						lan tỏa yêu thương và chia sẻ tài năng.
					</motion.p>

					<motion.div variants={itemVariants} className="flex flex-wrap gap-4">
						<Button
							variant="secondary"
							size="lg"
							leftIcon={<FaPeopleCarry />}
							className="shadow-lg"
						>
							<Link href="/volunteer">Đăng ký tình nguyện viên</Link>
						</Button>

						<Button
							variant="outline"
							size="lg"
							leftIcon={<FaHandHoldingHeart />}
							className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
						>
							<Link href="/donate">Ủng hộ hoạt động</Link>
						</Button>

						<Button
							variant="outline"
							size="lg"
							leftIcon={<FaCalendarAlt />}
							className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
						>
							<Link href="/programs">Xem các chương trình</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Subtle wave decoration at bottom */}
			<div className="absolute bottom-0 left-0 right-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 100"
					className="w-full"
				>
					<path
						fill="#FFFFFF"
						fillOpacity="1"
						d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
					></path>
				</svg>
			</div>
		</div>
	);
}
