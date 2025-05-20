import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaMapMarkerAlt, FaFilter, FaSearch } from 'react-icons/fa';
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
  },
];

export default function ProgramsPage() {
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
                  />
                </div>
                <div className="flex gap-4">
                  <select className="py-3 px-4 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer">
                    <option value="">Tất cả danh mục</option>
                    <option value="fundraising">Gây quỹ</option>
                    <option value="volunteer">Công quả</option>
                    <option value="medical">Y tế</option>
                    <option value="gift">Tặng quà</option>
                  </select>
                  <select className="py-3 px-4 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer">
                    <option value="">Trạng thái</option>
                    <option value="upcoming">Sắp diễn ra</option>
                    <option value="completed">Đã hoàn thành</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Upcoming Programs */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Sắp diễn ra</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPrograms.filter(p => p.status === 'upcoming').map((program) => (
              <Card key={program.id} className="h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-primary-700 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {program.category}
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
            ))}
          </div>
        </div>
      </section>
      
      {/* Completed Programs */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Đã hoàn thành</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPrograms.filter(p => p.status === 'completed').map((program) => (
              <Card key={program.id} className="h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-secondary-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {program.category}
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
                  
                  <Button variant="outline" size="sm">
                    <Link href={`/programs/${program.id}`}>
                      Xem kết quả
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
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