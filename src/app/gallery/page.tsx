'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaImage, FaVideo, FaPlayCircle, FaTimes } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const imageGallery = [
  {
    id: 1,
    title: 'Công quả ở Tổ Đình Phật Bửu',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg',
    date: 'Tháng 3/2025',
    category: 'Công quả',
  },
  {
    id: 2,
    title: 'Đêm nhạc gây quỹ "ĐÊM"',
    image: 'https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg',
    date: 'Tháng 3/2025',
    category: 'Sự kiện',
  },
  {
    id: 3,
    title: 'Tặng quà Tết cho người vô gia cư',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    date: 'Tháng 1/2025',
    category: 'Tặng quà',
  },
  {
    id: 4,
    title: 'Chương trình khám mắt miễn phí',
    image: 'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg',
    date: 'Tháng 12/2024',
    category: 'Y tế',
  },
  {
    id: 5,
    title: 'Trao học bổng cho học sinh nghèo',
    image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
    date: 'Tháng 11/2024',
    category: 'Giáo dục',
  },
  {
    id: 6,
    title: 'Phát cơm từ thiện Q.3',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg',
    date: 'Tháng 10/2024',
    category: 'Công quả',
  },
  {
    id: 7,
    title: 'Hội nghị tình nguyện viên 2024',
    image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg',
    date: 'Tháng 9/2024',
    category: 'Sự kiện',
  },
  {
    id: 8,
    title: 'Tặng quà cho trẻ em vùng cao',
    image: 'https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg',
    date: 'Tháng 8/2024',
    category: 'Tặng quà',
  },
  {
    id: 9,
    title: 'Xây dựng thư viện ở Long An',
    image: 'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg',
    date: 'Tháng 7/2024',
    category: 'Giáo dục',
  },
];

const videoGallery = [
  {
    id: 1,
    title: 'Đêm nhạc gây quỹ "ĐÊM"',
    thumbnail: 'https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg',
    duration: '5:32',
    date: 'Tháng 3/2025',
    videoUrl: '#',
  },
  {
    id: 2,
    title: 'Hành trình thiện nguyện 2024',
    thumbnail: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    duration: '10:15',
    date: 'Tháng 2/2025',
    videoUrl: '#',
  },
  {
    id: 3,
    title: 'Phỏng vấn tình nguyện viên tiêu biểu',
    thumbnail: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    duration: '7:48',
    date: 'Tháng 1/2025',
    videoUrl: '#',
  },
];

export default function GalleryPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filteredGallery = activeFilter === 'all' 
    ? imageGallery 
    : imageGallery.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative bg-primary-800 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg"
            alt="Hình ảnh và video"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Khoảnh khắc từ trái tim
            </h1>
            <p className="text-xl mb-4 text-neutral-200">
              Mỗi hình ảnh là một câu chuyện, mỗi video là một hành trình. Cùng ngắm nhìn những khoảnh khắc đáng nhớ từ các hoạt động thiện nguyện của Smile Gift.
            </p>
          </div>
        </div>
      </div>
      
      {/* Gallery Filters */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            {['all', 'công quả', 'sự kiện', 'tặng quà', 'y tế', 'giáo dục'].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'all' ? 'Tất cả' : filter}
              </Button>
            ))}
          </motion.div>
          
          {/* Image Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Bộ sưu tập hình ảnh</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedImage(item.id)}
                >
                  <Card className="cursor-pointer">
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-primary-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {item.category}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white text-neutral-700 text-xs font-medium px-3 py-1 rounded-full">
                        {item.date}
                      </div>
                      <div className="absolute inset-0 bg-primary-900/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <FaImage className="text-white text-3xl" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Videos Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Video</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoGallery.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="cursor-pointer">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image 
                        src={video.thumbnail} 
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <FaPlayCircle className="text-white text-5xl opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300" />
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{video.title}</h3>
                      <p className="text-sm text-neutral-500">{video.date}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes size={30} />
          </button>
          
          <div className="relative max-w-4xl max-h-[80vh] w-full">
            <Image 
              src={imageGallery.find(img => img.id === selectedImage)?.image || ''}
              alt={imageGallery.find(img => img.id === selectedImage)?.title || ''}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh] mx-auto"
            />
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <h3 className="text-xl font-semibold">
                {imageGallery.find(img => img.id === selectedImage)?.title}
              </h3>
              <p>{imageGallery.find(img => img.id === selectedImage)?.date}</p>
            </div>
          </div>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neutral-300 transition-colors"
            onClick={() => {
              const currentIndex = imageGallery.findIndex(img => img.id === selectedImage);
              const prevIndex = (currentIndex - 1 + imageGallery.length) % imageGallery.length;
              setSelectedImage(imageGallery[prevIndex].id);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neutral-300 transition-colors"
            onClick={() => {
              const currentIndex = imageGallery.findIndex(img => img.id === selectedImage);
              const nextIndex = (currentIndex + 1) % imageGallery.length;
              setSelectedImage(imageGallery[nextIndex].id);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}