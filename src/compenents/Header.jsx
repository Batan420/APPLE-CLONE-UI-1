import React from 'react'

const Header = () => {
  const headerStyle = {
    // Direct Unsplash wallpaper (works for hotlinking). Replace with a local asset if preferred.
    backgroundImage: "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <header style={headerStyle}>
      <h1 className='text-4xl font-bold bg-white/50 rounded-lg backdrop-blur-sm p-4'>iPhone 17 Pro — All out Pro.</h1>
    </header>
  )
}

export default Header;