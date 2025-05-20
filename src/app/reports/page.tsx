import Image from 'next/image';
import Link from 'next/link';
import { FaFileAlt, FaDownload, FaChartBar, FaHandHoldingUsd, FaSearchDollar } from 'react-icons/fa';
import Button from '@/components/ui/Button';

const financialReports = [
  {
    id: 1,
    title: 'Báo cáo tài chính Quý 2/2025',
    date: '01/07/2025',
    description: 'Tổng hợp các khoản thu chi và hoạt động tài chính trong quý 2 năm 2025.',
    link: '#',
  },
  {
    id: 2,
    title: 'Báo cáo tài chính Quý 1/2025',
    date: '01/04/2025',
    description: 'Tổng hợp các khoản thu chi và hoạt động tài chính trong quý 1 năm 2025.',
    link: '#',
  },
  {
    id: 3,
    title: 'Báo cáo tài chính Quý 4/2024',
    date: '01/01/2025',
    description: 'Tổng hợp các khoản thu chi và hoạt động tài chính trong quý 4 năm 2024.',
    link: '#',
  },
  {
    id: 4,
    title: 'Báo cáo tài chính Quý 3/2024',
    date: '01/10/2024',
    description: 'Tổng hợp các khoản thu chi và hoạt động tài chính trong quý 3 năm 2024.',
    link: '#',
  },
];

const projects = [
  {
    id: 1,
    name: 'Đêm nhạc "Yêu Là Đủ"',
    raised: '35.000.000',
    spent: '32.500.000',
    balance: '2.500.000',
    percent: 93,
  },
  {
    id: 2,
    name: 'Chương trình mổ mắt từ thiện',
    raised: '50.000.000',
    spent: '48.000.000',
    balance: '2.000.000',
    percent: 96,
  },
  {
    id: 3,
    name: 'Tặng quà Tết cho người vô gia cư',
    raised: '20.000.000',
    spent: '19.500.000',
    balance: '500.000',
    percent: 98,
  }
];

export default function ReportsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative bg-primary-800 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg"
            alt="Báo cáo tài chính"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Báo cáo tài chính
            </h1>
            <p className="text-xl mb-4 text-neutral-200">
              Tại Smile Gift, chúng tôi cam kết tính minh bạch trong mọi hoạt động tài chính. Mọi đóng góp đều được quản lý và sử dụng hiệu quả.
            </p>
          </div>
        </div>
      </div>
      
      {/* Financial Summary */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Tổng quan tài chính</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mr-4">
                  <FaHandHoldingUsd size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Tổng quyên góp</h3>
                  <p className="text-sm text-neutral-500">Từ khi thành lập</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-primary-700">300.000.000 đ</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary-100 text-secondary-700 rounded-full mr-4">
                  <FaChartBar size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Số dự án</h3>
                  <p className="text-sm text-neutral-500">Đã triển khai</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-secondary-700">30+</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-accent-100 text-accent-700 rounded-full mr-4">
                  <FaSearchDollar size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Chi phí hoạt động</h3>
                  <p className="text-sm text-neutral-500">Trung bình hàng tháng</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-accent-700">5%</div>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Hiệu quả sử dụng ngân sách gần đây</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Dự án</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Quyên góp được</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Đã sử dụng</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Số dư</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Hiệu quả</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {projects.map((project) => (
                      <tr key={project.id}>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{project.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{project.raised} đ</td>
                        <td className="px-6 py-4 whitespace-nowrap">{project.spent} đ</td>
                        <td className="px-6 py-4 whitespace-nowrap">{project.balance} đ</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-full bg-neutral-200 rounded-full h-2.5 mr-2">
                              <div 
                                className="bg-primary-600 h-2.5 rounded-full" 
                                style={{ width: `${project.percent}%` }}
                              ></div>
                            </div>
                            <span>{project.percent}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Download Reports */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Báo cáo tài chính chi tiết</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {financialReports.map((report) => (
              <div key={report.id} className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-6 flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-700 rounded-lg">
                    <FaFileAlt size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                  <p className="text-sm text-neutral-500 mb-2">Xuất bản: {report.date}</p>
                  <p className="text-neutral-600 mb-4">{report.description}</p>
                  <a 
                    href={report.link} 
                    className="inline-flex items-center text-primary-700 hover:text-primary-800"
                  >
                    <FaDownload className="mr-2" size={14} />
                    Tải xuống báo cáo
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="primary">
              <Link href="/reports/archive">
                Xem tất cả báo cáo
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Transparency Policy */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Chính sách minh bạch</h2>
            <p className="text-lg mb-6">
              Tại CLB Thiện Nguyện Smile Gift, chúng tôi cam kết duy trì tính minh bạch cao nhất trong mọi hoạt động tài chính. Điều này bao gồm:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <div className="text-primary-700 mr-4 mt-1">•</div>
                <div>
                  <p>Báo cáo tài chính hàng tháng và hàng quý được công khai trên website.</p>
                </div>
              </li>
              <li className="flex">
                <div className="text-primary-700 mr-4 mt-1">•</div>
                <div>
                  <p>Chi tiết thu chi của từng dự án được ghi chép và công khai đầy đủ.</p>
                </div>
              </li>
              <li className="flex">
                <div className="text-primary-700 mr-4 mt-1">•</div>
                <div>
                  <p>Các khoản đóng góp được sử dụng đúng mục đích theo cam kết.</p>
                </div>
              </li>
              <li className="flex">
                <div className="text-primary-700 mr-4 mt-1">•</div>
                <div>
                  <p>Hóa đơn, chứng từ chi tiêu được lưu trữ và sẵn sàng cho việc kiểm tra.</p>
                </div>
              </li>
              <li className="flex">
                <div className="text-primary-700 mr-4 mt-1">•</div>
                <div>
                  <p>Định kỳ tổ chức các buổi họp mở để giải đáp mọi thắc mắc về tài chính.</p>
                </div>
              </li>
            </ul>
            
            <p className="italic text-neutral-600">
              "Mỗi đồng quyên góp đều là niềm tin của nhà hảo tâm dành cho chúng tôi. Chúng tôi trân trọng niềm tin đó và cam kết sử dụng hiệu quả để tạo ra tác động tích cực đến cộng đồng."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}