import React, { useState, useRef, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { ModeToggle } from '@/Components/mode-toggle';
import { ThemeProvider } from "@/Components/theme-provider";

const Navbar = () => {
    const [isFrontendDropdownOpen, setIsFrontendDropdownOpen] = useState(false);
    const [isBackendDropdownOpen, setIsBackendDropdownOpen] = useState(false);
    const [isCICDDropdownOpen, setIsCICDDropdownOpen] = useState(false);

    const frontendDropdownRef = useRef<HTMLDivElement>(null);
    const backendDropdownRef = useRef<HTMLDivElement>(null);
    const cicdDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (frontendDropdownRef.current && !frontendDropdownRef.current.contains(event.target as Node)) {
                setIsFrontendDropdownOpen(false);
            }
            if (backendDropdownRef.current && !backendDropdownRef.current.contains(event.target as Node)) {
                setIsBackendDropdownOpen(false);
            }
            if (cicdDropdownRef.current && !cicdDropdownRef.current.contains(event.target as Node)) {
                setIsCICDDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleFrontendDropdown = () => {
        setIsFrontendDropdownOpen(!isFrontendDropdownOpen);
    };

    const toggleBackendDropdown = () => {
        setIsBackendDropdownOpen(!isBackendDropdownOpen);
    };

    const toggleCICDDropdown = () => {
        setIsCICDDropdownOpen(!isCICDDropdownOpen);
    };

    return (
        <nav className="bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold">
                            Tutorial Hub
                        </Link>
                    </div>
                    <div className="flex-grow flex justify-center">
                        <div className="hidden md:flex items-center">
                            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                Home
                            </Link>
                            <Link href='/blog' className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                Blog
                            </Link>
                            <div className='relative' ref={frontendDropdownRef}>
                                <button
                                    onClick={toggleFrontendDropdown}
                                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none"
                                >
                                    Front End
                                    <svg className="ml-1 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isFrontendDropdownOpen && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black rounded-md shadow-lg py-1 z-10">
                                        <Link href="/frontend/html" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">HTML</Link>
                                        <Link href="/frontend/css" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">CSS</Link>
                                        <Link href='/frontend/tailwind' className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Tailwind CSS</Link>
                                        <Link href='/frontend/javascript' className="block px-4 py-2 text-sm text-white hover:bg-gray-700">JavaScript</Link>
                                        <Link href='/frontend/react' className="block px-4 py-2 text-sm text-white hover:bg-gray-700">React</Link>
                                        <Link href='/frontend/vue' className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Vue</Link>
                                    </div>
                                )}
                            </div>
                            <div className="relative" ref={backendDropdownRef}>
                                <button
                                    onClick={toggleBackendDropdown}
                                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none"
                                >
                                    Back End
                                    <svg className="ml-1 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isBackendDropdownOpen && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black rounded-md shadow-lg py-1 z-10">
                                        <Link href="/tutorial/php" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">PHP</Link>
                                        <Link href="/tutorial/golang" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Golang</Link>
                                        <Link href='/tutorial/nodejs' className="block px-4 py-2 text-sm text-white hover:bg-gray-700">NodeJS</Link>
                                        <Link href="/tutorial/javascript" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">JavaScript</Link>
                                        <Link href='/tutorial/typescript' className="block px-4 py-2 text-sm text-white hover:bg-gray-700">TypeScript</Link>
                                        <Link href="/tutorial/python" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Python</Link>
                                        <Link href="/tutorial/java" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Java</Link>
                                    </div>
                                )}
                            </div>
                            <div className='relative' ref={cicdDropdownRef}>
                                <button
                                    onClick={toggleCICDDropdown}
                                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none"
                                >
                                    CI/CD
                                    <svg className="ml-1 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isCICDDropdownOpen && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                        <Link href="/docker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Docker</Link>
                                        <Link href="/kubernetes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kubernetes</Link>
                                        <Link href="/aws" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AWS</Link>
                                        <Link href='/argocd' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ArgoCD</Link>
                                        <Link href="/github" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">GitHub</Link>
                                        <Link href="/gitlab" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">GitLab</Link>
                                        <Link href="/jenkins" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Jenkins</Link>
                                        <Link href="/ansible" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ansible</Link>
                                        <Link href="/terraform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Terraform</Link>
                                        <Link href="/circleci" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CircleCI</Link>
                                    </div>
                                )}
                            </div>
                            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                About
                            </Link>
                            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="absolute right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

