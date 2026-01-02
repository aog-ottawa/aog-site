<script context="module" lang="ts">
  declare const lucide: any;
</script>

<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });
</script>

<svelte:head>
  <title>About Us - Assemblies of God Ottawa</title>
  <meta name="description" content="Learn about Assemblies of God Ottawa - Our mission, vision, and what we believe" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
</svelte:head>

<main class="page-container">
  <Navigation />

  <!-- Hero Section -->
  <header class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content" class:visible={mounted}>
      <h1 class="hero-title">ABOUT US</h1>
      <p class="hero-subtitle">Discover our mission, vision, and the heart of our community</p>
    </div>
  </header>

  <!-- Mission Section -->
  <section class="content-section mission-section">
    <div class="container">
      <h2 class="section-title">OUR MISSION</h2>
      <p class="section-text">To make disciples of Jesus Christ who live out their faith through worship, fellowship, service, and the sharing of the Gospel with our community and the world.</p>
    </div>
  </section>

  <!-- Vision Section -->
  <section class="content-section vision-section">
    <div class="container">
      <h2 class="section-title">OUR VISION</h2>
      <p class="section-text">To be a vibrant, Spirit-filled community that transforms lives through the power of the Gospel, equips believers for ministry, and makes a lasting impact in Ottawa and beyond.</p>
    </div>
  </section>

  <!-- What We Believe Section -->
  <section class="content-section beliefs-section">
    <div class="container">
      <h2 class="section-title">WHAT WE BELIEVE</h2>
      <div class="beliefs-grid">
        <div class="belief-card">
          <div class="card-icon">
            <i data-lucide="book-open" class="icon"></i>
          </div>
          <h3>The Bible</h3>
          <p>We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and practice.</p>
        </div>
        <div class="belief-card">
          <div class="card-icon">
            <i data-lucide="cross" class="icon"></i>
          </div>
          <h3>The Trinity</h3>
          <p>We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.</p>
        </div>
        <div class="belief-card">
          <div class="card-icon">
            <i data-lucide="heart" class="icon"></i>
          </div>
          <h3>Salvation</h3>
          <p>We believe salvation is by grace through faith in Jesus Christ, who died for our sins and rose again.</p>
        </div>
        <div class="belief-card">
          <div class="card-icon">
            <i data-lucide="flame" class="icon"></i>
          </div>
          <h3>Holy Spirit</h3>
          <p>We believe in the present ministry of the Holy Spirit, who empowers believers for spiritual life and service.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Story Section -->
  <section class="content-section story-section">
    <div class="container">
      <h2 class="section-title">OUR STORY</h2>
      <p class="section-text">Assemblies of God Ottawa has been serving the Ottawa community for over 60 years. Founded in the heart of the city, our church has grown into a diverse family of believers united by our love for God and our desire to serve others.</p>
      <p class="section-text">Through the decades, we have remained committed to our foundational principles while adapting to meet the changing needs of our community. Today, we continue to be a place where people from all walks of life can find hope, healing, and purpose through Jesus Christ.</p>
    </div>
  </section>

  <!-- Values Section -->
  <section class="content-section values-section">
    <div class="container">
      <h2 class="section-title">OUR VALUES</h2>
      <div class="values-grid">
        <div class="value-card">
          <div class="card-icon">
            <i data-lucide="hand-heart" class="icon"></i>
          </div>
          <h3>Worship</h3>
          <p>We believe worship is not just what we do, but who we are - living lives that honor God in everything we think, say, and do.</p>
        </div>
        <div class="value-card">
          <div class="card-icon">
            <i data-lucide="users" class="icon"></i>
          </div>
          <h3>Community</h3>
          <p>We are committed to building authentic relationships and caring for one another as we grow together in our spiritual journey.</p>
        </div>
        <div class="value-card">
          <div class="card-icon">
            <i data-lucide="heart-handshake" class="icon"></i>
          </div>
          <h3>Service</h3>
          <p>We believe every believer is called to serve, and we actively seek opportunities to serve both our church family and the broader community.</p>
        </div>
        <div class="value-card">
          <div class="card-icon">
            <i data-lucide="sprout" class="icon"></i>
          </div>
          <h3>Growth</h3>
          <p>We are committed to personal and spiritual growth, encouraging each person to discover and develop their God-given gifts and calling.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="content-section cta-section">
    <div class="container">
      <h2 class="section-title-alt">JOIN OUR FAMILY</h2>
      <p class="section-text-alt">Experience the warmth of genuine fellowship and the transforming power of God's love</p>
      <div class="cta-buttons">
        <a href="{base}/visit" class="cta-button-secondary">Plan Your Visit</a>
        <a href="{base}/news" class="cta-button-tertiary">Latest News</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <Footer />
</main>

<style>
  :root {
    --color-white: #FFFFFF;
    --color-gold: #D4AF37;
    --color-dark: #1a1a1a;
    --color-charcoal: #2C2C2C;
    --color-dark-grey: #555555;
    --color-light-cream: #F9F7F2;
    
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Lato', sans-serif;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: var(--font-body);
    background-color: var(--color-white);
    line-height: 1.6;
    color: var(--color-charcoal);
    overflow-x: hidden;
  }

  .page-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Hero Section */
  .hero-section {
    position: relative;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(
      180deg,
      #2e3137 0%,
      #3b4250 100%
    );
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    padding: 2rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hero-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-title {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: var(--color-white);
    margin: 0 0 1rem 0;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .hero-subtitle {
    font-family: var(--font-body);
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    font-weight: 400;
    color: var(--color-white);
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.95;
  }

  /* Content Sections */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content-section {
    padding: 6rem 0;
    text-align: center;
  }

  .section-title {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--color-dark);
    margin: 0 0 2rem 0;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .section-text {
    font-family: var(--font-body);
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto 1.5rem;
    color: var(--color-charcoal);
  }

  /* Mission Section */
  .mission-section {
    background-color: var(--color-light-cream);
  }

  /* Vision Section */
  .vision-section {
    background: var(--color-white);
  }

  /* Beliefs Section */
  .beliefs-section {
    background-color: var(--color-light-cream);
  }

  .beliefs-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin-top: 4rem;
  }
  
  @media (max-width: 768px) {
    .beliefs-grid {
      grid-template-columns: 1fr;
    }
  }

  .belief-card {
    background: var(--color-white);
    padding: 40px;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .belief-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  .card-icon {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-icon :global(.icon) {
    width: 48px;
    height: 48px;
    color: var(--color-gold);
    stroke-width: 1.5;
  }

  .belief-card h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-charcoal);
    margin: 0 0 1rem 0;
  }

  .belief-card p {
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-dark-grey);
    margin: 0;
  }

  /* Story Section */
  .story-section {
    background: var(--color-white);
  }

  /* Values Section */
  .values-section {
    background-color: var(--color-light-cream);
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin-top: 4rem;
  }
  
  @media (max-width: 768px) {
    .values-grid {
      grid-template-columns: 1fr;
    }
  }

  .value-card {
    background: var(--color-white);
    padding: 40px;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .value-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  .value-card h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-charcoal);
    margin: 0 0 1rem 0;
  }

  .value-card p {
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-dark-grey);
    margin: 0;
  }

  /* CTA Section */
  .cta-section {
    background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
    color: var(--color-white);
  }

  .section-title-alt {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--color-gold);
    margin: 0 0 2rem 0;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .section-text-alt {
    font-family: var(--font-body);
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto;
    color: var(--color-white);
  }

  .cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3rem;
  }

  .cta-button-secondary,
  .cta-button-tertiary {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 700;
    padding: 15px 35px;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .cta-button-secondary {
    background: var(--color-gold);
    color: var(--color-white);
  }

  .cta-button-secondary:hover {
    background: #c29d2e;
    transform: translateY(-2px);
  }

  .cta-button-tertiary {
    background: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-white);
  }

  .cta-button-tertiary:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-section {
      height: 50vh;
    }

    .hero-title {
      letter-spacing: 0.1em;
    }

    .content-section {
      padding: 4rem 0;
    }

    .beliefs-grid,
    .values-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .cta-button-secondary,
    .cta-button-tertiary {
      width: 100%;
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    .hero-content {
      padding: 1rem;
    }

    .section-title,
    .section-title-alt {
      letter-spacing: 0.08em;
    }
  }
</style>