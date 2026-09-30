const status = document.getElementById("status");

document.getElementById("login").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim() || "demo-user";

  // Demo-only cookie for THIS website.
  document.cookie =
    "shadowkey_demo_session=" +
    encodeURIComponent(username) +
    "; Max-Age=3600; Path=/; SameSite=Lax; Secure";

  status.textContent = "Demo session created for: " + username;
});

document.getElementById("show").addEventListener("click", () => {
  const match = document.cookie.match(/(?:^|; )shadowkey_demo_session=([^;]*)/);

  if (match) {
    status.textContent =
      "Cookie found: shadowkey_demo_session = " +
      decodeURIComponent(match[1]);
  } else {
    status.textContent = "No demo cookie found. Create a session first.";
  }
});
