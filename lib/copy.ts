export const copyToClipboard = (url: string) => {
  const currentUrl = window.location.href
  navigator.clipboard
    .writeText(currentUrl)
    .then(() => {
      // Optionally, you can add a notification or feedback here
      console.log("URL copied to clipboard")
    })
    .catch((err) => {
      console.error("Failed to copy URL: ", err)
    })
}
