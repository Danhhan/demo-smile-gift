"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface GallerySectionProps {
	images: string[];
	title: string;
}

export default function GallerySection({ images, title }: GallerySectionProps) {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<div>
			<h2 className="text-2xl font-bold mb-6">Hình ảnh chương trình</h2>

			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{images.map((image, index) => (
					<div
						key={index}
						className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
						onClick={() => setSelectedImage(image)}
					>
						<Image
							src={image}
							alt={`${title} - Hình ${index + 1}`}
							fill
							className="object-cover hover:scale-105 transition-transform duration-300"
						/>
					</div>
				))}
			</div>

			{/* Lightbox */}
			{selectedImage && (
				<div
					className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
					onClick={() => setSelectedImage(null)}
				>
					<button
						className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
						onClick={() => setSelectedImage(null)}
					>
						<X className="h-6 w-6" />
					</button>

					<div
						className="relative h-[80vh] w-full max-w-4xl"
						onClick={(e) => e.stopPropagation()}
					>
						<Image
							src={selectedImage}
							alt={title}
							fill
							className="object-contain"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
