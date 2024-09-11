import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import Output from 'editorjs-react-renderer';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
// import { RatIcon, ReactIcon, JavascriptIcon, PythonIcon, TypeScriptIcon } from "lucide-react"


interface Post {
    id: number;
    title: string;
    content: string;
  }

  interface HomeProps {
    posts: Post[];
  }

  // interface Tutorial {
  //   id: string
  //   name: string
  //   description: string
  //   icon: React.ElementType
  // }

  // const tutorials: Tutorial[] = [
  //   {
  //     id: "react",
  //     name: "React",
  //     description: "Learn the basics of React and build your first component.",
  //     icon: ReactIcon,
  //   },
  //   {
  //     id: "javascript",
  //     name: "JavaScript",
  //     description: "Master the fundamentals of JavaScript programming.",
  //     icon: JavascriptIcon,
  //   },
  //   {
  //     id: "python",
  //     name: "Python",
  //     description: "Explore Python programming from beginner to advanced topics.",
  //     icon: PythonIcon,
  //   },
  //   {
  //     id: "typescript",
  //     name: "TypeScript",
  //     description: "Dive into TypeScript and learn type-safe JavaScript development.",
  //     icon: TypeScriptIcon,
  //   },
  // ]

  export default function Home({ posts }: HomeProps) {
      return (
          <div className="main-content">
              <Head title="Home" />
              <Layout>
                  <h1>Welcome to Your App</h1>
                  <div>

                      {posts.map((post) => (

                          <div key={post.id}>
                            <img src={post.image} alt={post.title} />
                              <h2 className='text-2xl'>{post.title}</h2>
                              {/* render content from md to html css */}
                              <div dangerouslySetInnerHTML={{ __html: post.content }} />
                          </div>
                      ))}
                  </div>


              </Layout>
          </div>
      );
  }


