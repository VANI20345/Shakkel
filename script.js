// زر العودة لأعلى الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // زر العودة لأعلى
    const backToTopButton = document.getElementById('back-to-top');
    
    // إظهار أو إخفاء الزر حسب التمرير
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) { // عندما يتم التمرير أكثر من 300 بكسل
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });
    
    // التمرير لأعلى عند النقر على الزر
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // القائمة للجوال
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
      });
      
      // إغلاق القائمة عند النقر على أي رابط
      const navLinks = document.querySelectorAll('.nav-menu a');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          navMenu.classList.remove('active');
        });
      });
    }
  
    // تفعيل نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // هنا يمكن إضافة التحقق من صحة البيانات
        const formData = new FormData(this);
        
        // عادة هنا يتم إرسال البيانات إلى السيرفر
        // لكن هنا سنعرض رسالة فقط
        alert('تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.');
        
        // إعادة تعيين النموذج
        this.reset();
      });
    }
  
    // تفعيل الأسئلة الشائعة
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
      accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', function() {
          // إزالة الكلاس من جميع العناصر
          accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
            }
          });
          
          // تبديل الكلاس للعنصر الحالي
          item.classList.toggle('active');
        });
      });
    }
  
    // تفعيل فلترة المشاريع
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          // إزالة الكلاس النشط من جميع الأزرار
          filterButtons.forEach(btn => {
            btn.classList.remove('active');
          });
          
          // إضافة الكلاس النشط للزر الحالي
          this.classList.add('active');
          
          // فلترة المشاريع
          const filterValue = this.getAttribute('data-filter');
          
          projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    }
  
    // تفعيل نوافذ تفاصيل المشاريع
    const viewProjectLinks = document.querySelectorAll('.view-project');
    if (viewProjectLinks.length > 0) {
      viewProjectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetModal = document.querySelector(targetId);
          
          if (targetModal) {
            targetModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // منع التمرير عندما تكون النافذة مفتوحة
            
            // إغلاق النافذة عند النقر على الزر
            const closeButton = targetModal.querySelector('.modal-close');
            closeButton.addEventListener('click', function() {
              targetModal.style.display = 'none';
              document.body.style.overflow = ''; // استعادة التمرير
            });
            
            // إغلاق النافذة عند النقر خارجها
            const overlay = targetModal.querySelector('.modal-overlay');
            overlay.addEventListener('click', function() {
              targetModal.style.display = 'none';
              document.body.style.overflow = ''; // استعادة التمرير
            });
          }
        });
      });
    }
  });
  