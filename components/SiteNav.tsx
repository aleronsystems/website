'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

/**
 * SiteNav: shared site navigation header for Aleron Systems.
 *
 * Single source of truth for the nav across all pages. Each page renders:
 *
 *     <SiteNav active="services" />
 *
 * The `active` prop highlights the current page link in teal. The Government
 * link is always teal regardless of active state, since it is a brand-level
 * visual anchor.
 *
 * Architecture notes:
 *
 * 1. CSS is co-located inside this component as a <style> block, matching
 *    the styling pattern already used across the rest of the site. No global
 *    CSS is touched.
 *
 * 2. The mobile menu panel uses `position: absolute` anchored to the nav
 *    container, not `position: fixed` to the viewport. This eliminates the
 *    detached-during-scroll behavior the old implementation had.
 *
 * 3. Mobile nav heights and logo widths were reduced one step from the
 *    previous values for a tighter, more premium mobile header feel.
 *
 *    Previous → Current
 *      ≤768px: 100px → 80px height,  313px → 240px logo
 *      ≤420px:  88px → 64px height,  270px → 200px logo
 */

type NavKey = 'services' | 'about' | 'government' | 'contact';

type SiteNavProps = {
  /**
   * Which page this nav is rendered on. Used to highlight the active link.
   * Omit on the homepage (no nav link points to /).
   */
  active?: NavKey;
};

export default function SiteNav({ active }: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Resolves the className for each desktop nav link. The Government link
  // always uses `.gov` (permanent teal). The active page uses `.active`.
  const linkClass = (key: NavKey): string => {
    const classes: string[] = [];
    if (key === 'government') classes.push('gov');
    if (active === key && key !== 'government') classes.push('active');
    return classes.join(' ');
  };

  const close = () => setMenuOpen(false);

  return (
    <>
    <motion.header
      className="sn-nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="sn-inner">
        <a href="/" className="sn-logo" onClick={close} aria-label="Aleron Systems home">
          <img
            src="/logos/navbar-logo-dark.png"
            alt="Aleron Systems"
            className="sn-logo-img"
          />
        </a>

        <nav aria-label="Primary">
          <ul className="sn-links">
            <li>
              <a href="/services" className={linkClass('services')}>Services</a>
            </li>
            <li>
              <a href="/about" className={linkClass('about')}>About</a>
            </li>
            <li>
              <a href="/government" className={linkClass('government')}>Government</a>
            </li>
            <li>
              <a href="/contact" className="sn-contact">
                Contact <ArrowRight size={12} />
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="sn-trigger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="sn-mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="sn-mobile-menu"
              className="sn-mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ul className="sn-mobile-list">
                <li>
                  <a
                    href="/services"
                    className={active === 'services' ? 'active' : ''}
                    onClick={close}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className={active === 'about' ? 'active' : ''}
                    onClick={close}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a href="/government" className="gov" onClick={close}>
                    Government
                  </a>
                </li>
                <li>
                  <a href="/contact" className="cta" onClick={close}>
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        /* ── NAV CONTAINER ──
           Uses position: fixed (not sticky) because sticky depends on every
           ancestor having overflow: visible and no transformed/contained
           containing blocks. fixed is anchored to the viewport directly and
           has zero ancestor dependencies, so it cannot silently break.
           A height-matched spacer below pushes page content down so it does
           not render underneath the fixed nav. */
        .sn-nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 50;
          width: 100%;
          border-bottom: 1px solid rgba(255,255,255,.08);
          background: rgba(2,8,23,.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        /* Spacer reserves vertical room equal to the nav height at each
           breakpoint, so page content starts below the fixed nav rather
           than under it. Heights add a small buffer at mobile breakpoints
           to absorb the 1px border-bottom on .sn-nav and sub-pixel
           rounding inconsistencies in iOS Safari. */
        .sn-spacer {
          height: 132px;
        }
        @media (max-width: 768px) { .sn-spacer { height: 84px; } }
        @media (max-width: 420px) { .sn-spacer { height: 68px; } }
        .sn-inner {
          position: relative; /* anchor for mobile menu panel */
          max-width: 1280px;
          height: 132px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sn-logo {
          display: flex; align-items: center;
          flex-shrink: 0; line-height: 0;
        }
        .sn-logo-img {
          width: 447px;
          height: auto;
          display: block;
          max-width: 60vw;
        }

        /* Mobile sizing: reduced one step from previous values for tighter
           premium feel. */
        @media (max-width: 768px) {
          .sn-inner { height: 80px; padding: 0 20px; }
          .sn-logo-img { width: 240px; }
        }
        @media (max-width: 420px) {
          .sn-inner { height: 64px; }
          .sn-logo-img { width: 200px; }
        }

        /* ── DESKTOP LINKS ── */
        .sn-links {
          display: flex; gap: 32px; align-items: center;
          list-style: none; margin: 0; padding: 0;
        }
        .sn-links a {
          color: var(--text-2, #8899b0);
          text-decoration: none;
          font-size: 13px; font-weight: 500; letter-spacing: .04em;
          transition: color .18s;
        }
        .sn-links a:hover { color: var(--text-1, #edf2ff); }
        .sn-links a.gov { color: var(--teal, #5eead4); }
        .sn-links a.active { color: var(--teal, #5eead4); }

        .sn-contact {
          padding: 9px 18px; border-radius: 6px;
          border: 1px solid var(--border, rgba(255,255,255,.07));
          color: var(--text-1, #edf2ff); background: transparent;
          font-size: 13px; font-weight: 500;
          text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px;
          white-space: nowrap;
          transition: border-color .18s, background .18s;
        }
        .sn-contact:hover {
          border-color: rgba(94,234,212,.3);
          background: rgba(94,234,212,.05);
        }

        /* ── MOBILE TRIGGER ── */
        .sn-trigger {
          display: none;
          background: transparent;
          border: 1px solid var(--border, rgba(255,255,255,.07));
          border-radius: 6px;
          padding: 8px;
          color: var(--text-1, #edf2ff);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: border-color .18s, background .18s;
        }
        .sn-trigger:hover { border-color: rgba(94,234,212,.3); }
        .sn-trigger:focus-visible {
          outline: 2px solid var(--teal, #5eead4);
          outline-offset: 2px;
        }

        /* ── MOBILE PANEL ──
           Anchored to .sn-inner (position: absolute) instead of the viewport
           (position: fixed). This is the fix for the detached-during-scroll
           behavior. The panel now travels with the sticky nav as one unit. */
        .sn-mobile {
          position: absolute;
          top: 100%;
          left: 0; right: 0;
          background: rgba(2,8,23,.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border, rgba(255,255,255,.07));
          overflow: hidden;
          /* Subtle shadow grounds the panel against the page below. */
          box-shadow: 0 12px 28px -16px rgba(0,0,0,.45);
        }
        .sn-mobile-list {
          list-style: none; margin: 0;
          padding: 6px 20px 16px;
          display: flex; flex-direction: column;
        }
        .sn-mobile-list li {
          border-bottom: 1px solid var(--border, rgba(255,255,255,.07));
        }
        .sn-mobile-list li:last-child { border-bottom: none; }
        .sn-mobile-list a {
          display: block;
          padding: 14px 4px;
          color: var(--text-1, #edf2ff);
          text-decoration: none;
          font-size: 15px; font-weight: 500; letter-spacing: .02em;
        }
        .sn-mobile-list a.active { color: var(--teal, #5eead4); }
        .sn-mobile-list a.gov { color: var(--teal, #5eead4); }
        .sn-mobile-list a.cta {
          margin-top: 10px;
          padding: 12px 16px;
          background: var(--teal, #5eead4);
          color: #021a14;
          font-weight: 600;
          border-radius: 6px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .sn-links { display: none; }
          .sn-trigger { display: inline-flex; }
        }
      `}</style>
    </motion.header>
    {/* Spacer below the fixed nav so page content starts below it instead of underneath. */}
    <div className="sn-spacer" aria-hidden="true" />
    </>
  );
}
