"use client";

import React, { useState } from "react";
import { toast } from "sonner";

interface RegistrationFormProps {
	programId: number;
}

export default function RegistrationForm({ programId }: RegistrationFormProps) {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		message: "",
		agreeToTerms: false,
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, agreeToTerms: e.target.checked }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.agreeToTerms) {
			toast.error("Vui lòng đồng ý với điều khoản và điều kiện");
			return;
		}

		setIsSubmitting(true);

		// Simulate API call
		setTimeout(() => {
			console.log("Form submitted for program ID:", programId, formData);

			toast.success("Đăng ký tham gia thành công!", {
				description: "Chúng tôi sẽ liên hệ với bạn qua email hoặc điện thoại.",
			});

			setFormData({
				fullName: "",
				email: "",
				phone: "",
				message: "",
				agreeToTerms: false,
			});

			setIsSubmitting(false);
		}, 1500);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="fullName" className="block text-sm font-medium">
					Họ và tên
				</label>
				<input
					id="fullName"
					name="fullName"
					type="text"
					placeholder="Nhập họ và tên của bạn"
					value={formData.fullName}
					onChange={handleChange}
					required
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
				/>
			</div>

			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm font-medium">
					Email
				</label>
				<input
					id="email"
					name="email"
					type="email"
					placeholder="example@email.com"
					value={formData.email}
					onChange={handleChange}
					required
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
				/>
			</div>

			<div className="space-y-2">
				<label htmlFor="phone" className="block text-sm font-medium">
					Số điện thoại
				</label>
				<input
					id="phone"
					name="phone"
					type="tel"
					placeholder="Nhập số điện thoại"
					value={formData.phone}
					onChange={handleChange}
					required
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
				/>
			</div>

			<div className="space-y-2">
				<label htmlFor="message" className="block text-sm font-medium">
					Lời nhắn (không bắt buộc)
				</label>
				<textarea
					id="message"
					name="message"
					placeholder="Nhập lời nhắn nếu có"
					value={formData.message}
					onChange={handleChange}
					rows={3}
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
				/>
			</div>

			<div className="flex items-center space-x-2">
				<input
					type="checkbox"
					id="terms"
					checked={formData.agreeToTerms}
					onChange={handleCheckboxChange}
					className="rounded border-gray-300 text-black focus:ring-black"
				/>
				<label htmlFor="terms" className="text-sm">
					Tôi đồng ý với các điều khoản và điều kiện
				</label>
			</div>

			<button
				type="submit"
				className={`w-full px-4 py-2 bg-black text-white rounded-lg transition-colors ${
					isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-black/90"
				}`}
				disabled={isSubmitting}
			>
				{isSubmitting ? "Đang xử lý..." : "Đăng ký tham gia"}
			</button>
		</form>
	);
}
