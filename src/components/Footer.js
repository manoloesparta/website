import React from 'react';

export default function Footer() {
  const url = "https://github.com/manoloesparta/website"

  return (
    <footer class="thin">
      <p>Check the source code of this website <a href={url} target="_blank" rel="noopener noreferrer">here</a></p>
    </footer>
  )
}