# AltiumLab — Ứng dụng Web & iOS PWA Học Altium Designer

Bộ mã nguồn đã được cấu hình đầy đủ chuẩn **GitHub Pages + iOS Web App (PWA)** để chạy toàn màn hình như ứng dụng gốc trên iPhone và iPad, kèm trọn bộ icon chuẩn Apple.

## Cấu trúc tệp
- `index.html` — Ứng dụng AltiumLab hoàn chỉnh (đã tối ưu vùng tai thỏ/Dynamic Island `viewport-fit=cover` và thẻ `apple-mobile-web-app-capable`).
- `manifest.webmanifest` — Cấu hình ứng dụng PWA (`display: standalone`, tên, màu thanh trạng thái, icon).
- `sw.js` — Service Worker hỗ trợ lưu đệm (cache) giúp mở nhanh và học ngoại tuyến trên iOS.
- `apple-touch-icon.png` & `icons/icon-{120,152,167,180,192,512}.png` — Trọn bộ icon nền đầy (opaque) chuẩn iPhone, iPad, iPad Pro và PWA.
- `favicon.svg` & `favicon.ico` — Icon cho trình duyệt máy tính.
- `.nojekyll` — Đảm bảo GitHub Pages phục vụ toàn bộ tệp chính xác.

## Bước 1: Đưa lên GitHub & bật GitHub Pages
1. Tạo repository mới trên GitHub (ví dụ `altiumlab`).
2. Giải nén `altiumlab-github-ios.zip` và tải toàn bộ tệp (kể cả thư mục `icons/` và tệp `.nojekyll`) lên nhánh `main`.
3. Vào **Settings → Pages → Build and deployment → Source: Deploy from a branch**, chọn nhánh `main` và `/ (root)` → bấm **Save**.
4. Đợi 1–2 phút để nhận đường dẫn `https://<ten-github>.github.io/altiumlab/`.

## Bước 2: Cài đặt chạy như App trên iOS (iPhone / iPad)
1. Mở đường dẫn GitHub Pages vừa tạo bằng trình duyệt **Safari** trên iPhone/iPad.
2. Bấm nút **Chia sẻ (Share)** ở thanh dưới cùng.
3. Chọn **Thêm vào Màn hình chính (Add to Home Screen)** → bấm **Thêm (Add)**.
4. Biểu tượng **AltiumLab** màu vàng hổ phách sẽ xuất hiện ngay trên màn hình chính và mở toàn màn hình không thanh địa chỉ.
