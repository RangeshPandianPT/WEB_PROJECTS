const dobInput = document.getElementById("dob");
const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");
const resultDiv = document.getElementById("result");
const resultCard = document.getElementById("resultCard");
const themeSwitcher = document.getElementById("themeSwitcher");

dobInput.addEventListener("input", () => {
  calcBtn.disabled = !dobInput.value;
});

themeSwitcher.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const birthDate = new Date(dobInput.value);
  const today = new Date();

  if (birthDate > today) {
    resultDiv.innerHTML = `<p style="color:red;">❌ Date of Birth can't be in the future!</p>`;
    resultCard.classList.remove("hidden");
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
  const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (nextBirthday < today) nextBirthday.setFullYear(today.getFullYear() + 1);
  const daysToNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

  const zodiac = getZodiacSign(birthDate.getDate(), birthDate.getMonth() + 1);

  resultDiv.innerHTML = `
    <p>🎈 <strong>${years}</strong> years, <strong>${months}</strong> months, <strong>${days}</strong> days old!</p>
    <p>📆 That's <strong>${totalDays}</strong> total days!</p>
    <p>🎁 Your next birthday is in <strong>${daysToNextBirthday}</strong> days!</p>
    <p>🔮 Your zodiac sign is <strong>${zodiac}</strong></p>
    <p>🎊 Make every day count! 🎊</p>
  `;
  resultCard.classList.remove("hidden");

  if (daysToNextBirthday === 0) {
    alert("🎉 Happy Birthday! 🎉");
  }
});

clearBtn.addEventListener("click", () => {
  dobInput.value = "";
  resultDiv.innerHTML = "";
  resultCard.classList.add("hidden");
  calcBtn.disabled = true;
});

function getZodiacSign(day, month) {
  const signs = [
    ["Capricorn", 19], ["Aquarius", 18], ["Pisces", 20], ["Aries", 19],
    ["Taurus", 20], ["Gemini", 20], ["Cancer", 22], ["Leo", 22],
    ["Virgo", 22], ["Libra", 22], ["Scorpio", 21], ["Sagittarius", 21]
  ];
  return day > signs[month - 1][1] ? signs[month % 12][0] : signs[month - 1][0];
}
