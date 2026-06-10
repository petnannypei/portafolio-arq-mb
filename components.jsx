/* global React */
const { useEffect, useRef, useState } = React;

/* ─────────────────────────────────────────────────────────
   Content — bilingual ES/EN
   ───────────────────────────────────────────────────────── */

const CONTENT = {
  es: {
    nav: {
      brand: "Mario Benavides",
      links: [
        { id: "work", label: "Proyectos" },
        { id: "about", label: "Estudio" },
        { id: "contact", label: "Contacto" },
      ],
    },
    hero: {
      eyebrow: "Selección de proyectos",
      title: "Mario\nBenavides",
      sub: [
        "Diseño Arquitectónico",
        "Diseño Interior y Remodelación",
        "Diseño Urbano y Paisajístico",
        "Construcción y Remodelación",
      ],
      place: "Pereira — Eje Cafetero",
      cta: "Ver proyectos",
      meta: "Selección curada de obra",
      credits: [
        { text: "Arquitecto Diseñador  ·  BIM Architect  ·  CQC Manager" },
        { text: "Universidad Nacional de Colombia" },
        { text: "Certified Architect  ·  US Army Corps of Engineers", logo: "usace" },
      ],
      cv: {
        bio: "Estudié Arquitectura en la Universidad Nacional de Colombia, en Bogotá. Desarrollé mi tesis de grado con reconocimiento meritorio en la línea de profundización en Arquitectura y Urbanismo de la Universidad Técnica de Viena, Austria. Profesionalmente he alternado mi trabajo como Arquitecto de proyecto en Diseño Arquitectónico e Interior, Diseño Urbano y Paisajístico; en el mundo de la obra civil he sido Residente, Director, Interventor y Jefe de Control de Calidad con metodología Design & Build. Tengo una importante experiencia docente a nivel universitario en áreas como Urbanismo, Diseño Arquitectónico e Interior, Teoría y Representación Arquitectónica.",
        interests: [
          "Diseño Arquitectónico e Interior",
          "Diseño Urbano y Paisajístico",
          "Direccionamiento estratégico de proyectos",
        ],
      },
    },
    statement: {
      eyebrow: "Motto",
      body: (
        <>
          Diseño con el <span className="accent">rigor que exige la obra</span> y la sensibilidad de quien enseña a pensar el espacio. La precisión técnica y el buen gusto no se negocian y nunca van por separado. Lo que se dibuja se debe construir, y lo que se construye se disfruta habitándolo.
        </>
      ),
      creds: ["Universidad Nacional de Colombia", "TU Wien", "US Army Corps of Engineers"],
    },
    projects: {
      eyebrow: "Obra seleccionada",
      title: (n) => `${({1:"Un",2:"Dos",3:"Tres",4:"Cuatro",5:"Cinco",6:"Seis",7:"Siete",8:"Ocho",9:"Nueve",10:"Diez",11:"Once",12:"Doce",13:"Trece",14:"Catorce",15:"Quince"}[n] || n)} proyectos.\nUna sola lógica.`,
      count: (n) => `${String(n).padStart(2, "0")} proyectos`,
    },
    detail: {
      close: "Cerrar",
      gallery: "Galería",
      prev: "Anterior",
      next: "Siguiente",
      back: "← Volver al índice",
      role: "Rol",
      year: "Año",
      place: "Lugar",
      scope: "Alcance",
      photos: (n) => `${n} imágenes`,
    },
    foot: {
      eyebrow: "Contacto",
      title: ["Tú lo sueñas,", "yo lo diseño,", "juntos lo construimos."],
      subtitle: "Démosle forma a tus ideas y realicemos ese sueño con soluciones de Diseño Arquitectónico estéticas, eficientes y económicamente factibles.",
      email: "m.albertobenarivera@gmail.com",
      phone: "+57 305 291 7776",
      phoneRaw: "573052917776",
      ctaWhatsApp: "WhatsApp",
      ctaEmail: "Escribir email",
      ctaEmailClose: "Cerrar formulario",
      form: {
        title: "¿Cuéntame de tu proyecto?",
        name: "Nombre",
        emailField: "Email",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar mensaje",
        opening: "Abriendo tu cliente de correo…",
        defaultSubject: "Consulta de proyecto",
      },
      colDirect: "Directo",
      colLocate: "Ubicación",
      locate: ["Pereira, Colombia", "Eje Cafetero"],
      base: ["© Mario Benavides — Todos los derechos reservados", "Pereira · 2025"],
    },
  },
  en: {
    nav: {
      brand: "Mario Benavides",
      links: [
        { id: "work", label: "Work" },
        { id: "about", label: "Studio" },
        { id: "contact", label: "Contact" },
      ],
    },
    hero: {
      eyebrow: "Selected projects",
      title: "Mario\nBenavides",
      sub: [
        "Architectural Design",
        "Interior Design & Refurbishment",
        "Urban & Landscape Design",
        "Construction & Refurbishment",
      ],
      place: "Pereira — Coffee Region",
      cta: "See work",
      meta: "Curated body of work",
      credits: [
        { text: "Architect Designer  ·  BIM Architect  ·  CQC Manager" },
        { text: "Universidad Nacional de Colombia" },
        { text: "Certified Architect  ·  US Army Corps of Engineers", logo: "usace" },
      ],
      cv: {
        bio: "I studied Architecture at the Universidad Nacional de Colombia (Bogotá) and spent two years at TU Wien (Austria), in the Architecture & Urbanism specialization, where I completed my graduation thesis with honours. Professionally I have alternated between project architecture in Architectural and Interior Design and Urban & Landscape Design, and a long career in civil works as Site Architect, Construction Manager, Site Engineer Auditor, Technical Coordinator, Design & Build lead and on-site Quality Control Manager. In academia I sustain an active teaching practice at university level in Urbanism, Architectural & Interior Design, Theory and Architectural Representation.",
        interests: [
          "Architectural & Interior Design",
          "Urban & Landscape Design",
          "Strategic direction of projects",
        ],
      },
    },
    statement: {
      eyebrow: "Motto",
      body: (
        <>
          I design with the <span className="accent">rigour the work demands</span> and the sensibility of someone who teaches space as thought. Technical precision and good taste are non-negotiable and never travel apart. What is drawn must be built, and what is built must be enjoyed in inhabiting it.
        </>
      ),
      creds: ["Universidad Nacional de Colombia", "TU Wien", "US Army Corps of Engineers"],
    },
    projects: {
      eyebrow: "Selected work",
      title: (n) => `${({1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine",10:"Ten",11:"Eleven",12:"Twelve",13:"Thirteen",14:"Fourteen",15:"Fifteen"}[n] || n)} projects.\nOne single logic.`,
      count: (n) => `${String(n).padStart(2, "0")} projects`,
    },
    detail: {
      close: "Close",
      gallery: "Gallery",
      prev: "Previous",
      next: "Next",
      back: "← Back to index",
      role: "Role",
      year: "Year",
      place: "Location",
      scope: "Scope",
      photos: (n) => `${n} images`,
    },
    foot: {
      eyebrow: "Contact",
      title: ["You dream it,", "I design it,", "together we build it."],
      subtitle: "Let's give shape to your ideas and bring your dream to life with architectural design that is beautiful, efficient and economically viable.",
      email: "m.albertobenarivera@gmail.com",
      phone: "+57 305 291 7776",
      phoneRaw: "573052917776",
      ctaWhatsApp: "WhatsApp",
      ctaEmail: "Send email",
      ctaEmailClose: "Close form",
      form: {
        title: "Tell me about your project",
        name: "Name",
        emailField: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send message",
        opening: "Opening your mail client…",
        defaultSubject: "Project enquiry",
      },
      colDirect: "Direct",
      colLocate: "Locations",
      locate: ["Pereira, Colombia", "Coffee Region"],
      base: ["© Mario Benavides — All rights reserved", "Pereira · 2025"],
    },
  },
};

const PROJECTS = [
  {
    id: "jenos-pizza",
    name: { es: "Jeno's Pizza Gourmet", en: "Jeno's Pizza Gourmet" },
    place: { es: "Bogotá", en: "Bogotá" },
    cat: { es: "Arquitectura Comercial · Diseño Interior", en: "Commercial Architecture · Interior Design" },
    year: "2014",
    role: { es: "Arquitectura · Interiorismo · Dirección de obra", en: "Architecture · Interior · Construction" },
    scope: { es: "Restaurante en dos niveles · Diseño integral", en: "Two-level restaurant · Full design" },
    tone: "tone-c",
    cover: "assets/jenos/17.webp",
    ph: { es: "Salón principal · Atmósfera gourmet", en: "Main hall · Gourmet atmosphere" },
    galleryMode: "scroll",
    gallery: [
      { src: "assets/jenos/02.webp", label: { es: "Salón principal · Vista general", en: "Main hall · Wide view" } },
      { src: "assets/jenos/01.webp", label: { es: "Luminaria principal · Doble altura", en: "Pendant cluster · Double-height" } },
      { src: "assets/jenos/04.webp", label: { es: "Fachada nocturna · Identidad de marca", en: "Evening façade · Brand identity" } },
      { src: "assets/jenos/03.webp", label: { es: "Acceso · Mirada al interior", en: "Entry · Looking in" } },
      { src: "assets/jenos/05.webp", label: { es: "Pared firma · Mural de ingredientes", en: "Signature wall · Ingredients mural" } },
      { src: "assets/jenos/15.webp", label: { es: "Pared firma · Logo Jeno's", en: "Signature wall · Jeno's logo" } },
      { src: "assets/jenos/16.webp", label: { es: "Vista panorámica · Salón completo", en: "Panoramic · Full hall" } },
      { src: "assets/jenos/08.webp", label: { es: "Barra · Materialidad piedra y madera", en: "Bar · Stone + wood palette" } },
      { src: "assets/jenos/06.webp", label: { es: "Bodega de vinos · Detalle", en: "Wine cellar · Detail" } },
      { src: "assets/jenos/19.webp", label: { es: "Cocina abierta · Barra técnica", en: "Open kitchen · Service counter" } },
      { src: "assets/jenos/20.webp", label: { es: "Grifo cerveza · Detalle material", en: "Beer tap · Material detail" } },
      { src: "assets/jenos/23.webp", label: { es: "Barra y cocina · Cierre", en: "Bar and kitchen · Closing view" } },
      { src: "assets/jenos/07.webp", label: { es: "Plano de techo · Iluminación dirigida", en: "Ceiling plan · Directed lighting" } },
      { src: "assets/jenos/13.webp", label: { es: "Salón superior · Atmósfera", en: "Upper hall · Atmosphere" } },
      { src: "assets/jenos/11.webp", label: { es: "Mezzanine · Visión de conjunto", en: "Mezzanine · Overall view" } },
      { src: "assets/jenos/12.webp", label: { es: "Booths · Confort y privacidad", en: "Booths · Comfort and privacy" } },
      { src: "assets/jenos/14.webp", label: { es: "Pasillo · Texturas y ritmo", en: "Aisle · Textures and rhythm" } },
      { src: "assets/jenos/09.webp", label: { es: "Escalera principal · Carpintería", en: "Main stair · Joinery" } },
      { src: "assets/jenos/18.webp", label: { es: "Escalera · Detalle estructural", en: "Stair · Structural detail" } },
      { src: "assets/jenos/17.webp", label: { es: "Escalera · Vista vertical", en: "Stair · Vertical view" } },
      { src: "assets/jenos/10.webp", label: { es: "Doble altura · Lámparas suspendidas", en: "Double-height · Suspended lamps" } },
      { src: "assets/jenos/21.webp", label: { es: "Luminarias · Plano cenital", en: "Pendants · Overhead view" } },
      { src: "assets/jenos/22.webp", label: { es: "Acceso lateral · Geometría roja", en: "Side entry · Red geometry" } },
    ],
  },
  {
    id: "beacon-tower",
    name: { es: "Beacon Tower 102", en: "Beacon Tower 102" },
    place: { es: "Bogotá", en: "Bogotá" },
    cat: { es: "Arquitectura Corporativa · Diseño Interior", en: "Corporate Architecture · Interior Design" },
    year: "2018",
    role: { es: "Arquitectura · Interiorismo · Dirección de obra", en: "Architecture · Interior · Construction" },
    scope: { es: "Edificio de oficinas · Diseño integral", en: "Office building · Full design" },
    tone: "tone-a",
    cover: "assets/beacon/portada.webp",
    ph: { es: "Fachada principal · Identidad corporativa", en: "Main façade · Corporate identity" },
    galleryMode: "scroll",
    gallery: [
      { src: "assets/beacon/portada.webp", label: { es: "Fachada principal · Identidad", en: "Main façade · Identity" } },
      { src: "assets/beacon/05.webp",      label: { es: "Acceso · Escalera y señalética", en: "Entry · Stair and signage" } },
      { src: "assets/beacon/13.webp",      label: { es: "Lobby · Recepción", en: "Lobby · Reception desk" } },
      { src: "assets/beacon/12.webp",      label: { es: "Lobby · Pared firma 3D + madera", en: "Lobby · Signature wall + wood" } },
      { src: "assets/beacon/14.webp",      label: { es: "Recepción · Materialidad piedra", en: "Reception · Stone palette" } },
      { src: "assets/beacon/03.webp",      label: { es: "Vestíbulo técnico · CCTV", en: "Tech vestibule · CCTV" } },
      { src: "assets/beacon/09.webp",      label: { es: "Pasillo · Pared escultórica", en: "Corridor · Sculptural wall" } },
      { src: "assets/beacon/07.webp",      label: { es: "Recepción ejecutiva · Detalle", en: "Executive reception · Detail" } },
      { src: "assets/beacon/01.webp",      label: { es: "Planta abierta · Iluminación LED", en: "Open floor · LED lighting" } },
      { src: "assets/beacon/06.webp",      label: { es: "Planta abierta · Pasarela", en: "Open floor · Aisle" } },
      { src: "assets/beacon/10.webp",      label: { es: "Sala flexible · Visión panorámica", en: "Flex room · Panoramic view" } },
      { src: "assets/beacon/11.webp",      label: { es: "Espacio amplio · Luz natural", en: "Wide space · Natural light" } },
      { src: "assets/beacon/04.webp",      label: { es: "Oficina · Vista al exterior", en: "Office · Outside view" } },
      { src: "assets/beacon/08.webp",      label: { es: "Sala lateral · Madera + vidrio", en: "Side room · Wood + glass" } },
      { src: "assets/beacon/02.webp",      label: { es: "Pasillo cenital · Estructura", en: "Skylit corridor · Structure" } },
      { src: "assets/beacon/portada.webp", label: { es: "Cierre · Vista de fachada", en: "Closing · Façade view" } },
    ],
  },
  {
    id: "cafam-empleo",
    name: { es: "Cafam — Agencia de Empleo", en: "Cafam — Employment Agency" },
    place: { es: "Bogotá", en: "Bogotá" },
    cat: { es: "Arquitectura Corporativa · Diseño Interior", en: "Corporate Architecture · Interior Design" },
    year: "2015",
    role: { es: "Arquitectura · Interiorismo · Dirección de obra", en: "Architecture · Interior · Construction" },
    scope: { es: "Sede de atención al público · Diseño integral", en: "Public service branch · Full design" },
    tone: "tone-a",
    cover: "assets/cafam-empleo/portada.webp",
    ph: { es: "Recepción · Identidad de marca Cafam", en: "Reception · Cafam brand identity" },
    galleryMode: "scroll",
    gallery: [
      { src: "assets/cafam-empleo/portada.webp", label: { es: "Recepción · Identidad de marca", en: "Reception · Brand identity" } },
      { src: "assets/cafam-empleo/04.webp",      label: { es: "Recepción · Vista general", en: "Reception · Wide view" } },
      { src: "assets/cafam-empleo/07.webp",      label: { es: "Recepción · Detalle de mostrador", en: "Reception · Counter detail" } },
      { src: "assets/cafam-empleo/02.webp",      label: { es: "Sala de espera · Cielo raso azul", en: "Waiting area · Blue ceiling" } },
      { src: "assets/cafam-empleo/03.webp",      label: { es: "Módulos de atención · Vista lateral", en: "Service modules · Side view" } },
      { src: "assets/cafam-empleo/05.webp",      label: { es: "Módulos · Distribución y señalética", en: "Modules · Layout and signage" } },
      { src: "assets/cafam-empleo/08.webp",      label: { es: "Aula de orientación · Acceso", en: "Orientation room · Entry" } },
      { src: "assets/cafam-empleo/06.webp",      label: { es: "Cielo raso · Iluminación indirecta", en: "Ceiling plan · Indirect light" } },
      { src: "assets/cafam-empleo/01.webp",      label: { es: "Acceso · Vidrio templado y señalética", en: "Entry · Tempered glass and signage" } },
    ],
  },
  {
    id: "edificio-liberty",
    name: { es: "Edificio Liberty", en: "Edificio Liberty" },
    place: { es: "Bogotá", en: "Bogotá" },
    cat: { es: "Arquitectura Residencial · Diseño Interior", en: "Residential Architecture · Interior Design" },
    year: "2022",
    role: { es: "Arquitectura · Interiorismo · Plantas tipo", en: "Architecture · Interior · Floor plans" },
    scope: { es: "Edificio multifamiliar · 5 niveles", en: "Multifamily building · 5 levels" },
    tone: "tone-a",
    cover: "assets/liberty/portada.webp",
    ph: { es: "Fachada principal · Atardecer", en: "Main façade · Sunset" },
    galleryMode: "scroll",
    gallery: [
      { src: "assets/liberty/portada.webp",            label: { es: "Fachada principal · Atardecer", en: "Main façade · Sunset" } },
      { src: "assets/liberty/02-fachada-contexto.webp", label: { es: "Fachada · Contexto urbano", en: "Façade · Urban context" } },
      { src: "assets/liberty/03-planta-3hab.webp",     label: { es: "Planta tipo · 3 habitaciones", en: "Floor plan · 3-bedroom unit" } },
      { src: "assets/liberty/04-planta-2hab.webp",     label: { es: "Planta tipo · 2 habitaciones", en: "Floor plan · 2-bedroom unit" } },
      { src: "assets/liberty/05-planta-1hab.webp",     label: { es: "Planta tipo · 1 habitación", en: "Floor plan · 1-bedroom unit" } },
    ],
  },
  {
    id: "aguas-del-padre",
    name: { es: "Vivienda Campestre Aguas del Padre", en: "Aguas del Padre Country House" },
    place: { es: "Ziguatepeque, Honduras", en: "Ziguatepeque, Honduras" },
    cat: { es: "Arquitectura Residencial · Diseño Interior", en: "Residential Architecture · Interior Design" },
    year: "2016",
    role: { es: "Arquitectura · Interiorismo · Paisaje", en: "Architecture · Interior · Landscape" },
    scope: { es: "Vivienda campestre en pinar · Diseño integral", en: "Country house in pine forest · Full design" },
    tone: "tone-d",
    cover: "assets/aguas-padre/portada.webp",
    ph: { es: "Vista panorámica · Casa y piscina en el bosque", en: "Panoramic · House and pool in the woods" },
    galleryMode: "scroll",
    gallery: [
      { src: "assets/aguas-padre/portada.webp", label: { es: "Panorámica · Casa, piscina y bosque", en: "Panoramic · House, pool and forest" } },
      { src: "assets/aguas-padre/03.webp",      label: { es: "Implantación · Casa entre pinos", en: "Site · House among pines" } },
      { src: "assets/aguas-padre/02.webp",      label: { es: "Fachada principal · Volumen único", en: "Main façade · Single volume" } },
      { src: "assets/aguas-padre/04.webp",      label: { es: "Salón principal · Estructura en madera", en: "Main hall · Wood structure" } },
      { src: "assets/aguas-padre/05.webp",      label: { es: "Salón principal · Cercha de madera y chimenea", en: "Main hall · Timber truss and fireplace" } },
      { src: "assets/aguas-padre/06.webp",      label: { es: "Planta de implantación · Casa, piscina y deck", en: "Site plan · House, pool and deck" } },
      { src: "assets/aguas-padre/07.webp",      label: { es: "Cocina · Mesón en piedra y zona de estudio", en: "Kitchen · Stone counter and study area" } },
    ],
  },
  {
    id: "casa-alvarez",
    name: { es: "Casa Álvarez", en: "Casa Álvarez" },
    place: { es: "Pereira", en: "Pereira" },
    cat: { es: "Arquitectura Residencial · Diseño Interior", en: "Residential Architecture · Interior Design" },
    year: "2023",
    role: { es: "Arquitectura · Interiorismo · Dirección de obra", en: "Architecture · Interior · Construction" },
    scope: { es: "Vivienda urbana · 3 niveles", en: "Urban house · 3 levels" },
    tone: "tone-a",
    cover: "assets/alvarez/portada.webp",
    ph: { es: "Fachada principal · Volumen blanco frente al Nevado", en: "Main façade · White volume facing the Nevado" },
    galleryMode: "scroll",
    gallery: [
      { src: "assets/alvarez/portada.webp", label: { es: "Fachada principal · Volumen blanco", en: "Main façade · White volume" } },
      { src: "assets/alvarez/02.webp",      label: { es: "Fachada lateral · Inserción urbana", en: "Side façade · Urban insertion" } },
      { src: "assets/alvarez/03.webp",      label: { es: "Salón principal · Madera y mármol", en: "Main living · Wood and marble" } },
      { src: "assets/alvarez/04.webp",      label: { es: "Cocina · Isla central y campana", en: "Kitchen · Central island and hood" } },
      { src: "assets/alvarez/05.webp",      label: { es: "Comedor · Plafones y luz indirecta", en: "Dining · Coffered ceiling and indirect light" } },
      { src: "assets/alvarez/06.webp",      label: { es: "Patio interior · Deck en madera", en: "Inner patio · Wood deck" } },
      { src: "assets/alvarez/07.webp",      label: { es: "Estudio · Pared en piedra", en: "Study · Stone wall" } },
    ],
  },
  {
    id: "casa-rivera-rua",
    name: { es: "Casa Rivera Rúa", en: "Casa Rivera Rúa" },
    place: { es: "Yotoco, Valle del Cauca", en: "Yotoco, Valle del Cauca" },
    cat: { es: "Arquitectura Residencial · Diseño Interior", en: "Residential Architecture · Interior Design" },
    year: "2024",
    role: { es: "Arquitectura · Interiorismo · Paisaje", en: "Architecture · Interior · Landscape" },
    scope: { es: "Vivienda tropical · Ladrillo, madera y agua", en: "Tropical house · Brick, wood and water" },
    tone: "tone-d",
    cover: "assets/cartagena/portada.webp",
    ph: { es: "Fachada al atardecer · Persianas de ladrillo y madera", en: "Façade at dusk · Brick and wood louvers" },
    galleryMode: "scroll",
    gallery: [
      { src: "assets/cartagena/portada.webp", label: { es: "Fachada al atardecer · Persianas de ladrillo y madera", en: "Façade at dusk · Brick and wood louvers" } },
      { src: "assets/cartagena/05.webp",      label: { es: "Fachada al espejo de agua · Atardecer", en: "Façade to reflecting pool · Sunset" } },
      { src: "assets/cartagena/06.webp",      label: { es: "Fachada · Persianas verticales y luz cálida", en: "Façade · Vertical louvers and warm light" } },
      { src: "assets/cartagena/02.webp",      label: { es: "Terraza · Cocina abierta y estar exterior", en: "Terrace · Outdoor kitchen and lounge" } },
      { src: "assets/cartagena/03.webp",      label: { es: "Cocina y comedor · Vista al espejo de agua", en: "Kitchen and dining · View to reflecting pool" } },
      { src: "assets/cartagena/04.webp",      label: { es: "Baño · Madera, ladrillo y luz rasante", en: "Bathroom · Wood, brick and raking light" } },
    ],
  },
  {
    id: "casa-tabares-rivera",
    name: { es: "Casa Tabares Rivera", en: "Casa Tabares Rivera" },
    place: { es: "Altagracia, Eje Cafetero", en: "Altagracia, Coffee Region" },
    cat: { es: "Arquitectura Residencial · Diseño Interior", en: "Residential Architecture · Interior Design" },
    year: "2024",
    role: { es: "Arquitectura · Interiorismo · Paisaje", en: "Architecture · Interior · Landscape" },
    scope: { es: "Vivienda campestre · Piedra, madera y cielo", en: "Country house · Stone, wood and sky" },
    tone: "tone-e",
    cover: "assets/tabares/portada.webp",
    ph: { es: "Vista aérea nocturna · Casa, piscina y vía láctea", en: "Aerial night view · House, pool and milky way" },
    galleryMode: "scroll",
    gallery: [
      { src: "assets/tabares/portada.webp", label: { es: "Vista aérea · Casa, piscina y cafetales", en: "Aerial view · House, pool and coffee fields" } },
      { src: "assets/tabares/13.webp", label: { es: "Estar principal · Sofá blanco y chimenea", en: "Main living · White sofa and fireplace" } },
      { src: "assets/tabares/10.webp", label: { es: "Cocina · Isla en granito y muro en piedra", en: "Kitchen · Granite island and stone wall" } },
      { src: "assets/tabares/01.webp", label: { es: "Vista nocturna · Casa bajo la vía láctea", en: "Night view · House under the milky way" } },
      { src: "assets/tabares/11.webp", label: { es: "Comedor · Lucernario sobre la mesa", en: "Dining · Skylight over the table" } },
      { src: "assets/tabares/07.webp", label: { es: "Fachada posterior · Volumen sobre piedra", en: "Rear façade · Volume over stone" } },
      { src: "assets/tabares/15.webp", label: { es: "Piscina · Espejo de agua y mobiliario sumergido", en: "Pool · Reflecting water and sunken lounge" } },
      { src: "assets/tabares/02.webp", label: { es: "Terraza · Deck y estar exterior", en: "Terrace · Deck and outdoor lounge" } },
      { src: "assets/tabares/14.webp", label: { es: "Estar · Sofá modular y muro en piedra", en: "Living · Modular sofa and stone wall" } },
      { src: "assets/tabares/05.webp", label: { es: "Fachada · Iluminación cálida sobre piedra", en: "Façade · Warm light over stone" } },
      { src: "assets/tabares/12.webp", label: { es: "Cocina técnica · Isla negra y barra alta", en: "Service kitchen · Black island and high counter" } },
      { src: "assets/tabares/06.webp", label: { es: "Vista posterior · Terraza y piscina", en: "Rear view · Terrace and pool" } },
      { src: "assets/tabares/08.webp", label: { es: "Terraza posterior · Estar bajo las estrellas", en: "Rear terrace · Lounge under the stars" } },
      { src: "assets/tabares/03.webp", label: { es: "Volumen blanco · Deck y mobiliario exterior", en: "White volume · Deck and outdoor seating" } },
      { src: "assets/tabares/16.webp", label: { es: "Vista aérea · Casa, deck y piscina infinita", en: "Aerial view · House, deck and infinity pool" } },
    ],
  },
  {
    id: "casa-tamaulipas",
    name: { es: "Vivienda en Reinosa", en: "Vivienda en Reinosa" },
    place: { es: "Reinosa, Tamaulipas · México", en: "Reinosa, Tamaulipas · Mexico" },
    cat: { es: "Arquitectura Residencial · Diseño Interior", en: "Residential Architecture · Interior Design" },
    year: "2020",
    role: { es: "Arquitectura · Interiorismo · Estudio tipológico", en: "Architecture · Interior · Typological study" },
    scope: { es: "Vivienda de interés social · 58 m² · 2 niveles", en: "Social housing · 58 m² · 2 levels" },
    tone: "tone-d",
    cover: "assets/tamaulipas/portada.webp",
    ph: { es: "Fachada principal · Volumen adobe entre vecinos", en: "Main façade · Adobe volume between neighbors" },
    galleryMode: "scroll",
    gallery: [
      { src: "assets/tamaulipas/portada.webp", label: { es: "Fachada principal · Volumen adobe en la calle", en: "Main façade · Adobe volume on the street" } },
      { src: "assets/tamaulipas/03.webp", label: { es: "Estar y comedor · Escalera y columnas adobe", en: "Living and dining · Stair and adobe columns" } },
      { src: "assets/tamaulipas/02.webp", label: { es: "Planta cenital · Sala de juegos y habitaciones", en: "Top-down · Games room and bedrooms" } },
      { src: "assets/tamaulipas/06.webp", label: { es: "Pasillo superior · Tapiz mexicano", en: "Upper aisle · Mexican tapestry" } },
      { src: "assets/tamaulipas/04.webp", label: { es: "Doble altura · Comedor y barra de cocina", en: "Double height · Dining and kitchen bar" } },
      { src: "assets/tamaulipas/07.webp", label: { es: "Fachada posterior · Terrazas y doble altura", en: "Rear façade · Terraces and double height" } },
      { src: "assets/tamaulipas/05.webp", label: { es: "Cocina · Isla en granito y barra alta", en: "Kitchen · Granite island and high counter" } },
      { src: "assets/tamaulipas/08.webp", label: { es: "Pasillo superior · Mural de Rivera", en: "Upper aisle · Rivera mural" } },
      { src: "assets/tamaulipas/09.webp", label: { es: "Interior · Composición de planos adobe", en: "Interior · Adobe plane composition" } },
      { src: "assets/tamaulipas/10.webp", label: { es: "Interior · Mobiliario y materialidad", en: "Interior · Furniture and materials" } },
      { src: "assets/tamaulipas/11.webp", label: { es: "Interior · Estructura y luz natural", en: "Interior · Structure and natural light" } },
    ],
  },
  {
    id: "apto-graciela",
    name: { es: "Apartamento Duarte", en: "Apartamento Duarte" },
    place: { es: "Bogotá", en: "Bogotá" },
    cat: { es: "Diseño Interior · Remodelación", en: "Interior Design · Refurbishment" },
    year: "2023",
    role: { es: "Interiorismo · Remodelación · Dirección de obra", en: "Interior · Refurbishment · Construction" },
    scope: { es: "Apartamento en altura · Remodelación integral", en: "High-rise apartment · Full refurbishment" },
    tone: "tone-c",
    cover: "assets/apto-graciela/portada.webp",
    ph: { es: "Vista nocturna · Sala y comedor sobre la ciudad", en: "Night view · Living and dining over the city" },
    galleryMode: "scroll",
    gallery: [
      { src: "assets/apto-graciela/portada.webp", label: { es: "Vista nocturna · Sala y comedor sobre la ciudad", en: "Night view · Living and dining over the city" } },
      { src: "assets/apto-graciela/01.webp", label: { es: "Sala · Muros en concreto y arte en color", en: "Living · Concrete walls and color art" } },
      { src: "assets/apto-graciela/02.webp", label: { es: "Comedor · Tríptico y ventanal a la ciudad", en: "Dining · Triptych and city window" } },
      { src: "assets/apto-graciela/03.webp", label: { es: "Cocina abierta · Madera y barra de apoyo", en: "Open kitchen · Wood and breakfast bar" } },
      { src: "assets/apto-graciela/04.webp", label: { es: "Jardín interior · Piedra, agua y vegetación", en: "Inner garden · Stone, water and greenery" } },
    ],
  },
  {
    id: "lede",
    name: { es: "Lede Gastrobar", en: "Lede Gastrobar" },
    place: { es: "Bogotá", en: "Bogotá" },
    cat: { es: "Arquitectura Comercial · Diseño Interior", en: "Commercial Architecture · Interior Design" },
    year: "2022",
    role: { es: "Arquitectura · Interiorismo · Dirección de obra", en: "Architecture · Interior · Construction" },
    scope: { es: "Gastrobar · Diseño integral e iluminación", en: "Gastrobar · Full design and lighting" },
    tone: "tone-e",
    cover: "assets/lede/portada.webp",
    ph: { es: "Barra · Atmósfera nocturna", en: "Bar · Evening atmosphere" },
    galleryMode: "scroll",
    gallery: [
      { src: "assets/lede/03.webp", label: { es: "Muro luminoso · Acceso a cocina", en: "Light wall · Kitchen access" } },
      { src: "assets/lede/portada.webp", label: { es: "Barra · Atmósfera nocturna", en: "Bar · Evening atmosphere" } },
      { src: "assets/lede/05.webp", label: { es: "Salón · Repisas iluminadas y barra", en: "Hall · Lit shelving and bar" } },
      { src: "assets/lede/02.webp", label: { es: "Plano de techo · Líneas de luz", en: "Ceiling plan · Light lines" } },
      { src: "assets/lede/04.webp", label: { es: "Axonometría · Vista de conjunto", en: "Axonometric · Overall view" } },
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   Reusable bits
   ───────────────────────────────────────────────────────── */

function ImgPlaceholder({ label, tone = "tone-a" }) {
  return (
    <div className={`imgph ${tone}`}>
      <div className="imgph-grain"></div>
      <div className="imgph-corners"></div>
      <div className="imgph-label">[ {label} ]</div>
    </div>
  );
}

/* Real photo for projects — falls back to placeholder if no src. */
function ProjectMedia({ src, tone, label, alt, eager = false }) {
  if (src) {
    const dims = (typeof window !== "undefined" && window.IMG_DIMS && window.IMG_DIMS[src]) || null;
    return (
      <img
        className="pimg-img"
        src={src}
        alt={alt || label || ""}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        {...(dims ? { width: dims[0], height: dims[1] } : {})}
      />
    );
  }
  return <ImgPlaceholder tone={tone} label={label} />;
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    // 1) If already in viewport at mount, reveal next frame (entry animation).
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      requestAnimationFrame(() => el.classList.add("is-in"));
      return;
    }

    // 2) Below-the-fold → IO, with a generous safety-net fallback so
    //    content never stays invisible if IO never fires.
    let safety = setTimeout(() => el.classList.add("is-in"), 1200);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
            clearTimeout(safety);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);
  return ref;
}

function Reveal({ as: As = "div", delay = 0, children, className = "", ...rest }) {
  const ref = useReveal();
  return (
    <As ref={ref} className={`reveal ${className}`} style={{ animationDelay: `${delay}ms` }} {...rest}>
      {children}
    </As>
  );
}

/* ─────────────────────────────────────────────────────────
   Custom cursor
   ───────────────────────────────────────────────────────── */

function CustomCursor({ lang }) {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);
  const stateRef = useRef({ x: 0, y: 0, tx: 0, ty: 0, raf: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.body.classList.add("cursor-active");
    const cursor = cursorRef.current;

    const onMove = (e) => {
      stateRef.current.tx = e.clientX;
      stateRef.current.ty = e.clientY;
      if (!cursor.classList.contains("is-visible")) cursor.classList.add("is-visible");
    };
    const onLeave = () => cursor.classList.remove("is-visible");
    const onEnterMedia = () => {
      cursor.classList.add("is-on-media");
      if (labelRef.current) labelRef.current.textContent = lang === "es" ? "Ver" : "View";
    };
    const onLeaveMedia = () => cursor.classList.remove("is-on-media");

    const tick = () => {
      const s = stateRef.current;
      s.x += (s.tx - s.x) * 0.22;
      s.y += (s.ty - s.y) * 0.22;
      cursor.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, -50%)`;
      s.raf = requestAnimationFrame(tick);
    };
    stateRef.current.raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const mediaEls = document.querySelectorAll("[data-cursor='media']");
    mediaEls.forEach((m) => {
      m.addEventListener("mouseenter", onEnterMedia);
      m.addEventListener("mouseleave", onLeaveMedia);
    });

    return () => {
      cancelAnimationFrame(stateRef.current.raf);
      document.body.classList.remove("cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      mediaEls.forEach((m) => {
        m.removeEventListener("mouseenter", onEnterMedia);
        m.removeEventListener("mouseleave", onLeaveMedia);
      });
    };
  }, [lang]);

  // Re-bind media listeners when DOM changes (grid layout swap)
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const cursor = cursorRef.current;
    const onEnter = () => {
      cursor.classList.add("is-on-media");
      if (labelRef.current) labelRef.current.textContent = lang === "es" ? "Ver" : "View";
    };
    const onLeave = () => cursor.classList.remove("is-on-media");

    const mo = new MutationObserver(() => {
      const els = document.querySelectorAll("[data-cursor='media']");
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, [lang]);

  return (
    <div className="cursor" ref={cursorRef}>
      <span className="cursor-label" ref={labelRef}></span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Nav
   ───────────────────────────────────────────────────────── */

function Nav({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="nav-brand" aria-label={t.nav.brand}>
        <span className="nav-logo" aria-hidden="true"></span>
      </a>
      <div className="nav-links">
        {t.nav.links.map((l) => (
          <a key={l.id} href={`#${l.id}`} className="nav-link">
            {l.label}
          </a>
        ))}
        <span className="lang-toggle" role="group" aria-label="Language">
          <button className={lang === "es" ? "is-active" : ""} onClick={() => setLang("es")}>ES</button>
          <button className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
        </span>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────
   Hero — three layouts
   ───────────────────────────────────────────────────────── */

function HeroBleed({ t }) {
  return (
    <section className="hero hero--bleed" id="top">
      <div className="hero-image" data-cursor="media">
        <ImgPlaceholder
          tone="tone-c"
          label="Interior principal · Espacio premium · Materialidad y luz"
        />
      </div>
      <div className="hero-content">
        <div className="hero-top-row">
          <span className="t-eyebrow">{t.hero.eyebrow}</span>
          <span className="t-eyebrow">{t.hero.place}</span>
        </div>
        <h1 className="hero-title">{t.hero.title.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}</h1>
        <div className="hero-sub">{t.hero.sub}</div>
        <a href="#work" className="hero-cta">
          <span>{t.hero.cta}</span>
          <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}

function HeroSplit({ t }) {
  return (
    <section className="hero hero--split wrap" id="top">
      <div className="hero-text">
        <div>
          <Reveal className="hero-meta-row">
            <span className="t-eyebrow">{t.hero.eyebrow}</span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="hero-title">
              {t.hero.title.split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <div className="hero-sub">{t.hero.sub}</div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 18 }}>
              <span className="hero-place">
                <span className="dot"></span>
                {t.hero.place}
              </span>
            </div>
            <a href="#work" className="hero-cta">
              <span>{t.hero.cta}</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </Reveal>
      </div>
      <Reveal className="hero-image-wrap" delay={120}>
        <div data-cursor="media" style={{ height: "100%" }}>
          <ImgPlaceholder tone="tone-c" label="Interior principal · Espacio premium · Luz · Materialidad" />
        </div>
      </Reveal>
    </section>
  );
}

function HeroSober({ t }) {
  return (
    <section className="hero hero--sober wrap" id="top">
      <Reveal>
        <div className="hero-meta-row">
          <span className="t-eyebrow">{t.hero.eyebrow}</span>
          <span className="t-eyebrow">
            <span className="hero-place">
              <span className="dot"></span>
              {t.hero.place}
            </span>
          </span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="hero-title">
          {t.hero.title.split("\n").map((l, i) => <span key={i}>{l}{i === 0 ? <br /> : null}</span>)}
        </h1>
      </Reveal>
      <Reveal delay={140}>
        <div className="hero-sub" style={{ maxWidth: "32ch" }}>{t.hero.sub}</div>
      </Reveal>
      <Reveal className="hero-image-wrap" delay={180}>
        <div data-cursor="media" style={{ height: "100%" }}>
          <ImgPlaceholder tone="tone-c" label="Interior principal · Espacio premium · Materialidad y luz" />
        </div>
      </Reveal>
      <Reveal className="hero-bottom-row" delay={240}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-mute)" }}>
          ↓ 01 / 04
        </div>
        <a href="#work" className="hero-cta">
          <span>{t.hero.cta}</span>
          <span className="arrow">→</span>
        </a>
      </Reveal>
    </section>
  );
}

function HeroMonogram({ t, lang }) {
  const subItems = Array.isArray(t.hero.sub) ? t.hero.sub : [t.hero.sub];
  const credits = Array.isArray(t.hero.credits)
    ? t.hero.credits.map((c) => (typeof c === "string" ? { text: c } : c))
    : [{ text: t.hero.credits }];
  const cv = t.hero.cv;
  return (
    <section className="hero hero--mono wrap" id="top">
      <Reveal className="hero-mono-top">
        <span className="t-eyebrow">{t.hero.eyebrow}</span>
      </Reveal>
      <Reveal delay={60} className="hero-mono-titlebox">
        <div className="hero-mono-titlebox-l">
          <h1 className="hero-mono-title">
            {t.hero.title.split("\n").map((l, i) => (
              <span key={i} style={{ display: "block" }}>
                {i === 1 ? <em>{l}</em> : l}
              </span>
            ))}
          </h1>
          <div className="hero-mono-credits">
            {credits.map((c, i) => (
              <div key={i} className="hero-mono-credits-line">
                <span>{c.text}</span>
                {c.logo === "usace" && (
                  <img
                    className="hero-mono-credits-logo"
                    src="assets/usace.png"
                    alt="US Army Corps of Engineers"
                    loading="eager"
                    decoding="async"
                    {...(window.IMG_DIMS && window.IMG_DIMS["assets/usace.png"]
                      ? { width: window.IMG_DIMS["assets/usace.png"][0], height: window.IMG_DIMS["assets/usace.png"][1] }
                      : {})}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        {cv && (
          <aside className="hero-mono-cv" aria-label={lang === "es" ? "Perfil profesional" : "Professional profile"}>
            <div className="hero-mono-cv-block">
              <span className="hero-mono-cv-h">{lang === "es" ? "CV" : "CV"}</span>
              <p className="hero-mono-cv-body">{cv.bio}</p>
            </div>
            <div className="hero-mono-cv-block">
              <span className="hero-mono-cv-h">{lang === "es" ? "Intereses profesionales" : "Professional interests"}</span>
              <ul className="hero-mono-cv-list">
                {cv.interests.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </div>
          </aside>
        )}
      </Reveal>
      <Reveal delay={140}>
        <div className="hero-mono-foot">
          <div className="col col-sub">
            <span className="col-h">{lang === "es" ? "Práctica" : "Practice"}</span>
            <p className="col-list">
              {subItems.map((s, i) => <span key={i}>{s}</span>)}
            </p>
          </div>
          <div className="col col-roles">
            <span className="col-h">{lang === "es" ? "Formación" : "Training"}</span>
            <p className="col-list">
              <span>Universidad Nacional de Colombia</span>
              <span>TU Wien</span>
              <span>US Army Corps of Engineers</span>
            </p>
          </div>
          <div className="col col-cta">
            <a href="#work" className="hero-mono-cta-h">
              <span>{t.hero.cta}</span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Hero({ t, layout, lang }) {
  if (layout === "mono") return <HeroMonogram t={t} lang={lang} />;
  if (layout === "bleed") return <HeroBleed t={t} />;
  if (layout === "sober") return <HeroSober t={t} />;
  return <HeroSplit t={t} />;
}

/* ─────────────────────────────────────────────────────────
   Statement
   ───────────────────────────────────────────────────────── */

function Statement({ t }) {
  return (
    <section className="statement wrap" id="about">
      <div className="statement-grid">
        <Reveal>
          <div className="t-eyebrow">{t.statement.eyebrow}</div>
        </Reveal>
        <Reveal delay={80}>
          <div>
            <p className="statement-body">{t.statement.body}</p>
            <div className="creds">
              {t.statement.creds.map((c, i) => (
                <span key={i} className="creds-item">{c}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Projects bento
   ───────────────────────────────────────────────────────── */

function ProjectCard({ p, lang, index, onOpen }) {
  return (
    <article
      className="card"
      data-cursor="media"
      tabIndex={0}
      role="button"
      onClick={() => onOpen && onOpen(index)}
      onKeyDown={(e) => { if (e.key === "Enter") onOpen && onOpen(index); }}
    >
      <div className="card-index">{String(index + 1).padStart(2, "0")}</div>
      <div className="card-media">
        <ProjectMedia src={p.cover} tone={p.tone} label={p.ph[lang]} alt={p.name[lang]} />
      </div>
      <div className="card-overlay">
        <div className="card-meta">
          <span className="card-cat">{p.cat[lang]} · {p.place[lang]}</span>
          <span className="card-name">{p.name[lang]}</span>
        </div>
      </div>
    </article>
  );
}

function ProjectsIndex({ t, lang, onOpen }) {
  const [active, setActive] = useState(0);
  const total = PROJECTS.length;
  return (
    <section className="projects wrap" id="work">
      <Reveal className="projects-head">
        <div>
          <div className="t-eyebrow" style={{ marginBottom: 18 }}>{t.projects.eyebrow}</div>
          <h2 className="t-h2">
            {t.projects.title(PROJECTS.length).split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
          </h2>
        </div>
        <div className="count">{t.projects.count(total)}</div>
      </Reveal>
      <Reveal delay={80}>
        <div className="pidx">
          <div className="pidx-list">
            {PROJECTS.map((p, i) => (
              <article
                key={p.id}
                className={`pidx-row ${i === active ? "is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => onOpen && onOpen(i)}
                tabIndex={0}
                role="button"
              >
                <span className="pidx-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="pidx-name">{p.name[lang]}</h3>
                <span className="pidx-cat">{p.cat[lang]} · {p.place[lang]}</span>
                <span className="pidx-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <aside className="pidx-preview" aria-live="polite">
            <div
              className="pidx-preview-stage"
              data-cursor="media"
              onClick={() => onOpen && onOpen(active)}
              role="button"
              tabIndex={0}
            >
              {PROJECTS.map((p, i) => (
                <div key={p.id} className={`pidx-slide ${i === active ? "is-on" : ""}`}>
                  <ProjectMedia src={p.cover} tone={p.tone} label={p.ph[lang]} alt={p.name[lang]} />
                </div>
              ))}
            </div>
            <div className="pidx-preview-meta">
              <span className="pidx-pname">{PROJECTS[active].name[lang]} — {PROJECTS[active].cat[lang]}</span>
              <span className="pidx-pcount">{String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
            </div>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}

function ProjectsBento({ t, lang, gridVariant, onOpen }) {
  const cls = gridVariant === "mosaic" ? "grid--mosaic" : gridVariant === "calm" ? "grid--calm" : "grid--asym";
  return (
    <section className="projects wrap" id="work">
      <Reveal className="projects-head">
        <div>
          <div className="t-eyebrow" style={{ marginBottom: 18 }}>{t.projects.eyebrow}</div>
          <h2 className="t-h2">
            {t.projects.title(PROJECTS.length).split("\n").map((l, i) => <span key={i}>{l}<br /></span>)}
          </h2>
        </div>
        <div className="count">{t.projects.count(PROJECTS.length)}</div>
      </Reveal>
      <Reveal delay={80}>
        <div className={cls}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} lang={lang} index={i} onOpen={onOpen} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Footer / Contact
   ───────────────────────────────────────────────────────── */

function GalleryScroll({ p, lang, t }) {
  const stripRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateCan = () => {
    const el = stripRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    updateCan();
    el.addEventListener("scroll", updateCan, { passive: true });
    window.addEventListener("resize", updateCan);
    return () => {
      el.removeEventListener("scroll", updateCan);
      window.removeEventListener("resize", updateCan);
    };
  }, []);

  const scrollBy = (dir) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * dir, behavior: "smooth" });
  };

  return (
    <section className="pdetail-gallery wrap pdetail-gallery--scroll-wrap">
      <div className="pdetail-gallery-head">
        <span className="t-eyebrow">{t.detail.gallery}</span>
        <span className="t-eyebrow" style={{ color: "var(--ink-mute)" }}>
          {t.detail.photos((p.gallery || []).length)}
        </span>
      </div>
      <div className="pdetail-strip-wrap">
        <button
          type="button"
          className="pdetail-arrow pdetail-arrow--prev"
          aria-label={t.detail.prev}
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          className="pdetail-arrow pdetail-arrow--next"
          aria-label={t.detail.next}
          onClick={() => scrollBy(1)}
          disabled={!canNext}
        >
          <span aria-hidden="true">→</span>
        </button>
        <div className="pdetail-grid pdetail-grid--scroll" ref={stripRef}>
          {(p.gallery || []).map((g, i) => (
            <figure
              key={i}
              className="pdetail-figure"
              data-cursor="media"
              style={{ "--asp": (g.aspect || "4/5").replace("/", " / ") }}
            >
              <ProjectMedia src={g.src} tone={g.tone} label={g.label[lang]} alt={g.label[lang]} />
              <figcaption>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{g.label[lang]}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDetail({ indexOpen, onClose, onNav, lang, t }) {
  const open = indexOpen != null;
  const total = PROJECTS.length;
  const p = open ? PROJECTS[indexOpen] : null;
  const stageRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNav((indexOpen + 1) % total);
      else if (e.key === "ArrowLeft") onNav((indexOpen - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    if (stageRef.current) stageRef.current.scrollTop = 0;
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [indexOpen, open, onClose, onNav, total]);

  if (!open) return null;

  const next = PROJECTS[(indexOpen + 1) % total];
  const prev = PROJECTS[(indexOpen - 1 + total) % total];

  return (
    <div className="pdetail" role="dialog" aria-modal="true" aria-label={p.name[lang]}>
      <div className="pdetail-stage" ref={stageRef}>
        <header className="pdetail-bar">
          <button className="pdetail-back" onClick={onClose}>
            {t.detail.back}
          </button>
          <span className="pdetail-count">
            {String(indexOpen + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button className="pdetail-close" onClick={onClose} aria-label={t.detail.close}>
            <span className="pdetail-close-x" aria-hidden="true">×</span>
            <span className="pdetail-close-l">{t.detail.close}</span>
          </button>
        </header>

        <section className="pdetail-head wrap">
          <div className="pdetail-head-l">
            <div className="t-eyebrow">{p.cat[lang]}</div>
            <h1 className="pdetail-title">{p.name[lang]}</h1>
          </div>
          <dl className="pdetail-meta">
            <div><dt>{t.detail.place}</dt><dd>{p.place[lang]}</dd></div>
            <div><dt>{t.detail.year}</dt><dd>{p.year}</dd></div>
            <div><dt>{t.detail.role}</dt><dd>{p.role[lang]}</dd></div>
            <div><dt>{t.detail.scope}</dt><dd>{p.scope[lang]}</dd></div>
          </dl>
        </section>

        <section className="pdetail-hero wrap">
          <div className="pdetail-hero-img" data-cursor="media">
            <ProjectMedia src={p.cover} tone={p.tone} label={p.ph[lang]} alt={p.name[lang]} />
          </div>
        </section>

        {p.galleryMode === "scroll" ? (
          <GalleryScroll p={p} lang={lang} t={t} />
        ) : (
          <section className="pdetail-gallery wrap">
            <div className="pdetail-gallery-head">
              <span className="t-eyebrow">{t.detail.gallery}</span>
              <span className="t-eyebrow" style={{ color: "var(--ink-mute)" }}>
                {t.detail.photos((p.gallery || []).length)}
              </span>
            </div>
            <div className="pdetail-grid">
              {(p.gallery || []).map((g, i) => (
                <figure
                  key={i}
                  className="pdetail-figure"
                  data-cursor="media"
                  style={{ "--asp": (g.aspect || "4/5").replace("/", " / ") }}
                >
                  <ProjectMedia src={g.src} tone={g.tone} label={g.label[lang]} alt={g.label[lang]} />
                  <figcaption>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span>{g.label[lang]}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <nav className="pdetail-nav wrap">
          <button
            className="pdetail-nav-btn pdetail-nav-prev"
            onClick={() => onNav((indexOpen - 1 + total) % total)}
          >
            <span className="pdetail-nav-arrow">←</span>
            <span className="pdetail-nav-l">
              <span className="pdetail-nav-eb">{t.detail.prev}</span>
              <span className="pdetail-nav-name">{prev.name[lang]}</span>
            </span>
          </button>
          <button
            className="pdetail-nav-btn pdetail-nav-next"
            onClick={() => onNav((indexOpen + 1) % total)}
          >
            <span className="pdetail-nav-l" style={{ textAlign: "right" }}>
              <span className="pdetail-nav-eb">{t.detail.next}</span>
              <span className="pdetail-nav-name">{next.name[lang]}</span>
            </span>
            <span className="pdetail-nav-arrow">→</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

function Foot({ t, lang }) {
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const waUrl = `https://wa.me/${t.foot.phoneRaw}?text=${encodeURIComponent(lang === "es" ? "Hola Mario, me interesa conversar sobre un proyecto." : "Hi Mario, I'd like to talk about a project.")}`;

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    const subject = (form.subject || t.foot.form.defaultSubject).trim();
    const body = [
      form.message,
      "",
      "—",
      `${t.foot.form.name}: ${form.name}`,
      `${t.foot.form.emailField}: ${form.email}`,
    ].join("\n");
    const mailto = `mailto:${t.foot.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => setSending(false), 1500);
  };

  return (
    <footer className="foot wrap" id="contact">
      <div className="foot-grid foot-grid--v2">
        <Reveal className="foot-main">
          <div className="t-eyebrow" style={{ marginBottom: 32 }}>{t.foot.eyebrow}</div>
          <h2 className="foot-title">
            {t.foot.title[0]}<br />
            <em>{t.foot.title[1]}</em><br />
            {t.foot.title[2]}
          </h2>
          <p className="foot-sub">{t.foot.subtitle}</p>
          <div className="foot-ctas">
            <a
              className="foot-btn foot-btn--primary"
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.foot.ctaWhatsApp} — ${t.foot.phone}`}
            >
              <svg className="foot-btn-ic" viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
                <path fill="currentColor" d="M19.05 4.91A10 10 0 0 0 12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.16-1.35A10 10 0 0 0 22.04 12c0-2.67-1.04-5.18-2.99-7.09Zm-7.01 15.36c-1.6 0-3.16-.43-4.53-1.25l-.32-.19-3.06.8.82-2.98-.21-.34a8.27 8.27 0 0 1-1.26-4.4c0-4.56 3.7-8.27 8.26-8.27 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.84c0 4.55-3.7 8.26-8.25 8.26Zm4.52-6.18c-.25-.12-1.47-.72-1.7-.8-.22-.08-.39-.13-.55.13-.16.25-.62.8-.77.96-.14.16-.28.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.28.37-.42.13-.14.16-.24.25-.41.08-.16.04-.31-.02-.43-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.41-.55-.42-.14-.01-.31-.01-.47-.01a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.57.12.16 1.76 2.68 4.27 3.76.6.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.59.21-1.08.15-1.19-.06-.11-.22-.17-.47-.29Z"/>
              </svg>
              <span>{t.foot.ctaWhatsApp}</span>
              <span className="foot-btn-arrow" aria-hidden="true">→</span>
            </a>
            <button
              type="button"
              className={`foot-btn foot-btn--secondary ${formOpen ? "is-open" : ""}`}
              onClick={() => setFormOpen((v) => !v)}
              aria-expanded={formOpen}
              aria-controls="foot-form"
            >
              <svg className="foot-btn-ic" viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
                <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3.5 6.5h17v11h-17z M3.5 6.8l8.5 6 8.5-6"/>
              </svg>
              <span>{formOpen ? t.foot.ctaEmailClose : t.foot.ctaEmail}</span>
              <span className="foot-btn-arrow" aria-hidden="true">{formOpen ? "↑" : "→"}</span>
            </button>
          </div>

          {formOpen && (
            <form
              id="foot-form"
              className="foot-form"
              onSubmit={onSubmit}
              aria-label={t.foot.form.title}
            >
              <div className="foot-form-head">
                <span className="t-eyebrow">{t.foot.form.title}</span>
              </div>
              <div className="foot-form-grid">
                <label className="foot-field">
                  <span className="foot-field-l">{t.foot.form.name}</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={update("name")}
                  />
                </label>
                <label className="foot-field">
                  <span className="foot-field-l">{t.foot.form.emailField}</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                  />
                </label>
                <label className="foot-field foot-field--full">
                  <span className="foot-field-l">{t.foot.form.subject}</span>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder={t.foot.form.defaultSubject}
                  />
                </label>
                <label className="foot-field foot-field--full">
                  <span className="foot-field-l">{t.foot.form.message}</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={update("message")}
                  />
                </label>
              </div>
              <div className="foot-form-actions">
                <button type="submit" className="foot-btn foot-btn--primary" disabled={sending}>
                  <span>{sending ? t.foot.form.opening : t.foot.form.send}</span>
                  <span className="foot-btn-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          )}
        </Reveal>
        <Reveal className="foot-info" delay={80}>
          <div className="foot-col">
            <h4>{t.foot.colDirect}</h4>
            <ul>
              <li><a href={`mailto:${t.foot.email}`}>{t.foot.email}</a></li>
              <li><a href={`tel:+${t.foot.phoneRaw}`}>{t.foot.phone}</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>{t.foot.colLocate}</h4>
            <ul>
              {t.foot.locate.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
      <div className="foot-base">
        <span>{t.foot.base[0]}</span>
        <span>{t.foot.base[1]}</span>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────
   Typography pair application
   ───────────────────────────────────────────────────────── */

const TYPE_PAIRS = {
  poppins: {
    display: '"Poppins", "Montserrat", "Helvetica Neue", Arial, sans-serif',
    sans:    '"Poppins", "Montserrat", "Helvetica Neue", Arial, sans-serif',
    weight: 300,
    feat: 'normal',
    label: "Poppins Light",
  },
  montserrat: {
    display: '"Montserrat", "Poppins", "Helvetica Neue", Arial, sans-serif',
    sans:    '"Montserrat", "Poppins", "Helvetica Neue", Arial, sans-serif',
    weight: 300,
    feat: 'normal',
    label: "Montserrat Light",
  },
  fraunces: {
    display: '"Fraunces", "Times New Roman", serif',
    sans:    '"Poppins", "Helvetica Neue", Arial, sans-serif',
    weight: 300,
    feat: '"opsz" 120, "SOFT" 100, "WONK" 0',
    label: "Fraunces · Poppins",
  },
};

function applyTypePair(key) {
  const p = TYPE_PAIRS[key] || TYPE_PAIRS.poppins;
  const root = document.documentElement.style;
  root.setProperty("--display", p.display);
  root.setProperty("--sans", p.sans);
  root.setProperty("--mono", p.sans);
  root.setProperty("--display-weight", String(p.weight));
  root.setProperty("--display-feat", p.feat);
  root.setProperty("--serif", p.display);
  root.setProperty("--serif-feat", p.feat);
}

const ACCENTS = {
  airforce: "#4D7C8A",
  yale: "#1B4079",
  cambridge: "#7F9C96",
  sage: "#8FAD88",
};
function applyAccent(key) {
  const c = ACCENTS[key] || ACCENTS.airforce;
  document.documentElement.style.setProperty("--accent", c);
}

function applyDensity(d) {
  document.documentElement.style.setProperty("--density", String(d));
}

function Projects({ t, lang, gridVariant, layout, onOpen }) {
  if (layout === "bento") return <ProjectsBento t={t} lang={lang} gridVariant={gridVariant} onOpen={onOpen} />;
  return <ProjectsIndex t={t} lang={lang} onOpen={onOpen} />;
}

Object.assign(window, {
  CONTENT, PROJECTS, TYPE_PAIRS, ACCENTS,
  applyTypePair, applyAccent, applyDensity,
  ImgPlaceholder, Reveal, useReveal,
  CustomCursor, Nav, Hero, Statement, Projects, ProjectDetail, Foot,
});
