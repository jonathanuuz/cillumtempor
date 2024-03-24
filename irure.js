const resourceCacheName = 'my-resource-cache';

// Open a cache and perform operations
caches.open(resourceCacheName).then(cache => {
  // You can perform various cache operations here, for example:
  
  // To add a single resource to the cache
  cache.add('path/to/resource').then(() => {
    console.log('Resource has been added to the cache');
  });

  // To add multiple resources to the cache
  cache.addAll(['path/to/resource1', 'path/to/resource2']).then(() => {
    console.log('Resources have been added to the cache');
  });

  // To fetch and cache a resource
  fetch('path/to/resource').then(response => {
    if (!response.ok) {
      throw new TypeError('Bad response status');
    }
    return cache.put('path/to/resource', response);
  }).then(() => {
    console.log('Resource has been fetched and cached');
  });
  
  // Remember to handle any errors
}).catch(error => {
  console.error('Caching failed:', error);
});
