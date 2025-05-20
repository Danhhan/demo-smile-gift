'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

const latestNews = [
  {
    id: 1,
    title: 'Smile Gift: Nhóm bạn trẻ biến nghệ thuật thành thiện nguyện',
    excerpt: 'Hành trình đặc biệt của những bạn trẻ dùng tài năng nghệ thuật để giúp đỡ cộng đồng và lan tỏa giá trị tốt đẹp trong xã hội.',
    date: '15/06/2025',
    author: 'Minh Anh',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    category: 'Truyền thông',
  },
  {
    id: 2,
    title: 'Họ là những người trẻ, hát để sẻ chia – diễn để lan tỏa',
    excerpt: 'Câu chuyện cảm động về những tình nguyện viên đầy nhiệt huyết, dùng giọng hát và khả năng diễn xuất để mang lại niềm vui cho người khó khăn.',
    date: '02/06/2025',
    author: 'Thanh Tùng',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    category: 'Báo chí',
  },
  {
    id: 3,
    title: 'Tổng kết chương trình "Đêm nhạc vì trẻ em vùng cao"',
    excerpt: 'Đêm nhạc đã quyên góp được hơn 50 triệu đồng để xây dựng thư viện cho trường học vùng cao Tây Bắc.',
    date: '20/05/2025',
    author: 'Hà Linh',
    image: 'https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg',
    category: 'Hoạt động',
  },
];

export default function NewsPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tin tức & Hoạt động
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Cập nhật những hoạt động mới nhất của CLB Thiện Nguyện Smile Gift và các thông tin báo chí.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {latestNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-primary-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {news.category}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-3 flex items-center justify-between text-sm text-neutral-500">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" size={12} />
                      {news.date}
                    </div>
                    <div className="flex items-center">
                      <FaUserAlt className="mr-1" size={12} />
                      {news.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                  
                  <p className="text-neutral-600 mb-4 flex-grow">
                    {news.excerpt}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    rightIcon={<FaArrowRight />}
                    className="mt-auto"
                  >
                    <Link href={`/news/${news.id}`}>
                      Đọc tiếp
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="primary" 
            rightIcon={<FaArrowRight />}
          >
            <Link href="/news">
              Xem tất cả tin tức
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}