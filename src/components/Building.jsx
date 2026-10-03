import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================================
// BUILDING DATA
// ============================================================

const buildingData = [
  {
    id: "01",
    name: "HELIOS INTELLIGENCE",
    shortName: "HELIOS",
    category: "CYBERSECURITY • INTELLIGENCE",
    type: "CORE ECOSYSTEM",
    status: "ACTIVE",
    description:
      "The cybersecurity and intelligence core of the HELIOS ecosystem. Designed as a multi-domain technology architecture spanning cybersecurity operations, digital forensics, cyber intelligence, security research, AI security, and defensive infrastructure.",
    domains: [
      "Cybersecurity",
      "Digital Forensics",
      "Cyber Intelligence",
      "Security Research",
      "AI / ML Security",
      "Security Engineering"
    ],
    accent: "CORE",
  },

  {
    id: "02",
    name: "NEUROBRIDGE",
    shortName: "NEUROBRIDGE",
    category: "INTELLIGENCE • DATA INTEGRATION",
    type: "PLATFORM",
    status: "BUILDING",
    description:
      "A cross-domain intelligence integration platform designed to connect disparate data sources, intelligence systems, and analytical frameworks into a unified operational picture.",
    domains: [
      "Data Integration",
      "Intelligence Fusion",
      "Analytical Workflows",
      "Operational Intelligence",
      "Investigation Support"
    ],
    accent: "INTEL",
  },

  {
    id: "03",
    name: "NEUROMAP",
    shortName: "NEUROMAP",
    category: "OSINT • ENTITY INTELLIGENCE",
    type: "INTELLIGENCE PLATFORM",
    status: "BUILDING",
    description:
      "An advanced OSINT and entity relationship mapping system designed for cyber intelligence operations, automated intelligence collection, entity visualization, and digital network mapping.",
    domains: [
      "OSINT",
      "Entity Mapping",
      "Threat Intelligence",
      "Graph Analysis",
      "React / Vite",
      "FastAPI",
      "Cytoscape.js"
    ],
    accent: "GRAPH",
  },

  {
    id: "04",
    name: "PHANTOM EYE",
    shortName: "PHANTOM-EYE",
    category: "OFFENSIVE SECURITY • AUTOMATION",
    type: "SECURITY FRAMEWORK",
    status: "BUILDING",
    description:
      "An AI-assisted penetration testing and security assessment framework integrating reconnaissance, scanning, enumeration, and security-testing workflows into a unified automated framework.",
    domains: [
      "Reconnaissance",
      "Vulnerability Assessment",
      "Security Testing",
      "Automation",
      "Python",
      "Offensive Security"
    ],
    accent: "OFFSEC",
  },

  {
    id: "05",
    name: "NOCTALON",
    shortName: "NOCTALON",
    category: "THREAT INTELLIGENCE • MONITORING",
    type: "SECURITY PLATFORM",
    status: "RESEARCH",
    description:
      "A next-generation security intelligence and monitoring platform designed for continuous threat surveillance, environmental visibility, and alerting around emerging security risks.",
    domains: [
      "Threat Monitoring",
      "Threat Intelligence",
      "Continuous Surveillance",
      "Security Alerts",
      "Risk Visibility"
    ],
    accent: "WATCH",
  },

  {
    id: "06",
    name: "HELIOS ACADEMY",
    shortName: "ACADEMY",
    category: "CYBERSECURITY • EDUCATION",
    type: "EDUCATION PLATFORM",
    status: "BUILDING",
    description:
      "The digital learning environment supporting HELIOS Academy's cybersecurity education ecosystem through structured cohorts, practical laboratories, assessments, simulations, and professional development.",
    domains: [
      "Cybersecurity Education",
      "Cohort Learning",
      "Simulation Labs",
      "Assessments",
      "Professional Development",
      "Curriculum Management"
    ],
    accent: "EDU",
  },
];


// ============================================================
// BUILDING COMPONENT
// ============================================================

const Building = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const lineRef = useRef(null);
  const coreRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ======================================================
      // INITIAL STATES
      // ======================================================

      gsap.set(headerRef.current, {
        opacity: 0,
        y: 60,
        filter: "blur(10px)",
      });

      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.94,
        filter: "blur(8px)",
      });

      gsap.set(coreRef.current, {
        opacity: 0,
        scale: 0.7,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "center",
      });


      // ======================================================
      // MAIN SCROLL ANIMATION
      // ======================================================

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power4.out",
      })

      .to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.5"
      )

      .to(
        coreRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "-=0.4"
      )

      .to(
        cardsRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.4"
      );


      // ======================================================
      // CARD HOVER PHYSICS
      // ======================================================

      cardsRef.current.forEach((card) => {

        if (!card) return;

        const glow = card.querySelector(".building-glow");

        const handleEnter = () => {

          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.35,
            ease: "power3.out",
          });

          if (glow) {
            gsap.to(glow, {
              opacity: 1,
              scale: 1.15,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        };

        const handleLeave = () => {

          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
          });

          if (glow) {
            gsap.to(glow, {
              opacity: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        };

        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);

        card._buildingEnter = handleEnter;
        card._buildingLeave = handleLeave;
      });

    }, sectionRef);

    return () => {

      cardsRef.current.forEach((card) => {

        if (!card) return;

        card.removeEventListener(
          "mouseenter",
          card._buildingEnter
        );

        card.removeEventListener(
          "mouseleave",
          card._buildingLeave
        );

      });

      ctx.revert();

    };

  }, []);


  return (

    <section
      id="building"
      ref={sectionRef}
      className="
        relative
        w-full
        min-h-screen
        bg-[#080808]
        text-white
        overflow-hidden
        py-28
        md:py-40
        px-5
        md:px-10
      "
    >

      {/* ====================================================
          BACKGROUND
      ==================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
        "
      >

        {/* Huge BUILDING text */}

        <div
          className="
            absolute
            top-10
            left-1/2
            -translate-x-1/2
            text-[22vw]
            md:text-[18vw]
            font-black
            tracking-tighter
            leading-none
            text-white/[0.025]
            whitespace-nowrap
            select-none
          "
        >
          BUILDING
        </div>


        {/* Red ambient glow */}

        <div
          className="
            absolute
            top-[35%]
            left-1/2
            -translate-x-1/2
            w-[55vw]
            h-[55vw]
            rounded-full
            bg-red-600/[0.08]
            blur-[150px]
          "
        />


        {/* Secondary glow */}

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[30vw]
            h-[30vw]
            rounded-full
            bg-red-900/[0.08]
            blur-[130px]
          "
        />

      </div>


      {/* ====================================================
          MAIN CONTAINER
      ==================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">


        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          ref={headerRef}
          className="
            max-w-4xl
            mx-auto
            text-center
            mb-20
            md:mb-28
          "
        >

          {/* Eyebrow */}

          <div
            className="
              inline-flex
              items-center
              gap-3
              mb-6
              px-4
              py-2
              rounded-full
              border
              border-red-600/30
              bg-red-600/[0.06]
              font-mono
              text-[10px]
              md:text-xs
              tracking-[0.25em]
              uppercase
              text-red-500
            "
          >

            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-red-600
                shadow-[0_0_12px_#E50914]
              "
            />

            CURRENTLY BUILDING

          </div>


          {/* Title */}

          <h2
            className="
              text-5xl
              sm:text-6xl
              md:text-8xl
              font-black
              tracking-tighter
              uppercase
              leading-[0.85]
            "
          >

            BUILDING

          </h2>


          {/* Subtitle */}

          <p
            className="
              mt-8
              text-sm
              md:text-base
              text-white/55
              font-light
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >

            Beyond the projects already completed, these are the systems,
            platforms, research environments, and technological ideas
            currently being developed as part of the HELIOS ecosystem.

          </p>


          {/* Philosophy */}

          <div
            className="
              mt-8
              font-mono
              text-[10px]
              md:text-xs
              tracking-[0.18em]
              uppercase
              text-white/30
            "
          >

            BUILD → TEST → INVESTIGATE → RESEARCH → ENGINEER → ADVANCE

          </div>

        </div>


        {/* ==================================================
            CORE ARCHITECTURE
        ================================================== */}

        <div className="relative mb-24 md:mb-32">


          {/* Connecting line */}

          <div
            ref={lineRef}
            className="
              absolute
              hidden
              md:block
              top-1/2
              left-[8%]
              right-[8%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-red-600/50
              to-transparent
            "
          />


          {/* HELIOS CORE */}

          <div
            ref={coreRef}
            className="
              relative
              mx-auto
              w-32
              h-32
              md:w-40
              md:h-40
              rounded-full
              border
              border-red-600/40
              bg-[#0d0d0d]
              flex
              items-center
              justify-center
              shadow-[0_0_60px_rgba(229,9,20,0.15)]
            "
          >

            {/* Outer ring */}

            <div
              className="
                absolute
                inset-[-12px]
                rounded-full
                border
                border-red-600/10
              "
            />

            {/* Inner ring */}

            <div
              className="
                absolute
                inset-[-4px]
                rounded-full
                border
                border-red-600/20
              "
            />

            <div className="text-center">

              <div
                className="
                  text-red-500
                  font-black
                  tracking-[0.2em]
                  text-sm
                  md:text-base
                "
              >
                HELIOS
              </div>

              <div
                className="
                  mt-1
                  text-[8px]
                  font-mono
                  tracking-widest
                  text-white/40
                  uppercase
                "
              >
                CORE
              </div>

            </div>

          </div>

        </div>


        {/* ==================================================
            SYSTEM GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-5
            md:gap-6
          "
        >

          {buildingData.map((item, index) => (

            <article
              key={item.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="
                relative
                group
                min-h-[390px]
                rounded-[24px]
                overflow-hidden
                border
                border-white/10
                bg-[#101010]/90
                backdrop-blur-xl
                p-6
                md:p-7
                flex
                flex-col
                justify-between
                shadow-[0_25px_60px_rgba(0,0,0,0.45)]
                will-change-transform
              "
            >

              {/* =================================================
                  CARD GLOW
              ================================================= */}

              <div
                className="
                  building-glow
                  absolute
                  -top-20
                  -right-20
                  w-56
                  h-56
                  rounded-full
                  bg-red-600/10
                  blur-[70px]
                  opacity-0
                  pointer-events-none
                "
              />


              {/* =================================================
                  TOP METADATA
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-between
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <span
                    className="
                      text-[10px]
                      font-mono
                      text-red-500
                      border
                      border-red-600/20
                      bg-red-600/10
                      px-2
                      py-1
                      rounded
                    "
                  >
                    {item.id}
                  </span>

                  <span
                    className="
                      text-[9px]
                      font-mono
                      tracking-widest
                      text-white/35
                      uppercase
                    "
                  >
                    {item.type}
                  </span>

                </div>


                <span
                  className={`
                    text-[9px]
                    font-mono
                    font-bold
                    tracking-widest
                    uppercase
                    px-2
                    py-1
                    rounded
                    border
                    ${
                      item.status === "ACTIVE"
                        ? "text-green-400 border-green-500/20 bg-green-500/5"
                        : item.status === "RESEARCH"
                        ? "text-yellow-400 border-yellow-500/20 bg-yellow-500/5"
                        : "text-red-400 border-red-500/20 bg-red-500/5"
                    }
                  `}
                >
                  {item.status}
                </span>

              </div>


              {/* =================================================
                  MAIN CONTENT
              ================================================= */}

              <div className="relative z-10 my-8">

                {/* Category */}

                <div
                  className="
                    text-[9px]
                    md:text-[10px]
                    font-mono
                    tracking-[0.15em]
                    uppercase
                    text-red-500/80
                    mb-3
                  "
                >
                  {item.category}
                </div>


                {/* Project name */}

                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-black
                    tracking-tighter
                    leading-none
                    uppercase
                    group-hover:text-red-500
                    transition-colors
                    duration-300
                  "
                >
                  {item.name}
                </h3>


                {/* Description */}

                <p
                  className="
                    mt-5
                    text-xs
                    md:text-sm
                    leading-relaxed
                    text-white/55
                    font-light
                  "
                >
                  {item.description}
                </p>

              </div>


              {/* =================================================
                  DOMAIN TAGS
              ================================================= */}

              <div className="relative z-10">

                <div
                  className="
                    pt-4
                    border-t
                    border-white/10
                  "
                >

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-1.5
                    "
                  >

                    {item.domains.map((domain, domainIndex) => (

                      <span
                        key={domainIndex}
                        className="
                          text-[9px]
                          font-mono
                          text-white/45
                          bg-white/[0.04]
                          border
                          border-white/[0.06]
                          px-2
                          py-1
                          rounded
                          group-hover:border-red-600/20
                          group-hover:text-white/60
                          transition-colors
                          duration-300
                        "
                      >
                        {domain}
                      </span>

                    ))}

                  </div>

                </div>


                {/* =================================================
                    BOTTOM STATUS
                ================================================= */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-[9px]
                      font-mono
                      tracking-widest
                      uppercase
                      text-white/25
                    "
                  >
                    SYSTEM_{item.accent}
                  </span>


                  <span
                    className="
                      text-red-500
                      text-sm
                      group-hover:translate-x-1
                      transition-transform
                      duration-300
                    "
                  >
                    →
                  </span>

                </div>

              </div>


              {/* =================================================
                  CORNER ACCENT
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-red-600
                  shadow-[0_0_12px_rgba(229,9,20,0.7)]
                "
              />

            </article>

          ))}

        </div>


        {/* ==================================================
            BOTTOM PHILOSOPHY
        ================================================== */}

        <div
          className="
            mt-24
            md:mt-32
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-5
          "
        >

          <div>

            <div
              className="
                text-[9px]
                font-mono
                tracking-widest
                uppercase
                text-red-500
                mb-2
              "
            >
              BUILD STATUS
            </div>

            <p
              className="
                text-xs
                md:text-sm
                text-white/45
                max-w-xl
              "
            >
              These systems represent an evolving technology ecosystem.
              Some are operational, some are under active development,
              and others remain in research and architectural stages.
            </p>

          </div>


          <div
            className="
              font-mono
              text-[9px]
              tracking-widest
              uppercase
              text-white/25
              text-left
              md:text-right
            "
          >

            <div>HELIOS // BUILD PROGRAM</div>

            <div className="mt-1">
              SYSTEMS IN DEVELOPMENT: {buildingData.length}
            </div>

          </div>

        </div>


        {/* ==================================================
            FINAL STATEMENT
        ================================================== */}

        <div
          className="
            mt-20
            md:mt-28
            text-center
          "
        >

          <p
            className="
              text-2xl
              md:text-4xl
              font-black
              tracking-tight
              text-white/90
            "
          >
            I DON'T JUST DOCUMENT TECHNOLOGY.
          </p>

          <p
            className="
              mt-2
              text-2xl
              md:text-4xl
              font-black
              tracking-tight
              text-red-500
            "
          >
            I BUILD IT.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Building;
