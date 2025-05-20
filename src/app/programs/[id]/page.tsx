"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	FaCalendar as Calendar,
	FaMapPin as MapPin,
	FaUsers as Users,
	FaShare as Share2,
	FaHeart as Heart,
	FaArrowLeft as ArrowLeft,
} from "react-icons/fa";
import { allPrograms, getRelatedPrograms } from "./helpers";
import ShareButtons from "@/components/sections/ShareButtons";
import GallerySection from "@/components/sections/GallerySection";
import ResultsSection from "@/components/sections/ResultsSection";
import Button from "@/components/ui/Button";

export default function ProgramDetail({ params }: any) {
	const { id } = params;
	const [showShareOptions, setShowShareOptions] = useState(false);
	const [activeTab, setActiveTab] = useState("about");
	const relatedPrograms = getRelatedPrograms(Number(id));
	const program = allPrograms.find((p) => p.id === Number(id));

	if (!program) {
		return (
			<div className="container mx-auto pt-40 pb-20 px-4">
				<div className="text-center">
					<h1 className="text-3xl font-bold text-red-500 mb-4">
						Chương trình không tồn tại
					</h1>
					<p className="mb-8">
						Chương trình bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
					</p>
					<Link
						href="/programs"
						className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
					>
						Quay lại trang chương trình
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="pt-24 pb-16">
			{/* Hero Section */}
			<div className="relative bg-black text-white">
				<div className="absolute inset-0 overflow-hidden">
					<Image
						src={program.image}
						alt={program.title}
						fill
						style={{ objectFit: "cover" }}
						className="opacity-40"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
				</div>

				<div className="container relative z-10 pt-16 pb-12 md:pt-24 md:pb-20 px-4 mx-auto">
					<Link
						href="/programs"
						className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Trở lại danh sách chương trình
					</Link>

					<div className="max-w-4xl">
						<div className="flex flex-wrap gap-3 mb-4">
							<span className="bg-black/20 text-white px-3 py-1 rounded-full text-sm">
								{program.category}
							</span>

							<span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
								{program.status === "upcoming"
									? "Sắp diễn ra"
									: "Đã hoàn thành"}
							</span>
						</div>

						<h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
							{program.title}
						</h1>

						<div className="flex flex-wrap gap-6 text-white/90 mb-8">
							<div className="flex items-center">
								<Calendar className="h-5 w-5 mr-2" />
								<span>{program.date}</span>
							</div>

							<div className="flex items-center">
								<MapPin className="h-5 w-5 mr-2" />
								<span>{program.location}</span>
							</div>

							<div className="flex items-center">
								<Users className="h-5 w-5 mr-2" />
								<span>
									{program.status === "upcoming"
										? `${program.maxAttendees} người tham gia`
										: program.results?.beneficiaries + " người được hỗ trợ"}
								</span>
							</div>
						</div>

						<div className="flex flex-wrap gap-4">
							{program.status === "upcoming" && (
								<Button variant="primary" size="lg">
									<Link href={`/programs/${program.id}/register`}>
										Đăng ký tham gia
									</Link>
								</Button>
							)}

							<div className="relative">
								<button
									className="px-6 py-2 border border-white/50 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center"
									onClick={() => setShowShareOptions(!showShareOptions)}
								>
									<Share2 className="mr-2 h-4 w-4" />
									Chia sẻ
								</button>

								{showShareOptions && (
									<div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg p-3 min-w-[250px] z-50">
										<ShareButtons program={program} />
									</div>
								)}
							</div>

							<button className="px-6 py-2 border border-white/50 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center">
								<Heart className="mr-2 h-4 w-4" />
								Thêm vào yêu thích
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Main Content */}
					<div className="lg:col-span-2">
						<div className="border-b mb-8">
							<div className="flex gap-4">
								<button
									onClick={() => setActiveTab("about")}
									className={`pb-4 text-base font-medium relative ${
										activeTab === "about"
											? "text-black border-b-2 border-black"
											: "text-gray-500 hover:text-black"
									}`}
								>
									Thông tin
								</button>

								{program.schedule && program.schedule.length > 0 && (
									<button
										onClick={() => setActiveTab("schedule")}
										className={`pb-4 text-base font-medium relative ${
											activeTab === "schedule"
												? "text-black border-b-2 border-black"
												: "text-gray-500 hover:text-black"
										}`}
									>
										Lịch trình
									</button>
								)}

								{program.gallery && program.gallery.length > 0 && (
									<button
										onClick={() => setActiveTab("gallery")}
										className={`pb-4 text-base font-medium relative ${
											activeTab === "gallery"
												? "text-black border-b-2 border-black"
												: "text-gray-500 hover:text-black"
										}`}
									>
										Hình ảnh
									</button>
								)}

								{program.status === "completed" && program.results && (
									<button
										onClick={() => setActiveTab("results")}
										className={`pb-4 text-base font-medium relative ${
											activeTab === "results"
												? "text-black border-b-2 border-black"
												: "text-gray-500 hover:text-black"
										}`}
									>
										Kết quả
									</button>
								)}
							</div>
						</div>

						{activeTab === "about" && (
							<div>
								<div className="prose max-w-none">
									<h2 className="text-2xl font-bold mb-6">
										Mô tả chương trình
									</h2>
									{program.longDescription
										.split("\n")
										.map((paragraph: string, idx: number) => (
											<p key={idx} className="mb-4 text-gray-600">
												{paragraph.trim()}
											</p>
										))}
								</div>
							</div>
						)}

						{activeTab === "schedule" && program.schedule && (
							<div>
								<h2 className="text-2xl font-bold mb-6">
									Lịch trình chương trình
								</h2>
								<div className="relative border-l-2 border-gray-200 pl-8 ml-4">
									{program.schedule.map((item: any, idx: number) => (
										<div key={idx} className="mb-10 relative">
											<div className="absolute -left-[41px] w-6 h-6 rounded-full bg-black flex items-center justify-center">
												<div className="w-2 h-2 rounded-full bg-white"></div>
											</div>
											<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
												<div className="flex items-center mb-2 text-gray-600">
													<span className="font-semibold">{item.time}</span>
												</div>
												<p className="text-gray-600">{item.activity}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						)}

						{activeTab === "gallery" && program.gallery && (
							<GallerySection images={program.gallery} title={program.title} />
						)}

						{activeTab === "results" &&
							program.status === "completed" &&
							program.results && (
								<ResultsSection
									results={program.results}
									category={program.category}
								/>
							)}
					</div>

					{/* Sidebar */}
					<div className="lg:col-span-1">
						{program.status === "upcoming" ? (
							<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
								<h2 className="text-xl font-bold mb-4">Thông tin chương trình</h2>

								<div className="space-y-4 mb-6">
									<div className="flex justify-between">
										<span>Thời gian:</span>
										<span className="font-semibold">{program.date}</span>
									</div>
									<div className="flex justify-between">
										<span>Địa điểm:</span>
										<span>{program.location}</span>
									</div>
									<div className="flex justify-between">
										<span>Số lượng:</span>
										<span>{program.maxAttendees} người</span>
									</div>
								</div>

								<Button variant="primary" size="lg" fullWidth>
									<Link href={`/programs/${program.id}/register`}>
										Đăng ký tham gia
									</Link>
								</Button>
							</div>
						) : (
							<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
								<h2 className="text-xl font-bold mb-4">Thành tựu</h2>
								<div className="space-y-4">
									{program.results && (
										<>
											<div className="flex justify-between">
												<span>Tình nguyện viên:</span>
												<span className="font-semibold">
													{program.results.volunteersParticipated} người
												</span>
											</div>

											<div className="flex justify-between">
												<span>Người được hỗ trợ:</span>
												<span className="font-semibold">
													{program.results.beneficiaries} người
												</span>
											</div>

											{program.results.fundsRaised && (
												<div className="flex justify-between">
													<span>Số tiền gây quỹ:</span>
													<span className="font-semibold">
														{program.results.fundsRaised}
													</span>
												</div>
											)}

											{program.results.giftsDistributed && (
												<div className="flex justify-between">
													<span>Quà đã phát:</span>
													<span className="font-semibold">
														{program.results.giftsDistributed} phần
													</span>
												</div>
											)}
										</>
									)}
								</div>
							</div>
						)}

						{/* Related Programs */}
						{relatedPrograms.length > 0 && (
							<div className="mt-8">
								<h2 className="text-xl font-bold mb-4">
									Chương trình liên quan
								</h2>
								<div className="space-y-4">
									{relatedPrograms.map((relatedProgram) => (
										<Link
											key={relatedProgram.id}
											href={`/programs/${relatedProgram.id}`}
										>
											<div className="group flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
												<div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
													<Image
														src={relatedProgram.image}
														alt={relatedProgram.title}
														fill
														className="object-cover group-hover:scale-105 transition-transform duration-300"
													/>
												</div>
												<div className="flex-1">
													<h3 className="font-medium line-clamp-2 group-hover:text-black transition-colors">
														{relatedProgram.title}
													</h3>
													<div className="flex items-center text-xs text-gray-500 mt-1">
														<Calendar className="h-3 w-3 mr-1" />
														<span>{relatedProgram.date}</span>
													</div>
												</div>
											</div>
										</Link>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}