// Hàm chuyển đổi qua lại giữa các màn hình (SPA)
function switchTab(viewId, clickedElement) {
    // 1. Ẩn tất cả các thẻ div có class 'view-section'
    const views = document.querySelectorAll('.view-section');
    views.forEach(view => {
        view.style.display = 'none';
        view.classList.remove('active');
    });

    // 2. Hiện thẻ div được chọn
    const targetView = document.getElementById('view-' + viewId);
    if (targetView) {
        targetView.style.display = 'block';
        // Timeout nhỏ để kích hoạt animation CSS mượt mà
        setTimeout(() => targetView.classList.add('active'), 10); 
    }

    // 3. Quản lý trạng thái Active trên Top Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    if (clickedElement && clickedElement.classList.contains('nav-link')) {
        clickedElement.classList.add('active');
    }

    // 4. Đồng bộ trạng thái Active với các Icon ở Sidebar (Tuỳ chọn thêm)
    const sidebarIcons = document.querySelectorAll('.sidebar-menu .icon-placeholder');
    sidebarIcons.forEach(icon => icon.classList.remove('active-icon'));
    
    // Gắn active icon dựa theo view
    let iconIndex = 0;
    if(viewId === 'dashboard') iconIndex = 0;
    else if(viewId === 'transactions') iconIndex = 1;
    else if(viewId === 'budget') iconIndex = 2;
    else if(viewId === 'reports') iconIndex = 3;
    else if(viewId === 'accounts') iconIndex = 4;

    if(sidebarIcons[iconIndex]) {
        sidebarIcons[iconIndex].classList.add('active-icon');
    }
}