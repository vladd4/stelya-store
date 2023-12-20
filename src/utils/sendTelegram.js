export async function sendFormToTelegram(message) {
  const botToken = "6505004904:AAEju_ezj9o2vCozqd9cWu2AimzVtA9nStM";
  const chatId = "-4009066803";
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
    if (response.ok) {
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}
