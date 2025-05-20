"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { allPrograms } from "../helpers";

type RegistrationFormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  agreeTerms: boolean;
};

export default function RegisterPage({ params }: { params: { id: string } }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>();

  const id = Number(params.id);
  const program = allPrograms.find((p) => p.id === id);

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

  const onSubmit = (data: RegistrationFormData) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24">
      <div className="relative bg-black text-white py-12">
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

        <div className="container relative z-10 px-4 mx-auto">
          <Link
            href={`/programs/${id}`}
            className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors"
          >
            <FaArrowLeft className="mr-2 h-4 w-4" />
            Quay lại chi tiết chương trình
          </Link>

          <h1 className="text-3xl font-bold mb-2">Đăng ký tham gia</h1>
          <p className="text-xl text-white/90">{program.title}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="mb-6">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Họ và tên <span className="text-accent-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  className={`w-full px-4 py-2 border ${
                    errors.fullName ? "border-accent-500" : "border-neutral-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-sm text-accent-500 mt-1">
                    Vui lòng nhập họ tên của bạn
                  </span>
                )}
              </div>

              <div className="mb-6">
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
                    errors.email ? "border-accent-500" : "border-neutral-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <span className="text-sm text-accent-500 mt-1">
                    Vui lòng nhập email hợp lệ
                  </span>
                )}
              </div>

              <div className="mb-6">
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
                    errors.phone ? "border-accent-500" : "border-neutral-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="text-sm text-accent-500 mt-1">
                    Vui lòng nhập số điện thoại
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
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Lời nhắn
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  {...register("message")}
                ></textarea>
              </div>

              <div className="mb-6">
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
                      <a href="#" className="text-primary-700 hover:underline">
                        điều khoản
                      </a>{" "}
                      và{" "}
                      <a href="#" className="text-primary-700 hover:underline">
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
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-4">
                Đăng ký tham gia thành công!
              </h2>
              <p className="text-neutral-600 mb-6">
                Cảm ơn bạn đã đăng ký tham gia chương trình. Chúng tôi sẽ liên hệ
                với bạn qua email hoặc số điện thoại để xác nhận thông tin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <Link href={`/programs/${id}`}>
                    Quay lại trang chương trình
                  </Link>
                </Button>
                <Button variant="primary">
                  <Link href="/programs">Xem các chương trình khác</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}