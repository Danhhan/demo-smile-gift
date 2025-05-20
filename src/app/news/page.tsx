import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUserAlt, FaSearch, FaFilter } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const allNews = [
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
  {
    id: 4,
    title: 'Chiến dịch "Mắt sáng cho người già" đạt mục tiêu phẫu thuật cho 100 bệnh nhân',
    excerpt: 'Sau 3 tháng phát động, chiến dịch đã hỗ trợ chi phí phẫu thuật mắt cho 100 người cao tuổi có hoàn cảnh khó khăn.',
    date: '05/05/2025',
    author: 'Quốc Tuấn',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
    category: 'Hoạt động',
  },
  {
    id: 5,
    title: 'Gương mặt TNV tiêu biểu: Nguyễn Thành Trung và hành trình 20 chương trình thiện nguyện',
    excerpt: 'Câu chuyện cảm động về chàng trai 22 tuổi đã tham gia hơn 20 chương trình thiện nguyện cùng Smile Gift.',
    date: '28/04/2025',
    author: 'Thu Hương',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    category: 'Tình nguyện viên',
  },
  {
    id: 6,
    title: 'Chùa Phổ Quang và Smile Gift: Hợp tác thiện nguyện bền chặt',
    excerpt: 'Mối quan hệ đối tác giữa Chùa Phổ Quang và CLB Thiện Nguyện Smile Gift trong các hoạt động công quả và từ thiện.',
    date: '15/04/2025',
    author: 'Minh Đức',
    image: 'https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg',
    category: 'Đối tác',
  },
];

export default function NewsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative bg-primary-800 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg"
            alt="Tin tức hoạt động"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tin tức & Hoạt động
            </h1>
            <p className="text-xl mb-6 text-neutral-200">
              Cập nhật thông tin mới nhất về các hoạt động thiện nguyện và câu chuyện truyền cảm hứng.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-white" />
                </div>
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  className="w-full py-3 pl-10 pr-4 bg-white/10 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <select className="py-3 px-4 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer">
                <option value="">Tất cả danh mục</option>
                <option value="media">Truyền thông</option>
                <option value="press">Báo chí</option>
                <option value="activities">Hoạt động</option>
                <option value="volunteer">Tình nguyện viên</option>
                <option value="partner">Đối tác</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* News List */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((news) => (
              <Card key={news.id} className="h-full flex flex-col">
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
                    className="mt-auto"
                  >
                    <Link href={`/news/${news.id}`}>
                      Đọc tiếp
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center">
              <Button variant="outline" size="sm" className="mr-2" disabled>
                Trước
              </Button>
              
              <div className="flex">
                <a
                  href="#"
                  className="mx-1 flex items-center justify-center w-10 h-10 rounded-lg bg-primary-700 text-white"
                >
                  1
                </a>
                <a
                  href="#"
                  className="mx-1 flex items-center justify-center w-10 h-10 rounded-lg hover:bg-primary-50 text-neutral-600"
                >
                  2
                </a>
                <a
                  href="#"
                  className="mx-1 flex items-center justify-center w-10 h-10 rounded-lg hover:bg-primary-50 text-neutral-600"
                >
                  3
                </a>
              </div>
              
              <Button variant="outline" size="sm" className="ml-2">
                Tiếp
              </Button>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Cập nhật tin tức mới nhất
            </h2>
            <p className="text-lg mb-8">
              Đăng ký nhận thông tin về các hoạt động thiện nguyện và tin tức mới nhất từ CLB Thiện Nguyện Smile Gift.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 py-3 px-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button variant="primary">
                Đăng ký
              </Button>
            </div>
            
            <p className="text-sm text-neutral-500 mt-4">
              Chúng tôi tôn trọng quyền riêng tư của bạn và sẽ không chia sẻ thông tin của bạn với bất kỳ bên thứ ba nào.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}