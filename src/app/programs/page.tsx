'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt, FaSearch, FaFilter, FaClock, FaCheckCircle, FaInbox } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const allPrograms = [
  {
    id: 1,
    title: 'Đêm nhạc "Yêu Là Đủ" gây quỹ phát cơm',
    date: '28/07/2025',
    location: 'Nhà văn hóa Q3',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    description: 'Chương trình âm nhạc đặc biệt với sự tham gia của các nghệ sĩ trẻ, gây quỹ cho hoạt động phát cơm từ thiện.',
    category: 'Gây quỹ',
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Công quả tại Chùa Phổ Quang',
    date: '10/08/2025',
    location: 'Tân Bình',
    image: 'https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg',
    description: 'Hoạt động công quả tại chùa, hỗ trợ công tác chuẩn bị và phân phát thực phẩm cho người nghèo.',
    category: 'Công quả',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Chương trình mổ mắt từ thiện',
    date: '25/08/2025',
    location: 'Bệnh viện Mắt Tp.HCM',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
    description: 'Hỗ trợ chi phí phẫu thuật mắt cho các bệnh nhân nghèo tại khu vực nông thôn.',
    category: 'Y tế',
    status: 'upcoming',
  },
  {
    id: 4,
    title: 'Công quả ở Tổ Đình Phật Bửu',
    date: '15/03/2025',
    location: 'Quận 10, TP.HCM',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg',
    description: 'Chương trình công quả tại Tổ Đình Phật Bửu, phân phát thực phẩm và quà cho người già neo đơn.',
    category: 'Công quả',
    status: 'completed',
    results: {
      volunteersParticipated: 30,
      beneficiaries: 150,
      mealsServed: 300
    }
  },
  {
    id: 5,
    title: 'Đêm nhạc gây quỹ "ĐÊM"',
    date: '05/03/2025',
    location: 'Nhà văn hóa Thanh Niên',
    image: 'https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg',
    description: 'Đêm nhạc gây quỹ với chủ đề "ĐÊM", quyên góp được 50 triệu đồng cho quỹ học bổng sinh viên.',
    category: 'Gây quỹ',
    status: 'completed',
    results: {
      volunteersParticipated: 45,
      beneficiaries: 20,
      fundsRaised: '50.000.000 đ'
    }
  },
  {
    id: 6,
    title: 'Tặng quà Tết cho người vô gia cư',
    date: '20/01/2025',
    location: 'Trung tâm TP.HCM',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    description: 'Chương trình tặng quà Tết cho người vô gia cư tại khu vực trung tâm thành phố.',
    category: 'Tặng quà',
    status: 'completed',
    results: {
      volunteersParticipated: 25,
      beneficiaries: 100,
      giftsDistributed: 100
    }
  },
];

const ITEMS_PER_PAGE = 3;

export default function ProgramsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredPrograms, setFilteredPrograms] = useState(allPrograms);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInputValue, setPageInputValue] = useState('1');
  
  const totalPages = Math.ceil(filteredPrograms.length / ITEMS_PER_PAGE);
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const filtered = allPrograms.filter(program => {
          const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              program.description.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesCategory = !selectedCategory || program.category === selectedCategory;
          return matchesSearch && matchesCategory;
        });
        setFilteredPrograms(filtered);
        setCurrentPage(1);
        setPageInputValue('1');
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [searchTerm, selectedCategory]);

  const categories = [...new Set(allPrograms.map(program => program.category))];
  
  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPageInputValue(value);
    
    const pageNumber = parseInt(value);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      setPageInputValue((currentPage - 1).toString());
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      setPageInputValue((currentPage + 1).toString());
    }
  };

  const handlePageInputBlur = () => {
    const pageNumber = parseInt(pageInputValue);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    } else {
      setPageInputValue(currentPage.toString());
    }
  };

  const handlePageInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handlePageInputBlur();
    }
  };

  const currentPrograms = filteredPrograms.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative bg-primary-800 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg"
            alt="Dự án thiện nguyện"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dự án thiện nguyện
            </h1>
            <p className="text-xl mb-8 text-neutral-200">
              Khám phá các chương trình thiện nguyện đã và đang được triển khai bởi CLB Thiện Nguyện Smile Gift.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-white" />
                  </div>
                  <input
                    type="text"
                    placeholder="Tìm kiếm chương trình..."
                    className="w-full py-3 pl-10 pr-4 bg-white/10 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select 
                  className="py-3 px-4 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Tất cả danh mục</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Programs List */}
      <section className="py-16">
        <div className="container-custom">
          {isLoading ? (
            // Loading State
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="animate-pulse">
                  <div className="bg-neutral-200 h-48 rounded-t-lg"></div>
                  <div className="bg-white p-6 rounded-b-lg">
                    <div className="h-4 bg-neutral-200 rounded w-3/4 mb-4"></div>
                    <div className="h-8 bg-neutral-200 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-neutral-200 rounded"></div>
                      <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPrograms.length === 0 ? (
            // Empty State
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-4">
                <FaInbox className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Không tìm thấy chương trình nào
              </h3>
              <p className="text-neutral-600 mb-6">
                Không có chương trình nào phù hợp với tiêu chí tìm kiếm của bạn.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
              >
                Xóa bộ lọc
              </Button>
            </div>
          ) : (
            // Programs Grid
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPrograms.map((program) => (
                  <Card key={program.id} className="h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-primary-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                          {program.category}
                        </span>
                        <span className={`text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1
                          ${program.status === 'upcoming' ? 'bg-green-600' : 'bg-blue-600'}`}
                        >
                          {program.status === 'upcoming' ? (
                            <>
                              <FaClock className="text-[10px]" />
                              Sắp diễn ra
                            </>
                          ) : (
                            <>
                              <FaCheckCircle className="text-[10px]" />
                              Đã hoàn thành
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-3 flex items-center text-sm text-neutral-500">
                        <FaCalendarAlt className="mr-1" />
                        <span className="mr-3">{program.date}</span>
                        <FaMapMarkerAlt className="mr-1" />
                        <span>{program.location}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                      
                      <p className="text-neutral-600 mb-4 flex-grow">
                        {program.description}
                      </p>
                      
                      {program.status === 'upcoming' ? (
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
                      ) : (
                        <div className="mt-4 pt-4 border-t border-neutral-100">
                          {program.results && (
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary-600">
                                  {program.results.volunteersParticipated}
                                </div>
                                <div className="text-sm text-neutral-500">TNV tham gia</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary-600">
                                  {program.results.beneficiaries}
                                </div>
                                <div className="text-sm text-neutral-500">Người thụ hưởng</div>
                              </div>
                            </div>
                          )}
                          <Button variant="outline" size="sm" fullWidth>
                            <Link href={`/programs/${program.id}`}>
                              Xem kết quả
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {filteredPrograms.length > ITEMS_PER_PAGE && (
                <div className="mt-12 flex justify-center items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                  >
                    Trước
                  </Button>

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={pageInputValue}
                      onChange={handlePageInputChange}
                      onBlur={handlePageInputBlur}
                      onKeyPress={handlePageInputKeyPress}
                      className="w-16 text-center px-2 py-1 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <span className="text-neutral-600">/ {totalPages}</span>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Tiếp
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      {/* Get Involved CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cùng đồng hành với chúng tôi
          </h2>
          <p className="text-lg mb-8 text-neutral-200 max-w-2xl mx-auto">
            Mỗi đóng góp, dù là thời gian, tài năng hay tài chính đều mang ý nghĩa to lớn. Cùng nhau, chúng ta có thể tạo ra những tác động tích cực đến cộng đồng.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg"
            >
              <Link href="/volunteer">
                Đăng ký tình nguyện viên
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/donate">
                Ủng hộ hoạt động
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}