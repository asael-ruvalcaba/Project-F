import React from "react";
import {
  ChefHat,
  Home,
  Users,
  MessageSquare,
  Bell,
  Briefcase,
  Image as ImageIcon,
  BookOpen,
  Award,
  Lightbulb,
  Wrench,
  CheckCircle,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Flame,
} from "lucide-react";

const Dashboard = () => {
  // Paleta de colores personalizada para el acento (Cobre Culinario)
  const accentColor = "#C59B6D";
  const accentHover = "#A8835A";

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-[#C59B6D] selection:text-zinc-950 flex justify-center overflow-x-hidden">
      {/* Contenedor Principal */}
      <div className="w-full max-w-[1400px] flex gap-6 p-6 md:p-8 justify-center">
        {/* =========================================
            COLUMNA IZQUIERDA: Navegación y Perfil 
            ========================================= */}
        <aside className="hidden lg:flex flex-col w-[22%] h-[calc(100vh-4rem)] sticky top-8 justify-between">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 px-2 mb-10 cursor-pointer">
              <div className="bg-[#C59B6D]/10 p-2 rounded-xl">
                <ChefHat size={28} color={accentColor} strokeWidth={1.5} />
              </div>
              <span className="text-xl font-semibold tracking-tight text-zinc-100">
                Gastro<span style={{ color: accentColor }}>Net</span>
              </span>
            </div>

            {/* Menú de Navegación */}
            <nav className="flex flex-col gap-2">
              <NavItem icon={<Home size={20} />} label="Inicio" active />
              <NavItem icon={<Users size={20} />} label="Mi Red" />
              <NavItem
                icon={<MessageSquare size={20} />}
                label="Mensajes"
                badge="3"
              />
              <NavItem icon={<Bell size={20} />} label="Notificaciones" />
              <NavItem icon={<Briefcase size={20} />} label="Empleos" beta />
            </nav>
          </div>

          {/* Widget de Perfil Rápido */}
          <div className="bg-zinc-900/80 border border-zinc-800/60 rounded-2xl p-4 shadow-xl shadow-black/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                alt="Elena Arzak"
                className="w-12 h-12 rounded-full object-cover border-2 border-zinc-800"
              />
              <div>
                <h3 className="text-zinc-100 font-medium text-sm">
                  Elena Arzak
                </h3>
                <p className="text-zinc-400 text-xs">Chef Ejecutiva</p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Chef Ejecutiva en{" "}
              <span className="text-zinc-300 font-medium">
                Restaurante Aponiente
              </span>{" "}
              | 3 Estrellas Michelin.
            </p>

            {/* Barra de Progreso */}
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                <span>Perfil completado</span>
                <span style={{ color: accentColor }}>85%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-1.5">
                <div
                  className="h-1.5 rounded-full"
                  style={{ width: "85%", backgroundColor: accentColor }}
                ></div>
              </div>
            </div>
          </div>
        </aside>

        {/* =========================================
            COLUMNA CENTRAL: Feed Principal 
            ========================================= */}
        <main className="w-full lg:w-[50%] flex flex-col gap-6 max-w-[650px]">
          {/* Caja de Publicación */}
          <div className="bg-zinc-900/80 border border-zinc-800/60 rounded-2xl p-5 shadow-sm">
            <div className="flex gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                alt="Tu perfil"
                className="w-10 h-10 rounded-full object-cover"
              />
              <textarea
                placeholder="¿Qué estás cocinando o investigando hoy, Elena?"
                className="w-full bg-transparent border-none outline-none resize-none text-zinc-200 placeholder-zinc-500 pt-2 text-sm"
                rows="2"
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60 mt-2">
              <div className="flex gap-2">
                <ActionButton
                  icon={<ImageIcon size={16} />}
                  label="Proyecto/Plato"
                />
                <ActionButton icon={<BookOpen size={16} />} label="Técnica" />
                <ActionButton
                  icon={<Award size={16} />}
                  label="Certificación"
                />
              </div>
              <button
                className="px-4 py-1.5 rounded-full text-zinc-950 font-medium text-sm transition-colors"
                style={{ backgroundColor: accentColor }}
              >
                Publicar
              </button>
            </div>
          </div>

          {/* Divisor de Feed */}
          <div className="flex items-center gap-4 py-2">
            <div className="h-px bg-zinc-800/60 flex-1"></div>
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
              Relevante en tu sector
            </span>
            <div className="h-px bg-zinc-800/60 flex-1"></div>
          </div>

          {/* Post de Ejemplo */}
          <article className="bg-zinc-900/80 border border-zinc-800/60 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-zinc-700/50">
            {/* Cabecera del Post */}
            <div className="p-5 flex justify-between items-start">
              <div className="flex gap-3 cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                  alt="Massimo Bottura"
                  className="w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-[#C59B6D] transition-colors"
                />
                <div>
                  <h4 className="text-zinc-100 font-medium text-sm group-hover:text-[#C59B6D] transition-colors">
                    Massimo Bottura
                  </h4>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    Chef Propietario en Osteria Francescana | 3 Estrellas
                    Michelin
                  </p>
                  <span className="text-zinc-500 text-[10px] uppercase tracking-wider mt-1 block">
                    Hace 2 horas
                  </span>
                </div>
              </div>
              <button className="text-zinc-500 hover:text-zinc-300 transition-colors p-1">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Contenido del Post */}
            <div className="px-5 pb-4">
              <p className="text-zinc-300 text-sm leading-relaxed">
                Experimentando con fermentaciones de 48h y texturas de algas
                locales para el menú de otoño. Buscando el equilibrio perfecto
                entre umami marino y acidez láctica.
                <br />
                <br />
                <span
                  style={{ color: accentColor }}
                  className="hover:underline cursor-pointer"
                >
                  #InnovaciónCulinaria
                </span>{" "}
                <span
                  style={{ color: accentColor }}
                  className="hover:underline cursor-pointer"
                >
                  #Fermentación
                </span>{" "}
                <span
                  style={{ color: accentColor }}
                  className="hover:underline cursor-pointer"
                >
                  #Sostenibilidad
                </span>
              </p>
            </div>

            {/* Imagen de Alta Calidad */}
            <div className="w-full bg-zinc-950 aspect-[4/3] relative group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Plato de alta cocina con texturas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>

            {/* Barra de Interacción */}
            <div className="px-5 py-4 bg-zinc-900/90">
              <div className="flex items-center justify-between mb-3 text-xs text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-900 z-20">
                      <Lightbulb size={10} color={accentColor} />
                    </div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-900 z-10">
                      <Wrench size={10} color="#60A5FA" />
                    </div>
                  </div>
                  <span className="ml-1 text-zinc-400">
                    Rene Redzepi y 142 más
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="hover:text-zinc-300 cursor-pointer transition-colors">
                    24 Comentarios
                  </span>
                  <span className="hover:text-zinc-300 cursor-pointer transition-colors">
                    5 Compartidos
                  </span>
                </div>
              </div>

              <div className="h-px w-full bg-zinc-800/60 mb-3"></div>

              <div className="flex justify-between items-center gap-2">
                <ReactionButton
                  icon={<Lightbulb size={18} />}
                  label="Inspirador"
                  active
                />
                <ReactionButton icon={<Wrench size={18} />} label="Técnico" />
                <ReactionButton
                  icon={<CheckCircle size={18} />}
                  label="Validar Habilidad"
                />
                <ReactionButton
                  icon={<MessageCircle size={18} />}
                  label="Comentar"
                />
              </div>
            </div>
          </article>
        </main>

        {/* =========================================
            COLUMNA DERECHA: Networking & Tendencias
            ========================================= */}
        <aside className="hidden xl:flex flex-col w-[25%] h-[calc(100vh-4rem)] sticky top-8 gap-6">
          {/* Widget Conexiones Sugeridas */}
          <div className="bg-zinc-900/80 border border-zinc-800/60 rounded-2xl p-5 shadow-sm">
            <h3 className="text-zinc-100 font-medium text-sm mb-4 flex items-center gap-2">
              <Users size={16} style={{ color: accentColor }} />
              Profesionales similares a ti
            </h3>

            <div className="flex flex-col gap-5">
              <SuggestedProfile
                name="Andoni Luis Aduriz"
                role="Chef de I+D en Mugaritz"
                match="Cocina Molecular e interés en Sostenibilidad"
                img="https://images.unsplash.com/photo-1574966739987-65e386cce618?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              />
              <SuggestedProfile
                name="Pia Leon"
                role="Directora Culinaria en Kjolle"
                match="Ingredientes Endémicos y Alta Gastronomía"
                img="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              />
              <SuggestedProfile
                name="Joan Roca"
                role="Jefe de Cocina en El Celler"
                match="Técnicas Sous-Vide y Gestión"
                img="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              />
            </div>
          </div>

          {/* Widget Temas del Sector */}
          <div className="bg-zinc-900/80 border border-zinc-800/60 rounded-2xl p-5 shadow-sm">
            <h3 className="text-zinc-100 font-medium text-sm mb-4 flex items-center gap-2">
              <Flame size={16} style={{ color: accentColor }} />
              Tendencias en Gastronomía
            </h3>

            <div className="flex flex-col gap-4">
              <TrendItem tag="#ZeroWasteKitchen" posts="3.2k posts" trending />
              <TrendItem tag="#NuevasTécnicasSousVide" posts="1.5k posts" />
              <TrendItem tag="#FermentaciónKoji" posts="980 posts" trending />
              <TrendItem tag="#GestiónDeEquipos" posts="845 posts" />
            </div>

            <button className="w-full mt-5 py-2 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors border border-zinc-800 rounded-lg hover:bg-zinc-800/50">
              Ver todas las tendencias
            </button>
          </div>

          <div className="mt-auto pb-4">
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-zinc-600 px-2 justify-center">
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Acerca de
              </a>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Accesibilidad
              </a>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Privacidad
              </a>
              <span className="w-full text-center mt-2"> GastroNet © 2024</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

// ==========================================
// Sub-componentes Reutilizables
// ==========================================

const NavItem = ({ icon, label, active, badge, beta }) => {
  return (
    <div
      className={`
      flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 group
      ${active ? "bg-zinc-800/80 text-zinc-100" : "text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-200"}
    `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`${active ? "text-[#C59B6D]" : "text-zinc-500 group-hover:text-zinc-300"} transition-colors`}
        >
          {icon}
        </div>
        <span className="text-sm font-medium">{label}</span>
      </div>

      {badge && (
        <span className="bg-[#C59B6D] text-zinc-950 text-[10px] font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}

      {beta && (
        <span className="border border-[#C59B6D]/30 text-[#C59B6D] text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-[#C59B6D]/10">
          Beta
        </span>
      )}
    </div>
  );
};

const ActionButton = ({ icon, label }) => {
  return (
    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 transition-colors text-xs font-medium">
      {icon}
      <span>{label}</span>
    </button>
  );
};

const ReactionButton = ({ icon, label, active }) => {
  return (
    <button
      className={`
      flex items-center justify-center gap-1.5 py-2 px-1 flex-1 rounded-lg transition-colors text-xs font-medium
      ${active ? "text-[#C59B6D] bg-[#C59B6D]/10" : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"}
    `}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

const SuggestedProfile = ({ name, role, match, img }) => {
  return (
    <div className="flex gap-3 items-start group">
      <img
        src={img}
        alt={name}
        className="w-10 h-10 rounded-full object-cover border border-zinc-800"
      />
      <div className="flex-1">
        <h4 className="text-zinc-200 text-sm font-medium group-hover:text-[#C59B6D] transition-colors cursor-pointer">
          {name}
        </h4>
        <p className="text-zinc-500 text-xs mt-0.5">{role}</p>
        <div className="bg-zinc-800/50 rounded-md p-1.5 mt-1.5 border border-zinc-700/30">
          <p className="text-[10px] text-zinc-400 leading-tight">
            <span className="text-zinc-300 font-medium">Coincide en:</span>{" "}
            {match}
          </p>
        </div>
      </div>
      <button className="border border-[#C59B6D] text-[#C59B6D] hover:bg-[#C59B6D] hover:text-zinc-950 rounded-full text-[10px] font-medium px-3 py-1.5 transition-colors whitespace-nowrap">
        Conectar
      </button>
    </div>
  );
};

const TrendItem = ({ tag, posts, trending }) => {
  return (
    <div className="flex flex-col gap-0.5 cursor-pointer group">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-zinc-200 group-hover:text-[#C59B6D] transition-colors">
          {tag}
        </span>
        {trending && (
          <span className="text-[10px] bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded font-medium flex items-center gap-1">
            <Flame size={10} /> Hot
          </span>
        )}
      </div>
      <span className="text-xs text-zinc-500">{posts}</span>
    </div>
  );
};

export default Dashboard;
