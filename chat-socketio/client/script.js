const btn_kirim = document.querySelector("#kirim");
const input = document.querySelector("#input");
const div_display = document.querySelector(".container-pesan");

const socket = io();
socket.on("connect", () => console.log("socket connected!"));

const createBubbleChat = chat => {
    const div_pesan = document.createElement("div");
    div_pesan.classList.add("pesan");
    div_pesan.innerHTML = chat;
    return div_pesan;
}

// Fungsi pengiriman pesan
const kirimPesan = () => {
    if (input.value !== "") {
        const bubbleChat = createBubbleChat(input.value);
        div_display.appendChild(bubbleChat);
        socket.emit("kirim-pesan", input.value);
        input.value= "";
    }
};

btn_kirim.addEventListener("click", kirimPesan);

// Menangkap tombol enter yang ditekan pada input
input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah input default dari tombol enter
        kirimPesan();
    }
});

socket.on("pesan-baru", pesan => {
    const bubbleChat = createBubbleChat(pesan);
    bubbleChat.classList.add("pesan-r");
    div_display.appendChild(bubbleChat);
});
