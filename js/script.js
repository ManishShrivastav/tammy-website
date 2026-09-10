document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Image Modal Functionality
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalClose = document.querySelector(".modal-close");
  const galleryImages = document.querySelectorAll(".gallery-image");

  // Open modal on image click
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Close modal functions
  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});
