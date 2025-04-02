// 导航栏固定功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取导航栏元素
    const navbar = document.querySelector('.notion-split-view');
    if (!navbar) return;

    // 获取导航栏的原始位置
    const navbarTop = navbar.offsetTop;

    // 添加固定定位的类
    function fixNavbar() {
        if (window.scrollY > navbarTop) {
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.left = '0';
            navbar.style.right = '0';
            navbar.style.zIndex = '1000';
            navbar.style.backgroundColor = 'var(--background-color)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.webkitBackdropFilter = 'blur(10px)';
            navbar.style.borderBottom = '1px solid var(--border-color)';
            
            // 添加过渡效果
            navbar.style.transition = 'all 0.3s ease';
        } else {
            navbar.style.position = 'relative';
            navbar.style.top = '';
            navbar.style.left = '';
            navbar.style.right = '';
            navbar.style.zIndex = '';
            navbar.style.backgroundColor = '';
            navbar.style.backdropFilter = '';
            navbar.style.webkitBackdropFilter = '';
            navbar.style.borderBottom = '';
        }
    }

    // 监听滚动事件
    window.addEventListener('scroll', fixNavbar);
    // 页面加载时也执行一次
    fixNavbar();
}); 