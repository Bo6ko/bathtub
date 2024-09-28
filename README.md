# bathtub

Required tools:

- NodeJs v20.15.1, node:18-alpine

Optional tools, but useful:

- Bash
- Docker
create the Docker image: docker build -t bathtub .
start the container: docker run -d -p 3000:3000 bathtub
Visit http://localhost:3000 to access the app.

----------------

The solution adheres to best practices suitable for a production environment in a large-scale React application. Here’s a summary of how I met the outlined conditions:

1. Scalability and Efficiency:

- I utilized React Hooks, specifically useState, useEffect, and useRef, to manage state and side effects effectively. This allows for a clean functional component structure while ensuring optimal performance.
- The component has been optimized to minimize unnecessary re-renders, promoting efficiency in a large-scale application.

2. Lazy Loading:

- I implemented React.lazy for the dynamic import of the component. This enables partial loading of components, reducing the initial load time and enhancing user experience by only loading necessary components when needed.

3. Testing: I have also written unit tests to ensure that the component functions correctly under various conditions, further validating its robustness and reliability in a production environment.

