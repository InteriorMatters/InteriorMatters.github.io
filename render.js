(function () {
  const container = document.querySelector('.stories');
  if (!container) return;

  const pageTopic = document.body.dataset.topic || 'all';
  const stories = (window.STORIES || []).filter(story => {
    if (pageTopic === 'all') return true;
    return story.topic === pageTopic;
  });

  const createCard = (story) => {
    const article = document.createElement('article');
    article.className = 'story-card';

    const label = document.createElement('span');
    label.className = `label ${story.topic}`;
    label.textContent = story.label;

    const content = document.createElement('div');
    const headline = document.createElement('h3');
    const link = document.createElement('a');
    link.href = story.url;
    link.textContent = story.title;
    headline.appendChild(link);

    const summary = document.createElement('p');
    summary.textContent = story.summary;

    content.appendChild(headline);
    content.appendChild(summary);

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `<span>${story.author}</span><span>${story.date}</span>`;

    article.appendChild(label);
    article.appendChild(content);
    article.appendChild(meta);

    return article;
  };

  container.innerHTML = '';
  stories.forEach(story => container.appendChild(createCard(story)));
})();
