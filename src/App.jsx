import React from 'react';
import { Briefcase, Mail, ExternalLink, Code, Database, Cpu, Download, Brain, GraduationCap, TrendingUp, Terminal } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';

// Datos de ejemplo para el gráfico interactivo
const data = [
  { name: '2022', Productividad: 4000, IA_Adoptada: 1000 },
  { name: '2023', Productividad: 4500, IA_Adoptada: 2500 },
  { name: '2024', Productividad: 5200, IA_Adoptada: 4800 },
  { name: '2025', Productividad: 6500, IA_Adoptada: 7500 },
  { name: '2026', Productividad: 8200, IA_Adoptada: 9800 },
];

function App() {
  return (
    <>
      <div className="bg-gradient"></div>
      
      <div className="app-container container">
        {/* Navbar */}
        <nav className="navbar animate-fade-in">
          <div className="logo">Rodrigo Anderson</div>
          <div className="nav-links">
            <a href="#about">Sobre mí</a>
            <a href="#vision">Visión</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Proyectos</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="hero" id="about">
          <div className="hero-content">
            <div className="hero-badge animate-fade-in delay-1">
              ✨ Economía & Bases de Programación
            </div>
            <h1 className="animate-fade-in delay-2">
              Explorando datos, tecnología e inteligencia artificial.
            </h1>
            <p className="animate-fade-in delay-3">
              Hola, soy <strong>Rodrigo Anderson Capia Condori</strong>. Curso el segundo semestre de Economía en la UNSA. Soy un apasionado por aprender análisis de datos, construir bases sólidas en Python y descubrir el potencial de la Inteligencia Artificial en las ciencias sociales.
            </p>
            <div className="hero-buttons animate-fade-in delay-3">
              <a href="/CV_Rodrigo_Anderson.pdf" download className="btn btn-primary" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                Descargar CV <Download size={18} />
              </a>
              <a href="#projects" className="btn btn-primary">
                Ver Proyectos <ExternalLink size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contactarme <Mail size={18} />
              </a>
            </div>
          </div>
        </header>

        {/* Vision Section */}
        <section id="vision" className="vision">
          <div className="vision-box glass animate-fade-in">
            <h2><Brain color="var(--accent-cyan)" /> Mi Visión y Objetivos</h2>
            <p>
              Creo firmemente que la <strong>Economía del futuro</strong> estará estrechamente ligada a la tecnología. Aunque recién comienzo mi camino académico, busco formarme en <strong>Inteligencia Artificial y Análisis de Datos</strong> para entender mejor los fenómenos sociales. Mi meta a futuro es estudiar Ingeniería de Sistemas para consolidar estos conocimientos y crear soluciones tecnológicas enfocadas en el desarrollo.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline">
          <h2 className="section-title">Mi Ruta de Aprendizaje</h2>
          
          <div className="timeline-item">
            <div className="timeline-icon">
              <GraduationCap size={24} />
            </div>
            <div className="timeline-content">
              <span>Actualidad</span>
              <h3>Economía - 2do Semestre (UNSA)</h3>
              <p style={{color: 'var(--text-secondary)'}}>Iniciando mi formación en bases matemáticas, estadística y teoría económica en la Universidad Nacional de San Agustín de Arequipa.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <Terminal size={24} />
            </div>
            <div className="timeline-content">
              <span>En Proceso</span>
              <h3>Fundamentos en Python y Desarrollo</h3>
              <p style={{color: 'var(--text-secondary)'}}>Construyendo una base sólida en lógica de programación, iniciándome en la creación de scripts y explorando tecnologías web como Next.js.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon" style={{borderColor: 'var(--accent-purple)', color: 'var(--accent-purple)'}}>
              <Cpu size={24} />
            </div>
            <div className="timeline-content" style={{borderLeftColor: 'var(--accent-purple)', borderLeftWidth: '3px'}}>
              <span style={{color: 'var(--accent-purple)'}}>Próxima Meta</span>
              <h3>Ingeniería de Sistemas</h3>
              <p style={{color: 'var(--text-secondary)'}}>Expandir mis conocimientos técnicos de manera formal para eventualmente liderar y desarrollar proyectos tecnológicos estructurados.</p>
            </div>
          </div>
        </section>

        {/* Interactive Data Section */}
        <section className="chart-section">
          <h2 className="section-title">El Impacto de la Tecnología en la Economía</h2>
          <p style={{textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto'}}>
            Un pequeño ejemplo interactivo programado con <strong>Recharts</strong> que simula cómo la adopción de IA impactará la productividad. <i>(Pasa el ratón sobre el gráfico)</i>
          </p>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--accent-cyan)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--text-primary)' }}
                />
                <Line type="monotone" dataKey="Productividad" stroke="var(--accent-cyan)" strokeWidth={4} dot={{ r: 6, fill: 'var(--bg-color)' }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="IA_Adoptada" stroke="var(--accent-purple)" strokeWidth={4} dot={{ r: 6, fill: 'var(--bg-color)' }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <h2 className="section-title">Mis Fundamentos y Herramientas</h2>
          <div className="skills-grid">
            <div className="skill-card glass">
              <TrendingUp size={40} color="var(--accent-cyan)" />
              <h3>Análisis de Datos</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Estadística aplicada (Niveles I y II aprobados), pensamiento lógico y bases para la toma de decisiones.</p>
            </div>
            <div className="skill-card glass">
              <Database size={40} color="var(--accent-purple)" />
              <h3>Python & Bases</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Bases sólidas en Python, aprendiendo sobre automatización de tareas y scripts.</p>
            </div>
            <div className="skill-card glass">
              <Code size={40} color="var(--accent-cyan)" />
              <h3>Desarrollo Web</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Explorando el desarrollo frontend y con mucho interés en seguir descubriendo Next.js.</p>
            </div>
            <div className="skill-card glass">
              <Cpu size={40} color="var(--accent-purple)" />
              <h3>IA Aplicada</h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Entusiasta sobre cómo las herramientas de IA pueden aportar valor a la Economía.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <h2 className="section-title">Trabajos y Exploraciones</h2>
          <div className="projects-grid">
            
            {/* Project 1 */}
            <div className="project-card glass">
              <div className="project-img" style={{background: 'linear-gradient(45deg, #06b6d4, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                 <TrendingUp size={64} color="rgba(255,255,255,0.5)" />
              </div>
              <div className="project-info">
                <h3>Dashboard de Inflación</h3>
                <p>Análisis y visualización interactiva de datos de inflación y variables macroeconómicas clave.</p>
                <div className="project-links">
                  <a href="https://github.com/AnderMC66/DASHBOARD-INFLACION" target="_blank" rel="noreferrer" className="btn btn-outline" style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>
                    <Code size={16} /> Ver en GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card glass">
              <div className="project-img" style={{background: 'linear-gradient(45deg, #a855f7, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                 <Database size={64} color="rgba(255,255,255,0.5)" />
              </div>
              <div className="project-info">
                <h3>MCP BCRP</h3>
                <p>Servidor MCP (Model Context Protocol) para integrar asistentes de Inteligencia Artificial con la Base de Datos del Banco Central de Reserva del Perú.</p>
                <div className="project-links">
                  <a href="https://github.com/AnderMC66/mcp-bcr" target="_blank" rel="noreferrer" className="btn btn-outline" style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>
                    <Code size={16} /> Ver en GitHub
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="project-card glass">
              <div className="project-img" style={{background: 'linear-gradient(45deg, #f59e0b, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                 <Cpu size={64} color="rgba(255,255,255,0.5)" />
              </div>
              <div className="project-info">
                <h3>MCP SUNAT / MEF</h3>
                <p>Herramientas MCP para consultar y analizar datos tributarios y económicos gubernamentales mediante IA.</p>
                <div className="project-links">
                  <a href="https://github.com/AnderMC66/mcp-sunat" target="_blank" rel="noreferrer" className="btn btn-outline" style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>
                    <Code size={16} /> Ver en GitHub
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
            <a href="#" className="social-icon">
              <Briefcase size={24} />
            </a>
            <a href="mailto:tu-correo@ejemplo.com" className="social-icon">
              <Mail size={24} />
            </a>
          </div>
          <p>© 2026 Rodrigo Anderson Capia Condori. Inglés A2 | Futuro Ing. de Sistemas.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
