const btnEl = document.querySelector(".notifications-btn");
const notificationsCont = document.querySelector(".notifications-container");

const notificationsMsg = [
  "Invalid request",
  "Message sent",
  "You've got mail!",
  "Discount code applied!",
];

const notificationsCol = [
  ["#fb3737", "#FFE6E6"],
  ["#48a953", "#deefce"],
  ["#354259", "#DAEAF1"],
  ["#85586F", "#FDF6EC"],
];

btnEl.addEventListener("click", () => {
  // creates an element to be used as the notification body
  const notification = document.createElement("p");

  // adds styling to the notification body, as set in the css file
  notification.classList.add("notification");

  // randomly adds a preset notification text
  let randomIndex = Math.floor(Math.random() * notificationsMsg.length);
  notification.innerText = `${notificationsMsg[randomIndex]}`;

  // change background and color depending on the message
  switch (randomIndex) {
    case 0:
      notification.style.color = `${notificationsCol[0][0]}`;
      notification.style.backgroundColor = `${notificationsCol[0][1]}`;
      break;
    case 1:
      notification.style.color = `${notificationsCol[1][0]}`;
      notification.style.backgroundColor = `${notificationsCol[1][1]}`;
      break;
    case 2:
      notification.style.color = `${notificationsCol[2][0]}`;
      notification.style.backgroundColor = `${notificationsCol[2][1]}`;
      break;
    case 3:
      notification.style.color = `${notificationsCol[3][0]}`;
      notification.style.backgroundColor = `${notificationsCol[3][1]}`;
      break;
    default:
      console.log("ceva gresit");
  }

  // adds notification element as a child of the notifications container
  notificationsCont.appendChild(notification);

  // clears existing notifications after a set amount of time
  setTimeout(() => {
    notification.remove();
  }, 2000);
});
