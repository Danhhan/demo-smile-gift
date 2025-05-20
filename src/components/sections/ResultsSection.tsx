"use client";

import React from "react";
import {
	Users,
	Heart,
	DollarSign,
	Gift,
	Coffee,
	Award,
	Clock,
} from "lucide-react";

interface ResultsSectionProps {
	results: any;
	category: string;
}

export default function ResultsSection({
	results,
	category,
}: ResultsSectionProps) {
	const getIconsForCategory = () => {
		switch (category.toLowerCase()) {
			case "gây quỹ":
				return {
					primary: DollarSign,
					secondary: Award,
				};
			case "công quả":
				return {
					primary: Heart,
					secondary: Coffee,
				};
			case "tặng quà":
				return {
					primary: Gift,
					secondary: Heart,
				};
			case "y tế":
				return {
					primary: Users,
					secondary: Heart,
				};
			default:
				return {
					primary: Heart,
					secondary: Users,
				};
		}
	};

	const icons = getIconsForCategory();
	const PrimaryIcon = icons.primary;
	const SecondaryIcon = icons.secondary;

	return (
		<div>
			<h2 className="text-2xl font-bold mb-6">Kết quả chương trình</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
				{results.volunteersParticipated && (
					<div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
						<div className="flex items-center mb-2">
							<Users className="h-5 w-5 mr-2 text-black" />
							<h3 className="font-semibold">Tình nguyện viên tham gia</h3>
						</div>
						<p className="text-3xl font-bold">
							{results.volunteersParticipated} người
						</p>
					</div>
				)}

				{results.beneficiaries && (
					<div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
						<div className="flex items-center mb-2">
							<Heart className="h-5 w-5 mr-2 text-red-500" />
							<h3 className="font-semibold">Người được hỗ trợ</h3>
						</div>
						<p className="text-3xl font-bold">{results.beneficiaries} người</p>
					</div>
				)}

				{results.fundsRaised && (
					<div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
						<div className="flex items-center mb-2">
							<DollarSign className="h-5 w-5 mr-2 text-green-500" />
							<h3 className="font-semibold">Số tiền quyên góp được</h3>
						</div>
						<p className="text-3xl font-bold">{results.fundsRaised}</p>
					</div>
				)}

				{results.giftsDistributed && (
					<div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
						<div className="flex items-center mb-2">
							<Gift className="h-5 w-5 mr-2 text-purple-500" />
							<h3 className="font-semibold">Số phần quà đã phát</h3>
						</div>
						<p className="text-3xl font-bold">
							{results.giftsDistributed} phần
						</p>
					</div>
				)}

				{results.mealsServed && (
					<div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
						<div className="flex items-center mb-2">
							<Coffee className="h-5 w-5 mr-2 text-amber-500" />
							<h3 className="font-semibold">Số suất ăn đã phục vụ</h3>
						</div>
						<p className="text-3xl font-bold">{results.mealsServed} suất</p>
					</div>
				)}

				{results.scholarshipsAwarded && (
					<div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
						<div className="flex items-center mb-2">
							<Award className="h-5 w-5 mr-2 text-blue-500" />
							<h3 className="font-semibold">Số suất học bổng</h3>
						</div>
						<p className="text-3xl font-bold">
							{results.scholarshipsAwarded} suất
						</p>
						<p className="text-sm text-gray-500">
							Mỗi suất: {results.scholarshipAmount}
						</p>
					</div>
				)}

				{results.attendees && (
					<div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
						<div className="flex items-center mb-2">
							<Users className="h-5 w-5 mr-2 text-indigo-500" />
							<h3 className="font-semibold">Số người tham dự</h3>
						</div>
						<p className="text-3xl font-bold">{results.attendees} người</p>
					</div>
				)}
			</div>

			<div className="relative p-6 rounded-lg border border-black/30 bg-black/5">
				<div className="absolute -top-4 -left-4 bg-black text-white p-3 rounded-full">
					<PrimaryIcon className="h-6 w-6" />
				</div>

				<div className="ml-4">
					<h3 className="text-xl font-bold mb-2">Thành quả đáng tự hào</h3>
					<p className="text-gray-600">
						{category === "Gây quỹ" &&
							"Nhờ sự đóng góp nhiệt tình của quý vị, chúng tôi đã quyên góp được khoản tiền ý nghĩa để hỗ trợ những hoàn cảnh khó khăn."}
						{category === "Công quả" &&
							"Với tinh thần tương thân tương ái, chúng tôi đã mang đến những hỗ trợ thiết thực cho cộng đồng."}
						{category === "Tặng quà" &&
							"Những phần quà tuy nhỏ nhưng chứa đựng tình cảm lớn, mang lại niềm vui và sự ấm áp cho người nhận."}
						{category === "Y tế" &&
							"Hoạt động y tế cộng đồng đã giúp nhiều người được tiếp cận với dịch vụ chăm sóc sức khỏe cần thiết."}
					</p>
				</div>
			</div>
		</div>
	);
}
