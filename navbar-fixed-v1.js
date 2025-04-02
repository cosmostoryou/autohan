// 导航栏固定功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取 split 模板的导航栏元素
    const navbar = document.querySelector('.notion-split-view .notion-navbar');
    if (!navbar) return;

    // 创建一个包装器来保持导航栏的宽度
    const wrapper = document.createElement('div');
    wrapper.style.width = '100%';
    wrapper.style.height = '0';
    wrapper.style.position = 'relative';
    wrapper.style.zIndex = '1000';
    navbar.parentNode.insertBefore(wrapper, navbar);

    // 添加固定定位的类
    function fixNavbar() {
        if (window.scrollY > 0) {
            wrapper.style.height = navbar.offsetHeight + 'px';
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.left = '0';
            navbar.style.right = '0';
            navbar.style.zIndex = '1000';
            navbar.style.backgroundColor = 'var(--background-color)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.webkitBackdropFilter = 'blur(10px)';
            navbar.style.borderBottom = '1px solid var(--border-color)';
            navbar.style.width = '100%';
            navbar.style.maxWidth = '100%';
            
            // 添加过渡效果
            navbar.style.transition = 'all 0.3s ease';
        } else {
            wrapper.style.height = '0';
            navbar.style.position = '';
            navbar.style.top = '';
            navbar.style.left = '';
            navbar.style.right = '';
            navbar.style.zIndex = '';
            navbar.style.backgroundColor = '';
            navbar.style.backdropFilter = '';
            navbar.style.webkitBackdropFilter = '';
            navbar.style.borderBottom = '';
            navbar.style.width = '';
            navbar.style.maxWidth = '';
        }
    }

    // 监听滚动事件
    window.addEventListener('scroll', fixNavbar);
    // 监听窗口大小改变事件
    window.addEventListener('resize', fixNavbar);
    // 页面加载时也执行一次
    fixNavbar();
}); 