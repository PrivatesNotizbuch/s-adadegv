// محتوى افتراضي
const defaults = {
  siteTitle: 'سطحه الدمام',
  heroDesc: 'نقل جميع أنواع السيارات، هيدروليك وعادي — متاح 24/7',
  service1Title: 'نقل السيارات المعطلة',
  service1Desc: 'نقل جميع انواع السيارات المعطلة والمصدومة داخل وخارج المدينة.',
  service2Title: 'نقل بين المدن',
  service2Desc: 'نقل السيارات بين المدن بسطحات حديثة ومأمونة.',
  service3Title: 'سطحه هيدروليك',
  service3Desc: 'سطحة هيدروليك لنقل السيارات الرياضية والدراجات النارية.',
  aboutText: 'سطحه في مدينة الدمام والخبر لنقل السيارات — نوفر لك سطحة احترافية ذات جودة عالية وبأسعار مناسبة.',
  phone1: '+966537354161',
  phone2: '+966577853024',
  insta: 'https://www.instagram.com/t_p_2025?igsh=MTU1ZXppYzJtY3R1dg==',
  tiktok: 'https://www.tiktok.com/@dammam7263737?_t=ZN-90qC8duAYLe&_r=1',
  gmap: 'https://maps.app.goo.gl/KYdgBhDeJnmyHo3s5'
};

function loadData(){
  const data = JSON.parse(localStorage.getItem('siteData') || '{}');
  const cfg = Object.assign({}, defaults, data);
  document.getElementById('site-title').innerText = cfg.siteTitle;
  document.getElementById('hero-desc').innerText = cfg.heroDesc;
  document.getElementById('service1-title').innerText = cfg.service1Title;
  document.getElementById('service1-desc').innerText = cfg.service1Desc;
  document.getElementById('service2-title').innerText = cfg.service2Title;
  document.getElementById('service2-desc').innerText = cfg.service2Desc;
  document.getElementById('service3-title').innerText = cfg.service3Title;
  document.getElementById('service3-desc').innerText = cfg.service3Desc;
  document.getElementById('about-text').innerText = cfg.aboutText;
  document.getElementById('phone1').href = 'tel:' + cfg.phone1.replace(/\s+/g,'');
  document.getElementById('phone1').innerText = cfg.phone1;
  document.getElementById('phone2').href = 'tel:' + cfg.phone2.replace(/\s+/g,'');
  document.getElementById('phone2').innerText = cfg.phone2;
  document.getElementById('insta').href = cfg.insta;
  document.getElementById('tiktok').href = cfg.tiktok;
  document.getElementById('gmap-link').href = cfg.gmap;
  // زر واتساب
  document.getElementById('whatsapp').href = 'https://wa.me/' + cfg.phone1.replace(/[^0-9]/g,'');
}

window.addEventListener('DOMContentLoaded', loadData);
