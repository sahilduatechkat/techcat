// app/blogs/[slug]/page.tsx
import Image from 'next/image';
import React from 'react';
import { notFound } from 'next/navigation';

// Mock blog data (Replace with your database or API call)
const blogPosts = [
  {
    slug: 'future-of-ai',
    title: 'The Future of AI in Web Development',
    content: (
      <div className="prose lg:prose-xl">
        <div className="relative h-96 mb-8">
          <Image src="/images/ai-future.png" alt="AI in Web Development" fill style={{ objectFit: 'contain' }} />
        </div>
        <p className="mb-6">
          Artificial intelligence (AI) is rapidly transforming various industries, and web development is no exception. From automating repetitive tasks to creating personalized user experiences, AI is poised to revolutionize how we build and interact with websites. This blog post explores the exciting future of AI in web development and its potential impact.
        </p>

        <h3 className="mb-4"><strong>AI-Powered Automation</strong></h3>
        {/* ... (rest of the content for future-of-ai) */}
        <p className="mb-6">
              In conclusion, AI is set to revolutionize web development by automating tasks, personalizing user experiences, and enhancing website security. By embracing these advancements and continuing to learn and adapt, web developers can harness the power of AI to create truly exceptional online experiences.
          </p>
      </div>
    ),
  },
  {
    slug: 'react-hooks-guide',
    title: 'Mastering React Hooks: A Practical Guide',
    content: (
      <div className="prose lg:prose-xl">
        <div className="relative h-96 mb-8">
          <Image src="/images/react_hook.jpg" alt="React Hooks" fill style={{ objectFit: 'contain' }} />
        </div>

        <p className="mb-6">
          React Hooks revolutionized how we write React components by allowing us to use state and other React features in functional components. This guide provides a practical overview of essential React Hooks, complete with examples to help you master them.
        </p>

        <h2 className="mb-4"><strong>Why Use Hooks?</strong></h2>
        <p className="mb-6">
          Before Hooks, state management and lifecycle methods were only available in class components. Hooks solve this by letting you &quot;hook into&quot; React state and lifecycle features from functional components, making your code cleaner, more reusable, and easier to understand.
        </p>

        <h2 className="mb-4"><strong>Essential React Hooks</strong></h2>

        <h3 className="mb-2">useState: Managing State</h3>
        <p className="mb-6">
          The <code>{`useState`}</code> Hook lets you add state to functional components. It returns an array containing the current state value and a function to update that value.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
          <code className="text-sm">
            {`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
          </code>
        </pre>

        <h3 className="mb-2">useEffect: Handling Side Effects</h3>
        <p className="mb-6">
          The <code>{`useEffect`}</code> Hook lets you perform side effects in functional components. Side effects are operations that affect something outside the component, such as data fetching, subscriptions, or manually changing the DOM.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
          <code className="text-sm">
            {`import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  return (
    <div>{/* Display data */}</div>
  );
}
`}
          </code>
        </pre>

        <h3 className="mb-2">useContext: Accessing Context</h3>
        <p className="mb-6">
          The <code>{`useContext`}</code> Hook lets you access context values. Context provides a way to pass data through the component tree without prop drilling.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
          <code className="text-sm">
            {`import { useContext } from 'react';
import MyContext from './MyContext'; // Your context

function MyComponent() {
  const value = useContext(MyContext);

  return <p>Value from context: {value}</p>;
}`}
          </code>
        </pre>

        <h3 className="mb-2"><strong>Other Important Hooks</strong></h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2"><code>{`useReducer`}</code>: For complex state logic.</li>
          <li className="mb-2"><code>{`useCallback`}</code>: For memoizing functions.</li>
          <li className="mb-2"><code>{`useMemo`}</code>: For memoizing expensive calculations.</li>
          <li className="mb-2"><code>{`useRef`}</code>: For accessing DOM elements.</li>
        </ul>

        <p className="mb-6">
          This guide covers the most essential React Hooks. Exploring the official React documentation is highly recommended for a deeper understanding.
        </p>
      </div>
    ),
  },
];

// Fetch blog data based on slug
const getBlogPost = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};

interface Params {
  slug: string;
}

interface PageProps {
  params: Params;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function BlogPostPage({ params }: PageProps) {
  const blogPost = getBlogPost(params.slug);

  if (!blogPost) {
    notFound(); // Important: Handle the case where the post is not found
    return null; // Stop further execution
  }

  return (
    <main>
      <div className="bg-[#5A3AEC] w-full py-10 lg:py-20">
        <h1 className="text-white text-[30px] lg:text-[60px] font-bold relative z-10 text-center">
          {blogPost.title} {/* Now safe because of the check above */}
        </h1>
      </div>

      <div className="container mx-auto py-12 px-10 lg:px-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-8">
          <div className="prose lg:prose-xl">
            {blogPost.content} {/* Now safe because of the check above */}
          </div>
        </div>
      </div>
    </main>
  );
}