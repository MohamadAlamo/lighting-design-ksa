/* eslint-disable */
// GENERATED from "Lighting Design.dc.html" — the original markup, converted 1:1
// (inline styles → style objects, style-hover → classes in legacy.css).
// Behaviour lives in ./motion.ts. Regenerate rather than hand-editing layout.
interface Props {
  showIntro: boolean;
  dismissIntro: () => void;
}

export default function HomeMarkup({ showIntro, dismissIntro }: Props) {
  return (
    <>
      {showIntro ? (
            <>
        <div data-lum-intro="" onClick={dismissIntro} style={{ position: 'fixed', inset: '0', zIndex: '100', background: '#0d0a07', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', cursor: 'pointer', transition: 'opacity 1.1s ease' }}>
          <div aria-hidden="true" style={{ position: 'absolute', width: '62vmin', height: '62vmin', borderRadius: '50%', background: 'radial-gradient(circle,rgba(210,171,110,0.5) 0%,rgba(179,120,74,0.18) 30%,transparent 62%)', opacity: '0', animation: 'lumBloom 2.6s ease forwards' }}></div>
          <div style={{ position: 'relative', fontFamily: "'Cormorant Garamond',serif", fontWeight: '500', fontSize: 'clamp(1.5rem,4.5vw,2.4rem)', color: '#f1e9db', letterSpacing: '0.24em', paddingLeft: '0.24em', opacity: '0', animation: 'lumMarkIn 1.6s 0.5s ease forwards' }}>LIGHTING DESIGN</div>
          <div aria-hidden="true" style={{ position: 'relative', width: '0', height: '1px', background: '#b3784a', animation: 'lumLineGrow 1.4s 1s ease forwards' }}></div>
          <div style={{ position: 'relative', fontSize: '0.66rem', letterSpacing: '0.36em', textTransform: 'uppercase', color: '#b0a28d', opacity: '0', animation: 'lumMarkIn 1.4s 1.15s ease forwards' }}>Contemporary lighting atelier</div>
        </div>
      </>
            ) : null}
      
      <nav data-lum-nav="" style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex: '20', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem clamp(1.5rem,5vw,4.5rem)', transition: 'background 0.5s,padding 0.5s' }}>
        <a href="#lum-top" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.15rem', fontWeight: '500', letterSpacing: '0.22em', paddingLeft: '0.22em', color: '#f1e9db', whiteSpace: 'nowrap' }}>LIGHTING DESIGN</a>
        <div data-nav-links="" style={{ display: 'flex', gap: '2.6rem', alignItems: 'center' }}>
          <a className="lg0" href="#collections" style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f1e9db', opacity: '0.82', paddingBottom: '3px', borderBottom: '1px solid transparent', transition: 'opacity 0.4s,border-color 0.4s' }} >Collections</a>
          <a className="lg1" href="#projects" style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f1e9db', opacity: '0.82', paddingBottom: '3px', borderBottom: '1px solid transparent', transition: 'opacity 0.4s,border-color 0.4s' }} >Projects</a>
          <a className="lg2" href="/gallery" style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f1e9db', opacity: '0.82', paddingBottom: '3px', borderBottom: '1px solid transparent', transition: 'opacity 0.4s,border-color 0.4s' }} >Gallery</a>
          <a className="lg3" href="#about" style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f1e9db', opacity: '0.82', paddingBottom: '3px', borderBottom: '1px solid transparent', transition: 'opacity 0.4s,border-color 0.4s' }} >About</a>
          <a className="lg4" href="#bespoke" style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f1e9db', opacity: '0.82', paddingBottom: '3px', borderBottom: '1px solid transparent', transition: 'opacity 0.4s,border-color 0.4s' }} >Bespoke</a>
          <a className="lg5" href="#visit" style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f1e9db', opacity: '0.82', paddingBottom: '3px', borderBottom: '1px solid transparent', transition: 'opacity 0.4s,border-color 0.4s' }} >Showroom</a>
        </div>
        <button data-nav-burger="" type="button" aria-label="Open menu" style={{ display: 'none', flexDirection: 'column', justifyContent: 'center', gap: '5px', width: '38px', height: '34px', background: 'none', border: 'none', cursor: 'pointer', padding: '7px 2px' }}>
          <span style={{ display: 'block', height: '1.5px', width: '100%', background: '#f1e9db' }}></span>
          <span style={{ display: 'block', height: '1.5px', width: '100%', background: '#f1e9db' }}></span>
          <span style={{ display: 'block', height: '1.5px', width: '100%', background: '#f1e9db' }}></span>
        </button>
      </nav>
      
      <div data-nav-overlay="" style={{ position: 'fixed', inset: '0', zIndex: '90', background: 'rgba(13,10,7,0.97)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.7rem', opacity: '0', pointerEvents: 'none', transition: 'opacity 0.5s ease' }}>
        <button data-nav-close="" type="button" aria-label="Close menu" style={{ position: 'absolute', top: '1.6rem', right: '1.6rem', width: '46px', height: '46px', background: 'none', border: '1px solid rgba(210,171,110,0.35)', borderRadius: '50%', color: '#f1e9db', fontSize: '1.4rem', lineHeight: '1', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
        <a data-nav-item="" href="#collections" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease,transform 0.5s ease', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2rem,9vw,2.6rem)', color: '#f1e9db' }}>Collections</a>
        <a data-nav-item="" href="#projects" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease,transform 0.5s ease', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2rem,9vw,2.6rem)', color: '#f1e9db' }}>Projects</a>
        <a data-nav-item="" href="/gallery" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease,transform 0.5s ease', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2rem,9vw,2.6rem)', color: '#f1e9db' }}>Gallery</a>
        <a data-nav-item="" href="#about" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease,transform 0.5s ease', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2rem,9vw,2.6rem)', color: '#f1e9db' }}>About</a>
        <a data-nav-item="" href="#bespoke" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease,transform 0.5s ease', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2rem,9vw,2.6rem)', color: '#f1e9db' }}>Bespoke</a>
        <a data-nav-item="" href="#visit" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease,transform 0.5s ease', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2rem,9vw,2.6rem)', color: '#f1e9db' }}>Showroom</a>
        <span data-nav-item="" aria-hidden="true" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease,transform 0.5s ease', marginTop: '1.4rem', width: '40px', height: '1px', background: '#b3784a' }}></span>
        <span data-nav-item="" style={{ opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.5s ease,transform 0.5s ease', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b0a28d' }}>info@lightingdesign-ksa.com</span>
      </div>
      
      <div data-lum-frame="" aria-hidden="true" style={{ position: 'fixed', inset: '0', zIndex: '15', pointerEvents: 'none' }}>
        <span style={{ position: 'absolute', top: '16px', left: '16px', width: '22px', height: '22px', borderTop: '1px solid rgba(210,171,110,0.35)', borderLeft: '1px solid rgba(210,171,110,0.35)' }}></span>
        <span style={{ position: 'absolute', top: '16px', right: '16px', width: '22px', height: '22px', borderTop: '1px solid rgba(210,171,110,0.35)', borderRight: '1px solid rgba(210,171,110,0.35)' }}></span>
        <span style={{ position: 'absolute', bottom: '16px', left: '16px', width: '22px', height: '22px', borderBottom: '1px solid rgba(210,171,110,0.35)', borderLeft: '1px solid rgba(210,171,110,0.35)' }}></span>
        <span style={{ position: 'absolute', bottom: '16px', right: '16px', width: '22px', height: '22px', borderBottom: '1px solid rgba(210,171,110,0.35)', borderRight: '1px solid rgba(210,171,110,0.35)' }}></span>
      </div>
      <div data-wide-only="" data-wide-disp="block" aria-hidden="true" style={{ position: 'fixed', left: '15px', top: '50%', zIndex: '15', transform: 'rotate(-90deg)', transformOrigin: 'left center', fontSize: '0.6rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: 'rgba(176,162,141,0.5)', pointerEvents: 'none', whiteSpace: 'nowrap' }}>Lighting Design · Al Khobar · Riyadh</div>
      
      <header data-lum-hero="" id="lum-top" data-screen-label="Hero" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#0f0b08' }}>
        <div data-hero-slides="" aria-hidden="true" style={{ position: 'absolute', inset: '0', zIndex: '0' }}>
          <div data-hero-bg="" style={{ position: 'absolute', inset: '0', opacity: '1', willChange: 'opacity', transition: 'opacity 1.4s ease', background: 'radial-gradient(122% 108% at 52% 30%,#241811 0%,#160f09 46%,#0b0704 100%)' }}></div>
          <div data-hero-bg="" style={{ position: 'absolute', inset: '0', opacity: '0', willChange: 'opacity,transform', transition: 'opacity 1.4s ease', background: 'radial-gradient(130% 110% at 62% 24%,#231710 0%,#150e08 48%,#0a0603 100%)' }}></div>
          <div data-hero-bg="" style={{ position: 'absolute', inset: '0', opacity: '0', willChange: 'opacity,transform', transition: 'opacity 1.4s ease', background: 'radial-gradient(125% 112% at 66% 30%,#221610 0%,#140d08 48%,#0a0603 100%)' }}></div>
        </div>
        <canvas data-lum-particles="" data-speed="0.12" aria-hidden="true" style={{ position: 'absolute', top: '-6%', left: '0', width: '100%', height: '112%', zIndex: '1', pointerEvents: 'none' }}></canvas>
        <div aria-hidden="true" style={{ position: 'absolute', top: '-25%', left: '13%', width: '180px', height: '160%', zIndex: '1', pointerEvents: 'none', background: 'linear-gradient(rgba(210,171,110,0.16),rgba(210,171,110,0.02) 60%,transparent)', filter: 'blur(26px)', transform: 'rotate(16deg)', animation: 'lumDrift 12s ease-in-out infinite' }}></div>
        <div aria-hidden="true" style={{ position: 'absolute', top: '-25%', left: '32%', width: '120px', height: '160%', zIndex: '1', pointerEvents: 'none', background: 'linear-gradient(rgba(247,233,208,0.12),transparent 62%)', filter: 'blur(30px)', transform: 'rotate(16deg)', animation: 'lumDrift 15s ease-in-out infinite 2s' }}></div>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '0', zIndex: '1', pointerEvents: 'none', background: 'radial-gradient(120% 90% at 18% 42%,rgba(179,120,74,0.16) 0%,transparent 46%)', animation: 'lumBreathe 9s ease-in-out infinite' }}></div>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '0', zIndex: '1', pointerEvents: 'none', boxShadow: 'inset 0 0 200px 50px rgba(8,5,3,0.62)' }}></div>
        <p style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }}>A one-of-a-kind gold-leaf pendant light suspended on fine wires against a dark room.</p>
      
        <div data-hero-track="" style={{ position: 'absolute', inset: '0', zIndex: '2' }}>
          <div data-hero-slide="" style={{ position: 'absolute', inset: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '5vh clamp(1.5rem,5vw,4.5rem) clamp(112px,16vh,196px)', opacity: '1', transition: 'opacity 0.9s ease' }}>
            <div data-lamp-scene="" aria-hidden="true" style={{ position: 'relative', zIndex: '3', width: 'clamp(230px,min(44vw,50vh),560px)', marginBottom: '-1.2rem', pointerEvents: 'none', willChange: 'transform' }}>
              <div data-lamp-group="" style={{ position: 'relative', transformOrigin: '50% -60vh', animation: 'lampSway 8s ease-in-out infinite' }}>
                <div data-lamp-glow="" style={{ position: 'absolute', left: '44%', top: '52%', width: '150%', paddingBottom: '150%', height: '0', transform: 'translate(-50%,-50%)', zIndex: '-1', opacity: '0', transition: 'opacity 2.4s ease', background: 'radial-gradient(circle,rgba(232,176,104,0.30) 0%,rgba(196,132,72,0.13) 34%,rgba(150,96,52,0.05) 55%,transparent 72%)' }}></div>
                <span aria-hidden="true" style={{ position: 'absolute', left: '81.34%', bottom: '99.4%', width: '1.4px', height: '58vh', transform: 'translateX(-50%)', background: 'linear-gradient(to top,rgba(111,105,99,0.95) 0%,rgba(111,105,99,0.5) 45%,rgba(111,105,99,0) 100%)' }}></span>
                <span aria-hidden="true" style={{ position: 'absolute', left: '98.82%', bottom: '99.4%', width: '1.4px', height: '58vh', transform: 'translateX(-50%)', background: 'linear-gradient(to top,rgba(111,105,99,0.95) 0%,rgba(111,105,99,0.5) 45%,rgba(111,105,99,0) 100%)' }}></span>
                <img data-lamp-img="" src="assets/hero/pendant.png" alt="" style={{ display: 'block', width: '100%', filter: 'brightness(0.55) saturate(0.9)', transition: 'filter 2.2s ease', willChange: 'filter' }} />
                <div data-lamp-glint="" style={{ position: 'absolute', inset: '0', WebkitMaskImage: "url('assets/hero/pendant.png')", maskImage: "url('assets/hero/pendant.png')", WebkitMaskSize: '100% 100%', maskSize: '100% 100%', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', background: 'linear-gradient(105deg,transparent 42%,rgba(255,246,224,0.55) 50%,transparent 58%)', backgroundSize: '280% 100%', backgroundPosition: '145% 0', mixBlendMode: 'screen', opacity: '0' }}></div>
              </div>
            </div>
      
            <h1 style={{ position: 'relative', zIndex: '2', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(3rem,min(8.6vw,12vh),7.4rem)', lineHeight: '0.98', letterSpacing: '-0.01em', marginBottom: '1.5rem' }}><span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}>Light,</span></span> <span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}><em style={{ fontStyle: 'italic', color: '#d2ab6e' }}>given form.</em></span></span></h1>
            <p data-hero-el="" style={{ position: 'relative', zIndex: '2', fontSize: 'clamp(1rem,1.6vw,1.18rem)', maxWidth: '30em', color: '#c9baa2', fontWeight: '300', margin: '0 auto 2.2rem' }}>A one-of-a-kind gold-leaf pendant, hand-formed in the atelier — sculptural light, made to be lived beneath.</p>
            <div data-hero-el="" style={{ position: 'relative', zIndex: '2', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a className="lg6" href="#collections" style={{ fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '1.05rem 2.2rem', border: '1px solid #b3784a', color: '#f1e9db', background: 'rgba(179,120,74,0.08)', transition: 'background 0.45s,letter-spacing 0.45s', display: 'inline-block' }} >View collections</a>
            </div>
          </div>
      
          <div data-hero-slide="" style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'flex-end', padding: '0 clamp(1.5rem,5vw,4.5rem) clamp(120px,17vh,200px)', opacity: '0', pointerEvents: 'none', transition: 'opacity 0.9s ease' }}>
            <div data-leaf-field="" aria-hidden="true" style={{ position: 'absolute', inset: '0', overflow: 'hidden', pointerEvents: 'none', zIndex: '1' }}>
            <div data-leaf="0.05" style={{ position: 'absolute', left: '70%', top: '36%', width: '64%', paddingBottom: '38%', zIndex: '0', transform: 'translate(-50%,-50%)', opacity: '0', background: 'radial-gradient(ellipse,rgba(226,170,102,0.15) 0%,rgba(196,132,72,0.06) 42%,transparent 70%)' }}></div>
            <div data-leaf="0.10" style={{ position: 'absolute', left: '45.3%', top: '0', width: '44px', marginLeft: '-22px', zIndex: '2', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayB 9.9s ease-in-out -4.4s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '10.1vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="-6.4" style={{ position: 'relative', zIndex: '1', width: '44px', height: '119px', marginTop: '-9px', transform: 'translateX(-6.4px)' }}>
                  <img src="assets/hero/leaf-1.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '119px', transform: 'translate(-50%,-50%) rotate(96.7deg) scaleX(-1)', filter: 'brightness(0.8) blur(0.5px)' }} />
                </div>
              </div>
            </div>
            <div data-leaf="0.17" style={{ position: 'absolute', left: '48.6%', top: '0', width: '44px', marginLeft: '-22px', zIndex: '2', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayB 10.8s ease-in-out -7.5s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '27.2vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="6.1" style={{ position: 'relative', zIndex: '1', width: '44px', height: '126px', marginTop: '-10px', transform: 'translateX(6.1px)' }}>
                  <img src="assets/hero/leaf-3.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '126px', transform: 'translate(-50%,-50%) rotate(84.0deg)', filter: 'brightness(0.8) blur(0.5px)' }} />
                </div>
              </div>
            </div>
            <div data-leaf="0.24" style={{ position: 'absolute', left: '52.8%', top: '0', width: '56px', marginLeft: '-28px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayB 9.1s ease-in-out -1.9s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '17.8vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="3.8" style={{ position: 'relative', zIndex: '1', width: '56px', height: '180px', marginTop: '-13px', transform: 'translateX(3.8px)' }}>
                  <img src="assets/hero/leaf-2.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '180px', transform: 'translate(-50%,-50%) rotate(87.4deg) scaleX(-1)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="0.31" style={{ position: 'absolute', left: '56.5%', top: '0', width: '45px', marginLeft: '-23px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayB 8.2s ease-in-out -2.2s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '34.5vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="2.1" style={{ position: 'relative', zIndex: '1', width: '45px', height: '187px', marginTop: '-13px', transform: 'translateX(2.1px)' }}>
                  <img src="assets/hero/leaf-5.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '187px', transform: 'translate(-50%,-50%) rotate(88.6deg)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="0.38" style={{ position: 'absolute', left: '59.9%', top: '0', width: '47px', marginLeft: '-24px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayA 7.9s ease-in-out -4.7s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '20.0vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="2.6" style={{ position: 'relative', zIndex: '1', width: '47px', height: '172px', marginTop: '-12px', transform: 'translateX(2.6px)' }}>
                  <img src="assets/hero/leaf-4.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '172px', transform: 'translate(-50%,-50%) rotate(88.1deg) scaleX(-1)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="0.45" style={{ position: 'absolute', left: '62.1%', top: '0', width: '49px', marginLeft: '-25px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayA 10.9s ease-in-out -4.3s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '32.5vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="-8.9" style={{ position: 'relative', zIndex: '1', width: '49px', height: '202px', marginTop: '-14px', transform: 'translateX(-8.9px)' }}>
                  <img src="assets/hero/leaf-1.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '202px', transform: 'translate(-50%,-50%) rotate(95.5deg)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="0.52" style={{ position: 'absolute', left: '65.9%', top: '0', width: '52px', marginLeft: '-26px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayA 9.8s ease-in-out -0.4s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '24.0vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="-6.1" style={{ position: 'relative', zIndex: '1', width: '52px', height: '168px', marginTop: '-12px', transform: 'translateX(-6.1px)' }}>
                  <img src="assets/hero/leaf-2.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '168px', transform: 'translate(-50%,-50%) rotate(94.5deg) scaleX(-1)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="0.59" style={{ position: 'absolute', left: '69.8%', top: '0', width: '56px', marginLeft: '-28px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayA 10.5s ease-in-out -3.3s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '33.2vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="-7.4" style={{ position: 'relative', zIndex: '1', width: '56px', height: '162px', marginTop: '-12px', transform: 'translateX(-7.4px)' }}>
                  <img src="assets/hero/leaf-3.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '162px', transform: 'translate(-50%,-50%) rotate(95.7deg)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="0.66" style={{ position: 'absolute', left: '72.4%', top: '0', width: '53px', marginLeft: '-27px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayB 11.1s ease-in-out -4.8s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '20.5vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="3.1" style={{ position: 'relative', zIndex: '1', width: '53px', height: '195px', marginTop: '-14px', transform: 'translateX(3.1px)' }}>
                  <img src="assets/hero/leaf-4.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '195px', transform: 'translate(-50%,-50%) rotate(88.0deg) scaleX(-1)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="0.73" style={{ position: 'absolute', left: '76.3%', top: '0', width: '44px', marginLeft: '-22px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayA 10.1s ease-in-out -3.2s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '29.4vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="-6.6" style={{ position: 'relative', zIndex: '1', width: '44px', height: '184px', marginTop: '-13px', transform: 'translateX(-6.6px)' }}>
                  <img src="assets/hero/leaf-5.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '184px', transform: 'translate(-50%,-50%) rotate(94.5deg)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="0.80" style={{ position: 'absolute', left: '79.9%', top: '0', width: '44px', marginLeft: '-22px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayB 9.0s ease-in-out -0.2s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '17.2vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="1.0" style={{ position: 'relative', zIndex: '1', width: '44px', height: '177px', marginTop: '-13px', transform: 'translateX(1.0px)' }}>
                  <img src="assets/hero/leaf-1.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '177px', transform: 'translate(-50%,-50%) rotate(89.3deg) scaleX(-1)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="0.87" style={{ position: 'absolute', left: '83.4%', top: '0', width: '57px', marginLeft: '-29px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayA 8.3s ease-in-out -3.0s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '24.3vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="-6.1" style={{ position: 'relative', zIndex: '1', width: '57px', height: '163px', marginTop: '-12px', transform: 'translateX(-6.1px)' }}>
                  <img src="assets/hero/leaf-3.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '163px', transform: 'translate(-50%,-50%) rotate(94.7deg)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="0.94" style={{ position: 'absolute', left: '86.5%', top: '0', width: '44px', marginLeft: '-22px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayB 10.7s ease-in-out -2.0s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '10.1vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="0.8" style={{ position: 'relative', zIndex: '1', width: '44px', height: '151px', marginTop: '-11px', transform: 'translateX(0.8px)' }}>
                  <img src="assets/hero/leaf-5.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '151px', transform: 'translate(-50%,-50%) rotate(89.3deg) scaleX(-1)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="1.01" style={{ position: 'absolute', left: '88.8%', top: '0', width: '59px', marginLeft: '-30px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayB 9.2s ease-in-out -5.7s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '19.7vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="-3.4" style={{ position: 'relative', zIndex: '1', width: '59px', height: '192px', marginTop: '-14px', transform: 'translateX(-3.4px)' }}>
                  <img src="assets/hero/leaf-2.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '192px', transform: 'translate(-50%,-50%) rotate(92.2deg)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="1.08" style={{ position: 'absolute', left: '92.5%', top: '0', width: '50px', marginLeft: '-25px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayB 8.6s ease-in-out -7.9s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '8.0vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="-8.6" style={{ position: 'relative', zIndex: '1', width: '50px', height: '185px', marginTop: '-13px', transform: 'translateX(-8.6px)' }}>
                  <img src="assets/hero/leaf-4.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '185px', transform: 'translate(-50%,-50%) rotate(95.8deg) scaleX(-1)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            <div data-leaf="1.15" style={{ position: 'absolute', left: '96.5%', top: '0', width: '49px', marginLeft: '-25px', zIndex: '3', opacity: '0', transform: 'translateY(-16px)', willChange: 'transform,opacity' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 0', animation: 'leafSwayB 10.0s ease-in-out -6.4s infinite' }}>
                <span aria-hidden="true" style={{ position: 'relative', zIndex: '2', width: '1px', height: '14.2vh', background: 'linear-gradient(to bottom,rgba(200,194,184,0.05),rgba(200,194,184,0.30))' }}></span>
                <div data-tx="-4.9" style={{ position: 'relative', zIndex: '1', width: '49px', height: '204px', marginTop: '-14px', transform: 'translateX(-4.9px)' }}>
                  <img src="assets/hero/leaf-1.png" alt="" style={{ position: 'absolute', left: '50%', top: '50%', width: '204px', transform: 'translate(-50%,-50%) rotate(93.0deg)', filter: 'drop-shadow(0 16px 26px rgba(0,0,0,0.45))' }} />
                </div>
              </div>
            </div>
            </div>
            <p style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }}>Dozens of hand-blown glass leaves suspended on fine cables, flowing across a dark ceiling like a river of light.</p>
            <div style={{ position: 'relative', zIndex: '3', maxWidth: '820px' }}>
              <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2.7rem,6.6vw,5.6rem)', lineHeight: '1.06', letterSpacing: '-0.01em', marginBottom: '1.6rem', textShadow: '0 2px 30px rgba(8,5,3,0.8)' }}><span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}>From</span></span> <span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}>a</span></span> <span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}>single</span></span> <span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}>element,</span></span><br /><span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}><em style={{ fontStyle: 'italic', color: '#d2ab6e' }}>a</em></span></span> <span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}><em style={{ fontStyle: 'italic', color: '#d2ab6e' }}>river</em></span></span> <span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}><em style={{ fontStyle: 'italic', color: '#d2ab6e' }}>of</em></span></span> <span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}><em style={{ fontStyle: 'italic', color: '#d2ab6e' }}>light.</em></span></span></h1>
              <p data-hero-el="" style={{ fontSize: 'clamp(1rem,1.6vw,1.18rem)', maxWidth: '32em', color: '#c9baa2', fontWeight: '300', marginBottom: '2.6rem', textShadow: '0 1px 18px rgba(8,5,3,0.8)' }}>Each glass leaf is blown and finished by hand — clear, frosted, textured or amber — then composed piece by piece into an installation drawn for your ceiling.</p>
              <div data-hero-el="" style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <a className="lg7" href="#projects" style={{ fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '1.05rem 2.2rem', border: '1px solid #b3784a', color: '#f1e9db', background: 'rgba(179,120,74,0.08)', transition: 'background 0.45s,letter-spacing 0.45s', display: 'inline-block' }} >See installed work</a>
              </div>
            </div>
          </div>
      
              <div data-hero-slide="" data-objets-slide="" style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', padding: '0 clamp(1.5rem,5vw,4.5rem)', opacity: '0', pointerEvents: 'none', transition: 'opacity 0.9s ease' }}>
            <div data-objets-panel="" data-hero-el="" style={{ position: 'absolute', top: '0', bottom: '6%', right: 'clamp(0.5rem,3vw,3.5rem)', width: '48%', pointerEvents: 'none' }}>
              <div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '-8%', width: '58%', height: '73%', transform: 'translateX(-50%)', background: 'linear-gradient(rgba(247,233,208,0.20),rgba(247,233,208,0.04) 66%,transparent)', clipPath: 'polygon(46.5% 0,53.5% 0,88% 100%,12% 100%)', filter: 'blur(15px)', animation: 'lumBreathe 9s ease-in-out infinite' }}></div>
              <div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '71%', width: '76%', paddingBottom: '17%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse,rgba(226,170,102,0.15) 0%,rgba(196,132,72,0.05) 45%,transparent 70%)' }}></div>
              <div data-objet="" style={{ position: 'absolute', left: '50%', top: '44%', width: 'clamp(230px,min(23vw,38vh),400px)', opacity: '1', transform: 'translate(-50%,-50%) scale(1)', transition: 'opacity 1.15s ease,transform 1.15s cubic-bezier(0.16,1,0.3,1)', willChange: 'opacity,transform' }}><img src="assets/hero/objet-1.png" alt="" style={{ display: 'block', width: '100%', filter: 'drop-shadow(0 30px 46px rgba(0,0,0,0.55))' }} /></div>
              <div data-objet="" style={{ position: 'absolute', left: '50%', top: '44%', width: 'clamp(230px,min(23vw,38vh),400px)', opacity: '0', transform: 'translate(-50%,-47.5%) scale(0.97)', transition: 'opacity 1.15s ease,transform 1.15s cubic-bezier(0.16,1,0.3,1)', willChange: 'opacity,transform' }}><img src="assets/hero/objet-2.png" alt="" style={{ display: 'block', width: '100%', filter: 'drop-shadow(0 30px 46px rgba(0,0,0,0.55))' }} /></div>
              <div data-objet="" style={{ position: 'absolute', left: '50%', top: '44%', width: 'clamp(230px,min(23vw,38vh),400px)', opacity: '0', transform: 'translate(-50%,-47.5%) scale(0.97)', transition: 'opacity 1.15s ease,transform 1.15s cubic-bezier(0.16,1,0.3,1)', willChange: 'opacity,transform' }}><img src="assets/hero/objet-3.png" alt="" style={{ display: 'block', width: '100%', filter: 'drop-shadow(0 30px 46px rgba(0,0,0,0.55))' }} /></div>
              <div data-objet="" style={{ position: 'absolute', left: '50%', top: '44%', width: 'clamp(230px,min(23vw,38vh),400px)', opacity: '0', transform: 'translate(-50%,-47.5%) scale(0.97)', transition: 'opacity 1.15s ease,transform 1.15s cubic-bezier(0.16,1,0.3,1)', willChange: 'opacity,transform' }}><img src="assets/hero/objet-4.png" alt="" style={{ display: 'block', width: '100%', filter: 'drop-shadow(0 30px 46px rgba(0,0,0,0.55))' }} /></div>
              <div data-objet="" style={{ position: 'absolute', left: '50%', top: '44%', width: 'clamp(230px,min(23vw,38vh),400px)', opacity: '0', transform: 'translate(-50%,-47.5%) scale(0.97)', transition: 'opacity 1.15s ease,transform 1.15s cubic-bezier(0.16,1,0.3,1)', willChange: 'opacity,transform' }}><img src="assets/hero/objet-5.png" alt="" style={{ display: 'block', width: '100%', filter: 'drop-shadow(0 30px 46px rgba(0,0,0,0.55))' }} /></div>
              <div data-objet="" style={{ position: 'absolute', left: '50%', top: '44%', width: 'clamp(230px,min(23vw,38vh),400px)', opacity: '0', transform: 'translate(-50%,-47.5%) scale(0.97)', transition: 'opacity 1.15s ease,transform 1.15s cubic-bezier(0.16,1,0.3,1)', willChange: 'opacity,transform' }}><img src="assets/hero/objet-6.png" alt="" style={{ display: 'block', width: '100%', filter: 'drop-shadow(0 30px 46px rgba(0,0,0,0.55))' }} /></div>
              <div data-objet="" style={{ position: 'absolute', left: '50%', top: '44%', width: 'clamp(230px,min(23vw,38vh),400px)', opacity: '0', transform: 'translate(-50%,-47.5%) scale(0.97)', transition: 'opacity 1.15s ease,transform 1.15s cubic-bezier(0.16,1,0.3,1)', willChange: 'opacity,transform' }}><img src="assets/hero/objet-7.png" alt="" style={{ display: 'block', width: '100%', filter: 'drop-shadow(0 30px 46px rgba(0,0,0,0.55))' }} /></div>
              <div data-objet="" style={{ position: 'absolute', left: '50%', top: '44%', width: 'clamp(230px,min(23vw,38vh),400px)', opacity: '0', transform: 'translate(-50%,-47.5%) scale(0.97)', transition: 'opacity 1.15s ease,transform 1.15s cubic-bezier(0.16,1,0.3,1)', willChange: 'opacity,transform' }}><img src="assets/hero/objet-8.png" alt="" style={{ display: 'block', width: '100%', filter: 'drop-shadow(0 30px 46px rgba(0,0,0,0.55))' }} /></div>
              <div data-objet-caps="" aria-hidden="true" style={{ position: 'absolute', left: '0', right: '0', top: '78%', height: '2.2rem', pointerEvents: 'none' }}>
                <span data-objet-cap="" style={{ position: 'absolute', left: '50%', top: '0', transform: 'translate(-50%,0)', whiteSpace: 'nowrap', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontWeight: '400', fontSize: '1.3rem', color: '#d2ab6e', opacity: '1', transition: 'opacity 0.9s ease,transform 0.9s ease' }}>Crystal parrots</span>
                <span data-objet-cap="" style={{ position: 'absolute', left: '50%', top: '0', transform: 'translate(-50%,8px)', whiteSpace: 'nowrap', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontWeight: '400', fontSize: '1.3rem', color: '#d2ab6e', opacity: '0', transition: 'opacity 0.9s ease,transform 0.9s ease' }}>The gold horse</span>
                <span data-objet-cap="" style={{ position: 'absolute', left: '50%', top: '0', transform: 'translate(-50%,8px)', whiteSpace: 'nowrap', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontWeight: '400', fontSize: '1.3rem', color: '#d2ab6e', opacity: '0', transition: 'opacity 0.9s ease,transform 0.9s ease' }}>Crystal swans</span>
                <span data-objet-cap="" style={{ position: 'absolute', left: '50%', top: '0', transform: 'translate(-50%,8px)', whiteSpace: 'nowrap', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontWeight: '400', fontSize: '1.3rem', color: '#d2ab6e', opacity: '0', transition: 'opacity 0.9s ease,transform 0.9s ease' }}>Amethyst orchard</span>
                <span data-objet-cap="" style={{ position: 'absolute', left: '50%', top: '0', transform: 'translate(-50%,8px)', whiteSpace: 'nowrap', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontWeight: '400', fontSize: '1.3rem', color: '#d2ab6e', opacity: '0', transition: 'opacity 0.9s ease,transform 0.9s ease' }}>The silver horse</span>
                <span data-objet-cap="" style={{ position: 'absolute', left: '50%', top: '0', transform: 'translate(-50%,8px)', whiteSpace: 'nowrap', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontWeight: '400', fontSize: '1.3rem', color: '#d2ab6e', opacity: '0', transition: 'opacity 0.9s ease,transform 0.9s ease' }}>The jade horse</span>
                <span data-objet-cap="" style={{ position: 'absolute', left: '50%', top: '0', transform: 'translate(-50%,8px)', whiteSpace: 'nowrap', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontWeight: '400', fontSize: '1.3rem', color: '#d2ab6e', opacity: '0', transition: 'opacity 0.9s ease,transform 0.9s ease' }}>The gilded stag</span>
                <span data-objet-cap="" style={{ position: 'absolute', left: '50%', top: '0', transform: 'translate(-50%,8px)', whiteSpace: 'nowrap', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontWeight: '400', fontSize: '1.3rem', color: '#d2ab6e', opacity: '0', transition: 'opacity 0.9s ease,transform 0.9s ease' }}>The emerald horse</span>
              </div>
              <div data-objet-dots="" style={{ position: 'absolute', left: '50%', top: '86%', transform: 'translateX(-50%)', display: 'flex', gap: '0.9rem', pointerEvents: 'auto' }}>
                <button data-objet-dot="" type="button" aria-label="Show: Crystal parrots" style={{ width: '7px', height: '7px', padding: '0', border: 'none', background: '#d2ab6e', transform: 'rotate(45deg) scale(1.3)', cursor: 'pointer', transition: 'background 0.5s,transform 0.5s' }}></button>
                <button data-objet-dot="" type="button" aria-label="Show: The gold horse" style={{ width: '7px', height: '7px', padding: '0', border: 'none', background: 'rgba(176,162,141,0.35)', transform: 'rotate(45deg)', cursor: 'pointer', transition: 'background 0.5s,transform 0.5s' }}></button>
                <button data-objet-dot="" type="button" aria-label="Show: Crystal swans" style={{ width: '7px', height: '7px', padding: '0', border: 'none', background: 'rgba(176,162,141,0.35)', transform: 'rotate(45deg)', cursor: 'pointer', transition: 'background 0.5s,transform 0.5s' }}></button>
                <button data-objet-dot="" type="button" aria-label="Show: Amethyst orchard" style={{ width: '7px', height: '7px', padding: '0', border: 'none', background: 'rgba(176,162,141,0.35)', transform: 'rotate(45deg)', cursor: 'pointer', transition: 'background 0.5s,transform 0.5s' }}></button>
                <button data-objet-dot="" type="button" aria-label="Show: The silver horse" style={{ width: '7px', height: '7px', padding: '0', border: 'none', background: 'rgba(176,162,141,0.35)', transform: 'rotate(45deg)', cursor: 'pointer', transition: 'background 0.5s,transform 0.5s' }}></button>
                <button data-objet-dot="" type="button" aria-label="Show: The jade horse" style={{ width: '7px', height: '7px', padding: '0', border: 'none', background: 'rgba(176,162,141,0.35)', transform: 'rotate(45deg)', cursor: 'pointer', transition: 'background 0.5s,transform 0.5s' }}></button>
                <button data-objet-dot="" type="button" aria-label="Show: The gilded stag" style={{ width: '7px', height: '7px', padding: '0', border: 'none', background: 'rgba(176,162,141,0.35)', transform: 'rotate(45deg)', cursor: 'pointer', transition: 'background 0.5s,transform 0.5s' }}></button>
                <button data-objet-dot="" type="button" aria-label="Show: The emerald horse" style={{ width: '7px', height: '7px', padding: '0', border: 'none', background: 'rgba(176,162,141,0.35)', transform: 'rotate(45deg)', cursor: 'pointer', transition: 'background 0.5s,transform 0.5s' }}></button>
              </div>
            </div>
            <div data-objets-copy="" style={{ position: 'relative', zIndex: '2', maxWidth: '560px' }}>
              <span data-hero-el="" style={{ display: 'block', marginBottom: '1.6rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>Objets d'art</span>
              <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2.9rem,6.4vw,5.8rem)', lineHeight: '0.98', letterSpacing: '-0.01em', marginBottom: '1.8rem' }}><span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}>Not</span></span> <span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}>every</span></span> <span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}>light</span></span><br /><span data-hero-w="" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', lineHeight: '1', padding: '0 0.07em 0.22em', margin: '0 -0.07em -0.1em' }}><span style={{ display: 'inline-block' }}><em style={{ fontStyle: 'italic', color: '#d2ab6e' }}>hangs.</em></span></span></h1>
              <p data-hero-el="" style={{ fontSize: 'clamp(1rem,1.6vw,1.18rem)', maxWidth: '26em', color: '#b0a28d', fontWeight: '300', marginBottom: '2.8rem' }}>Hand-cut crystal sculpture — horses, swans and amethyst fruit — pieces that catch the room's light and give it back. For consoles, desks and vitrines.</p>
              <div data-hero-el="" style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <a className="lg8" href="/gallery" style={{ fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '1.05rem 2.2rem', border: '1px solid #b3784a', color: '#f1e9db', background: 'rgba(179,120,74,0.08)', transition: 'background 0.45s,letter-spacing 0.45s', display: 'inline-block' }} >Browse the gallery</a>
              </div>
            </div>
          </div>
        </div>
      
        <div data-hero-controls="" style={{ position: 'absolute', left: '0', right: '0', bottom: 'clamp(1.6rem,4vh,2.4rem)', zIndex: '3', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.2rem', padding: '0 clamp(1.5rem,5vw,4.5rem)' }}>
          <div data-wide-only="" data-wide-disp="flex" style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', minWidth: '130px' }}>
            <span data-hero-count="" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.15rem', color: '#d2ab6e', letterSpacing: '0.08em' }}>01</span>
            <span style={{ position: 'relative', display: 'block', width: '60px', height: '1px', background: 'rgba(176,162,141,0.25)', overflow: 'hidden' }}><span data-hero-progress="" style={{ position: 'absolute', left: '0', top: '0', height: '100%', width: '100%', background: '#d2ab6e', transform: 'scaleX(0)', transformOrigin: 'left' }}></span></span>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#b0a28d' }}>03</span>
          </div>
          <div data-hero-dots="" style={{ display: 'flex', flex: '1', justifyContent: 'center', gap: '0.55rem', alignItems: 'center' }}>
            <button data-hero-dot="" type="button" aria-label="Show slide 1" style={{ width: '30px', height: '8px', padding: '0', border: 'none', borderRadius: '20px', background: '#d2ab6e', cursor: 'pointer', transition: 'width 0.5s ease,background 0.5s ease' }}></button>
            <button data-hero-dot="" type="button" aria-label="Show slide 2" style={{ width: '8px', height: '8px', padding: '0', border: 'none', borderRadius: '20px', background: 'rgba(176,162,141,0.4)', cursor: 'pointer', transition: 'width 0.5s ease,background 0.5s ease' }}></button>
            <button data-hero-dot="" type="button" aria-label="Show slide 3" style={{ width: '8px', height: '8px', padding: '0', border: 'none', borderRadius: '20px', background: 'rgba(176,162,141,0.4)', cursor: 'pointer', transition: 'width 0.5s ease,background 0.5s ease' }}></button>
          </div>
          <div style={{ display: 'flex', gap: '0.7rem' }}>
            <button className="lg9" data-hero-prev="" type="button" aria-label="Previous slide" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(210,171,110,0.3)', background: 'rgba(13,10,7,0.25)', color: '#f1e9db', fontSize: '1.15rem', lineHeight: '1', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.4s,border-color 0.4s' }} >‹</button>
            <button className="lg10" data-hero-next="" type="button" aria-label="Next slide" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(210,171,110,0.3)', background: 'rgba(13,10,7,0.25)', color: '#f1e9db', fontSize: '1.15rem', lineHeight: '1', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.4s,border-color 0.4s' }} >›</button>
          </div>
        </div>
      </header>
      
      <section data-reveal="" data-screen-label="Philosophy" style={{ padding: 'clamp(6rem,14vh,11rem) clamp(1.5rem,5vw,4.5rem)', maxWidth: '1100px' }}>
        <span style={{ display: 'block', marginBottom: '2.2rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>Our work</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2rem,4.6vw,3.6rem)', lineHeight: '1.12', maxWidth: '16em', marginBottom: '2rem' }}>Every piece begins as a single <em style={{ fontStyle: 'italic', color: '#d2ab6e' }}>point of light</em> — and the question of how to hold it.</h2>
        <p style={{ maxWidth: '36em', color: '#b0a28d', fontSize: '1.08rem' }}>We work in materials that do something to light rather than simply carry it: uncut crystal that fractures it, alabaster thin enough to glow from within, brass that warms it as it falls. Each fixture is assembled by hand in our atelier, then hung and lit in the showroom before it ever reaches a room of yours.</p>
      </section>
      
      <section id="collections" data-screen-label="Collections" style={{ padding: '0 clamp(1.5rem,5vw,4.5rem) clamp(5rem,12vh,9rem)' }}>
        <div data-reveal="" style={{ borderTop: '1px solid rgba(176,162,141,0.16)', paddingTop: '2.4rem', marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap-reverse', gap: '1.5rem 3rem' }}>
          <p style={{ maxWidth: '24em', fontSize: '0.85rem', lineHeight: '1.75', letterSpacing: '0.02em', color: '#b0a28d', paddingTop: '0.9rem' }}>Four families — chandeliers, wall, floor and table. Every piece is drawn, cast and finished by hand in the Khobar atelier.</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2.8rem,7vw,5.6rem)', lineHeight: '0.95', textAlign: 'right', marginLeft: 'auto' }}>Collections</h2>
        </div>
        <div data-stagger="" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.4rem', marginBottom: '1.4rem' }}>
        <div data-hg="proj" style={{ position: 'relative', flex: '1 1 300px', minHeight: 'clamp(320px,52vh,540px)' }}>
          <div style={{ position: 'absolute', inset: '0', borderRadius: '22px', overflow: 'hidden', border: '1px solid rgba(176,162,141,0.12)', background: '#1e1812' }}>
            <div data-hg-img="" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/collections/chandeliers.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 1.2s ease' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(transparent 45%,rgba(13,10,7,0.85))', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', left: '0', bottom: '0', zIndex: '2', width: '100%', padding: '1.8rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <span style={{ fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d2ab6e' }}>01</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: 'clamp(1.7rem,2.6vw,2.3rem)', lineHeight: '1.05' }}>Chandeliers</h3>
              <p style={{ fontSize: '0.85rem', letterSpacing: '0.02em', color: '#b0a28d', maxWidth: '24em' }}>Statement pieces for stairwells, halls, and double-height rooms.</p>
            </div>
          </div>
        </div>
        <div data-hg="proj" style={{ position: 'relative', flex: '1.6 1 420px', minHeight: 'clamp(320px,52vh,540px)' }}>
          <div style={{ position: 'absolute', inset: '0', borderRadius: '22px', overflow: 'hidden', border: '1px solid rgba(176,162,141,0.12)', background: '#1e1812' }}>
            <div data-hg-img="" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/collections/wall-lights.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 1.2s ease' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(transparent 45%,rgba(13,10,7,0.85))', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', left: '0', bottom: '0', zIndex: '2', width: '100%', padding: '1.8rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <span style={{ fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d2ab6e' }}>02</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: 'clamp(1.7rem,2.6vw,2.3rem)', lineHeight: '1.05' }}>Wall lights</h3>
              <p style={{ fontSize: '0.85rem', letterSpacing: '0.02em', color: '#b0a28d', maxWidth: '24em' }}>Sconces in alabaster and brass that wash a wall in warm light.</p>
            </div>
          </div>
          <a className="lg11" href="/gallery?cat=wall" aria-label="Wall lights in the gallery" style={{ position: 'absolute', top: '0', right: '0', width: '106px', height: '106px', background: '#14100c', borderBottomLeftRadius: '26px', display: 'grid', placeItems: 'center', zIndex: '3', cursor: 'pointer' }} >
            <span data-hg-arrow="" style={{ width: '58px', height: '58px', borderRadius: '50%', background: '#b3784a', display: 'grid', placeItems: 'center', transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)' }}>
              <svg width="19" height="19" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5.5 14.5 L14.5 5.5 M7.5 5.5 H14.5 V12.5" stroke="#14100c" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
          </a>
          <span aria-hidden="true" style={{ position: 'absolute', top: '0', right: '106px', width: '26px', height: '26px', background: 'radial-gradient(circle at 0 100%,transparent 25px,#14100c 26px)', zIndex: '3', pointerEvents: 'none' }}></span>
          <span aria-hidden="true" style={{ position: 'absolute', top: '106px', right: '0', width: '26px', height: '26px', background: 'radial-gradient(circle at 0 100%,transparent 25px,#14100c 26px)', zIndex: '3', pointerEvents: 'none' }}></span>
        </div>
        </div>
        <div data-stagger="" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.4rem' }}>
        <div data-hg="proj" style={{ position: 'relative', flex: '1.6 1 420px', minHeight: 'clamp(320px,52vh,540px)' }}>
          <div style={{ position: 'absolute', inset: '0', borderRadius: '22px', overflow: 'hidden', border: '1px solid rgba(176,162,141,0.12)', background: '#1e1812' }}>
            <div data-hg-img="" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/collections/floor-lamps.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 1.2s ease' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(transparent 45%,rgba(13,10,7,0.85))', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', left: '0', bottom: '0', zIndex: '2', width: '100%', padding: '1.8rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <span style={{ fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d2ab6e' }}>03</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: 'clamp(1.7rem,2.6vw,2.3rem)', lineHeight: '1.05' }}>Floor lamps</h3>
              <p style={{ fontSize: '0.85rem', letterSpacing: '0.02em', color: '#b0a28d', maxWidth: '24em' }}>Sculptural standing light for a reading corner or an entrance.</p>
            </div>
          </div>
          <a className="lg12" href="/gallery?cat=lamp" aria-label="Floor and table lamps in the gallery" style={{ position: 'absolute', top: '0', right: '0', width: '106px', height: '106px', background: '#14100c', borderBottomLeftRadius: '26px', display: 'grid', placeItems: 'center', zIndex: '3', cursor: 'pointer' }} >
            <span data-hg-arrow="" style={{ width: '58px', height: '58px', borderRadius: '50%', background: '#b3784a', display: 'grid', placeItems: 'center', transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)' }}>
              <svg width="19" height="19" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5.5 14.5 L14.5 5.5 M7.5 5.5 H14.5 V12.5" stroke="#14100c" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </span>
          </a>
          <span aria-hidden="true" style={{ position: 'absolute', top: '0', right: '106px', width: '26px', height: '26px', background: 'radial-gradient(circle at 0 100%,transparent 25px,#14100c 26px)', zIndex: '3', pointerEvents: 'none' }}></span>
          <span aria-hidden="true" style={{ position: 'absolute', top: '106px', right: '0', width: '26px', height: '26px', background: 'radial-gradient(circle at 0 100%,transparent 25px,#14100c 26px)', zIndex: '3', pointerEvents: 'none' }}></span>
        </div>
        <div data-hg="proj" style={{ position: 'relative', flex: '1 1 300px', minHeight: 'clamp(320px,52vh,540px)' }}>
          <div style={{ position: 'absolute', inset: '0', borderRadius: '22px', overflow: 'hidden', border: '1px solid rgba(176,162,141,0.12)', background: '#1e1812' }}>
            <div data-hg-img="" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/collections/table-lamps.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 1.2s ease' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(transparent 45%,rgba(13,10,7,0.85))', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', left: '0', bottom: '0', zIndex: '2', width: '100%', padding: '1.8rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <span style={{ fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d2ab6e' }}>04</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: 'clamp(1.7rem,2.6vw,2.3rem)', lineHeight: '1.05' }}>Table lamps</h3>
              <p style={{ fontSize: '0.85rem', letterSpacing: '0.02em', color: '#b0a28d', maxWidth: '24em' }}>Smaller pieces that carry the same hand and the same glow.</p>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      <section data-screen-label="Selected pieces" style={{ padding: '0 clamp(1.5rem,5vw,4.5rem) clamp(5rem,12vh,9rem)' }}>
        <div data-reveal="" style={{ borderTop: '1px solid rgba(176,162,141,0.16)', paddingTop: '2.4rem', marginBottom: '3rem' }}>
          <span style={{ display: 'block', marginBottom: '1rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>Selected pieces</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(1.8rem,4vw,3rem)' }}>From the current collection</h2>
        </div>
        <div data-stagger="" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.2rem', alignItems: 'flex-start', marginBottom: '2.6rem' }}>
          <article data-hg="work" style={{ display: 'flex', flexDirection: 'column', flex: '1.5 1 323px', minWidth: 'min(100%,250px)' }}>
            <div data-hg-stage="" style={{ aspectRatio: '1.5', borderRadius: '18px', border: '1px solid rgba(176,162,141,0.14)', position: 'relative', overflow: 'hidden', background: '#1e1812', transition: 'border-color 0.5s' }}>
              <div className="lg13" data-hg-img="" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/pieces/veil.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 40%', transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)' }} ></div>
              <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 62%,rgba(13,10,7,0.42))', pointerEvents: 'none' }}></div>
              <span aria-hidden="true" style={{ position: 'absolute', top: '1.1rem', right: '1.3rem', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(241,233,219,0.72)', letterSpacing: '0.08em' }}>01</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.2rem', marginTop: '1.3rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', marginBottom: '0.45rem' }}>Chandelier</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.7rem', marginBottom: '0.2rem' }}>Veil</h3>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.04em', color: '#b0a28d', margin: '0' }}>Alabaster &amp; brass · L 190 cm</p>
              </div>
              <span data-hg-enq="" style={{ flex: 'none', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b3784a', opacity: '0', transform: 'translateY(6px)', transition: 'opacity 0.45s,transform 0.45s', paddingBottom: '0.2rem' }}>View →</span>
            </div>
          </article>
          <article data-hg="work" style={{ display: 'flex', flexDirection: 'column', flex: '0.72 1 155px', minWidth: 'min(100%,250px)', maxWidth: 'min(100%,440px)' }}>
            <div data-hg-stage="" style={{ aspectRatio: '0.72', borderRadius: '18px', border: '1px solid rgba(176,162,141,0.14)', position: 'relative', overflow: 'hidden', background: '#1e1812', transition: 'border-color 0.5s' }}>
              <div className="lg14" data-hg-img="" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/pieces/lunar.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)' }} ></div>
              <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 62%,rgba(13,10,7,0.42))', pointerEvents: 'none' }}></div>
              <span aria-hidden="true" style={{ position: 'absolute', top: '1.1rem', right: '1.3rem', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(241,233,219,0.72)', letterSpacing: '0.08em' }}>02</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.2rem', marginTop: '1.3rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', marginBottom: '0.45rem' }}>Wall light</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.45rem', marginBottom: '0.2rem' }}>Lunar</h3>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.04em', color: '#b0a28d', margin: '0' }}>Backlit alabaster · Ø 38 cm</p>
              </div>
              <span data-hg-enq="" style={{ flex: 'none', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b3784a', opacity: '0', transform: 'translateY(6px)', transition: 'opacity 0.45s,transform 0.45s', paddingBottom: '0.2rem' }}>View →</span>
            </div>
          </article>
        </div>
        <div data-stagger="" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.2rem', alignItems: 'flex-start', marginBottom: '2.6rem' }}>
          <article data-hg="work" style={{ display: 'flex', flexDirection: 'column', flex: '0.75 1 161px', minWidth: 'min(100%,250px)', maxWidth: 'min(100%,440px)' }}>
            <div data-hg-stage="" style={{ aspectRatio: '0.75', borderRadius: '18px', border: '1px solid rgba(176,162,141,0.14)', position: 'relative', overflow: 'hidden', background: '#1e1812', transition: 'border-color 0.5s' }}>
              <div className="lg15" data-hg-img="" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/pieces/halo.jpg')", backgroundSize: 'cover', backgroundPosition: '40% 40%', transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)' }} ></div>
              <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 62%,rgba(13,10,7,0.42))', pointerEvents: 'none' }}></div>
              <span aria-hidden="true" style={{ position: 'absolute', top: '1.1rem', right: '1.3rem', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(241,233,219,0.72)', letterSpacing: '0.08em' }}>03</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.2rem', marginTop: '1.3rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', marginBottom: '0.45rem' }}>Floor lamp</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.45rem', marginBottom: '0.2rem' }}>Halo</h3>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.04em', color: '#b0a28d', margin: '0' }}>Blackened steel · H 205 cm</p>
              </div>
              <span data-hg-enq="" style={{ flex: 'none', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b3784a', opacity: '0', transform: 'translateY(6px)', transition: 'opacity 0.45s,transform 0.45s', paddingBottom: '0.2rem' }}>View →</span>
            </div>
          </article>
          <article data-hg="work" style={{ display: 'flex', flexDirection: 'column', flex: '1.3 1 280px', minWidth: 'min(100%,250px)' }}>
            <div data-hg-stage="" style={{ aspectRatio: '1.3', borderRadius: '18px', border: '1px solid rgba(176,162,141,0.14)', position: 'relative', overflow: 'hidden', background: '#1e1812', transition: 'border-color 0.5s' }}>
              <div className="lg16" data-hg-img="" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/pieces/hearth.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 60%', transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)' }} ></div>
              <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 62%,rgba(13,10,7,0.42))', pointerEvents: 'none' }}></div>
              <span aria-hidden="true" style={{ position: 'absolute', top: '1.1rem', right: '1.3rem', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(241,233,219,0.72)', letterSpacing: '0.08em' }}>04</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.2rem', marginTop: '1.3rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', marginBottom: '0.45rem' }}>Table lamp</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.7rem', marginBottom: '0.2rem' }}>Hearth</h3>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.04em', color: '#b0a28d', margin: '0' }}>Ceramic &amp; brass · H 64 cm</p>
              </div>
              <span data-hg-enq="" style={{ flex: 'none', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b3784a', opacity: '0', transform: 'translateY(6px)', transition: 'opacity 0.45s,transform 0.45s', paddingBottom: '0.2rem' }}>View →</span>
            </div>
          </article>
          <article data-hg="work" style={{ display: 'flex', flexDirection: 'column', flex: '0.75 1 161px', minWidth: 'min(100%,250px)', maxWidth: 'min(100%,440px)' }}>
            <div data-hg-stage="" style={{ aspectRatio: '0.75', borderRadius: '18px', border: '1px solid rgba(176,162,141,0.14)', position: 'relative', overflow: 'hidden', background: '#1e1812', transition: 'border-color 0.5s' }}>
              <div className="lg17" data-hg-img="" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/gallery/09.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 30% 30%', transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)' }} ></div>
              <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 62%,rgba(13,10,7,0.42))', pointerEvents: 'none' }}></div>
              <span aria-hidden="true" style={{ position: 'absolute', top: '1.1rem', right: '1.3rem', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(241,233,219,0.72)', letterSpacing: '0.08em' }}>05</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.2rem', marginTop: '1.3rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', marginBottom: '0.45rem' }}>Wall light</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.45rem', marginBottom: '0.2rem' }}>Quill</h3>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.04em', color: '#b0a28d', margin: '0' }}>Alabaster &amp; brass · H 61 cm</p>
              </div>
              <span data-hg-enq="" style={{ flex: 'none', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b3784a', opacity: '0', transform: 'translateY(6px)', transition: 'opacity 0.45s,transform 0.45s', paddingBottom: '0.2rem' }}>View →</span>
            </div>
          </article>
        </div>
        <div data-stagger="" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.2rem', alignItems: 'flex-start' }}>
          <article data-hg="work" style={{ display: 'flex', flexDirection: 'column', flex: '0.75 1 161px', minWidth: 'min(100%,250px)', maxWidth: 'min(100%,440px)' }}>
            <div data-hg-stage="" style={{ aspectRatio: '0.75', borderRadius: '18px', border: '1px solid rgba(176,162,141,0.14)', position: 'relative', overflow: 'hidden', background: '#1e1812', transition: 'border-color 0.5s' }}>
              <div className="lg18" data-hg-img="" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/pieces/torch.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)' }} ></div>
              <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 62%,rgba(13,10,7,0.42))', pointerEvents: 'none' }}></div>
              <span aria-hidden="true" style={{ position: 'absolute', top: '1.1rem', right: '1.3rem', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(241,233,219,0.72)', letterSpacing: '0.08em' }}>06</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.2rem', marginTop: '1.3rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', marginBottom: '0.45rem' }}>Wall light</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.45rem', marginBottom: '0.2rem' }}>Torch</h3>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.04em', color: '#b0a28d', margin: '0' }}>Aged brass &amp; linen · H 78 cm</p>
              </div>
              <span data-hg-enq="" style={{ flex: 'none', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b3784a', opacity: '0', transform: 'translateY(6px)', transition: 'opacity 0.45s,transform 0.45s', paddingBottom: '0.2rem' }}>View →</span>
            </div>
          </article>
          <article data-hg="work" style={{ display: 'flex', flexDirection: 'column', flex: '1.5 1 323px', minWidth: 'min(100%,250px)' }}>
            <div data-hg-stage="" style={{ aspectRatio: '1.5', borderRadius: '18px', border: '1px solid rgba(176,162,141,0.14)', position: 'relative', overflow: 'hidden', background: '#1e1812', transition: 'border-color 0.5s' }}>
              <div className="lg19" data-hg-img="" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/pieces/duet.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 40%', transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)' }} ></div>
              <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 62%,rgba(13,10,7,0.42))', pointerEvents: 'none' }}></div>
              <span aria-hidden="true" style={{ position: 'absolute', top: '1.1rem', right: '1.3rem', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(241,233,219,0.72)', letterSpacing: '0.08em' }}>07</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.2rem', marginTop: '1.3rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', marginBottom: '0.45rem' }}>Wall light</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.7rem', marginBottom: '0.2rem' }}>Duet</h3>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.04em', color: '#b0a28d', margin: '0' }}>Brass · black shades · H 92 cm</p>
              </div>
              <span data-hg-enq="" style={{ flex: 'none', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b3784a', opacity: '0', transform: 'translateY(6px)', transition: 'opacity 0.45s,transform 0.45s', paddingBottom: '0.2rem' }}>View →</span>
            </div>
          </article>
          <article data-hg="work" style={{ display: 'flex', flexDirection: 'column', flex: '0.75 1 161px', minWidth: 'min(100%,250px)', maxWidth: 'min(100%,440px)' }}>
            <div data-hg-stage="" style={{ aspectRatio: '0.75', borderRadius: '18px', border: '1px solid rgba(176,162,141,0.14)', position: 'relative', overflow: 'hidden', background: '#1e1812', transition: 'border-color 0.5s' }}>
              <div className="lg20" data-hg-img="" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/pieces/focus.jpg')", backgroundSize: 'cover', backgroundPosition: '35% center', transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)' }} ></div>
              <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 62%,rgba(13,10,7,0.42))', pointerEvents: 'none' }}></div>
              <span aria-hidden="true" style={{ position: 'absolute', top: '1.1rem', right: '1.3rem', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(241,233,219,0.72)', letterSpacing: '0.08em' }}>08</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.2rem', marginTop: '1.3rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.66rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', marginBottom: '0.45rem' }}>Desk lamp</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.45rem', marginBottom: '0.2rem' }}>Focus</h3>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.04em', color: '#b0a28d', margin: '0' }}>Polished brass · H 42 cm</p>
              </div>
              <span data-hg-enq="" style={{ flex: 'none', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b3784a', opacity: '0', transform: 'translateY(6px)', transition: 'opacity 0.45s,transform 0.45s', paddingBottom: '0.2rem' }}>View →</span>
            </div>
          </article>
        </div>
      </section>
      
      <section id="projects" data-screen-label="Projects" style={{ marginBottom: 'clamp(5rem,12vh,9rem)' }}>
        <div data-pj-cinema="" data-wide-only="" data-wide-disp="block" style={{ position: 'relative', height: '520vh' }}>
        <div data-pj-sticky="" style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '100vh', overflow: 'hidden', background: '#0e0c09', willChange: 'transform' }}>
          <div data-pj-layer="0" style={{ position: 'absolute', inset: '0', zIndex: '1', clipPath: 'inset(0 0 0 0)', willChange: 'clip-path' }}>
            <div data-pj-img="" style={{ position: 'absolute', inset: '-3.5% 0', backgroundImage: "url('assets/projects/01-marasi.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', willChange: 'transform', transform: 'scale(1.02)' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(105deg,rgba(13,10,7,0.72) 0%,rgba(13,10,7,0.18) 50%,rgba(13,10,7,0.5) 100%)', pointerEvents: 'none' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0.25) 0%,rgba(13,10,7,0) 30%,rgba(13,10,7,0) 52%,rgba(13,10,7,0.88) 100%)', pointerEvents: 'none' }}></div>
          </div>
          <div data-pj-layer="1" style={{ position: 'absolute', inset: '0', zIndex: '2', clipPath: 'inset(0 0 100% 0)', willChange: 'clip-path' }}>
            <div data-pj-img="" style={{ position: 'absolute', inset: '-3.5% 0', backgroundImage: "url('assets/projects/02-crystal-cascade.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', willChange: 'transform', transform: 'scale(1.02)' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(105deg,rgba(13,10,7,0.72) 0%,rgba(13,10,7,0.18) 50%,rgba(13,10,7,0.5) 100%)', pointerEvents: 'none' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0.25) 0%,rgba(13,10,7,0) 30%,rgba(13,10,7,0) 52%,rgba(13,10,7,0.88) 100%)', pointerEvents: 'none' }}></div>
          </div>
          <div data-pj-layer="2" style={{ position: 'absolute', inset: '0', zIndex: '3', clipPath: 'inset(0 0 100% 0)', willChange: 'clip-path' }}>
            <div data-pj-img="" style={{ position: 'absolute', inset: '-3.5% 0', backgroundImage: "url('assets/projects/03-alabaster-lattice.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', willChange: 'transform', transform: 'scale(1.02)' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(105deg,rgba(13,10,7,0.72) 0%,rgba(13,10,7,0.18) 50%,rgba(13,10,7,0.5) 100%)', pointerEvents: 'none' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0.25) 0%,rgba(13,10,7,0) 30%,rgba(13,10,7,0) 52%,rgba(13,10,7,0.88) 100%)', pointerEvents: 'none' }}></div>
          </div>
          <div data-pj-layer="3" style={{ position: 'absolute', inset: '0', zIndex: '4', clipPath: 'inset(0 0 100% 0)', willChange: 'clip-path' }}>
            <div data-pj-img="" style={{ position: 'absolute', inset: '-3.5% 0', backgroundImage: "url('assets/projects/04-rings-of-light.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 30%', willChange: 'transform', transform: 'scale(1.02)' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(105deg,rgba(13,10,7,0.72) 0%,rgba(13,10,7,0.18) 50%,rgba(13,10,7,0.5) 100%)', pointerEvents: 'none' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0.25) 0%,rgba(13,10,7,0) 30%,rgba(13,10,7,0) 52%,rgba(13,10,7,0.88) 100%)', pointerEvents: 'none' }}></div>
          </div>
          <div data-pj-layer="4" style={{ position: 'absolute', inset: '0', zIndex: '5', clipPath: 'inset(0 0 100% 0)', willChange: 'clip-path' }}>
            <div data-pj-img="" style={{ position: 'absolute', inset: '-3.5% 0', backgroundImage: "url('assets/projects/05-gallery-of-glass.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', willChange: 'transform', transform: 'scale(1.02)' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(105deg,rgba(13,10,7,0.72) 0%,rgba(13,10,7,0.18) 50%,rgba(13,10,7,0.5) 100%)', pointerEvents: 'none' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0.25) 0%,rgba(13,10,7,0) 30%,rgba(13,10,7,0) 52%,rgba(13,10,7,0.88) 100%)', pointerEvents: 'none' }}></div>
          </div>
          <div data-pj-layer="5" style={{ position: 'absolute', inset: '0', zIndex: '6', clipPath: 'inset(0 0 100% 0)', willChange: 'clip-path' }}>
            <div data-pj-img="" style={{ position: 'absolute', inset: '-3.5% 0', backgroundImage: "url('assets/projects/06-entrance-alabaster.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', willChange: 'transform', transform: 'scale(1.02)' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(105deg,rgba(13,10,7,0.72) 0%,rgba(13,10,7,0.18) 50%,rgba(13,10,7,0.5) 100%)', pointerEvents: 'none' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0.25) 0%,rgba(13,10,7,0) 30%,rgba(13,10,7,0) 52%,rgba(13,10,7,0.88) 100%)', pointerEvents: 'none' }}></div>
          </div>
          <div data-pj-sweep="" aria-hidden="true" style={{ position: 'absolute', top: '-25%', bottom: '-25%', left: '-45%', width: '38%', zIndex: '8', background: 'linear-gradient(100deg,transparent,rgba(240,214,166,0.10) 42%,rgba(240,214,166,0.20) 50%,rgba(240,214,166,0.10) 58%,transparent)', transform: 'skewX(-14deg)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', top: '0', left: '0', right: '0', zIndex: '10', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'clamp(5.2rem,9vh,6.5rem) clamp(1.5rem,5vw,4.5rem) 0', pointerEvents: 'none' }}>
            <span style={{ fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#d2ab6e' }}>Projects — where the work lives</span>
            <div style={{ flex: 'none', textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem', justifyContent: 'flex-end', marginBottom: '0.9rem' }}>
                <span data-pj-num="" style={{ display: 'inline-block', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontWeight: '400', fontSize: '2.4rem', color: '#f1e9db', lineHeight: '1' }}>01</span>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.15rem', color: '#b0a28d' }}>/ 06</span>
              </div>
              <div aria-hidden="true" style={{ width: 'clamp(90px,12vw,150px)', height: '1px', background: 'rgba(176,162,141,0.25)' }}>
                <div data-pj-prog="" style={{ width: '100%', height: '100%', background: '#b3784a', transform: 'scaleX(0)', transformOrigin: 'left center' }}></div>
              </div>
            </div>
          </div>
          <nav data-pj-rail="" data-wide-only="" data-wide-disp="flex" aria-label="Projects" style={{ position: 'absolute', right: 'clamp(1.5rem,4vw,4.2rem)', top: '50%', transform: 'translateY(-50%)', zIndex: '10', display: 'flex', flexDirection: 'column', gap: '1.05rem', textAlign: 'right' }}>
            <button className="lg21" data-pj-jump="0" type="button" style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', fontFamily: "'Jost',sans-serif", fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(241,233,219,0.4)', display: 'flex', alignItems: 'center', gap: '0.65rem', justifyContent: 'flex-end', transition: 'color 0.4s' }} >
              <span data-pj-dash="" aria-hidden="true" style={{ display: 'inline-block', width: '12px', height: '1px', background: 'rgba(176,162,141,0.35)', transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1),background 0.5s' }}></span>
              <span>Suspended Leaf Cluster</span>
            </button>
            <button className="lg22" data-pj-jump="1" type="button" style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', fontFamily: "'Jost',sans-serif", fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(241,233,219,0.4)', display: 'flex', alignItems: 'center', gap: '0.65rem', justifyContent: 'flex-end', transition: 'color 0.4s' }} >
              <span data-pj-dash="" aria-hidden="true" style={{ display: 'inline-block', width: '12px', height: '1px', background: 'rgba(176,162,141,0.35)', transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1),background 0.5s' }}></span>
              <span>Crystal Cascade</span>
            </button>
            <button className="lg23" data-pj-jump="2" type="button" style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', fontFamily: "'Jost',sans-serif", fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(241,233,219,0.4)', display: 'flex', alignItems: 'center', gap: '0.65rem', justifyContent: 'flex-end', transition: 'color 0.4s' }} >
              <span data-pj-dash="" aria-hidden="true" style={{ display: 'inline-block', width: '12px', height: '1px', background: 'rgba(176,162,141,0.35)', transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1),background 0.5s' }}></span>
              <span>Alabaster Lattice</span>
            </button>
            <button className="lg24" data-pj-jump="3" type="button" style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', fontFamily: "'Jost',sans-serif", fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(241,233,219,0.4)', display: 'flex', alignItems: 'center', gap: '0.65rem', justifyContent: 'flex-end', transition: 'color 0.4s' }} >
              <span data-pj-dash="" aria-hidden="true" style={{ display: 'inline-block', width: '12px', height: '1px', background: 'rgba(176,162,141,0.35)', transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1),background 0.5s' }}></span>
              <span>Rings of Light</span>
            </button>
            <button className="lg25" data-pj-jump="4" type="button" style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', fontFamily: "'Jost',sans-serif", fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(241,233,219,0.4)', display: 'flex', alignItems: 'center', gap: '0.65rem', justifyContent: 'flex-end', transition: 'color 0.4s' }} >
              <span data-pj-dash="" aria-hidden="true" style={{ display: 'inline-block', width: '12px', height: '1px', background: 'rgba(176,162,141,0.35)', transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1),background 0.5s' }}></span>
              <span>Gallery of Glass</span>
            </button>
            <button className="lg26" data-pj-jump="5" type="button" style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', fontFamily: "'Jost',sans-serif", fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(241,233,219,0.4)', display: 'flex', alignItems: 'center', gap: '0.65rem', justifyContent: 'flex-end', transition: 'color 0.4s' }} >
              <span data-pj-dash="" aria-hidden="true" style={{ display: 'inline-block', width: '12px', height: '1px', background: 'rgba(176,162,141,0.35)', transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1),background 0.5s' }}></span>
              <span>Entrance in Alabaster</span>
            </button>
          </nav>
          <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', zIndex: '9', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', padding: '0 clamp(1.5rem,5vw,4.5rem) clamp(2.2rem,6vh,4rem)', pointerEvents: 'none' }}>
            <div style={{ maxWidth: '72%' }}>
              <span data-pj-cat="" style={{ display: 'block', marginBottom: '1rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.74rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d2ab6e' }}>Restaurant · Marasi, Al Khobar</span>
              <h3 data-pj-title="" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2.2rem,5.6vw,4.8rem)', lineHeight: '1.02', letterSpacing: '-0.01em', color: '#f1e9db', margin: '0' }}>Suspended Leaf Cluster</h3>
              <button className="lg27" data-pj-open="" type="button" style={{ pointerEvents: 'auto', alignSelf: 'flex-start', marginTop: '1.3rem', background: 'none', border: '1px solid rgba(210,171,110,0.5)', color: '#f1e9db', padding: '0.75rem 1.6rem', fontFamily: "'Jost',sans-serif", fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.4s,border-color 0.4s' }} >Project details →</button>
            </div>
          </div>
        </div>
        </div>
        <div data-narrow-only="" data-narrow-disp="block" style={{ display: 'none', padding: '0 clamp(1.5rem,5vw,4.5rem)' }}>
          <div style={{ borderTop: '1px solid rgba(176,162,141,0.16)', paddingTop: '2.4rem', marginBottom: '2.4rem' }}>
            <span style={{ display: 'block', marginBottom: '1rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>Projects</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(1.8rem,4vw,3rem)' }}>Where the work lives</h2>
          </div>
          <article style={{ marginBottom: '2.4rem' }}>
            <button data-pj-mopen="0" type="button" style={{ display: 'block', width: '100%', background: 'none', border: 'none', padding: '0', cursor: 'pointer', textAlign: 'left', color: 'inherit', font: 'inherit' }}>
              <span style={{ display: 'block', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(176,162,141,0.14)', background: '#1e1812' }}><span style={{ display: 'block', width: '100%', height: '100%', backgroundImage: "url('assets/projects/01-marasi.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></span></span>
              <span style={{ display: 'block', marginTop: '1.1rem', fontFamily: "'Jost',sans-serif", fontSize: '0.68rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#d2ab6e' }}>Restaurant · Marasi, Al Khobar</span>
              <span style={{ display: 'block', marginTop: '0.4rem', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: '1.9rem', lineHeight: '1.05', color: '#f1e9db' }}>Suspended Leaf Cluster</span>
              <span style={{ display: 'inline-block', marginTop: '0.7rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', borderBottom: '1px solid rgba(179,120,74,0.4)', paddingBottom: '2px' }}>Project details →</span>
            </button>
          </article>
          <article style={{ marginBottom: '2.4rem' }}>
            <button data-pj-mopen="1" type="button" style={{ display: 'block', width: '100%', background: 'none', border: 'none', padding: '0', cursor: 'pointer', textAlign: 'left', color: 'inherit', font: 'inherit' }}>
              <span style={{ display: 'block', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(176,162,141,0.14)', background: '#1e1812' }}><span style={{ display: 'block', width: '100%', height: '100%', backgroundImage: "url('assets/projects/02-crystal-cascade.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></span></span>
              <span style={{ display: 'block', marginTop: '1.1rem', fontFamily: "'Jost',sans-serif", fontSize: '0.68rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#d2ab6e' }}>Private residence · Riyadh</span>
              <span style={{ display: 'block', marginTop: '0.4rem', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: '1.9rem', lineHeight: '1.05', color: '#f1e9db' }}>Crystal Cascade</span>
              <span style={{ display: 'inline-block', marginTop: '0.7rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', borderBottom: '1px solid rgba(179,120,74,0.4)', paddingBottom: '2px' }}>Project details →</span>
            </button>
          </article>
          <article style={{ marginBottom: '2.4rem' }}>
            <button data-pj-mopen="2" type="button" style={{ display: 'block', width: '100%', background: 'none', border: 'none', padding: '0', cursor: 'pointer', textAlign: 'left', color: 'inherit', font: 'inherit' }}>
              <span style={{ display: 'block', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(176,162,141,0.14)', background: '#1e1812' }}><span style={{ display: 'block', width: '100%', height: '100%', backgroundImage: "url('assets/projects/03-alabaster-lattice.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></span></span>
              <span style={{ display: 'block', marginTop: '1.1rem', fontFamily: "'Jost',sans-serif", fontSize: '0.68rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#d2ab6e' }}>Hospitality · Riyadh</span>
              <span style={{ display: 'block', marginTop: '0.4rem', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: '1.9rem', lineHeight: '1.05', color: '#f1e9db' }}>Alabaster Lattice</span>
              <span style={{ display: 'inline-block', marginTop: '0.7rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', borderBottom: '1px solid rgba(179,120,74,0.4)', paddingBottom: '2px' }}>Project details →</span>
            </button>
          </article>
          <article style={{ marginBottom: '2.4rem' }}>
            <button data-pj-mopen="3" type="button" style={{ display: 'block', width: '100%', background: 'none', border: 'none', padding: '0', cursor: 'pointer', textAlign: 'left', color: 'inherit', font: 'inherit' }}>
              <span style={{ display: 'block', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(176,162,141,0.14)', background: '#1e1812' }}><span style={{ display: 'block', width: '100%', height: '100%', backgroundImage: "url('assets/projects/04-rings-of-light.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></span></span>
              <span style={{ display: 'block', marginTop: '1.1rem', fontFamily: "'Jost',sans-serif", fontSize: '0.68rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#d2ab6e' }}>Majlis · Al Bandariyah</span>
              <span style={{ display: 'block', marginTop: '0.4rem', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: '1.9rem', lineHeight: '1.05', color: '#f1e9db' }}>Rings of Light</span>
              <span style={{ display: 'inline-block', marginTop: '0.7rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', borderBottom: '1px solid rgba(179,120,74,0.4)', paddingBottom: '2px' }}>Project details →</span>
            </button>
          </article>
          <article style={{ marginBottom: '2.4rem' }}>
            <button data-pj-mopen="4" type="button" style={{ display: 'block', width: '100%', background: 'none', border: 'none', padding: '0', cursor: 'pointer', textAlign: 'left', color: 'inherit', font: 'inherit' }}>
              <span style={{ display: 'block', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(176,162,141,0.14)', background: '#1e1812' }}><span style={{ display: 'block', width: '100%', height: '100%', backgroundImage: "url('assets/projects/05-gallery-of-glass.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></span></span>
              <span style={{ display: 'block', marginTop: '1.1rem', fontFamily: "'Jost',sans-serif", fontSize: '0.68rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#d2ab6e' }}>Family living · Al Khobar</span>
              <span style={{ display: 'block', marginTop: '0.4rem', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: '1.9rem', lineHeight: '1.05', color: '#f1e9db' }}>Gallery of Glass</span>
              <span style={{ display: 'inline-block', marginTop: '0.7rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', borderBottom: '1px solid rgba(179,120,74,0.4)', paddingBottom: '2px' }}>Project details →</span>
            </button>
          </article>
          <article style={{ marginBottom: '2.4rem' }}>
            <button data-pj-mopen="5" type="button" style={{ display: 'block', width: '100%', background: 'none', border: 'none', padding: '0', cursor: 'pointer', textAlign: 'left', color: 'inherit', font: 'inherit' }}>
              <span style={{ display: 'block', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(176,162,141,0.14)', background: '#1e1812' }}><span style={{ display: 'block', width: '100%', height: '100%', backgroundImage: "url('assets/projects/06-entrance-alabaster.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></span></span>
              <span style={{ display: 'block', marginTop: '1.1rem', fontFamily: "'Jost',sans-serif", fontSize: '0.68rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#d2ab6e' }}>Private residence · Al Khobar</span>
              <span style={{ display: 'block', marginTop: '0.4rem', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: '1.9rem', lineHeight: '1.05', color: '#f1e9db' }}>Entrance in Alabaster</span>
              <span style={{ display: 'inline-block', marginTop: '0.7rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', borderBottom: '1px solid rgba(179,120,74,0.4)', paddingBottom: '2px' }}>Project details →</span>
            </button>
          </article>
        </div>
      </section>
      
      <section data-screen-label="Quote band" style={{ position: 'relative', minHeight: '78vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <div data-clip="" data-speed="0.1" style={{ position: 'absolute', top: '-12%', left: '0', right: '0', bottom: '-12%', zIndex: '0', willChange: 'transform', backgroundImage: "linear-gradient(rgba(15,11,8,0.62),rgba(15,11,8,0.62)),url('assets/site/quote-band.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <span data-sweep="" aria-hidden="true" style={{ position: 'absolute', inset: '0', zIndex: '1', pointerEvents: 'none', transform: 'translateX(-130%)', background: 'linear-gradient(110deg,transparent 38%,rgba(210,171,110,0.22) 50%,transparent 62%)' }}></span>
        <p style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }}>A second view of the showroom, with cascading crystal fixtures over a black marble counter.</p>
        <blockquote data-reveal="" style={{ position: 'relative', zIndex: '2', maxWidth: '18em', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontStyle: 'italic', fontSize: 'clamp(1.8rem,4.4vw,3.2rem)', lineHeight: '1.22', padding: '0 1.5rem' }}>
          <span aria-hidden="true" style={{ display: 'block', width: '54px', height: '1px', background: '#b3784a', margin: '0 auto 2rem' }}></span>
          A chandelier is the one object in a room that is also a source of light.
        </blockquote>
      </section>
      
      <section id="gallery" data-screen-label="Gallery" style={{ padding: 'clamp(5rem,12vh,9rem) 0 0' }}>
        <div data-reveal="" style={{ borderTop: '1px solid rgba(176,162,141,0.16)', margin: '0 clamp(1.5rem,5vw,4.5rem)', paddingTop: '2.4rem', marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ display: 'block', marginBottom: '1rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>Gallery</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(1.8rem,4vw,3rem)' }}>From our clients’ homes</h2>
          </div>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: '1.1rem', color: '#b0a28d' }}>22 photographs, installed &amp; lit</span>
        </div>
        <a data-gal-strip="" href="/gallery" aria-label="Open the full gallery" style={{ display: 'block', position: 'relative', overflow: 'hidden', paddingBottom: 'clamp(5rem,12vh,9rem)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)', cursor: 'pointer' }}>
          <div data-gal-row="-1" data-gal-speed="0.5" style={{ display: 'flex', gap: '1.3rem', width: 'max-content', height: 'clamp(200px,24vw,290px)', willChange: 'transform', marginBottom: '1.3rem' }}>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.562', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/09.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '1.501', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/04.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.750', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/06.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '1.477', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/13.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.750', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/08.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '1.333', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/20.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.563', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/15.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div aria-hidden="true" style={{ display: 'flex', gap: '1.3rem', height: '100%' }}>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.562', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/09.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '1.501', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/04.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.750', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/06.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '1.477', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/13.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.750', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/08.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '1.333', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/20.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.563', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/15.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            </div>
          </div>
          <div data-gal-row="1" data-gal-speed="0.38" style={{ display: 'flex', gap: '1.3rem', width: 'max-content', height: 'clamp(200px,24vw,290px)', willChange: 'transform' }}>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.601', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/19.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '1.502', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/05.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.750', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/07.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '1.221', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/22.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.666', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/21.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '1.502', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/18.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.800', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/17.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div aria-hidden="true" style={{ display: 'flex', gap: '1.3rem', height: '100%' }}>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.601', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/19.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '1.502', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/05.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.750', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/07.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '1.221', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/22.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.666', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/21.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '1.502', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/18.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            <div style={{ flex: 'none', height: '100%', aspectRatio: '0.800', borderRadius: '14px', overflow: 'hidden', background: '#1e1812' }}><div style={{ width: '100%', height: '100%', backgroundImage: "url('assets/gallery/17.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div></div>
            </div>
          </div>
          <span data-gal-cta="" style={{ position: 'absolute', left: '50%', top: 'calc(50% - clamp(2.5rem,6vh,4.5rem))', transform: 'translate(-50%,-50%)', zIndex: '3', display: 'inline-flex', alignItems: 'center', gap: '0.8rem', whiteSpace: 'nowrap', padding: '1.1rem 2.4rem', borderRadius: '999px', border: '1px solid rgba(210,171,110,0.55)', background: 'rgba(13,10,7,0.62)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f1e9db', transition: 'background 0.45s,border-color 0.45s,transform 0.45s cubic-bezier(0.16,1,0.3,1)', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}>Explore the gallery<span aria-hidden="true" style={{ fontSize: '1rem', lineHeight: '1' }}>→</span></span>
        </a>
      </section>
      
      <section id="about" data-screen-label="About us" style={{ padding: '0 clamp(1.5rem,5vw,4.5rem) clamp(6rem,14vh,10rem)', maxWidth: '1500px', margin: '0 auto' }}>
        <div data-reveal="" style={{ borderTop: '1px solid rgba(176,162,141,0.16)', paddingTop: '2.4rem', marginBottom: '3.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <span style={{ display: 'block', marginBottom: '1rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>About us</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2.2rem,5vw,4rem)', lineHeight: '1.08', maxWidth: '13em' }}>Since 2008, light <em style={{ fontStyle: 'italic', color: '#d2ab6e' }}>made to measure.</em></h2>
          </div>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.15rem', color: '#b0a28d', whiteSpace: 'nowrap', paddingBottom: '0.4rem' }}>Al Khobar &amp; Riyadh</span>
        </div>
        <div data-reveal="" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(310px,1fr))', gap: 'clamp(2.4rem,5vw,4.5rem)', alignItems: 'start', marginBottom: '4.5rem' }}>
          <div>
            <p style={{ fontSize: 'clamp(1rem,1.4vw,1.12rem)', lineHeight: '1.9', color: '#b0a28d', fontWeight: '300', marginBottom: '1.6rem' }}>Lighting Design opened its first workshop in Al Khobar in 2008 with a simple conviction: the right chandelier isn't found — it's made. We design, cast and hand-finish every piece for a specific room: its ceiling height, its proportions, the way it holds light in the evening.</p>
            <p style={{ fontSize: 'clamp(1rem,1.4vw,1.12rem)', lineHeight: '1.9', color: '#b0a28d', fontWeight: '300', marginBottom: '2.8rem' }}>From that one workshop we've grown into three showrooms across Al Khobar and Riyadh, lighting homes, majlis, hotels and restaurants across the Kingdom — one commission at a time.</p>
            <div data-stagger="" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '2rem', borderTop: '1px solid rgba(176,162,141,0.16)', paddingTop: '2.2rem' }}>
              <div>
                <span style={{ display: 'block', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: '2rem', color: '#d2ab6e', lineHeight: '1', marginBottom: '0.8rem' }}>01</span>
                <h3 style={{ fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.7rem', color: '#f1e9db' }}>Alabaster</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.75', color: '#b0a28d' }}>Carved and honed — stone that glows from within when lit.</p>
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: '2rem', color: '#d2ab6e', lineHeight: '1', marginBottom: '0.8rem' }}>02</span>
                <h3 style={{ fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.7rem', color: '#f1e9db' }}>Quartz &amp; crystal</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.75', color: '#b0a28d' }}>Hand-cut leaves and drops that scatter light across a room.</p>
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: '2rem', color: '#d2ab6e', lineHeight: '1', marginBottom: '0.8rem' }}>03</span>
                <h3 style={{ fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.7rem', color: '#f1e9db' }}>Brass &amp; bronze</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.75', color: '#b0a28d' }}>Cast frames finished by hand in gold, copper and silver.</p>
              </div>
            </div>
          </div>
          <div>
            <div style={{ position: 'relative', aspectRatio: '4/3', border: '1px solid rgba(176,162,141,0.14)', background: '#1e1812' }}>
              <img src="assets/site/about-showroom.jpg" alt="Inside the Lighting Design showroom" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={{ marginTop: '1rem', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1.05rem', color: '#b0a28d' }}>The workshop — where every commission is cast, cut and finished.</p>
          </div>
        </div>
        <div data-stagger="" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', gap: '2.2rem clamp(2.5rem,7vw,6rem)', borderTop: '1px solid rgba(176,162,141,0.16)', borderBottom: '1px solid rgba(176,162,141,0.16)', padding: '3rem 1rem', marginBottom: '4.5rem', textAlign: 'center' }}>
          <div>
            <span style={{ display: 'block', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2.6rem,5vw,3.6rem)', lineHeight: '1', color: '#d2ab6e' }}><span data-count="18">18</span></span>
            <span style={{ display: 'block', marginTop: '0.8rem', fontSize: '0.7rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#b0a28d' }}>Years of light · since 2008</span>
          </div>
          <div>
            <span style={{ display: 'block', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2.6rem,5vw,3.6rem)', lineHeight: '1', color: '#d2ab6e' }}><span data-count="3">3</span></span>
            <span style={{ display: 'block', marginTop: '0.8rem', fontSize: '0.7rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#b0a28d' }}>Showrooms · Al Khobar &amp; Riyadh</span>
          </div>
          <div>
            <span style={{ display: 'block', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2.6rem,5vw,3.6rem)', lineHeight: '1', color: '#d2ab6e' }}><span data-count="25000" data-suffix="+">25,000+</span></span>
            <span style={{ display: 'block', marginTop: '0.8rem', fontSize: '0.7rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#b0a28d' }}>Installations delivered</span>
          </div>
        </div>
        <div data-reveal="" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid rgba(176,162,141,0.16)', paddingTop: '2.4rem', marginBottom: '3rem' }}>
          <div>
            <span style={{ display: 'block', marginBottom: '1rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>The team</span>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(1.8rem,4vw,3rem)', lineHeight: '1.1' }}>The people who'll light your room</h3>
          </div>
          <p style={{ maxWidth: '26em', fontSize: '0.88rem', lineHeight: '1.75', color: '#b0a28d' }}>One consultant follows your commission from first sketch to installation — visit any showroom or call, and ask for them by name.</p>
        </div>
        <div data-reveal="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 'clamp(150px,17vw,200px)', aspectRatio: '1', borderRadius: '50%', border: '1px solid rgba(210,171,110,0.55)', padding: '8px', boxShadow: '0 0 60px rgba(210,171,110,0.12)' }}>
              <div style={{ position: 'absolute', inset: '8px', borderRadius: '50%', overflow: 'hidden', background: '#1e1812' }}>
                <img src="assets/team/abdulaziz.jpg" alt="" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}  />
              </div>
            </div>
            <span style={{ display: 'block', marginTop: '1.5rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.7rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#d2ab6e' }}>Owner</span>
            <h4 style={{ marginTop: '0.5rem', fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: 'clamp(1.8rem,3vw,2.3rem)', lineHeight: '1.1', color: '#f1e9db' }}>Abdulaziz Al&nbsp;Mulhim</h4>
            <p style={{ marginTop: '0.7rem', fontSize: '0.9rem', lineHeight: '1.75', color: '#b0a28d', maxWidth: '30em' }}>Opened the first Lighting Design workshop in Al Khobar in 2008 — and still reviews every commission that leaves it.</p>
          </div>
          <div aria-hidden="true" style={{ width: '1px', height: 'clamp(28px,4vh,44px)', margin: '1.6rem 0', background: 'linear-gradient(rgba(210,171,110,0.55),rgba(210,171,110,0.12))' }}></div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 'clamp(130px,14vw,168px)', aspectRatio: '1', borderRadius: '50%', border: '1px solid rgba(210,171,110,0.38)', padding: '7px' }}>
              <div style={{ position: 'absolute', inset: '7px', borderRadius: '50%', overflow: 'hidden', background: '#1e1812' }}>
                <img src="assets/team/anas.jpg" alt="" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}  />
              </div>
            </div>
            <span style={{ display: 'block', marginTop: '1.3rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.7rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#b3784a' }}>Chief Executive Officer</span>
            <h4 style={{ marginTop: '0.5rem', fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: 'clamp(1.5rem,2.4vw,1.9rem)', lineHeight: '1.1', color: '#f1e9db' }}>Anas Alakeel</h4>
            <p style={{ marginTop: '0.7rem', fontSize: '0.88rem', lineHeight: '1.75', color: '#b0a28d', maxWidth: '28em' }}>Leads the studio and its three showrooms across Al Khobar and Riyadh.</p>
          </div>
          <div aria-hidden="true" style={{ width: '1px', height: 'clamp(28px,4vh,44px)', margin: '1.6rem 0', background: 'linear-gradient(rgba(210,171,110,0.4),rgba(210,171,110,0.1))' }}></div>
        </div>
        <div data-stagger="" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', columnGap: 'clamp(1.8rem,4vw,3.6rem)', rowGap: '2.6rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'clamp(200px,24vw,250px)' }}>
            <div style={{ position: 'relative', width: 'clamp(110px,12vw,140px)', aspectRatio: '1', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', padding: '6px' }}>
              <div style={{ position: 'absolute', inset: '6px', borderRadius: '50%', overflow: 'hidden', background: '#1e1812' }}>
                <img src="assets/team/fikri.jpg" alt="" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}  />
              </div>
            </div>
            <h4 style={{ marginTop: '1.2rem', fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.45rem', color: '#f1e9db' }}>Fikri Al-Sabri</h4>
            <span style={{ display: 'block', marginTop: '0.35rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b3784a' }}>Branch Manager</span>
            <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.7', color: '#b0a28d', minHeight: '2.9rem' }}>Lighting Design (Main) — Al Khobar</p>
            <div style={{ display: 'flex', gap: '1.1rem', marginTop: '0.7rem', justifyContent: 'center', alignItems: 'center' }}>
              <a className="lg28" href="tel:+966550688580" style={{ fontSize: '0.78rem', letterSpacing: '0.1em', color: '#b0a28d', borderBottom: '1px solid rgba(176,162,141,0.35)', paddingBottom: '2px', transition: 'color 0.4s,border-color 0.4s' }} >+966 55 068 8580</a>
              <a className="lg29" href="https://wa.me/966550688580" target="_blank" rel="noopener" aria-label="WhatsApp" style={{ flex: 'none', width: '30px', height: '30px', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.4s,background 0.4s' }} ><svg width="15" height="15" viewBox="0 0 24 24" fill="#d2ab6e" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7.2 3.9zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z"></path></svg></a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'clamp(200px,24vw,250px)' }}>
            <div style={{ position: 'relative', width: 'clamp(110px,12vw,140px)', aspectRatio: '1', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', padding: '6px' }}>
              <div style={{ position: 'absolute', inset: '6px', borderRadius: '50%', overflow: 'hidden', background: '#1e1812' }}>
                <img src="assets/team/fatima.jpg" alt="" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}  />
              </div>
            </div>
            <h4 style={{ marginTop: '1.2rem', fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.45rem', color: '#f1e9db' }}>Fatimah Asiri</h4>
            <span style={{ display: 'block', marginTop: '0.35rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b3784a' }}>Sales Manager · Social Media</span>
            <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.7', color: '#b0a28d', minHeight: '2.9rem' }}>Lighting Design (Main) — Al Khobar</p>
            <div style={{ display: 'flex', gap: '1.1rem', marginTop: '0.7rem', justifyContent: 'center', alignItems: 'center' }}>
              <a className="lg30" href="tel:+966550683383" style={{ fontSize: '0.78rem', letterSpacing: '0.1em', color: '#b0a28d', borderBottom: '1px solid rgba(176,162,141,0.35)', paddingBottom: '2px', transition: 'color 0.4s,border-color 0.4s' }} >+966 55 068 3383</a>
              <a className="lg31" href="https://wa.me/966550683383" target="_blank" rel="noopener" aria-label="WhatsApp" style={{ flex: 'none', width: '30px', height: '30px', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.4s,background 0.4s' }} ><svg width="15" height="15" viewBox="0 0 24 24" fill="#d2ab6e" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7.2 3.9zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z"></path></svg></a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'clamp(200px,24vw,250px)' }}>
            <div style={{ position: 'relative', width: 'clamp(110px,12vw,140px)', aspectRatio: '1', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', padding: '6px' }}>
              <div style={{ position: 'absolute', inset: '6px', borderRadius: '50%', overflow: 'hidden', background: '#1e1812' }}>
                <img src="assets/team/mahmoud.jpg" alt="" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}  />
              </div>
            </div>
            <h4 style={{ marginTop: '1.2rem', fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.45rem', color: '#f1e9db' }}>Eng. Mahmoud Dahhan</h4>
            <span style={{ display: 'block', marginTop: '0.35rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b3784a' }}>Branch Manager</span>
            <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.7', color: '#b0a28d', minHeight: '2.9rem' }}>Lighting Design + — Al Takhassusi, Riyadh</p>
            <div style={{ display: 'flex', gap: '1.1rem', marginTop: '0.7rem', justifyContent: 'center', alignItems: 'center' }}>
              <a className="lg32" href="tel:+966504878338" style={{ fontSize: '0.78rem', letterSpacing: '0.1em', color: '#b0a28d', borderBottom: '1px solid rgba(176,162,141,0.35)', paddingBottom: '2px', transition: 'color 0.4s,border-color 0.4s' }} >+966 50 487 8338</a>
              <a className="lg33" href="https://wa.me/966504878338" target="_blank" rel="noopener" aria-label="WhatsApp" style={{ flex: 'none', width: '30px', height: '30px', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.4s,background 0.4s' }} ><svg width="15" height="15" viewBox="0 0 24 24" fill="#d2ab6e" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7.2 3.9zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z"></path></svg></a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'clamp(200px,24vw,250px)' }}>
            <div style={{ position: 'relative', width: 'clamp(110px,12vw,140px)', aspectRatio: '1', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', padding: '6px' }}>
              <div style={{ position: 'absolute', inset: '6px', borderRadius: '50%', overflow: 'hidden', background: '#1e1812' }}>
                <img src="assets/team/saad.jpg" alt="" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}  />
              </div>
            </div>
            <h4 style={{ marginTop: '1.2rem', fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.45rem', color: '#f1e9db' }}>Saad Dahhan</h4>
            <span style={{ display: 'block', marginTop: '0.35rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b3784a' }}>Branch Manager</span>
            <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', lineHeight: '1.7', color: '#b0a28d', minHeight: '2.9rem' }}>Lighting Design + — Al Bandariyah, Al Khobar</p>
            <div style={{ display: 'flex', gap: '1.1rem', marginTop: '0.7rem', justifyContent: 'center', alignItems: 'center' }}>
              <a className="lg34" href="tel:+966530158338" style={{ fontSize: '0.78rem', letterSpacing: '0.1em', color: '#b0a28d', borderBottom: '1px solid rgba(176,162,141,0.35)', paddingBottom: '2px', transition: 'color 0.4s,border-color 0.4s' }} >+966 53 015 8338</a>
              <a className="lg35" href="https://wa.me/966530158338" target="_blank" rel="noopener" aria-label="WhatsApp" style={{ flex: 'none', width: '30px', height: '30px', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.4s,background 0.4s' }} ><svg width="15" height="15" viewBox="0 0 24 24" fill="#d2ab6e" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7.2 3.9zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z"></path></svg></a>
            </div>
          </div>
        </div>
      </section>
      
      <section data-screen-label="Materials" style={{ padding: '0 0 clamp(6rem,14vh,10rem)' }}>
        <div style={{ padding: '0 clamp(1.5rem,5vw,4.5rem)' }}><div data-reveal="" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', flexWrap: 'wrap', margin: '0 auto 2.6rem', maxWidth: '1500px', borderTop: '1px solid rgba(176,162,141,0.16)', paddingTop: '2.4rem' }}>
          <div>
            <span style={{ display: 'block', marginBottom: '1rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>Materials</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(1.8rem,4vw,3rem)' }}>Up close</h2>
          </div>
          <span aria-hidden="true" style={{ fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b0a28d', paddingBottom: '0.5rem' }}>Scroll →</span>
        </div>
        </div>
        <div data-stagger="" style={{ display: 'flex', gap: '1.2rem', overflowX: 'auto', scrollSnapType: 'x proximity', padding: '0 max(clamp(1.5rem,5vw,4.5rem),calc((100vw - 1500px)/2)) 1.2rem', scrollPaddingLeft: 'max(clamp(1.5rem,5vw,4.5rem),calc((100vw - 1500px)/2))', scrollbarWidth: 'none' }}>
          <div style={{ flex: 'none', width: 'clamp(240px,26vw,330px)', aspectRatio: '3/4', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(176,162,141,0.14)', scrollSnapAlign: 'start', background: '#1e1812' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/gallery/13.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 40%' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 55%,rgba(13,10,7,0.72))' }}></div>
            <div style={{ position: 'absolute', left: '1.4rem', right: '1.4rem', bottom: '1.3rem' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.5rem', color: '#f1e9db', marginBottom: '0.25rem' }}>Alabaster</h3>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#d2ab6e' }}>Glows from within</span>
            </div>
          </div>
          <div style={{ flex: 'none', width: 'clamp(240px,26vw,330px)', aspectRatio: '3/4', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(176,162,141,0.14)', scrollSnapAlign: 'start', background: '#1e1812' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/gallery/16.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 35%' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 55%,rgba(13,10,7,0.72))' }}></div>
            <div style={{ position: 'absolute', left: '1.4rem', right: '1.4rem', bottom: '1.3rem' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.5rem', color: '#f1e9db', marginBottom: '0.25rem' }}>Crystal &amp; glass</h3>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#d2ab6e' }}>Scatters the light</span>
            </div>
          </div>
          <div style={{ flex: 'none', width: 'clamp(240px,26vw,330px)', aspectRatio: '3/4', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(176,162,141,0.14)', scrollSnapAlign: 'start', background: '#1e1812' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/site/material-brass.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 55%,rgba(13,10,7,0.72))' }}></div>
            <div style={{ position: 'absolute', left: '1.4rem', right: '1.4rem', bottom: '1.3rem' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.5rem', color: '#f1e9db', marginBottom: '0.25rem' }}>Brass &amp; gold</h3>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#d2ab6e' }}>Finished by hand</span>
            </div>
          </div>
          <div style={{ flex: 'none', width: 'clamp(240px,26vw,330px)', aspectRatio: '3/4', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(176,162,141,0.14)', scrollSnapAlign: 'start', background: '#1e1812' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/gallery/17.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 45%' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 55%,rgba(13,10,7,0.72))' }}></div>
            <div style={{ position: 'absolute', left: '1.4rem', right: '1.4rem', bottom: '1.3rem' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.5rem', color: '#f1e9db', marginBottom: '0.25rem' }}>Steel &amp; bronze</h3>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#d2ab6e' }}>Drawn into curves</span>
            </div>
          </div>
          <div style={{ flex: 'none', width: 'clamp(240px,26vw,330px)', aspectRatio: '3/4', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(176,162,141,0.14)', scrollSnapAlign: 'start', background: '#1e1812' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', backgroundImage: "url('assets/gallery/08.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 35%' }}></div>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'linear-gradient(rgba(13,10,7,0) 55%,rgba(13,10,7,0.72))' }}></div>
            <div style={{ position: 'absolute', left: '1.4rem', right: '1.4rem', bottom: '1.3rem' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.5rem', color: '#f1e9db', marginBottom: '0.25rem' }}>Frosted quartz</h3>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#d2ab6e' }}>Softens the glare</span>
            </div>
          </div>
        </div>
      </section>
      
      <section id="bespoke" data-screen-label="Bespoke" style={{ position: 'relative', padding: 'clamp(5rem,10vh,8rem) clamp(1.5rem,5vw,4.5rem) clamp(6rem,14vh,10rem)', backgroundColor: '#5e3a22', backgroundImage: 'radial-gradient(circle at 18% 28%,rgba(196,134,82,0.55) 0%,transparent 34%),radial-gradient(circle at 74% 22%,rgba(138,90,54,0.6) 0%,transparent 40%),radial-gradient(circle at 58% 72%,rgba(58,36,20,0.72) 0%,transparent 46%),radial-gradient(circle at 34% 82%,rgba(210,171,110,0.28) 0%,transparent 36%),radial-gradient(circle at 88% 64%,rgba(34,21,12,0.7) 0%,transparent 42%),radial-gradient(circle at 8% 62%,rgba(111,69,37,0.55) 0%,transparent 40%),radial-gradient(circle at 46% 8%,rgba(89,55,32,0.5) 0%,transparent 30%)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '0', background: 'rgba(18,12,7,0.46)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'relative', zIndex: '2', maxWidth: '1500px', margin: '0 auto' }}>
          <div data-reveal="" style={{ borderTop: '1px solid rgba(241,233,219,0.22)', paddingTop: '2.4rem', marginBottom: '3.2rem' }}>
            <span style={{ display: 'block', marginBottom: '1rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#d2ab6e' }}>Bespoke</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2.2rem,5vw,4rem)', lineHeight: '1.08', maxWidth: '14em' }}>For a room that deserves <em style={{ fontStyle: 'italic', color: '#d2ab6e' }}>one of one.</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 'clamp(2.4rem,5vw,5rem)', alignItems: 'start' }}>
            <div data-reveal="">
              <p style={{ color: '#e2cfb6', fontSize: 'clamp(1rem,1.4vw,1.12rem)', lineHeight: '1.9', maxWidth: '30em', marginBottom: '1.4rem' }}>Most of what we make is commissioned. Bring us a ceiling height, a stairwell, a feeling you're after — and we'll design a piece that exists nowhere else, scaled and lit for that exact space.</p>
              <p style={{ color: '#e2cfb6', fontSize: '0.9rem', lineHeight: '1.8', maxWidth: '28em', marginBottom: '2.6rem' }}>A commission typically takes 8–12 weeks from first sketch to installation. One consultant follows it the whole way.</p>
            </div>
            <div data-stagger="" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'clamp(64px,7vw,96px) 1fr', gap: '1.4rem', padding: '1.6rem 0', borderTop: '1px solid rgba(241,233,219,0.22)' }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontStyle: 'italic', fontSize: 'clamp(2.2rem,3.4vw,3rem)', lineHeight: '1', color: '#d2ab6e' }}>01</span>
                <div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '500', fontSize: '1.35rem', marginBottom: '0.5rem', color: '#f1e9db' }}>Sketch</h4>
                  <p style={{ color: '#e2cfb6', fontSize: '0.94rem', lineHeight: '1.75', maxWidth: '30em' }}>We meet in the showroom, study your space, and sketch toward a single idea.</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'clamp(64px,7vw,96px) 1fr', gap: '1.4rem', padding: '1.6rem 0', borderTop: '1px solid rgba(241,233,219,0.22)' }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontStyle: 'italic', fontSize: 'clamp(2.2rem,3.4vw,3rem)', lineHeight: '1', color: '#d2ab6e' }}>02</span>
                <div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '500', fontSize: '1.35rem', marginBottom: '0.5rem', color: '#f1e9db' }}>Material</h4>
                  <p style={{ color: '#e2cfb6', fontSize: '0.94rem', lineHeight: '1.75', maxWidth: '30em' }}>Alabaster, cut crystal or brass — chosen by hand for how it holds your room's light.</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'clamp(64px,7vw,96px) 1fr', gap: '1.4rem', padding: '1.6rem 0', borderTop: '1px solid rgba(241,233,219,0.22)' }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontStyle: 'italic', fontSize: 'clamp(2.2rem,3.4vw,3rem)', lineHeight: '1', color: '#d2ab6e' }}>03</span>
                <div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '500', fontSize: '1.35rem', marginBottom: '0.5rem', color: '#f1e9db' }}>Casting</h4>
                  <p style={{ color: '#e2cfb6', fontSize: '0.94rem', lineHeight: '1.75', maxWidth: '30em' }}>The piece is built and wired by hand in our atelier, then hung and lit to test.</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'clamp(64px,7vw,96px) 1fr', gap: '1.4rem', padding: '1.6rem 0', borderTop: '1px solid rgba(241,233,219,0.22)', borderBottom: '1px solid rgba(241,233,219,0.22)' }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontStyle: 'italic', fontSize: 'clamp(2.2rem,3.4vw,3rem)', lineHeight: '1', color: '#d2ab6e' }}>04</span>
                <div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '500', fontSize: '1.35rem', marginBottom: '0.5rem', color: '#f1e9db' }}>Installation</h4>
                  <p style={{ color: '#e2cfb6', fontSize: '0.94rem', lineHeight: '1.75', maxWidth: '30em' }}>We install it ourselves and stay until the light falls exactly as intended.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="visit" data-reveal="" data-screen-label="Visit" style={{ padding: 'clamp(6rem,14vh,10rem) clamp(1.5rem,5vw,4.5rem)', textAlign: 'center' }}>
        <span style={{ display: 'block', marginBottom: '1.8rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>Visit</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(2.4rem,5.5vw,4.2rem)', marginBottom: '1.4rem' }}>See it lit, in person.</h2>
        <p style={{ color: '#b0a28d', maxWidth: '30em', margin: '0 auto 2.8rem', fontSize: '1.05rem' }}>Photographs only do so much. The showroom is built to show how each piece behaves once the lights are low — you're welcome to come and stand beneath them.</p>
        <a className="lg36" href="#visit" style={{ fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '1.05rem 2.2rem', border: '1px solid #b3784a', color: '#f1e9db', background: 'rgba(179,120,74,0.08)', transition: 'background 0.45s,letter-spacing 0.45s', display: 'inline-block' }} >Our showrooms</a>
        <div data-stagger="" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '2.4rem', maxWidth: '900px', margin: '4rem auto 0', borderTop: '1px solid rgba(176,162,141,0.16)', paddingTop: '3rem', textAlign: 'left' }}>
          <div>
            <span style={{ display: 'block', marginBottom: '0.9rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>Main showroom</span>
            <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.35rem', marginBottom: '0.55rem', color: '#f1e9db' }}>Lighting Design</h4>
            <p style={{ margin: '0', color: '#b0a28d', fontSize: '0.94rem', lineHeight: '1.6' }}>King Khalid Street, Intersection 16<br />Ash Shamaliyah, Al Khobar</p>
            <iframe src="https://maps.google.com/maps?q=King%20Khalid%20Street%2C%20Ash%20Shamaliyah%2C%20Al%20Khobar%2C%20Saudi%20Arabia&amp;z=15&amp;output=embed" title="Map — Lighting Design main showroom, Al Khobar" loading="lazy" style={{ display: 'block', width: '100%', height: '170px', border: '1px solid rgba(176,162,141,0.2)', borderRadius: '14px', marginTop: '1.2rem', filter: 'grayscale(1) invert(0.9) hue-rotate(180deg) contrast(0.88)', opacity: '0.9' }}></iframe>
            <a className="lg37" href="https://www.google.com/maps/dir/?api=1&amp;destination=King%20Khalid%20Street%2C%20Ash%20Shamaliyah%2C%20Al%20Khobar%2C%20Saudi%20Arabia" target="_blank" rel="noopener" style={{ display: 'inline-block', marginTop: '0.9rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', borderBottom: '1px solid rgba(179,120,74,0.4)', paddingBottom: '2px', transition: 'color 0.4s,border-color 0.4s' }} >Get directions →</a>
          </div>
          <div>
            <span style={{ display: 'block', marginBottom: '0.9rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>Lighting Design +</span>
            <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.35rem', marginBottom: '0.55rem', color: '#f1e9db' }}>Al Bandariyah</h4>
            <p style={{ margin: '0', color: '#b0a28d', fontSize: '0.94rem', lineHeight: '1.6' }}>King Faisal Ibn Abd Al Aziz<br />Al Bandariyah, Al Khobar 31952</p>
            <iframe src="https://maps.google.com/maps?q=King%20Faisal%20Ibn%20Abd%20Al%20Aziz%2C%20Al%20Bandariyah%2C%20Al%20Khobar%2031952%2C%20Saudi%20Arabia&amp;z=15&amp;output=embed" title="Map — Lighting Design +, Al Bandariyah" loading="lazy" style={{ display: 'block', width: '100%', height: '170px', border: '1px solid rgba(176,162,141,0.2)', borderRadius: '14px', marginTop: '1.2rem', filter: 'grayscale(1) invert(0.9) hue-rotate(180deg) contrast(0.88)', opacity: '0.9' }}></iframe>
            <a className="lg38" href="https://www.google.com/maps/dir/?api=1&amp;destination=King%20Faisal%20Ibn%20Abd%20Al%20Aziz%2C%20Al%20Bandariyah%2C%20Al%20Khobar%2031952%2C%20Saudi%20Arabia" target="_blank" rel="noopener" style={{ display: 'inline-block', marginTop: '0.9rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', borderBottom: '1px solid rgba(179,120,74,0.4)', paddingBottom: '2px', transition: 'color 0.4s,border-color 0.4s' }} >Get directions →</a>
          </div>
          <div>
            <span style={{ display: 'block', marginBottom: '0.9rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>Lighting Design +</span>
            <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.35rem', marginBottom: '0.55rem', color: '#f1e9db' }}>Riyadh</h4>
            <p style={{ margin: '0', color: '#b0a28d', fontSize: '0.94rem', lineHeight: '1.6' }}>Al Takhassusi Street<br />Riyadh</p>
            <iframe src="https://maps.google.com/maps?q=Al%20Takhassusi%20Street%2C%20Riyadh%2C%20Saudi%20Arabia&amp;z=14&amp;output=embed" title="Map — Lighting Design +, Riyadh" loading="lazy" style={{ display: 'block', width: '100%', height: '170px', border: '1px solid rgba(176,162,141,0.2)', borderRadius: '14px', marginTop: '1.2rem', filter: 'grayscale(1) invert(0.9) hue-rotate(180deg) contrast(0.88)', opacity: '0.9' }}></iframe>
            <a className="lg39" href="https://maps.app.goo.gl/t5qVH1Ysrp1WDvD39" target="_blank" rel="noopener" style={{ display: 'inline-block', marginTop: '0.9rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b3784a', borderBottom: '1px solid rgba(179,120,74,0.4)', paddingBottom: '2px', transition: 'color 0.4s,border-color 0.4s' }} >Get directions →</a>
          </div>
        </div>
        <div data-stagger="" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '2.4rem', maxWidth: '640px', margin: '2.6rem auto 0', textAlign: 'left' }}>
          <div>
            <span style={{ display: 'block', marginBottom: '0.7rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>Phone</span>
            <p style={{ margin: '0', fontSize: '0.96rem' }}><a className="lg40" href="tel:+966540537677" style={{ color: '#f1e9db', transition: 'color 0.4s' }} >+966 54 053 7677</a></p>
          </div>
          <div>
            <span style={{ display: 'block', marginBottom: '0.7rem', fontFamily: "'Jost',sans-serif", fontWeight: '400', fontSize: '0.72rem', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#b3784a' }}>Enquiries</span>
            <p style={{ margin: '0', fontSize: '0.96rem', wordBreak: 'break-word' }}><a className="lg41" href="mailto:info@lightingdesign-ksa.com" style={{ color: '#f1e9db', transition: 'color 0.4s' }} >info@lightingdesign-ksa.com</a></p>
          </div>
        </div>
      </section>
      
      <footer data-screen-label="Footer" style={{ borderTop: '1px solid rgba(176,162,141,0.16)', padding: '4rem clamp(1.5rem,5vw,4.5rem) 2.4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: '2.8rem', maxWidth: '1500px', margin: '0 auto 3.2rem' }}>
          <div>
            <span style={{ display: 'block', fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: '1.3rem', letterSpacing: '0.22em', marginBottom: '1rem' }}>LIGHTING DESIGN</span>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.75', color: '#b0a28d', maxWidth: '22em', marginBottom: '1.4rem' }}>Bespoke chandeliers and lighting in alabaster, crystal and brass — made to measure since 2008.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              <a className="lg42" href="https://wa.me/966540537677?text=Hello%20Lighting%20Design%2C%20I%27d%20like%20to%20enquire%20about%20a%20piece." target="_blank" rel="noopener" aria-label="WhatsApp" style={{ flex: 'none', width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.4s,background 0.4s' }} ><svg width="19" height="19" viewBox="0 0 24 24" fill="#d2ab6e" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.2-.8-.7-1.3-1.5-1.4-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3z"/></svg></a>
              <a className="lg43" href="tel:+966540537677" aria-label="Call us" style={{ flex: 'none', width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.4s,background 0.4s' }} ><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#d2ab6e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg></a>
              <a className="lg44" href="mailto:info@lightingdesign-ksa.com" aria-label="Email us" style={{ flex: 'none', width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.4s,background 0.4s' }} ><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d2ab6e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg></a>
              <a className="lg45" href="https://www.instagram.com/lighting_design" target="_blank" rel="noopener" aria-label="Instagram" style={{ flex: 'none', width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.4s,background 0.4s' }} ><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d2ab6e" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.6" cy="6.4" r="0.6" fill="#d2ab6e" stroke="none"></circle></svg></a>
              <a className="lg46" href="https://www.facebook.com/anasakellabomalik" target="_blank" rel="noopener" aria-label="Facebook" style={{ flex: 'none', width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.4s,background 0.4s' }} ><svg width="18" height="18" viewBox="0 0 24 24" fill="#d2ab6e" aria-hidden="true"><path d="M13.4 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2H10V21h3.4z"/></svg></a>
              <a className="lg47" href="https://www.tiktok.com/@lighting.design0" target="_blank" rel="noopener" aria-label="TikTok" style={{ flex: 'none', width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(176,162,141,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.4s,background 0.4s' }} ><svg width="17" height="17" viewBox="0 0 24 24" fill="#d2ab6e" aria-hidden="true"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.59-2.39V9.86a5.74 5.74 0 1 0 4.15 5.54V8.91a7.35 7.35 0 0 0 4.3 1.38V7.2a4.3 4.3 0 0 1-2.71-1.38z"/></svg></a>
            </div>
          </div>
          <div>
            <span style={{ display: 'block', marginBottom: '1.2rem', fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b3784a' }}>Explore</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.86rem', color: '#b0a28d' }}>
              <a className="lg48" href="#collections" style={{ transition: 'color 0.4s' }} >Collections</a>
              <a className="lg49" href="#projects" style={{ transition: 'color 0.4s' }} >Projects</a>
              <a className="lg50" href="/gallery" style={{ transition: 'color 0.4s' }} >Gallery</a>
              <a className="lg51" href="#about" style={{ transition: 'color 0.4s' }} >About us</a>
              <a className="lg52" href="#bespoke" style={{ transition: 'color 0.4s' }} >Bespoke</a>
              <a className="lg53" href="#visit" style={{ transition: 'color 0.4s' }} >Visit</a>
            </div>
          </div>
          <div>
            <span style={{ display: 'block', marginBottom: '1.2rem', fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b3784a' }}>Showrooms</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.86rem', color: '#b0a28d', lineHeight: '1.6' }}>
              <div><span style={{ color: '#f1e9db' }}>Lighting Design — Main</span><br />King Khalid St, Intersection 16, Al Khobar</div>
              <div><span style={{ color: '#f1e9db' }}>Lighting Design +</span><br />King Faisal Ibn Abd Al Aziz, Al Bandariyah, Al Khobar</div>
              <div><span style={{ color: '#f1e9db' }}>Lighting Design +</span><br />Al Takhassusi Street, Riyadh</div>
            </div>
          </div>
          <div>
            <span style={{ display: 'block', marginBottom: '1.2rem', fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b3784a' }}>Contact</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.86rem', color: '#b0a28d' }}>
              <a className="lg54" href="tel:+966540537677" style={{ transition: 'color 0.4s' }} >+966 54 053 7677</a>
              <a className="lg55" href="mailto:info@lightingdesign-ksa.com" style={{ wordBreak: 'break-word', transition: 'color 0.4s' }} >info@lightingdesign-ksa.com</a>
              <a className="lg56" href="https://wa.me/966540537677?text=Hello%20Lighting%20Design%2C%20I%27d%20like%20to%20enquire%20about%20a%20piece." target="_blank" rel="noopener" style={{ transition: 'color 0.4s' }} >WhatsApp us</a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.8rem 2rem', flexWrap: 'wrap', maxWidth: '1500px', margin: '0 auto', borderTop: '1px solid rgba(176,162,141,0.12)', paddingTop: '2.2rem', paddingBottom: '5.5rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', color: '#b0a28d', opacity: '0.6' }}>© 2026 Lighting Design · Al Khobar &amp; Riyadh, Saudi Arabia</span>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', color: '#b0a28d', opacity: '0.75' }}>Designed &amp; engineered by <a className="lg57" href="https://www.linkedin.com/in/mohamad-alamo/" target="_blank" rel="noopener" style={{ color: '#d2ab6e', borderBottom: '1px solid rgba(210,171,110,0.35)', paddingBottom: '1px', transition: 'color 0.4s,border-color 0.4s' }} >Mohamad Alamo</a></span>
        </div>
      </footer>
      
      
      <div data-plb="" role="dialog" aria-modal="true" aria-label="Piece viewer" style={{ position: 'fixed', inset: '0', zIndex: '85', background: 'rgba(11,8,5,0.94)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: '0', pointerEvents: 'none', transition: 'opacity 0.45s ease' }}>
        <img data-plb-img="" src="assets/pieces/veil.jpg" alt="Selected piece, full screen" style={{ maxWidth: 'min(88vw,1100px)', maxHeight: '64vh', objectFit: 'contain', borderRadius: '10px', boxShadow: '0 40px 120px rgba(0,0,0,0.6)', transition: 'opacity 0.4s ease,transform 0.5s cubic-bezier(0.16,1,0.3,1)' }} />
        <div style={{ position: 'absolute', bottom: '1.7rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', maxWidth: '86vw', pointerEvents: 'none' }}>
          <span data-plb-title="" style={{ display: 'block', fontFamily: "'Cormorant Garamond',serif", fontWeight: '400', fontSize: '1.6rem', color: '#f1e9db' }}>Veil</span>
          <span data-plb-meta="" style={{ display: 'block', marginTop: '0.35rem', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b0a28d' }}>Chandelier · Alabaster &amp; brass</span>
          <span data-plb-count="" style={{ display: 'block', marginTop: '0.55rem', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '1rem', color: '#b0a28d', letterSpacing: '0.12em' }}>01 / 08</span>
        </div>
        <button className="lg58" data-plb-close="" type="button" aria-label="Close viewer" style={{ position: 'absolute', top: '1.6rem', right: '1.6rem', width: '48px', height: '48px', background: 'none', border: '1px solid rgba(210,171,110,0.35)', borderRadius: '50%', color: '#f1e9db', fontSize: '1.05rem', cursor: 'pointer', transition: 'background 0.4s,border-color 0.4s', lineHeight: '1' }} >✕</button>
        <button className="lg59" data-plb-prev="" type="button" aria-label="Previous piece" style={{ position: 'absolute', left: 'clamp(0.6rem,3vw,2.4rem)', top: '50%', transform: 'translateY(-50%)', width: '54px', height: '54px', background: 'rgba(20,14,9,0.5)', border: '1px solid rgba(210,171,110,0.3)', borderRadius: '50%', color: '#f1e9db', fontSize: '1.25rem', cursor: 'pointer', transition: 'background 0.4s,border-color 0.4s', lineHeight: '1' }} >←</button>
        <button className="lg60" data-plb-next="" type="button" aria-label="Next piece" style={{ position: 'absolute', right: 'clamp(0.6rem,3vw,2.4rem)', top: '50%', transform: 'translateY(-50%)', width: '54px', height: '54px', background: 'rgba(20,14,9,0.5)', border: '1px solid rgba(210,171,110,0.3)', borderRadius: '50%', color: '#f1e9db', fontSize: '1.25rem', cursor: 'pointer', transition: 'background 0.4s,border-color 0.4s', lineHeight: '1' }} >→</button>
      </div>
      
      <div data-pjo="" role="dialog" aria-modal="true" aria-label="Project details" style={{ position: 'fixed', inset: '0', zIndex: '120', display: 'none', opacity: '0', transition: 'opacity 0.45s ease', background: 'rgba(10,7,5,0.6)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
        <div data-pjo-close-bg="" style={{ position: 'absolute', inset: '0', cursor: 'pointer' }}></div>
        <div style={{ position: 'absolute', inset: '0', margin: 'auto', width: 'min(1060px,calc(100% - 1.6rem))', height: 'min(640px,calc(100% - 1.6rem))', display: 'flex', flexWrap: 'wrap', alignContent: 'stretch', overflow: 'auto', background: '#14100c', border: '1px solid rgba(176,162,141,0.22)', borderRadius: '20px', boxShadow: '0 40px 120px rgba(0,0,0,0.6)' }}>
          <div data-pjo-stage="" style={{ flex: '1.15 1 340px', minHeight: '270px', position: 'relative', overflow: 'hidden' }}>
            <div data-pjo-img="" style={{ position: 'absolute', inset: '0', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <button className="lg61" data-pjo-prev="" type="button" aria-label="Previous photo" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', zIndex: '2', width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(210,171,110,0.5)', background: 'rgba(20,14,10,0.72)', color: '#f1e9db', cursor: 'pointer', display: 'grid', placeItems: 'center', fontSize: '1.15rem', lineHeight: '1', padding: '0', transition: 'background 0.4s' }} >‹</button>
            <button className="lg62" data-pjo-next="" type="button" aria-label="Next photo" style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', zIndex: '2', width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(210,171,110,0.5)', background: 'rgba(20,14,10,0.72)', color: '#f1e9db', cursor: 'pointer', display: 'grid', placeItems: 'center', fontSize: '1.15rem', lineHeight: '1', padding: '0', transition: 'background 0.4s' }} >›</button>
            <div data-pjo-dots="" style={{ position: 'absolute', left: '50%', bottom: '1rem', transform: 'translateX(-50%)', zIndex: '2', display: 'flex', gap: '0.5rem' }}></div>
          </div>
          <div style={{ flex: '1 1 320px', padding: 'clamp(1.8rem,4vw,3rem)', display: 'flex', flexDirection: 'column', gap: '1.1rem', justifyContent: 'center' }}>
            <span data-pjo-cat="" style={{ fontFamily: "'Jost',sans-serif", fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#d2ab6e' }}></span>
            <h3 data-pjo-title="" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: '300', fontSize: 'clamp(1.9rem,3.4vw,2.9rem)', lineHeight: '1.05', color: '#f1e9db', margin: '0' }}></h3>
            <p data-pjo-desc="" style={{ fontSize: '0.95rem', lineHeight: '1.85', color: '#b0a28d', margin: '0' }}></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem 1.6rem', borderTop: '1px solid rgba(176,162,141,0.16)', paddingTop: '1.4rem', marginTop: '0.4rem' }}>
              <div><span style={{ display: 'block', fontSize: '0.64rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b3784a', marginBottom: '0.4rem' }}>Location</span><span data-pjo-loc="" style={{ fontSize: '0.92rem', color: '#e2d5bd' }}></span></div>
              <div><span style={{ display: 'block', fontSize: '0.64rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b3784a', marginBottom: '0.4rem' }}>Year</span><span data-pjo-year="" style={{ fontSize: '0.92rem', color: '#e2d5bd' }}></span></div>
              <div><span style={{ display: 'block', fontSize: '0.64rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b3784a', marginBottom: '0.4rem' }}>Scope</span><span data-pjo-scope="" style={{ fontSize: '0.92rem', color: '#e2d5bd' }}></span></div>
              <div><span style={{ display: 'block', fontSize: '0.64rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b3784a', marginBottom: '0.4rem' }}>Materials</span><span data-pjo-fin="" style={{ fontSize: '0.92rem', color: '#e2d5bd' }}></span></div>
            </div>
          </div>
        </div>
        <button className="lg63" data-pjo-close="" type="button" aria-label="Close project details" style={{ position: 'absolute', top: 'clamp(0.9rem,2.5vw,1.8rem)', right: 'clamp(0.9rem,2.5vw,1.8rem)', width: '46px', height: '46px', borderRadius: '50%', border: '1px solid rgba(210,171,110,0.5)', background: 'rgba(20,14,10,0.85)', color: '#f1e9db', fontSize: '1.1rem', lineHeight: '1', cursor: 'pointer', display: 'grid', placeItems: 'center', transition: 'background 0.4s' }} >✕</button>
      </div>
      
      <button className="lg64" data-top-btn="" type="button" aria-label="Back to top" style={{ position: 'fixed', right: 'calc(clamp(1rem,3vw,2rem) + 68px)', bottom: 'clamp(1rem,3vw,2rem)', zIndex: '60', width: '52px', height: '52px', borderRadius: '50%', border: '1px solid rgba(210,171,110,0.5)', background: 'rgba(20,14,10,0.82)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', display: 'grid', placeItems: 'center', cursor: 'pointer', opacity: '0', pointerEvents: 'none', transform: 'translateY(8px)', transition: 'opacity 0.45s ease,transform 0.45s ease,background 0.4s' }} >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 16 V4 M4.5 9.5 L10 4 L15.5 9.5" stroke="#d2ab6e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </button>
      
      <a className="lg65" data-wapp="" href="https://wa.me/966540537677?text=Hello%20Lighting%20Design%2C%20I%27d%20like%20to%20enquire%20about%20a%20piece." target="_blank" rel="noopener" aria-label="Chat with Lighting Design on WhatsApp" style={{ position: 'fixed', right: 'clamp(1rem,3vw,2rem)', bottom: 'clamp(1rem,3vw,2rem)', zIndex: '60', width: '56px', height: '56px', borderRadius: '50%', background: '#1e1812', border: '1px solid rgba(210,171,110,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.45)', opacity: '0', pointerEvents: 'none', transition: 'opacity 0.5s ease,background 0.4s,transform 0.4s,border-color 0.4s' }} >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#d2ab6e" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.2-.8-.7-1.3-1.5-1.4-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3z"/></svg>
      </a>
    </>
  );
}
