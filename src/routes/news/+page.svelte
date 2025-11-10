<script>
  /** @type {{ posts?: any[] }} */
  export let data;
  const posts = data?.posts || [];
</script>

<div class="news-container">
  <h1 class="page-title">Church News</h1>

  {#if posts.length === 0}
    <div class="empty-state">
      <p>No news posts available at the moment.</p>
    </div>
  {:else}
    {#each posts as post, index}
      <article class="post-card" class:alternate={index % 2 === 1}>
        <div class="post-content">
          <h2 class="post-title">{post.Title}</h2>
          
          {#if post.Date}
            <p class="post-date">{post.Date}</p>
          {/if}

          {#if post.ImageURL}
            <div class="image-wrapper">
              <img src={post.ImageURL} alt={post.Title} class="post-image" />
            </div>
          {/if}

          <div class="post-text">
            <p>{post.Content}</p>
          </div>
        </div>
      </article>
    {/each}
  {/if}
</div>

<style>
  .news-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  .page-title {
    color: var(--primary-color);
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    font-weight: 700;
    text-align: center;
    margin: 0 0 2rem 0;
    padding: 2rem 1rem 0 1rem;
  }

  .empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: #6b7280;
    font-size: 1.125rem;
  }

  .post-card {
    background: white;
    margin: 0;
    padding: 2.5rem 1rem;
    transition: background-color 0.3s ease;
  }

  .post-card.alternate {
    background: #f9fafb;
  }

  .post-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .post-title {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 700;
    color: #1f2937;
    text-align: center;
    margin: 0 0 0.75rem 0;
    line-height: 1.3;
    word-wrap: break-word;
  }

  .post-date {
    font-size: 0.9rem;
    color: #6b7280;
    text-align: center;
    margin: 0 0 1.5rem 0;
    font-weight: 500;
    letter-spacing: 0.025em;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 2rem 0;
  }

  .post-image {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
    display: block;
  }

  .post-text {
    text-align: left;
    margin-top: 1.5rem;
  }

  .post-text p {
    font-size: 1.0625rem;
    line-height: 1.75;
    color: #374151;
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  /* Mobile optimizations */
  @media (max-width: 640px) {
    .page-title {
      padding: 1.5rem 1rem 0 1rem;
      margin-bottom: 1.5rem;
    }

    .post-card {
      padding: 2rem 1rem;
    }

    .post-title {
      margin-bottom: 0.5rem;
    }

    .post-date {
      margin-bottom: 1.25rem;
      font-size: 0.85rem;
    }

    .image-wrapper {
      margin: 1.25rem 0 1.5rem 0;
    }

    .post-image {
      border-radius: 8px;
    }

    .post-text {
      margin-top: 1.25rem;
    }

    .post-text p {
      font-size: 1rem;
      line-height: 1.65;
    }
  }

  /* Tablet and larger screens */
  @media (min-width: 641px) {
    .post-card {
      padding: 3rem 2rem;
    }

    .post-content {
      padding: 0 1rem;
    }
  }

  /* Large screens */
  @media (min-width: 1024px) {
    .page-title {
      padding: 2.5rem 2rem 0 2rem;
      margin-bottom: 2.5rem;
    }

    .post-card {
      padding: 4rem 2rem;
    }
  }
</style>