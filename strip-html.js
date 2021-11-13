const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';

stripHtml('<h1>Hello <strong>World</strong>!!!</h1>');
// Result: Hello World!!!