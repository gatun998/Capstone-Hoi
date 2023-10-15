

// Model 
function handleRightSidebar(rightSidebarModify) {
    if (rightSidebarModify.classList.contains("nav-collapse-show")) {
        // Nếu thanh sidebar đang được đóng, thì mở nó
        rightSidebarModify.classList.remove("nav-collapse-show");
    } else {
        // Nếu thanh sidebar đang được mở, thì đóng nó
        rightSidebarModify.classList.add("nav-collapse-show");
    }
}

// Controller
function toggleRightSidebar() {
    const rightSidebarModify = document.getElementById("right-sidebar");

    // Gọi hàm handleRightSidebar để xử lý mở/closed thanh sidebar
    handleRightSidebar(rightSidebarModify);
}


// Gắn sự kiện click cho nút mở/closed
const openButton = document.getElementById("open-right-sidebar");
openButton.addEventListener("click", toggleRightSidebar);

