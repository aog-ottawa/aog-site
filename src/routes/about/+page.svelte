<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>About Us - Assemblies of God Ottawa</title>
  <meta name="description" content="Learn about Assemblies of God Ottawa - Our mission, vision, and what we believe" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lora:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="page-container">
  <Navigation />

  <!-- Hero Section -->
  <header class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">About Us</h1>
      <p class="hero-subtitle">Discover our mission, vision, and the heart of our community</p>
    </div>
  </header>

  <!-- Mission Section -->
  <section class="content-section">
    <div class="container">
      <h2>Our Mission</h2>
      <p>To make disciples of Jesus Christ who live out their faith through worship, fellowship, service, and the sharing of the Gospel with our community and the world.</p>
    </div>
  </section>

  <!-- Vision Section -->
  <section class="content-section bg-light">
    <div class="container">
      <h2>Our Vision</h2>
      <p>To be a vibrant, Spirit-filled community that transforms lives through the power of the Gospel, equips believers for ministry, and makes a lasting impact in Ottawa and beyond.</p>
    </div>
  </section>

  <!-- What We Believe Section -->
  <section class="content-section">
    <div class="container">
      <h2>What We Believe</h2>
      <div class="belief-grid">
        <div class="belief-item">
          <h3>The Bible</h3>
          <p>We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and practice.</p>
        </div>
        <div class="belief-item">
          <h3>The Trinity</h3>
          <p>We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.</p>
        </div>
        <div class="belief-item">
          <h3>Salvation</h3>
          <p>We believe salvation is by grace through faith in Jesus Christ, who died for our sins and rose again.</p>
        </div>
        <div class="belief-item">
          <h3>Holy Spirit</h3>
          <p>We believe in the present ministry of the Holy Spirit, who empowers believers for spiritual life and service.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Story Section -->
  <section class="content-section bg-light">
    <div class="container">
      <h2>Our Story</h2>
      <p>Assemblies of God Ottawa has been serving the Ottawa community for over 60 years. Founded in the heart of the city, our church has grown into a diverse family of believers united by our love for God and our desire to serve others. Through the decades, we have remained committed to our foundational principles while adapting to meet the changing needs of our community.</p>
      <p>Today, we continue to be a place where people from all walks of life can find hope, healing, and purpose through Jesus Christ. Our doors are always open to newcomers, and we invite you to join us on this incredible journey of faith.</p>
    </div>
  </section>

  <!-- Values Section -->
  <section class="content-section">
    <div class="container">
      <h2>Our Values</h2>
      <div class="values-grid">
        <div class="value-item">
          <h3>Worship</h3>
          <p>We believe worship is not just what we do, but who we are - living lives that honor God in everything we think, say, and do.</p>
        </div>
        <div class="value-item">
          <h3>Community</h3>
          <p>We are committed to building authentic relationships and caring for one another as we grow together in our spiritual journey.</p>
        </div>
        <div class="value-item">
          <h3>Service</h3>
          <p>We believe every believer is called to serve, and we actively seek opportunities to serve both our church family and the broader community.</p>
        </div>
        <div class="value-item">
          <h3>Growth</h3>
          <p>We are committed to personal and spiritual growth, encouraging each person to discover and develop their God-given gifts and calling.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>&copy; {new Date().getFullYear()} Assemblies of God Ottawa. All rights reserved.</p>
    </div>
  </footer>
</main>

<style>
  :root {
    --primary-color: #3B82F6;
    --secondary-color: #1F2937;
    --accent-color: #FBBF24;
    --bg-light: #F9FAFB;
    --bg-white: #FFFFFF;
    --font-heading: 'Lora', serif;
    --font-body: 'Inter', sans-serif;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: var(--font-body);
    background-color: var(--bg-white);
    line-height: 1.7;
    color: var(--secondary-color);
  }

  .page-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Hero Section */
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 60vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('{base}/dove.webp') no-repeat center center/cover;
    color: white;
    padding: 2rem;
  }

  .hero-content {
    max-width: 800px;
  }

  .hero-title {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    letter-spacing: 2px;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
  }

  .hero-subtitle {
    font-size: 1.25rem;
    font-weight: 400;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Content Sections */
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content-section {
    padding: 5rem 0;
    text-align: center;
  }

  .bg-light {
    background-color: var(--bg-light);
  }

  .content-section h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 2rem;
  }

  .content-section p {
    font-size: 1.1rem;
    max-width: 650px;
    margin: 0 auto 1.5rem auto;
  }

  .content-section p:last-child {
    margin-bottom: 0;
  }

  /* Beliefs Grid */
  .belief-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }

  .belief-item {
    background-color: var(--bg-white);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .belief-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .belief-item h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .belief-item p {
    margin: 0;
  }

  /* Values Grid */
  .values-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }

  .value-item {
    background-color: var(--bg-light);
    padding: 2rem;
    border-radius: 8px;
    border-left: 4px solid var(--accent-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .value-item:hover {
    transform: translateX(8px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .value-item h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .value-item p {
    margin: 0;
  }

  /* Footer */
  .footer {
    background-color: var(--secondary-color);
    color: var(--bg-light);
    text-align: center;
    padding: 2.5rem 0;
    margin-top: auto;
  }

  .footer p {
    margin: 0;
    font-size: 0.9rem;
  }

  /* Responsive Design */
  @media (min-width: 768px) {
    .hero-title {
      font-size: 4.5rem;
    }

    .hero-subtitle {
      font-size: 1.5rem;
    }

    .belief-grid,
    .values-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .belief-grid,
    .values-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }
  }
</style>