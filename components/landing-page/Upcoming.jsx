const Upcoming = () => {
  return (
    <section id="roadmap" className="bg-dark-light px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-6 text-5xl font-black md:text-6xl">
            What We&apos;re Building
          </h2>
          <p className="text-text-gray text-xl">
            Upcoming features and improvements on our roadmap
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Roadmap Item 1 */}
          <div className="group rounded-xl border border-border-dark bg-dark p-6 transition-all duration-300 hover:border-white">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">
                SHIPPING
              </span>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <h3 className="mb-3 text-xl font-bold">Vector Search API</h3>
            <p className="text-sm leading-relaxed text-text-gray">
              Lightning-fast semantic search across massive datasets with our
              dedicated API endpoint.
            </p>
            <div className="mt-4 border-t border-border-dark pt-4">
              <span className="text-xs text-text-gray">Q4 2024</span>
            </div>
          </div>

          {/* Roadmap Item 2 */}
          <div className="group rounded-xl border border-border-dark bg-dark p-6 transition-all duration-300 hover:border-white">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-white bg-dark-lighter px-3 py-1 text-xs font-bold text-white">
                IN PROGRESS
              </span>
              <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-500"></div>
            </div>
            <h3 className="mb-3 text-xl font-bold">Mobile SDKs</h3>
            <p className="text-sm leading-relaxed text-text-gray">
              Native iOS and Android libraries for seamless mobile integration.
            </p>
            <div className="mt-4 border-t border-border-dark pt-4">
              <span className="text-xs text-text-gray">Q1 2025</span>
            </div>
          </div>

          {/* Roadmap Item 3 */}
          <div className="group rounded-xl border border-border-dark bg-dark p-6 transition-all duration-300 hover:border-white">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-border-light bg-dark-lighter px-3 py-1 text-xs font-bold text-text-gray">
                PLANNED
              </span>
              <div className="h-2 w-2 rounded-full bg-border-light"></div>
            </div>
            <h3 className="mb-3 text-xl font-bold">Team Collaboration</h3>
            <p className="text-sm leading-relaxed text-text-gray">
              Shared workspaces, permissions, and real-time collaboration for
              teams.
            </p>
            <div className="mt-4 border-t border-border-dark pt-4">
              <span className="text-xs text-text-gray">Q2 2025</span>
            </div>
          </div>

          {/* Roadmap Item 4 */}
          <div className="group rounded-xl border border-border-dark bg-dark p-6 transition-all duration-300 hover:border-white">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-border-light bg-dark-lighter px-3 py-1 text-xs font-bold text-text-gray">
                PLANNED
              </span>
              <div className="h-2 w-2 rounded-full bg-border-light"></div>
            </div>
            <h3 className="mb-3 text-xl font-bold">Tone Customization</h3>
            <p className="text-sm leading-relaxed text-text-gray">
              Fine-grained control over AI output style, voice, and personality.
            </p>
            <div className="mt-4 border-t border-border-dark pt-4">
              <span className="text-xs text-text-gray">Q2 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Upcoming;
