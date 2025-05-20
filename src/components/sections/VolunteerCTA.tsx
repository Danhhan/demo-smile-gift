"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "@/components/ui/Button";
import {
	FaUserPlus,
	FaPeopleCarry,
	FaMicrophone,
	FaCamera,
} from "react-icons/fa";

export default function VolunteerCTA() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
			transition={{ duration: 0.5 }}
			className="bg-white p-8 md:p-10 rounded-lg shadow-lg"
		>
			<h3 className="text-2xl font-bold mb-5">Trở thành Tình Nguyện Viên</h3>

			<p className="text-neutral-600 mb-6">
				Tham gia cùng Smile Gift để tạo ra những tác động tích cực đến cộng
				đồng. Bạn sẽ được trải nghiệm, học hỏi và phát triển cùng những người
				bạn tuyệt vời.
			</p>

			<div className="grid grid-cols-2 gap-3 mb-6">
				<div className="bg-primary-50 p-3 rounded-lg flex items-center">
					<FaPeopleCarry className="text-primary-700 mr-2" />
					<span className="text-sm">Tham gia công quả</span>
				</div>
				<div className="bg-primary-50 p-3 rounded-lg flex items-center">
					<FaMicrophone className="text-primary-700 mr-2" />
					<span className="text-sm">Hát, diễn, làm MC</span>
				</div>
				<div className="bg-primary-50 p-3 rounded-lg flex items-center">
					<FaCamera className="text-primary-700 mr-2" />
					<span className="text-sm">Hỗ trợ media</span>
				</div>
				<div className="bg-primary-50 p-3 rounded-lg flex items-center">
					<FaUserPlus className="text-primary-700 mr-2" />
					<span className="text-sm">Hỗ trợ tổ chức</span>
				</div>
			</div>

			<h4 className="font-semibold mb-3">Bạn sẽ nhận được:</h4>
			<ul className="list-disc pl-5 text-neutral-600 mb-6">
				<li>Cơ hội trải nghiệm thực tế các hoạt động cộng đồng</li>
				<li>Phát triển kỹ năng teamwork, tổ chức sự kiện</li>
				<li>Giấy chứng nhận cho các hoạt động</li>
				<li>Một gia đình đầy tiếng cười và sự tử tế</li>
			</ul>

			<Button variant="primary" size="lg" fullWidth leftIcon={<FaUserPlus />}>
				<Link href="/volunteer">Đăng ký tình nguyện viên</Link>
			</Button>
		</motion.div>
	);
}
