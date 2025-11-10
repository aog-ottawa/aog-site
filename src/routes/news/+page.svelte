<script>
  /** @type {{ posts?: any[] }} */
  export let data;
  const posts = data?.posts || [];
</script>

<h1 class="text-3xl font-bold mb-6">Church News</h1>

{#if posts.length === 0}
  <p class="text-gray-600">No news posts available at the moment.</p>
{:else}
  {#each posts as post}
    <article class="mb-10 border-b pb-4">
      <h2 class="text-xl font-semibold">{post.Title}</h2>
      <p class="text-sm text-gray-500">{post.Date}</p>

      {#if post.ImageURL}
        <img src={post.ImageURL} alt={post.Title} class="my-3 rounded-lg max-w-full h-auto" />
      {/if}

      <p class="mt-3">{post.Content}</p>
    </article>
  {/each}
{/if}

<style>
  h1 {
    color: var(--primary-color);
  }
  
  article {
    border-color: rgba(0, 0, 0, 0.1);
  }
  
  article:last-child {
    border-bottom: none;
  }
</style>