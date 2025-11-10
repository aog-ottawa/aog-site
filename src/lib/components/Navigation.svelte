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
      <h2>Assemblies of God Ottawa</h2>
    </a>
    
    <!-- Desktop Navigation -->
    <div class="nav-menu">
      <a href="{base}/about" class="nav-link" class:active={$page.url.pathname.includes('/about')}>About us</a>
      <a href="{base}/news" class="nav-link" class:active={$page.url.pathname.includes('/news')}>News</a>
      <a href="{base}/visit" class="nav-link" class:active={$page.url.pathname.includes('/visit')}>Visit</a>
    </div>

    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" on:click={toggleMenu} aria-label="Toggle menu">
      <span class="hamburger" class:open={isMenuOpen}></span>
      <span class="hamburger" class:open={isMenuOpen}></span>
      <span class="hamburger" class:open={isMenuOpen}></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-nav" class:open={isMenuOpen}>
    <a href="{base}/about" class="mobile-nav-link" on:click={toggleMenu}>About us</a>
    <a href="{base}/news" class="mobile-nav-link" on:click={toggleMenu}>News</a>
    <a href="{base}/visit" class="mobile-nav-link" on:click={toggleMenu}>Visit</a>
  </div>
</nav>

<style>
  .navbar {
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
  }

  .nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: inherit;
  }

  .logo-img {
    height: 50px;
  }

  .nav-logo h2 {
    color: var(--primary-color);
    font-size: 1.5rem;
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

  /* Mobile Menu */
  .mobile-menu-btn {
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    z-index: 1001;
  }

  .hamburger {
    width: 25px;
    height: 2px;
    background-color: var(--primary-color);
    margin: 4px 0;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    border-radius: 2px;
  }

  .hamburger.open:nth-child(1) {
    transform: rotate(-45deg) translate(-6px, 6px);
  }

  .hamburger.open:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open:nth-child(3) {
    transform: rotate(45deg) translate(-6px, -7px);
  }

  .mobile-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: var(--bg-white);
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.5s ease-in-out;
  }

  .mobile-nav.open {
    right: 0;
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
  }
</style>
