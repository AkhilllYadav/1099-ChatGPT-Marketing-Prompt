
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// List of user names
const names = [
  'Aditya', 'Neha', 'Rahul', 'Priya', 'Aarav', 
  'Ananya', 'Rajesh', 'Sonia', 'Vivek', 'Pooja', 
  'Kiran', 'Arjun', 'Shreya', 'Ravi', 'Ayesha', 
  'Amit', 'Divya', 'Akash', 'Sneha', 'Rohan'
];

// List of locations
const locations = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 
    'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat', 
    'Lucknow', 'Kanpur', 'Nagpur', 'Patna', 'Indore', 
    'Thane', 'Bhopal', 'Visakhapatnam', 'Vadodara', 'Firozabad'
];

// Function to show random purchase alerts
function showRandomPurchaseAlert() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];

  const notificationContainer = document.querySelector('.notification-container');
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = `${randomName} from ${randomLocation} just bought 1099+ ChatGPT Marketing Prompt Bundal !!!`;

  notificationContainer.appendChild(notification);

  // Automatically remove notifications after 5 seconds
  setTimeout(function() {
      notification.remove();
  }, 3000);
}

// Show a purchase alert every 3 seconds
setInterval(showRandomPurchaseAlert, 3000);
