"use client";
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { freelancers } from "./data";

interface CardProps {
  name: string;
  role: string;
  desc: string;
  projects: number;
  stars: number;
  perfection: number;
}

const Card = ({ name, role, desc, projects, stars, perfection }: CardProps) => {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
      padding: '2rem 1.5rem',
      margin: '0.5rem',
      minWidth: 260,
      maxWidth: 320,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 320,
    }}>
      <div>
        <div style={{ fontWeight: 700, fontSize: 22, color: '#222', marginBottom: 8 }}>{name}</div>
        <div style={{ color: '#555', fontSize: 15, marginBottom: 16 }}>{desc}</div>
      </div>
      <div style={{ fontSize: 14, color: '#333', marginTop: 12 }}>
        <div><strong>Role:</strong> {role}</div>
        <div><strong>Projects:</strong> {projects}</div>
        <div><strong>Stars:</strong> {stars}</div>
        <div><strong>Perfection:</strong> {perfection}%</div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 300px;
    height: 320px;
    perspective: 1200px;
  }

  .card {
    height: 100%;
    border-radius: 40px;
    background: linear-gradient(
      135deg,
      rgb(106, 90, 205) 0%,
      rgb(147, 112, 219) 100%
    );
    transition: all 0.6s ease-in-out;
    transform-style: preserve-3d;
    box-shadow:
      rgba(30, 30, 60, 0) 40px 50px 25px -40px,
      rgba(30, 30, 60, 0.2) 0px 25px 25px -5px;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 10px;
    border-radius: 45px;
    border-top-left-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.7) 100%
    );
    transform: translate3d(0px, 0px, 30px);
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 0.6s ease-in-out;
  }

  .content {
    padding: 32px 25px 0px 25px;
    transform: translate3d(0, 0, 31px);
  }

  .content .title {
    display: block;
    color: #3c2f80;
    font-weight: 900;
    font-size: 22px;
    text-align: right;
    padding-right: 0px;
    margin-bottom: 10px;
  }

  .content .text {
    display: block;
    color: rgba(60, 47, 128, 0.8);
    font-size: 14px;
    margin-top: 50px;
    margin-bottom: 10px;
    text-align: right;
    padding-right: 0px;
    padding-left: 60px;
  }

  .bottom {
    padding: 12px 15px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 25px;
    left: 25px;
    right: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 31px);
  }

  .bottom .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.3s ease-in-out;
  }

  .bottom .view-more:hover {
    transform: translate3d(0, 0, 15px);
  }

  .bottom .view-more .view-more-button {
    background: none;
    border: none;
    color: #6a5acd;
    font-weight: bold;
    font-size: 13px;
  }

  .bottom .view-more .svg {
    fill: none;
    stroke: #6a5acd;
    stroke-width: 2.5px;
    max-height: 14px;
  }

  .logo {
    position: absolute;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    left: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 10px 10px 20px 0px;
    background: rgba(147, 112, 219, 0.3);
    transition: all 0.6s ease-in-out;
  }

  .logo .circle1 {
    width: 160px;
    transform: translate3d(0, 0, 25px);
    top: 10px;
    left: 10px;
  }

  .logo .circle2 {
    width: 130px;
    transform: translate3d(0, 0, 45px);
    top: 12px;
    left: 12px;
    transition-delay: 0.3s;
  }

  .logo .circle3 {
    width: 100px;
    transform: translate3d(0, 0, 65px);
    top: 15px;
    left: 15px;
    transition-delay: 0.6s;
  }

  .logo .circle4 {
    width: 70px;
    transform: translate3d(0, 0, 85px);
    top: 20px;
    left: 20px;
    transition-delay: 0.9s;
  }

  .logo .circle5 {
    width: 40px;
    transform: translate3d(0, 0, 105px);
    top: 25px;
    left: 25px;
    display: grid;
    place-content: center;
    transition-delay: 1.2s;
  }

  .logo .circle5 .svg {
    width: 18px;
    fill: #ffffff;
  }

  .parent:hover .card {
    transform: rotate3d(1, -1, 0, 25deg);
    box-shadow:
      rgba(30, 30, 60, 0.3) 30px 50px 25px -40px,
      rgba(30, 30, 60, 0.15) 0px 25px 30px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 65px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 85px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 105px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 125px);
  }

  .card-meta {
    margin: 8px 18px 0 18px;
    padding: 10px 18px 6px 0;
    text-align: right;
    color: #3c2f80;
    font-weight: 600;
    font-size: 15px;
    background: rgba(255,255,255,0.18);
    border-radius: 14px;
    box-shadow: 0 2px 12px 0 rgba(60,47,128,0.08);
    backdrop-filter: blur(2px);
  }
`

export default function Freelancers() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-black flex flex-wrap gap-8 justify-center items-start p-8">
        {freelancers.map((f, i) => (
          <Card key={i} {...f} />
        ))}
      </div>
    </>
  );
}