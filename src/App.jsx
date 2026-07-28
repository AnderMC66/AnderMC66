import React, { useState, useEffect, useRef } from 'react';
import { Mail, Code, Database, Cpu, Brain, GraduationCap, TrendingUp, Terminal, MapPin, ArrowDown } from 'lucide-react';
import './App.css';

/* 2. Fondo Constelación (Nodos interactivos) */
const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    const particles = [];
    for(let i=0; i<70; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5
      });
    }
    
    let mouse = { x: null, y: null };
    
    const handleMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouse);
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(6, 182, 212, 0.6)';
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
      
      for(let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        
        if(p.x < 0 || p.x > width) p.vx *= -1;
        if(p.y < 0 || p.y > height) p.vy *= -1;
        
        if(mouse.x && mouse.y) {
          let dx = mouse.x - p.x;
          let dy = mouse.y - p.y;
          let dist = Math.sqrt(dx*dx + dy*dy);
          if(dist < 150) {
            p.x -= dx * 0.02;
            p.y -= dy * 0.02;
          }
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        
        for(let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx*dx + dy*dy);
          
          if(dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="particles-canvas" />;
};

/* 5. Botones Magnéticos */
const MagneticButton = ({ children, className, href, target, rel, isLink = true }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.4;
    const y = (clientY - (top + height / 2)) * 0.4;
    setPosition({ x, y });
  };
  
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Element = isLink ? 'a' : 'div';
  
  return (
    <Element
      href={href}
      target={target}
      rel={rel}
      ref={buttonRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`, 
        transition: position.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s linear' 
      }}
    >
      {children}
    </Element>
  );
};


function App() {
  /* 1. Efecto Spotlight global */
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  
  useEffect(() => {
    const handleGlobalMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleGlobalMouse);
    return () => window.removeEventListener('mousemove', handleGlobalMouse);
  }, []);

  return (
    <div className="app-container" style={{ '--mouse-x': `${mousePos.x}px`, '--mouse-y': `${mousePos.y}px` }}>
      
      {/* Spotlight Overlay */}
      <div className="spotlight"></div>

      {/* Navbar */}
      <nav className="navbar animate-in">
        <div className="logo">Rodrigo Anderson<span>.</span></div>
        <div className="nav-links">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#habilidades">Módulos</a>
          <a href="#proyectos">Proyectos</a>
          <a href="https://github.com/AnderMC66" target="_blank" rel="noopener noreferrer" className="btn-github">
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <ParticlesBackground />
        
        <div className="hero-content">
          <p className="hero-location animate-in delay-1">✦ Arequipa — Perú</p>
          
          {/* 4. Revelado Tipográfico */}
          <h1 className="hero-title reveal-text">
            <span>Rodrigo Anderson</span>
          </h1>
          <h1 className="hero-title reveal-text delay-1" style={{marginTop: '-1rem'}}>
            <span className="gradient-text">Capia Condori</span>
          </h1>
          
          <div className="hero-subtitle animate-in delay-3">
            <span className="hero-line"></span>
            <p className="hero-subtitle-text">Economía <span style={{color: 'var(--text-primary)'}}>×</span> Tecnología</p>
          </div>
          
          <p className="hero-desc animate-in delay-3">
            Estudiante de Economía en la <strong>UNSA</strong>. <br/>
            Constructor de soluciones digitales que conectan el análisis de datos con el impacto real, decodificando la economía mediante algoritmos.
          </p>
          
          <div className="hero-buttons animate-in delay-4">
            <MagneticButton href="#proyectos" className="btn-primary">
              Ver Proyectos
            </MagneticButton>
            <MagneticButton href="#contacto" className="btn-secondary">
              Contactar
            </MagneticButton>
            <MagneticButton href="https://github.com/AnderMC66" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              GitHub
            </MagneticButton>
          </div>
        </div>

        <div className="scroll-indicator animate-in delay-4">
          <span>Scroll</span>
          <ArrowDown size={16} />
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="section">
        <div className="section-container">
          <div className="about-grid">
            <div>
              <p className="section-label">01 — Sobre mí</p>
              <h2 className="section-title">
                Donde la economía<br/>
                <span style={{color: 'var(--text-secondary)'}}>encuentra la tecnología</span>
              </h2>
              <div className="about-text">
                <p>
                  Soy Rodrigo, estudiante de Economía de la <strong>UNSA Arequipa</strong>. 
                  Creo firmemente que la <strong>Economía del futuro</strong> está codificada en datos.
                </p>
                <p>
                  Iniciando mi formación académica, busco dominar las herramientas de <strong>Inteligencia Artificial y Análisis de Datos</strong> para evolucionar los paradigmas tradicionales.
                </p>
                <p>
                  Mi meta final es transicionar hacia la <strong>Ingeniería de Sistemas</strong>, arquitectando soluciones tecnológicas complejas y automatizadas con un impacto social medible.
                </p>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <GraduationCap size={24} />
                <p className="stat-title">UNSA</p>
                <p className="stat-desc">Economía · 2do Semestre</p>
              </div>
              <div className="stat-card">
                <Terminal size={24} />
                <p className="stat-title">Ingeniería</p>
                <p className="stat-desc">Objetivo: Arquitectura de Software</p>
              </div>
              <div className="stat-card">
                <MapPin size={24} />
                <p className="stat-title">Arequipa</p>
                <p className="stat-desc">Perú</p>
              </div>
              <div className="stat-card">
                <Cpu size={24} />
                <p className="stat-title">Automatización</p>
                <p className="stat-desc">Python & Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="section">
        <div className="section-container">
          <p className="section-label">02 — Módulos Instalados</p>
          <h2 className="section-title">Mis capacidades</h2>

          <div className="skills-grid">
            <div className="skill-box">
              <div className="skill-header">
                <TrendingUp size={20} style={{color: 'var(--text-primary)'}} />
                <h3>Data & Economía</h3>
              </div>
              <div className="skill-item">
                <div className="skill-item-top">
                  <span className="skill-name">Análisis Estadístico</span>
                  <span className="skill-level">Avanzado</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" style={{width: '85%'}}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-item-top">
                  <span className="skill-name">Teoría Económica</span>
                  <span className="skill-level">Intermedio</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" style={{width: '70%'}}></div></div>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-header">
                <Database size={20} style={{color: 'var(--text-primary)'}} />
                <h3>Programación</h3>
              </div>
              <div className="skill-item">
                <div className="skill-item-top">
                  <span className="skill-name">Python Core</span>
                  <span className="skill-level">Sólido</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" style={{width: '90%'}}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-item-top">
                  <span className="skill-name">React / Next.js</span>
                  <span className="skill-level">Explorando</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" style={{width: '60%'}}></div></div>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-header">
                <Brain size={20} style={{color: 'var(--text-primary)'}} />
                <h3>Inteligencia Artificial</h3>
              </div>
              <div className="skill-item">
                <div className="skill-item-top">
                  <span className="skill-name">Machine Learning</span>
                  <span className="skill-level">Teórico</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" style={{width: '65%'}}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-item-top">
                  <span className="skill-name">Lógica Algorítmica</span>
                  <span className="skill-level">Sólida</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" style={{width: '80%'}}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="section">
        <div className="section-container">
          <p className="section-label">03 — Proyectos</p>
          <h2 className="section-title">Trabajo reciente</h2>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon-wrapper">
                <TrendingUp size={48} />
              </div>
              <div className="project-info">
                <h3>Dashboard Inflación</h3>
                <p>Módulo de análisis y visualización interactiva de índices inflacionarios y variables macroeconómicas.</p>
                <a href="https://github.com/AnderMC66/DASHBOARD-INFLACION" target="_blank" rel="noreferrer" className="project-link">
                  <Code size={14} /> Repositorio
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-icon-wrapper">
                <Database size={48} />
              </div>
              <div className="project-info">
                <h3>MCP BCRP</h3>
                <p>Servidor Model Context Protocol diseñado para interconectar IAs con las bases de datos del Banco Central de Reserva.</p>
                <a href="https://github.com/AnderMC66/mcp-bcr" target="_blank" rel="noreferrer" className="project-link">
                  <Code size={14} /> Repositorio
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-icon-wrapper">
                <Cpu size={48} />
              </div>
              <div className="project-info">
                <h3>MCP SUNAT / MEF</h3>
                <p>Herramientas MCP avanzadas para minería y análisis de datos tributarios y económicos del gobierno peruano.</p>
                <a href="https://github.com/AnderMC66/mcp-sunat" target="_blank" rel="noreferrer" className="project-link">
                  <Code size={14} /> Repositorio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="social-links">
          <MagneticButton href="https://github.com/AnderMC66" target="_blank" rel="noreferrer" className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </MagneticButton>
          <MagneticButton href="mailto:rodrigocapiz67@gmail.com" className="social-icon">
            <Mail size={24} />
          </MagneticButton>
        </div>
        <p>
          FIN_SISTEMA © 2026 RODRIGO ANDERSON CAPIA CONDORI
        </p>
      </footer>
    </div>
  );
}

export default App;
