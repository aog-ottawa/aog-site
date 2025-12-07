<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="navbar">
  <div class="nav-container">
    <a href="{base}/" class="nav-logo">
      <img src="{base}/aog-logo.png" alt="Assemblies of God Ottawa Logo" class="logo-img" />
    </a>
    
    <!-- Desktop Navigation -->
    <div class="nav-menu">
      <a href="{base}/about" class="nav-link" class:active={$page.url.pathname.includes('/about')}>About Us</a>
      <a href="{base}/news" class="nav-link" class:active={$page.url.pathname.includes('/news')}>News</a>
      <a href="{base}/visit" class="nav-cta-btn">Visit</a>
    </div>

    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" on:click={toggleMenu} aria-label="Toggle menu" class:open={isMenuOpen}>
      <span class="hamburger"></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-nav" class:open={isMenuOpen}>
    <a href="{base}/about" class="mobile-nav-link" on:click={toggleMenu}>About Us</a>
    <a href="{base}/news" class="mobile-nav-link" on:click={toggleMenu}>News</a>
    <a href="{base}/visit" class="mobile-cta-btn" on:click={toggleMenu}>Visit</a>
  </div>
</nav>

<style>
  :global(body) {
    overflow-x: hidden;
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
  }

  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 70%, transparent 100%);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  .logo-img {
    height: 65px;
    max-height: 70px;
    border-radius: 50%;
    filter: brightness(1.1);
    transition: transform 0.3s ease;
  }

  .logo-img:hover {
    transform: scale(1.05);
  }

  .nav-menu {
    display: none;
    gap: 3rem;
    align-items: center;
  }

  .nav-link {
    text-decoration: none;
    color: #FFFFFF;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all 0.3s ease;
    position: relative;
    padding-bottom: 5px;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #D4AF37;
    transition: width 0.3s ease;
  }

  .nav-link:hover,
  .nav-link.active {
    color: #D4AF37;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .nav-cta-btn {
    background: #D4AF37;
    color: #FFFFFF;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 10px 25px;
    border-radius: 30px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  }

  .nav-cta-btn:hover {
    background: #c29d2e;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
  }

  /* Mobile Menu Button */
  .mobile-menu-btn {
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    z-index: 1001;
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    content: '';
    display: block;
    width: 25px;
    height: 2px;
    background-color: #FFFFFF;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    border-radius: 2px;
    position: absolute;
  }

  .hamburger::before {
    transform: translateY(-7px);
  }

  .hamburger::after {
    transform: translateY(7px);
  }

  .mobile-menu-btn.open .hamburger {
    transform: rotate(-45deg);
  }

  .mobile-menu-btn.open .hamburger::before {
    opacity: 0;
  }
  
  .mobile-menu-btn.open .hamburger::after {
    transform: rotate(90deg) translate(-7.5px, -0.5px);
  }

  /* Mobile Menu */
  .mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: linear-gradient(135deg, rgba(28, 28, 28, 0.98) 0%, rgba(0, 0, 0, 0.95) 100%);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 5px 0 30px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out, opacity 0.5s;
    z-index: 1000;
    opacity: 0;
  }

  .mobile-nav.open {
    transform: translateX(0);
    opacity: 1;
  }

  .mobile-nav-link {
    display: block;
    text-decoration: none;
    color: #FFFFFF;
    font-family: 'Lato', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 1rem 0;
    transition: color 0.3s ease;
  }

  .mobile-nav-link:hover {
    color: #D4AF37;
  }

  .mobile-cta-btn {
    background: #D4AF37;
    color: #FFFFFF;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 12px 30px;
    border-radius: 30px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
    margin-top: 1rem;
  }

  .mobile-cta-btn:hover {
    background: #c29d2e;
    transform: translateY(-2px);
  }

  /* Responsive Design */
  @media (min-width: 768px) {
    .nav-menu {
      display: flex;
    }

    .mobile-menu-btn {
      display: none;
    }
    
    .mobile-nav {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .nav-container {
      padding: 15px 20px;
    }

    .logo-img {
      height: 50px;
    }
  }
</style>
