export default function Page() {
  const focus = [
    { title: "Change & Transformation", body: "Design and build change capacity in your organization to create lasting competitive advantage." },
    { title: "Strategy Activation", body: "Translate strategy into sustained action by aligning people, adopting new ways of working, and achieving your vision." },
    { title: "Vision & Strategic Planning", body: "Set direction with a compelling vision and a practical, measurable plan to reach it." },
    { title: "Facilitation", body: "Plan and run high-impact workshops and executive offsites that drive decisions and shared ownership." }
  ];
  const playbooks = [
    { title: "ROI of Change Playbook", href: "#" },
    { title: "Building the Business Case for Transformation", href: "#" },
    { title: "Building A Future-Proof Transformation Office", href: "#" }
  ];
  const webinars = [
    { title: "Change Activation 1: Fundamentals", href: "#" },
    { title: "Measuring the ROI of Change", href: "#" }
  ];
  const podcasts = [
    { title: "Building the Business Case for Change", href: "#" },
    { title: "CFOs Don’t Fund Feelings", href: "#" }
  ];

  return (
    <div>
      <header className="sticky top-0 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight no-underline text-black">ARIC WOOD</a>
          <nav className="flex gap-4 text-xs uppercase tracking-widest">
            {[["#home","Home"],["#focus-areas","Focus Areas"],["#resources","Playbooks | Webinars | Podcasts"],["#book","Book"],["#bio","Bio"],["#contact","Contact"]].map(([href,label])=> (
              <a key={href} href={href} className="no-underline text-black">{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="border-b border-gray-200">
          <div className="container py-16 grid gap-6">
            <h1 className="text-5xl leading-tight tracking-tight m-0" style={{color:"#cc0000"}}>Strategy to Reality</h1>
            <p className="max-w-2xl">My work and ideas across Strategy Activation, Change & Transformation, Vision & Strategic Planning, and Facilitation.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="#focus-areas" className="btn btn-outline">Explore Focus Areas →</a>
              <a href="#resources" className="btn btn-solid">View Resources →</a>
            </div>
          </div>
        </section>

        <section id="focus-areas" className="border-b border-gray-200">
          <div className="container py-12">
            <h2 className="text-2xl m-0">Focus Areas</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
              {focus.map((f) => (
                <div key={f.title} className="card">
                  <h3 className="text-lg m-0">{f.title}</h3>
                  <p className="mt-2">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="border-b border-gray-200">
          <div className="container py-12">
            <h2 className="text-2xl m-0">Resources</h2>
            <p className="mt-2">Download playbooks, view webinars, or listen to podcasts.</p>

            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-widest m-0">Playbooks</h3>
              <ul className="list-none p-0 mt-2 border-y border-gray-200">
                {playbooks.map((p) => (
                  <li key={p.title} className="flex justify-between py-3 border-b border-gray-100">
                    <span>{p.title}</span>
                    <a href={p.href} className="no-underline text-black">Open →</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-widest m-0">Webinars</h3>
              <ul className="list-none p-0 mt-2 border-y border-gray-200">
                {webinars.map((w) => (
                  <li key={w.title} className="flex justify-between py-3 border-b border-gray-100">
                    <span>{w.title}</span>
                    <a href={w.href} className="no-underline text-black">View →</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-widest m-0">Podcasts</h3>
              <ul className="grid gap-2 sm:grid-cols-2 list-none p-0 mt-2">
                {podcasts.map((p) => (
                  <li key={p.title} className="card flex items-center justify-between">
                    <span>{p.title}</span>
                    <a href={p.href} className="no-underline text-black">Listen →</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="book" className="border-b border-gray-200">
          <div className="container py-12 grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl m-0">The Strategy Activation Playbook</h2>
              <p className="mt-3">Organizations spend over $160 billion a year hiring consultants to develop and execute strategies, and yet 80% of corporate strategies fail. Why? Because we forget the most important factor in successfully executing strategy: people.</p>
              <p className="mt-3">With <em>The Strategy Activation Playbook</em>, I share a practical methodology to align and activate the people in your organization to execute your strategy and realize your vision—communicating clearly, equipping teams, and embedding new ways of working.</p>
              <div className="flex gap-3 mt-4 flex-wrap">
                <a href="https://www.amazon.com/Strategy-Activation-Playbook-Practical-Strategies/dp/1637741820?ref_=ast_author_dp&th=1&psc=1" target="_blank" className="btn btn-red">Purchase on Amazon →</a>
                <a href="#contact" className="btn btn-outline">Book a Talk →</a>
              </div>
            </div>
            <div>
              <img src="https://polygeist111.github.io/aric-wood-portfolio-site/book-cover.jpg" alt="Strategy Activation Playbook Cover" className="w-full aspect-[3/4] object-cover rounded-2xl border border-gray-200" />
              <p className="mt-2 text-xs">Cover of The Strategy Activation Playbook</p>
            </div>
          </div>
        </section>

        <section id="bio" className="border-b border-gray-200">
          <div className="container py-12 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-2xl m-0">Bio</h2>
              <p className="mt-3">Aric Wood is a seasoned leader in organizational transformation, with over two decades of experience guiding Fortune 500 companies through strategic change. As CEO of XPLANE, a global design consultancy, he bridged the gap between strategy and execution using visual thinking and human-centered design. He also served as Chief Strategy Officer of Tigerhall, an AI-enabled SaaS platform to accelerate change activation at scale.</p>
              <p className="mt-3">Aric is the author of <em>The Strategy Activation Playbook</em>. His insights have been featured in Forbes, CNN, Business Week, Entrepreneur, and Inc. Magazine. He has served as an Adjunct Professor at PNCA and Arizona State University, and is a sought-after speaker on strategy activation and transformation worldwide.</p>
              <p className="mt-3">He is the founder and Managing Partner of Transformation Architects, and serves on the global Board of Directors for the Association of Change Management Professionals (ACMP) and the Advisory Board of the Executive Council for Leading Change (ECLC).</p>
              <p className="mt-3">With leadership roles at Intuit and Epinions.com, plus strategy work at Bain & Company, Aric brings deep experience in business strategy and innovation. He has also led and served on multiple nonprofit and for‑profit boards. He holds a BA from Johns Hopkins University and an MBA from Harvard Business School.</p>
            </div>
            <div className="lg:col-span-2">
              <img src="https://polygeist111.github.io/aric-wood-portfolio-site/AW5.jpeg" alt="Aric Wood headshot" className="w-full rounded-2xl border border-gray-200 object-cover" />
              <div className="flex gap-3 mt-3 text-sm">
                <a href="#" className="btn btn-outline no-underline">Media Kit</a>
                <a href="#" className="btn btn-outline no-underline">LinkedIn</a>
              </div>
              <p className="mt-2 text-xs">(Replace placeholders with headshot and media kit link)</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container py-12">
            <h2 className="text-2xl m-0">Contact</h2>
            <p className="mt-2">For speaking, advisory, or collaboration inquiries.</p>
            <form className="grid gap-3 sm:grid-cols-2 mt-4" method="POST" action="/api/contact">
              <input name="name" placeholder="Name" className="border border-gray-300 rounded-xl p-2" required />
              <input name="email" type="email" placeholder="Email" className="border border-gray-300 rounded-xl p-2" required />
              <select name="type" defaultValue="general" className="border border-gray-300 rounded-xl p-2 sm:col-span-2">
                <option value="general">General</option>
                <option value="advisory">Advisory / Consulting</option>
                <option value="speaking">Speaking / Talk Request</option>
              </select>
              <input name="event" placeholder="Event name (if speaking)" className="border border-gray-300 rounded-xl p-2" />
              <input name="date" type="date" placeholder="Event date (if speaking)" className="border border-gray-300 rounded-xl p-2" />
              <input name="audience" type="number" placeholder="Audience size (optional)" className="border border-gray-300 rounded-xl p-2 sm:col-span-2" />
              <input type="text" name="_honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
              <textarea name="message" placeholder="Message" rows={4} className="border border-gray-300 rounded-xl p-2 sm:col-span-2" required />
              <button type="submit" className="btn btn-solid sm:col-span-2 w-40">Send →</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200">
        <div className="container py-6 text-sm">© {new Date().getFullYear()} Aric Wood</div>
      </footer>
    </div>
  );
}
