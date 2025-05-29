"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFileAlt, FaDownload, FaSearch, FaFilter, FaCalendarAlt, FaChartBar } from 'react-icons/fa';
import Button from '@/components/ui/Button';

const allReports = [
  {
    id: 1,
    title: 'Báo cáo tài chính Quý 2/2025',
    type: 'quarterly',
    date: '01/07/2025',
    description: 'Tổng hợp các khoản thu chi và hoạt động tài chính trong quý 2 năm 2025.',
    size: '2.5 MB',
    downloads: 145,
    link: '#',
  },
  {
    id: 2,
    title: 'Báo cáo tài chính Quý 1/2025',
    type: 'quarterly',
    date: '01/04/2025',
    description: 'Tổng hợp các khoản thu chi và hoạt động tài chính trong quý 1 năm 2025.',
    size: '2.3 MB',
    downloads: 189,
    link: '#',
  },
  {
    id: 3,
    title: 'Báo cáo tổng kết năm 2024',
    type: 'annual',
    date: '15/01/2025',
    description: 'Báo cáo tổng kết hoạt động và tài chính của CLB trong năm 2024.',
    size: '5.1 MB',
    downloads: 256,
    link: '#',
  },
  {
    id: 4,
    title: 'Báo cáo tài chính Quý 4/2024',
    type: 'quarterly',
    date: '01/01/2025',
    description: 'Tổng hợp các khoản thu chi và hoạt động tài chính trong quý 4 năm 2024.',
    size: '2.4 MB',
    downloads: 167,
    link: '#',
  },
  {
    id: 5,
    title: 'Báo cáo tài chính Quý 3/2024',
    type: 'quarterly',
    date: '01/10/2024',
    description: 'Tổng hợp các khoản thu chi và hoạt động tài chính trong quý 3 năm 2024.',
    size: '2.2 MB',
    downloads: 198,
    link: '#',
  },
  {
    id: 6,
    title: 'Báo cáo tài chính Quý 2/2024',
    type: 'quarterly',
    date: '01/07/2024',
    description: 'Tổng hợp các khoản thu chi và hoạt động tài chính trong quý 2 năm 2024.',
    size: '2.3 MB',
    downloads: 212,
    link: '#',
  },
  {
    id: 7,
    title: 'Báo cáo tài chính Quý 1/2024',
    type: 'quarterly',
    date: '01/04/2024',
    description: 'Tổng hợp các khoản thu chi và hoạt động tài chính trong quý 1 năm 2024.',
    size: '2.1 MB',
    downloads: 234,
    link: '#',
  },
  {
    id: 8,
    title: 'Báo cáo tổng kết năm 2023',
    type: 'annual',
    date: '15/01/2024',
    description: 'Báo cáo tổng kết hoạt động và tài chính của CLB trong năm 2023.',
    size: '4.8 MB',
    downloads: 289,
    link: '#',
  },
];

const ITEMS_PER_PAGE = 5;

export default function ReportsArchivePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique years from reports
  const years = [...new Set(allReports.map(report => 
    new Date(report.date.split('/').reverse().join('-')).getFullYear()
  ))].sort((a, b) => b - a);

  // Filter and sort reports
  const filteredReports = allReports
    .filter(report => {
      const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          report.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || report.type === selectedType;
      const matchesYear = selectedYear === 'all' || 
                         report.date.split('/')[2] === selectedYear;
      return matchesSearch && matchesType && matchesYear;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        const dateB = new Date(b.date.split('/').reverse().join('-'));
        return sortOrder === 'desc' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
      }
      if (sortBy === 'downloads') {
        return sortOrder === 'desc' ? b.downloads - a.downloads : a.downloads - b.downloads;
      }
      return 0;
    });

  // Calculate pagination
  const totalPages = Math.ceil(filteredReports.length / ITEMS_PER_PAGE);
  const paginatedReports = filteredReports.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to first page when filters change
  const handleFilterChange = (callback: Function) => {
    setCurrentPage(1);
    callback();
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative bg-primary-800 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg"
            alt="Lưu trữ báo cáo"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lưu trữ báo cáo tài chính
            </h1>
            <p className="text-xl mb-4 text-neutral-200">
              Tra cứu và tải xuống các báo cáo tài chính của CLB Thiện Nguyện Smile Gift qua các năm.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Filters */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Tìm kiếm
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm kiếm báo cáo..."
                      value={searchTerm}
                      onChange={(e) => handleFilterChange(() => setSearchTerm(e.target.value))}
                      className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Loại báo cáo
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => handleFilterChange(() => setSelectedType(e.target.value))}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">Tất cả</option>
                    <option value="quarterly">Báo cáo quý</option>
                    <option value="annual">Báo cáo năm</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Năm
                  </label>
                  <select
                    value={selectedYear}
                    onChange={(e) => handleFilterChange(() => setSelectedYear(e.target.value))}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">Tất cả</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Sắp xếp theo
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={sortBy}
                      onChange={(e) => handleFilterChange(() => setSortBy(e.target.value))}
                      className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="date">Ngày</option>
                      <option value="downloads">Lượt tải</option>
                    </select>
                    <button
                      onClick={() => handleFilterChange(() => setSortOrder(order => order === 'asc' ? 'desc' : 'asc'))}
                      className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50"
                    >
                      {sortOrder === 'desc' ? '↓' : '↑'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Results count */}
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <p className="text-sm text-neutral-600">
                  Hiển thị {paginatedReports.length} trong tổng số {filteredReports.length} báo cáo
                </p>
              </div>
            </div>

            {/* Reports List */}
            <div className="space-y-4">
              {paginatedReports.map((report) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <FaFileAlt className="text-primary-600 mr-2" />
                        <h3 className="text-xl font-bold">{report.title}</h3>
                      </div>
                      
                      <p className="text-neutral-600 mb-4">{report.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1" />
                          {report.date}
                        </div>
                        <div className="flex items-center">
                          <FaChartBar className="mr-1" />
                          {report.downloads} lượt tải
                        </div>
                        <div>
                          Dung lượng: {report.size}
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      leftIcon={<FaDownload />}
                      className="ml-4 flex-shrink-0"
                    >
                      <a href={report.link} download>
                        Tải xuống
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredReports.length === 0 && (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2">Không tìm thấy báo cáo</h3>
                <p className="text-neutral-600">
                  Không có báo cáo nào phù hợp với tiêu chí tìm kiếm của bạn.
                </p>
              </div>
            )}

            {/* Pagination */}
            {filteredReports.length > 0 && (
              <div className="mt-8 flex justify-center items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                  disabled={currentPage === 1}
                >
                  Trước
                </Button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-primary-700 text-white'
                          : 'text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                  disabled={currentPage === totalPages}
                >
                  Tiếp
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}