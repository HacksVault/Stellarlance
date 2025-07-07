"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChatClick = () => {
    router.push('/chat');
  };

  const navItems = [
    { href: '/freelancers', label: 'Freelancers', icon: '👥' },
    { href: '/agent', label: 'Agent', icon: '🤖' },
    { href: '/profile', label: 'Profile', icon: '👤' },
    { href: '/chat', label: 'Chat', icon: '💬', onClick: handleChatClick }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <style jsx global>{`
        .navbar-glass {
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.95) 0%, 
            rgba(20, 20, 20, 0.9) 50%, 
            rgba(40, 40, 40, 0.85) 100%);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-scrolled {
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.98) 0%, 
            rgba(20, 20, 20, 0.95) 50%, 
            rgba(40, 40, 40, 0.9) 100%);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .logo-gradient {
          background: linear-gradient(135deg, #00f5ff 0%, #4a90e2 25%, #8b45ff 75%, #ff0080 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          font-size: 1.75rem;
          letter-spacing: -0.02em;
          position: relative;
        }

        .logo-gradient::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #00f5ff 0%, #4a90e2 25%, #8b45ff 75%, #ff0080 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 8px;
          filter: blur(20px);
          z-index: -1;
        }

        .logo-gradient:hover::after {
          opacity: 0.3;
        }

        .nav-item {
          position: relative;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 600;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          cursor: pointer;
          overflow: hidden;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.1), 
            transparent);
          transition: left 0.6s ease;
        }

        .nav-item:hover::before {
          left: 100%;
        }

        .nav-item:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(255, 255, 255, 0.1);
        }

        .nav-item.active {
          background: linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(139, 69, 255, 0.2));
          border-color: rgba(0, 245, 255, 0.4);
          color: #ffffff;
          box-shadow: 
            0 0 20px rgba(0, 245, 255, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 2px;
          background: linear-gradient(90deg, #00f5ff, #8b45ff);
          border-radius: 2px;
        }

        .nav-icon {
          font-size: 1.1rem;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
        }

        .mobile-menu-button {
          display: none;
          padding: 0.5rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-menu-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.98) 0%, 
            rgba(20, 20, 20, 0.95) 100%);
          backdrop-filter: blur(20px);
          border-radius: 0 0 20px 20px;
          padding: 1rem;
          gap: 0.5rem;
          flex-direction: column;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .mobile-menu.open {
          display: flex;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
          
          .nav-item {
            width: 100%;
            justify-content: flex-start;
            padding: 1rem;
          }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 245, 255, 0.3); }
          50% { box-shadow: 0 0 30px rgba(139, 69, 255, 0.4); }
        }

        .nav-item.active {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 navbar-glass ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="logo-gradient cursor-pointer" onClick={() => router.push('/')}>
                StellarLance
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="desktop-nav flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={item.onClick}
                  className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-button"
              onClick={() => {
                const menu = document.querySelector('.mobile-menu');
                menu?.classList.toggle('open');
              }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={item.onClick}
                className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div style={{ height: '88px' }}></div>
    </>
  );
}