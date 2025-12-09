# LAMS Project (Next.js 13 App Router)

Dự án này là website LAMS (trường/viện đào tạo) được xây dựng bằng **Next.js 13+ (App Router)** với **TypeScript** và **SCSS Modules**. Cấu trúc đã được tối ưu để dễ mở rộng, triển khai production và tích hợp API/CMS sau này.

## 1. Tính năng chính

- Trang chủ với các section:
  - Hero / Banner
  - Giới thiệu (About)
  - Lý do chọn LAMS (Why Choose)
  - Tìm kiếm/chọn chương trình học (Program Search)
  - Blog / Tin tức nổi bật
  - Các section giới thiệu khóa học, quy trình, testimonial, subscribe…
- Trang tĩnh:
  - `/about` – Giới thiệu chi tiết LAMS
  - `/contact` – Thông tin liên hệ, form liên hệ (nếu có)
  - `/news` – Danh sách bài viết/tin tức
- Trang chương trình học (`/programs`):
  - Liệt kê các chương trình: **Undergraduate (BBA)**, **Postgraduate (MBA)**, **Doctorate (DBA)**
  - Lọc/tìm kiếm cơ bản theo từ khóa
- Trang chi tiết chương trình (dynamic routes theo bậc học và id):
  - `/programs/undergraduate/[id]`
  - `/programs/postgraduate/[id]`
  - `/programs/doctorate/[id]`
- Sử dụng **SCSS Modules** + global styles, biến màu sắc, mixin.
- Dữ liệu mô phỏng (mock) trong `src/data/programDetails.json` dùng để render nội dung chương trình.

## 2. Công nghệ sử dụng

- **Next.js 13+ App Router** (`src/app`)
- **React 18**
- **TypeScript**
- **SCSS Modules** & Global SCSS (`globals.scss`, `_variables.scss`, `_mixins.scss`)
- Cấu trúc component theo feature (Home, AboutUs, Programs, layout…)

## 3. Cấu trúc thư mục

```bash
src/
  app/
    page.tsx                # Trang chủ
    layout.tsx              # Root layout
    globals.scss            # Global styles

    about/
      page.tsx
      page.module.scss

    contact/
      page.tsx
      page.module.scss

    news/
      page.tsx
      page.module.scss

    programs/
      page.tsx              # Danh sách tất cả chương trình
      page.module.scss

      undergraduate/
        [id]/page.tsx       # Chi tiết chương trình BBA
        page.module.scss

      postgraduate/
        [id]/page.tsx       # Chi tiết chương trình MBA
        page.module.scss

      doctorate/
        [id]/page.tsx       # Chi tiết chương trình DBA
        page.module.scss

  components/
    layout/
      Header/
      Footer/
      MainLayout/
    Home/
      Banner/
      AboutSection/
      ProgramSearch/
      Blog/
      WhyChooseSection/
    AboutUs/
      HeroSection/
      CoursesSection/
      FeatureCards/
      HowItWorks/
      QuoteSection/
      SubscribeSection/
    Programs/
      ProgramDetail.tsx

  data/
    programDetails.json     # Mock data cho chi tiết chương trình

  styles/
    _variables.scss
    _mixins.scss
    global.scss

public/
  images/                   # Toàn bộ assets hình ảnh cho UI
```

## 4. Cài đặt & chạy dự án

### Yêu cầu

- **Node.js 18+**
- **npm** hoặc **yarn**

### Bước 1: Cài đặt dependencies

```bash
cd /Users/Workspace/nextjs/lams-project
npm install
# hoặc
# yarn
```

### Bước 2: Chạy môi trường development

```bash
npm run dev
# hoặc
# yarn dev
```

Mở trình duyệt tại: http://localhost:3000

