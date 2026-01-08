function openProxy() {
  let url = document.getElementById("urlInput").value;

  if (!url) return;

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  const proxy = "https://ultraviolet-static.pages.dev/service/";
  const encodedUrl = btoa(url);

  window.location.href = proxy + encodedUrl;
}
