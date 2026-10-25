window.GLAMPIFY={
 /* Danh sách ảnh (tất cả nằm trong thư mục images/).
    Mỗi combo: 4 ảnh riêng (tên combo + 1..4) rồi ảnh cuối chung là nguoimoi4.jpg (index 4) */
 IMG:[
  /* 0-4: Gà Mờ Vào Lều (ảnh số 4 = ảnh cuối dùng chung cho mọi combo) */
  "images/nguoimoi0.jpg",
  "images/nguoimoi1.jpg",
  "images/nguoimoi2.jpg",
  "images/nguoimoi3.jpg",
  "images/nguoimoi4.jpg",
  /* 5-8: Lão Làng Xuất Sơn */
  "images/laolang1.jpg",
  "images/laolang2.jpg",
  "images/laolang3.jpg",
  "images/laolang4.png",
  /* 9-12: Một Mình Cũng Chill */
  "images/motminh1.png",
  "images/motminh2.png",
  "images/motminh3.png",
  "images/motminh4.png",
  /* 13-16: Đôi Ta Mùa Lá */
  "images/doitamuala1.png",
  "images/doitamuala2.png",
  "images/doitamuala3.jpg",
  "images/doitamuala4.png",
  /* 17-20: Ẩn Mình Mùa Đông */
  "images/anminhmuadong1.png",
  "images/anminhmuadong2.png",
  "images/anminhmuadong3.png",
  "images/anminhmuadong4.png",
  /* 21-24: Sưởi Ấm Đôi Ta */
  "images/doita1.png",
  "images/doita2.png",
  "images/doita3.png",
  "images/doita4.png",
  /* 25-28: CampBox 1: Noel */
  "images/noel1.png",
  "images/noel2.png",
  "images/noel3.png",
  "images/noel4.png",
  /* 29-32: CampBox 2: Ngày Lễ */
  "images/ngayle1.png",
  "images/ngayle2.png",
  "images/ngayle3.png",
  "images/ngayle4.png"
 ],
 CATS:{
   "nguoi-moi": {"label": "Combo Theo Kinh Nghiệm", "href": "combo-kinh-nghiem.html", "note": "Combo dành riêng cho người chưa có kinh nghiệm: mọi thứ đều bật là lên, dễ tháo lắp."},
   "lao-lang": {"label": "Combo Theo Kinh Nghiệm", "href": "combo-kinh-nghiem.html", "note": "Combo đầy thách thức: lều dựng thủ công, bếp củi, dành cho dân camp thứ thiệt."},
   "mua-thu": {"label": "Combo Mùa Thu", "href": "combo-mua.html", "note": "Gọn nhẹ, tiện nghi, lãng mạn, phù hợp với thời tiết mát mẻ mùa thu."},
   "mua-dong": {"label": "Combo Mùa Đông", "href": "combo-mua.html", "note": "Trang bị đầy đủ túi ngủ lông vũ, đèn sưởi và đệm cách nhiệt chống rét."},
   "su-kien": {"label": "CampBox Sự Kiện", "href": "combo-su-kien.html", "note": "Được thiết kế trọn gói cho tiệc sinh nhật, họp lớp, tất niên hay ngày lễ."}
 },
 GUIDE:[
  "Nhận đồ và đối chiếu với danh sách bên cạnh trước khi rời điểm giao nhận.",
  "Dựng lều trên nền phẳng, tránh chỗ trũng; cắm cọc và căng dây chằng đủ chắc.",
  "Dùng bếp ga ở nơi thoáng gió, không nấu trong lều.",
  "Trả đồ đúng hạn, gấp gọn và dọn rác. Glampify sẽ vệ sinh phần còn lại.",
  "Trời mưa vào ngày đi: nhắn Glampify để đổi lịch miễn phí."
 ],
 PRODUCTS:[
 // ==========================================
 // 1. NHÓM NGƯỜI MỚI & LÃO LÀNG
 // ==========================================
 {"id": "combo-nguoi-moi", "name": "Gà Mờ Vào Lều", "cat": "nguoi-moi", "img": 0, "gallery": [0, 1, 2, 3, 4], "people": [2], "chips": ["Lều tự bật", "Dễ lắp đặt"], "lead": "Tân Binh Lên Núi – Combo Cho Người Chưa Từng Có Kinh Nghiệm", "desc": ["Lều Liều là combo dành riêng cho bạn – tiêu chí 'bật là lên', mọi thứ đều dễ lắp, dễ tháo. Giao tận campsite, bạn đến là có sẵn.", "✅ Dành riêng cho người mới: lều pop-up tự bật 10 giây.", "✅ Tiện lợi tối đa: đèn sạc 2 in 1, bếp gas mini + nồi."], "items": [{"n": "Lều 2 người pop-up", "u": "chiếc", "per": 2, "fix": 0, "night": 0}, {"n": "Thảm picnic", "u": "tấm", "per": 0, "fix": 1, "night": 0}, {"n": "Túi ngủ", "u": "chiếc", "per": 1, "fix": 0, "night": 0}, {"n": "Đèn sạc 2 in 1", "u": "chiếc", "per": 0, "fix": 1, "night": 0}, {"n": "Bếp gas mini + nồi", "u": "bộ", "per": 0, "fix": 1, "night": 0}, {"n": "Set dụng cụ ăn", "u": "set", "per": 1, "fix": 0, "night": 0}, {"n": "Túi rác", "u": "túi", "per": 0, "fix": 1, "night": 0}], "stock": true},

 {"id": "combo-lao-lang", "name": "Lão Làng Xuất Sơn", "cat": "lao-lang", "img": 5, "gallery": [5, 6, 7, 8, 4], "people": [4, 6], "chips": ["Lều dome", "Bếp củi"], "lead": "Thuê Combo Cắm Trại Thách Thức Cho Dân Camp Muốn Tăng Độ Khó", "desc": ["Tiêu chí 'khó mới vui – dễ thì chán', mọi thứ đều thách thức kỹ năng dựng lều, nhóm lửa.", "✅ Dành riêng cho lão làng: lều dome dựng thủ công, bếp củi.", "✅ Sinh tồn cơ bản: la bàn, dao đa năng chặt củi."], "items": [{"n": "Lều dome 6 người", "u": "chiếc", "per": 6, "fix": 0, "night": 0}, {"n": "Thảm ngủ", "u": "tấm", "per": 1, "fix": 0, "night": 0}, {"n": "Thảm picnic", "u": "tấm", "per": 0, "fix": 1, "night": 0}, {"n": "Chăn mỏng", "u": "chiếc", "per": 2, "fix": 0, "night": 0}, {"n": "Dụng cụ tạo lửa - bếp củi", "u": "bộ", "per": 0, "fix": 1, "night": 0}, {"n": "Nồi đa năng", "u": "chiếc", "per": 0, "fix": 1, "night": 0}, {"n": "Đèn sạc 2 in 1", "u": "chiếc", "per": 0, "fix": 1, "night": 0}, {"n": "Set dụng cụ ăn uống", "u": "set", "per": 1, "fix": 0, "night": 0}, {"n": "Bàn ghế gập", "u": "bộ", "per": 0, "fix": 1, "night": 0}, {"n": "Đồ trang trí", "u": "bộ", "per": 0, "fix": 1, "night": 0}], "stock": true},

 // ==========================================
 // 2. NHÓM COMBO MÙA THU
 // ==========================================
 {"id": "thu-solo", "name": "Một Mình Cũng Chill", "cat": "mua-thu", "img": 9, "gallery": [9, 10, 11, 12, 4], "people": [1], "chips": ["1 Người"], "lead": "Solo Autumn Wanderer – Combo Cho Người Thích Đi Một Mình", "desc": ["Gọn nhẹ, dễ mang, không cần ai hỗ trợ dựng lều. Đèn sạc 2 in 1 chiếu sáng kiêm sạc dự phòng.", "Giá: 350.000đ/1 đêm — 550.000đ/2N1Đ"], "items": [{"n": "Lều 1 người pop-up", "u": "chiếc", "per": 1, "fix": 0, "night": 0}, {"n": "Thảm picnic mini", "u": "tấm", "per": 1, "fix": 0, "night": 0}, {"n": "Túi ngủ", "u": "chiếc", "per": 1, "fix": 0, "night": 0}, {"n": "Đệm cách nhiệt mini", "u": "tấm", "per": 1, "fix": 0, "night": 0}, {"n": "Đèn sạc 2 in 1", "u": "chiếc", "per": 1, "fix": 0, "night": 0}, {"n": "Bàn gấp mini", "u": "chiếc", "per": 1, "fix": 0, "night": 0}, {"n": "Bộ dụng cụ ăn", "u": "bộ", "per": 1, "fix": 0, "night": 0}], "stock": true},

 {"id": "thu-couple", "name": "Đôi Ta Mùa Lá", "cat": "mua-thu", "img": 13, "gallery": [13, 14, 15, 16, 4], "people": [2], "chips": ["Cặp Đôi"], "lead": "Autumn Leaves Date – Cho Cặp Đôi Yêu Thiên Nhiên", "desc": ["Không gian riêng tư ấm cúng, đủ đầy để cùng nhau nấu ăn giữa thiên nhiên mùa lá vàng.", "Giá: 650.000đ/1 đêm — 950.000đ/2N1Đ"], "items": [{"n": "Lều 2 người pop-up", "u": "chiếc", "per": 2, "fix": 0, "night": 0}, {"n": "Thảm picnic", "u": "tấm", "per": 1, "fix": 0, "night": 0}, {"n": "Túi ngủ", "u": "chiếc", "per": 1, "fix": 0, "night": 0}, {"n": "Đèn sạc 2 in 1", "u": "chiếc", "per": 1, "fix": 0, "night": 0}, {"n": "Bếp gas mini + Nồi", "u": "bộ", "per": 1, "fix": 0, "night": 0}, {"n": "Bộ ăn uống", "u": "bộ", "per": 1, "fix": 0, "night": 0}], "stock": true},

 // ==========================================
 // 3. NHÓM COMBO MÙA ĐÔNG
 // ==========================================
 {"id": "dong-solo", "name": "Ẩn Mình Mùa Đông", "cat": "mua-dong", "img": 17, "gallery": [17, 18, 19, 20, 4], "people": [1], "chips": ["Chống lạnh"], "lead": "Solo Winter Hideaway – Giữ Ấm Tối Đa Mùa Lạnh", "desc": ["Trang bị túi ngủ lông vũ, đệm 2 lớp chống hơi đất và đèn sưởi mini tích điện an toàn.", "Giá: 450.000đ/1 đêm — 700.000đ/2N1Đ"], "items": [{"n": "Lều 1 người chống gió", "u": "chiếc", "per": 1, "fix": 0, "night": 0}, {"n": "Túi ngủ lông vũ", "u": "chiếc", "per": 1, "fix": 0, "night": 0}, {"n": "Đệm cách nhiệt 2 lớp", "u": "tấm", "per": 1, "fix": 0, "night": 0}, {"n": "Đèn sưởi mini tích điện", "u": "chiếc", "per": 1, "fix": 0, "night": 0}, {"n": "Chăn dày", "u": "chiếc", "per": 1, "fix": 0, "night": 0}], "stock": true},

 {"id": "dong-couple", "name": "Sưởi Ấm Đôi Ta", "cat": "mua-dong", "img": 21, "gallery": [21, 22, 23, 24, 4], "people": [2], "chips": ["Ấm áp"], "lead": "Winter Warmth for Two – Ăn Lẩu Ngắm Sao Mùa Đông", "desc": ["Cung cấp bếp lẩu mini nóng hổi, đèn sưởi và lều chống gió an toàn.", "Giá: 850.000đ/1 đêm — 1.200.000đ/2N1Đ"], "items": [{"n": "Lều 2 người chống gió", "u": "chiếc", "per": 2, "fix": 0, "night": 0}, {"n": "Túi ngủ lông vũ", "u": "chiếc", "per": 1, "fix": 0, "night": 0}, {"n": "Đệm cách nhiệt 2 lớp lớn", "u": "tấm", "per": 2, "fix": 0, "night": 0}, {"n": "Đèn sưởi tích điện", "u": "chiếc", "per": 2, "fix": 0, "night": 0}, {"n": "Bếp gas + Nồi lẩu mini", "u": "bộ", "per": 2, "fix": 0, "night": 0}, {"n": "Chăn dày đôi", "u": "chiếc", "per": 2, "fix": 0, "night": 0}], "stock": true},

 // ==========================================
 // 5. CAMPBOX SỰ KIỆN
 // ==========================================
 {"id": "campbox-noel", "name": "CampBox 1: Noel", "cat": "su-kien", "img": 25, "gallery": [25, 26, 27, 28, 4], "people": [4, 10], "chips": ["Giáng Sinh", "Đèn trang trí"], "lead": "Mang Không Khí Giáng Sinh Vào Thiên Nhiên", "desc": ["Lều glamping kết hợp cây thông mini, đèn dây LED, phù hợp cho Secret Santa và Christmas party."], "items": [{"n": "Lều glamping/family", "u": "chiếc", "per": 0, "fix": 1, "night": 0}, {"n": "Cây thông mini + Đèn LED", "u": "bộ", "per": 0, "fix": 1, "night": 0}, {"n": "Phụ kiện decor Noel", "u": "bộ", "per": 0, "fix": 1, "night": 0}, {"n": "Loa Bluetooth", "u": "chiếc", "per": 0, "fix": 1, "night": 0}], "stock": true},

 {"id": "campbox-ngay-le", "name": "CampBox 2: Ngày Lễ", "cat": "su-kien", "img": 29, "gallery": [29, 30, 31, 32, 4], "people": [4, 10], "chips": ["Linh hoạt", "Dịp lễ"], "lead": "Kỳ Nghỉ Nào Cũng Trở Thành Camping", "desc": ["Combo thiết bị tiêu chuẩn dễ dàng tùy biến decor cho bất kỳ dịp lễ tết hay ngày nghỉ dài nào."], "items": [{"n": "Lều dome/family", "u": "chiếc", "per": 0, "fix": 1, "night": 0}, {"n": "Đệm/Túi ngủ", "u": "bộ", "per": 0, "fix": 1, "night": 0}, {"n": "Bếp camping + Dụng cụ ăn", "u": "bộ", "per": 0, "fix": 1, "night": 0}, {"n": "Phụ kiện trang trí linh hoạt", "u": "bộ", "per": 0, "fix": 1, "night": 0}], "stock": true}

 ],
 qty:function(it,p,nights){var q=it.fix||Math.ceil(p/it.per);return it.night?q*Math.max(1,nights):q;},
 range:function(p){var a=p.people;return a.length>1?a[0]+'–'+a[a.length-1]+' người':a[0]+' người';},
 card:function(p){
  return '<article class="card"><div class="hero-img-wrap">'+(p.stock?'':'<span class="tag out">Hết hàng</span>')+
  '<img src="'+this.IMG[p.img]+'" alt="'+p.name+'" loading="lazy"></div><div class="card-body"><h3>'+p.name+'</h3>'+
  '<div class="includes">'+p.chips.map(function(c){return '<span class="chip">'+c+'</span>'}).join('')+'</div>'+
  '<div class="meta"><span><svg><use href="#icon-users"/></svg>'+this.range(p)+'</span><span><svg><use href="#icon-clock"/></svg>Thuê từ 1 ngày</span></div>'+
  '<a href="chi-tiet-san-pham.html?id='+p.id+'" class="btn btn-outline">Xem chi tiết</a></div></article>';
 },
 renderGrids:function(){
  var self=this;
  document.querySelectorAll('[data-cat]').forEach(function(g){
   var c=g.dataset.cat;
   g.innerHTML=self.PRODUCTS.filter(function(p){return c==='all'||p.cat===c}).map(function(p){return self.card(p)}).join('');
  });
 }
};