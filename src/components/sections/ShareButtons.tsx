"use client";

import React from "react";
import { Facebook, Twitter, Mail, Linkedin, Link2 } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonsProps {
	program: any;
}

export default function ShareButtons({ program }: ShareButtonsProps) {
	const shareUrl =
		typeof window !== "undefined"
			? `${window.location.origin}/programs/${program.id}`
			: "";

	const shareText = `Tham gia chương trình "${program.title}" cùng CLB Thiện Nguyện Smile Gift!`;

	const handleCopyLink = () => {
		navigator.clipboard.writeText(shareUrl);
		toast.success("Đã sao chép liên kết!");
	};

	return (
		<div className="space-y-2">
			<p className="text-sm text-gray-500 mb-3">Chia sẻ chương trình này:</p>

			<div className="flex flex-wrap gap-2">
				<button
					className="flex items-center px-4 py-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white rounded-lg text-sm"
					onClick={() =>
						window.open(
							`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
								shareUrl
							)}`,
							"_blank"
						)
					}
				>
					<Facebook className="h-4 w-4 mr-2" />
					Facebook
				</button>

				<button
					className="flex items-center px-4 py-2 bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white rounded-lg text-sm"
					onClick={() =>
						window.open(
							`https://twitter.com/intent/tweet?text=${encodeURIComponent(
								shareText
							)}&url=${encodeURIComponent(shareUrl)}`,
							"_blank"
						)
					}
				>
					<Twitter className="h-4 w-4 mr-2" />
					Twitter
				</button>

				<button
					className="flex items-center px-4 py-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white rounded-lg text-sm"
					onClick={() =>
						window.open(
							`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
								shareUrl
							)}`,
							"_blank"
						)
					}
				>
					<Linkedin className="h-4 w-4 mr-2" />
					LinkedIn
				</button>

				<button
					className="flex items-center px-4 py-2 bg-[#EA4335] hover:bg-[#EA4335]/90 text-white rounded-lg text-sm"
					onClick={() =>
						window.open(
							`mailto:?subject=${encodeURIComponent(
								shareText
							)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
							"_blank"
						)
					}
				>
					<Mail className="h-4 w-4 mr-2" />
					Email
				</button>

				<button
					className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm"
					onClick={handleCopyLink}
				>
					<Link2 className="h-4 w-4 mr-2" />
					Sao chép
				</button>
			</div>
		</div>
	);
}
