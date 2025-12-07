<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  /** @type {{ posts?: any[] }} */
  export let data;
  const posts = data?.posts || [];

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>News & Updates - Assemblies of God Ottawa</title>
  <meta name="description" content="Stay updated with the latest news and announcements from Assemblies of God Ottawa" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="news-page">
  <Navigation />
  
  <!-- Hero Section -->
  <header class="news-hero">
    <div class="hero-overlay"></div>
    <div class="hero-content" class:visible={mounted}>
      <h1 class="page-title">NEWS & UPDATES</h1>
      <p class="page-subtitle">Staying Connected in Faith and Fellowship</p>
    </div>
  </header>

  <!-- News Grid Section -->
  <section class="news-section">
    {#if posts.length === 0}
      <div class="empty-state">
        <p>No news posts available at the moment.</p>
        <p class="empty-subtitle">Check back soon for updates from our community.</p>
      </div>
    {:else}
      <div class="news-grid">
        {#each posts as post}
          <article class="news-card">
            {#if post.ImageURL}
              <div class="card-image-container">
                <img src={post.ImageURL} alt={post.Title} class="card-image" />
              </div>
            {/if}
            
            <div class="card-content">
              {#if post.Date}
                <span class="card-date">{post.Date}</span>
              {/if}
              
              <h2 class="card-title">{post.Title}</h2>
              
              <p class="card-excerpt">{post.Content}</p>
              
              <a href="#" class="read-more">Read More →</a>
            </div>
          </article>
        {/each}
      </div>
    {/if}
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

  /* Page Structure */
  .news-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Hero Section */
  .news-hero {
    position: relative;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url('https://source.unsplash.com/random/1920x1080/?church,community');
    background-size: cover;
    background-position: center;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg, 
      rgba(0, 0, 0, 0.5) 0%, 
      rgba(0, 0, 0, 0.6) 100%
    );
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

  .page-title {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: var(--color-white);
    margin: 0 0 1rem 0;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .page-subtitle {
    font-family: var(--font-body);
    font-size: clamp(1rem, 2vw, 1.3rem);
    font-weight: 300;
    color: var(--color-white);
    margin: 0;
    opacity: 0.95;
  }

  /* News Section */
  .news-section {
    flex: 1;
    background-color: var(--color-light-cream);
    padding: 50px 2rem;
  }

  /* Empty State */
  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
    max-width: 600px;
    margin: 0 auto;
  }

  .empty-state p {
    font-family: var(--font-body);
    font-size: 1.2rem;
    color: var(--color-charcoal);
    margin: 0.5rem 0;
  }

  .empty-subtitle {
    font-size: 1rem !important;
    color: var(--color-dark-grey) !important;
    font-style: italic;
  }

  /* News Grid */
  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* News Card */
  .news-card {
    background: var(--color-white);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  /* Card Image */
  .card-image-container {
    width: 100%;
    height: 220px;
    overflow: hidden;
    background-color: #f0f0f0;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .news-card:hover .card-image {
    transform: scale(1.05);
  }

  /* Card Content */
  .card-content {
    padding: 25px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .card-date {
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--color-gold);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
    display: block;
  }

  .card-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-charcoal);
    margin: 0 0 15px 0;
    line-height: 1.3;
  }

  .card-excerpt {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-dark-grey);
    line-height: 1.6;
    margin: 0 0 20px 0;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .read-more {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-gold);
    text-decoration: none;
    transition: text-decoration 0.2s ease;
  }

  .read-more:hover {
    text-decoration: underline;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .news-hero {
      height: 40vh;
    }

    .page-title {
      letter-spacing: 0.1em;
    }

    .news-section {
      padding: 40px 1.5rem;
    }

    .news-grid {
      grid-template-columns: 1fr;
      gap: 25px;
    }

    .card-content {
      padding: 20px;
    }
  }

  @media (max-width: 480px) {
    .hero-content {
      padding: 1rem;
    }

    .card-image-container {
      height: 200px;
    }

    .card-title {
      font-size: 1.3rem;
    }
  }
</style>