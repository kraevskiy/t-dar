export const body = document.querySelector("body");

export const handleOverflow = (action?: 'hidden' | 'auto' | 'toggle') => {
  if (body) {
    if (action === 'auto') {
      body.classList.remove("--o-hidden");
    } else if (action === 'hidden'){
      body.classList.add("--o-hidden");
    } else {
      body.classList.toggle("--o-hidden");
    }
  }
}
