import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-indigo-500/10" aria-hidden />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 py-10">
        <header className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-6 py-4 backdrop-blur">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Starter</p>
            <h1 className="text-2xl font-semibold text-white">DAO dApp</h1>
          </div>
          <ConnectButton />
        </header>

        <main className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Ready to build</h2>
            <p className="mt-3 text-sm text-slate-300">
              You have wagmi, RainbowKit, viem, and Tailwind pre-wired. Update the contracts and ABI
              exports, then hook your UI into the deployed addresses.
            </p>
          </section>

          <section className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Local workflow</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>pnpm web:dev — frontend dev server</li>
              <li>pnpm anvil:start — local chain</li>
              <li>pnpm contracts:compile — Hardhat artifacts exported to the app</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
