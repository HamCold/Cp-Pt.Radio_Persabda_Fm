document.addEventListener("DOMContentLoaded", function () {
  // 1. Inisialisasi AOS (Animate On Scroll)
  AOS.init({
    duration: 1200, // Durasi animasi
    once: true, // Hanya dijalankan sekali saat elemen muncul
    easing: "ease-in-out", // Jenis transisi
  });

  // 2. Validasi Form Kontak (contact.html)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      let isValid = true;
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      // Fungsi validasi email
      function validateEmail(email) {
        const re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

      // Reset dan Validasi Nama
      if (name.value.trim() === "") {
        name.classList.add("is-invalid");
        document.getElementById("nameError").textContent = "Nama harus diisi.";
        isValid = false;
      } else {
        name.classList.remove("is-invalid");
      }

      // Reset dan Validasi Email
      if (email.value.trim() === "") {
        email.classList.add("is-invalid");
        document.getElementById("emailError").textContent =
          "Email harus diisi.";
        isValid = false;
      } else if (!validateEmail(email.value.trim())) {
        email.classList.add("is-invalid");
        document.getElementById("emailError").textContent =
          "Format email tidak valid.";
        isValid = false;
      } else {
        email.classList.remove("is-invalid");
      }

      // Reset dan Validasi Pesan
      if (message.value.trim() === "") {
        message.classList.add("is-invalid");
        document.getElementById("messageError").textContent =
          "Pesan harus diisi.";
        isValid = false;
      } else {
        message.classList.remove("is-invalid");
      }

      if (isValid) {
        // Notifikasi sukses menggunakan Bootstrap Toast (jika diperlukan) atau Alert
        alert(
          "Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda. (Simulasi)"
        );
        contactForm.reset();
        contactForm
          .querySelectorAll(".form-control")
          .forEach((input) => input.classList.remove("is-invalid"));
      }
    });
  }
});
