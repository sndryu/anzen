window.onload = () => {
  const container = document.getElementById("alert-container");

  for (let i = 0; i < 10; i++) {
    const alertBox = document.createElement("div");
    alertBox.className = "alert-window";
    alertBox.style.top = `${Math.random() * 300}px`;
    alertBox.style.left = `${Math.random() * 500}px`;

    alertBox.innerHTML = `
      <div class="alert-header">
        アラート ${i + 1}
        <button class="close-button" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
      <div class="alert-body">
        りんぼがたくさん！！！
      </div>
    `;

    container.appendChild(alertBox);
  }
};
