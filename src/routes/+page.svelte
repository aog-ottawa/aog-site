<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Assemblies of God Ottawa</title>
  <meta name="description" content="Welcome to Assemblies of God Ottawa - A vibrant community of faith" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lora:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="page-container">
  <Navigation />

  <!-- Title Section -->
  <div class="title-container">
    <h1 class="page-title">"Where the Spirit of the Lord is, there is freedom."<br>— <em>2 Corinthians 3:17</em></h1>
  </div>

  <!-- Hero Section -->
  <header class="hero-section">
    <div class="hero-content">
      <p class="hero-subtitle">A vibrant community of faith in the heart of Ottawa.</p>
    </div>
  </header>

  <!-- Welcome Section -->
  <section id="welcome" class="content-section">
    <div class="container">
      <h2>Welcome to Our Community</h2>
      <p>Join us as we grow in faith, fellowship, and service to our community. We are a church that believes in the power of God to change lives.</p>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="content-section bg-light">
    <div class="container">
      <h2>About Us</h2>
      <p>Assemblies of God Ottawa is a vibrant community of believers dedicated to living out our faith through love, service, and spiritual growth. Our doors are open to everyone.</p>
    </div>
  </section>

  <!-- News Section -->
  <section id="news" class="content-section">
    <div class="container">
      <h2>News and Updates</h2>
      <p>Stay connected with our latest events, ministries, and spiritual announcements. There's always something happening at AOG Ottawa.</p>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="content-section bg-light">
    <div class="container">
      <h2>Contact & Visit</h2>
      <p>We would love to welcome you to our church family. Come and visit us for worship and fellowship this Sunday.</p>
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
    --primary-color: #3B82F6; /* A modern blue */
    --secondary-color: #1F2937; /* A dark gray for text */
    --accent-color: #FBBF24; /* A warm yellow accent */
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
    min-height: 90vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('{base}/dove.webp') no-repeat center center/cover;
    color: white;
    padding: 2rem;
  }

  .hero-content {
    max-width: 800px;
  }

  .title-container {
    text-align: center;
    padding: 2rem 1rem;
    background-color: var(--bg-white);
  }

  .page-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--secondary-color);
    margin: 0;
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
    margin-bottom: 1.5rem;
  }

  .content-section p {
    font-size: 1.1rem;
    max-width: 650px;
    margin: 0 auto;
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
    .page-title {
      font-size: 3.5rem;
    }


    .hero-subtitle {
      font-size: 1.5rem;
    }
  }
</style>
