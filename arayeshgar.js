document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const citySelect = document.getElementById('city');
    const errorMessageDiv = document.getElementById('error-message');
    const submitBtn = document.getElementById('submitBtn');

    // لیست شهرها
    const iranianCities = [
        "تهران", "مشهد", "اصفهان", "کرج", "شیراز", "تبریز", "قم", "اهواز",
        "کرمانشاه", "ارومیه", "رشت", "زاهدان", "همدان", "کرمان", "یزد",
        "اردبیل", "بندرعباس", "اراک", "اسلام‌شهر", "قزوین", "سنندج",
        "گرگان", "ساری"
    ];

    // پر کردن شهرها
    iranianCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });

    // کلیک روی دکمه ثبت نام
    submitBtn.addEventListener('click', function() {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const fatherName = document.getElementById('fatherName').value.trim();
        const city = document.getElementById('city').value;
        const phoneNumber = document.getElementById('phoneNumber').value.trim();

        // اعتبارسنجی
        if (!firstName || !lastName || !fatherName || !city || !phoneNumber) {
            errorMessageDiv.style.display = 'block';
            errorMessageDiv.textContent = 'لطفاً همه فیلدها را پر کنید!';
            return;
        }

        errorMessageDiv.style.display = 'none';

        // ساخت پیام واتساپ با کدگذاری درست
        const message = `ثبت نام جدید%0A%0A` +
                        `نام: ${firstName}%0A` +
                        `نام خانوادگی: ${lastName}%0A` +
                        `نام پدر: ${fatherName}%0A` +
                        `شهر: ${city}%0A` +
                        `شماره تماس: ${phoneNumber}%0A%0A` +
                        `از طریق فرم آنلاین ثبت شد.`;

        // لینک واتساپ با شماره 09133593002
        const whatsappURL = `https://wa.me/989133593002?text=${message}`;

        // باز کردن واتساپ
        setTimeout(() => {
            const win = window.open(whatsappURL, '_blank', 'noopener,noreferrer');
            if (win) {
                win.focus();
                alert('در حال انتقال به واتساپ...\nمشخصات شما ارسال شد!');
                form.reset(); // پاک کردن فرم
            } else {
                alert('پاپ‌آپ بلاک شده! لطفاً پاپ‌آپ بلاکر را غیرفعال کنید.');
            }
        }, 100);
    });
});
