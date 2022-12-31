const btnEl = document.querySelector(".notifications-btn");
const notificationsCont = document.querySelector(".notifications-container");

const notificationsMsg = [
  "Invalid request",
  "Message sent",
  "You've got mail!",
  "Discount code applied!",
];

btnEl.addEventListener("click", () => {
  // creates an element to be used as the notification body
  const notification = document.createElement("p");

  // adds styling to the notification body, as set in the css file
  notification.classList.add("notification");

  // randomly adds a preset notification text
  notification.innerText = `${
    notificationsMsg[Math.floor(Math.random() * notificationsMsg.length)]
  }`;

  // adds notification element as a child of the notifications container
  notificationsCont.appendChild(notification);

  // clears existing notifications after a set amount of time
  setTimeout(() => {
    notification.remove();
  }, 2000);
});
