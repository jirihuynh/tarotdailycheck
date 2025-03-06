const tarotCards = [
    { 
        name: "The Fool", 
        img: "image/0.fool.jpg", 
        message: "Một khởi đầu mới đang đến với bạn!", 
        advice: "Hãy cởi mở với trải nghiệm mới, nhưng đừng liều lĩnh.", 
        luckIndex: () => Math.floor(Math.random() * 101), 
        luckyNumber: () => Math.floor(Math.random() * 99) + 1
    },
    { 
        name: "The Magician", 
        img: "image/1.magician.jpg", 
        message: "Bạn có quyền năng để tạo ra điều kỳ diệu!", 
        advice: "Tận dụng mọi cơ hội, vì hôm nay là ngày bạn tỏa sáng!", 
        luckIndex: () => Math.floor(Math.random() * 101), 
        luckyNumber: () => Math.floor(Math.random() * 99) + 1
    },
    { 
        name: "The High Priestess", 
        img: "image/2.priestess.jpg", 
        message: "Lắng nghe trực giác, câu trả lời nằm bên trong bạn.", 
        advice: "Hãy cởi mở với trải nghiệm mới, nhưng đừng liều lĩnh.", 
        luckIndex: () => Math.floor(Math.random() * 101), 
        luckyNumber: () => Math.floor(Math.random() * 99) + 1
    },
    { 
        name: "The Empress", 
        img: "image/3.empress.jpg", 
        message: "Sự sáng tạo và tình yêu đang nở rộ, hãy nuôi dưỡng bản thân và những gì bạn yêu quý.", 
        advice: "Trân trọng những gì bạn đang có!", 
        luckIndex: () => Math.floor(Math.random() * 101), 
        luckyNumber: () => Math.floor(Math.random() * 99) + 1
    },
    { 
        name: "The Emperor", 
        img: "image/4.emperor.jpg", 
        message: "Hãy lập kế hoạch và giữ vững nguyên tắc để đạt được mục tiêu.", 
        advice: "Kiên trì là chìa khoá của sự thành công.", 
        luckIndex: () => Math.floor(Math.random() * 101), 
        luckyNumber: () => Math.floor(Math.random() * 99) + 1
    },
    { 
        name: "The Hierophant", 
        img: "image/5.hierophant.jpg", 
        message: "Tìm kiếm tri thức, lời khuyên từ người có kinh nghiệm sẽ giúp bạn.", 
        advice: "Lắng nghe nhiều hơn", 
        luckIndex: () => Math.floor(Math.random() * 101), 
        luckyNumber: () => Math.floor(Math.random() * 99) + 1
    }


];

let isFlipped = false;

function drawCard() {
    const cardElement = document.getElementById("tarot-card");
    const cardImage = document.getElementById("card-image");

    if (!isFlipped) {
        // Rút lá bài ngẫu nhiên
        const randomIndex = Math.floor(Math.random() * tarotCards.length);
        const selectedCard = tarotCards[randomIndex];

        // Hiển thị hình ảnh lá bài
        cardImage.style.backgroundImage = `url(${selectedCard.img})`;

        // Thêm nội dung
        document.getElementById("card-message").innerText = selectedCard.message;
        document.getElementById("luck-index").innerText = `🔮 Chỉ số may mắn: ${selectedCard.luckIndex()}%`;
        document.getElementById("lucky-number").innerText = `🍀 Số may mắn: ${selectedCard.luckyNumber()}`;
        document.getElementById("advice").innerText = `💡 Lời khuyên: ${selectedCard.advice}`;

        // Lật bài
        cardElement.classList.add("flip");
        isFlipped = true;
    } else {
        // Úp bài lại
        cardElement.classList.remove("flip");
        document.getElementById("card-message").innerText = "Nhấn vào lá bài để rút.";
        document.getElementById("luck-index").innerText = "";
        document.getElementById("lucky-number").innerText = "";
        document.getElementById("advice").innerText = "";

        isFlipped = false;
    }
}

// Gán sự kiện click cho lá bài
document.getElementById("tarot-card").addEventListener("click", drawCard);
