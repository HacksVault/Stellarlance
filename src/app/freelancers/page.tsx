"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { freelancers } from "./data";

interface CardProps {
  name: string;
  role: string;
  desc: string;
  projects: number;
  stars: number;
  perfection: number;
  username?: string;
  wallet?: string;
}

const Card = ({ name, role, desc, projects, stars, perfection, username, wallet }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style jsx>{`
        .freelancer-card {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2rem;
          margin: 0.5rem;
          min-width: 320px;
          max-width: 360px;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          cursor: pointer;
        }

        .freelancer-card::before {
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

        .freelancer-card:hover::before {
          left: 100%;
        }

        .freelancer-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.15) 0%, 
            rgba(255, 255, 255, 0.08) 100%);
          border-color: rgba(0, 245, 255, 0.4);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(0, 245, 255, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .card-header {
          position: relative;
          z-index: 2;
        }

        .freelancer-name {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #00f5ff 0%, #4a90e2 25%, #8b45ff 75%, #ff0080 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .freelancer-username {
          color: rgba(0, 245, 255, 0.8);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .freelancer-role {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 245, 255, 0.1);
          border: 1px solid rgba(0, 245, 255, 0.3);
          border-radius: 25px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 245, 255, 0.2);
        }

        .freelancer-desc {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: auto;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.25rem;
        }

        .stat-value {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .star-rating {
          color: #ffd700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
        }

        .additional-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .detail-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 0.75rem;
          transition: all 0.3s ease;
        }

        .detail-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(0, 245, 255, 0.3);
          transform: scale(1.02);
        }

        .detail-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .detail-value {
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .floating-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 20, 147, 0.9);
          color: #ffffff;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 3;
          box-shadow: 0 4px 15px rgba(255, 20, 147, 0.3);
        }

        .perfection-high {
          background: rgba(0, 255, 100, 0.9);
          box-shadow: 0 4px 15px rgba(0, 255, 100, 0.3);
        }

        .perfection-medium {
          background: rgba(255, 200, 0, 0.9);
          box-shadow: 0 4px 15px rgba(255, 200, 0, 0.3);
        }

        @media (max-width: 768px) {
          .freelancer-card {
            min-width: 280px;
            max-width: 320px;
            margin: 0.25rem;
            padding: 1.5rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          
          .additional-details {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
        }
      `}</style>
      
      <div 
        className="freelancer-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating Badge */}
        <div className={`floating-badge ${
          perfection >= 98 ? 'perfection-high' : 
          perfection >= 95 ? 'perfection-medium' : ''
        }`}>
          {perfection}% Perfect
        </div>

        {/* Header */}
        <div className="card-header">
          <div className="freelancer-name">{name}</div>
          {username && (
            <div className="freelancer-username">
              <span>@{username}</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>🔗</span>
            </div>
          )}
          <div className="freelancer-role">{role}</div>
          <div className="freelancer-desc">{desc}</div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-label">Projects</div>
            <div className="stat-value">{projects}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Rating</div>
            <div className="stat-value star-rating">
              {stars} ⭐
            </div>
          </div>
        </div>

        {        /* Additional Details */}
        <div className="additional-details">
          <div className="detail-item">
            <div className="detail-label">💰 Rate</div>
            <div className="detail-value">{Math.floor(Math.random() * 80) + 20} XLM</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">⚡ Response</div>
            <div className="detail-value">{Math.floor(Math.random() * 4) + 1}h avg</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">🌍 Location</div>
            <div className="detail-value">{['USA', 'Canada', 'UK', 'Germany', 'Australia', 'Singapore'][Math.floor(Math.random() * 6)]}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">🔧 Skills</div>
            <div className="detail-value">{
              role.includes('Developer') ? 'React, Node.js, TypeScript' :
              role.includes('Designer') ? 'Figma, Adobe XD, Sketch' :
              role.includes('Engineer') ? 'Python, AWS, Docker' :
              'React, API, Database'
            }</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Freelancers() {
  return (
    <>
      <style jsx global>{`
        body {
          background: #000000;
          min-height: 100vh;
        }
        
        .freelancers-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #000000 0%, #111111 100%);
          padding: 2rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
          align-items: flex-start;
        }
        
        .page-title {
          width: 100%;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .title-text {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #00f5ff 0%, #4a90e2 25%, #8b45ff 75%, #ff0080 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        
        .subtitle-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.2rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .freelancers-container {
            padding: 1rem;
            gap: 1rem;
          }
          
          .title-text {
            font-size: 2rem;
          }
          
          .subtitle-text {
            font-size: 1rem;
          }
        }
      `}</style>
      
      <Navbar />
      <div className="freelancers-container">
        <div className="page-title">
          <h1 className="title-text"></h1>
          <p className="subtitle-text">Discover Freelancers</p>
        </div>
        
        {freelancers.map((f, i) => (
          <Card key={i} {...f} />
        ))}
      </div>
    </>
  );
}