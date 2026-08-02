import React, { useState, useEffect, useRef } from 'react';
import { Mail, Code, Database, Cpu, Brain, ChartBar, Terminal, ArrowDown, ExternalLink, Blocks, Sparkles, Activity } from 'lucide-react';
import './App.css';

/* Fondo Constelación (Nodos interactivos) */
const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    const particles = [];
    for(let i=0; i<60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.2 + 0.4
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
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    window.addEventListener('resize', handleResize);
    
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(6, 182, 212, 0.5)';
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      
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
          if(dist < 180) {
            p.x -= dx * 0.015;
            p.y -= dy * 0.015;
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
          
          if(dist < 120) {
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

/* Botones Magnéticos */
const MagneticButton = ({ children, className, href, target, rel, isLink = true }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
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
        transition: position.x === 0 ? 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none' 
      }}
    >
      {children}
    </Element>
  );
};

const App = () => {
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
      <div className="spotlight"></div>
      
      {/* Navbar */}
      <nav className="navbar animate-in">
        <div className="logo">R.ANDERSON<span className="blink">_</span></div>
        <div className="nav-links">
          <a href="#sobre-mi">Perfil</a>
          <a href="#habilidades">Skills</a>
          <a href="#proyectos">Proyectos</a>
          <a href="https://github.com/AnderMC66" target="_blank" rel="noreferrer" className="btn-github">
            [ GitHub ]
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <ParticlesBackground />
        <div className="hero-content">
          <div className="status-badge reveal-text">
            <span>
              <span className="ping-dot" style={{display: 'inline-block', marginRight: '8px'}}></span>
              Economista en Formación | UNSA
            </span>
          </div>

          <h1 className="hero-title reveal-text delay-1" style={{marginTop: '-0.5rem'}}>
            <span style={{display: 'block'}}>Economía &</span>
            <span className="gradient-text">Automatización</span>
          </h1>

          <div className="typewriter-container reveal-text delay-2">
            <Terminal size={20} />
            <span className="hero-subtitle-text">Rodrigo Anderson Capia Condori</span>
          </div>

          <p className="hero-desc reveal-text delay-3">
            Creo firmemente que <strong>mezclar la teoría económica con la programación</strong> es la clave para 
            ahorrar tiempo, optimizar procesos y multiplicar la productividad en cualquier organización.
          </p>

          <div className="hero-buttons reveal-text delay-4">
            <MagneticButton href="#proyectos" className="btn-glass">
              Ver Proyectos <ArrowDown size={16} />
            </MagneticButton>
            <MagneticButton href="#contacto" className="btn-outline">
              <Mail size={16} /> Contactar
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Ticker Económico */}
      <div className="ticker-wrap">
        <div className="ticker-move">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="ticker-item">
              AUTOMATIZACIÓN DE PROCESOS • ANÁLISIS DE DATOS • PRODUCTIVIDAD • LÓGICA COMPUTACIONAL • ESTADÍSTICA • 
            </div>
          ))}
        </div>
      </div>

      {/* Sobre mí (Bento Grid) */}
      <section id="sobre-mi" className="section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-label"><Brain size={18} /> Mi Visión</div>
            <h2 className="section-title">Enfoque Profesional</h2>
          </div>

          <div className="bento-grid">
            <div className="bento-main">
              <Cpu className="bento-icon" />
              <div className="bento-content">
                <h3>Eficiencia a través de los Datos</h3>
                <p>
                  Mi visión es clara: las tareas repetitivas y el análisis de grandes volúmenes de información 
                  no deberían hacerse a mano. Al integrar la automatización con la economía, podemos enfocar nuestra energía en <strong>tomar decisiones estratégicas</strong> en lugar de perder tiempo procesando datos.
                </p>
                <p>
                  Actualmente curso el 4to semestre de Economía en la UNSA. Gracias a mi sólida base en estadística y mi fuerte 
                  inclinación por la lógica de programación, me preparo constantemente para evolucionar hacia el Análisis de Datos y, en un futuro cercano, la Ingeniería de Sistemas.
                </p>
              </div>
            </div>
            
            <div className="bento-sidebar">
              <div className="bento-card">
                <ChartBar className="bento-icon-small" />
                <div className="bento-content">
                  <h4>Análisis Cuantitativo</h4>
                  <p>Interpretación precisa respaldada por sólidos conocimientos estadísticos.</p>
                </div>
              </div>
              <div className="bento-card">
                <Code className="bento-icon-small" />
                <div className="bento-content">
                  <h4>Automatización</h4>
                  <p>Uso de la programación para simplificar flujos de trabajo económicos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack (Chips) */}
      <section id="habilidades" className="section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-label"><Blocks size={18} /> Herramientas</div>
            <h2 className="section-title">Base de Conocimientos</h2>
          </div>

          <div className="tech-container">
            <div className="tech-category">
              <div className="tech-header">
                <Database size={24} />
                <h3>Programación & Datos</h3>
              </div>
              <div className="tech-chips">
                <span className="chip core">Lógica Computacional</span>
                <span className="chip core">Bases de Datos (SQL)</span>
                <span className="chip">Python (Básico)</span>
                <span className="chip">Git / GitHub</span>
              </div>
            </div>

            <div className="tech-category">
              <div className="tech-header">
                <Activity size={24} />
                <h3>Ciencias Económicas</h3>
              </div>
              <div className="tech-chips">
                <span className="chip core">Estadística Inferencial</span>
                <span className="chip core">Estadística Descriptiva</span>
                <span className="chip">Microeconomía</span>
                <span className="chip">Análisis de Varianza</span>
              </div>
            </div>

            <div className="tech-category">
              <div className="tech-header">
                <Sparkles size={24} />
                <h3>Software de Análisis</h3>
              </div>
              <div className="tech-chips">
                <span className="chip core">Excel (Intermedio)</span>
                <span className="chip">Power BI (Iniciación)</span>
                <span className="chip">R (Básico)</span>
                <span className="chip">Modelado Visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos (Ventanas) */}
      <section id="proyectos" className="section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-label"><Terminal size={18} /> Aplicación</div>
            <h2 className="section-title">Proyectos Destacados</h2>
          </div>

          <div className="lab-grid">
            {/* Proyecto 1 */}
            <div className="lab-card">
              <div className="lab-header">
                <div className="window-controls">
                  <span></span><span></span><span></span>
                </div>
                <div className="window-title">automatizacion_datos.py</div>
              </div>
              <div className="lab-body">
                <Cpu className="lab-icon" size={32} />
                <h3>Eficiencia y Automatización</h3>
                <p>
                  Desarrollo de scripts iniciales enfocados en automatizar tareas repetitivas, 
                  reduciendo el tiempo de procesamiento y minimizando el margen de error manual.
                </p>
                <div className="lab-tags">
                  <span>Python</span>
                  <span>Lógica</span>
                  <span>Productividad</span>
                </div>
                <a href="#" className="lab-link">Ver detalles <ExternalLink size={14} /></a>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="lab-card">
              <div className="lab-header">
                <div className="window-controls">
                  <span></span><span></span><span></span>
                </div>
                <div className="window-title">analisis_cuantitativo.xls</div>
              </div>
              <div className="lab-body">
                <ChartBar className="lab-icon" size={32} />
                <h3>Modelado Estadístico</h3>
                <p>
                  Aplicación práctica de funciones estadísticas en Excel para analizar 
                  conjuntos de datos, evaluar varianzas y extraer conclusiones objetivas.
                </p>
                <div className="lab-tags">
                  <span>Excel (Intermedio)</span>
                  <span>Estadística Aplicada</span>
                </div>
                <a href="#" className="lab-link">Ver análisis <ExternalLink size={14} /></a>
              </div>
            </div>
            
            {/* Proyecto 3 */}
            <div className="lab-card">
              <div className="lab-header">
                <div className="window-controls">
                  <span></span><span></span><span></span>
                </div>
                <div className="window-title">dashboard_indicadores.pbix</div>
              </div>
              <div className="lab-body">
                <Database className="lab-icon" size={32} />
                <h3>Visualización de Información</h3>
                <p>
                  Creación de reportes visuales enfocados en transformar tablas de datos complejas 
                  en tableros interactivos que agilicen la toma de decisiones empresariales.
                </p>
                <div className="lab-tags">
                  <span>Power BI</span>
                  <span>Reporting</span>
                  <span>SQL</span>
                </div>
                <a href="#" className="lab-link">Ver proyecto <ExternalLink size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="footer-content">
          <div className="social-links">
            <MagneticButton href="mailto:rodrigocapiz67@gmail.com" className="social-icon">
              <Mail size={22} />
            </MagneticButton>
            <MagneticButton href="https://github.com/AnderMC66" target="_blank" rel="noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </MagneticButton>
          </div>
          <p className="sys-status">
            © 2026 Rodrigo Anderson Capia Condori. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
