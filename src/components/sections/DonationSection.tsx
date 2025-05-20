'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '@/components/ui/Button';
import { FaHandHoldingHeart, FaCreditCard, FaFileAlt } from 'react-icons/fa';

export default function DonationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white p-8 md:p-10 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-5">Trở thành Mạnh Thường Quân</h3>
      
      <p className="text-neutral-600 mb-6">
        Đồng hành cùng Smile Gift trong hành trình lan tỏa yêu thương. Mỗi đóng góp của bạn đều mang ý nghĩa to lớn đối với những người có hoàn cảnh khó khăn.
      </p>
      
      <div className="mb-6 bg-neutral-50 rounded-lg p-5">
        <h4 className="font-semibold mb-3 flex items-center">
          <FaHandHoldingHeart className="text-primary-700 mr-2" />
          Tài trợ cho:
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-sm">• Trao học bổng</div>
          <div className="text-sm">• Phát cơm từ thiện</div>
          <div className="text-sm">• Phẫu thuật mắt</div>
          <div className="text-sm">• Xây dựng thư viện</div>
        </div>
      </div>
      
      <div className="mb-6 bg-primary-50 rounded-lg p-5">
        <h4 className="font-semibold mb-3">Thông tin quyên góp:</h4>
        <div className="mb-3">
          <div className="text-sm text-neutral-500">Ngân hàng:</div>
          <div className="font-medium">BIDV Chi nhánh TP.HCM</div>
        </div>
        <div className="mb-3">
          <div className="text-sm text-neutral-500">Số tài khoản:</div>
          <div className="font-medium">31410001234567</div>
        </div>
        <div>
          <div className="text-sm text-neutral-500">Chủ tài khoản:</div>
          <div className="font-medium">CLB THIỆN NGUYỆN SMILE GIFT</div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          variant="secondary" 
          size="md" 
          leftIcon={<FaCreditCard />}
          className="flex-1"
        >
          <Link href="/donate">
            Quyên góp ngay
          </Link>
        </Button>
        
        <Button 
          variant="outline" 
          size="md" 
          leftIcon={<FaFileAlt />}
          className="flex-1"
        >
          <Link href="/reports">
            Báo cáo tài chính
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}