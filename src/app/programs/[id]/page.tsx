"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Calendar,
	MapPin,
	Users,
	Share2,
	Heart,
	ArrowLeft,
	Clock,
	Tag,
	Info,
} from "lucide-react";
import { allPrograms, getRelatedPrograms } from "./helpers";
import ShareButtons from "@/components/sections/ShareButtons";
import GallerySection from "@/components/sections/GallerySection";
import ResultsSection from "@/components/sections/ResultsSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function ProgramDetail({ params }: any) {
	const [showShareOptions, setShowShareOptions] = useState(false);
	const [activeTab, setActiveTab] = useState("about");
	const relatedPrograms = getRelatedPrograms(Number(params.id));
	const program = allPrograms.find((p) => p.id === Number(params.id));

	if (!program) {
		return (
			<div className="min-h-screen bg-neutral-50 flex items-center justify-center">
				<div className="text-center px-4">
					<div className="text-6xl mb-6">😢</div>
					<h1 className="text-3xl font-bold text-red-500 mb-4">
						Không tìm thấy chương trình
					</h1>
					<p className="text-lg text-neutral-600 mb-8">
						Chương trình bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
					</p>
					<Button variant="primary" size="lg">
						<Link href="/programs" className="flex items-center">
							<ArrowLeft className="mr-2 h-5 w-5" />
							Quay lại danh sách chương trình
						</Link>
					</Button>
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
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
				</div>

				<div className="container relative z-10 pt-16 pb-12 md:pt-24 md:pb-20 px-4 mx-auto">
					<Link
						href="/programs"
						className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors group"
					>
						<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
						Trở lại danh sách chương trình
					</Link>

					<div className="max-w-4xl">
						<div className="flex flex-wrap gap-3 mb-6">
							<span className="bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center">
								<Tag className="h-4 w-4 mr-1.5" />
								{program.category}
							</span>

							<span
								className={`${
									program.status === "upcoming"
										? "bg-green-500"
										: "bg-neutral-500"
								} text-white px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center`}
							>
								<Clock className="h-4 w-4 mr-1.5" />
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
								<Button
									variant="primary"
									size="lg"
									className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600"
								>
									<Link href={`/programs/${program.id}/register`}>
										Đăng ký tham gia ngay
									</Link>
								</Button>
							)}

							<div className="relative">
								<Button
									variant="outline"
									size="lg"
									className="border-white text-white hover:bg-white/10"
									onClick={() => setShowShareOptions(!showShareOptions)}
								>
									<Share2 className="mr-2 h-4 w-4" />
									Chia sẻ
								</Button>

								{showShareOptions && (
									<div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg p-4 min-w-[300px] z-50">
										<ShareButtons program={program} />
									</div>
								)}
							</div>

							<Button
								variant="outline"
								size="lg"
								className="border-white text-white hover:bg-white/10"
							>
								<Heart className="mr-2 h-4 w-4" />
								Quan tâm
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Main Content */}
					<div className="lg:col-span-2">
						<div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
							<div className="border-b">
								<div className="flex gap-4 px-6">
									<button
										onClick={() => setActiveTab("about")}
										className={`py-4 text-base font-medium relative ${
											activeTab === "about"
												? "text-primary-700 border-b-2 border-primary-700"
												: "text-neutral-500 hover:text-neutral-900"
										}`}
									>
										Thông tin
									</button>

									{program.schedule && program.schedule.length > 0 && (
										<button
											onClick={() => setActiveTab("schedule")}
											className={`py-4 text-base font-medium relative ${
												activeTab === "schedule"
													? "text-primary-700 border-b-2 border-primary-700"
													: "text-neutral-500 hover:text-neutral-900"
											}`}
										>
											Lịch trình
										</button>
									)}

									{program.gallery && program.gallery.length > 0 && (
										<button
											onClick={() => setActiveTab("gallery")}
											className={`py-4 text-base font-medium relative ${
												activeTab === "gallery"
													? "text-primary-700 border-b-2 border-primary-700"
													: "text-neutral-500 hover:text-neutral-900"
											}`}
										>
											Hình ảnh
										</button>
									)}

									{program.status === "completed" && program.results && (
										<button
											onClick={() => setActiveTab("results")}
											className={`py-4 text-base font-medium relative ${
												activeTab === "results"
													? "text-primary-700 border-b-2 border-primary-700"
													: "text-neutral-500 hover:text-neutral-900"
											}`}
										>
											Kết quả
										</button>
									)}
								</div>
							</div>

							<div className="p-6">
								{activeTab === "about" && (
									<div>
										<div className="prose max-w-none">
											<h2 className="text-2xl font-bold mb-6">
												Mô tả chương trình
											</h2>
											{program.longDescription
												.split("\n")
												.map((paragraph: string, idx: number) => (
													<p key={idx} className="mb-4 text-neutral-600">
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
										<div className="relative border-l-2 border-primary-200 pl-8 ml-4">
											{program.schedule.map((item: any, idx: number) => (
												<div key={idx} className="mb-10 relative">
													<div className="absolute -left-[41px] w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center">
														<div className="w-2 h-2 rounded-full bg-white"></div>
													</div>
													<div className="bg-primary-50 p-6 rounded-xl">
														<div className="flex items-center mb-2 text-primary-700 font-medium">
															<Clock className="h-4 w-4 mr-2" />
															{item.time}
														</div>
														<p className="text-neutral-700">{item.activity}</p>
													</div>
												</div>
											))}
										</div>
									</div>
								)}

								{activeTab === "gallery" && program.gallery && (
									<GallerySection
										images={program.gallery}
										title={program.title}
									/>
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
						</div>
					</div>

					{/* Sidebar */}
					<div className="lg:col-span-1">
						{program.status === "upcoming" ? (
							<div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 sticky top-24">
								<div className="flex items-center mb-6">
									<Info className="h-5 w-5 text-primary-700 mr-2" />
									<h2 className="text-xl font-bold">Thông tin chương trình</h2>
								</div>

								<div className="space-y-4 mb-6">
									<div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
										<div className="flex items-center">
											<Calendar className="h-5 w-5 text-primary-600 mr-2" />
											<span className="text-neutral-600">Thời gian:</span>
										</div>
										<span className="font-medium">{program.date}</span>
									</div>

									<div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
										<div className="flex items-center">
											<MapPin className="h-5 w-5 text-primary-600 mr-2" />
											<span className="text-neutral-600">Địa điểm:</span>
										</div>
										<span className="font-medium">{program.location}</span>
									</div>

									<div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
										<div className="flex items-center">
											<Users className="h-5 w-5 text-primary-600 mr-2" />
											<span className="text-neutral-600">Số lượng:</span>
										</div>
										<span className="font-medium">
											{program.maxAttendees} người
										</span>
									</div>
								</div>

								<Button
									variant="primary"
									size="lg"
									fullWidth
									className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600"
								>
									<Link href={`/programs/${program.id}/register`}>
										Đăng ký tham gia ngay
									</Link>
								</Button>
							</div>
						) : (
							<div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 mb-8">
								<h2 className="text-xl font-bold mb-6 flex items-center">
									<Info className="h-5 w-5 text-primary-700 mr-2" />
									Kết quả đạt được
								</h2>
								<div className="space-y-4">
									{program.results && (
										<>
											<div className="p-4 bg-neutral-50 rounded-lg">
												<div className="text-sm text-neutral-500 mb-1">
													Tình nguyện viên
												</div>
												<div className="text-2xl font-bold text-primary-700">
													{program.results.volunteersParticipated}
													<span className="text-base font-normal ml-1">
														người
													</span>
												</div>
											</div>

											<div className="p-4 bg-neutral-50 rounded-lg">
												<div className="text-sm text-neutral-500 mb-1">
													Người được hỗ trợ
												</div>
												<div className="text-2xl font-bold text-primary-700">
													{program.results.beneficiaries}
													<span className="text-base font-normal ml-1">
														người
													</span>
												</div>
											</div>

											{program.results.fundsRaised && (
												<div className="p-4 bg-neutral-50 rounded-lg">
													<div className="text-sm text-neutral-500 mb-1">
														Số tiền gây quỹ
													</div>
													<div className="text-2xl font-bold text-primary-700">
														{program.results.fundsRaised}
													</div>
												</div>
											)}

											{program.results.giftsDistributed && (
												<div className="p-4 bg-neutral-50 rounded-lg">
													<div className="text-sm text-neutral-500 mb-1">
														Quà đã phát
													</div>
													<div className="text-2xl font-bold text-primary-700">
														{program.results.giftsDistributed}
														<span className="text-base font-normal ml-1">
															phần
														</span>
													</div>
												</div>
											)}
										</>
									)}
								</div>
							</div>
						)}

						{/* Related Programs */}
						{relatedPrograms.length > 0 && (
							<div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
								<div className="p-6 border-b">
									<h2 className="text-xl font-bold">
										Chương trình liên quan
									</h2>
								</div>

								<div className="divide-y">
									{relatedPrograms.map((relatedProgram) => (
										<Link
											key={relatedProgram.id}
											href={`/programs/${relatedProgram.id}`}
										>
											<Card
												className="hover:bg-neutral-50 transition-colors border-none shadow-none rounded-none"
												hoverEffect={false}
											>
												<div className="p-4">
													<div className="flex gap-4">
														<div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden">
															<Image
																src={relatedProgram.image}
																alt={relatedProgram.title}
																fill
																className="object-cover"
															/>
														</div>
														<div>
															<h3 className="font-medium line-clamp-2 mb-2 group-hover:text-primary-700 transition-colors">
																{relatedProgram.title}
															</h3>
															<div className="flex items-center text-sm text-neutral-500">
																<Calendar className="h-3 w-3 mr-1" />
																{relatedProgram.date}
															</div>
														</div>
													</div>
												</div>
											</Card>
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