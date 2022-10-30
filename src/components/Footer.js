import React from 'react';

export default function Footer() {
  const url = "https://github.com/manoloesparta/website"

  return (
    <footer class="p-5 py-10 text-center">
      <p className='font-light'>Check the source code of this website <a style={{color: "#00008B"}} href={url} target="_blank" rel="noopener noreferrer">here</a></p>
    </footer>
  )
}