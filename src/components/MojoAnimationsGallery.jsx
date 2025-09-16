
import React, { useState, useRef, useEffect } from "react";

const sampleData = [
  // Ceiling - Glowtime
  { id: 'c-g-1', lampType: 'Ceiling', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1gk8PsZqEGrlUNLyRGhF337chf3IAXbW2' },
  { id: 'c-g-2', lampType: 'Ceiling', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1KHwollWVM0mLT-g4vcPIsB-NosAWYRcf' },
  { id: 'c-g-3', lampType: 'Ceiling', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1PXZoPsvT_1anixjWMmFz-C60mureZecL' },
  { id: 'c-g-4', lampType: 'Ceiling', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1IkI3CUfITGfXN9OlkyDUmjhsfOl4N06M' },
  { id: 'c-g-5', lampType: 'Ceiling', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1Emv9cAEwZzYJ6z6DRH5SNcUFtinnCpnR' },
  { id: 'c-g-6', lampType: 'Ceiling', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1UFdGeXuuAWLaSSs36LKfeal6MPkAVsrn' },
  { id: 'c-g-7', lampType: 'Ceiling', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1JoIpSs0Gs8Zki8WF07ktz4s2dT6ipKwj' },
  // Ceiling - Lifestyle
  { id: 'c-lf-1', lampType: 'Ceiling', sampleType: 'Lifestyle', src: 'https://drive.google.com/uc?export=download&id=1hL42-nXNW0L1NWV4acPDHcasidk9_yik' },
  { id: 'c-lf-2', lampType: 'Ceiling', sampleType: 'Lifestyle', src: 'https://drive.google.com/uc?export=download&id=17waZz7vbw2borRcbZp6Quxl3owm_-Bg8' },
  { id: 'c-lf-3', lampType: 'Ceiling', sampleType: 'Lifestyle', src: 'https://drive.google.com/uc?export=download&id=1Qrq4CyKZuXy-vVMG8_MzijgzPxW-MHzW' },
  // Ceiling - Showcase
  { id: 'c-s-1', lampType: 'Ceiling', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=1dsb3gwLX6lUGKzkXEzNMNECoASAA2G8j' },
  { id: 'c-s-2', lampType: 'Ceiling', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=13rbQ1TPUUXZGkh4ryHw57tio51NxxBr3' },
  { id: 'c-s-3', lampType: 'Ceiling', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=14UXIhxA9WFbjynjmXGLlaxN5TdGSiufu' },
  { id: 'c-s-4', lampType: 'Ceiling', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=1iVCqNjtVFeXILuRgb5YHIGHvB-2knvvf' },
  { id: 'c-s-5', lampType: 'Ceiling', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=1V_SarQBDGKjYztklbQ4R0VvOQBxLp9du' },

  // Floor - Glowtime
  { id: 'f-g-1', lampType: 'Floor', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1OxEWcFMOSY9F4mOHOi8Ibk_EIJ2r-jHL' },
  { id: 'f-g-2', lampType: 'Floor', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1OCWQ40XgQblHyh8biLJ5eCpOw-FnYbyX' },
  { id: 'f-g-3', lampType: 'Floor', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1KphjzgZYrZi2Pe8ka1GuYY6lgDDicaII' },
  { id: 'f-g-4', lampType: 'Floor', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=14itk2cFpa5OVSf7kQCCPWUP6eSkmRBmN' },
  // Floor - Lifestyle
  { id: 'f-lf-1', lampType: 'Floor', sampleType: 'Lifestyle', src: 'https://drive.google.com/uc?export=download&id=1ARTMcbGNd3AOm8WP49uvQqhp2UEeAZOM' },
  { id: 'f-lf-2', lampType: 'Floor', sampleType: 'Lifestyle', src: 'https://drive.google.com/uc?export=download&id=1wJJtDodw4xMfpD8b3GN_HHKYfrrerr_S' },
  { id: 'f-lf-3', lampType: 'Floor', sampleType: 'Lifestyle', src: 'https://drive.google.com/uc?export=download&id=1pi0BtIJOinxZ4JSAeJN6VweDTeuZhqjC' },
  { id: 'f-lf-4', lampType: 'Floor', sampleType: 'Lifestyle', src: 'https://drive.google.com/uc?export=download&id=1FxENCFRm-MlWKyaLWuar7iEjLSKgSDWp' },
  // Floor - Showcase
  { id: 'f-s-1', lampType: 'Floor', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=15FVuK8xnO8sCWtTRzrMXH5A_oVR3IYcA' },
  { id: 'f-s-2', lampType: 'Floor', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=1VTnMaUJfcMHfDxLBOfD6FbIYU0XQjv9I' },
  { id: 'f-s-3', lampType: 'Floor', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=1n3IB5Du0cDlTvQcpKVm3uwM2C1Cxjjcc' },
  { id: 'f-s-4', lampType: 'Floor', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=1p7amLD1IGKrtJzOBtSlFEO3eTtAojxX5' },

  // Table - Glowtime
  { id: 't-g-1', lampType: 'Table', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1GXwnedtofg_n_qxB9WK_I4OYmwA8nN-Z' },
  { id: 't-g-2', lampType: 'Table', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1-Ta_l_7YtLuZeg5pQt_Ngk-4qdlYfQY4' },
  { id: 't-g-3', lampType: 'Table', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1LWE8acCPJ6hC1sgCyNDBekcP2GlU0YYm' },
  // Table - Lifestyle
  { id: 't-lf-1', lampType: 'Table', sampleType: 'Lifestyle', src: 'https://drive.google.com/uc?export=download&id=1k8Ba2iRcADGCVA4x3H-yoQ5siF75cxMK' },
  { id: 't-lf-2', lampType: 'Table', sampleType: 'Lifestyle', src: 'https://drive.google.com/uc?export=download&id=19rAuL_BH3Xb1ag786HwfGqJZIl0oxl10' },
  { id: 't-lf-3', lampType: 'Table', sampleType: 'Lifestyle', src: 'https://drive.google.com/uc?export=download&id=1qm6fXFdhBgdBeaa2JFyokRaKo_hryB8Z' },
  // Table - Showcase
  { id: 't-s-1', lampType: 'Table', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=1PnbMIR7JXID9M3LxZfzKhj-fs7_nkCfK' },
  { id: 't-s-2', lampType: 'Table', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=159xsA_q7yxJUGUTZ9gf_Qc_DND7k3izq' },
  { id: 't-s-3', lampType: 'Table', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=1gt2OJ5xPQOk64yFAqM9QuYWk_H_31MQe' },
  { id: 't-s-4', lampType: 'Table', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=19UJ18nnRJ_4-PcOgd2LrzVwauU1dIyqB' },

  // Wall - Glowtime
  { id: 'w-g-1', lampType: 'Wall', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1ZYKJRrUCLILaBCfYP30iZGXvSxZ8kIvU' },
  { id: 'w-g-2', lampType: 'Wall', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1SoFpQ_OFN9PyVboVnc62nSv33gQQlX9X' },
  { id: 'w-g-3', lampType: 'Wall', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1rFC6fFAbpn0MELxxZiJ5p6IU1qN-4Ge3' },
  { id: 'w-g-4', lampType: 'Wall', sampleType: 'Glowtime', src: 'https://drive.google.com/uc?export=download&id=1XR4fX0GgdV_GzjnGviOeTDNL7szGGUjr' },
  // Wall - Lifestyle
  { id: 'w-lf-1', lampType: 'Wall', sampleType: 'Lifestyle', src: 'https://drive.google.com/uc?export=download&id=1emtwHv2afy0JmF3E47OhOiYmrX_toAtf' },
  { id: 'w-lf-2', lampType: 'Wall', sampleType: 'Lifestyle', src: 'https://drive.google.com/uc?export=download&id=1kDpDE7ia9GQmhkKQnBHjfRay5kf24ixS' },
  // Wall - Showcase
  { id: 'w-s-1', lampType: 'Wall', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=1UUgIlJVtz0GNNZ3jEMbLCOh-Av0WUEGA' },
  { id: 'w-s-2', lampType: 'Wall', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=1lXdiA-1Skd5iKKTfz0qSGIYNjytW3GOs' },
  { id: 'w-s-3', lampType: 'Wall', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=1bRb_2_qTnlEoes8AKVibyz2PEXojXaO3' },
  { id: 'w-s-4', lampType: 'Wall', sampleType: 'Showcase', src: 'https://drive.google.com/uc?export=download&id=1fNr0gfOSSAY_QgJqWfczFY1Ma-f70-jf' },
];

const LAMP_TYPES = ['Ceiling', 'Floor', 'Table', 'Wall'];
const SAMPLE_TYPES = ['Showcase', 'Glowtime', 'Lifestyle'];

export default function MojoAnimationsGallery() {
  const [mode, setMode] = useState('lamp'); // 'lamp' = By Lamp Type (default), 'sample' = By Sample Type
  const [activeMain, setActiveMain] = useState(LAMP_TYPES[0]); // default selection for main category
  const [activeSub, setActiveSub] = useState(SAMPLE_TYPES[0]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (mode === 'lamp') { setActiveMain(LAMP_TYPES[0]); setActiveSub(SAMPLE_TYPES[0]); }
    else { setActiveMain(SAMPLE_TYPES[0]); setActiveSub(LAMP_TYPES[0]); }
  }, [mode]);

  const videosToShow = sampleData.filter((s) => {
    if (mode === 'lamp') {
      return s.lampType === activeMain && s.sampleType === activeSub;
    } else {
      return s.sampleType === activeMain && s.lampType === activeSub;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#ffeffa] to-[#eef6ff] text-gray-900">
      <header className="max-w-6xl mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ff4ecd] via-[#a855f7] to-[#2083f8]">Mojo's Animations</h1>
            <p className="mt-3 text-lg md:text-xl text-gray-700 max-w-2xl">Cinematic product videos, made simple. We turn lamp photos into short, scroll-stopping videos that increase engagement and conversions.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="mailto:mojosanimations@gmail.com" className="inline-block px-5 py-3 bg-[#2083f8] text-white rounded-lg shadow hover:opacity-90">Request a Quote</a>
              <a href="https://instagram.com/mojosanimations" target="_blank" rel="noreferrer" className="px-4 py-3 border rounded-lg">Follow on Instagram</a>
            </div>
          </div>
          <div className="hidden md:block w-96 h-56 rounded-2xl overflow-hidden shadow-2xl">
            <video className="w-full h-full object-cover" src={sampleData[0]?.src} autoPlay muted loop playsInline />
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 mb-6">
        <div className="flex items-center gap-3">
          <button onClick={() => setMode('lamp')} className={`px-4 py-2 rounded ${mode==='lamp' ? 'bg-gradient-to-r from-[#ff4ecd] to-[#2083f8] text-white' : 'bg-white border'}`}>By Lamp Type</button>
          <button onClick={() => setMode('sample')} className={`px-4 py-2 rounded ${mode==='sample' ? 'bg-gradient-to-r from-[#ff4ecd] to-[#2083f8] text-white' : 'bg-white border'}`}>By Sample Type</button>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 sm:p-6 mb-6">
          <div className="flex gap-3 flex-wrap mb-4">
            {(mode === 'lamp' ? LAMP_TYPES : SAMPLE_TYPES).map((m) => (
              <button key={m} onClick={() => setActiveMain(m)} className={`px-3 py-2 rounded-full text-sm ${activeMain === m ? 'bg-[#2083f8] text-white' : 'bg-white border'}`}>{m}</button>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            {(mode === 'lamp' ? SAMPLE_TYPES : LAMP_TYPES).map((s) => (
              <button key={s} onClick={() => setActiveSub(s)} className={`px-3 py-2 rounded-full text-sm ${activeSub === s ? 'bg-gradient-to-r from-[#ff4ecd] to-[#a855f7] text-white' : 'bg-white border'}`}>{s}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {videosToShow.map((v) => (
            <div key={v.id} className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg cursor-pointer" onClick={() => setSelectedVideo(v)}>
              <div className="relative w-full h-48 bg-gray-100">
                <video className="w-full h-full object-cover" src={v.src} muted playsInline preload="metadata" />
                <div className="absolute left-2 top-2 bg-black/50 text-white text-xs px-2 py-1 rounded">{v.lampType} • {v.sampleType}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedVideo && <PlayerModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />}

      <CookieBanner />
    </div>
  );
}

function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    try { return !localStorage.getItem('mojo_cookies_accepted'); } catch (e) { return true; }
  });

  if (!visible) return null;
  return (
    <div className="fixed bottom-6 left-6 right-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
      <div className="text-sm text-gray-700">We use cookies to improve your browsing experience and analyze site traffic. By continuing, you consent to our use of cookies.</div>
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 border rounded" onClick={() => { setVisible(false); try{ localStorage.setItem('mojo_cookies_accepted', 'no'); }catch(e){} }}>Decline</button>
        <button className="px-4 py-2 bg-[#2083f8] text-white rounded" onClick={() => { setVisible(false); try{ localStorage.setItem('mojo_cookies_accepted', 'yes'); }catch(e){} }}>Accept</button>
      </div>
    </div>
  );
}

function PlayerModal({ item, onClose }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => setTime(v.currentTime);
    const onDur = () => setDuration(v.duration || 0);
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('loadedmetadata', onDur);
    v.muted = true;
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    return () => {
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('loadedmetadata', onDur);
    };
  }, [item]);

  const togglePlay = () => { const v = videoRef.current; if (!v) return; if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); } };
  const skip = (n) => { const v = videoRef.current; if (!v) return; v.currentTime = Math.max(0, Math.min(v.duration || 0, v.currentTime + n)); };
  const setTimeFromBar = (e) => { const v = videoRef.current; if (!v) return; const rect = e.target.getBoundingClientRect(); const pct = (e.clientX - rect.left) / rect.width; v.currentTime = pct * (v.duration || 0); };
  const changeSpeed = (s) => { const v = videoRef.current; if (!v) return; v.playbackRate = s; setSpeed(s); };
  const toggleMute = () => { const v = videoRef.current; if (!v) return; v.muted = !v.muted; setMuted(v.muted); };
  const format = (sec) => { if (!sec || isNaN(sec)) return '0:00'; const m = Math.floor(sec / 60); const s = Math.floor(sec % 60).toString().padStart(2, '0'); return `${m}:${s}`; };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
        <div className="relative bg-black">
          <video ref={videoRef} src={item.src} className="w-full h-[60vh] md:h-[70vh] object-contain bg-black" controls={false} playsInline />

          <div className="absolute left-0 right-0 bottom-0 p-3 bg-gradient-to-t from-black/60">
            <div className="flex items-center gap-3">
              <button onClick={togglePlay} className="px-3 py-2 bg-white/10 rounded">{playing ? 'Pause' : 'Play'}</button>
              <button onClick={() => skip(-5)} className="px-3 py-2 bg-white/10 rounded">-5s</button>
              <button onClick={() => skip(5)} className="px-3 py-2 bg-white/10 rounded">+5s</button>

              <div className="flex-1">
                <div className="h-2 bg-white/20 rounded cursor-pointer" onClick={setTimeFromBar}>
                  <div style={{ width: duration ? `${(time / duration) * 100}%` : '0%' }} className="h-2 bg-white rounded" />
                </div>
                <div className="flex justify-between text-xs text-gray-200 mt-1">
                  <div>{format(time)}</div>
                  <div>{format(duration)}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <select value={speed} onChange={(e) => changeSpeed(Number(e.target.value))} className="rounded px-2 py-1 text-sm">
                  <option value={0.5}>0.5x</option>
                  <option value={0.75}>0.75x</option>
                  <option value={1}>1x</option>
                  <option value={1.25}>1.25x</option>
                  <option value={1.5}>1.5x</option>
                  <option value={2}>2x</option>
                </select>
                <button onClick={toggleMute} className="px-2 py-1 border rounded text-sm">{muted ? 'Unmute' : 'Mute'}</button>
                <button onClick={() => { const el = videoRef.current; if (!el) return; if (document.fullscreenElement) document.exitFullscreen(); else el.requestFullscreen && el.requestFullscreen(); }} className="px-2 py-1 border rounded text-sm">Fullscreen</button>
                <button onClick={onClose} className="px-3 py-2 bg-white/10 rounded">Close</button>
              </div>
            </div>

            <div className="mt-3 text-sm text-gray-200">{item.lampType} • {item.sampleType}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
