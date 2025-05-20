'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const upcomingPrograms = [
  {
    id: 1,
    title: 'Đêm nhạc "Yêu Là Đủ" gây quỹ phát cơm',
    date: '28/07/2025',
    location: 'Nhà văn hóa Q3',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    description: 'Chương trình âm nhạc đặc biệt với sự tham gia của các nghệ sĩ trẻ, gây quỹ cho hoạt động phát cơm từ thiện.',
  },
  {
    id: 2,
    title: 'Công quả tại Chùa Phổ Quang',
    date: '10/08/2025',
    location: 'Tân Bình',
    image: 'https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg',
    description: 'Hoạt động công quả tại chùa, hỗ trợ công tác chuẩn bị và phân phát thực phẩm cho người nghèo.',
  },
  {
    id: 3,
    title: 'Chương trình mổ mắt từ thiện',
    date: '25/08/2025',
    location: 'Bệnh viện Mắt Tp.HCM',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
    description: 'Hỗ trợ chi phí phẫu thuật mắt cho các bệnh nhân nghèo tại khu vực nông thôn.',
  },
];

export default function FeaturedPrograms() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="py-20" id="upcoming-programs">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Các chương trình sắp diễn ra
          </h2>
          <p className="text-lg text-neutral-600">
            Tham gia cùng Smile Gift trong các hoạt động thiện nguyện sắp tới. Mỗi hoạt động là một cơ hội để lan tỏa yêu thương và sự sẻ chia.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-primary-700 text-white text-sm font-medium px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" size={12} />
                      {program.date}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-3 flex items-center text-sm text-neutral-500">
                    <FaMapMarkerAlt className="mr-1" />
                    {program.location}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  
                  <p className="text-neutral-600 mb-4 flex-grow">
                    {program.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <Button variant="outline" size="sm">
                      <Link href={`/programs/${program.id}`}>
                        Chi tiết
                      </Link>
                    </Button>
                    
                    <Button variant="primary" size="sm">
                      <Link href={`/programs/${program.id}/register`}>
                        Đăng ký
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="secondary" 
            rightIcon={<FaArrowRight />}
          >
            <Link href="/programs">
              Xem tất cả chương trình
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}