import React from 'react';
import { ShieldCheck, Shield, ShieldAlert, Tv, Trophy, Cast, MonitorPlay, CreditCard } from 'lucide-react';
import { LogoIcon, LogoText } from './components/Logo';

function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 border-none m-0 p-0">

      {/* Navbar */}
      <nav className="w-full bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            <div className="flex items-center gap-3">
              <LogoIcon className="w-9 h-9" />
              <LogoText className="h-5 w-auto" />
            </div>
            <div className="flex space-x-6">
              <a href="#timepass" className="text-[15px] text-gray-700 hover:text-black font-medium">TimePass</a>
              <a href="#download" className="text-[15px] text-gray-700 hover:text-black font-medium">Download</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FEAC00]">
        {/* Brown angled background */}
        <div
          className="absolute inset-0 bg-[#A66A12] z-0"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 95%)' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* Left Content */}
            <div className="text-left text-white max-w-xl">
              <h1 className="text-[32px] sm:text-4xl lg:text-[42px] font-bold leading-[1.2] mb-4 sm:mb-5 tracking-wide">
                TimePass APK Download (v2.4) – <br className="hidden sm:block" />
                <span className="sm:inline block mt-1 sm:mt-0">Your Ultimate Movie Escape</span>
              </h1>

              <p className="text-[14px] sm:text-[15px] mb-6 sm:mb-8 font-medium opacity-90">
                Childhood Comedies & Suspense Thrillers
              </p>

              <a
                id="download"
                href="/Timepass.apk.apk"
                download="Timepass.apk"
                className="inline-block bg-white text-[#A66A12] border-2 border-transparent px-6 py-2.5 rounded text-sm font-bold mb-8 hover:bg-gray-50 transition-colors shadow-sm"
              >
                APK Download
              </a>

              <div className="mb-4">
                <h3 className="text-[14px] sm:text-[15px] font-bold mb-3 tracking-wide">Security Verified</h3>
                <div className="flex gap-3 sm:gap-4 mb-4 items-center">
                  <img src="https://pikashowtv.in/images/cmsecurity.png" alt="CM Security" className="h-6 sm:h-7 w-auto object-contain drop-shadow-sm" />
                  <img src="https://pikashowtv.in/images/lookout.png" alt="Lookout Security" className="h-6 sm:h-7 w-auto object-contain drop-shadow-sm" />
                  <img src="https://pikashowtv.in/images/mcafee.png" alt="McAfee Security" className="h-6 sm:h-7 w-auto object-contain drop-shadow-sm" />
                </div>
                <p className="text-[12px] sm:text-[13px] opacity-90 leading-relaxed font-medium max-w-lg mt-2 pr-0 sm:pr-4">
                  Download the latest TimePass APK v2.4 (2026). No overthinking, no download headaches, and near-zero buffering. You came, you find, you watch!
                </p>
              </div>
            </div>

            {/* Right Side Phone */}
            <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[280px] z-20 mt-8 lg:mt-0 lg:ml-auto lg:mr-0">
              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border-[6px] sm:border-[8px] border-[#111] bg-black shadow-2xl aspect-[9/19] overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-4 sm:h-5 bg-[#111] rounded-b-xl w-24 sm:w-32 mx-auto z-20"></div>
                {/* Screen content */}
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <img src="/screenshot.jpeg" alt="App Screen" className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2rem] pt-1 sm:pt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Intro */}
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <h2 className="text-xl sm:text-[22px] font-bold mb-3 sm:mb-4">What is TimePass?</h2>
          <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-700">
            TimePass APK is a perfectly curated movie streaming app designed to cure choice fatigue. Whether you want to re-watch a classic Bollywood comedy from your childhood or dive into a gripping Hollywood suspense thriller, our app removes the headache of endless scrolling. Movies stream directly from YouTube, ensuring almost negligible buffering. You came, you find, you watch, you feel good—a perfect timepass without any overthinking.
          </p>
        </div>

        {/* Top Features Strip */}
        <div className="mb-16">
          <h2 className="text-[22px] font-bold mb-6">Top Features of TimePass APK</h2>
          <div className="flex flex-wrap justify-between gap-4">
            {/* Feature 1 */}
            <div className="flex-1 min-w-[140px] bg-[#f9f9f9] rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <Tv className="w-8 h-8 text-rose-500 mb-3" />
              <span className="text-[13px] font-medium text-gray-700 leading-tight">Zero Choice<br />Fatigue</span>
            </div>
            {/* Feature 2 */}
            <div className="flex-1 min-w-[140px] bg-[#f9f9f9] rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <Trophy className="w-8 h-8 text-amber-500 mb-3" />
              <span className="text-[13px] font-medium text-gray-700 leading-tight">Childhood<br />Comedies</span>
            </div>
            {/* Feature 3 */}
            <div className="flex-1 min-w-[140px] bg-[#f9f9f9] rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <Cast className="w-8 h-8 text-orange-500 mb-3" />
              <span className="text-[13px] font-medium text-gray-700 leading-tight">Suspense<br />Thrillers</span>
            </div>
            {/* Feature 4 */}
            <div className="flex-1 min-w-[140px] bg-[#f9f9f9] rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <MonitorPlay className="w-8 h-8 text-amber-600 mb-3" />
              <span className="text-[13px] font-medium text-gray-700 leading-tight">Zero<br />Buffering</span>
            </div>
            {/* Feature 5 */}
            <div className="flex-1 min-w-[140px] bg-[#f9f9f9] rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <CreditCard className="w-8 h-8 text-red-500 mb-3" />
              <span className="text-[13px] font-medium text-gray-700 leading-tight">No Download<br />Headache</span>
            </div>
          </div>
        </div>

        {/* Big Yellow Feature Block 1 */}
        <div className="bg-[#FEBF00] rounded-xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-10 text-center shadow-sm mx-2 sm:mx-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">No More Choice Fatigue</h2>
          <p className="text-[14px] sm:text-[15px] font-medium mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop spending 30 minutes just looking for something to watch. We've curated the ultimate selection of Hollywood Suspense Thrillers and pure Bollywood Comedies from our childhood so you can just hit play and instantly feel good.
          </p>
          {/* Two Phone Mockups Side by Side */}
          <div className="flex flex-row justify-center gap-3 sm:gap-6 items-center px-1 sm:px-0">
            <div className="w-1/2 max-w-[150px] sm:max-w-[220px] rounded-[1.2rem] sm:rounded-[2rem] border-[3px] sm:border-[6px] border-white/20 bg-black aspect-[9/19] overflow-hidden shadow-xl">
              <img src="/screenshot.jpeg" alt="App Screen 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 max-w-[150px] sm:max-w-[220px] rounded-[1.2rem] sm:rounded-[2rem] border-[3px] sm:border-[6px] border-white/20 bg-black aspect-[9/19] overflow-hidden shadow-xl">
              <img src="/screenshot2.jpeg" alt="App Screen 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Big Yellow Feature Block 2 */}
        <div className="bg-[#FEBF00] rounded-xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 text-center shadow-sm mx-2 sm:mx-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Lightning Fast YouTube Streaming</h2>
          <p className="text-[14px] sm:text-[15px] font-medium mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Forget about broken links or downloading large video files. Since all our curated movies stream directly through reliable YouTube infrastructure, buffering is almost completely negligible. Enjoy your free time without the headache of loading screens.
          </p>
          {/* Landscape Mockup Image */}
          <div className="mx-auto w-full max-w-lg rounded-xl sm:rounded-2xl border-[4px] sm:border-[8px] border-[#111] bg-black aspect-video overflow-hidden shadow-2xl">
            <img src="/screenshot3.jpeg" alt="Player Screen" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* App Information Table */}
        <div className="mb-12 sm:mb-16 max-w-4xl overflow-x-auto">
          <div className="bg-[#111] text-white py-3 px-4 font-bold text-base sm:text-lg min-w-[500px]">
            TimePass APK Information
          </div>
          <table className="w-full border-collapse bg-white border border-gray-200 text-xs sm:text-sm min-w-[500px]">
            <thead>
              <tr className="bg-[#FEAC00] text-left">
                <th className="p-2 sm:p-3 border text-black font-bold border-gray-200">Feature</th>
                <th className="p-2 sm:p-3 border text-black font-bold border-gray-200">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-semibold border-gray-200">App Name</td>
                <td className="p-3 border border-gray-200">TimePass</td>
              </tr>
              <tr className="bg-[#fcfcfc]">
                <td className="p-3 border font-semibold border-gray-200">Latest Version</td>
                <td className="p-3 border border-gray-200">v2.4</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold border-gray-200">File Size</td>
                <td className="p-3 border border-gray-200">58 MB</td>
              </tr>
              <tr className="bg-[#fcfcfc]">
                <td className="p-3 border font-semibold border-gray-200">Developer</td>
                <td className="p-3 border border-gray-200">TimePass Team</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold border-gray-200">Category</td>
                <td className="p-3 border border-gray-200">Entertainment</td>
              </tr>
              <tr className="bg-[#fcfcfc]">
                <td className="p-3 border font-semibold border-gray-200">Compatibility</td>
                <td className="p-3 border border-gray-200">Android 5.0+</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold border-gray-200">Last Updated</td>
                <td className="p-3 border border-gray-200">5 Min Ago</td>
              </tr>
              <tr className="bg-[#fcfcfc]">
                <td className="p-3 border font-semibold border-gray-200">Downloads</td>
                <td className="p-3 border border-gray-200">9 Billion +</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Extended Features Text */}
        <div className="mb-16">
          <div className="bg-[#111] text-white py-3 px-4 font-bold text-lg mb-6">
            The Perfect TimePass Experience
          </div>
          <p className="text-[14px] text-gray-700 leading-relaxed mb-6">
            We built TimePass App because we were tired of spending our entire evening just looking for a movie. We want you to bypass the paradox of choice.
          </p>

          <h3 className="text-[16px] font-bold mb-2">Curated With Love</h3>
          <p className="text-[14px] text-gray-700 leading-relaxed mb-6">
            You won't find thousands of random titles here. You will find exactly what you are in the mood for: pure Bollywood comedies that bring back nostalgia, and incredibly gripping Hollywood suspense thrillers. <strong className="text-blue-600 underline cursor-pointer">TimePass</strong> makes decisions easy.
          </p>

          <h3 className="text-[16px] font-bold mb-2">No Download Headaches</h3>
          <p className="text-[14px] text-gray-700 leading-relaxed mb-6">
            Streaming should be simple. With TimePass, you don't need to manage storage space on your phone or wait for torrents to finish. It's an instant "click and watch" experience designed for maximum relaxation.
          </p>

          <h3 className="text-[16px] font-bold mb-2">Zero Buffering Infrastructure</h3>
          <p className="text-[14px] text-gray-700 leading-relaxed mb-6">
            Because our catalog is built on top of high-quality YouTube video streams, you get to leverage their global CDN. That means almost negligible buffering, no matter where you are or what device you are using. You came, you find, you watch, you feel good!
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <div className="flex items-center justify-center gap-3 mb-6 transition-transform hover:scale-105">
            <LogoIcon className="w-8 h-8 drop-shadow-sm" />
            <LogoText className="h-6 drop-shadow-sm" />
          </div>
          <p className="font-medium mb-6 max-w-2xl mx-auto text-sm text-gray-400">
            Disclaimer: TimePass organizes publicly available content from third parties (YouTube). It does not host any media files.
          </p>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 font-semibold text-gray-500 text-sm">
            <a href="#" className="hover:text-amber-600">Privacy Policy</a>
            <a href="#" className="hover:text-amber-600">Terms of Service</a>
            <a href="#" className="hover:text-amber-600">DMCA</a>
            <a href="#" className="hover:text-amber-600">Contact Us</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
