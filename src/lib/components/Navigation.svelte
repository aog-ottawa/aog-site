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
    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" on:click={toggleMenu} aria-label="Toggle menu" class:open={isMenuOpen}>
      <span class="hamburger"></span>
    </button>

    <a href="{base}/" class="nav-logo">
      <img src="{base}/aog-logo.png" alt="Assemblies of God Ottawa Logo" class="logo-img" />
      <h2>Assemblies of God Ottawa</h2>
    </a>
    
    <!-- Desktop Navigation -->
    <div class="nav-menu">
      <a href="{base}/about" class="nav-link" class:active={$page.url.pathname.includes('/about')}>About us</a>
      <a href="{base}/news" class="nav-link" class:active={$page.url.pathname.includes('/news')}>News</a>
      <a href="{base}/visit" class="nav-link" class:active={$page.url.pathname.includes('/visit')}>Visit</a>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-nav" class:open={isMenuOpen}>
    <a href="{base}/about" class="mobile-nav-link" on:click={toggleMenu}>About us</a>
    <a href="{base}/news" class="mobile-nav-link" on:click={toggleMenu}>News</a>
    <a href="{base}/visit" class="mobile-nav-link" on:click={toggleMenu}>Visit</a>
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

  /* CSS Variables matching the site's theme */
  :root {
    --color-burgundy: #6B1C23;
    --color-deep-red: #8B2635;
    --color-burnt-sienna: #B8573D;
    --color-golden: #D4A574;
    --color-pale-gold: #E8D4B8;
    --color-cream: #FDF8F3;
    --color-parchment: #F5EFE7;
    --color-dark-brown: #3A2520;
    --color-text: #2A1810;
    
    --font-display: 'Cinzel', serif;
    --font-body: 'Crimson Text', serif;
    
    /* Navigation specific variables */
    --primary-color: var(--color-burgundy);
    --secondary-color: var(--color-dark-brown);
    --font-heading: var(--font-display);
    --bg-white: var(--color-cream);
  }

  .navbar {
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
    width: 100%;
  }

  .nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    position: relative;
  }

  /* Mobile Menu Button - positioned in top left */
  .mobile-menu-btn {
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    z-index: 1001;
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    content: '';
    display: block;
    width: 25px;
    height: 2px;
    background-color: var(--primary-color);
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

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: inherit;
    margin-left: 3.5rem;
    flex: 1;
    justify-content: center;
  }

  .logo-img {
    height: 50px;
  }

  .nav-logo h2 {
    color: var(--primary-color);
    font-size: 1.2rem;
    font-family: var(--font-heading);
    font-weight: 700;
    margin: 0;
  }

  .nav-menu {
    display: none;
    gap: 2.5rem;
  }

  .nav-link {
    text-decoration: none;
    color: var(--secondary-color);
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--primary-color);
  }

  /* Mobile Menu - slides from left */
  .mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background-color: var(--bg-white);
    box-shadow: 5px 0 15px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    color: var(--secondary-color);
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1.5rem 0;
    transition: color 0.3s ease;
  }

  .mobile-nav-link:hover {
    color: var(--primary-color);
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

    .nav-logo {
      margin-left: 0;
      justify-content: flex-start;
    }

    .nav-logo h2 {
      font-size: 1.5rem;
    }

    .nav-container {
      padding: 0 2rem;
    }
  }
</style>
