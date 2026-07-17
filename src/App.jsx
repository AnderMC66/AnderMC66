import React, { useState, useEffect } from 'react';
import { Briefcase, Mail, ExternalLink, Code, Database, Cpu, Download, Brain, GraduationCap, TrendingUp, Terminal, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';

const data = [
  { name: '2022', Productividad: 4000, IA_Adoptada: 1000 },
  { name: '2023', Productividad: 4500, IA_Adoptada: 2500 },
  { name: '2024', Productividad: 5200, IA_Adoptada: 4800 },
  { name: '2025', Productividad: 6500, IA_Adoptada: 7500 },
  { name: '2026', Productividad: 8200, IA_Adoptada: 9800 },
];

function App() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ '--mouse-x': `${mousePos.x}%`, '--mouse-y': `${mousePos.y}%` }}>
      <div className="bg-gradient"></div>
      <div className="mouse-glow"></div>
      
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar animate-fade-in">
          <div className="logo">R. Anderson</div>
          <div className="nav-links">
            <a href="#about">Terminal</a>
            <a href="#vision">Visión</a>
            <a href="#skills">Módulos</a>
            <a href="#projects">Data</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="hero" id="about">
          <div className="hero-content">
            <div className="hero-badge animate-fade-in delay-1">
              SYS_INIT: Economía & IA
            </div>
            <h1 className="animate-fade-in delay-2">
              <span className="text-gradient">Decodificando</span> la economía mediante algoritmos y datos.
            </h1>
            <p className="animate-fade-in delay-3">
              > STATUS: Estudiante de Economía (2do Semestre) - UNSA.<br/>
              > MISSION: Construir bases sólidas en lógica de programación, Python y explorar el impacto de la Inteligencia Artificial en estructuras sociales.
            </p>
            <div className="hero-buttons animate-fade-in delay-3">
              <a href="#projects" className="btn btn-primary">
                Ejecutar Proyectos <Code size={18} />
              </a>
              <a href="/CV_Rodrigo_Anderson.pdf" download className="btn btn-purple">
                Extraer CV <Download size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Ping (Contacto) <Terminal size={18} />
              </a>
            </div>
          </div>
        </header>

        {/* Vision Section */}
        <section id="vision" className="vision">
          <div className="vision-box glass animate-fade-in">
            <h2><Brain color="var(--accent-cyan)" /> Protocolo de Visión</h2>
            <p>
              La <strong>Economía del futuro</strong> está codificada en datos. Iniciando mi formación académica, busco dominar las herramientas de <strong>Inteligencia Artificial y Análisis de Datos</strong> para hackear los paradigmas tradicionales. Mi objetivo final es transicionar hacia la Ingeniería de Sistemas, arquitectando soluciones tecnológicas complejas y automatizadas con un impacto social medible.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline">
          <h2 className="section-title">Log del Sistema</h2>
          
          <div className="timeline-item glass">
            <div className="timeline-icon">
              <GraduationCap size={24} />
            </div>
            <div className="timeline-content">
              <span>Fase Actual</span>
              <h3>Economía (UNSA)</h3>
              <p style={{color: 'var(--text-secondary)'}}>Adquiriendo fundamentos de teoría económica y modelos matemáticos en la Universidad Nacional de San Agustín de Arequipa.</p>
            </div>
          </div>

          <div className="timeline-item glass">
            <div className="timeline-icon">
              <Terminal size={24} />
            </div>
            <div className="timeline-content">
              <span>Procesos en 2do Plano</span>
              <h3>Python & Algoritmia</h3>
              <p style={{color: 'var(--text-secondary)'}}>Desarrollo activo de lógica de programación, creación de scripts, automatización y exploración de stacks web (Next.js).</p>
            </div>
          </div>

          <div className="timeline-item glass" style={{borderColor: 'var(--accent-purple)'}}>
            <div className="timeline-icon" style={{borderColor: 'var(--accent-purple)', color: 'var(--accent-purple)'}}>
              <Cpu size={24} />
            </div>
            <div className="timeline-content">
              <span style={{color: 'var(--accent-purple)'}}>Objetivo Futuro</span>
              <h3>Ingeniería de Sistemas</h3>
              <p style={{color: 'var(--text-secondary)'}}>Formalizar la ingeniería para liderar el desarrollo y escalamiento global de arquitecturas de software.</p>
            </div>
          </div>
        </section>

        {/* Interactive Data Section */}
        <section className="chart-section">
          <h2 className="section-title">Análisis Predictivo</h2>
          <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
            > Simulador renderizado con Recharts: Adopción de IA vs Productividad Económica.
          </p>
          <div className="chart-container glass">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,240,255,0.1)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-secondary)" tick={{fill: 'var(--text-secondary)'}} />
                <YAxis stroke="var(--text-secondary)" tick={{fill: 'var(--text-secondary)'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(5,5,10,0.9)', border: '1px solid var(--accent-cyan)', borderRadius: '4px', backdropFilter: 'blur(10px)' }}
                  itemStyle={{ color: 'var(--text-primary)' }}
                />
                <Line type="monotone" dataKey="Productividad" stroke="var(--accent-cyan)" strokeWidth={3} dot={{ r: 4, fill: 'var(--accent-cyan)' }} activeDot={{ r: 8, fill: '#fff' }} />
                <Line type="monotone" dataKey="IA_Adoptada" stroke="var(--accent-purple)" strokeWidth={3} dot={{ r: 4, fill: 'var(--accent-purple)' }} activeDot={{ r: 8, fill: '#fff' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <h2 className="section-title">Módulos Instalados</h2>
          <div className="skills-grid">
            <div className="skill-card glass">
              <TrendingUp size={40} color="var(--accent-cyan)" />
              <h3>Análisis de Datos</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Estadística aplicada (Niveles I y II aprobados). Pensamiento crítico para toma de decisiones.</p>
            </div>
            <div className="skill-card glass">
              <Database size={40} color="var(--accent-purple)" />
              <h3>Python Core</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Bases firmes en scripts, procesamiento de datos y automatización de sistemas.</p>
            </div>
            <div className="skill-card glass">
              <Code size={40} color="var(--accent-cyan)" />
              <h3>Web Interfaces</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Integración de UI/UX, explorando React y arquitecturas frontend como Next.js.</p>
            </div>
            <div className="skill-card glass">
              <Activity size={40} color="var(--accent-purple)" />
              <h3>Machine Learning</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Investigación teórica sobre la aplicación de modelos de IA para resolver problemas económicos.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <h2 className="section-title">Proyectos en Despliegue</h2>
          <div className="projects-grid">
            
            {/* Project 1 */}
            <div className="project-card glass">
              <div className="project-img">
                 <TrendingUp size={80} color="var(--accent-cyan)" style={{filter: 'drop-shadow(0 0 10px var(--accent-cyan))'}} />
              </div>
              <div className="project-info">
                <h3>Dashboard Inflación</h3>
                <p>Módulo de análisis y visualización interactiva de índices inflacionarios y variables macroeconómicas.</p>
                <div className="project-links">
                  <a href="https://github.com/AnderMC66/DASHBOARD-INFLACION" target="_blank" rel="noreferrer" className="btn btn-outline" style={{padding: '0.5rem 1rem', fontSize: '0.8rem'}}>
                    <Code size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card glass">
              <div className="project-img">
                 <Database size={80} color="var(--accent-purple)" style={{filter: 'drop-shadow(0 0 10px var(--accent-purple))'}} />
              </div>
              <div className="project-info">
                <h3>MCP BCRP</h3>
                <p>Servidor Model Context Protocol diseñado para interconectar IAs con las bases de datos del Banco Central de Reserva.</p>
                <div className="project-links">
                  <a href="https://github.com/AnderMC66/mcp-bcr" target="_blank" rel="noreferrer" className="btn btn-outline" style={{padding: '0.5rem 1rem', fontSize: '0.8rem'}}>
                    <Code size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="project-card glass">
              <div className="project-img">
                 <Cpu size={80} color="var(--accent-cyan)" style={{filter: 'drop-shadow(0 0 10px var(--accent-cyan))'}} />
              </div>
              <div className="project-info">
                <h3>MCP SUNAT / MEF</h3>
                <p>Herramientas MCP avanzadas para minería y análisis de datos tributarios y económicos del gobierno peruano.</p>
                <div className="project-links">
                  <a href="https://github.com/AnderMC66/mcp-sunat" target="_blank" rel="noreferrer" className="btn btn-outline" style={{padding: '0.5rem 1rem', fontSize: '0.8rem'}}>
                    <Code size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="footer">
          <div className="social-links">
            <a href="https://github.com/AnderMC66" target="_blank" rel="noreferrer" className="social-icon">
              <Code size={24} />
            </a>
            <a href="mailto:rodrigocapiz67@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
          </div>
          <p style={{textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem'}}>
            <span style={{color: 'var(--accent-cyan)'}}>SYS_END</span> © 2026 Rodrigo Anderson Capia Condori.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
