import Contact_Form from "./components/contact_form";
import Expanding_Card from "./components/expanding_card";

export default function Page() {
  const placeholder_text_short = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.";
  const placeholder_text_long = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Placerat in id cursus mi pretium tellus duis. Urna tempor pulvinar vivamus fringilla lacus nec metus. Integer nunc posuere ut hendrerit semper vel class. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Mus donec rhoncus eros lobortis nulla molestie mattis. Purus est efficitur laoreet mauris pharetra vestibulum fusce. Sodales consequat magna ante condimentum neque at luctus. Ligula congue sollicitudin erat viverra ac tincidunt nam. Lectus commodo augue arcu dignissim velit aliquam imperdiet. Cras eleifend turpis fames primis vulputate ornare sagittis. Libero feugiat tristique accumsan maecenas potenti ultricies habitant. Cubilia curae hac habitasse platea dictumst lorem ipsum. Faucibus ex sapien vitae pellentesque sem placerat in. Tempus leo eu aenean sed diam urna tempor." 
  const focus = [
    { title: "Change & Transformation", 
      body: "Design and build change capacity in your organization to create lasting competitive advantage.", 
      detail: "Change has become a permanent operating condition for modern organizations. Yet most transformations still fail, not because the strategy is wrong, but because organizations underestimate the human and systemic effort required to carry change through. I work with leaders to design and build change capacity as a core organizational capability, not a one-time initiative.\n\
        My approach is grounded in experience inside complex transformations - working with executive teams, transformation offices, and frontline leaders navigating real constraints. Together, we identify where change is breaking down, where capacity is being consumed, and how competing priorities are eroding momentum. From there, we design practical interventions that strengthen the organization’s ability to absorb, adapt, and sustain change over time.\n\
        The goal is durable advantage. Organizations that build change capacity outperform peers because they can move faster, execute more consistently, and adapt without burning out their people. Change stops being episodic and starts becoming a strategic asset." },
    { title: "Strategy Activation", 
      body: "Translate strategy into sustained action by aligning people, adopting new ways of working, and achieving your vision.", 
      detail: "Strategy does not fail in the planning, it fails in execution. Too often, well-intended strategies stall because they never translate into clear priorities, new behaviors, or sustained action across the organization. Strategy activation is the discipline of closing that gap through a human-centered approach to adopting new ways of working.\n\
        I work with leaders to move strategy from aspiration to action - aligning leaders, teams, and systems around what must change now. This includes clarifying trade-offs, redefining ways of working, and ensuring people understand not just what is changing, but why it matters and how they contribute.\n\
        When strategy is activated effectively, momentum builds, and a movement is created. People see progress, decisions accelerate, and accountability becomes shared rather than enforced. Execution improves not through pressure, but through clarity and alignment." },
    { title: "Vision & Strategic Planning", 
      body: "Set direction with a compelling vision and a practical, measurable plan to reach it.", 
      detail: "In periods of uncertainty, organizations do not suffer from a lack of ideas, they suffer from a lack of direction. And sticking to a \"plan\" won't get you to the destination when times change. A compelling vision provides that direction, but only when it is paired with a resilient and flexible strategic process that people trust and can act on.\n\
        I help leadership teams craft visions that are both aspirational and grounded - anchored in reality, informed by context, and clearly connected to strategic choices. From there, we translate vision into a system of measurable priorities that guide decision-making and resource allocation in a strategic framework that allows for resilience in times of change.\n\
        The result is focus. Everyone is moving in the same direction, regardless of the waves of change. Leaders gain confidence in where to invest time and energy, teams understand what matters most, and the organization moves forward with coherence rather than noise." },
    { title: "Strategic Facilitation", 
      body: "Plan and run high-impact workshops and executive offsites that drive decisions and shared ownership.", 
      detail: "High-stakes meetings are where momentum and strategy either advance or stall. Well-designed workshops and executive offsites create space for the conversations that matter most: decisions, alignment, and shared ownership.\n\
        I design and facilitate high-impact sessions that respect leaders’ time and drive real outcomes. An intentional balance is struck between talk, action, co-creation, and design. Every session has a clear purpose, engaging structure, and an intentional flow, from framing the challenge, to surfacing perspectives, to making commitments that stick.\n\
        The value of strategic facilitation is not only the transformative impact of the event itself, but what happens after. When people leave aligned, committed, and clear on next steps, progress accelerates, and the work accelerates long after the room clears, delivering lasting impact and measurable results." }
  ];
  const playbooks = [
    { title: "ROI of Change Playbook", 
      target: "_blank", 
      href: "https://tigerhall.com/playbooks/how-to-measure-roi-in-a-change-initiative-a-playbook-for-proving-the-value-of-transformation-efforts" },
    { title: "Building the Business Case for Transformation", 
      target: "_blank", 
      href: "https://tigerhall.com/change-activation/how-to-build-the-business-case-for-resource-investments" },
    { title: "Building A Future-Proof Transformation Office", 
      target: "_blank", 
      href: "https://tigerhall.com/change-activation/building-a-future-proof-transformation-office" }
  ];
  const webinars = [
    { title: "Change Activation 1: Fundamentals", 
      target: "_blank", 
      href: "https://tigerhall.com/change-activation/the-fundamentals-of-change-activation" },
    { title: "Measuring the ROI of Change", 
      target: "_blank", 
      href: "https://tigerhall.com/change-activation/measure-the-roi-of-change-transformation" },
    { title: "Overcoming Change Fatigue by Running Change Like a Marketer", 
      target: "_blank", 
      href: "https://tigerhall.com/change-activation/overcoming-change-fatigue-by-running-change-like-a-marketer"}
  ];
  const podcasts = [
    { title: "Building the Business Case for Change", 
      target: "_blank", 
      href: "#" },
    { title: "CFOs Don’t Fund Feelings", 
      target: "_blank", 
      href: "#" }
  ];

  return (
    <div>
      <header className="sticky z-10 top-0 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight no-underline text-black">ARIC WOOD</a>
          <nav className="flex gap-4 text-xs uppercase tracking-widest">
            {[["#home","Home"],["#focus-areas","Focus Areas"],["#resources","Publications"],["#book","Book"],["#bio","Bio"],["#contact","Contact"]].map(([href,label])=> (
              <a key={href} href={href} className="text-black">{label}</a>
            ))}
          </nav>
        </div>
      </header>
      
      <main id="home">
        <section id="hook" className="border-b border-gray-200">
          <div className="container py-8 double-header:py-16 double-header:grid double-header:grid-cols-[max-content_1fr] double-header:gap-6">
            <div className="w-full min-w-3xs max-w-[400px]">
              <h1 className="text-3xl double-header:text-5xl text-transforma-red leading-tight tracking-tight m-0 pb-3">Strategy to Reality</h1>
              <p>My work and ideas across Strategy Activation, Change & Transformation, Vision & Strategic Planning, and Facilitation.</p>
              <div className="flex gap-3 flex-wrap py-3">
                <a href="#publications" className="btn btn-solid">View Publications →</a>
                <a href="#contact" className="btn btn-outline">Contact Me →</a>
              </div>
            </div>
            <div className="w-full min-w-3xs max-w-[400px] double-header:min-w-[400px] double-header:max-w-none">
              <img src="/arrows.jpeg" alt="colorful arrows" className="w-full h-full object-contain object-top pt-3" />
            </div>
          </div>
        </section>

        <section id="focus-areas" className="border-b border-gray-200">
          <div className="container py-6 md:py-12">
            <h2 className="text-2xl m-0">Focus Areas</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
              {focus.map((f) => (
                <Expanding_Card key={f.title} title={f.title} body={f.body}/>
              ))}
            </div>
            <div>
              {focus.map((f) => (
                <div key={f.title} id={f.title.replaceAll(" ", "_") + "_Expansion_Content"} className="container expanding-content-from-card" style={{ display: "none" }}>
                  <p className="mt-4" dangerouslySetInnerHTML={{ __html: f.detail.replace(/\n/g, "<br /><br />")}}></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="border-b border-gray-200">
          <div className="container py-6 md:py-12">
            <h2 className="text-2xl m-0">Publications</h2>
            <p className="mt-2">Download playbooks, view webinars, or listen to podcasts.</p>

            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-widest m-0">Playbooks</h3>
              <ul className="list-none p-0 mt-2 border-y border-gray-200">
                {playbooks.map((p) => (
                  <a key={p.title} target="_blank" href={p.href} className="no-underline">
                    <li className="flex justify-between py-3 border-b border-gray-100">
                      <span>{p.title}</span>
                      <p className="text-black dummy-link">Open →</p>
                    </li>
                  </a>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-widest m-0">Webinars</h3>
              <ul className="list-none p-0 mt-2 border-y border-gray-200">
                {webinars.map((w) => (
                  <a key={w.title} target="_blank" href={w.href} className="no-underline">
                    <li className="flex justify-between py-3 border-b border-gray-100">
                      <span>{w.title}</span>
                      <p className="text-black dummy-link">View →</p>
                    </li>
                  </a>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-widest m-0">Podcasts</h3>
              <ul className="grid gap-2 sm:grid-cols-2 list-none p-0 mt-2">
                {podcasts.map((p) => (
                  <a key={p.title} target="_blank" href={p.href} className="no-underline">
                    <li className="card flex items-center justify-between">
                      <span>{p.title}</span>
                      <p className="text-black dummy-link">Listen →</p>
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="book" className="border-b border-gray-200">
          <div className="container py-6 md:py-12 grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl m-0">The Strategy Activation Playbook</h2>
              <p className="mt-3">Organizations spend over $160 billion a year hiring consultants to develop and execute strategies, and yet 80% of corporate strategies fail. Why? Because we forget the most important factor in successfully executing strategy: people.</p>
              <p className="mt-3">With <em>The Strategy Activation Playbook</em>, I share a practical methodology to align and activate the people in your organization to execute your strategy and realize your vision—communicating clearly, equipping teams, and embedding new ways of working.</p>
              <div className="flex gap-3 mt-4 flex-wrap">
                <a target="_blank" href="https://www.amazon.com/Strategy-Activation-Playbook-Practical-Strategies/dp/1637741820?ref_=ast_author_dp&th=1&psc=1" className="btn btn-red">Purchase on Amazon →</a>
                <a href="#contact" className="btn btn-outline">Book a Talk →</a>
              </div>
            </div>
            <div>
              <img src="/book-cover.jpg" alt="Strategy Activation Playbook Cover" className="w-full h-full sm:max-w-119 object-contain rounded-2xl border border-gray-200" />
              <p className="mt-2 text-xs">Cover of The Strategy Activation Playbook</p>
            </div>
          </div>
        </section>

        <section id="bio" className="border-b border-gray-200">
          <div className="container py-6 md:py-12 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-2xl m-0">Bio</h2>
              <p className="mt-3">Aric Wood is a seasoned leader in organizational transformation, with over two decades of experience guiding Fortune 500 companies through strategic change. As CEO of XPLANE, a global design consultancy, he bridged the gap between strategy and execution using visual thinking and human-centered design. He also served as Chief Strategy Officer of Tigerhall, an AI-enabled SaaS platform to accelerate change activation at scale.</p>
              <p className="mt-3">Aric is the author of <em>The Strategy Activation Playbook</em>. His insights have been featured in Forbes, CNN, Business Week, Entrepreneur, and Inc. Magazine. He has served as an Adjunct Professor at PNCA and Arizona State University, and is a sought-after speaker on strategy activation and transformation worldwide.</p>
              <p className="mt-3">He is the founder and Managing Partner of Transformation Architects, and serves on the global Board of Directors for the Association of Change Management Professionals (ACMP) and the Advisory Board of the Executive Council for Leading Change (ECLC).</p>
              <p className="mt-3">With leadership roles at Intuit and Epinions.com, plus strategy work at Bain & Company, Aric brings deep experience in business strategy and innovation. He has also led and served on multiple nonprofit and for‑profit boards. He holds a BA from Johns Hopkins University and an MBA from Harvard Business School.</p>
            </div>
            <div className="lg:col-span-2">
              <img src="/AW5.jpg" alt="Aric Wood headshot" className="w-full sm:max-w-119 object-contain rounded-2xl border border-gray-200" />
              <div className="flex gap-3 mt-3 text-sm">
                <a target="_blank" href="#" className="btn btn-outline">Media Kit</a>
                <a target="_blank" href="https://www.linkedin.com/in/aric-wood-588272/" className="btn btn-outline">LinkedIn</a>
              </div>
              <p className="mt-2 text-xs">(Media Kit link is currently a placeholder, sorry! ^_^)</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container py-6 md:py-12">
            <h2 className="text-2xl m-0">Contact</h2>
            <p className="mt-2">For speaking, advisory, or collaboration inquiries.</p>
            <Contact_Form/>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200">
        <div className="container py-6 text-sm">© {new Date().getFullYear()} Aric Wood</div>
      </footer>
    </div>
  );
}
